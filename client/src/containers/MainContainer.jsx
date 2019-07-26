import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose, withApollo } from 'react-apollo';

import Container from '../components/Container';
import Header from '../components/Header';
import Main from '../components/Main';
import Spinner from '../components/Spinner';
import PersonalInformation from '../components/PersonalInformation';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

import AddPosition from '../graphql/mutations/AddPosition';
import UpdatePosition from '../graphql/mutations/UpdatePosition';
import DeletePosition from '../graphql/mutations/DeletePosition';
import UpdatePersonalInformation from '../graphql/mutations/UpdatePersonalInformation';
import GetAllResumes from '../graphql/queries/GetAllResumes';

const MainContainer = ({
  data,

  addPositionMutation,
  updatePositionMutation,
  deletePositionMutation,
  updatePersonalInformationMutation
}) => {

  const addPosition = ({ owner, title, description, year }) => {
    addPositionMutation({
      variables: {
        owner,
        title,
        description,
        year
      },
      refetchQueries: [{
        query: GetAllResumes
      }]
    });
  };

  const updatePosition = ({ id, title, company, description, year }) => {
    updatePositionMutation({
      variables: {
        id,
        title,
        company,
        description,
        year
      },
      refetchQueries: [{
        query: GetAllResumes
      }]
    });
  };

  const deletePosition = ({ id }) => {
    deletePositionMutation({
      variables: {
        id
      },
      refetchQueries: [{
        query: GetAllResumes
      }]
    });
  };

  const updatePersonalInformation = ({ id, name, email, linkedInUrl, githubUrl }) => {
    updatePersonalInformationMutation({
      variables: {
        id,
        name,
        email,
        linkedInUrl,
        githubUrl
      },
      refetchQueries: [{
        query: GetAllResumes
      }]
    });
  };

  if (!data.resumes) {
    return (
      <Container>
        <Header />

        <Main>
          <Spinner />
        </Main>

        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header />

      <Main>
        {data.resumes.map(resume => {
          return (
            <Fragment key={resume.id}>
              <PersonalInformation
                resumeId={resume.id}
                name={resume.name}
                email={resume.email}
                linkedInUrl={resume.linkedInUrl}
                githubUrl={resume.githubUrl}
                onPersonalInformationChange={updatePersonalInformation}
              />

              <Profile
                resumeId={resume.id}
                positions={resume.position}
                onPositionAdd={addPosition}
                onPositionChange={updatePosition}
                onPositionDelete={deletePosition}
              />
            </Fragment>
          );
        })}
      </Main>

      <Footer />
    </Container>
  );
};

MainContainer.propTypes = {
  data: PropTypes.shape({
    resumes: PropTypes.arrayOf(PropTypes.object)
  }),
  addPositionMutation: PropTypes.func.isRequired,
  updatePositionMutation: PropTypes.func.isRequired,
  deletePositionMutation: PropTypes.func.isRequired,
  updatePersonalInformationMutation: PropTypes.func.isRequired
};

MainContainer.defaultProps = {
  data: {
    resumes: []
  }
};

export default compose(
  graphql(AddPosition, { name: 'addPositionMutation' }),
  graphql(UpdatePosition, { name: 'updatePositionMutation' }),
  graphql(DeletePosition, { name: 'deletePositionMutation' }),
  graphql(UpdatePersonalInformation, { name: 'updatePersonalInformationMutation' }),
  graphql(GetAllResumes)
)(withApollo(MainContainer));
