const os = require('os');

console.log("Checking your system...");

/* Function that checks memory less than 2Gb */
const checkMemory = function(){
     return new Promise(function(resolve, reject){
        if(os.totalmem < 2000000000){
            reject('This app need at least 2 GB of RAM.');
        }
        resolve();
     });
 };

/* Function that checks system has at least 2 core */
const checkProcessor = function(){
     return new Promise(function(resolve, reject){
        const cpus = os.cpus(); 
         if(cpus.length < 3){
            reject('Processor is not supported');
         }
         resolve();
     });
 };

 /* Checking memory and processor */
 checkMemory()
 .then(function(){return checkProcessor()})
 .then(function(){console.log('System checked successfully.')})
 .catch(function(message){console.log(message);});

