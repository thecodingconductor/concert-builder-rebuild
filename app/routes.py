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
#import wikipedia
import json



@app.route('/', methods=["GET", "POST"])
@app.route('/index', methods=["GET", "POST"])
def index():
    search_form = ComposerSearchForm()
    login_form = LoginForm()
    signup_form = RegistrationForm()
    
    #INCLUDE LOGIN FORM
    if login_form.validate_on_submit():
        user = User.query.filter_by(username=login_form.username.data).first()
        ## DO VALIDATION CLIENT SIDE. NO NEED FOR FLASK VALIDATION
        if user is None or not user.check_password(login_form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('index'))
        login_user(user)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')
        return redirect(url_for('homepage'))

    #INCLUDE SIGN UP FORM
    if signup_form.validate_on_submit():
        user = User(username=signup_form.username.data, email=signup_form.email.data)
        user.set_password(signup_form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user.')
        return redirect(url_for('homepage'))

    return render_template('landing.html', login_form=login_form, signup_form=signup_form, search_form=search_form)
#search_form=search_form

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('landing'))

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


@app.route('/composers', methods=["POST"])
def composers():

    composer_name = request.form.get("search-bar-field")
    res = Composer.query.filter(Composer.name.ilike(f"%{composer_name}%")).all()
    list_composers = json.dumps([{"name": composer.name} for composer in res])
     #list composers is a string [{"name": "Charpentier, Marc-Antoine"}] for example
    return jsonify({"success": True, "composers": list_composers})


@app.route('/search_favorites', methods=["GET", "POST"])
def search_favorites():
    user = User.query.filter_by(username=current_user.username).first()
    user_search_entry = request.form.get("search-favorites")

    res = Composer.query.filter(Composer.name.ilike(f"%{user_search_entry}%")).all()
    composer_names = [composer.name for composer in res]
    matching_favorites = [f for f in user.favorites if composer_names[0] in f.composer.name]
    json_faves = json.dumps([{"title": piece.title,
                            "composer": piece.composer.name,
                            "instrumentation": piece.instrumentation,
                            "duration": piece.duration,
                            "composer_nationality": piece.composer.nationality,
                            "composer_dates": piece.composer.years} for piece in matching_favorites], sort_keys=True, indent=4)


    return jsonify({"success": True, "favorites": json_faves})
    


@app.route('/composer/<composer_name>', methods=["GET", "POST"])
def composer(composer_name):
    search_form = ComposerSearchForm()
    comment_form = PieceCommentForm()
    add_to_favorites_button = AddToFavorites()

    composer_name = urllib.parse.unquote(composer_name)
    composer_name = composer_name.split('/')[-1]
    res = requests.get(f'https://www.googleapis.com/customsearch/v1?key=AIzaSyC72emsapcuXsF64Hrn7ca_9xIbAUbn7DY&cx=014124391945830086859:aisrauxjejy&q=${composer_name}')

    composer = Composer.query.filter_by(name=composer_name).first_or_404()

    if composer == None:
        flash('No results. Try a different search.')
        return render_template('landing.html', search_form=search_form)
    
    last_name = composer.name.split(',')[0]

    # if comment_form.validate_on_submit():
    #     comment = Comment(body=comment_form.comment.data, author=current_user)
    #     user = User.query.filter_by(username=current_user.username).first()
    #     piece = Piece.query.filter(Piece.title.ilike(f"%{piece_title}")).first()
    #     user.add_comment(comment)
    #     piece.add_comment(comment)

    #     return jsonify({"success": True, "value": "Comment added!"})
    return render_template('composer.html', composer=composer, search_form=search_form, comment_form=comment_form, add_to_favorites_button=add_to_favorites_button)


# @app.route('/composer/<composer_name>', methods=["GET", "POST"])
# def composer(composer_name):

#     form = PieceCommentForm()
    
#     composer_name = urllib.parse.unquote(composer_name)
#     composer_name = composer_name.split('/')[-1]

#     composer = Composer.query.filter_by(name=composer_name).first_or_404()
#     if composer == None:
#             flash('No results. Try a different search')
#             return render_template('index.html', search_form=search_form)
    
#     #get composer images
#     last_name = composer.name.split(',')[0]
#     try:
#         composer_images = wikipedia.page(composer.name).images
#     except: 
#         matching = 'https://via.placeholder.com/300'
#     try:
#         matching = [img for img in composer_images if last_name in img and '.jpg' in img][0]
#     except:
#         return render_template('composer.html', composer=composer, form=form)

    
#     if form.validate_on_submit():
#         if form.submit_comment.data:
#             comment = Comment(body=form.comment.data, author=current_user)
#             user = User.query.filter_by(username=current_user.username).first()
       
#             flash('Your post is now live')
#             return redirect(url_for('composer'))

#     # if add_to_favorites.validate_on_submit():

#     #     if form.add_fave.data:
#     #         soup = BeautifulSoup(page.text, 'html.parser')
#     #         piece_title = soup.find(id='piece-title')
#     #         p = Piece.query.filter_by(title=piece_title).first()
#     #         u = User.query.filter_by(username=current_user.username).first()
#     #         print(p)
#     #         print(u)
#             #u.add_favorite(p)
#             #flash('Piece added to your favorites list!')
            
#     #composer_name comes in with %20 in the spaces. Lines below properly format it for database query.
#     return render_template('composer.html', composer=composer, matching=matching, form=form)


@app.route('/piece_detail/<piece_title>', methods=["GET","POST"])
def piece_detail(piece_title):
    piece_title = urllib.parse.unquote(piece_title)
    try:
        piece = Piece.query.filter(Piece.title.ilike(f"%{piece_title}%")).first().as_dict()
        print(piece)
    except:
        print("Recursion Fuck Up.")
        
    return jsonify({"succcess": True, "piece": piece})

@app.route('/add_favorite/<piece_title>', methods=["POST"])
def add_favorite(piece_title):

    piece_title = urllib.parse.unquote(piece_title)
    piece = Piece.query.filter(Piece.title.ilike(f"%{piece_title}")).first()
    u = User.query.filter_by(username=current_user.username).first()
    u.add_favorite(piece)
    
    return jsonify({"success": True, "message": "Piece added to favorites!"})

@app.route('/add_comment', methods=["GET", "POST"])
def add_comment():

    req = request.get_json()
    user = User.query.filter_by(username=current_user.username).first()
    comment = Comment(body=req["body"], author=user)
    piece = Piece.query.filter(Piece.title.ilike(f'%{req["piece"]}')).first()
    
    user.add_comment(comment)
    piece.add_comment(comment)
    


    res = make_response(jsonify({"message": "OK"}), 200)

    return res
    #piece_title = urllib.parse.unquote(piece_title)
    #piece = Piece.query.filter(Piece.title.ilike(f"%{piece_title}")).first()


#@app.route('/add_piece/<piece_title>', methods=["POST"])
#def add_piece(piece_title):
    


# @app.route('/user/<username>')
# #@login_required
# def user(username):
#     user = User.query.filter_by(username=username).first_or_404()
#     return render_template('user.html', user=user)

    
#json.dumps(faves_list)





# if search_form.validate_on_submit():
    #     user_search = search_form.search.data
    #     composer = Composer.query.filter(Composer.name.ilike("%{}%".format(user_search))).first()
    #     #if composer == None:
    #     #    flash('No results. Try a different search')
    #     #    return render_template('index.html', search_form=search_form)

    #     last_name = composer.name.split(',')[0]
    #     #try:
    #     #    composer_images = wikipedia.page(composer.name).images
    #     #    matching = [img for img in composer_images if last_name in img and '.jpg' in img][0]
    #     #except:
    #     #    matching = 'https://via.placeholder.com/300'
        
    #     return render_template('composer.html', composer=composer, search_form=search_form)
    

#     @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if current_user.is_authenticated:
#         return redirect(url_for('index'))
#     form = LoginForm()
#     if form.validate_on_submit():
#         user = User.query.filter_by(username=form.username.data).first()
#         if user is None or not user.check_password(form.password.data):
#             flash('Invalid username or password')
#             return redirect(url_for('login'))
#         login_user(user, remember=form.remember_me.data)
#         next_page = request.args.get('next')
#         if not next_page or url_parse(next_page).netloc != '':
#             next_page = url_for('index')
#         return redirect(url_for('index'))
#     return render_template('login.html', title='Sign In', form=form)

# @app.route('/register', methods=["GET", "POST"])
# def register():
#     if current_user.is_authenticated:
#         return redirect(url_for('index'))
#     form = RegistrationForm()
#     if form.validate_on_submit():
#         user = User(username=form.username.data, email=form.email.data)
#         user.set_password(form.password.data)
#         db.session.add(user)
#         db.session.commit()
#         flash('Congratulations, you are now a registered user.')
#         return redirect(url_for('login'))
#     return render_template('register.html', title='Register', form=form)
