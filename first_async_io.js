var fs=require('fs');
let count=0;
fs.readFile(process.argv[2],function(err,data){
	if(err){
		console.log(err);
	}else{
		count=data.toString().split('\n')
		console.log(count.length-1);
	}
})
