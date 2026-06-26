#!/bin/bash
npm run build:lib && cd dist/ngx-drag-drop && npm pack
echo 'Build folder:'
echo $(pwd)