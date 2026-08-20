"use strict";
// Normal User
const user1 = {
    name: "Nahid Hasan",
    role: "User",
    email: "nahid@example.com"
};
// Moderator
const user2 = {
    name: "Rahim",
    role: "Moderator",
    email: "rahim@example.com"
};
// Guest
const user3 = {
    name: "Karim",
    role: "Guest",
    email: "karim@example.com"
};
// Admin
const admin1 = {
    name: "Admin User",
    role: "Admin",
    email: "admin@example.com",
    permissions: [
        "create_user",
        "delete_user",
        "update_user",
        "view_users"
    ]
};
console.log(user1);
console.log(user2);
console.log(user3);
console.log(admin1);
