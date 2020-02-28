from flask import render_template, flash, redirect, url_for, jsonify, request
from app import app, db
from daniels_scrape import daniels_scrape
from app.forms import LoginForm, ComposerSearchForm
from app.models import Composer, Piece, Publisher, User, Comment
from flask_login import logout_user, login_required
import urllib.parse
import requests
import wikipedia
import json



@app.route('/', methods=["GET", "POST"])
@app.route('/index', methods=["GET", "POST"])
#@login_required
def index():
    search_form = ComposerSearchForm()
    if search_form.validate_on_submit():
        user_search = search_form.search.data
        composer = Composer.query.filter(Composer.name.ilike("%{}%".format(user_search))).first()
        if composer == None:
            flash('No results. Try a different search')
            return render_template('index.html', search_form=search_form)

        last_name = composer.name.split(',')[0]
        composer_images = wikipedia.page(composer.name).images
        matching = [img for img in composer_images if last_name in img and '.jpg' in img][0]

        
        return render_template('index.html', composer=composer, search_form=search_form, matching=matching)
    return render_template('index.html', search_form=search_form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        return redirect(url_for('index'))
    return render_template('login.html', title='Sign In', form=form)


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/composers', methods=["POST"])
def composers():

    composer_name = request.form.get("search-field")
    res = Composer.query.filter(Composer.name.ilike(f"%{composer_name}%")).all()
    list_composers = json.dumps([{"name": composer.name} for composer in res])

    return jsonify({"success": True, "composers": list_composers})


@app.route('/composer/<composer_name>', methods=["GET", "POST"])
def composer(composer_name):

    #composer_name comes in with %20 in the spaces. Lines below properly format it for database query.
    composer_name = urllib.parse.unquote(composer_name)
    composer_name = composer_name.split('/')[-1]

    
    composer = Composer.query.filter_by(name=composer_name).first_or_404()
    if composer == None:
            flash('No results. Try a different search')
            return render_template('index.html', search_form=search_form)
    
    last_name = composer.name.split(',')[0]
    composer_images = wikipedia.page(composer.name).images
    try:
        matching = [img for img in composer_images if last_name in img and '.jpg' in img][0]
    except IndexError:
        return render_template('composer.html', composer=composer)

    
    
    return render_template('composer.html', composer=composer, matching=matching)


@app.route('/piece_detail/<piece_title>', methods=["GET","POST"])
def piece_detail(piece_title):
    piece_title = urllib.parse.unquote(piece_title)
    piece = Piece.query.filter(Piece.title.ilike(f"%{piece_title}%")).first().as_dict()
    return jsonify({"succcess": True, "piece": piece})

    
