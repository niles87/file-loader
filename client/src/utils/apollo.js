import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

// const link = createUploadLink({ uri: "http://localhost:3001/graphql" });
// console.log(link);
export const client = new ApolloClient({
  link: createUploadLink({
    useGETForQueries: true,
    uri: "http://localhost:3001/graphql",
    fetchOptions: {
      request: (operation) => {
        const token = localStorage.getItem("id_token");
        operation.setContext({
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        });
      },
    },
  }),
  cache: new InMemoryCache(),
});
