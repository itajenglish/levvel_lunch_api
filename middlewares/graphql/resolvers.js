// import { User } from '../../db/connect';
import db from '../../db/connect';
const { User } = db;

const resolvers = {
    Query: {
        user(_, args) {
            console.log('working')
            return User.find({ where: args });
        }
   },
   Mutation: {
       createUser: (_, args) => {
           return User.create(args);
       }
   }
};

export default resolvers;