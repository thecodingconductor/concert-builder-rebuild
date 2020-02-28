from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from flask_login import UserMixin
from app import login
from app import db

@login.user_loader
def load_user(id):
    return User.query.get(int(id))


publisher_pieces = db.Table('publisher_pieces',
    db.Column('piece_id', db.Integer, db.ForeignKey('piece.id')),
    db.Column('publisher_id', db.Integer, db.ForeignKey('publisher.id')))

favorited_pieces = db.Table('favorited_pieces',
    db.Column('piece_id', db.Integer, db.ForeignKey('piece.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')))

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    studied = db.Column(db.Boolean, nullable=True)
    favorites = db.relationship('Piece', backref='favorite', lazy='dynamic')
    comments = db.relationship('Comment', backref='author', lazy='dynamic')


    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def add_favorite(self, piece):
        self.favorites.append(piece)
        db.session.commit()

    def add_studied(self, piece):
        self.studied.append(piece)
        db.session.commit()

    def add_need_to_study(self, piece):
        self.need_to_study.append(piece)
        db.session.commit()

    def as_dict(self):
        return {'username': self.username,
                'studied': [p.as_dict() for p in self.studied],
                'favorites': [p.as_dict() for p in self.favorites]
        }

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1000), index=True, unique=True)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Post {}>'.format(self.body)


class Composer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), index=True, unique=True)
    years = db.Column(db.String(120))
    nationality = db.Column(db.String(120))
    details = db.Column(db.String(244))
    pieces = db.relationship('Piece', backref='composer', lazy='dynamic')

    def __repr__(self):
        return '<Composer {}'.format(self.name)

    def add_piece(self, piece):
        self.pieces.append(piece)
    
    def as_dict(self):
        return {'name': self.name,
                'years': self.years,
                'nationality': self.nationality,
                'details': self.details,
                'pieces': [p.as_dict() for p in self.pieces]}

class Piece(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(400))
    duration = db.Column(db.String(100))
    movements = db.Column(db.String(244))
    movement_duration = db.Column(db.String(244))
    instrumentation = db.Column(db.String(400))
    soloists = db.Column(db.String(244))
    percussion = db.Column(db.String(244))
    notes = db.Column(db.String(400))
    publishers = db.relationship('Publisher', backref='pieces', secondary=publisher_pieces, lazy='dynamic')
    composer_id = db.Column(db.Integer, db.ForeignKey('composer.id'))
    favorited_by = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Piece {}'.format(self.title)

    def as_dict(self):
        return {"title": self.title,
                "duration": self.duration,
                "movements": self.movements,
                "movement_duration": self.movement_duration,
                "instrumentation": self.instrumentation,
                "soloists": self.soloists,
                "percussion":self.percussion,
                "notes":self.notes,
                "publishers": [pub.as_dict() for pub in self.publishers]
                }
class Publisher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(244))
    piece_id = db.Column(db.Integer, db.ForeignKey('piece.id'))

    def __repr__(self):
        return '<Publisher {}'.format(self.name)

    def as_dict(self):
        return {"name": self.name}

#TODO inlcude SKETCHES!!!
#TODO SPOTIFY PLAYER
#TODO YOUTUBE PLAYER
#TODO BACHTRACK DATA
