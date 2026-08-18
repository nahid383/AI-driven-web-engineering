function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0){
        return "Invalid";
    }

    let topRestaurant = restaurants[0];
    for(let j=1; j<restaurants.length; j++){
        if(restaurants[j].rating>topRestaurant.rating){
            topRestaurant = restaurants[j];
        }
    }
    return topRestaurant.name.toUpperCase();
}