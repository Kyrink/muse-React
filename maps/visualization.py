import pandas as pd
import folium
from folium.plugins import MarkerCluster

m = folium.Map(location=[43.6231, -70.4007], tiles='OpenStreetMap', zoom_start=12)

folium.Marker(location=[43.65694, -70.27833], popup="Hadlock Field Family Sculpture", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.652882, -70.266602], popup="Henry Wadsworth Longfellow Statue", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.657140,-70.258940], popup="Our Lady of Victories", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.65022426291442,-70.27626060655166], popup="Thomas Brackett “Czar” Reed", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.65756444769408, -70.25753617286682], popup="Michael", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.65871322509997, -70.27210937271118], popup="The Hiker, Spanish War Memorial", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.6473301, -70.3104787], popup="Playing Bears", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.6473301, -70.3103787], popup="A Spirit Of Its Own", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.6473301, -70.3102787], popup="Link", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.6473301, -70.3101787], popup="Acrobatic Dogs", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.6598936, -70.2465363], popup="Standing Bear", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.6583394, -70.1983239], popup="Lion's Head", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.6703594, -70.2842153], popup="Luminous Arbor", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.65871322509997, -70.27200937271118], popup="Great Black Hawk", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.6715641, -70.2965459], popup="Passing the Torch", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.65871322509997, -70.27230937271118], popup="Pinecone", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.654671, -70.257256], popup="John Ford Statue", icon=folium.Icon(color='blue')).add_to(m)
folium.Marker(location=[43.6569416, -70.2561206], popup="Maine Lobsterman", icon=folium.Icon(color='blue')).add_to(m)


m.save('index.html')