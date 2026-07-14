@echo off
title Tyler Myles Portfolio - Local Dev Server
cd /d "%~dp0"

echo ======================================================
echo   Starting Tyler Myles Portfolio Local Dev Server...
echo ======================================================
echo.
echo Opening browser at http://localhost:4321/
echo Press Ctrl+C in this window to stop the server at any time.
echo.

call npm run dev -- --open
pause
