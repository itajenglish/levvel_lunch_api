// import { User } from '../../db/connect';
import { User } from '../../db/connect';

const resolvers = {
    Query: {
        user(_, args) {
            return User.find({ where: args });
        }
   }
};

export default resolvers;