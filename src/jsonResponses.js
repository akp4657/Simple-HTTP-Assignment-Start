const text = require('./textResponses');

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };

  const stringMessaage = JSON.stringify(helloJSON);

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(stringMessaage);
  response.end();
};

const getTimeJSON = (request, response) => {
  const timeJSON = {
    message: text.getTimeString(),
  };

  const stringMessaage = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(stringMessaage);
  response.end();
};

module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
