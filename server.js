const express = require('express');
const cors = require('cors');
const db = require('./models');
const peepsController = require('./controllers/peepsController');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/peeps', peepsController);

app.get('/', (req, res) => {
  res.send('you hit the home route!');
});

(async function() {

  try {
    // Will clear all records and tables
    // await db.sequelize.sync({ force: true, alter: true });
    await db.sequelize.sync({});
    console.log('SQL db sync\'ed');
  
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

  } catch (err) {
    console.error(err);
  }

}());
