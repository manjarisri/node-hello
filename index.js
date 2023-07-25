// npm install applicationinsights --save
let appInsights = require("applicationinsights");
appInsights.setup("[InstrumentationKey=6bbcc05c-064b-4487-a01e-e91dd22423e2;IngestionEndpoint=https://centralus-2.in.applicationinsights.azure.com/;LiveEndpoint=https://centralus.livediagnostics.monitor.azure.com/]").start();

const http = require('http');
const port = process.env.PORT || 3000;
const port2 = process.env.PORT2 || 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'this is my first project'
  res.end(msg);
});

const server2 = http.createServer((req, res) => {
	res.statusCode = 200;
	const msg2 = 'Hello docker'
	res.end(msg2);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

server2.listen(port2, () => {
	console.log(`Server2 running on http://localhost:${port2}/`);
})
