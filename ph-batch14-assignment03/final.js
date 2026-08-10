//problem 1
function studentIntroduction(student) {

    // Write your code here

    if(typeof student !== "object" || student===null || !("name" in student) || !("age" in student) || !("course" in student)) return `Invalid`
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
} 


//problem 2
function filterActiveUsers(users) {
    // Write your code here
    if(!Array.isArray(users) || users.length==0 | users.some(user => !("isActive" in user))) return `Invalid`
    else return users.filter(user => user.isActive === true)
}


//problem 3
function countHashtags(caption) {
    // Write your code here...

    if(typeof caption !== "string"){
        return `Invalid`;
    }

    const words = caption.split(" ");

    const hashtags = [];

    for(const word of words){
        if(word.startsWith("#")){
            hashtags.push(word);
        }
    }

    let longest = "";

    for(const hashtag of hashtags){
        const tag = hashtag.slice(1);

        if(tag.length>longest.length){
            longest = tag;
        }
    }

    return{ hashtagCount: hashtags.length, longestTag: longest };
}


//problem 4
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



//problem 5
/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length===0) {
        return "Invalid";
    }

    // if (students.length == []) {
    //     return "Invalid";
    // }

    for(const student of students){
        if(!student.name || student.score===undefined || typeof student.score!=="number"){
            return `Invalid`
        }
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}