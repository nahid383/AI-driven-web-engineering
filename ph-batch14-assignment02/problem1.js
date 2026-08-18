function matchWinner(teamAgoals, teamBgoals){
    if(typeof teamAgoals !== "number" || typeof teamBgoals !== "number"){
        return "Invalid";
    }
    if(teamAgoals>teamBgoals){
        return "Team A Won";
    } else if(teamBgoals>teamAgoals){
        return "Team B Won";
    } else if(teamAgoals===teamBgoals){
        return "Draw";
    }
}
