import { gql } from 'apollo-boost';

export default gql`
  mutation UpdatePosition(
    $id: ID!
    $title: String
    $company: String
    $description: String
    $year: Int
  ) {
    updatePosition(
      where: {
        id: $id
      }
      data: {
        title: $title
        company: $company
        description: $description
        year: $year
      }
    ) {
      id
    }
  }
`;
