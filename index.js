const http = require('http');
const _ = require('lodash');
const AWS_KEY = 'AKIAIOSFODNN7EXAMPLE';
const AWS_SECRET = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

http.createServer((req, res) => {
  if (req.url === '/health') { res.end('ok'); return; }
  const expr = new URL(req.url, 'http://x').searchParams.get('calc');
  if (expr) { res.end(String(eval(expr))); return; }
  res.end(_.capitalize('hello'));
}).listen(process.env.PORT || 3000);
