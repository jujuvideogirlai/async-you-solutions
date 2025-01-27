const http = require('http')
const async = require('async')

async.each(process.argv.slice(2), (url, done) => {
http.get(url, res => {
        res.on('data', function(chunk){
        });
        res.on('end', () => done(null))
        res.on('err', (err) => console.log(err))
        })
},function(err){  
        if (err) console.log(err);  
      })      