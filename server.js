#!/usr/bin/env node
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

const PORT = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');

const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
  const extname = path.extname(filePath);

  // Prevent directory traversal
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Try serving index.html for SPA routing
        fs.readFile(path.join(DIST_DIR, 'index.html'), (err2, data2) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - File not found</h1>');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data2);
          }
        });
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
      return;
    }

    // Set appropriate content type
    let contentType = 'text/plain';
    switch (extname) {
      case '.html': contentType = 'text/html; charset=utf-8'; break;
      case '.js': contentType = 'application/javascript; charset=utf-8'; break;
      case '.css': contentType = 'text/css; charset=utf-8'; break;
      case '.json': contentType = 'application/json'; break;
      case '.png': contentType = 'image/png'; break;
      case '.jpg':
      case '.jpeg': contentType = 'image/jpeg'; break;
      case '.gif': contentType = 'image/gif'; break;
      case '.svg': contentType = 'image/svg+xml'; break;
    }

    res.writeHead(200, { 
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

let serverStarted = false;

server.listen(PORT, '127.0.0.1', () => {
  if (!serverStarted) {
    serverStarted = true;
    
    console.log('');
    console.log('╔════════════════════════════════════════╗');
    console.log('║     Projet360 IA - Serveur Lancé       ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('');
    console.log('✅ Serveur disponible sur: http://localhost:' + PORT);
    console.log('');
    console.log('📝 Ouverture du navigateur en cours...');
    console.log('');
    
    // Open browser with a slight delay
    setTimeout(() => {
      const url = 'http://localhost:' + PORT;
      if (process.platform === 'win32') {
        // Try Chrome first, fallback to default browser
        exec(`"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" "${url}" 2>nul || start ${url}`, (error) => {
          if (error && error.code !== 0) {
            console.log('⚠️  Impossible d\'ouvrir Chrome, utilisation du navigateur par défaut');
          }
        });
      } else if (process.platform === 'darwin') {
        exec(`open -a "Google Chrome" "${url}"`);
      } else {
        exec(`google-chrome "${url}" || chromium "${url}" || xdg-open "${url}"`);
      }
    }, 1000);
    
    console.log('💡 Si le navigateur ne s\'ouvre pas, visitez: http://localhost:' + PORT);
    console.log('');
    console.log('⏹️  Pour arrêter le serveur: Pressez Ctrl+C');
    console.log('');
  }
});

process.on('SIGINT', () => {
  console.log('\n\n✓ Serveur arrêté');
  process.exit(0);
});
