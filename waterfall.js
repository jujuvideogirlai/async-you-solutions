const http = require('http')  
const async = require('async')
const { readFile } = require('fs')


function readFileCallback(cb) {
         readFile(process.argv[2], (err, data) => {
                cb(null, data.toString())
         })

}

function httpCallback (url, cb) {
        http.get(url, function(res){  
                let body = '';  
                res.on('data', function(chunk){  
                  body += chunk.toString();  
                });  
                res.on('end', function(){  
                  cb(null, body);  
                });  
              }).on('error', function(err) {  
                cb(err);  
              });  
}


async.waterfall([readFileCallback, httpCallback], (err, result) => {
        console.log(result);
});