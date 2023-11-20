'''
Jere Perisic
Scraper for public art portland (https://www.publicartportland.org)
Just run it, and the images and their links will be saved in the directory
'''

from bs4 import BeautifulSoup
import requests
import os
from urllib.parse import urljoin

directory = 'muse_images_folder'
links_file = 'image_links.txt'


def get_link_for_site():
    if not os.path.exists(directory):
        os.makedirs(directory)

    link = "https://www.publicartportland.org/"
    res = requests.get(link).text
    soup = BeautifulSoup(res, 'html.parser')
    find_div = soup.find('div', class_='isotope')
    images = find_div.select('div img')

    with open(links_file, 'w') as links_file_handle:
        for x in range(len(images)):
            image_url = images[x]['src']
            if "/uploads/" in image_url:
                absolute_url = urljoin(link, image_url)

                img_data = requests.get(absolute_url).content
                img_name = str(image_url.split('/')[-1])

                with open(os.path.join(directory, img_name), 'wb') as handler:
                    handler.write(img_data)

                links_file_handle.write(f'{absolute_url}\n')


if __name__ == "__main__":
    get_link_for_site()
