var express=require('express')
var app=express()
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port=process.env.PORT||3000
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
io.on('connection', function (socket) {
    socket.on('send',function(data){
     console.log(data);
     io.emit('recieve',data);
    })
  });

server.listen(port, () => console.log(`listening at http://localhost:${port}`))