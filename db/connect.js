import Sequelize from 'sequelize';

const sequelize = new Sequelize('Levvel_Lunch', 'tajenglish', null, {
    host: 'localhost',    
    dialect: 'postgres',
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

// Models Setup
const db = {};
db.Sequelize = Sequelize;  
db.sequelize = sequelize;

db.User = sequelize.import('../models/user');
db.Vote = sequelize.import('../models/vote');
db.Place = sequelize.import('../models/place');

// Model Relationships
db.User.hasMany(db.Vote);
db.Place.hasMany(db.Vote);

// Database Setup
sequelize.sync({ force: false })
    .then(() => {
        console.log('[Database Connection Established!]');
    })
    .catch(err => {
        console.log('[Database Error]', err);
    });

    
export default db;