import { gql } from 'apollo-boost';

export default gql`
  mutation AddPosition(
    $title: String
    $company: String
    $description: String
    $year: Int
    $owner: ID!
  ) {
    createPosition(
      data: {
        title: $title
        company: $company
        description: $description
        year: $year
        owner: {
          connect: {
            id: $owner
          }
        }
      }
    ) {
      id
    }
  }
`;
