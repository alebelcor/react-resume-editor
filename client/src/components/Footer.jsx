import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="text-center">Addendum</h2>

      <p>
        Made by <a href="https://github.com/alebelcor">alebelcor</a>.
      </p>

      Tech used:

      <ul>
        <li>
          <a href="https://reactjs.org">React</a>
        </li>
        <li>
          <a href="https://www.prisma.io/">Prisma</a>
        </li>
        <li>
          <a href="https://www.apollographql.com/">Apollo GraphQL</a>
        </li>
        <li>
          <a href="https://graphql.org/">GraphQL</a>
        </li>
        <li>
          <a href="https://facebook.github.io/create-react-app/">Create React App</a>
        </li>
        <li>
          <a href="https://nodejs.org/">Node.js</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/">npm</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
