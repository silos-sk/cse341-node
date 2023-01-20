const swaggerAutogen = require('swagger-autogen')();
const j2s = require('joi-to-swagger');
const projSchema = require('./helpers/validation_schema')

const { swagger } = j2s(projSchema);

const doc = {
  info: {
    title: 'Projects and Courses API',
    description: 'This is an API server for my personal portfolio website'
  },
  '@definitions': {
    PayloadA: swagger},
  host: 'portfolio-app-iu9g.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);


// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });