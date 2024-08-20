const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// home route res.send 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
