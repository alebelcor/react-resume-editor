import { gql } from 'apollo-boost';

export default gql`
  query GetAllResumes {
    resumes {
      id,
      name,
      email,
      linkedInUrl,
      githubUrl,
      position {
        id,
        title,
        company,
        description,
        year
      }
    }
  }
`;
