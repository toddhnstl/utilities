Start up a new database by switching to it. The db does not exist until you create a collection.
use travel_db
Show the current db by running db.
db
Show current databases in existence
show dbs
Create a collection
db.createCollection("destinations")
See all collections in a database
show collections
Insert data into the travel_db database with this command.
NOTE: This will also create the collection automatically, the contents of the insert are basically a JavaScript object, and include an array.
db.destinations.insert({"continent": "Africa", "country": "Morocco",
                        "major_cities": ["Casablanca", "Fez", "Marrakech"]})
As a class, come up with 3-5 more countries and insert them into the db using the same syntax as above.
db.destinations.insert({"continent": "Europe", "country": "France",
                        "major_cities": ["Paris", "Marseille", "Bordeaux"]})

db.destinations.insert({"continent": "North America", "country": "USA",
                        "major_cities": ["Washington DC", "New York City", "San Francisco"]})
Observe where the data was entered in the MongoDB instance (in mongod)
Find all data in a Collection with db.[COLLECTION_NAME].find()
The MongoDB _id was created automatically.
This id is specific for each doc in the collection.
db.destinations.find()
Adding .pretty() makes the data more readable.
db.destinations.find().pretty()
Find specific data by matching a field.
db.destinations.find({"continent": "Africa"})
db.destinations.find({"country": "Morocco"})
Try a few queries with the examples we came up with as a class.
Also, pick something that will find more than one entry so we can see how it will return all matches.
Find specific data by matching an _id.
db.destinations.find({_id: ObjectId("<ID Number Here>")})

db.destinations.find({_id: ObjectId("5416fe1d94bcf86cd785439036")})


use classDB

db.classroom.insert({name: 'Mariah', age: 23, favorite_python_library: 'Seaborn', hobbies: ['Coding', 'Reading', 'Running']})

db.classroom.insert({name: 'Ricky', age: 34, favorite_python_library: 'Matplotlib', hobbies: ['Not Coding', 'Not Reading', 'Not Running', 'Guitar']})

db.classroom.insert({name: 'Srikanth', age: 28, favorite_python_library: 'Pandas', hobbies: ['Netflix', 'Guitar', 'Traveling']})

A list of everyone of a certain age.
db.classroom.find({age: 23}).pretty()

An entry for a single person.
db.classroom.find({name: 'Ricky'}).pretty()


db
use travel_db

* Insert
db.destinations.insert({'country': 'Egypt', 'continent': 'Africa', major_cities: ['Cairo', 'Luxor']})
db.destinations.insert({'country': 'Nigeria', 'continent': 'Africa', major_cities: ['Lagos', 'Kano']})

* update
db.destinations.update({"country": "Egypt"}, {$set: {"continent": "Antarctica"}})

* update all (multi)
db.destinations.update({"continent": "Africa"}, {$set: {"continent": "Antarctica"}}, {multi: true})

* OR THIS
db.destinations.updateMany({"continent": "Africa"}, {$set: {"continent": "Antarctica"}})

* push to array
db.destinations.update({"country": "Morocco"}, {$push: {"major_cities": "Agadir"}})

* UPSERT
The upsert option updates a document if one exists; it otherwise creates a new document.
db.destinations.update({'country': 'Canada'}, {$set: {'capital': 'Ottawa'}}, {upsert: true})

* Show how to delete an entry with db.[COLLECTION_NAME].remove({justOne: true}).
db.destinations.remove({"country": "Morocco"}, {justOne: true})

* Show how to empty a collection with db.[COLLECTION_NAME].remove().
db.destinations.remove({})

* Show how to drop a collection with db.[COLLECTION_NAME].drop().
db.destinations.drop()

* Show how to drop a database
db.dropDatabase()