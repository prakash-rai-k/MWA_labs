class Clock{
    constructor(){
    }
    tick(){
        setInterval(function(){console.log('woohoo')},1000);
    }
}
module.exports = Clock;