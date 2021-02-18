const express = require('express');
const app = express();
const port = 3000;

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

// app.get('/index', (req, res) => {
//     res.send('An overview of all your potential dates')
// });

// app.get('/chats', (req, res) => {
//     res.send('List of all the people you are chatting with')
// });

// app.get('/settings', (req, res) => {
//     res.send('Is the current setup not to your liking? Change your settings here')
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
