from app import app, db
from app.models import Composer, Piece, Publisher, User, Comment

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Composer': Composer, 'Piece': Piece, 'Publisher':Publisher, 'User':User, 'Comment': Comment}
