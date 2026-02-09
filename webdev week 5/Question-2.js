//TASK 2: Callback Hell//


console.log("\n=== TASK 2: Callback Hell ===\n");

function getUserCallback(id, callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: id, name: "Ram" });
    }, 1000);
}

function getPostsCallback(userId, callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        callback(["post1", "post2"]);
    }, 1000);
}

function getCommentsCallback(post, callback) {
    setTimeout(() => {
        console.log("Comments fetched");
        callback(["nice", "good"]);
    }, 1000);
}

// Nested callbacks - "Callback Hell"
getUserCallback(1, (user) => {
    console.log("User:", user);
    
    getPostsCallback(user.id, (posts) => {
        console.log("Posts:", posts);
        
        getCommentsCallback(posts[0], (comments) => {
            console.log("Comments:", comments);
        });
    });
});
