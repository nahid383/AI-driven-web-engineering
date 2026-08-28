const getBatteryStatus = (percentage:number) : string => {
    // write your code here
    if(percentage>=0 && percentage<=20){
        return `Low`;
    } else if(percentage>=21 && percentage<=50){
        return `Medium`;
    } else if(percentage>=51 && percentage<=90){
        return `High`;
    } else if(percentage>=91 && percentage<=100){
        return `Full`;
    }
};

type Booking = {
    name : string;
    guests : number;
    time : string;
}

const formatBookingConfirmation = (booking : Booking) : string => {
    // write your code here
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
};



const calculateWeeklyTotal = (expenses:number[]) :number => {
    // write your code here
    return expenses.reduce((total, expense) => total+expense, 0);
};

type Light = "red" | "yellow" | "green";

const getTrafficAction = (light:Light) : string => {
    // write your code here
    if(light==="red"){
        return "Stop";
    } else if(light === 'yellow'){
        return "Slow Down";
    } else{
        return "Go";
    }
};

type summury = {
    total : number;
    average : number;
}


const getQuizSummary = (scores:number[]) : summury => {
    // write your code here
    const total = scores.reduce((sum, score)=>sum+score, 0);

    let average = total/scores.length;
    if(scores.length==0){
        average=0;
    }

    return{
        total : total,
        average : average
    }
};