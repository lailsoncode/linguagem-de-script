const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ nome: 'Lailson Herondino', idade: 34, profissao: 'Desenvolvedor' }));
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});