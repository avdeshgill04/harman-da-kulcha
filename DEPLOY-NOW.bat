@echo off
title Harman da Kulcha - Deploy
echo.
echo Opening Vercel and your project folder...
echo.
echo 1. When the browser opens, sign in to Vercel if needed.
echo 2. Click "Add New" then "Project". Scope: avdeshgill04-9723
echo 3. DRAG this folder from the Explorer window onto the browser.
echo 4. Click Deploy. Done.
echo.
start https://vercel.com/new
explorer "%~dp0"
echo.
pause
