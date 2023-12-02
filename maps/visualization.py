import json
import mysql.connector
import pandas as pd
import folium
from folium.plugins import MarkerCluster

config_file = "../db_src/connectorConfig.json"
with open(config_file, "r") as f:
    config = json.load(f)
    connection_config = config["mysql"]
    conn = mysql.connector.connect(**connection_config)

m = folium.Map(location=[43.6231, -70.4007], tiles='OpenStreetMap', zoom_start=12)
cursor = conn.cursor()

cursor.execute("SELECT latitude, longitude, location_name, location_type FROM artLocation")
locations = cursor.fetchall()

conn.close()
markerCluster = MarkerCluster().add_to(m)
for location in locations:
    lat, lon, popup, type = location

    if lat is not None and lon is not None:
        if type == 'Statue':
            color = 'blue'
        elif type == 'Sculpture':
            color = 'red'
        elif type == 'Music Venue':
            color = 'green'
        elif type == 'Museum':
            color = 'gray'
        elif type == 'Gallery':
            color = 'purple'
        elif type == 'Event Venue':
            color = 'orange'
        folium.Marker(location=[lat, lon], popup=popup, icon=folium.Icon(color=color)).add_to(markerCluster)
    else:
        print("Invalid latitude or longitude values. Skipping Marker creation.")

m.save('index.html')