var net =require('net');
let disp_date;
var server=net.createServer(function(socket){
	disp_date=date.getFullYear()+'-'+ date.getMonth() +'-'+     // starts at 0  
    +'-'+  date.getDate()      // returns the day of month  
     +' '+ date.getHours() +':'+  
     date.getMinutes()

     socket.write(disp_date);
     socket.end();
})
server.listen(process.argv[2]);