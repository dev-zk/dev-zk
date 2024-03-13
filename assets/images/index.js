// This is a sample TypeScript file

// Interfaces
interface User {
    id: number;
    name: string;
    email: string;
}

// Classes
class UserManager {
    private users: User[];

    constructor() {
        this.users = [];
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    getUsersByName(name: string): User[] {
        return this.users.filter(user => user.name === name);
    }
}

// Constants
const MAX_USERS = 1000;

// Functions
function generateRandomUser(id: number): User {
    return {
        id,
        name: `User${id}`,
        email: `user${id}@example.com`
    };
}

// Main program
const userManager = new UserManager();

// Populate users
for (let i = 1; i <= MAX_USERS; i++) {
    const user = generateRandomUser(i);
    userManager.addUser(user);
}

// Retrieve a user
const userIdToFind = 5;
const foundUser = userManager.getUserById(userIdToFind);
if (foundUser) {
    console.log('Found user:', foundUser);
} else {
    console.log('User not found');
}

// Search users by name
const userNameToSearch = 'User10';
const usersWithName = userManager.getUsersByName(userNameToSearch);
if (usersWithName.length > 0) {
    console.log(`Users with name ${userNameToSearch}:`, usersWithName);
} else {
    console.log(`No users found with name ${userNameToSearch}`);
}
