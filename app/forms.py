from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired, ValidationError, EqualTo, Length, Email
from app.models import User

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Remember Me')
    login_submit = SubmitField('Sign In')

class ComposerSearchForm(FlaskForm):
    search = StringField('Composer Search', validators=[DataRequired()])
    submit = SubmitField('Search')

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=6, max=20, message="Username must be more than 6 characters and less than 20.")])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=6, max=20, message="Password must be more than 6 characters and less than 20.")])
    password2 = PasswordField('Repeat Password', validators=[DataRequired(), EqualTo('password', message="Passwords must match.")])
    register_submit = SubmitField('Register Now')

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user is not None:
            raise ValidationError('Please use a different username.')
    
    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError('Please use a different email address.')

class PieceCommentForm(FlaskForm):
    comment = TextAreaField('Say something about the piece!')
    submit_comment = SubmitField('Submit Comment')
    add_studied = SubmitField("Add to Pieces Studied List")

class AddToFavorites(FlaskForm):
    add_fave = SubmitField("Add to Favorites")

class AddToConcerts(FlaskForm):
    add_concert = SubmitField("Save to Concerts")

class SearchFavorites(FlaskForm):
    search_favorite = StringField("Search Favorites")