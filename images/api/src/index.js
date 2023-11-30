const app = require('./app');

const port = 3000;

app.listen(port, (err) => {
  if (!err) {
    console.log('Server is running on port 3000');
  } else {
    console.log(err);
  }
});