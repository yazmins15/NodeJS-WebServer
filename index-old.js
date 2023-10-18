const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.write('Hola Mundo');
    res.end;
  })

  .listen(5000);

console.log('Escuchando en el puerto 5000');
