from bs4 import BeautifulSoup
import requests
from app.models import Composer, Piece, Publisher
from app import app, db
from res import res 
from sqlalchemy import exc

res_soup = BeautifulSoup(res, 'html.parser')

box = res_soup.find_all(class_="itembox")

for b in box:
    composer_name = b.find(class_='composer').text
    opera_title = b.find(class_='operatitle').text
    details = b.find_all(class_='infobody')
    details_text = []
    for d in details:
        details_text.append(d.text)
        ' '.join(details_text)

    
    c = Composer.query.filter(Composer.name.ilike(f"%{composer_name}%")).first()
    if c is None:
        c = Composer(name=composer_name)
    try:
        db.session.add(c)
    except exc.IntegrityError:
        db.session().rollback()
        c = Composer.query.filter(Composer.name.ilike(f"%{composer_name}%")).first()

    p = Piece(title=opera_title, notes=details)

    c.add_piece(p)
    db.session.add(p)

    try:
        db.session.commit()
    except:
        db.session().rollback()
