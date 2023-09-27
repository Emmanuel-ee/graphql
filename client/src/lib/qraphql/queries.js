import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

const apolloClient = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  cache: new InMemoryCache(),
});
export async function getCompany(id) {
  const query = gql`
    query companyById($id: ID!) {
      company(id: $id) {
        id
        name
        description
        jobs {
          id
          date
          title
        }
      }
    }
  `;
  const { data } = await apolloClient.query({
    query,
    variables: { id },
  });
  return data.company;
}

export async function getJob(id) {
  const query = gql`
    query JobById($id: ID!) {
      job(id: $id) {
        id
        date
        title
        company {
          id
          name
        }
        description
      }
    }
  `;

  const { data } = await apolloClient.query({
    query,
    variables: { id },
  });
  return data.job;
}

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        id
        title
        company {
          id
          name
        }
        date
      }
    }
  `;
  const { data } = await apolloClient.query({ query });
  return data.jobs;
}
