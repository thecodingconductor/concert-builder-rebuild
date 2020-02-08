from datetime import datetime
from app import db

publisher_pieces = db.Table('publisher_pieces',
    db.Column('piece_id', db.Integer, db.ForeignKey('piece.id')),
    db.Column('publisher_id', db.Integer, db.ForeignKey('publisher.id')))

class Composer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), index=True, unique=True)
    years = db.Column(db.String(120))
    nationality = db.Column(db.String(120))
    details = db.Column(db.String(244))
    pieces = db.relationship('Piece', backref='composer', lazy='dynamic')

    def __repr__(self):
        return '<Composer {}'.format(self.username)

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
    composer_id = db.Column(db.Integer, db.ForeignKey('composer.id'))

    def __repr__(self):
        return '<Piece {}'.format(self.title)

class Publisher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(244))

    def __repr__(self):
        return '<Publisher {}'.format(self.name)
