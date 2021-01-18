from flask import render_template, flash, redirect, url_for, jsonify, request, make_response
from app import app, db
from werkzeug.urls import url_parse
from daniels_scrape import daniels_scrape
from app.forms import LoginForm, ComposerSearchForm, RegistrationForm, PieceCommentForm, AddToFavorites
from app.models import Composer, Piece, Publisher, User, Comment
from flask_login import logout_user, login_required, current_user, login_user
from bs4 import BeautifulSoup
import urllib.parse
import requests
import json


@app.route('/', methods=["GET", "POST"])
@app.route('/index', methods=["GET", "POST"])
def index():
    search_form = ComposerSearchForm()
    login_form = LoginForm()
    signup_form = RegistrationForm()

    return render_template('landing.html', login_form=login_form, signup_form=signup_form, search_form=search_form)


@app.route('/login', methods=["GET", "POST"])
def login():

    if request.method == "POST":
        req = request.get_json()
        print(req)

        user = User.query.filter_by(username=req.get('username')).first()
        if user is None or not user.check_password(req.get('password')):
            res = make_response(jsonify(
                {"update": "failure", "message": "Please enter a valid username and password"}), 404)
            return res
        login_user(user)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')

        res = make_response(
            jsonify({"update": "success", "message": "Logging you in."}), 200)
        return res


@app.route('/register', methods=["GET", 'POST'])
def register():
    if request.method == "POST":

        
        test = request.get_json()
       
        # make sure user does not exis in DB
        username = User.query.filter_by(username=test.get("username")).first()
        if username is not None:
            print('username is not none')
            return make_response(jsonify({"update": "failure", "field":"username", "message": "There is already a user with that username"}), 404)
        
        # Make sure email does not exist in DB
        email = User.query.filter_by(email=test.get("email")).first()
       
        if email is not None:
            return make_response(jsonify({"update": "failure", "field": "email", "message": "There is already a user with that email"}), 404)

        user = User(username=test.get("username"), email=test.get("email"))
        user.set_password(test.get("password"))
        db.session.add(user)
        db.session.commit()

       


        login_user(user)
        
        return make_response(jsonify({"update": "success", "message": "User created"}), 201)


        




@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))


@app.route('/homepage')
@login_required
def homepage():

    search_form = ComposerSearchForm()
    user = User.query.filter_by(username=current_user.username).first()
    print(user)
    return render_template('homepage.html', search_form=search_form, user=user)


@app.route('/concert_builder')
@login_required
def concert_builder():
    search_form = ComposerSearchForm()
    user = User.query.filter_by(username=current_user.username).first()
    return render_template('concertbuilder.html', search_form=search_form, user=user)


@app.route('/browse_composers')
@login_required
def browse_composers():

    search_form = ComposerSearchForm()
    login_form = LoginForm()
    signup_form = RegistrationForm()

    if current_user.is_authenticated:
        user = User.query.filter_by(username=current_user.username).first()

        return render_template('browse_composers.html', user=user, login_form=login_form, signup_form=signup_form, search_form=search_form)
    return render_template('browse_composers.html', login_form=login_form, signup_form=signup_form, search_form=search_form)


@app.route('/composers', methods=["POST"])
# @login_required
def composers():

    response = request.get_json()

    
    search_term = response['searchTerm']

    
    res = Composer.query.filter(Composer.name.ilike(f"%{search_term}%")).all()
    list_composers = json.dumps([{"name": composer.name} for composer in res])

    return jsonify({"success": True, "composers": list_composers})


@app.route('/search_favorites', methods=["GET", "POST"])
def search_favorites():
    user = User.query.filter_by(username=current_user.username).first()
    response = request.get_json()
    user_search_entry = response['searchTerm']
   

    res = Composer.query.filter(
        Composer.name.ilike(f"%{user_search_entry}%")).all()
    composer_names = [composer.name for composer in res]
    matching_favorites = [
        f for f in user.favorites if composer_names[0] in f.composer.name]
    json_faves = json.dumps([{"title": piece.title,
                              "composer": piece.composer.name,
                              "instrumentation": piece.instrumentation,
                              "duration": piece.duration,
                              "composer_nationality": piece.composer.nationality,
                              "composer_dates": piece.composer.years} for piece in matching_favorites], sort_keys=True, indent=4)

    return jsonify({"success": True, "favorites": json_faves})


@app.route('/composer/<composer_name>', methods=["GET", "POST"])
@login_required
def composer(composer_name):
    search_form = ComposerSearchForm()
    comment_form = PieceCommentForm()
    add_to_favorites_button = AddToFavorites()

    login_form = LoginForm()
    signup_form = RegistrationForm()

    # INCLUDE LOGIN FORM
    if login_form.validate_on_submit():
        user = User.query.filter_by(username=login_form.username.data).first()
        # DO VALIDATION CLIENT SIDE. NO NEED FOR FLASK VALIDATION
        if user is None or not user.check_password(login_form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('index'))
        login_user(user)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')
        return redirect(url_for('homepage'))

    # INCLUDE SIGN UP FORM
    if signup_form.validate_on_submit():
        user = User(username=signup_form.username.data,
                    email=signup_form.email.data)
        user.set_password(signup_form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user.')
        return redirect(url_for('homepage'))

    composer_name = urllib.parse.unquote(composer_name)
    composer_name = composer_name.split('/')[-1]
    res = requests.get(
        f'https://www.googleapis.com/customsearch/v1?key=AIzaSyC72emsapcuXsF64Hrn7ca_9xIbAUbn7DY&cx=014124391945830086859:aisrauxjejy&q=${composer_name}')

    composer = Composer.query.filter_by(name=composer_name).first_or_404()

    if composer == None:
        flash('No results. Try a different search.')
        return render_template('landing.html', search_form=search_form)

    last_name = composer.name.split(',')[0]

    try:

        user = User.query.filter_by(username=current_user.username).first()
        return render_template('composer.html', user=user, composer=composer, search_form=search_form, comment_form=comment_form, add_to_favorites_button=add_to_favorites_button)
    except:

        return render_template('composer.html', composer=composer, search_form=search_form, comment_form=comment_form, add_to_favorites_button=add_to_favorites_button, login_form=login_form, signup_form=signup_form)


@app.route('/piece_detail/<piece_title>', methods=["GET", "POST"])
@login_required
def piece_detail(piece_title):
    print(piece_title)
    piece_title = urllib.parse.unquote(piece_title)
    print(piece_title)
    try:
        piece = Piece.query.filter(Piece.title.ilike(
            f"%{piece_title}%")).first().as_dict()
        print(piece)
    except:
        print("Recursion Error.")

    return jsonify({"succcess": True, "piece": piece})


@app.route('/add_favorite/<piece_title>', methods=["POST"])
def add_favorite(piece_title):

    piece_title = urllib.parse.unquote(piece_title)
    piece = Piece.query.filter(Piece.title.ilike(f"%{piece_title}")).first()
    u = User.query.filter_by(username=current_user.username).first()
    u.add_favorite(piece)

    return jsonify({"success": True, "message": "Piece added to favorites!"})


@app.route('/add_piece_to_favorites', methods=["POST"])
def add_piece_to_favorites():
    req = request.get_json()
    piece_title = req.get("pieceTitleSend")
    print(piece_title)
    piece = Piece.query.filter(Piece.title.ilike(f"%{piece_title}")).first()
    user = User.query.filter_by(username=current_user.username).first()
    user.add_favorite(piece)

    for fave in user.favorites:
        print(fave.title)

    return jsonify({"success": True, "message": "Piece added to favorites"})


@app.route('/browse_composer_list', methods=["GET", "POST"])

def browse_composer_list():

    if request.method == 'POST':
        req = request.get_json()
        letter = req.get("letter")
        composers = Composer.query.all()
        letter_array = []

        for composer in composers:
            if letter in composer.name[0]:
                letter_array.append(composer.name)
        return jsonify({"success": True, "letterArray": letter_array})

    main_array = []
    letter_string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    composers = Composer.query.all()
    for letter in letter_string:
        letter_array = []
        for composer in composers:
            if letter in composer.name[0]:
                letter_array.append(composer.name)
        main_array.append(letter_array)

    return jsonify({"success": True, "composers_array": main_array})


@app.route('/add_comment', methods=["GET", "POST"])
def add_comment():

    req = request.get_json()
    user = User.query.filter_by(username=current_user.username).first()
    comment = Comment(body=req["body"], author=user)
    piece = Piece.query.filter(Piece.title.ilike(f'%{req["piece"]}')).first()

    user.add_comment(comment)
    piece.add_comment(comment)

    res = make_response(
        jsonify({"message": "OK", "piece": piece.as_dict()}), 200)

    return res

@app.route('/pieces', methods=["GET"])
def pieces():
    req = request.get_json()
    # pieces = Piece.query.filter(id <= '100').all()
    piece = Piece.query.first()
    # res = make_response(
    #     jsonify({
    #         "message": "OK",
    #         "pieces": [p.as_dict() for p in pieces]}), 
    #         200
    #     )
    res = make_response(
    jsonify({
        "message": "OK",
        "pieces": piece.as_dict()}), 
        200
    )

    # with open('data.txt', 'w') as outfile:
    #     json.dump(res, outfile)


    return res
