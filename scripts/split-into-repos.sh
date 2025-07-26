#!/bin/bash
set -e

# Split backend and frontend directories into standalone repos using git subtree.
# Creates ../backend-repo and ../frontend-repo directories with full history.

BACKEND_PREFIX="gym-fees-backend"
FRONTEND_PREFIX="gym-fees-frontend"

# Backend
if git rev-parse --verify backend-temp >/dev/null 2>&1; then
  git branch -D backend-temp
fi

git subtree split --prefix="$BACKEND_PREFIX" -b backend-temp
mkdir -p ../backend-repo
cd ../backend-repo
git init
git pull ../onBoardDomain backend-temp
git branch -m main
cd ../onBoardDomain
git branch -D backend-temp

# Frontend
if git rev-parse --verify frontend-temp >/dev/null 2>&1; then
  git branch -D frontend-temp
fi

git subtree split --prefix="$FRONTEND_PREFIX" -b frontend-temp
mkdir -p ../frontend-repo
cd ../frontend-repo
git init
git pull ../onBoardDomain frontend-temp
git branch -m main
cd ../onBoardDomain
git branch -D frontend-temp


echo "Backend repo created at ../backend-repo"
echo "Frontend repo created at ../frontend-repo"
