'use strict';
module.exports = (sequelize, DataTypes) => {
  var Snacks = sequelize.define('Snacks', {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    needs_refill: DataTypes.BOOLEAN,
    img: DataTypes.STRING,
    user_id: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Snacks;
};
