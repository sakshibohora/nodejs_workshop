var dt = require('./mymodule.js');

dt(process.argv[2],process.argv[3],function(err,list){
	if(err) console.log(err);
		list.forEach(function(file){
			console.log(file);
		})
})