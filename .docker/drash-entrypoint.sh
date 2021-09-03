#!/bin/bash
deno run --allow-net --allow-read --watch --unstable app.ts &
npm install webpack-dev-server -g
npm i
npm run webpack-watch
