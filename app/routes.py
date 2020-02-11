from flask import render_template, flash, redirect, url_for
from app import app, db
from daniels_scrape import daniels_scrape
from app.forms import LoginForm, ComposerSearchForm
from app.models import Composer, Piece, Publisher
import requests

@app.route('/', methods=["GET", "POST"])
@app.route('/index', methods=["GET", "POST"])
def index():
    search_form = ComposerSearchForm()
    if search_form.validate_on_submit():
        user_search = search_form.search.data
        composer = Composer.query.filter(Composer.name.ilike("%{}%".format(user_search))).first()
        if composer == None:
            flash('No results. Try a different search')
            return render_template('index.html', search_form=search_form)

        # s = requests.Session()
        # url = "https://en.wikipedia.org/w/api.php"
        # params = {
        #     "action": "query",
        #     "format": "json",
        #     "titles": composer.name,
        #     "prop": "images"
        # }
        # res = s.get(url=url, params=params)
        # data = res.json()
        # filename = data['query']['pages'][0]['images'][0]
        

        
        return render_template('index.html', composer=composer, search_form=search_form)
    return render_template('index.html', search_form=search_form)
