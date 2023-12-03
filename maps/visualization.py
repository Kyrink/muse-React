import json
import mysql.connector
import folium
from folium.plugins import MarkerCluster
import geocoder

config_file = "../db_src/connectorConfig.json"
with open(config_file, "r") as f:
    config = json.load(f)
    connection_config = config["mysql"]
    conn = mysql.connector.connect(**connection_config)

m = folium.Map(location=[43.6590368, -70.2569226], tiles='OpenStreetMap', control_scale=True, zoom_start=12)
ipaddress = geocoder.ip('me')
cursor = conn.cursor()
print()
cursor.execute("SELECT latitude, longitude, address, location_name, location_type FROM artLocation")
locations = cursor.fetchall()

conn.close()
markerCluster = MarkerCluster().add_to(m)
for location in locations:
    lat, lon, address, name, type = location
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
        popup_content = f"<b>Name:</b> {name}<br><b>Address:</b> {address}<br><b>Type:</b> {type}"
        folium.Marker(location=[lat, lon], popup=popup_content, icon=folium.Icon(color=color)).add_to(markerCluster)
    else:
        print("Invalid latitude or longitude values. Skipping Marker creation.")

icon = folium.CustomIcon(
    # icon author iconixar
    icon_image="user.png",
    icon_size=(25, 25),
    icon_anchor=(22, 22),
    popup_anchor=(-3, -20),
)
folium.Marker(
    location=ipaddress.latlng, icon=icon, popup=ipaddress.address
).add_to(m)

m.save('index.html')
