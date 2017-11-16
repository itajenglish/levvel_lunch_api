import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
type User {
    id: Int,
    email: String
}

type Place {
    id: Int
    name: String
    location: String
}

type Vote {
    id: Int
    upvote: Boolean
    downvote: Boolean
}

type Query {
    user(email: String): User
    place(name: String, location: String): Place
    vote(upvote: Boolean, downvote: Boolean): Vote
}

schema {
    query: Query
}
`

const schema = makeExecutableSchema({ typeDefs })
export default schema;