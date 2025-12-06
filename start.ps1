# Script de lancement pour 360 Scene Editor
# Ajouter Node.js au PATH
$env:Path += ";C:\Program Files\nodejs"

# Afficher les versions
Write-Host "Node.js $(& 'C:\Program Files\nodejs\node.exe' --version)"
Write-Host "npm $(& 'C:\Program Files\nodejs\npm.cmd' --version)"
Write-Host ""

# Lancer le serveur
Write-Host "Lancement du serveur de développement..."
Write-Host "Le navigateur s'ouvrira à http://localhost:5173"
Write-Host ""

& "C:\Program Files\nodejs\npm.cmd" run dev
