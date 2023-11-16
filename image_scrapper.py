'''
Jere Perisic
Scrapper for public art portland (https://www.publicartportland.org)
Just run it and the images will download in directory
'''

from bs4 import BeautifulSoup
import requests
import os

directory = 'muse_images_folder'


def get_link_for_site():
    if not os.path.exists(directory):
        os.makedirs(directory)
    link = "https://www.publicartportland.org/"
    res = requests.get(link).text
    soup = BeautifulSoup(res, 'html.parser')
    find_div = soup.find('div', class_='isotope')
    images = find_div.select('div img')
    for x in range(len(images)):
        image_url = images[x]['src']
        if "/uploads/" in image_url:
            img_data = requests.get(image_url).content
            img_name = str(image_url.split('/')[-1])
            with open(directory + '/' + img_name, 'wb') as handler:
                handler.write(img_data)


if __name__ == "__main__":
    get_link_for_site()
