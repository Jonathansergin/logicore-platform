const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      application: "Logicore Platform",
      version: "1.0.0",
      status: "running",
      message: "Backend server is operational"
    })
  );
});

server.listen(PORT, () => {
  console.log(`Logicore backend running on port ${PORT}`);
});
