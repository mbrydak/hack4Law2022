#!/bin/bash

yum install tar gzip git -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts
node -e "console.log('Running Node.js ' + process.version)"
git clone ${git_repo}
cd ${git_repo}/vite-project
npm install
npm run dev