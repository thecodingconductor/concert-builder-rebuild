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


concert_pieces = db.Table('concert_pieces',
    db.Column('piece_id', db.Integer, db.ForeignKey('piece.id')),
    db.Column('concert_id', db.Integer, db.ForeignKey('concert.id')))


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    studied = db.relationship('Piece', backref='studied')
    favorites = db.relationship('Piece', backref='favorite', secondary=favorited_pieces, lazy="dynamic")
    comments = db.relationship('Comment', backref='author')
    concerts = db.relationship('Concert', backref='conductor')


    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def add_favorite(self, piece):
        self.favorites.append(piece)
        db.session.commit()
    
    def add_comment(self, comment):
        self.comments.append(comment)
        db.session.commit()

    def add_studied(self, piece):
        self.studied.append(piece)
        db.session.commit()

    def add_concert(self, concert):
        self.concerts.append(concert)
        db.session.commit()

   
    def as_dict(self):
        return {'username': self.username,
                'favorites': [p.as_dict() for p in self.favorites],
                'comments': [p.as_dict() for p in self.comments]
        }


class Concert(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), index=True)
    pieces = db.relationship('Piece', backref="concert", secondary=concert_pieces, lazy='dynamic')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def add_piece(self, piece):
        self.pieces.append(piece)
        db.session.commit()



class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1000), index=True, unique=True)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    piece_id = db.Column(db.Integer, db.ForeignKey('piece.id'))
    
    def __repr__(self):
        return '<Post {}>'.format(self.body)
    
    def as_dict(self):
        return {
            "body": self.body,
            "author": self.author.username,
            "timestamp": self.timestamp
        }


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
    notes = db.Column(db.String(600))
    publishers = db.relationship('Publisher', backref='pieces', secondary=publisher_pieces, lazy='dynamic')
    composer_id = db.Column(db.Integer, db.ForeignKey('composer.id'))
    favorited_by = db.Column(db.Integer, db.ForeignKey('user.id'))
    comments = db.relationship('Comment', backref='piece', lazy='dynamic')

    def __repr__(self):
        return '<Piece {}'.format(self.title)

    def as_dict(self):
        return {"title": self.title,
                "composer": self.composer.name,
                "nationality": self.composer.nationality,
                "years": self.composer.years,
                "duration": self.duration,
                "movements": self.movements,
                "movement_duration": self.movement_duration,
                "instrumentation": self.instrumentation,
                "soloists": self.soloists,
                "percussion":self.percussion,
                "notes":self.notes,
                "comments": [comment.as_dict() for comment in self.comments],
                "publishers": [pub.as_dict() for pub in self.publishers]
                }

    def add_comment(self, comment):
        self.comments.append(comment)
        db.session.commit()


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
#TODO CONCERTS TO SAVE USER CONCERTS. 