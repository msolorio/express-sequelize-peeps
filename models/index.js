const { Sequelize } = require('sequelize');
const Peep = require('./Peep');

const sequelize = new Sequelize('test_7_6', 'michael', '1234', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = {
  sequelize: sequelize,
  Peep: Peep(sequelize)
}
