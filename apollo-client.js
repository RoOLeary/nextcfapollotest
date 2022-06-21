import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://cities.thenextweb.com/api",
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer 8YjnkaiY0aJ6rJQjwbT2wawiJPAC2PGE`,
    },
});

export default client;