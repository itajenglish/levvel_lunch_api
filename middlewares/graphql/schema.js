const typeDefs = `
type User {
    id: Int,
    email: String
    password: String
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
export default [typeDefs];