from datetime import datetime
from app import db

publisher_pieces = db.Table('publisher_pieces',
    db.Column('piece_id', db.Integer, db.ForeignKey('piece.id')),
    db.Column('publisher_id', db.Integer, db.ForeignKey('publisher.id')))

favorited_pieces = db.Table('favorited_pieces',
    db.Column('piece_id', db.Integer, db.ForeignKey('piece.id')),
    db.Column('user_id'), db.Integer, db.ForeignKey('user.id'))

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), index=True, unique=True)
    studied = db.Column(db.Boolean, nullable=True)
    favorites = db.relationship('Piece', backref='favorite', lazy='dynamic')

    def add_favorite(self, piece):
        self.favorites.append(piece)
        db.session.commit()

    def add_studied(self, piece):
        self.studied.append(piece)
        db.session.commit()

    def add_need_to_study(self, piece):
        self.need_to_study.append(piece)
        db.session.commit()

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
    studied = db.Column(db.Boolean, nullable=True)
    favorite = db.Column(db.Boolean, nullable=True)
    need_to_learn = db.Column(db.Boolean, nullable=True)
    composer_id = db.Column(db.Integer, db.ForeignKey('composer.id'))
    favorited_by = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Piece {}'.format(self.title)

class Publisher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(244))
    piece_id = db.Column(db.Integer, db.ForeignKey('piece.id'))

    def __repr__(self):
        return '<Publisher {}'.format(self.name)
