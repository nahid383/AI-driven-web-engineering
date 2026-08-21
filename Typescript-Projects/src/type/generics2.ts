function useState <T> (initialValue : T) : [T, ( newValue : T) => void] {
    let value = initialValue

    function setValue(newValue : T){
        value = newValue
    }

    return [value, setValue]
}

useState<string> ('Nahid')
useState<number> (12)
useState<boolean> (true)

interface User{
    email : string,
    isLoggedIn: boolean
}


useState<User>({email : '', isLoggedIn : false})
useState<User | null> (null)