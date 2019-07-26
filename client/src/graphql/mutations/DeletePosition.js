import { gql } from 'apollo-boost';

export default gql`
  mutation DeletePosition(
    $id: ID!
  ) {
    deletePosition(
      where: {
        id: $id
      }
    ) {
      id
    }
  }
`;
