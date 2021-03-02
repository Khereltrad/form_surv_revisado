const Sequelize = require('sequelize');
const sql = new Sequelize('simplsurv', 'root', '', { host: 'localhost', dialect: 'mysql' });

const Mensaje = sql.define('fichas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un nombre'
      },
      len: {
        args: [4],
        msg: 'El nombre debe ser de largo al menos 4'
      }
    }
  },
  region:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  lenguaje:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
},{ timestramps: true });

sql.sync().then(() => {
  console.log('Base de datos y tablas creadas');
});

module.exports = {
  Mensaje
};