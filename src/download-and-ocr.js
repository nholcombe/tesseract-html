var Tesseract = require('tesseract.js')
var request = require('request')
var fs = require('fs')
var url = 'https://upswing.io/assets/img/ana-assistant/scribe-reminder.png'
var filename = 'pic2.png'

var writeFile = fs.createWriteStream(filename)

request(url).pipe(writeFile).on('close', function() {
    console.log(url, 'saved to', filename)
    Tesseract.recognize(filename)
        .progress(function  (p) { console.log('progress', p)  })
        .catch(err => console.error(err))
.then(function (result) {
        console.log(result.text)
        process.exit(0)
    })
});