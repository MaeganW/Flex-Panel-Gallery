const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/img'));

app.use('/img', express.static(path.join(__dirname + '/img')));

app.listen(port, () => {
  console.log(`Server spinning up on port ${port}`);
});