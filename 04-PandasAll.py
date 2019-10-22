#############################################
#############################################

NetflixRemix
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[3]:


# Modules
import os
import csv


# In[4]:


# Prompt user for video lookup
video = input("What show or movie are you looking for? ")


# In[7]:


# Set path for file
csvpath = os.path.join("Resources", "netflix_ratings.csv")

# Set variable to check if we found the video
found = False
found


# In[9]:


# Open the CSV



with open(csvpath, newline="") as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")

    # Loop through looking for the video
    for row in csvreader:
        if row[0] == video:
            print(row[0] + " is rated " + row[1] +
                  " with a rating of " + row[5])

            # Set variable to confirm we have found the video
            found = True

    # If the video is never found, alert the user
    if found == False:
        print("We don't seem to have what you are looking for!")


# In[ ]:


#############################################
#############################################

03 creating data frames
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Dependencies
import pandas as pd


# In[2]:


# We can create a Pandas Series from a raw list
my_list = ["UCLA", "UC Berkeley", "UC Irvine",
                         "University of Central Florida", "Rutgers University"]
data_series = pd.Series(my_list)
data_series


# In[3]:


# Convert a list of dictionarys into a dataframe
states_dicts = [{"STATE": "New Jersey", "ABBREVIATION": "NJ"},
                {"STATE": "New York", "ABBREVIATION": "NY"}]

df_states = pd.DataFrame(states_dicts)
df_states


# In[4]:


# Convert a single dictionary containing lists into a dataframe
df = pd.DataFrame(
    {"Dynasty": ["Early Dynastic Period", "Old Kingdom"],
     "Pharoh": ["Thinis", "Memphis"]
     }
)
df


# In[5]:


df.dtypes


# In[13]:


d = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(d)
df


# https://pandas.pydata.org/pandas-docs/version/0.23.4/generated/pandas.DataFrame.html

# In[11]:


df.dtypes


# In[ ]:


#############################################
#############################################

04 DataFrameShop
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[2]:


# Import Dependencies
import pandas as pd


# In[5]:


# Create a DataFrame of frames using a dictionary of lists
frame_df = pd.DataFrame({
    "Frame": ["Ornate", "Classical", "Modern", "Wood", "Cardboard"],
    "Price": [15.00, 12.50, 10.00, 5.00, 1.00],
    "Sales": [100, 200, 150, 300, "N/A"]
})
frame_df


# In[6]:


# Create a DataFrame of paintings using a list of dictionaries
painting_df = pd.DataFrame([
    {"Painting": "Mona Lisa (Knockoff)", "Price": 25,
     "Popularity": "Very Popular"},
    {"Painting": "Van Gogh (Knockoff)", "Price": 20, "Popularity": "Popular"},
    {"Painting": "Starving Artist", "Price": 10, "Popularity": "Average"},
    {"Painting": "Toddler Drawing", "Price": 1, "Popularity": "Not Popular"}
])
painting_df


# In[ ]:





# In[ ]:

#############################################
#############################################

05 data functions
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Dependencies
import pandas as pd


# In[2]:


# Save path to data set in a variable
data_file = "Resources/dataSet.csv"


# In[11]:


# Use Pandas to read data
# pd.DataFrame
data_file_pd = pd.read_csv(data_file)
data_file_pd.head()


# In[12]:


# Display a statistical overview of the DataFrame
data_file_pd.describe()


# In[16]:


# Reference a single column within a DataFrame
data_file_pd["First Name"].head()


# In[19]:


# Reference multiple columns within a DataFrame
data_file_pd[["Gender","Amount"]].head()


# In[21]:


# The mean method averages the series
average = data_file_pd["Amount"].mean()
average


# In[22]:


# The sum method adds every entry in the series
total = data_file_pd["Amount"].sum()
total


# In[23]:


# The unique method shows every element of the series that appears only once
unique = data_file_pd["Last Name"].unique()
unique


# In[24]:


# The value_counts method counts unique values in a column
count = data_file_pd["Gender"].value_counts()
count


# In[27]:


# Calculations can also be performed on Series and added into DataFrames as new columns
thousands_of_dollars = data_file_pd["Amount"] + 100
data_file_pd["Thousands of Dollars"] = thousands_of_dollars

data_file_pd.head()


# In[ ]:


data_file_pd["Amount"] + 1


# In[28]:


data_file_pd.to_csv('/tmp/jeff.csv')


# In[29]:


get_ipython().system('cat /tmp/jeff.csv')


# In[ ]:

#############################################
#############################################

06 Training Grounds
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import Dependencies
import pandas as pd
import random


# In[2]:


# A seriously gigantic DataFrame of individuals' names, their trainers, their weight, and their days as gym members
training_data = pd.DataFrame({
    "Name":["Gino Walker","Hiedi Wasser","Kerrie Wetzel","Elizabeth Sackett","Jack Mitten","Madalene Wayman","Jamee Horvath","Arlena Reddin","Tula Levan","Teisha Dreier","Leslie Carrier","Arlette Hartson","Romana Merkle","Heath Viviani","Andres Zimmer","Allyson Osman","Yadira Caggiano","Jeanmarie Friedrichs","Leann Ussery","Bee Mom","Pandora Charland","Karena Wooten","Elizabet Albanese","Augusta Borjas","Erma Yadon","Belia Lenser","Karmen Sancho","Edison Mannion","Sonja Hornsby","Morgan Frei","Florencio Murphy","Christoper Hertel","Thalia Stepney","Tarah Argento","Nicol Canfield","Pok Moretti","Barbera Stallings","Muoi Kelso","Cicely Ritz","Sid Demelo","Eura Langan","Vanita An","Frieda Fuhr","Ernest Fitzhenry","Ashlyn Tash","Melodi Mclendon","Rochell Leblanc","Jacqui Reasons","Freeda Mccroy","Vanna Runk","Florinda Milot","Cierra Lecompte","Nancey Kysar","Latasha Dalton","Charlyn Rinaldi","Erline Averett","Mariko Hillary","Rosalyn Trigg","Sherwood Brauer","Hortencia Olesen","Delana Kohut","Geoffrey Mcdade","Iona Delancey","Donnie Read","Cesar Bhatia","Evia Slate","Kaye Hugo","Denise Vento","Lang Kittle","Sherry Whittenberg","Jodi Bracero","Tamera Linneman","Katheryn Koelling","Tonia Shorty","Misha Baxley","Lisbeth Goering","Merle Ladwig","Tammie Omar","Jesusa Avilla","Alda Zabala","Junita Dogan","Jessia Anglin","Peggie Scranton","Dania Clodfelter","Janis Mccarthy","Edmund Galusha","Tonisha Posey","Arvilla Medley","Briana Barbour","Delfina Kiger","Nia Lenig","Ricarda Bulow","Odell Carson","Nydia Clonts","Andree Resendez","Daniela Puma","Sherill Paavola","Gilbert Bloomquist","Shanon Mach","Justin Bangert","Arden Hokanson","Evelyne Bridge","Hee Simek","Ward Deangelis","Jodie Childs","Janis Boehme","Beaulah Glowacki","Denver Stoneham","Tarra Vinton","Deborah Hummell","Ulysses Neil","Kathryn Marques","Rosanna Dake","Gavin Wheat","Tameka Stoke","Janella Clear","Kaye Ciriaco","Suk Bloxham","Gracia Whaley","Philomena Hemingway","Claudette Vaillancourt","Olevia Piche","Trey Chiles","Idalia Scardina","Jenine Tremble","Herbert Krider","Alycia Schrock","Miss Weibel","Pearlene Neidert","Kina Callender","Charlotte Skelley","Theodora Harrigan","Sydney Shreffler","Annamae Trinidad","Tobi Mumme","Rosia Elliot","Debbra Putt","Rena Delosantos","Genna Grennan","Nieves Huf","Berry Lugo","Ayana Verdugo","Joaquin Mazzei","Doris Harmon","Patience Poss","Magaret Zabel","Marylynn Hinojos","Earlene Marcantel","Yuki Evensen","Rema Gay","Delana Haak","Patricia Fetters","Vinnie Elrod","Octavia Bellew","Burma Revard","Lakenya Kato","Vinita Buchner","Sierra Margulies","Shae Funderburg","Jenae Groleau","Louetta Howie","Astrid Duffer","Caron Altizer","Kymberly Amavisca","Mohammad Diedrich","Thora Wrinkle","Bethel Wiemann","Patria Millet","Eldridge Burbach","Alyson Eddie","Zula Hanna","Devin Goodwin","Felipa Kirkwood","Kurtis Kempf","Kasey Lenart","Deena Blankenship","Kandra Wargo","Sherrie Cieslak","Ron Atha","Reggie Barreiro","Daria Saulter","Tandra Eastman","Donnell Lucious","Talisha Rosner","Emiko Bergh","Terresa Launius","Margy Hoobler","Marylou Stelling","Lavonne Justice","Kala Langstaff","China Truett","Louanne Dussault","Thomasena Samaniego","Charlesetta Tarbell","Fatimah Lade","Malisa Cantero","Florencia Litten","Francina Fraise","Patsy London","Deloris Mclaughlin"],
    "Trainer":['Bettyann Savory','Mariah Barberio','Gordon Perrine','Pa Dargan','Blanch Victoria','Aldo Byler','Aldo Byler','Williams Camire','Junie Ritenour','Gordon Perrine','Bettyann Savory','Mariah Barberio','Aldo Byler','Barton Stecklein','Bettyann Savory','Barton Stecklein','Gordon Perrine','Pa Dargan','Aldo Byler','Brittani Brin','Bettyann Savory','Phyliss Houk','Bettyann Savory','Junie Ritenour','Aldo Byler','Calvin North','Brittani Brin','Junie Ritenour','Blanch Victoria','Brittani Brin','Bettyann Savory','Blanch Victoria','Mariah Barberio','Bettyann Savory','Blanch Victoria','Brittani Brin','Junie Ritenour','Pa Dargan','Gordon Perrine','Phyliss Houk','Pa Dargan','Mariah Barberio','Phyliss Houk','Phyliss Houk','Calvin North','Williams Camire','Brittani Brin','Gordon Perrine','Bettyann Savory','Bettyann Savory','Pa Dargan','Phyliss Houk','Barton Stecklein','Blanch Victoria','Coleman Dunmire','Phyliss Houk','Blanch Victoria','Pa Dargan','Harland Coolidge','Calvin North','Bettyann Savory','Phyliss Houk','Bettyann Savory','Harland Coolidge','Gordon Perrine','Junie Ritenour','Harland Coolidge','Blanch Victoria','Mariah Barberio','Coleman Dunmire','Aldo Byler','Bettyann Savory','Gordon Perrine','Bettyann Savory','Barton Stecklein','Harland Coolidge','Aldo Byler','Aldo Byler','Pa Dargan','Junie Ritenour','Brittani Brin','Junie Ritenour','Gordon Perrine','Mariah Barberio','Mariah Barberio','Mariah Barberio','Bettyann Savory','Brittani Brin','Aldo Byler','Phyliss Houk','Blanch Victoria','Pa Dargan','Phyliss Houk','Brittani Brin','Barton Stecklein','Coleman Dunmire','Bettyann Savory','Bettyann Savory','Gordon Perrine','Blanch Victoria','Junie Ritenour','Phyliss Houk','Coleman Dunmire','Williams Camire','Harland Coolidge','Williams Camire','Aldo Byler','Harland Coolidge','Gordon Perrine','Brittani Brin','Coleman Dunmire','Calvin North','Phyliss Houk','Brittani Brin','Aldo Byler','Bettyann Savory','Brittani Brin','Gordon Perrine','Calvin North','Harland Coolidge','Coleman Dunmire','Harland Coolidge','Aldo Byler','Junie Ritenour','Blanch Victoria','Harland Coolidge','Blanch Victoria','Junie Ritenour','Harland Coolidge','Junie Ritenour','Gordon Perrine','Brittani Brin','Coleman Dunmire','Williams Camire','Junie Ritenour','Brittani Brin','Calvin North','Barton Stecklein','Barton Stecklein','Mariah Barberio','Coleman Dunmire','Bettyann Savory','Mariah Barberio','Pa Dargan','Barton Stecklein','Coleman Dunmire','Brittani Brin','Barton Stecklein','Pa Dargan','Barton Stecklein','Junie Ritenour','Bettyann Savory','Williams Camire','Pa Dargan','Calvin North','Williams Camire','Coleman Dunmire','Aldo Byler','Barton Stecklein','Coleman Dunmire','Blanch Victoria','Mariah Barberio','Mariah Barberio','Harland Coolidge','Barton Stecklein','Phyliss Houk','Pa Dargan','Bettyann Savory','Barton Stecklein','Harland Coolidge','Junie Ritenour','Pa Dargan','Mariah Barberio','Blanch Victoria','Williams Camire','Phyliss Houk','Phyliss Houk','Coleman Dunmire','Mariah Barberio','Gordon Perrine','Coleman Dunmire','Brittani Brin','Pa Dargan','Coleman Dunmire','Brittani Brin','Blanch Victoria','Coleman Dunmire','Gordon Perrine','Coleman Dunmire','Aldo Byler','Aldo Byler','Mariah Barberio','Williams Camire','Phyliss Houk','Aldo Byler','Williams Camire','Aldo Byler','Williams Camire','Coleman Dunmire','Phyliss Houk'],
    "Weight":[128,180,193,177,237,166,224,208,177,241,114,161,162,151,220,142,193,193,124,130,132,141,190,239,213,131,172,127,184,157,215,122,181,240,218,205,239,217,234,158,180,131,194,171,177,110,117,114,217,123,248,189,198,127,182,121,224,111,151,170,188,150,137,231,222,186,139,175,178,246,150,154,129,216,144,198,228,183,173,129,157,199,186,232,172,157,246,239,214,161,132,208,187,224,164,177,175,224,219,235,112,241,243,179,208,196,131,207,182,233,191,162,173,197,190,182,231,196,196,143,250,174,138,135,164,204,235,192,114,179,215,127,185,213,250,213,153,217,176,190,119,167,118,208,113,206,200,236,159,218,168,159,156,183,121,203,215,209,179,219,174,220,129,188,217,250,166,157,112,236,182,144,189,243,238,147,165,115,160,134,245,174,238,157,150,184,174,134,134,248,199,165,117,119,162,112,170,224,247,217],
    "Membership (Days)":[52,70,148,124,186,157,127,155,37,185,158,129,93,69,124,13,76,153,164,161,48,121,167,69,39,163,7,34,176,169,108,162,195,86,155,77,197,200,80,142,179,67,58,145,188,147,125,15,13,173,125,4,61,29,132,110,62,137,197,135,162,174,32,151,149,65,18,42,63,62,104,200,189,40,38,199,1,12,8,2,195,30,7,72,130,144,2,34,200,143,43,196,22,115,171,54,143,59,14,52,109,115,187,185,26,19,178,18,120,169,45,52,130,69,168,178,96,22,78,152,39,51,118,130,60,156,108,69,103,158,165,142,86,91,117,77,57,169,86,188,97,111,22,83,81,177,163,35,12,164,21,181,171,138,22,107,58,51,38,128,19,193,157,13,104,89,13,10,26,190,179,101,7,159,100,49,120,109,56,199,51,108,47,171,69,162,74,119,148,88,32,159,65,146,140,171,88,18,59,13]
})
training_data.head()


# In[3]:


# Collecting a summary of all numeric data
training_data.describe()


# In[4]:


# Finding the unique names of the trainers
training_data["Trainer"].unique()


# In[5]:


# Finding how many students each trainer has
training_data["Trainer"].value_counts()


# In[6]:


# Finding the average weight of all students
training_data["Weight"].mean()


# In[7]:


# Finding the combined weight of all students
training_data["Weight"].sum()


# In[8]:


# Converting the membership days into weeks and then adding a column to the DataFrame
weeks = training_data["Membership (Days)"]/7
training_data["Membership (Weeks)"] = weeks

training_data.head()


# In[ ]:

#############################################
#############################################

07 Column Manipulation
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import Dependencies
import pandas as pd


# In[2]:


# A gigantic DataFrame of individuals' names, their trainers, their weight, and their days as gym members
training_data = pd.DataFrame({
    "Name":["Gino Walker","Hiedi Wasser","Kerrie Wetzel","Elizabeth Sackett","Jack Mitten","Madalene Wayman","Jamee Horvath","Arlena Reddin","Tula Levan","Teisha Dreier","Leslie Carrier","Arlette Hartson","Romana Merkle","Heath Viviani","Andres Zimmer","Allyson Osman","Yadira Caggiano","Jeanmarie Friedrichs","Leann Ussery","Bee Mom","Pandora Charland","Karena Wooten","Elizabet Albanese","Augusta Borjas","Erma Yadon","Belia Lenser","Karmen Sancho","Edison Mannion","Sonja Hornsby","Morgan Frei","Florencio Murphy","Christoper Hertel","Thalia Stepney","Tarah Argento","Nicol Canfield","Pok Moretti","Barbera Stallings","Muoi Kelso","Cicely Ritz","Sid Demelo","Eura Langan","Vanita An","Frieda Fuhr","Ernest Fitzhenry","Ashlyn Tash","Melodi Mclendon","Rochell Leblanc","Jacqui Reasons","Freeda Mccroy","Vanna Runk","Florinda Milot","Cierra Lecompte","Nancey Kysar","Latasha Dalton","Charlyn Rinaldi","Erline Averett","Mariko Hillary","Rosalyn Trigg","Sherwood Brauer","Hortencia Olesen","Delana Kohut","Geoffrey Mcdade","Iona Delancey","Donnie Read","Cesar Bhatia","Evia Slate","Kaye Hugo","Denise Vento","Lang Kittle","Sherry Whittenberg","Jodi Bracero","Tamera Linneman","Katheryn Koelling","Tonia Shorty","Misha Baxley","Lisbeth Goering","Merle Ladwig","Tammie Omar","Jesusa Avilla","Alda Zabala","Junita Dogan","Jessia Anglin","Peggie Scranton","Dania Clodfelter","Janis Mccarthy","Edmund Galusha","Tonisha Posey","Arvilla Medley","Briana Barbour","Delfina Kiger","Nia Lenig","Ricarda Bulow","Odell Carson","Nydia Clonts","Andree Resendez","Daniela Puma","Sherill Paavola","Gilbert Bloomquist","Shanon Mach","Justin Bangert","Arden Hokanson","Evelyne Bridge","Hee Simek","Ward Deangelis","Jodie Childs","Janis Boehme","Beaulah Glowacki","Denver Stoneham","Tarra Vinton","Deborah Hummell","Ulysses Neil","Kathryn Marques","Rosanna Dake","Gavin Wheat","Tameka Stoke","Janella Clear","Kaye Ciriaco","Suk Bloxham","Gracia Whaley","Philomena Hemingway","Claudette Vaillancourt","Olevia Piche","Trey Chiles","Idalia Scardina","Jenine Tremble","Herbert Krider","Alycia Schrock","Miss Weibel","Pearlene Neidert","Kina Callender","Charlotte Skelley","Theodora Harrigan","Sydney Shreffler","Annamae Trinidad","Tobi Mumme","Rosia Elliot","Debbra Putt","Rena Delosantos","Genna Grennan","Nieves Huf","Berry Lugo","Ayana Verdugo","Joaquin Mazzei","Doris Harmon","Patience Poss","Magaret Zabel","Marylynn Hinojos","Earlene Marcantel","Yuki Evensen","Rema Gay","Delana Haak","Patricia Fetters","Vinnie Elrod","Octavia Bellew","Burma Revard","Lakenya Kato","Vinita Buchner","Sierra Margulies","Shae Funderburg","Jenae Groleau","Louetta Howie","Astrid Duffer","Caron Altizer","Kymberly Amavisca","Mohammad Diedrich","Thora Wrinkle","Bethel Wiemann","Patria Millet","Eldridge Burbach","Alyson Eddie","Zula Hanna","Devin Goodwin","Felipa Kirkwood","Kurtis Kempf","Kasey Lenart","Deena Blankenship","Kandra Wargo","Sherrie Cieslak","Ron Atha","Reggie Barreiro","Daria Saulter","Tandra Eastman","Donnell Lucious","Talisha Rosner","Emiko Bergh","Terresa Launius","Margy Hoobler","Marylou Stelling","Lavonne Justice","Kala Langstaff","China Truett","Louanne Dussault","Thomasena Samaniego","Charlesetta Tarbell","Fatimah Lade","Malisa Cantero","Florencia Litten","Francina Fraise","Patsy London","Deloris Mclaughlin"],
    "Trainer":['Bettyann Savory','Mariah Barberio','Gordon Perrine','Pa Dargan','Blanch Victoria','Aldo Byler','Aldo Byler','Williams Camire','Junie Ritenour','Gordon Perrine','Bettyann Savory','Mariah Barberio','Aldo Byler','Barton Stecklein','Bettyann Savory','Barton Stecklein','Gordon Perrine','Pa Dargan','Aldo Byler','Brittani Brin','Bettyann Savory','Phyliss Houk','Bettyann Savory','Junie Ritenour','Aldo Byler','Calvin North','Brittani Brin','Junie Ritenour','Blanch Victoria','Brittani Brin','Bettyann Savory','Blanch Victoria','Mariah Barberio','Bettyann Savory','Blanch Victoria','Brittani Brin','Junie Ritenour','Pa Dargan','Gordon Perrine','Phyliss Houk','Pa Dargan','Mariah Barberio','Phyliss Houk','Phyliss Houk','Calvin North','Williams Camire','Brittani Brin','Gordon Perrine','Bettyann Savory','Bettyann Savory','Pa Dargan','Phyliss Houk','Barton Stecklein','Blanch Victoria','Coleman Dunmire','Phyliss Houk','Blanch Victoria','Pa Dargan','Harland Coolidge','Calvin North','Bettyann Savory','Phyliss Houk','Bettyann Savory','Harland Coolidge','Gordon Perrine','Junie Ritenour','Harland Coolidge','Blanch Victoria','Mariah Barberio','Coleman Dunmire','Aldo Byler','Bettyann Savory','Gordon Perrine','Bettyann Savory','Barton Stecklein','Harland Coolidge','Aldo Byler','Aldo Byler','Pa Dargan','Junie Ritenour','Brittani Brin','Junie Ritenour','Gordon Perrine','Mariah Barberio','Mariah Barberio','Mariah Barberio','Bettyann Savory','Brittani Brin','Aldo Byler','Phyliss Houk','Blanch Victoria','Pa Dargan','Phyliss Houk','Brittani Brin','Barton Stecklein','Coleman Dunmire','Bettyann Savory','Bettyann Savory','Gordon Perrine','Blanch Victoria','Junie Ritenour','Phyliss Houk','Coleman Dunmire','Williams Camire','Harland Coolidge','Williams Camire','Aldo Byler','Harland Coolidge','Gordon Perrine','Brittani Brin','Coleman Dunmire','Calvin North','Phyliss Houk','Brittani Brin','Aldo Byler','Bettyann Savory','Brittani Brin','Gordon Perrine','Calvin North','Harland Coolidge','Coleman Dunmire','Harland Coolidge','Aldo Byler','Junie Ritenour','Blanch Victoria','Harland Coolidge','Blanch Victoria','Junie Ritenour','Harland Coolidge','Junie Ritenour','Gordon Perrine','Brittani Brin','Coleman Dunmire','Williams Camire','Junie Ritenour','Brittani Brin','Calvin North','Barton Stecklein','Barton Stecklein','Mariah Barberio','Coleman Dunmire','Bettyann Savory','Mariah Barberio','Pa Dargan','Barton Stecklein','Coleman Dunmire','Brittani Brin','Barton Stecklein','Pa Dargan','Barton Stecklein','Junie Ritenour','Bettyann Savory','Williams Camire','Pa Dargan','Calvin North','Williams Camire','Coleman Dunmire','Aldo Byler','Barton Stecklein','Coleman Dunmire','Blanch Victoria','Mariah Barberio','Mariah Barberio','Harland Coolidge','Barton Stecklein','Phyliss Houk','Pa Dargan','Bettyann Savory','Barton Stecklein','Harland Coolidge','Junie Ritenour','Pa Dargan','Mariah Barberio','Blanch Victoria','Williams Camire','Phyliss Houk','Phyliss Houk','Coleman Dunmire','Mariah Barberio','Gordon Perrine','Coleman Dunmire','Brittani Brin','Pa Dargan','Coleman Dunmire','Brittani Brin','Blanch Victoria','Coleman Dunmire','Gordon Perrine','Coleman Dunmire','Aldo Byler','Aldo Byler','Mariah Barberio','Williams Camire','Phyliss Houk','Aldo Byler','Williams Camire','Aldo Byler','Williams Camire','Coleman Dunmire','Phyliss Houk'],
    "Weight":[128,180,193,177,237,166,224,208,177,241,114,161,162,151,220,142,193,193,124,130,132,141,190,239,213,131,172,127,184,157,215,122,181,240,218,205,239,217,234,158,180,131,194,171,177,110,117,114,217,123,248,189,198,127,182,121,224,111,151,170,188,150,137,231,222,186,139,175,178,246,150,154,129,216,144,198,228,183,173,129,157,199,186,232,172,157,246,239,214,161,132,208,187,224,164,177,175,224,219,235,112,241,243,179,208,196,131,207,182,233,191,162,173,197,190,182,231,196,196,143,250,174,138,135,164,204,235,192,114,179,215,127,185,213,250,213,153,217,176,190,119,167,118,208,113,206,200,236,159,218,168,159,156,183,121,203,215,209,179,219,174,220,129,188,217,250,166,157,112,236,182,144,189,243,238,147,165,115,160,134,245,174,238,157,150,184,174,134,134,248,199,165,117,119,162,112,170,224,247,217],
    "Membership(Days)":[52,70,148,124,186,157,127,155,37,185,158,129,93,69,124,13,76,153,164,161,48,121,167,69,39,163,7,34,176,169,108,162,195,86,155,77,197,200,80,142,179,67,58,145,188,147,125,15,13,173,125,4,61,29,132,110,62,137,197,135,162,174,32,151,149,65,18,42,63,62,104,200,189,40,38,199,1,12,8,2,195,30,7,72,130,144,2,34,200,143,43,196,22,115,171,54,143,59,14,52,109,115,187,185,26,19,178,18,120,169,45,52,130,69,168,178,96,22,78,152,39,51,118,130,60,156,108,69,103,158,165,142,86,91,117,77,57,169,86,188,97,111,22,83,81,177,163,35,12,164,21,181,171,138,22,107,58,51,38,128,19,193,157,13,104,89,13,10,26,190,179,101,7,159,100,49,120,109,56,199,51,108,47,171,69,162,74,119,148,88,32,159,65,146,140,171,88,18,59,13]
})
training_data.head(10)


# In[3]:


# Collecting a list of all columns within the DataFrame
training_data.columns


# In[6]:


training_data.head()


# In[4]:


# Reorganizing the columns using double brackets
organized_df = training_data[["Name","Trainer","Membership(Days)","Weight"]]
organized_df.head()


# In[8]:


# Using .rename(columns={}) in order to rename columns
organized_df = organized_df.rename(columns={"Membership(Days)":"Membership in Days", "Weight":"Weight in Pounds"})
organized_df.head()


# In[ ]:

#############################################
#############################################

08 Hey Arnold
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[3]:


# Dependencies
import pandas as pd


# In[4]:


# Create a DataFrame with given columns and value
hey_arnold = pd.DataFrame(
    {"Character_in_show": ["Arnold", "Gerald", "Helga", "Phoebe", "Harold", "Eugene"],
     "color_of_hair": ["blonde", "black", "blonde", "black", "unknown", "red"],
     "Height": ["average", "tallish", "tallish", "short", "tall", "short"],
     "Football_Shaped_Head": [True, False, False, False, False, False]
     })

hey_arnold


# In[5]:


# Rename columns for readability
hey_arnold_renamed = hey_arnold.rename(columns={"Character_in_show": "Character",
                                                "color_of_hair": "Hair Color",
                                                "Height": "Height",
                                                "Football_Shaped_Head": "Football Head"
                                                })
hey_arnold_renamed


# In[6]:


# Organize the columns so they are in a more logical order
column_names = [
    "Character", "Football Head", "Hair Color", "Height"]
hey_arnold_alphabetical = hey_arnold_renamed[column_names]
hey_arnold_alphabetical


# In[ ]:




#############################################
#############################################

09 pandas reading files
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Dependencies
import pandas as pd


# In[2]:


# Store filepath in a variable
file_one = "Resources/DataOne.csv"


# In[3]:


# Read our Data file with the pandas library
# Not every CSV requires an encoding, but be aware this can come up
file_one_df = pd.read_csv(file_one, encoding="ISO-8859-1")


# In[4]:


# Show just the header
file_one_df.head()


# In[5]:


# Show a single column
file_one_df["first_name"].head()


# In[6]:



columns = ["first_name", "email"]
file_one_df[columns].head()


# In[7]:


# Head does not change the DataFrame--it only displays it
file_one_df.head()


# In[8]:


# Export file as a CSV
file_one_df.to_csv("Output/fileOne.csv", index=False, header=True)
file_one_df.to_csv("Output/fileOneWithIndex.csv", index=True, header=False,)


# In[10]:


get_ipython().system('head Output/fileOneWithIndex.csv')


# In[ ]:

#############################################
#############################################

10 Good Reads
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[8]:


# Import Dependencies
import pandas as pd


# In[9]:


# Make a reference to the books.csv file path
csv_path = "Resources/books.csv"

# Import the books.csv file as a DataFrame
books_df = pd.read_csv(csv_path, encoding="utf-8")
books_df.head()


# In[10]:



pd.read_csv(csv_path, encoding="iso-8859-1").head()


# In[11]:


# Remove unecessary columns from the DataFrame and save the new DataFrame
# Only keep: "isbn", "original_publication_year", "original_title", "authors",
# "ratings_1", "ratings_2", "ratings_3", "ratings_4", "ratings_5"
reduced_df = books_df[["isbn", "original_publication_year", "original_title", "authors",
                       "ratings_1", "ratings_2", "ratings_3", "ratings_4", "ratings_5"]]
reduced_df.head()


# In[12]:


# Rename the headers to be more explanatory
renamed_df = reduced_df.rename(columns={"isbn": "ISBN",
                                        "original_title": "Original Title",
                                        "original_publication_year": "Publication Year",
                                        "authors": "Authors",
                                        "ratings_1": "One Star Reviews",
                                        "ratings_2": "Two Star Reviews",
                                        "ratings_3": "Three Star Reviews",
                                        "ratings_4": "Four Star Reviews",
                                        "ratings_5": "Five Star Reviews", })
renamed_df.head()


# In[16]:


# Push the remade DataFrame to a new CSV file
renamed_df.to_csv("Output/books_clean.csv",
                  encoding="utf-8", index=False, header=True)


# In[15]:


get_ipython().system('cat Output/books_clean.csv')


# In[ ]:

#############################################
#############################################

11 Good Reads Summary
#############################################
#!/usr/bin/env python
# coding: utf-8

# In[2]:


# Import Dependencies
import pandas as pd


# In[3]:


# File to Load
goodreads_path = "Resources/books_clean.csv"

# Read the modified GoodReads csv and store into Pandas DataFrame
goodreads_df = pd.read_csv(goodreads_path, encoding="utf-8")
goodreads_df.head()


# In[4]:


# Calculate the number of unique authors in the DataFrame
author_count = len(goodreads_df["Authors"].unique())

# Calculate the earliest/latest year a book was published
earliest_year = goodreads_df["Publication Year"].min()
latest_year = goodreads_df["Publication Year"].max()

# Calculate the total reviews for the entire dataset
total_reviews = goodreads_df["One Star Reviews"].sum() + goodreads_df["Two Star Reviews"].sum()
+ goodreads_df["Three Star Reviews"].sum() + goodreads_df["Four Star Reviews"].sum()
+ goodreads_df["Five Star Reviews"].sum()



# In[4]:


# Place all of the data found into a summary DataFrame
summary_table = pd.DataFrame({"Total Unique Authors": author_count,
                              "Earliest Year": [earliest_year],
                              "Latest Year": [latest_year],
                              "Total Reviews": [total_reviews]})
summary_table


##########################################################
#PANDAS DAY TWO
############################################################
############################################################
# 01 loc and iloc
############################################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd


# In[2]:


file = "Resources/sampleData.csv"


# In[4]:


df_original = pd.read_csv(file)
df_original.head()
get_ipython().run_line_magic('pinfo', 'df_original.loc')


# In[4]:


# Set new index to last_name
df = df_original.set_index("last_name")
df.head()


# In[8]:


# Grab the data contained within the "Berry" row and the "Phone Number" column
berry_phone = df.loc["Berry", "Phone Number"]
print("Using Loc: " + berry_phone)

also_berry_phone = df.iloc[1, 2]
print("Using Iloc: " + also_berry_phone)

# really helpful
get_ipython().run_line_magic('pinfo', 'print')


# In[9]:


# Grab the first five rows of data and the columns from "id" to "Phone Number"
# The problem with using "last_name" as the index is that the values are not unique so duplicates are returned

richardson_to_morales = df.loc[["Richardson", "Berry", "Hudson",
                                "Mcdonald", "Morales"], ["id", "first_name", "Phone Number"]]
print(richardson_to_morales)

print()

# Using iloc[] will not find duplicates since a numeric index is always unique
also_richardson_to_morales = df.iloc[0:4, 0:3]
print(also_richardson_to_morales)


# In[10]:


# The following will select all rows for columns `first_name` and `Phone Number`
# : means all rows ie first row to infinity

df.loc[:, ["first_name", "Phone Number"]].head()


# In[14]:


# the following logic test/conditional statement returns a series of boolean values
named_billy = df["first_name"] == "Billy"
named_billy


# In[15]:


# or filter and return the dataframe that matches
named_billy = df[df["first_name"] == "Billy"]
named_billy.head()


# In[18]:


# Loc and Iloc also allow for conditional statments to filter rows of data
# using Loc on the logic test above only returns rows where the result is True
only_billys = df.loc[df["first_name"] == "Billy", :]
print(only_billys)

print()

# Multiple conditions can be set to narrow down or widen the filter
only_billy_or_peter = df.loc[(df["first_name"] == "Billy") | (
    df["first_name"] == "Peter"), :]
print(only_billy_or_peter)


# In[ ]:




############################################################
############################################################
# 02 Good Movies
############################################################
#!/usr/bin/env python
# coding: utf-8

# In[6]:


# Dependencie
import pandas as pd


# In[4]:


# Load in file
movie_file = "Resources/movie_scores.csv"


# In[5]:


# Read and display the CSV with Pandas
movie_file_pd = pd.read_csv(movie_file)
movie_file_pd.head()


# In[7]:


# List all the columns in the table
movie_file_pd.columns


# In[10]:


# We only want IMDb data, so create a new table that takes the Film and all the columns relating to IMDB
imdb_table = movie_file_pd[["FILM", "IMDB", "IMDB_norm",
                            "IMDB_norm_round", "IMDB_user_vote_count"]]
imdb_table.head()


# In[11]:


# We only like good movies, so find those that scored over 7, and ignore the norm rating
columns = [
    "FILM", "IMDB", "IMDB_user_vote_count"]
good_movies = movie_file_pd.loc[movie_file_pd["IMDB"] > 7, columns]
good_movies.head()


# In[12]:


# Find less popular movies--i.e., those with fewer than 20K votes
unknown_movies = good_movies.loc[good_movies["IMDB_user_vote_count"] < 20000, [
    "FILM", "IMDB", "IMDB_user_vote_count"]]
unknown_movies.head()


# In[ ]:


# Finally, export this file to a spreadsheet so we can keep track of out new future watch list without the index
unknown_movies.to_excel("output/movieWatchlist.xlsx", index=False)



############################################################
############################################################
# 03 Clening Data
############################################################
#!/usr/bin/env python
# coding: utf-8

# In[4]:


# Dependencies
import pandas as pd
import numpy as np


# In[5]:


# Name of the CSV file
file = 'Resources/donors2008.csv'


# In[6]:


# The correct encoding must be used to read the CSV in pandas
df = pd.read_csv(file, encoding="ISO-8859-1")


# In[7]:


# Preview of the DataFrame
# Note that FIELD8 is likely a meaningless column
df.head()


# In[8]:


# Delete extraneous column

del df['FIELD8']

df.head()

# equivalent
# df.drop(['FIELD8'],axis=1, inplace=True)


# In[9]:


# Identify incomplete columns
df.count()


# In[10]:


# Drop all rows with missing information
# any = anything that is missing remove the row
# other option is 'all' which all values need to be na
df = df.dropna(how='any')


# In[11]:


# Verify dropped rows
df.count()


# In[12]:


# The Amount column is the wrong data type. It should be floating point numeric.
df.dtypes


# In[13]:


# Display an overview of the Employers column
df['Employer'].value_counts()


# In[14]:


# Clean up Employer category. Replace 'Self Employed' and 'Self' with 'Self-Employed'
df['Employer'] = df['Employer'].replace(
    {'Self Employed': 'Self-Employed', 'Self': 'Self-Employed'})


# In[15]:


# Verify clean-up.
df['Employer'].value_counts()


# In[16]:


df['Employer'] = df['Employer'].replace({'Not Employed': 'Unemployed'})
df['Employer'].value_counts()


# In[17]:


# Display a statistical overview
# We can infer the maximum allowable individual contribution from 'max'
df.describe()


# In[ ]:




############################################################
############################################################
# 04 Portland Crime
############################################################
#!/usr/bin/env python
# coding: utf-8

# In[ ]:


# Import Dependencies
import pandas as pd


# In[ ]:


# Reference the file where the CSV is located
crime_csv_path = "Resources/crime_incident_data2017.csv"

# Import the data into a Pandas DataFrame
crime_df = pd.read_csv(crime_csv_path)
crime_df


# In[3]:


# look for missing values
crime_df.count()


# In[4]:


# drop null rows
no_null_crime_df = crime_df.dropna(how='any')


# In[5]:


# verify counts
no_null_crime_df.count()


# In[6]:


# Check to see if there are any values with mispelled or similar values in "Offense Type"
no_null_crime_df["Offense Type"].value_counts()


# In[7]:


# Combining similar offenses together
no_null_crime_df = no_null_crime_df.replace(
    {"Commercial Sex Acts": "Prostitution", "Assisting or Promoting Prostitution": "Prostitution"})
no_null_crime_df


# In[8]:


# Check to see if you comnbined similar offenses correctly in "Offense Type".
no_null_crime_df["Offense Type"].value_counts()


# In[9]:


# Create a new DataFrame that looks into a specific neighborhood
vernon_crime_df = no_null_crime_df.loc[no_null_crime_df["Neighborhood"] == "Vernon"]
vernon_crime_df


# In[ ]:




############################################################
############################################################
# 05 Pandas Recap
############################################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import the Pandas library
import pandas as pd


# In[2]:


# Create a reference the CSV file desired
csv_path = "Resources/ufoSightings.csv"

# Read the CSV into a Pandas DataFrame
ufo_df = pd.read_csv(csv_path)

# Print the first five rows of data to the screen
ufo_df.head()


# In[3]:


# Check to see if there are any rows with missing data
ufo_df.count()


# In[4]:


# Remove the rows with missing data
clean_ufo_df = ufo_df.dropna(how="any")
clean_ufo_df.count()


# In[5]:


# Collect a list of sightings seen in the US
columns = [
    "datetime",
    "city",
    "state",
    "country",
    "shape",
    "duration (seconds)",
    "duration (hours/min)",
    "comments",
    "date posted"
]

# Filter the data so that only those sightings in the US are in a DataFrame
usa_ufo_df = clean_ufo_df.loc[clean_ufo_df["country"] == "us", columns]
usa_ufo_df.head()


# In[6]:


# Count how many sightings have occured within each state
state_counts = usa_ufo_df["state"].value_counts()
state_counts


# In[7]:


# Convert the state_counts Series into a DataFrame
state_ufo_counts_df = pd.DataFrame(state_counts)
state_ufo_counts_df.head()


# In[8]:


# Convert the column name into "Sum of Sightings"
state_ufo_counts_df = state_ufo_counts_df.rename(
    columns={"state": "Sum of Sightings"})
state_ufo_counts_df.head()


# In[9]:


# Want to add up the seconds UFOs are seen? There is a problem
# Problem can be seen by examining datatypes within the DataFrame
usa_ufo_df.dtypes


# In[10]:


# Using astype() to convert a column's data into floats
usa_ufo_df.loc[:, "duration (seconds)"] = usa_ufo_df["duration (seconds)"].astype("float")
usa_ufo_df.dtypes


# In[11]:


# Now it is possible to find the sum of seconds
usa_ufo_df["duration (seconds)"].sum()


# In[12]:


usa_ufo_df["duration (seconds)"].astype("float")


# In[ ]:




############################################################
############################################################
# 06 Group By
############################################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import Dependencies
import pandas as pd


# In[2]:


# Create a reference the CSV file desired
csv_path = "Resources/ufoSightings.csv"

# Read the CSV into a Pandas DataFrame
ufo_df = pd.read_csv(csv_path)

# Print the first five rows of data to the screen
ufo_df.head()


# In[3]:


# Remove the rows with missing data
clean_ufo_df = ufo_df.dropna(how="any")
clean_ufo_df.count()


# In[4]:


clean_ufo_df.head()


# In[5]:


# Converting the "duration (seconds)" column's values to numeric
converted_ufo = clean_ufo_df.copy() # copy the original to another df
converted_ufo["duration (seconds)"] = converted_ufo.loc[:, "duration (seconds)"].astype(float)


# In[6]:


converted_ufo.head()


# In[7]:


# Filter the data so that only those sightings in the US are in a DataFrame
usa_ufo_df = converted_ufo.loc[converted_ufo["country"] == "us", :]
usa_ufo_df.head()


# In[8]:


# Count how many sightings have occured within each state
state_counts = usa_ufo_df["state"].value_counts()
state_counts.head()


# In[9]:


# Using GroupBy in order to separate the data into fields according to "state" values
grouped_usa_df = usa_ufo_df.groupby(['state'])

# The object returned is a "GroupBy" object and cannot be viewed normally...
print(grouped_usa_df)

# In order to be visualized, a data function must be used...
grouped_usa_df.count().head(10)


# In[10]:


grouped_usa_df["duration (seconds)"].sum()


# In[11]:


# Since "duration (seconds)" was converted to a numeric time, it can now be summed up per state
state_duration = grouped_usa_df["duration (seconds)"].sum()
state_duration.head()


# In[12]:


# Creating a new DataFrame using both duration and count
state_summary_table = pd.DataFrame({"Number of Sightings": state_counts,
                                    "Total Visit Time": state_duration})
state_summary_table.head()


# In[13]:


# It is also possible to group a DataFrame by multiple columns
# This returns an object with multiple indexes, however, which can be harder to deal with
grouped_international_data = converted_ufo.groupby(['country', 'state'])

grouped_international_data.count().head(20)


# In[15]:


# Converting a GroupBy object into a DataFrame
international_duration = pd.DataFrame(
    grouped_international_data["duration (seconds)"].sum())
international_duration.head(10)


# In[14]:


type(grouped_international_data["duration (seconds)"].sum())


# In[ ]:





############################################################
############################################################
# 07 Pokemon
############################################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Dependencies
import pandas as pd
import numpy as np


# In[2]:


# Save file path to variable
pokemon = "Resources/Pokemon.csv"


# In[3]:


# Read with Pandas
pokemon_pd = pd.read_csv(pokemon)
pokemon_pd.head()


# In[4]:


# Create new table
pokemon_type = pokemon_pd[["Type 1", "HP", "Attack",
                           "Defense", "Sp. Atk", "Sp. Def", "Speed"]]
pokemon_type.head()


# In[5]:


# Create the GroupBy object based on the "Type 1" column
pokemon_group = pokemon_type.groupby(["Type 1"])

# Calculate averages for combat stats using the .mean() method
pokemon_comparison = pokemon_group.mean()
pokemon_comparison


# In[6]:


# Total number of points
pokemon_comparison["Total"] = pokemon_comparison["HP"] + pokemon_comparison["Attack"] + pokemon_comparison["Defense"] +     pokemon_comparison["Sp. Atk"] +     pokemon_comparison["Sp. Def"] + pokemon_comparison["Speed"]

pokemon_comparison["Total"]


# In[7]:


# Sort by strongest Pokemon, and reset index
strongest_pokemon = pokemon_comparison.sort_values(["Total"], ascending=False)
strongest_pokemon.reset_index(inplace=True)
strongest_pokemon


# In[ ]:


# Save output to Excel
pokemon_comparison.to_excel("output/pokemon_rankings.xlsx", index=False)




############################################################
############################################################
# 08 Sorting
############################################################
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import Dependencies
import pandas as pd


# In[2]:


csv_path = "Resources/Happiness_2017.csv"
happiness_df = pd.read_csv(csv_path)
happiness_df.head()


# In[3]:


# Sorting the DataFrame based on "Freedom" column
# Will sort from lowest to highest if no other parameter is passed
freedom_df = happiness_df.sort_values("Freedom")
freedom_df.head()


# In[4]:


# To sort from highest to lowest, ascending=False must be passed in
freedom_df = happiness_df.sort_values("Freedom", ascending=False)
freedom_df.head()


# In[6]:


# It is possible to sort based upon multiple columns
family_and_generosity = happiness_df.sort_values(
    ["Family", "Generosity"], ascending=False)
family_and_generosity.head()


# In[7]:


# The index can be reset to provide index numbers based on the new rankings.
new_index = family_and_generosity.reset_index(drop=True)
new_index.head()


# In[8]:


get_ipython().run_line_magic('pinfo', 'new_index.reset_index')


# In[ ]:




############################################################
############################################################
# 09 Search for the Worst
############################################################
#!/usr/bin/env python
# coding: utf-8

# In[7]:


# Import Dependencies
import pandas as pd
import numpy as np


# In[8]:


# Create reference to CSV file
csv_path = "Resources/Soccer2018Data.csv"

# Import the CSV into a pandas DataFrame
soccer_2018_df = pd.read_csv(csv_path, low_memory=False)
soccer_2018_df


# In[9]:


# Collect a list of all the unique values in "Preferred Position"
soccer_2018_df["Preferred Position"].unique()


# In[10]:


# Looking only at strikers (ST) to start
strikers_2018_df = soccer_2018_df.loc[soccer_2018_df["Preferred Position"] == "ST", :]
strikers_2018_df.head()


# In[11]:


# Sort the DataFrame by the values in the "ST" column to find the worst
strikers_2018_df = strikers_2018_df.sort_values("ST")

# Reset the index so that the index is now based on the sorting locations
strikers_2018_df = strikers_2018_df.reset_index(drop=True)

strikers_2018_df.head()


# In[12]:


# Save all of the information collected on the worst striker
worst_striker = strikers_2018_df.loc[0, :]
worst_striker


# In[ ]:

#######################################################
# DAY THREE MERGING
#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Dependencies
import pandas as pd


# In[2]:


raw_data_info = {
    "customer_id": [112, 403, 999, 543, 123],
    "name": ["John", "Kelly", "Sam", "April", "Bobbo"],
    "email": ["jman@gmail", "kelly@aol.com", "sports@school.edu", "April@yahoo.com", "HeyImBobbo@msn.com"]
}
info_pd = pd.DataFrame(raw_data_info, columns=["customer_id", "name", "email"])
info_pd


# In[3]:


# Create DataFrames
raw_data_items = {
    "customer_id": [403, 112, 543, 999, 654],
    "item": ["soda", "chips", "TV", "Laptop", "Cooler"],
    "cost": [3.00, 4.50, 600, 900, 150]
}
items_pd = pd.DataFrame(raw_data_items, columns=[
                        "customer_id", "item", "cost"])
items_pd


# In[4]:


# Merge two dataframes using an inner join
merge_table = pd.merge(info_pd, items_pd, on="customer_id")
merge_table


# In[5]:


# Merge two dataframes using an outer join
merge_table = pd.merge(info_pd, items_pd, on="customer_id", how="outer")
merge_table


# In[6]:


# Merge two dataframes using a left join
merge_table = pd.merge(info_pd, items_pd, on="customer_id", how="left")
merge_table


# In[7]:


# Merge two dataframes using a right join
merge_table = pd.merge(info_pd, items_pd, on="customer_id", how="right")
merge_table 

####################################################################
#DAY THREE CRYPTOCURRENCY

#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import Dependencies
import pandas as pd


# In[2]:


bitcoin_csv = "Resources/bitcoin_cash_price.csv"
dash_csv = "Resources/dash_price.csv"


# In[3]:


bitcoin_df = pd.read_csv(bitcoin_csv)
dash_df = pd.read_csv(dash_csv)


# In[4]:


bitcoin_df.head()


# In[5]:


dash_df.head()


# In[6]:


# Merge the two DataFrames together based on the Dates they share
crypto_df = pd.merge(bitcoin_df, dash_df, on="Date")
crypto_df.head()


# In[7]:


# Rename columns so that they are differentiated
crypto_df = crypto_df.rename(columns={"Open_x": "Bitcoin Open", "High_x": "Bitcoin High", "Low_x": "Bitcoin Low",
                                      "Close_x": "Bitcoin Close", "Volume_x": "Bitcoin Volume", "Market Cap_x": "Bitcoin Market Cap"})

crypto_df = crypto_df.rename(columns={"Open_y": "Dash Open", "High_y": "Dash High", "Low_y": "Dash Low",
                                      "Close_y": "Dash Close", "Volume_y": "Dash Volume", "Market Cap_y": "Dash Market Cap"})

crypto_df.head()


# In[8]:


# alternatively you can set your suffixes when the merge occurs
alternative_merge = pd.merge(
    bitcoin_df, dash_df, on="Date", suffixes=("_Bitcoin", "_Dash"))
alternative_merge.head()


# In[9]:


# Collecting best open for Bitcoin and Dash
bitcoin_open = crypto_df["Bitcoin Open"].max()
dash_open = crypto_df["Dash Open"].max()

# Collecting best close for Bitcoin and Dash
bitcoin_close = crypto_df["Bitcoin Close"].max()
dash_close = crypto_df["Dash Close"].max()

# Collecting the total volume for Bitcoin and Dash
bitcoin_volume = round(crypto_df["Bitcoin Volume"].sum()/1000000, 2)
dash_volume = round(crypto_df["Dash Volume"].sum()/1000000, 2)


# In[10]:


# Creating a summary DataFrame using above values
summary_df = pd.DataFrame({"Best Bitcoin Open": [bitcoin_open],
                           "Best Bitcoin Close": [bitcoin_close],
                           "Total Bitcoin Volume": str(bitcoin_volume)+" million",
                           "Best Dash Open": [dash_open],
                           "Best Dash Close": [dash_close],
                           "Total Dash Volume": str(dash_volume)+" million"})

summary_df

####################################################################
#DAY THREE BINNING

#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import Dependencies
import pandas as pd


# In[2]:


raw_data = {
    'Class': ['Oct', 'Oct', 'Jan', 'Jan', 'Oct', 'Jan'], 
    'Name': ["Cyndy", "Logan", "Laci", "Elmer", "Crystle", "Emmie"], 
    'Test Score': [90, 59, 72, 88, 98, 60]}
df = pd.DataFrame(raw_data)
df


# In[3]:


# Create the bins in which Data will be held
# Bins are 0, 59, 69, 79, 89, 100.   
bins = [0, 59, 69, 79, 89, 100]

# Create the names for the four bins
group_names = ["F", "D", "C", "B", "A"]


# In[4]:


df["Test Score Summary"] = pd.cut(df["Test Score"], bins, labels=group_names)
df


# In[5]:


# Creating a group based off of the bins
df = df.groupby("Test Score Summary")
df.max()


# In[ ]:

####################################################################
#DAY THREE BINNING TED

#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import Dependencies
import pandas as pd


# In[2]:


# Create a path to the csv and read it into a Pandas DataFrame
csv_path = "Resources/ted_talks.csv"
ted_df = pd.read_csv(csv_path)

ted_df.head()


# In[3]:


# Figure out the minimum and maximum views for a TED Talk
print(ted_df["views"].max())
print(ted_df["views"].min())


# In[4]:


# Create bins in which to place values based upon TED Talk views
bins = [0, 199999, 399999, 599999, 799999, 999999,
        1999999, 2999999, 3999999, 4999999, 50000000]

# Create labels for these bins
group_labels = ["0 to 199k", "200k to 399k", "400k to 599k", "600k to 799k", "800k to 999k", "1mil to 2mil",
                "2mil to 3mil", "3mil to 4mil", "4mil to 5mil", "5mil to 50mil"]


# In[5]:


# Slice the data and place it into bins
pd.cut(ted_df["views"], bins, labels=group_labels).head()


# In[6]:


# Place the data series into a new column inside of the DataFrame
ted_df["View Group"] = pd.cut(ted_df["views"], bins, labels=group_labels)
ted_df.head()


# In[7]:


# Create a GroupBy object based upon "View Group"
ted_group = ted_df.groupby("View Group")

# Find how many rows fall into each bin
print(ted_group["comments"].count())

# Get the average of each column within the GroupBy object
ted_group[["comments", "duration", "languages"]].mean()


# In[ ]:

####################################################################
#DAY THREE MAPPING

#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd


# In[2]:


# Mapping lets you format an entire DataFrame
file = "Resources/sample_data.csv"
file_df = pd.read_csv(file)
file_df.head()


# In[3]:


# Use Map to format all the columns
file_df["avg_cost"] = file_df["avg_cost"].map("${:.2f}".format)
file_df["population"] = file_df["population"].map("{:,}".format)
file_df["other"] = file_df["other"].map("{:.2f}".format)
file_df.head()


# In[4]:


# Mapping has changed the datatypes of the columns to strings
file_df.dtypes

####################################################################
#DAY THREE KICKSTARTER CLEAN

#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd


# In[2]:


# The path to our CSV file
file = "Resources/KickstarterData.csv"

# Read our Kickstarter data into pandas
df = pd.read_csv(file)
df.head()


# In[3]:


# Get a list of all of our columns for easy reference
df.columns


# In[4]:


# Extract "name", "goal", "pledged", "state", "country", "staff_pick",
# "backers_count", and "spotlight"
reduced_kickstarter_df = df.loc[:, ["name", "goal", "pledged",
                                    "state", "country", "staff_pick", "backers_count", "spotlight"]]
reduced_kickstarter_df


# In[5]:


# Remove projects that made no money at all
reduced_kickstarter_df = reduced_kickstarter_df.loc[(
    reduced_kickstarter_df["pledged"] > 0)]
reduced_kickstarter_df.head()


# In[6]:


# Collect only those projects that were hosted in the US.

# Create a list of the columns
columns = [
    "name", "goal", "pledged", "state", 
    "country", "staff_pick", "backers_count", "spotlight"]

#  Create a new df for "US" with the columns. 
hosted_in_us = reduced_kickstarter_df.loc[reduced_kickstarter_df["country"] == "US",  columns]
hosted_in_us.head()


# In[7]:


# Create a new column that finds the average amount pledged to a project
average_donation = hosted_in_us['pledged'] / hosted_in_us['backers_count']
average_donation


# In[8]:


# Create a new column that finds the average amount pledged to a project
hosted_in_us["average_donation"] = hosted_in_us['pledged'] /     hosted_in_us['backers_count']


# In[9]:


# First convert "average_donation", "goal", and "pledged" columns to float
# Then Format to go to two decimal places, include a dollar sign, and use comma notation

hosted_in_us["average_donation"] = hosted_in_us["average_donation"].astype(float).map(
    "${:,.2f}".format)
hosted_in_us["goal"] = hosted_in_us["goal"].astype(float).map("${:,.2f}".format)
hosted_in_us["pledged"] = hosted_in_us["pledged"].astype(float).map("${:,.2f}".format)


# In[10]:


hosted_in_us.head()


# In[11]:


# Calculate the total number of backers for all US projects
hosted_in_us["backers_count"].sum()


# In[12]:


# Calculate the average number of backers for all US projects
hosted_in_us["backers_count"].mean()


# In[13]:


# Collect only those US campaigns that have been picked as a "Staff Pick"
picked_by_staff = hosted_in_us.loc[hosted_in_us["staff_pick"] == True]
picked_by_staff


# In[14]:


# Group by the state of the campaigns and see if staff picks matter (Seems to matter quite a bit)
state_groups = picked_by_staff.groupby("state")
state_groups["name"].count()


# In[ ]:

####################################################################
#DAY THREE INTRO TO BUGGING

#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import dependencies
import pandas as pd


# In[2]:


# Reference to CSV and reading CSV into Pandas DataFrame
csv_path = "Resources/flavors_of_cacao.csv"
chocolate_ratings_df = pd.read_csv(csv_path)
chocolate_ratings_df.head(10)


# In[3]:


chocolate_ratings_df.columns


# In[4]:


# Converting the "Cocoa Percent" column to floats
chocolate_ratings_df["Cocoa Percent"] = chocolate_ratings_df["Cocoa Percent"].replace(
    '%', '', regex=True).astype('float')

# Finding the average cocoa percent
chocolate_ratings_df["Cocoa Percent"].mean()

####################################################################
#DAY THREE BUGFIX BONANZA

#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import Dependencies
import pandas as pd


# In[2]:


# Create a reference to the CSV and import it into a Pandas DataFrame
csv_path = "../Resources/EclipseBugs.csv"
eclipse_df = pd.read_csv(csv_path)
eclipse_df.head()


# In[3]:


# Get a reference to the column names
eclipse_df.columns


# In[4]:


# Removing the newlines from column headers
eclipse_df = eclipse_df.rename(columns={"Bug\nID": "Bug ID",
                                        "Assignee\nReal\nName": "Assignee Real Name",
                                        "Number of\nComments": "Number of Comments",
                                        "Reporter\nReal\nName": "Reporter Real Name",
                                        "Target\nMilestone": "Target Milestone"})
eclipse_df.columns


# In[5]:


# Finding the average number of comments per bug
average_comments = eclipse_df["Number of Comments"].mean()
average_comments


# In[6]:


# Grouping the DataFrame by "Assignee"
assignee_group = eclipse_df.groupby("Assignee")

# Count how many of each component Assignees worked on and create DataFrame of the data
assignee_work = pd.DataFrame(assignee_group["Component"].value_counts())
assignee_work.head()


# In[7]:


# Rename the "Component" column to "Component Bug Count"
assignee_work = assignee_work.rename(
    columns={"Component": "Component Bug Count"})
assignee_work.head()


# In[8]:


# Find the percentage of bugs overall fixed by each Assignee
total_bugs = eclipse_df["Assignee"].count()
bugs_per_user = assignee_group["Assignee"].count()

user_bug_percent = pd.DataFrame((bugs_per_user/total_bugs)*100)
user_bug_percent.head()


# In[9]:


# Rename the "Assignee" column to "Percent of Total Bugs Assigned"
user_bug_percent = user_bug_percent.rename(
    columns={"Assignee": "Percent of Total Bugs Assigned"})

# Reset the index for this DataFrame so "Assignee" is a column
user_bug_percent = user_bug_percent.reset_index()
user_bug_percent.head()


# In[10]:


# Reset the index of "assignee_group" so that "Assignee" and "Component" are columns
assignee_work = assignee_work.reset_index()
assignee_work.head()

# Merge the "Percent of Total Bugs Assigned" into the DataFrame
assignee_work = assignee_work.merge(user_bug_percent, on="Assignee")

# Remove the extra columns
assignee_work = assignee_work[["Assignee", "Percent of Total Bugs Assigned",
                               "Component", "Component Bug Count"]]
assignee_work.head()