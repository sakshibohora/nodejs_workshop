var fs=require('fs');
var path=require('path');
let res=[];

module.exports=function(dirname,ext,callback){
	
	fs.readdir(dirname,function(err,list){
		if(err) return callback(err);
		list.forEach(function(name){
			if(path.extname(name) === '.' + ext){
				 res.push(name)
			}      		
		})
		return callback(null,res);
	})
}