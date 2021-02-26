const Sequelize = require('sequelize');
const sql = new Sequelize('zo-squet', 'root', '', { host: 'localhost', dialect: 'mysql' });

const Mensaje = sql.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

sql.sync().then(() => {
  console.log('Base de datos y tablas creadas');
});

module.exports = {
  Mensaje
};