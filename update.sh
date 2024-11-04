#!/bin/bash

#Make sure we are in the correct dir
cd /root/steldev-page

#pull changes
git pull

#restart the server
npm install
npm run build
pm2 restart steldev-page