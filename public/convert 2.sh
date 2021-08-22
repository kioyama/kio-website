#!/bin/bash
find . -type f -mindepth 2 -exec mv -i -- {} . \;
find . -depth -mindepth 1 -type d -empty -exec rmdir {} \;
find $1 -name "*" -type f -print0 | \
  while read -d $'\0' f; do mv -v "$f" "${f// /_}"; done
for f in *.HEIC
do 	
echo "Converting file $f"
heif-convert $f ${f:0:-5}.jpg
rm $f
done
for f in *.png       
do
echo "Converting file $f"
convert $f ${f:0:-4}.jpg
rm $f
done
