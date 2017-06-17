#!/bin/bash

# push to git server
git push

# run deploy shell on server
ssh suntao@ksyun.fornever.org 'bash -s' < deploy.sh