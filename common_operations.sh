#!/usr/bin/env bash

buildAndRunImage() {
  docker build -t jaykay24/sweepsouth_assignment .
  docker run --rm --name sweepsouth-assignment -p 3000:3000 jaykay24/sweepsouth_assignment
}

