type Player = {
    userName : string,
    level : number,
    region : string
}

function formatPlayerCard(player: Player): string {
    return `${player.userName} is a level ${player.level} player from ${player.region}`
}

console.log(formatPlayerCard({userName : "Nahid Hasan", level:2, region:"Bangladesh"}))



