"""empty message

Revision ID: 9a58345c28d8
Revises: 
Create Date: 2020-08-24 12:50:20.633403

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a58345c28d8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('composer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('years', sa.String(length=120), nullable=True),
    sa.Column('nationality', sa.String(length=120), nullable=True),
    sa.Column('details', sa.String(length=244), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_composer_name'), 'composer', ['name'], unique=True)
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('password_hash', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.create_index(op.f('ix_user_username'), 'user', ['username'], unique=True)
    op.create_table('concert',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=200), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_concert_title'), 'concert', ['title'], unique=False)
    op.create_table('piece',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=400), nullable=True),
    sa.Column('duration', sa.String(length=100), nullable=True),
    sa.Column('movements', sa.String(length=244), nullable=True),
    sa.Column('movement_duration', sa.String(length=244), nullable=True),
    sa.Column('instrumentation', sa.String(length=400), nullable=True),
    sa.Column('soloists', sa.String(length=244), nullable=True),
    sa.Column('percussion', sa.String(length=244), nullable=True),
    sa.Column('notes', sa.String(length=600), nullable=True),
    sa.Column('composer_id', sa.Integer(), nullable=True),
    sa.Column('favorited_by', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['composer_id'], ['composer.id'], ),
    sa.ForeignKeyConstraint(['favorited_by'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('body', sa.String(length=1000), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('piece_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['piece_id'], ['piece.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_comment_body'), 'comment', ['body'], unique=True)
    op.create_index(op.f('ix_comment_timestamp'), 'comment', ['timestamp'], unique=False)
    op.create_table('concert_pieces',
    sa.Column('piece_id', sa.Integer(), nullable=True),
    sa.Column('concert_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['concert_id'], ['concert.id'], ),
    sa.ForeignKeyConstraint(['piece_id'], ['piece.id'], )
    )
    op.create_table('favorited_pieces',
    sa.Column('piece_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['piece_id'], ['piece.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], )
    )
    op.create_table('publisher',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=244), nullable=True),
    sa.Column('piece_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['piece_id'], ['piece.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('publisher_pieces',
    sa.Column('piece_id', sa.Integer(), nullable=True),
    sa.Column('publisher_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['piece_id'], ['piece.id'], ),
    sa.ForeignKeyConstraint(['publisher_id'], ['publisher.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('publisher_pieces')
    op.drop_table('publisher')
    op.drop_table('favorited_pieces')
    op.drop_table('concert_pieces')
    op.drop_index(op.f('ix_comment_timestamp'), table_name='comment')
    op.drop_index(op.f('ix_comment_body'), table_name='comment')
    op.drop_table('comment')
    op.drop_table('piece')
    op.drop_index(op.f('ix_concert_title'), table_name='concert')
    op.drop_table('concert')
    op.drop_index(op.f('ix_user_username'), table_name='user')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    op.drop_index(op.f('ix_composer_name'), table_name='composer')
    op.drop_table('composer')
    # ### end Alembic commands ###
