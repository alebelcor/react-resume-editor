import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Position = ({
  id,
  title,
  company,
  year,
  description,

  onPositionChange,
  onPositionDelete
}) => {
  const [maxYear] = useState(new Date().getFullYear());

  const [minYear] = useState(maxYear - 60);

  const titleEl = useRef(null);

  const handleChange = ev => {
    const updatedObject = {
      id,
      title,
      company,
      description,
      year
    };

    let newValue = ev.target.value || null;
    const fieldNameToUpdate = ev.target.name;

    if (fieldNameToUpdate === 'year') {
      newValue = parseInt(newValue, 10) || null;
    }

    if (updatedObject[fieldNameToUpdate] === newValue) {
      return;
    }

    updatedObject[fieldNameToUpdate] = newValue;

    onPositionChange(updatedObject);
  };

  const handleDelete = () => {
    onPositionDelete({ id });
  };

  useEffect(() => {
    if (!title) {
      titleEl.current.focus();
    }
  }, []);

  return (
    <article className="position">
      <button
        className="btn btn-delete"
        type="button"
        onClick={handleDelete}
      >
        <span className="strong" aria-hidden="true">x</span> Delete position
      </button>

      <div className="field">
        <label className="label" htmlFor={`title-${id}`}>
          Title
        </label>
        <input
          required
          className="input"
          type="text"
          id={`title-${id}`}
          name="title"
          ref={titleEl}
          defaultValue={title}
          onBlur={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor={`company-${id}`}>
          Company
        </label>
        <input
          required
          className="input"
          type="text"
          id={`company-${id}`}
          name="company"
          defaultValue={company}
          onBlur={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor={`year-${id}`}>
          Year
        </label>
        <input
          required
          className="input"
          type="number"
          id={`year-${id}`}
          name="year"
          min={minYear}
          max={maxYear}
          defaultValue={year}
          onBlur={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor={`description-${id}`}>
          Description
        </label>
        <textarea
          required
          className="input"
          id={`description-${id}`}
          name="description"
          defaultValue={description}
          onBlur={handleChange}
        />
      </div>
    </article>
  );
};

Position.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  company: PropTypes.string,
  year: PropTypes.number,
  description: PropTypes.string,
  onPositionChange: PropTypes.func.isRequired,
  onPositionDelete: PropTypes.func.isRequired
};

export default Position;
