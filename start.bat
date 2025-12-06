@echo off
SETLOCAL EnableDelayedExpansion

REM Get the directory where this script is located
SET SCRIPT_DIR=%~dp0

REM Navigate to the script directory
cd /d "%SCRIPT_DIR%"

REM Check if node is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Erreur: Node.js n'est pas installe ou n'est pas dans le PATH
    echo Veuillez installer Node.js depuis https://nodejs.org/
    pause
    exit /b 1
)

REM Start the server in background
echo.
echo ============================================
echo    Demarrage de Projet360 IA...
echo ============================================
echo.

REM Start Node server in background
start /B node server.js

REM Wait for server to start
timeout /t 2 /nobreak

REM Open browser
echo.
echo Ouverture du navigateur...
echo.
start http://localhost:3000

echo.
echo ✓ Projet360 IA est maintenant actif!
echo.
echo Pour arreter, fermez cette fenetre.
echo.

REM Keep the window open
pause
