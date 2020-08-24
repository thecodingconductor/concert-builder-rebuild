import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'secretkey'
    SQLALCHEMY_DATABASE_URI = 'postgres://finhvaihqhsqgg:05e4186a391e90ee393bd92a55d5619dcff75823f06d38e412e54d894a250e73@ec2-3-215-207-12.compute-1.amazonaws.com:5432/d8hhj10bjglhnt'#or 'sqlite:///' + os.path.join(basedir, 'app.db')
        
    SQLALCHEMY_TRACK_MODIFICATIONS = False
