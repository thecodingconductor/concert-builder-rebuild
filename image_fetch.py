import requests


res = requests.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyC72emsapcuXsF64Hrn7ca_9xIbAUbn7DY&cx=014124391945830086859:nr9ypxtecba&q={}&searchType=image".format(composer.name))















# S = requests.Session()
# ENDPOINT = "https://en.wikipedia.org/w/api.php"

# def image_fetch(composer_name):

#     PARAMS = {
#         "action": "query",
#         "format": "json",
#         "titles": composer_name,
#         "prop": "images"
#     }

#     res = S.get(url=ENDPOINT, params=PARAMS)
#     data = res.json()

#     PAGES = data['query']['pages']

#     filename = [img['title'] for k ,v in PAGES.items() for img in v['images']][0]

#     image_src = get_src(filename)

#     return image_src

# def get_src(filename):
#     params = {
#         "action": 'query',
#         'format':'json',
#         'prop':'imageinfo',
#         'iiprop':'url',
#         'titles': filename
#     }

    
#     res = S.get(url=ENDPOINT, params=params)
#     data = res.json()
#     page = next(iter(data["query"]["pages"].values()))
#     image_info = page["imageinfo"][0]
#     image_url = image_info["url"]

#     return image_url