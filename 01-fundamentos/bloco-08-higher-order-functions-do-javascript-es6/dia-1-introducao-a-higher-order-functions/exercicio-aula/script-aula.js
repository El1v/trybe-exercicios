const wakeUp = () => 'Acordando!!';

const coffeTime = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => console.log(callback);;

doingThings(sleep());
doingThings(wakeUp());
doingThings(coffeTime());