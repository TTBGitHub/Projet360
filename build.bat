@echo off
REM Ajouter Node.js au PATH
set Path=%Path%;C:\Program Files\nodejs

REM Construire pour la production
npm run build

echo.
echo Build complete! Le dossier 'dist' est pret pour le deployment.
pause
