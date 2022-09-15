const http = require("http");

http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });

        response.end(JSON.stringify({
            message: "minha primeira aplicação com o nodejs"
        }));
})
.listen(4001, () => console.log("Servidor rodando na porta 4001"));
