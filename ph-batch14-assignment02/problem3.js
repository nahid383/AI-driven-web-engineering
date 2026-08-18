function calculateAiCost(tokenUsed){

    if(typeof tokenUsed !== "number"){
        return "Invalid";
    }

    if(tokenUsed<0){
        return "Invalid";
    }
    if(tokenUsed <= 0){
        return 0;
    }

    else{
        let cost = 0;
        if(tokenUsed > 500){
            const usedforCost = tokenUsed-500;
            cost = Math.floor(usedforCost/100)*5;
        return cost;
        } else{
            return 0;
        }
    }


}