from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

migrate = Migrate(compare_type=True)

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate.init_app(app, db)

from app import routes, models
