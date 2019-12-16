#!/bin/bash

#Usage readDir.sh weeknum classday fileExt filename
#    weeknum: is the week number of the assignments
#    classday: is the class day number in the week,
#        usually between 1-3
#    fileExt: The extention (after the dot, eg, py, js) you 
#         want to include.
#    filename: is the output filename: do not put the file
#      in the same directory as where you are running the program
#    NOTES: The program is designed to run in same directory as
#      files you want to read.


if [ $# -gt 0 ]; then
    echo "Your command line contains $# arguments"
else
    echo "Your command line contains no arguments"
    echo " ----   EXITING  ----"
    exit 1
fi

weeknum=$1
classday=$2
fileExt=$3
filename=$4

echo "Week is: $weeknum, classday is $classday, extension is $fileExt, output file is: $filename"




# check if file exists and determine what to do.
if [ -f $filename ]; then
    echo -n "Output file exists. Overwrite? (y/n/other exits) > "
    read response
    if [ "$response" = "y" ]; then
        echo "######  OVERWRITE  #########"
        echo "######  OVERWRITE  #########" > $filename

    elif [ "$response" = "n" ]; then
        echo ">>> Appending "
        echo "## Appending " >> $filename

     else
       echo "Invalid choice, exiting"
       exit 1
    fi

fi


echo "#####----------------###" >> $filename
echo "#####----------------###" >> $filename
echo "#####  BEGIN WEEK NUMBER $weeknum  #########" >> $filename
echo "#####  class day $classday  #########" >> $filename
echo "#####" >> $filename
echo "" >> $filename
echo "" >> $filename


for file in ./*.$fileExt; do
        echo "##########################" >> $filename
        echo "##########################" >> $filename
        echo "###   $file  ">> $filename
        echo "##########################" >> $filename
        echo "" >> $filename
        echo "" >> $filename
        cat  $file  >> $filename
done

echo "" >> $filename
echo "" >> $filename
echo "" >> $filename
echo "" >> $filename
echo "#####----------------###" >> $filename
echo "#####----------------###" >> $filename
echo "#####  END WEEK NUMBER $weeknum" >> $filename
echo "#####  END class day $classday" >> $filename
echo "########################" >> $filename
echo "" >> $filename
echo "" >> $filename