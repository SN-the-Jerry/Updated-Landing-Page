// Add copy of favicon.ico to the root of public folder
// This is just pseudocode showing what you need to do manually 
const fs = require('fs');
fs.copyFile('public/favicon_io/favicon.ico', 'public/favicon.ico', (err) => {
  if (err) {
    console.error('Error copying file:', err);
    return;
  }
  console.log('Favicon copied to root directory');
});