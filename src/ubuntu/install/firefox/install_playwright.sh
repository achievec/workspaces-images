#!/usr/bin/env bash
set -xe

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
apt-get install -y nodejs

# 安装 playwright
# npm install -g playwright@1.50.0
npm install -g playwright@1.39.0

# 安装浏览器
npx playwright install firefox

npm install -g pm2
