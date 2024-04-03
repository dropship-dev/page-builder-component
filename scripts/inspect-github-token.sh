#!/bin/bash -e

# Check env GITHUB_PRIVATE_REPO_AUTH is set
if [ -z "$PRIVATE_REPO_AUTH" ]; then
  echo "PRIVATE_REPO_AUTH is not set"
  exit 0
fi

sed -i "s+https://github.com/dropship-dev+https://${PRIVATE_REPO_AUTH}@github.com/dropship-dev+g" package.json