######  OVERWRITE  #########
#####----------------###
#####----------------###
#####  WEEK NUMBER 10  #########
#####  class day 1  #########
########################


##########################
##########################
###   ./01-Read_Census_Data.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# SQLAlchemy
from sqlalchemy import create_engine

# Path to sqlite
database_path = "../Resources/Census_Data.sqlite"


# In[2]:


# Create an engine that can talk to the database
engine = create_engine(f"sqlite:///{database_path}")


# In[4]:


# Query All Records in the the Database
data = engine.execute("SELECT * FROM Census_Data")

for record in data:
    print(record)


# In[ ]:





# In[ ]:




##########################
##########################
###   ./02-IceCreamConnector.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# SQL Alchemy
from sqlalchemy import create_engine

database_path = "../Resources/icecreamstore.sqlite"


# In[2]:


# Create Engine
engine = create_engine(f"sqlite:///{database_path}")


# In[3]:


# Query All Records in the the Database
data = engine.execute("SELECT * FROM icecreamstore")
for record in data:
    print(record)


# In[4]:


# Query Single Record in the the Database
data = engine.execute("SELECT * FROM icecreamstore WHERE Price>=1.25;")
for record in data:
    print(record)

##########################
##########################
###   ./03-SQLIntoPandas.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Pandas
import pandas as pd

# SQL Alchemy
from sqlalchemy import create_engine


# In[2]:


# Create Engine
engine = create_engine(f"sqlite:///{database_path}")
conn = engine.connect()


# In[3]:


# Query All Records in the the Database
data = pd.read_sql("SELECT * FROM Census_Data", conn)


# In[4]:


# Preview the Data
data.head()

##########################
##########################
###   ./04-Read_All_The_SQLs.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Pandas
import pandas as pd

# SQL Alchemy
from sqlalchemy import create_engine


# In[2]:


# Create Engine for census data
census_database_path = "../Resources/Census_Data.sqlite"
engine = create_engine(f"sqlite:///{census_database_path}")
conn = engine.connect()


# In[3]:


# Query All Records in the the City Table
census_data = pd.read_sql("SELECT * FROM Census_Data", conn)


# In[4]:


# Create Engine for zip data
zip_database_path = "../Resources/zip_census.sqlite"
engine = create_engine(f"sqlite:///{zip_database_path}")
conn = engine.connect()


# In[5]:


# Query All Records in the Zip Table
zip_data = pd.read_sql("SELECT * FROM Zip_Census", conn)


# In[6]:


census_data.head()


# In[7]:


zip_data.head()


# In[8]:


# Merge the columns
combined_data = pd.merge(census_data, zip_data, on="CityState", how="inner")


# In[9]:


# Combined Data
combined_data.head()

##########################
##########################
###   ./05-Alchemy.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Dependencies
# ----------------------------------
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()


# In[2]:


from sqlalchemy import Column, Integer, String, Float


# In[3]:


# Create Dog and Cat Classes
# ----------------------------------
class Dog(Base):
    __tablename__ = 'dog'
    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    color = Column(String(255))
    age = Column(Integer)


# In[4]:


class Cat(Base):
    __tablename__ = 'cat'
    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    color = Column(String(255))
    age = Column(Integer)


# In[5]:


# Create a Specific Instance of the Dog and Cat classes
# ----------------------------------
dog = Dog(name="Fido", color='Brown', age=4)
cat = Cat(name="Whiskers", color="Gray", age=7)


# In[6]:


# Create Database Connection
# ----------------------------------
database_path = "pets_db"
engine = create_engine(f"sqlite:///{database_path}")
conn = engine.connect()


# In[7]:


# Create a "Metadata" Layer That Abstracts our SQL Database
# ----------------------------------
Base.metadata.create_all(engine)

# Use this to clear out the db
# ----------------------------------
# Base.metadata.drop_all(engine)


# In[8]:


# Create a Session Object to Connect to DB
# ----------------------------------
from sqlalchemy.orm import Session
session = Session(bind=engine)


# In[9]:


# Add Records to the Appropriate DB
# ----------------------------------
session.add(dog)
session.add(cat)
session.commit()


# In[10]:


# Query the Tables
# ----------------------------------
dog_list = session.query(Dog)
for doggy in dog_list:
    print(doggy.name)


# In[11]:


cat_list = session.query(Cat)
for kitty in cat_list:
    print(kitty.name)


# In[ ]:





# In[ ]:




##########################
##########################
###   ./06-Dog.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Define a class
class Dog():

    # Utilize the Python constructor to initialize the object
    def __init__(self, name, color):
        self.name = name
        self.color = color


# In[2]:


# Create an instance of a class
dog = Dog('Fido', 'brown')


# In[3]:


# Print the object's attributes
print(dog.name)
print(dog.color)


# In[ ]:




##########################
##########################
###   ./07-Surfer.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Define the Surfer Class
class Surfer():

  # Initialize the Surfer constructor 
  def __init__(self, name, hometown, rank):
      self.name = name + " " + "Dude"
      self.hometown = hometown + " " + "Waves"
      self.rank = rank


# In[2]:


# Create an instance of the Surfer Class
surfer = Surfer('Kelly Slater', 'Cocoa Beach', 1)


# In[4]:


# Print the object's attributes
print(surfer.name)
print(surfer.hometown)
print(surfer.rank)


# In[6]:


# ----BONUS----
# Variable to keep track of changes to while loop
go = True
surfers = []


# While loop runs so long as go is True
while go:

  # Ask for user input and store answers within variables
  name = input("What is the surfer's name? ")
  hometown = input("What is the surfer's hometown? ")
  rank = int(input("What is the surfer's rank? "))
  
  # Create a new instance of the Surfer class using these values
  surfer = Surfer(name, hometown, rank)
  surfers.append(surfer)

  # Print the object's attributes
  print(surfer.name)
  print(surfer.hometown)
  print(surfer.rank)

  # Check to see if the user would like to continue
  check = input("Would you like to continue? (y/n) ")
  if(check.lower() == "y"):
    go = True
  else:
    go = False


# In[8]:


for i in surfers:
    print(i.name)


# In[ ]:




##########################
##########################
###   ./08-Classes_With_Methods.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Define the Film class
class Film():

    # A required function to initialize the class object
    def __init__(self, name, length, release_year, language):
        self.name = name
        self.length = length
        self.release_year = release_year
        self.language = language


# In[2]:


# An object belonging to the Film class
star_wars = Film("Star Wars", 121, 1977, "English")


# In[3]:


# Define the Expert class
class Expert():
    
    # A required function to initialize the class object
    def __init__(self, name):
        self.name = name

    # A method that takes another object as its argument
    def boast(self, obj):

        # Print out Expert object's name
        print("Hi. My name is", self.name)
        
        # Print out the name of the Film class object
        print("I know a lot about", obj.name)
        print("It is", obj.length, "minutes long")
        print("It was released in", obj.release_year)
        print("It is in", obj.language)


# In[4]:


# An object belonging to the Film class
superfan = Expert("George Lucas")


# In[5]:


superfan.boast(star_wars)


# In[ ]:




##########################
##########################
###   ./09-Surfer_Extended.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Define the Surfer Class
class Surfer():

    # Keep track of surfer count as they are created
    surferCount = 0

    # Constructor
    # --------------------------------------------------------------------------------
    # Initialize the surfer and assign each surfer a new surfer count upon creation
    def __init__(self, name, hometown, rank, wipeouts=0):
        self.name = name
        self.hometown = hometown
        self.rank = rank
        self.wipeouts = wipeouts
        Surfer.surferCount += 1
    
    # Class Methods
    # --------------------------------------------------------------------------------
    # Prints what number surfer they are based on when they were created
    def surfer_count(self):
         print("Total surfers shredding waves %d" % Surfer.surferCount)

    # Prints out simple string
    def speak(self):
        print("Hang loose bruh!")

    # Interpolates based on their attributes
    def biography(self):
        print(f"My name is {self.name}, I am from {self.hometown} and rank #{self.rank}, I've wiped out {self.wipeouts} times!")

    # Check how many wipeouts and print out a statement
    def cheer(self):
        if self.wipeouts == 0:
            print('I totally rock man, no wipeouts!')
        else:
            print('Bummer bruh, keep on keeping on!')


# In[2]:


# Create Surfers
# --------------------------------------------------------------------------------

surfer = Surfer('Kelly Slater', 'Cocoa Beach', 1,)
print(surfer.name)
print(surfer.hometown)
print(surfer.rank)
print(surfer.wipeouts)
surfer.speak()
surfer.biography()
surfer.cheer()
surfer.surfer_count()


# In[3]:


surfer = Surfer('John Breezy', 'Spring Lake', 1, 10)
print(surfer.name)
print(surfer.hometown)
print(surfer.rank)
print(surfer.wipeouts)
surfer.speak()
surfer.biography()
surfer.cheer()
surfer.surfer_count()

##########################
##########################
###   ./10-Alchemy_Annotated.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Dependencies
# ----------------------------------
# Imports the method used for connecting to DBs
from sqlalchemy import create_engine

# Imports the methods needed to abstract classes into tables
from sqlalchemy.ext.declarative import declarative_base

# Allow us to declare column types
from sqlalchemy import Column, Integer, String, Float 


# In[2]:


# Create Dog and Cat Classes
# ----------------------------------

# Sets an object to utilize the default declarative base in SQL Alchemy
Base = declarative_base()


# Creates Classes which will serve as the anchor points for our Tables
class Dog(Base):
    __tablename__ = 'dog'
    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    color = Column(String(255))
    age = Column(Integer)


class Cat(Base):
    __tablename__ = 'cat'
    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    color = Column(String(255))
    age = Column(Integer)


# In[3]:


# Create a Specific Instance of the Dog and Cat classes
# ----------------------------------

# Calls the Pet Constructors to create "Dog" and "Cat" objets
dog = Dog(name='Rex', color='Brown', age=4)
cat = Cat(name="Felix", color="Gray", age=7)


# In[4]:


# Create Database Connection
# ----------------------------------
# Creates a connection to our DB
engine = create_engine("sqlite:///pets.sqlite")
conn = engine.connect()


# In[6]:


# Create a "Metadata" Layer That Abstracts our SQL Database
# ----------------------------------
# Create (if not already in existence) the tables associated with our classes.
Base.metadata.create_all(engine)

# Use this to clear out the db
# ----------------------------------
# Base.metadata.drop_all(engine)


# In[7]:


# Create a Session Object to Connect to DB
# ----------------------------------
# Session is a temporary binding to our DB
from sqlalchemy.orm import Session
session = Session(bind=engine)


# In[8]:


# Add Records to the Appropriate DB
# ----------------------------------
# Use the SQL ALchemy methods to run simple "INSERT" statements using the classes and objects  
session.add(dog)
session.add(cat)
session.commit()


# In[9]:


# Query the Tables
# ----------------------------------
# Perform a simple query of the database
dog_list = session.query(Dog)
for doggy in dog_list:
    print(doggy.name)


# In[10]:


cat_list = session.query(Cat)
for kitty in cat_list:
    print(kitty.name)


# In[ ]:




##########################
##########################
###   ./11-Surfer_SQL.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import SQL Alchemy
from sqlalchemy import create_engine


# In[2]:


# Import and establish Base for which classes will be constructed 
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()


# In[3]:


# Import modules to declare columns and column data types
from sqlalchemy import Column, Integer, String, Float


# In[4]:


# Create Surfer and Board classes
# ----------------------------------
class Surfer(Base):
    __tablename__ = 'surfers'
    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    hometown = Column(String(255))
    wipeouts = Column(Integer)
    rank = Column(Integer)

class Board(Base):
    __tablename__ = 'surfboards'
    id = Column(Integer, primary_key=True)
    surfer_id = Column(Integer)
    board_name = Column(String(255))
    color = Column(String(255))
    length = Column(Integer)


# In[5]:


# Create specific instances of the Surfer and Board classes
# ----------------------------------
# Create a new surfer named "Bruno"
surfer = Surfer(name='Bruno', hometown="LA", rank=10)
# Create a new board and associate it with a surfer's ID
board = Board(surfer_id=1, board_name="Awwwyeah", color="Blue", length=68)


# In[6]:


# Create Database Connection
# ----------------------------------
# Establish Connection
engine = create_engine("sqlite:///surfer.sqlite")
conn = engine.connect()


# In[7]:


# Create both the Surfer and Board tables within the database
Base.metadata.create_all(conn)


# In[8]:


# To push the objects made and query the server we use a Session object
from sqlalchemy.orm import Session
session = Session(bind=engine)


# In[9]:


# Add "Bruno" to the current session
session.add(surfer)
# Add "Awwwyeah" to the current session
session.add(board)
# Commit both objects to the database
session.commit()


# In[10]:


# Query the database and collect all of the surfers in the Surfer table
surfer_list = session.query(Surfer)
for bro in surfer_list:
    print(bro.name)
    print(bro.hometown)
    print(bro.rank)





#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 10
#####  END OF class day 1
########################


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 10  #########
#####  class day 2  #########
########################


##########################
##########################
###   ./01-Ins_Basic_Querying.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String, Float

from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()


# In[2]:


class BaseballPlayer(Base):
  __tablename__ = "player"
  player_id = Column(String, primary_key=True)
  birth_year = Column(Integer)
  birth_month = Column(Integer)
  birth_day = Column(Integer)
  birth_country = Column(String)
  birth_state = Column(String)
  birth_city = Column(String)
  name_first = Column(String)
  name_last = Column(String)
  name_given = Column(String)
  weight = Column(Integer)
  height = Column(Integer)
  bats = Column(String)
  throws = Column(String)
  debut = Column(String)
  final_game = Column(String)


# In[3]:


# Create Database Connection
engine = create_engine('sqlite:///../Resources/database.sqlite')
Base.metadata.create_all(engine)


# In[4]:


from sqlalchemy.orm import Session
session = Session(bind=engine)


# In[5]:


# Print all of the player names in the database
players = session.query(BaseballPlayer)
for player in players:
  print(player.name_given)


# In[6]:


# Find the number of players from the USA
usa = session.query(BaseballPlayer).    filter(BaseballPlayer.birth_country == 'USA').count()
print("There are {} players from the USA".format(usa))


# In[7]:


# Find those players who were born before 1990
born_before_1990 = session.query(BaseballPlayer).    filter(BaseballPlayer.birth_year < 1990).count()
    
print("{} players were born before 1990".format(born_before_1990))


# In[8]:


# Find those players from the USA who were born after 1989
born_after_1989 = session.query(BaseballPlayer).    filter(BaseballPlayer.birth_year > 1989).filter(BaseballPlayer.birth_country == "USA").    count()
print("{} USA players were born after 1989".format(born_after_1989))


# In[ ]:




##########################
##########################
###   ./02-Stu_SharkSearch.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


from sqlalchemy import create_engine

from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
from sqlalchemy import Column, Integer, String, Float


# In[2]:


from sqlalchemy import create_engine
database_path = "../Resources/sharks.sqlite"
engine = create_engine(f"sqlite:///{database_path}")
Base.metadata.create_all(engine)


# In[3]:


from sqlalchemy.orm import Session
session = Session(bind=engine)


# In[4]:


# create your shark class
class Sharks(Base):
    __tablename__ = 'sharks'
    id = Column(Integer, primary_key=True)
    case_number = Column(String)
    date = Column(String)
    year = Column(Integer)
    type = Column(String)
    country = Column(String)
    area = Column(String)
    location= Column(String)
    activity = Column(String)
    name = Column(String)
    sex = Column(String)
    age = Column(Integer)
    injury = Column(String)
    fatal_y_n = Column(String)
    time = Column(String)
    species = Column(String)
    investigator_or_source = Column(String)
    pdf = Column(String)
    original_order = Column(Integer)


# In[5]:


# print all locations of shark attacks
attacks = session.query(Sharks) 
for attack in attacks:
    print(attack.location)


# In[6]:


# find the number of provoked attacks
provoked = session.query(Sharks).filter_by(type='Provoked').count()
print(provoked)


# In[7]:


# find the number of attacks in USA
usa = session.query(Sharks).filter_by(country='USA').count()
print(usa)


# In[8]:


# find the number of attacks in 2017
year_2017 = session.query(Sharks).filter_by(year="2017").count()
print(year_2017)


# In[9]:


# find the number of attacks while surfing
surfing = session.query(Sharks).filter_by(activity='Surfing').count()
print(surfing)


# In[10]:


# find the number of fatal attacks
fatal = session.query(Sharks).filter_by(fatal_y_n='Y').count()
print(fatal)


# In[11]:


# find the number of fatal attacks while surfing
fatal_surfing = session.query(Sharks).    filter_by(fatal_y_n='Y').    filter(Sharks.area == "Eastern Cape Province").count()
print(fatal_surfing)


# In[12]:


# find the number of fatal attacks in 2017 in Australia
fatal_surfing = session.query(Sharks).    filter_by(fatal_y_n='Y').    filter(Sharks.country == "MOZAMBIQUE").    filter(Sharks.activity == 'Spearfishing').count()
print(fatal_surfing)

##########################
##########################
###   ./03-Ins_Basic_Updating.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()


# In[2]:


# Define our pet table
class Pet(Base):
    __tablename__ = 'pet'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    type = Column(String)
    age = Column(Integer)


# In[3]:


# Right now, this table only exists in python and not in the actual database
Base.metadata.tables


# In[4]:


# Create our database engine
engine = create_engine('sqlite:///pets.sqlite')


# In[5]:


# This is where we create our tables in the database
Base.metadata.create_all(engine)


# In[6]:


# The ORM’s “handle” to the database is the Session.
from sqlalchemy.orm import Session
session = Session(engine)


# ## Create Data

# In[7]:


# Note that adding to the session does not update the table. It queues up those queries.
session.add(Pet(name='Justin Timbersnake', type='snek', age=2))
session.add(Pet(name='Pawtrick Stewart', type='good boy', age=10))
session.add(Pet(name='Godzilla', type='iguana', age=1))
session.add(Pet(name='Marshmallow', type='polar bear', age=4))


# In[8]:


# The data hasn't been added yet
engine.execute('select * from pet').fetchall()


# In[9]:


# We can use the new attribute to see the queue of data ready to go into the database
session.new


# In[10]:


# commit() flushes whatever remaining changes remain to the database, and commits the transaction.
session.commit()


# In[11]:


# Nothing new to add
session.new


# In[12]:


# query the database
session.query(Pet.name, Pet.type, Pet.age).all()


# ## Update Data

# In[13]:


# Create a query and then run update on it
pet = session.query(Pet).filter_by(name="Marshmallow").first()
pet.age += 1


# In[14]:


# For modifications, we can use the dirty attribute
session.dirty


# In[15]:


# Commit Transaction
session.commit()


# In[16]:


# Session is up-to-date
session.dirty


# In[17]:


session.query(Pet.id, Pet.name, Pet.type, Pet.age).all()


# ## Delete Data

# In[18]:


# Create a query and then delete the row collected
pet = session.query(Pet).filter_by(id=4).delete()
session.commit()


# In[19]:


session.query(Pet.id, Pet.name, Pet.type, Pet.age).all()


# In[ ]:




##########################
##########################
###   ./04-Par_CruddyDB.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import SQL Alchemy
from sqlalchemy import create_engine

# Import and establish Base for which classes will be constructed 
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

# Import modules to declare columns and column data types
from sqlalchemy import Column, Integer, String, Float


# In[2]:


# Create the Garbage class
class Garbage(Base):
    __tablename__ = 'garbage_collection'
    id = Column(Integer, primary_key=True)
    item = Column(String(255))
    weight = Column(Float)
    collector = Column(String(255))


# In[3]:


# Create a connection to a SQLite database
engine = create_engine('sqlite:///garbage.db')


# In[4]:


# Create the garbage_collection table within the database
Base.metadata.create_all(engine)


# In[5]:


# To push the objects made and query the server we use a Session object
from sqlalchemy.orm import Session
session = Session(bind=engine)


# In[6]:


# Create some instances of the Garbage class
garbage_one = Garbage(item="Sofa", weight=90.5, collector="Jacob")
garbage_two = Garbage(item="Broken TV", weight=10.75, collector="Paul")
garbage_three = Garbage(item="Burger", weight=0.55, collector="Phil")


# In[7]:


# Add these objects to the session
session.add(garbage_one)
session.add(garbage_two)
session.add(garbage_three)
# Commit the objects to the database
session.commit()


# In[8]:


# Update two rows of data
update_one = session.query(Garbage).filter(Garbage.id == 1).first()
update_one.collector = "Jacob Deming"
update_two = session.query(Garbage).filter(Garbage.id == 2).first()
update_two.weight = 11.25
# Commit the updates to the database
session.commit()


# In[9]:


# Delete the row with the lowest weight
session.query(Garbage).filter(Garbage.id == 3).delete()
# Commit the delete to the database
session.commit()


# In[10]:


# Collect all of the items and print their information
items = session.query(Garbage)
for item in items:
    print("-"*12)
    print(f"id: {item.id}")
    print(f"item: {item.item}")
    print(f"weight: {item.weight}")
    print(f"collector: {item.collector}")

##########################
##########################
###   ./05-Ins_Reflection.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine


# In[2]:


# Create engine using the `demographics.sqlite` database file
engine = create_engine("sqlite:///../Resources/dow.sqlite")


# In[3]:


# Declare a Base using `automap_base()`
Base = automap_base()


# In[4]:


# Use the Base class to reflect the database tables
Base.prepare(engine, reflect=True)


# In[5]:


# Print all of the classes mapped to the Base
Base.classes.keys()


# In[6]:


# Assign the dow class to a variable called `Dow`
Dow = Base.classes.dow


# In[7]:


# Create a session
session = Session(engine)


# In[8]:


# Display the row's columns and data in dictionary format
first_row = session.query(Dow).first()
first_row.__dict__


# In[9]:


# Use the session to query Dow table and display the first 5 trade volumes
for row in session.query(Dow.stock, Dow.volume).limit(15).all():
    print(row)


# In[ ]:




##########################
##########################
###   ./06-Stu_Reflection.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine


# In[2]:


# Create engine using the `demographics.sqlite` database file
engine = create_engine("sqlite:///../Resources/demographics.sqlite")


# In[3]:


# Declare a Base using `automap_base()`
Base = automap_base()


# In[4]:


# Use the Base class to reflect the database tables
Base.prepare(engine, reflect=True)


# In[5]:


# Print all of the classes mapped to the Base
Base.classes.keys()


# In[6]:


# Assign the demographics class to a variable called `Demographics`
Demographics = Base.classes.demographics


# In[7]:


# Create a session
session = Session(engine)


# In[8]:


# Use the session to query Demographics table and display the first 5 locations
for row in session.query(Demographics, Demographics.location).limit(5).all():
    print(row)


# In[9]:


# BONUS: Query and print the number of unique Locations
# Hints: Look into counting and grouping operations in SQLAlchemy
locations = session.query(Demographics).group_by(Demographics.location).count()
print(locations)

##########################
##########################
###   ./07-Ins_Inspector.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import SQLAlchemy `automap` and other dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect


# In[2]:


# Create the connection engine
engine = create_engine("sqlite:///../Resources/dow.sqlite")


# In[3]:


# Create the inspector and connect it to the engine
inspector = inspect(engine)


# In[4]:


# Collect the names of tables within the database
inspector.get_table_names()


# In[5]:


# Using the inspector to print the column names within the 'dow' table and its types
columns = inspector.get_columns('dow')
for column in columns:
    print(column["name"], column["type"])


# In[ ]:




##########################
##########################
###   ./08-Stu_Salary_Explorer.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect


# In[2]:


# Create the connection engine
engine = create_engine("sqlite:///../Resources/database.sqlite")


# In[3]:


# Create the inspector and connect it to the engine
inspector = inspect(engine)


# In[4]:


# Collect the names of tables within the database
inspector.get_table_names()


# In[5]:


# Using the inspector to print the column names within the 'Salaries' table and its types
columns = inspector.get_columns('Salaries')
for column in columns:
    print(column["name"], column["type"])

##########################
##########################
###   ./09-Stu_Plotting.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# # Plotting Query Results

# ## Setup

# In[1]:


# Import Matplot lib
import matplotlib
from matplotlib import style
style.use('seaborn')
import matplotlib.pyplot as plt


# In[2]:


import pandas as pd


# In[3]:


# Import SQLAlchemy `automap` and other dependencies here
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func


# In[4]:


# Create an engine for the `emoji.sqlite` database
engine = create_engine("sqlite:///../Resources/emoji.sqlite", echo=False)


# ## Explore Database

# In[5]:


# Use the Inspector to explore the database and print the table names
inspector = inspect(engine)
inspector.get_table_names()


# In[6]:


# Use Inspector to print the column names and types
columns = inspector.get_columns('emoji')
for c in columns:
    print(c['name'], c["type"])


# In[7]:


# Use `engine.execute` to select and display the first 10 rows from the emoji table
engine.execute('SELECT * FROM emoji LIMIT 10').fetchall()


# ## Reflect database and Query

# In[8]:


# Reflect Database into ORM class
Base = automap_base()
Base.prepare(engine, reflect=True)
Emoji = Base.classes.emoji


# In[9]:


# Start a session to query the database
session = Session(engine)


# Use Matplotlib to create a horizontal bar chart and plot the emoji `score` in descending order. Use `emoji_char` as the y-axis labels. Plot only the top 10 emojis ranked by score

# In[10]:


# Query Emojis for `emoji_char`, `emoji_id`, and `score` and save the query into results
results = session.query(Emoji.emoji_char, Emoji.emoji_id, Emoji.score).    order_by(Emoji.score.desc()).all()


# Unpack tuples using list comprehensions

# In[11]:


# Unpack the `emoji_id` and `scores` from results and save into separate lists
emoji_id = [result[1] for result in results[:10]]
scores = [int(result[2]) for result in results[:10]]


# ## Plot using Matplotlib

# In[12]:


# Create a horizontal bar chart and plot the `emoji_id` on the y-axis and the `score` on the x-axis
# Challenge: Try to plot the scores in descending order on the graph (The largest score is at the top)
fig, ax = plt.subplots()
ypos = range(1, len(scores)+1)
ax.barh(ypos, scores[::-1])
ax.set_xlabel("score")
ax.set_ylabel("emoji")
ax.set_yticks(ypos)
ax.set_yticklabels(emoji_id[::-1])
ax.set_title("Emoji Scores")
fig.tight_layout()
plt.show()


# ## Plot using Pandas Plotting

# Load the results into a Pandas DataFrame

# In[13]:


# Load the results into a pandas dataframe. Set the index to the `emoji_id`
df = pd.DataFrame(results[:10], columns=['emoji_char', 'emoji_id', 'score'])
df.set_index('emoji_id', inplace=True, )
df.head(10)


# Plot using Pandas

# In[14]:


# Plot the dataframe as a horizontal bar chart using pandas plotting
df.iloc[::-1].plot.barh(title="emoji ranking")
plt.tight_layout()
plt.show()


# In[15]:


# BONUS: Use Pandas `read_sql_query` to load a query statement directly into the DataFrame
stmt = session.query(Emoji).    order_by(Emoji.score.desc()).statement
df2 = pd.read_sql_query(stmt, session.bind)
df2.head(10)





#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 10
#####  END OF class day 2
########################


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 10  #########
#####  class day 3  #########
########################


##########################
##########################
###   ./01-Ins_Joins.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# # SQLAlchemy Joins

# ## Setup

# In[1]:


# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect


# In[2]:


engine = create_engine("sqlite:///../Resources/mammal_masses.sqlite", echo=False)


# In[3]:


# Reflect Database into ORM classes
Base = automap_base()
Base.prepare(engine, reflect=True)
Base.classes.keys()


# In[4]:


# Map Europe class
EA = Base.classes.ea


# In[5]:


# Map North American class
NA = Base.classes.na


# In[6]:


# create a session
session = Session(engine)


# ## Filtering Review

# Filters are the "WHERE" clause for your select statement. 

# In[7]:


# filter North American mammals whose genus is "Antilocapra"
# query, loop over and print out animals.
mammals = session.query(NA).filter(NA.genus == 'Antilocapra').all()
for mammal in mammals:
    print("Family: {0}, Genus: {1}".format(mammal.family, mammal.genus))


# ## Joins

# A SQL join combines columns from one or more tables in a relational database. 
# 
# It creates a set that can be saved as a table or used as it is. 
# 
# A JOIN is a means for combining columns from one (self-table) or more tables by using values common to each.

# In[8]:


inspector = inspect(engine)
inspector.get_table_names()


# In[9]:


# Get a list of column names and types
columns = inspector.get_columns('ea')
for c in columns:
    print(c['name'], c["type"])


# In[10]:


session.query(EA.sporder, NA.sporder).limit(100).all()


# In[11]:


same_sporder = session.query(EA, NA).filter(EA.sporder == NA.sporder).limit(10).all()


for record in same_sporder:
    (ea, na) = record
    print(ea.sporder)
    print(na.sporder)


# In[12]:


# Return all animals from EA and NA belonging to the same sporder.
# This JOINs the data in the two tables together into a single dataset (here in the form of a tuple).
# Note: We are going to limit the results to 10 for printing
sel = [EA.family, EA.genus, EA.species, NA.family, NA.genus, NA.species]
same_sporder = session.query(*sel).filter(EA.sporder == NA.sporder).limit(10).all()

for record in same_sporder:
    (ea_fam, ea_gen, ea_spec, na_fam, na_gen, na_spec) = record
    print(
        f"The European animal '{ea_fam} {ea_gen} {ea_spec}'"
        f"belongs to the same sporder as the North American animal '{na_fam} {na_gen} {na_spec}'.")


# In[ ]:




##########################
##########################
###   ./02-Ins_Dates.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# # SQLAlchemy, Sqlite, and Dates

# ## Setup

# In[6]:


# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func


# In[7]:


engine = create_engine("sqlite:///../Resources/dow.sqlite", echo=False)


# ## Explore Database

# In[8]:


inspector = inspect(engine)
inspector.get_table_names()


# In[9]:


# Get a list of column names and types
columns = inspector.get_columns('dow')
for c in columns:
    print(c['name'], c["type"])
# columns


# In[10]:


engine.execute('SELECT * FROM dow LIMIT 5').fetchall()


# ## Reflect and query dates

# In[11]:


# Reflect Database into ORM class
Base = automap_base()
Base.prepare(engine, reflect=True)
Dow = Base.classes.dow


# In[12]:


session = Session(engine)


# How many dates do we have?

# In[13]:


# Total dates
session.query(func.count(Dow.date)).all()


# What is the earliest date?

# In[14]:


# Earliest Date
session.query(Dow.date).order_by(Dow.date).first()


# What is the latest date?

# In[15]:


# Latest Date
session.query(Dow.date).order_by(Dow.date.desc()).first()


# Find all of the dates great than `2011-03-01`

# In[16]:


session.query(Dow.date).    filter(Dow.date > '2011-03-01').    order_by(Dow.date).all()


# ### Important Note! Sqlite does not support a date column type, but SQLAlchemy will allow you to work with dates in the iso format. [sqlite dates](http://docs.sqlalchemy.org/en/latest/dialects/sqlite.html)

# # Quick Review of DateTime

# In[17]:


import datetime as dt


# In[18]:


# Print a date object and a datetime object 
print(dt.date.today())
print(dt.date(2017, 1 ,31))


# In[19]:


print(dt.datetime.utcnow())
print(dt.datetime(2017, 1, 31))


# Calculate a time delta

# In[20]:


# date 1 week ago from today
week_ago = dt.date.today() - dt.timedelta(days=7)


# Query for the Dow closing price 1 week before `2011-04-08` using the datetime library

# In[21]:


# Query for the Dow closing price for `CSCO` 1 week before `2011-04-08` using the datetime library
query_date = dt.date(2011, 4, 8) - dt.timedelta(days=7)
print("Query Date: ", query_date)


# In[22]:


session.query(Dow.date, Dow.close_price).    filter(Dow.stock == 'CSCO').    filter(Dow.date == query_date).all()


# In[23]:


# Parse out just the day from the datetime object
dt.date.today().strftime("%d")


# Putting it all together

# In[24]:


# Query for all dates matching the 
# following date string in the format `%d`
date_str = "14"
session.query(Dow.date).    filter(func.strftime("%d", Dow.date) == date_str).all()


# ## Your Turn!

# DataSet Citation: 
# 
# Brown, M. S., Pelosi, M. & Dirska, H. (2013). Dynamic-radius Species-conserving Genetic Algorithm for 
# the Financial Forecasting of Dow Jones Index Stocks. Machine Learning and Data Mining in Pattern 
# Recognition, 7988, 27-41.
# 

# In[ ]:




##########################
##########################
###   ./03-Stu_Dates.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# # SQLAlchemy, Sqlite, and Dates

# ## Setup

# In[1]:


import matplotlib
from matplotlib import style
style.use('fivethirtyeight')
import matplotlib.pyplot as plt


# In[2]:


import pandas as pd


# In[3]:


# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func


# In[4]:


engine = create_engine("sqlite:///../Resources/dow.sqlite", echo=False)


# In[5]:


engine.execute('SELECT * FROM dow LIMIT 5').fetchall()


# In[6]:


inspector = inspect(engine)
columns = inspector.get_columns('dow')
for c in columns:
    print(c['name'], c["type"])


# ## Reflect and query dates

# In[7]:


# Reflect Database into ORM class
Base = automap_base()
Base.prepare(engine, reflect=True)
Dow = Base.classes.dow


# In[8]:


session = Session(engine)


# ## Analysis

# Analyze the Average prices (open, high, low, close) for all stocks in the Month of May

# In[9]:


# Query for the stock and average prices (open, high, low, close) 
# for all stock in the month of May
# Sort the result by stock name
sel = [Dow.stock, 
       func.avg(Dow.open_price), 
       func.avg(Dow.high_price), 
       func.avg(Dow.low_price), 
       func.avg(Dow.close_price)]
may_averages = session.query(*sel).    filter(func.strftime("%m", Dow.date) == "05").    group_by(Dow.stock).    order_by(Dow.stock).all()
may_averages


# In[10]:


# Plot the Results in a Matplotlib bar chart
df = pd.DataFrame(may_averages, columns=['stock', 'open_avg', 'high_avg', 'low_avg', 'close_avg'])
df.set_index('stock', inplace=True)
df.plot.bar()
plt.tight_layout()
plt.show()


# ### Bonus
# Calculate the high-low peak-to-peak (PTP) values for `IBM` stock after `2011-05-31`. 
# * Note: high-low PTP is calculated using `high_price` - `low_price`
# * Use a DateTime.date object in the query filter
# * Use a list comprehension or numpy's ravel method to unpack the query's list of tuples into a list of PTP values.
# * Use matplotlib to plot the PTP values as a boxplot

# In[11]:


# Design a query to calculate the PTP for stock `IBM` after May, 2011
import datetime as dt
import numpy as np

date = dt.datetime(2011, 5, 31)

results = session.query(Dow.high_price - Dow.low_price).    filter(Dow.date > date).filter(Dow.stock == 'IBM').all()
    
ptps = list(np.ravel(results))

# List Comprehension Solution
# ptps = [result[0] for result in results]

ptps


# In[12]:


# Load the query into a dataframe, set the index to the date, and plot the ptps
import numpy as np

fig, ax = plt.subplots()

x = range(len(ptps))
ax.boxplot(ptps, patch_artist=True)
ax.set_title('IBM PTPs')
fig.tight_layout()
plt.show()

##########################
##########################
###   ./04-flask_01.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[ ]:


from werkzeug.wrappers import Request, Response
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 9000, app)


# In[2]:


get_ipython().run_line_magic('tb', '')

##########################
##########################
###   ./05-app.py  
##########################


# 1. Import Flask
from flask import Flask


# 2. Create an app
app = Flask(__name__)


# 3. Define static routes
@app.route("/")
def index():
    return "Hello, world!"


@app.route("/about")
def about():
    name = "Peleke"
    location = "Tien Shan"

    return f"My name is {name}, and I live in {location}."


@app.route("/contact")
def contact():
    email = "peleke@example.com"

    return f"Questions? Comments? Complaints? Shoot an email to {email}."


# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
##########################
##########################
###   ./06-app-jsonify.py  
##########################


from flask import Flask, jsonify


app = Flask(__name__)

hello_dict = {"Hello": "World!"}


@app.route("/")
def home():
    return "Hi"


@app.route("/normal")
def normal():
    return hello_dict


@app.route("/jsonified")
def jsonified():
    return jsonify(hello_dict)


if __name__ == "__main__":
    app.run(debug=True)
##########################
##########################
###   ./07-app-justice_League.py  
##########################


from flask import Flask, jsonify

# Dictionary of Justice League
justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent/Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/api/v1.0/justice-league")
def justice_league():
    """Return the justice league data as json"""

    return jsonify(justice_league_members)


@app.route("/")
def welcome():
    return (
        f"Welcome to the Justice League API!<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/justice-league"
    )


if __name__ == "__main__":
    app.run(debug=True)
##########################
##########################
###   ./08-app-variable-rule.py  
##########################


from flask import Flask, jsonify

justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent/Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/api/v1.0/justice-league")
def justice_league():
    """Return the justice league data as json"""

    return jsonify(justice_league_members)


@app.route("/")
def welcome():
    return (
        f"Welcome to the Justice League API!<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/justice-league<br/>"
        f"/api/v1.0/justice-league/Arthur%20Curry<br/>"
        f"/api/v1.0/justice-league/Bruce%20Wayne<br/>"
        f"/api/v1.0/justice-league/Victor%20Stone<br/>"
        f"/api/v1.0/justice-league/Barry%20Allen<br/>"
        f"/api/v1.0/justice-league/Hal%20Jordan<br/>"
        f"/api/v1.0/justice-league/Clark%20Kent/Kal-El<br/>"
        f"/api/v1.0/justice-league/Princess%20Diana"
    )


@app.route("/api/v1.0/justice-league/<real_name>")
def justice_league_character(real_name):
    """Fetch the Justice League character whose real_name matches
       the path variable supplied by the user, or a 404 if not."""

    canonicalized = real_name.replace(" ", "").lower()
    for character in justice_league_members:
        search_term = character["real_name"].replace(" ", "").lower()

        if search_term == canonicalized:
            return jsonify(character)

    return jsonify({"error": f"Character with real_name {real_name} not found."}), 404


if __name__ == "__main__":
    app.run(debug=True)
##########################
##########################
###   ./09-app-variable-rule-stu.py  
##########################


from flask import Flask, jsonify

justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent/Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/api/v1.0/justice-league")
def justice_league():
    """Return the justice league data as json"""

    return jsonify(justice_league_members)


@app.route("/")
def welcome():
    return (
        f"Welcome to the Justice League API!<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/justice-league<br/>"
        f"/api/v1.0/justice-league/superhero/batman"
    )


@app.route("/api/v1.0/justice-league/real_name/<real_name>")
def justice_league_by_real_name(real_name):
    """Fetch the Justice League character whose real_name matches
       the path variable supplied by the user, or a 404 if not."""

    canonicalized = real_name.replace(" ", "").lower()
    for character in justice_league_members:
        search_term = character["real_name"].replace(" ", "").lower()

        if search_term == canonicalized:
            return jsonify(character)

    return jsonify({"error": f"Character with real_name {real_name} not found."}), 404


@app.route("/api/v1.0/justice-league/superhero/<superhero>")
def justice_league_by_superhero__name(superhero):
    """Fetch the Justice League character whose superhero matches
       the path variable supplied by the user, or a 404 if not."""

    canonicalized = superhero.replace(" ", "").lower()
    for character in justice_league_members:
        search_term = character["superhero"].replace(" ", "").lower()

        if search_term == canonicalized:
            return jsonify(character)

    return jsonify({"error": "Character not found."}), 404


if __name__ == "__main__":
    app.run(debug=True)
##########################
##########################
###   ./10-app-flask-ORM.py  
##########################


import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///titanic.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Passenger = Base.classes.passenger

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/names<br/>"
        f"/api/v1.0/passengers"
    )


@app.route("/api/v1.0/names")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(Passenger.name).all()

    session.close()

    # Convert list of tuples into normal list
    all_names = list(np.ravel(results))

    return jsonify(all_names)


@app.route("/api/v1.0/passengers")
def passengers():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_passengers = []
    for name, age, sex in results:
        passenger_dict = {}
        passenger_dict["name"] = name
        passenger_dict["age"] = age
        passenger_dict["sex"] = sex
        all_passengers.append(passenger_dict)

    return jsonify(all_passengers)


if __name__ == '__main__':
    app.run(debug=True)
##########################
##########################
###   ./11-Stu_Chinook.py  
##########################


#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Ignore SQLITE warnings related to Decimal numbers in the Chinook database
import warnings
warnings.filterwarnings('ignore')


# In[2]:


# Import Dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func


# In[3]:


# Create an engine for the chinook.sqlite database
engine = create_engine("sqlite:///../Resources/chinook.sqlite", echo=False)


# In[4]:


# Reflect Database into ORM classes
Base = automap_base()
Base.prepare(engine, reflect=True)
Base.classes.keys()


# In[5]:


# Save a reference to the invoices table as `Invoices`
Invoices = Base.classes.invoices


# In[6]:


# Create a database session object
session = Session(engine)


# In[7]:


# List all of the countries found in the invoices table
session.query(Invoices.BillingCountry).group_by(Invoices.BillingCountry).all()

# Alternative Solution using `distinct`
# session.query(Invoices.BillingCountry).distinct().all()


# In[8]:


# Design a query that lists the invoices totals for each billing country 
# and sort the output in descending order.
session.query(Invoices.BillingCountry, func.sum(Invoices.Total)).    group_by(Invoices.BillingCountry).    order_by(func.sum(Invoices.Total).desc()).all()


# In[9]:


# Save a reference to the invoice_items table as `Items`
Items = Base.classes.invoice_items


# In[10]:


# List all of the Billing Postal Codes for the USA.
results = session.query(Invoices.BillingPostalCode).    filter(Invoices.BillingCountry == 'USA').group_by(Invoices.BillingPostalCode).all()
results


# In[11]:


# Calculate the Item Totals (sum(UnitPrice * Quantity)) for the USA
session.query(func.sum(Items.UnitPrice * Items.Quantity)).    filter(Invoices.InvoiceId == Items.InvoiceId).    filter(Invoices.BillingCountry == 'USA').scalar()


# In[12]:


# Calculate the Item Totals `sum(UnitPrice * Quantity)` for each Billing Postal Code in the USA
# Sort the results in descending order by Total
session.query(Invoices.BillingPostalCode, func.sum(Items.UnitPrice * Items.Quantity)).    filter(Invoices.InvoiceId == Items.InvoiceId).    filter(Invoices.BillingCountry == 'USA').    group_by(Invoices.BillingPostalCode).    order_by(func.sum(Items.UnitPrice * Items.Quantity).desc()).all()





#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 10
#####  END OF class day 3
########################


