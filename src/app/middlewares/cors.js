module.exports = (request, response, next) => {
  response.setHeader('Acess-Control-Allow-Origin', 'http://localhost:3000');
  next();
};
