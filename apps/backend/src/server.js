const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(
    JSON.stringify({
      application: "Logicore Logistics Platform",
      status: "Running",
      version: "1.0.0",
      message: "Backend API initialized successfully."
    })
  );
});

server.listen(PORT, () => {
  console.log(`Logicore backend running on port ${PORT}`);
});
