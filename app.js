const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.get('/create', (req, res) => {
  res.render('form', {});
});

app.post('/user', (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let sex = req.body.sex;

  res.render('user', 
    {
      name: firstname,
      surname: lastname,
      mail: email,
      sex: sex
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
