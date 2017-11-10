// Deps
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import env from 'dotenv';
import logger from 'morgan';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const app = express();

// Server Config
env.load(); // Load ENV Vars
app.use(bodyParser.urlencoded({ extended: false })); // Parse Incoming Request Bodies 
app.use(logger('dev')); // Logs All Network Requests
app.use(cors()); // Enable Cors For All Network Request
app.use('/v1/api', bodyParser.json(), graphqlExpress({ })); // All Requests goes to this endpoint
app.use('/graphiql', graphiqlExpress({ endpointURL: '/v1/api' })); // Graphql UI(Graphiql)

// Server Setup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Server running on PORT ${PORT}`);
});