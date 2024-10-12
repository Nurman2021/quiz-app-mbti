const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
	target: 'https://www.16personalities.com',
	changeOrigin: true,
	secure: false,
	selfHandleResponse: true //
});

proxy.on('proxyRes', function (proxyRes, req, res) {
	// Hapus atau ubah header 'X-Frame-Options'
	delete proxyRes.headers['x-frame-options'];
	delete proxyRes.headers['content-security-policy']; // Mungkin juga ada di CSP
});

const server = http.createServer(function (req, res) {
	proxy.web(req, res);
});

server.listen(5000, () => {
	console.log('Proxy server running on port 5000');
});
