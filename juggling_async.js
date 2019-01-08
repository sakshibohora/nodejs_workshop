
var http = require('http')
var bl = require('bl')
let result=[];
let count=0;
function print(){
	for(let i=0;i<3;i++){
		console.log(result[i]);
	}
}
function getData(j){
		http.get(process.argv[2+j], function(response) {
		  	response.pipe(bl(function(err, data) {
		    if (err) {
		      console.error(err)
		    }
		    result[j]= data.toString();
		    count++;
		    if(count==3){
		    	print();
		    }
	   }));
 	});
}
for(let i=0;i<3;i++){
	getData(i);
}