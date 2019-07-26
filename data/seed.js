const { prisma } = require('../generated/prisma-client');

const main = async () => {
  await prisma.createResume({
    name: 'Alejandro Beltrán Coronado',
    email: 'alejandro@example.org',
    linkedInUrl: 'https://www.linkedin.com/in/foo.bar.baz',
    githubUrl: 'https://github.com/foo.bar.baz',
    position: {
      create: [
        {
          title: 'Front End Engineer',
          company: 'Foo Inc.',
          description: 'Worked as a Front End Engineer',
          year: 2015
        },
        {
          title: 'Senior JavaScript Engineer',
          company: 'Bar, LLC',
          description: 'Worked as a Senior JavaScript Engineer',
          year: 2019
        }
      ]
    }
  });
}

main();
