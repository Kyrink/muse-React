## DATA

# Review and user data
- We have used the faker library to generate our users and reviews. The faker library generates fake data types, including names, addresses, and emails. 
- We have made two scripts, one named review_faker.py and the other user_faker.py.
- Currently, user_faker.py makes CSV with passwords currently stored in db as strings, but in the end, passwords will be stored as a hash.
 
# Location data

- We have tried to make location data authentic. Currently, it stores a mix of authentic and made-up locations. We have separated authentic data into separate CSV files.
- Most of the location data is scraped, some manually and some using image_scraper.py.
- Once this CSV file is filled with real locations, it will be the only CSV file used to populate the database. All other tables will depend on user input.
