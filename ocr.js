//1.
var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/create") {
        fs.readFile("AppPages/index.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Product Manager</h1> ' + req.url);
        resp.end();
    }
});
//5.
server.listen(5050);
 
console.log('Server Started listening on 5050');
var Tesseract = require('tesseract.js')
var filename = 'AppPages/pic1.png'

Tesseract.recognize(filename)
    .progress(function  (p) { console.log('progress', p)  })
    .catch(err => console.error(err))
.then(function (result) {
    console.log(result.text)
    process.exit(0)
})

