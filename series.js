const async = require('async')
const http = require('http')

async.series({
        requestOne: function(cb) {
                httpCallback(process.argv[2], (err, body) => {
                        cb(err, body)
                })
        },
        requestTwo: function(cb) {
                httpCallback(process.argv[3], (err, body) => {
                        cb(err, body)
                })
        }
},
function(err, results) {
        console.log(results)
})

function httpCallback(url, cb) {
        http.get(url, res => {
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