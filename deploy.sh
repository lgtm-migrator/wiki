#!/bin/bash

# git clone https://github.com/Soontao/wiki.git /tmp/wiki

# cd /tmp/wiki

# npm i 

# rm -rf /home/suntao/sites/wiki

# mv /tmp/wiki/wikifile /home/suntao/sites/wiki -f

# rm -rf /tmp/wiki

cd ~/repos/wiki/

git stash

git pull

npm run postinstall

rm -rf ~/sites/wiki

cp wikifile/ ~/sites/wiki -R