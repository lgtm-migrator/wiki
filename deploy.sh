#!/bin/bash

# git clone https://github.com/Soontao/wiki.git /tmp/wiki

# cd /tmp/wiki

# npm i 

# rm -rf /home/suntao/sites/wiki

# mv /tmp/wiki/wikifile /home/suntao/sites/wiki -f

# rm -rf /tmp/wiki

cd ~/repos/wiki/

git pull

npm run postinstall

cp wikifile/ ~/sites/wiki/ -Rf