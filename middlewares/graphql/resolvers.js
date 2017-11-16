import{ User } from '../../db/connect';

const reslovers = {
    Query: {
        user(_, args) {
            return User.find({ where: args });
        }
   }
};

export default resolvers;