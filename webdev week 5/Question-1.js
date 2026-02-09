//TASK 1: Understanding Callbacks//

console.log("=== TASK 1: Understanding Callbacks ===\n");

function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Ram" });
    }, 2000);
}

// Call getUser function and print the user name
console.log("Fetching user...");
getUser(1, (user) => {
    console.log("User name:", user.name);
    console.log("Full user object:", user);
});
