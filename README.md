캡스톤디자인1 2반 3월 21일 과제
====
web.js

코드 설명
----

### upload
날짜(date), 시간(time), 온도(temp)를 받아 list 배열에 push한다. 
''''
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
''''

### get
받은 count만큼 입력받은 데이터 출력 (list 배열 출력)
''''
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

''''


URL
----
* 데이터로깅: http://mllime.sogang.ac.kr:3000/upload?date=20180326&time=13:52:12&temp=25.33
* 데이터덤프: http://mllime.sogang.ac.kr:3000/get?count=45
