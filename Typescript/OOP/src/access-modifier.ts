class bKash{
    private phone : string
    private balance : number
    private pin : string
    private history : string

    constructor(phone:string, balance:number, pin:string, history:string){
        this.phone = phone
        this.balance = balance
        this.history = history
        this.pin = pin
    }

    getBalance (pin:string) {
        if(this.pin === pin)
        return this.balance
        else{
            return `Your account is locked`
        }
    }

    getHistory() {
        return this.history
    }
}


const bkash1 = new bKash("01755373931", 3020, "2580", "Last time send money.")
// bkash1.balance = 0
console.log(bkash1.getBalance("25580"))
console.log(bkash1.getHistory())