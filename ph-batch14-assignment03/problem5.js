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