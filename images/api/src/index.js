const app = require('./app.js');

const port = 3000;

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(err);
  }
});