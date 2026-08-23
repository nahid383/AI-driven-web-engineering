"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatPlayerCard(player) {
    return `${player.userName} is a level ${player.level} player from ${player.region}`;
}
console.log(formatPlayerCard({ userName: "Nahid Hasan", level: 2, region: "Bangladesh" }));
//# sourceMappingURL=problem3.js.map