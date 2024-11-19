// Import the required modules
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();

// Serve static files from the dist directory, which is the output of the Vite build
const PORT = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, 'dist'); // Change 'dist' if your build directory has a different name

// Serve static files from the 'dist' directory
app.use(express.static(DIST_DIR));

// Route all other requests to index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
