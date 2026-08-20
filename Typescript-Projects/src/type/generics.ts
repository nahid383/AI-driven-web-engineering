interface Response<T>{
    data : T;
    status : number;
}

const transactionResponse: Response<string> = {
    data : "Transaction Successful",
    status : 200
}

const transactionStatus : Response<boolean> = {
    data : true,
    status : 200
}

const transactionAmount : Response<number> = {
    data : 450,
    status : 401
}

function getLength<T> (array:T[]) : number{
    return array.length
}

getLength<string> (['Nahid', 'Rayed', ' '])
getLength<number> ([3, 4, 5, 6])

getLength(['nahid', 'rayed', 5])