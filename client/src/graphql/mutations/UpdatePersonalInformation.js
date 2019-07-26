import { gql } from 'apollo-boost';

export default gql`
  mutation UpdatePersonalInformation(
    $id: ID!
    $name: String
    $email: String
    $linkedInUrl: String
    $githubUrl: String
  ) {
    updateResume(
      where: {
        id: $id
      }
      data: {
        name: $name
        email: $email
        linkedInUrl: $linkedInUrl
        githubUrl: $githubUrl
      }
    ) {
      id
    }
  }
`;
