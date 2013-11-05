#!/usr/bin/env node
var fs=require('fs');
var path=require('path');

var argv=process.argv;
argv.splice(0,2);

if(argv.length<1)
    throw new Error("I need project name");
var name=argv[0];
var parentPath=argv[1] || process.cwd();

var projPath=path.join(parentPath,name);

if(fs.existsSync(projPath)){
    console.error(projPath+" is exists");
    process.reallyExit(1);
}

fs.mkdirSync(projPath,0777);
fs.mkdirSync(path.join(projPath,'lib'),0777);
fs.mkdirSync(path.join(projPath,'test'),0777);
fs.writeFile(path.join(projPath,'lib',name+".js"),'','utf-8',function(err){
    if(err) throw err;
});

var author=process.env['USER'] || 'unknow';

function merge(fromPath,targetPath){
    fs.readFile(path.join(__dirname,'templates',fromPath),'utf-8',function(err,data){
        if(err) throw error;
        data=data.replace(/@name/gm,name);
        data=data.replace(/@author/gm,author);
        fs.writeFile(path.join(projPath,targetPath),data,'utf-8',function(err){
            if(err) throw err;
        });
    });
}

merge('package.json','package.json');
merge('test.js',"test/"+name+'_test.js');



