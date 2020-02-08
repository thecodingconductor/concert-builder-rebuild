from flask import render_template, flash, redirect, url_for
from app import app
from daniels_scrape import daniels_scrape
from app.forms import LoginForm

@app.route('/')
@app.route('/index')
def index():
    daniels_scrape()
    return render_template('index.html')
