import React from 'react';
import PropTypes from 'prop-types';

const PersonalInformation = ({
  resumeId,
  name,
  email,
  linkedInUrl,
  githubUrl,

  onPersonalInformationChange
}) => {

  const handleChange = ev => {
    const updatedObject = {
      id: resumeId,
      name,
      email,
      linkedInUrl,
      githubUrl
    };

    const newValue = ev.target.value || null;
    const fieldNameToUpdate = ev.target.name;

    if (updatedObject[fieldNameToUpdate] === newValue) {
      return;
    }

    updatedObject[fieldNameToUpdate] = newValue;

    onPersonalInformationChange(updatedObject);
  };

  return (
    <section className="personal-information">
      <h2 className="text-center">Personal Information</h2>

      <div className="field">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          required
          className="input"
          type="text"
          id="name"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          required
          className="input"
          type="text"
          id="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="linkedin-url">
          LinkedIn URL
        </label>
        <input
          className="input"
          type="text"
          id="linkedin-url"
          name="linkedInUrl"
          defaultValue={linkedInUrl}
          onBlur={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="github-url">
          GitHub URL
        </label>
        <input
          className="input"
          type="text"
          id="github-url"
          name="githubUrl"
          defaultValue={githubUrl}
          onBlur={handleChange}
        />
      </div>
    </section>
  );
};

PersonalInformation.propTypes = {
  resumeId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedInUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  onPersonalInformationChange: PropTypes.func.isRequired
};

export default PersonalInformation;
