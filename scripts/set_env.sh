#!/bin/bash

true > .env && \
doppler secrets download \
  --project "nuxt-module-boilerplate-test" \
  --config local \
  --no-file \
  --format env | grep -v '^DOPPLER_' \
  >> .env