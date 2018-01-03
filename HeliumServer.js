
import App from './src/components/App.js';
const express = require('express');
const helium = require('helium.js');
const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.static('dist'));

helium.init({
  html: './src/index.html',
  id: 'root',
  App,
});

app.get('*', helium.serve);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
