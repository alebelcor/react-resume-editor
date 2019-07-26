import React from 'react';

const Spinner = () => {
  return (
    <div role="progressbar" className="spinner block-center" aria-valuetext="Loading">
      <span className="sr-only">Loading</span>
    </div>
  );
};

export default Spinner;
