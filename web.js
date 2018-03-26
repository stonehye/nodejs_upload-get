const express = require('express')
const app = express()
var fs = require("fs");
var list = []

var seq = 0
app.get('/upload', function (req,res){
    fs.appendFile('log.txt', JSON.stringify(req.query)+"\n", function(err){
        if (err) throw err
        var string = req.param('date')+","+req.param('time')+","+req.param('temp')
        console.log(req.param('date')+","+req.param('time')+","+req.param('temp'))
        list.push(string)
        res.end ("Got "+String(seq++)+" "+JSON.stringify(req.query))
    });
})

app.get('/get', function (req,res){
    var i
    var count = req.param('count')
    var msg =""
    for (i=0; i<count; i++){
        if (!list[i]){
            msg=msg+"Only "+String(seq)+" data have been uploaded."+"<br>";
            break;
        }
        msg=msg+list[i]+"<br>";
    }
    res.send(String(msg));
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))
