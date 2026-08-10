function bonusScore(scores) {
    // Write your code here
    if(!Array.isArray(scores) || scores.length===0){
        return `Invalid`;
    }

    for(const score of scores){
        if(typeof score !== "number"){
            return `Invalid`;
        }
    }
    let total = 0;

    for(const score of scores){
        total = total + score +10;
    }

    return total



}