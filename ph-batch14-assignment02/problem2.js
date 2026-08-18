function isElevatorSafe(array){

    if(!Array.isArray(array)){
        return "Invalid";
    }
    let sum = 0;
    for (let i=0; i < array.length; i++) {
        sum += array[i];
    }

    if(sum>400){
        return false;
    } else {
        return true;
    }
}
