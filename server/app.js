const express = require('express');
const path = require('path');

const app = express();
const PORT = 5001;

// Serve static files from the 'public' directory
app.use(express.static('../client'));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile('~/Desktop/comak/client/html/home.html');
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});