import Sequelize from 'sequelize';
import { user, vote, place } from '../models';

const db = new Sequelize('Levvel_Lunch', 'tajenglish', null, {
    dialect: 'postgres'
});

// Model Relationships
user.hasMany(vote);
place.hasMany(vote);

// Database Setup
db.sync({ force: false })
    .then(() => {
        console.log('Database Connection Established!');
    })
    .catch(err => {
        console.log('[Database Error]', err);
    });

const User = db.models.user;
const Vote = db.models.vote;
const Place = db.models.place;

export default { User, Vote, Place };