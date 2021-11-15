import { gql, GraphQLClient } from 'graphql-request';

export default new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL!, {
  headers: {},
});

export { gql };
