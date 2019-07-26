import React from 'react';
import PropTypes from 'prop-types';

import Position from './Position';

const Profile = ({
  resumeId,
  positions,

  onPositionAdd,
  onPositionChange,
  onPositionDelete
}) => {

  const handleAddPosition = () => {
    onPositionAdd({
      owner: resumeId,
      title: null,
      company: null,
      description: null,
      year: null
    });
  };

  return (
    <section>
      <h2 className="text-center">Profile</h2>

      {positions.map(position => {
        return (
          <Position
            key={position.id}
            id={position.id}
            title={position.title}
            company={position.company}
            year={position.year}
            description={position.description}
            onPositionChange={onPositionChange}
            onPositionDelete={onPositionDelete}
          />
        );
      })}

      <button
        className="btn btn-add"
        type="button"
        onClick={handleAddPosition}
      >
        <span className="strong" aria-hidden="true">+</span> Add position
      </button>
    </section>
  );
};

Profile.propTypes = {
  resumeId: PropTypes.string.isRequired,
  positions: PropTypes.arrayOf(PropTypes.object),
  onPositionAdd: PropTypes.func.isRequired,
  onPositionChange: PropTypes.func.isRequired,
  onPositionDelete: PropTypes.func.isRequired
};

export default Profile;
