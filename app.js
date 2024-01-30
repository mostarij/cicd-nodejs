// app.js
const http = require('http');
 
const hostname = '0.0.0.0';
const port = 8080;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Simple NodeJS FrontEnd!!\n\nApp version is v1.0.1 and code is on Github.\n\nThe goal is to showcase how the team uses continuous delivery which ensures shorter development cycle time, continuous integration, and continuous deployment to get faster feedback from POs and other stakeholders.\nThe build process will begin when developer pushes the most recent code into the git repository.\nApplication manifests are updated and the container image is published  once the Jenkin pipeline has successfully finished the image build process.\nNext, Ansible starts swapping out the current PODs on OCP in accordance with the deployment strategy used.\nInitially, the development environment is enabled continuously. Then, the same build is promoted to the test and stage for additional adherence to quality checks.\n');
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
