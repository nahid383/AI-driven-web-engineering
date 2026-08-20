type userRole = "Admin" | "User" | "Moderator" | "Guest";

interface User {
    name: string;
    role: userRole;
    email: string;
}

interface Admin extends User {
    permissions: string[];
}

// Normal User
const user1: User = {
    name: "Nahid Hasan",
    role: "User",
    email: "nahid@example.com"
};

// Moderator
const user2: User = {
    name: "Rahim",
    role: "Moderator",
    email: "rahim@example.com"
};

// Guest
const user3: User = {
    name: "Karim",
    role: "Guest",
    email: "karim@example.com"
};

// Admin
const admin1: Admin = {
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