from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import StaleElementReferenceException, NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from sqlalchemy import exc
from bs4 import BeautifulSoup
import re

import os
import time

from app.models import Composer, Piece, Publisher
from app import app, db

ignored_exceptions = (NoSuchElementException, StaleElementReferenceException,)

def daniels_scrape():

    url = "https://daniels-orchestral.com"


    driver = webdriver.Firefox()
    driver.implicitly_wait(10)
    driver.get(url)

    log_in = driver.find_element_by_xpath("/html/body/div[2]/div[2]/div/div/div/div/main/div/article/div/div[1]/div/a")

    log_in.click()

    username = driver.find_element_by_id('user_login')
    username.send_keys('tristanconducts')

    pword = driver.find_element_by_id('user_pass')
    pword.send_keys('PassacagliaOp1')

    login_btn = driver.find_element_by_class_name('tml-button')
    login_btn.click()

    composers = driver.find_element_by_xpath('/html/body/header/div/div[2]/div/div[1]/div/ul/li[3]/a')
    composers.click()

    composerletters = driver.find_elements_by_class_name('letterLink')

    for comp_last_initial in range(3, len(composerletters)):
        composerletters = driver.find_elements_by_class_name('letterLink')
        composerletters[comp_last_initial].click()
        comprows = driver.find_elements_by_css_selector('div.composerRow a')
        counter = 0

        for row in range(len(comprows)):
          redo = driver.find_elements_by_css_selector('div.composerRow a')

          redo[row].click()
          composer_soup = BeautifulSoup(driver.page_source, 'html.parser')


          #counter += 1
          works = driver.find_elements_by_css_selector('div.workLink a')
          final = works[:-1]


          for work in range(len(works)):


            new_works = driver.find_elements_by_css_selector('div.workLink a')

            new_works[work].click()
            time.sleep(.5)

            work_source = BeautifulSoup(driver.page_source, 'html.parser')

            if work == 0:
              current_composer = work_source.find(class_='newComposerName').text
              composer_years = work_source.find(class_='newComposerYear').text
              try:
                composer_details = work_source.find(class_='newComposerDetails').text.split('.', 1)[0]
                composer_nationality = work_source.find(class_='newComposerDetails').text.split('.', 1)[1]
              except IndexError:
                composer_details = work_source.find(class_='newComposerDetails').text.split(')', 1)[0]
                composer_nationality = work_source.find(class_='newComposerDetails').text.split(')', 1)[0]
              c = Composer(name=current_composer, years=composer_years, nationality=composer_nationality, details=composer_details)
              try:
                db.session.add(c)
              except exc.IntegrityError:
                db.session().rollback()





            work_title = work_source.find(class_='workTitle').b.text.strip()
            #work_title = work_title.b.text

            work_length = work_source.find(class_='workDuration').text.strip()
            #work_length = work_length.text

            work_movements = ''.join(work_source.find(class_='workMovement').text.split())
                    #must be stripped

            movement_duration = ''.join(work_source.find(class_='workMovementDuration').text.split())
                    #needs to be stripped


            work_details = work_source.find_all(class_='workFormula')
            work_details = work_details[1]

            instrumentation = ''.join(work_details.contents[0].split())

            try:
              soloists = work_source.find(class_='workDetailsBox').text.strip()
            except:
              pass
            try:
              percussion = work_details.find('.workForumla.perc').text.strip()
            except:
              pass

            try:
              notes = work_details.select_one('span').text.strip()
            except:
              pass

            publishers = work_source.find_all(class_='publisher-abbreviation-seo')

            #work_counter += 1
            p = Piece(title=work_title, duration=work_length, movements=work_movements,
                        movement_duration=movement_duration, instrumentation=instrumentation)

            print(work_title, work_length, work_movements, movement_duration, instrumentation)
            try:
              p.percussion = percussion
            except NameError:
              pass
            try:
              p.notes = notes
            except NameError:
              pass
            try:
              p.soloists = soloists
            except NameError:
              pass

            notes = None
            percussion = None
            soloists = None

            
            
            c.add_piece(p)
            db.session.add(p)
            try:
              for i in publishers:
                pub = Publisher(name=i.text)
                p.publishers.append(pub)
            except:
              pass

            try:
              db.session.commit()
            except exc.IntegrityError:
              db.session().rollback()

            if len(works) == 1 or work == (len(works) - 1):
              currentletter = driver.find_elements_by_class_name('letterLink')
              currentletter[comp_last_initial].click()





                    #This may require learning RegEx

                    # work_pubs = work_source.find_all(class_='workSource')
                    # work_pubs = [pub.text.strip() for pub in work_pubs]
                    # print(work_title, work_length, work_pubs)

#daniels_scrape()