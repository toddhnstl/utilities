#####----------------###
#####----------------###
#####  WEEK NUMBER 03  #########
#####  class day 01  #########
#####


##########################
##########################
###   ./05-inputs.py  
##########################


# Collects the user's input for the prompt "What is your name?"
name = input("What is your name? ")

# Collects the user's input for the prompt "How old are you?" and converts the string to an integer.
age = int(input("How old are you? "))

# Collects the user's input for the prompt "Is input truthy?" and converts it to a boolean. Note that non-zero,
#   non-empty objects are truth-y.
trueOrFalse = bool(input("Is the input truthy? "))

# Creates three print statements that to respond with the output.
print("My name is " + str(name))
print("I will be " + str(age + 1) + " next year.")
print("The input was converted to " + str(trueOrFalse))
##########################
##########################
###   ./06-DownToInput.py  
##########################


# Take input of you and your neighbor
your_first_name = input("What is your name? ")
neighbor_first_name = input("What is your neighbor's name? ")

# Take how long each of you have been coding
months_you_coded = input("How many months have you been coding? ")
months_neighbor_coded = input("How many months has your neighbor been coding? ")

# Add total month
total_months_coded = int(months_you_coded) + int(months_neighbor_coded)

# Print results
print("I am " + your_first_name + " and my neighbor is " + neighbor_first_name)
print("Together we have been coding for " + str(total_months_coded) + " months!")
##########################
##########################
###   ./07-conditionals.py  
##########################


x = 1
y = 10

# Checks if one value is equal to another
if x == 1:
    print("x is equal to 1")

# Checks if one value is NOT equal to another
if y != 1:
    print("y is not equal to 1")

# Checks if one value is less than another
if x < y:
    print("x is less than y")

# Checks if one value is greater than another
if y > x:
    print("y is greater than x")

# Checks if a value is less than or equal to another
if x >= 1:
    print("x is greater than or equal to 1")

# Checks for two conditions to be met using "and"
if x == 1 and y == 10:
    print("Both values returned true")

# Checks if either of two conditions is met
if x < 45 or y < 5:
    print("One or more of the statements were true")

# Nested if statements
if x < 10:
    if y < 5:
        print("x is less than 10 and y is less than 5")
    elif y == 5:
        print("x is less than 10 and y is equal to 5")
    else:
        print("x is less than 10 and y is greater than 5")
##########################
##########################
###   ./08-conditionals_solved.py  
##########################


# 1. oooo needs some work
x = 5
if 2 * x > 10:
    print("Question 1 works!")
else:
    print("oooo needs some work")

# 2. Question 2 works!
x = 5
if len("Dog") < x:
    print("Question 2 works!")
else:
    print("Still missing out")

# 3. GOT QUESTION 3!
x = 2
y = 5
if (x ** 3 >= y) and (y ** 2 < 26):
    print("GOT QUESTION 3!")
else:
    print("Oh good you can count")

# 4. Dan is in group three
name = "Dan"
group_one = ["Greg", "Tony", "Susan"]
group_two = ["Gerald", "Paul", "Ryder"]
group_three = ["Carla", "Dan", "Jefferson"]

if name in group_one:
    print(name + " is in the first group")
elif name in group_two:
    print(name + " is in group two")
elif name in group_three:
    print(name + " is in group three")
else:
    print(name + " does not have a group")

# 5. Can ride bumper cars
height = 66
age = 16
adult_permission = True

if (height > 70) and (age >= 18):
    print("Can ride all the roller coasters")
elif (height > 65) and (age >= 18):
    print("Can ride moderate roller coasters")
elif (height > 60) and (age >= 18):
    print("Can ride light roller coasters")
elif ((height > 50) and (age >= 18)) or ((adult_permission) and (height > 50)):
    print("Can ride bumper cars")
else:
    print("Stick to lazy river")
##########################
##########################
###   ./09-lists.py  
##########################


# Create a variable and set it as an List
myList = ["Jacob", 25, "Ahmed", 80]
print(myList)

# Adds an element onto the end of a List
myList.append("Matt")
print(myList)

# Returns the index of the first object with a matching value
print(myList.index("Matt"))

# Changes a specified element within an List at the given index
myList[3] = 85
print(myList)

# Returns the length of the List
print(len(myList))

# Removes a specified object from an List
myList.remove("Matt")
print(myList)

# Removes the object at the index specified
myList.pop(0)
myList.pop(0)
print(myList)

# Creates a tuple, a sequence of immutable Python objects that cannot be changed
myTuple = ('Python', 100, 'VBA', False)
print(myTuple)
##########################
##########################
###   ./10-RPS_Solved.py  
##########################


# Incorporate the random library
import random

# Print Title
print("Let's Play Rock Paper Scissors!")

# Specify the three options
options = ["r", "p", "s"]

# Computer Selection
computer_choice = random.choice(options)

# User Selection
user_choice = input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")

# Run Conditionals
if (user_choice == "r" and computer_choice == "p"):
    print("You chose rock. The computer chose paper.")
    print("Sorry. You lose.")

elif (user_choice == "r" and computer_choice == "s"):
    print("You chose rock. The computer chose scissors.")
    print("Yay! You won.")

elif (user_choice == "r" and computer_choice == "r"):
    print("You chose rock. The computer chose rock.")
    print("A smashing tie!")

elif (user_choice == "p" and computer_choice == "p"):
    print("You chose paper. The computer chose paper.")
    print("A smashing tie!")

elif (user_choice == "p" and computer_choice == "s"):
    print("You chose paper. The computer chose scissors.")
    print("Sorry. You lose.")

elif (user_choice == "p" and computer_choice == "r"):
    print("You chose paper. The computer chose rock.")
    print("Yay! You won.")

elif (user_choice == "s" and computer_choice == "p"):
    print("You chose scissors. The computer chose paper.")
    print("Yay! You won.")

elif (user_choice == "s" and computer_choice == "s"):
    print("You chose scissors. The computer chose scissors.")
    print("A smashing tie!")

elif (user_choice == "s" and computer_choice == "r"):
    print("You chose scissors. The computer chose rock.")
    print("Sorry. You lose.")

else:
    print("I don't understand that!")
    print("Next time, choose from 'r', 'p', or 's'.")
##########################
##########################
###   ./11-LoopDeeLoop.py  
##########################


# Loop through a range of numbers (0 through 4)
for x in range(5):
    print(x)

print("-----------------------------------------")

# Loop through a range of numbers (2 through 6 - yes 6! Up to, but not including, 7)
for x in range(2, 7):
    print(x)

print("----------------------------------------")

# Iterate through letters in a string
word = "Peace"
for letters in word:
    print(letters)

print("----------------------------------------")

# Iterate through a list
zoo = ["cow", "dog", "bee", "zebra"]
for animal in zoo:
    print(animal)

print("----------------------------------------")

# Loop while a condition is being met
run = "y"

while run == "y":
    print("Hi!")
    run = input("To run again. Enter 'y'")
##########################
##########################
###   ./12-NumberChain_Solved.py  
##########################


# Initial variable to track game play
user_play = "y"

# While we are still playing...
while user_play == "y":

    # Ask the user how many numbers to loop through
    user_number = int(input("How many numbers? "))

    # Loop through the numbers. (Be sure to cast the string into an integer.)
    for x in range(user_number):

        # Print each number in the range
        print(x)

    # Once complete...
    user_play = input("Continue: (y)es or (n)o? ")
##########################
##########################
###   ./12-NumberChainBonus_Solved.py  
##########################


# Initial variable to track game play
user_play = "y"

# Set start and last number
start_number = 0

# While we are still playing...
while user_play == "y":

    # Ask the user how many numbers to loop through
    user_number = input("How many numbers? ")

    # Loop through the numbers. (Be sure to cast the string into an integer.)
    for x in range(start_number, int(user_number) + start_number):

        # Print each number in the range
        print(x)

    # Set the next start number as the last number of the loop
    start_number = start_number + int(user_number)

    # Once complete...
    user_play = input("Continue the chain: (y)es or (n)o? ")




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 03
#####  END OF class day 01
########################


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 03  #########
#####  class day 02  #########
#####


##########################
##########################
###   ./01-quick_check_up.py  
##########################


# Print Hello User!
print("Hello User!")

# Take in User Input
name = input("What is your name? ")

# Respond Back with User Input
print("Hi " + name + "!")

# Take in the User Age
age = input("What is your age? ")

# Respond Back with a statement based on age
if (int(age) < 8):
    print("Aww! You are just a baby!")

if (int(age) >= 8):
    print("Ah... A well traveled soul are ye!")
##########################
##########################
###   ./02-simple_loops.py  
##########################


# A For loop moves through a given range of numbers
# If only one number is provided it will loop from 0 to that number
for x in range(10):
    print(x)

# If two numbers are provided then a For loop will loop from the first number up until it reaches the second number
for x in range(20, 30):
    print(x)

# If a list is provided, then the For loop will loop through each element within the list
words = ["Peanut", "Butter", "Jelly", "Time", "Is", "Now"]
for word in words:
    print(word)

# A While Loop will continue to loop through the code contained within it until some condition is met
x = "Yes"
while x == "Yes":
    print("Whee! Merry-Go-Rounds are great!")
    x = input("Would you like to go on the Merry-Go-Round again? ")
##########################
##########################
###   ./03-kid_in_candy_store.py  
##########################


# The list of candies to print to the screen
candy_list = [
    "Snickers",
    "Kit Kat",
    "Sour Patch Kids",
    "Juicy Fruit",
    "Swedish Fish",
    "Skittles",
    "Hershey Bar",
    "Starbursts",
    "M&Ms"
]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candy_cart = []

# Print all of the candies to the screen and their index in brackets
for candy in candy_list:
    print(f'[{str(candy_list.index(candy))}] {candy}')

# Another option to run the for loop involves Python's enumerate method
# This method obtains both the index and the value of an item during a for loop
# for index, candy in candy_list:
#     print(index, candy)

# Run through a loop which allows the user to choose which candies to take home with them
print("Which candy would you like to bring home?")
for x in range(allowance):
    selected = input("Input the number of the candy you want: ")

    # Add the candy at the index chosen to the candy_cart list
    candy_cart.append(candy_list[int(selected)])

# Loop through the candy_cart to say what candies were brought home
print("I brought home with me...")
for candy in candy_cart:
    print(candy)
##########################
##########################
###   ./03-kid_in_candy_store_bonus.py  
##########################


# The list of candies to print to the screen
candy_list = [
    "Snickers",
    "Kit Kat",
    "Sour Patch Kids",
    "Juicy Fruit",
    "Swedish Fish",
    "Skittles",
    "Hershey Bar",
    "Starbursts",
    "M&Ms"
]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candy_cart = []

# Print all of the candies to the screen and their index in brackets
for i in range(len(candy_list)):
    print("[" + str(i) + "] " + candy_list[i])


# Set answer to "yes" for while loop
answer = "yes"


while answer == "yes":

    # Ask which candy the user would like to bring ho
    print("Which candy would you like to bring home?")
    selected = input("Input the number of the candy you want: ")

    # Add the candy at the index chosen to the candy_cart list
    candy_cart.append(candy_list[int(selected)])

    # ask the user if they want more candy
    answer = input("Would you like to make another selection? ('yes' or 'no') ")


# Loop through the candy_cart to say what candies were brought home
print("I brought home with me...")
for candy in candy_cart:
    print(candy)
##########################
##########################
###   ./04-house_of_pies.py  
##########################


# Initial variable to track shopping status
shopping = 'y'

# List to track pie purchases
pie_purchases = []

# Pie List
pie_list = ["Pecan", "Apple Crisp", "Bean", "Banoffee", "Black Bun",
            "Blueberry", "Buko", "Burek", "Tamale", "Steak"]

# Display initial message
print("Welcome to the House of Pies! Here are our pies:")

# While we are still shopping...
while shopping == "y":

    # Show pie selection prompt
    print("---------------------------------------------------------------------")
    print("(1) Pecan, (2) Apple Crisp, (3) Bean, (4) Banoffee, " +
          " (5) Black Bun, (6) Blueberry, (7) Buko, (8) Burek, " +
          " (9) Tamale, (10) Steak ")

    pie_choice = input("Which would you like? ")

    # Add pie to the pie list
    pie_purchases.append(pie_choice)

    print("------------------------------------------------------------------------")

    # Inform the customer of the pie purchase
    print("Great! We'll have that " + pie_list[int(pie_choice) - 1] + " right out for you.")

    # Provide exit option
    shopping = input("Would you like to make another purchase: (y)es or (n)o? ")

# Once the pie list is complete
print("------------------------------------------------------------------------")
print("You purchased a total of " + str(len(pie_purchases)) + ".")
##########################
##########################
###   ./04-house_of_pies_bonus.py  
##########################


# Initial variable to track shopping status
shopping = 'y'

# List to track pie purchases
pie_purchases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# Pie List
pie_list = ["Pecan", "Apple Crisp", "Bean", "Banoffee", "Black Bun",
            "Blueberry", "Buko", "Burek", "Tamale", "Steak"]

# Display initial message
print("Welcome to the House of Pies! Here are our pies:")

# While we are still shopping...
while shopping == "y":

    # Show pie selection prompt
    print("---------------------------------------------------------------------")
    print("(1) Pecan, (2) Apple Crisp, (3) Bean, (4) Banoffee, " +
          " (5) Black Bun, (6) Blueberry, (7) Buko, (8) Burek, " +
          " (9) Tamale, (10) Steak ")

    pie_choice = input("Which would you like? ")

    # Get index of the pie from the selected number
    choice_index = int(pie_choice) - 1

    # Add pie to the pie list by finding the matching index and adding one to its value
    pie_purchases[choice_index] += 1

    print("------------------------------------------------------------------------")

    # Inform the customer of the pie purchase
    print("Great! We'll have that " + pie_list[choice_index] + " right out for you.")

    # Provide exit option
    shopping = input("Would you like to make another purchase: (y)es or (n)o? ")

# Once the pie list is complete
print("------------------------------------------------------------------------")

# Count instances of each pie
print("You purchased: ")

# Loop through the full pie list
for pie_index in range(len(pie_list)):
    pie_count = str(pie_purchases[pie_index])
    pie_name = str(pie_list[pie_index])

    # Gather the count of each pie in the pie list and print them alongside the pies
    print(pie_count + " " + pie_name)
##########################
##########################
###   ./05-read_file.py  
##########################


# Store the file path associated with the file (note the backslash may be OS specific)
file = '../Resources/input.txt'

# Open the file in "read" mode ('r') and store the contents in the variable "text"
with open(file, 'r') as text:

    # This stores a reference to a file stream
    print(text)

    # Store all of the text inside a variable called "lines"
    lines = text.read()

    # Print the contents of the text file
    print(lines)
##########################
##########################
###   ./06-imports.py  
##########################


# Import the random and string Module
import random
import string

# Utilize the string module's custom method: ".ascii_letters"
print(string.ascii_letters)

# Utilize the random module's custom method randint
for x in range(10):
    print(random.randint(1, 10))
##########################
##########################
###   ./07-read_csv.py  
##########################


# First we'll import the os module
# This will allow us to create file paths across operating systems
import os

# Module for reading CSV files
import csv

csvpath = os.path.join('..', 'Resources', 'accounting.csv')

# # Method 1: Plain Reading of CSV files
# with open(csvpath, 'r') as file_handler:
#     lines = file_handler.read()
#     print(lines)
#     print(type(lines))


# Method 2: Improved Reading using CSV module

with open(csvpath, newline='') as csvfile:

    # CSV reader specifies delimiter and variable that holds contents
    csvreader = csv.reader(csvfile, delimiter=',')

    print(csvreader)

    # Read the header row first (skip this step if there is now header)
    csv_header = next(csvreader)
    print(f"CSV Header: {csv_header}")

    # Read each row of data after the header
    for row in csvreader:
        print(row)
##########################
##########################
###   ./08-netflix.py  
##########################


# Modules
import os
import csv

# Prompt user for video lookup
video = input("What show or movie are you looking for? ")

# Set path for file
csvpath = os.path.join("..", "Resources", "netflix_ratings.csv")

# Bonus
# ------------------------------------------
# Set variable to check if we found the video
found = False

# Open the CSV
with open(csvpath, newline="") as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")

    # Loop through looking for the video
    for row in csvreader:
        if row[0] == video:
            print(row[0] + " is rated " + row[1] + " with a rating of " + row[5])

            # BONUS: Set variable to confirm we have found the video
            found = True

            # BONUS: Stop at first results to avoid duplicates
            break

    # If the video is never found, alert the user
    if found is False:
        print("Sorry about this, we don't seem to have what you are looking for!")
##########################
##########################
###   ./09-write-csv.py  
##########################


# Dependencies
import os
import csv

# Specify the file to write to
output_path = os.path.join("..", "output", "new.csv")

# Open the file using "write" mode. Specify the variable to hold the contents
with open(output_path, 'w', newline='') as csvfile:

    # Initialize csv.writer
    csvwriter = csv.writer(csvfile, delimiter=',')

    # Write the first row (column headers)
    csvwriter.writerow(['First Name', 'Last Name', 'SSN'])

    # Write the second row
    csvwriter.writerow(['Caleb', 'Frost', '505-80-2901'])
##########################
##########################
###   ./10-zipper.py  
##########################


import csv
import os

# Three Lists
indexes = [1, 2, 3, 4]
employees = ["Michael", "Dwight", "Meredith", "Kelly"]
department = ["Boss", "Sales", "Sales", "HR"]

# Zip all three lists together into tuples
roster = zip(indexes, employees, department)

# save the output file path
output_file = os.path.join("output.csv")

# open the output file, create a header row, and then write the zipped object to the csv
with open(output_file, "w", newline="") as datafile:
    writer = csv.writer(datafile)

    writer.writerow(["Index", "Employee", "Department"])

    writer.writerows(roster)


# # to print out to terminal:
# #comment out above code and run the code below
# for employee in roster:
#     print(employee)
##########################
##########################
###   ./11-web_solvedorig.py  
##########################


import os
import csv

udemy_csv = os.path.join("..", "Resources", "web_starter.csv")

# Lists to store data
title = []
price = []
subscribers = []
reviews = []
review_percent = []
length = []

# with open(udemy_csv, newline="", encoding='utf-8') as csvfile:
with open(udemy_csv, newline="", encoding="utf8") as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")
    for row in csvreader:
        # Add title
        title.append(row[1])

        # Add price
        price.append(row[4])

        # Add number of subscribers
        subscribers.append(row[5])

        # Add amount of reviews
        reviews.append(row[6])

        # Determine percent of review left to 2 decimal places
        percent = round(int(row[6])/int(row[5]), 2)
        review_percent.append(percent)

        # Get length of the course to just a number
        new_length = row[9].split(" ")
        length.append(float(new_length[0]))

# Zip lists together
cleaned_csv = zip(title, price, subscribers, reviews, review_percent, length)

# Set variable for output file
output_file = os.path.join("web_final.csv")

#  Open the output file
with open(output_file, "w", newline="", encoding="utf8") as datafile:
    writer = csv.writer(datafile)

    # Write the header row
    writer.writerow(["Title", "Course Price", "Subscribers", "Reviews Left",
                     "Percent of Reviews", "Length of Course"])

    # Write in zipped rows
    writer.writerows(cleaned_csv)
##########################
##########################
###   ./12-functions.py  
##########################


# Define the function and tell it to print "Hello!" when called
def printHello():
    print(f"Hello!")


# Call the function within the application to ensure the code is run
printHello()
# -------------#


# Functions that take in and use parameters can also be defined
def printName(name):
    print("Hello " + name + "!")


# When calling a function with a parameter, a parameter must be passed into the function
printName("Bob Smith")
# -------------#

# The prime use case for functions is in being able to run the same code for different values
listOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
listTwo = [11, 12, 13, 14, 15]


def listInformation(simpleList):
    print(f"The values within the list are...")
    for value in simpleList:
        print(value)
    print("The length of this list is... " + str(len(simpleList)))


listInformation(listOne)
listInformation(listTwo)




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 03
#####  END OF class day 02
########################


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 03  #########
#####  class day 03  #########
#####


##########################
##########################
###   ./01-cereal_bonus_solved.py  
##########################


import os
import csv

cereal_csv_path = os.path.join("..", "Resources", "cereal_bonus.csv")

with open(cereal_csv_path, newline="") as csvfile:
    csv_reader = csv.reader(csvfile, delimiter=",")

    # @NOTE: This time, we do not use `next(csv_reader)` because there is no header for this file

    # Read through each row of data after the header
    for row in csv_reader:

        # Convert row to float and compare to grams of fiber
        if float(row[7]) >= 5:
            print(row)
##########################
##########################
###   ./01-cereal_solved.py  
##########################


import os
import csv

cereal_csv = os.path.join("..", "Resources", "cereal.csv")

# Open and read csv
with open(cereal_csv, newline="") as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")

    # Read the header row first (skip this part if there is no header)
    csv_header = next(csvfile)
    print(f"Header: {csv_header}")

    # Read through each row of data after the header
    for row in csvreader:

        # Convert row to float and compare to grams of fiber
        if float(row[7]) >= 5:
            print(row)
##########################
##########################
###   ./02-dictionaries.py  
##########################


# Unlike lists, dictionaries store information in pairs
# ---------------------------------------------------------------

# A list of actors
actors = ["Tom Cruise",
          "Angelina Jolie",
          "Kristen Stewart",
          "Denzel Washington"]

# A dictionary of an actor
actor = {"name": "Tom Cruise"}
print(f'{actor["name"]}')

# ---------------------------------------------------------------

# A dictionary can contain multiple pairs of information
actress = {
    "name": "Angelina Jolie",
    "genre": "Action",
    "nationality": "United States"
}

# ---------------------------------------------------------------

# A dictionary can contain multiple types of information
another_actor = {
    "name": "Sylvester Stallone",
    "age": 62,
    "married": True,
    "best movies": [
        "Rocky",
        "Rocky 2",
        "Rocky 3"]}
print(f'{another_actor["name"]} was in {another_actor["best movies"][0]}')
# ---------------------------------------------------------------

# A dictionary can even contain another dictionary
film = {
    "title": "Interstellar",
    "revenues": {
        "United States": 360,
        "China": 250,
        "United Kingdom": 73
    }
}
print(f'{film["title"]} made {film["revenues"]["United States"]}'" in the US.")
# ---------------------------------------------------------------
##########################
##########################
###   ./03-HobbyBook_Solved.py  
##########################


# Dictionary full of info
my_info = {"name": "Rex",
           "occupation": "dog",
           "age": 21,
           "hobbies": ["barking", "eating", "sleeping", "loving my owner"],
           "wake-up": {"Mon": 5, "Friday": 5, "Saturday": 10, "Sunday": 9}}

# Print out results are stored in the dictionary
print(f'Hello I am {my_info["name"]} and I am a {my_info["occupation"]}')
print(f'I have {len(my_info["hobbies"])} hobbies!')
print(f'On the weekend I get up at {my_info["wake-up"]["Saturday"]}')
##########################
##########################
###   ./04-comprehensions.py  
##########################


word = "halibut"

# Loop through each letter in the string
# and push to an array
letters = []
for letter in word:
    letters.append(letter)

print(letters)

# List comprehensions provide concise syntax for creating lists
letters = [letter for letter in word]

print(letters)

# We can manipulate each element as we go
capital_letters = []
for letter in word:
    capital_letters.append(letter.upper())

print(capital_letters)

# List Comprehension for the above
capital_letters = [letter.upper() for letter in word]

print(capital_letters)

# We can also add conditional logic (if statements) to a list comprehension
july_temperatures = [87, 85, 92, 79, 106]
hot_days = []
for temperature in july_temperatures:
    if temperature > 90:
        hot_days.append(temperature)
print(hot_days)

# List Comprehension with conditional
hot_days = [temperature for temperature in july_temperatures if temperature > 90]

print(hot_days)
##########################
##########################
###   ./05-comprehensions.py  
##########################


names = []
for _ in range(5):
    name = input("Please enter the name of someone you know. ")
    names.append(name)

lowercased = [name.lower() for name in names]
titlecased = [name.title() for name in lowercased]
invitations = [
    f"Dear {name}, please come to the wedding this Saturday!" for name in titlecased]

for invitation in invitations:
    print(invitation)
##########################
##########################
###   ./06-functions.py  
##########################


# Basic Definition
def name(parameters):
    # code goes here
    return


# Simple Function with no parameters
def show():
    print(f"Hi!")


# You use parenthesis to run the code in a function
show()


# Simple function with one parameter
def show(message):
    print(message)


# Think of the parameter `message` as a variable
# You assign the string "Hello, World!" when you call the function
# This is like saying `message = "Hello, World!"`
show("Hello, World!")


# Functions can have more than one parameter
def make_quesadilla(protein, topping):
    quesadilla = f"Here is a {protein} quesadilla with {topping}"
    print(quesadilla)


# Supply the arguments (values) when calling the function
make_quesadilla("beef", "guacamole")
make_quesadilla("chicken", "salsa")

# @NOTE: Order is important when supplying arguments!
make_quesadilla("sour cream", "beef")


# We can also specify default values for parameters
def make_quesadilla(protein, topping="sour cream"):
    quesadilla = f"Here is a {protein} quesadilla with {topping}"
    print(quesadilla)


# Make a quesadilla using the default topping
make_quesadilla("chicken")

# Make a quesadilla with a new topping
make_quesadilla("beef", "guacamole")


# Functions can return a value
def square(number):
    return number * number


# You can save the value that is returned
squared = square(2)
print(squared)

# You can also just print the return value of a function
print(square(2))
print(square(3))
##########################
##########################
###   ./07-main.py  
##########################


# Write a function that returns the arithmetic average for a list of numbers
def average(numbers):
    length = len(numbers)
    total = 0.0
    for number in numbers:
        total += number
    return total / length


# Test your function with the following:
print(average([1, 5, 9]))
print(average(range(11)))
##########################
##########################
###   ./08-wrestling_functions.py  
##########################


import os
import csv

# Path to collect data from the Resources folder
wrestling_csv = os.path.join('..', 'Resources', 'WWE-Data-2016.csv')


# Define the function and have it accept the 'wrestler_data' as its sole parameter
def print_percentages(wrestler_data):
    # For readability, it can help to assign your values to variables with descriptive names
    name = str(wrestler_data[0])
    wins = int(wrestler_data[1])
    losses = int(wrestler_data[2])
    draws = int(wrestler_data[3])

    # Total matches can be found by adding wins, losses, and draws together
    total_matches = wins + losses + draws

    # Win percent can be found by dividing the the total wins by the total matches and multiplying by 100
    win_percent = (wins / total_matches) * 100

    # Loss percent can be found by dividing the total losses by the total matches and multiplying by 100
    loss_percent = (losses / total_matches) * 100

    # Draw percent can be found by dividing the total draws by the total matches and multiplying by 100
    draw_percent = (draws / total_matches) * 100

    # If the loss percentage is over 50, type_of_wrestler is "Jobber". Otherwise it is "Superstar".
    if loss_percent > 50:
        type_of_wrestler = "Jobber"
    else:
        type_of_wrestler = "Superstar"

    # Print out the wrestler's name and their percentage stats
    print(f"Stats for {name}")
    print(f"WIN PERCENT: {str(win_percent)}")
    print(f"LOSS PERCENT: {str(loss_percent)}")
    print(f"DRAW PERCENT: {str(draw_percent)}")
    print(f"{name} is a {type_of_wrestler}")


# Read in the CSV file
with open(wrestling_csv, 'r') as csvfile:

    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    header = next(csvreader)

    # Prompt the user for what wrestler they would like to search for
    name_to_check = input("What wrestler do you want to look for? ")

    # Loop through the data
    for row in csvreader:

        # If the wrestler's name in a row is equal to that which the user input, run the 'print_percentages()' function
        if name_to_check == row[0]:
            print_percentages(row)




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 03
#####  END OF class day 03
########################


