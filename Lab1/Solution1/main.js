(function(){
    const items = Array.from(document.querySelectorAll('[data-time]'));

    /*filter elements that contains word ECMA6*/
    const ecma6Elems = items.filter(el => el.textContent === "ECVA6 Video");
    console.log('elements that contains word ECMA6 :-');
    ecma6Elems.forEach(el => {console.log(el)});

    /*Map down to List of time*/
    const listOfTime = items.map(el => el.getAttribute('data-time'));
    console.log('Data times');
    listOfTime.forEach(el => {console.log(el)});

    /*Map down to List of time in seconds*/
    const listOfTimeSec = items.map(el => {
        let timeArr = el.getAttribute('data-time').split(":");
        return timeArr[0] * 60 * 60 + timeArr[1] * 60;
        });
    console.log('Data times in seconds');
    listOfTimeSec.forEach(el => {console.log(el)});

    /*Reduce to total time*/
    const totalTime = items.map(el => {
        let timeArr = el.getAttribute('data-time').split(":");
        return timeArr[0] * 60 * 60 + timeArr[1] * 60;
        }).reduce((total, time) => total + time,0);
    console.log("Total time:")
    console.log(totalTime);
})();