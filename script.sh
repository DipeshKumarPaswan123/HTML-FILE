echo "Enter the file name: "
read file
if [ -f $file ]
then
echo $file "---> It is a ORDINARY FILE."
elif [ -d $file ]
then
echo $file "---> It is a DIRCTORY."
else
echo $file "---> It is something else."
fi