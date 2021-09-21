const { Sequelize, DataTypes } = require('sequelize');

function Peep(sequelize) {
  const Peep = sequelize.define('peeps', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    }
  });

  return Peep;
}

module.exports = Peep;