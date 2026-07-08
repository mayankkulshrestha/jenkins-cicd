const http = require("http");
const client = require("prom-client");

// Default system/application metrics collect karega
client.collectDefaultMetrics();

// Saare metrics yahan store honge
const register = client.register;


const server = http.createServer(async (req, res) => {

    // Prometheus yahan se metrics lega
    if (req.url === "/metrics") {

        res.writeHead(200, {
            "Content-Type": register.contentType
        });

        res.end(await register.metrics());

    } 
    
    // Normal application response
    else {

        res.end("Hello from Jenkins CI/CD Pipeline");

    }

});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
