// Get output element
const output = document.getElementById('output');

// Utility function to log messages
function log(message, type = '') {
    const div = document.createElement('div');
    div.className = `log ${type}`;
    div.textContent = message;
    output.appendChild(div);
}

// Clear output function
function clearOutput() {
    output.innerHTML = '<div class="loading">Click a button to start...</div>';
}


// TASK 1: Simple Callback

function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Nirnay" });
    }, 1000);
}

function runCallback() {
    clearOutput();
    log(" Fetching user...", "loading");
    
    getUser(1, (user) => {
        log(` User: ${user.name} (ID: ${user.id})`, "user");
    });
}

// TASK 2: Callback Hell

function getUserCB(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Nirnay" });
    }, 800);
}

function getPostsCB(userId, callback) {
    setTimeout(() => {
        callback(["post1", "post2"]);
    }, 800);
}

function getCommentsCB(post, callback) {
    setTimeout(() => {
        callback(["nice", "good"]);
    }, 800);
}

function runCallbackHell() {
    clearOutput();
    log(" Starting callback chain...", "loading");
    
    getUserCB(1, (user) => {
        log(` User fetched: ${user.name}`, "user");
        
        getPostsCB(user.id, (posts) => {
            log(` Posts fetched: ${posts.join(", ")}`, "posts");
            
            getCommentsCB(posts[0], (comments) => {
                log(` Comments fetched: ${comments.join(", ")}`, "comments");
                log(" Done! (Notice the nesting)", "loading");
            });
        });
    });
}

// TASK 3: Promises

function getUserPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Nirnay" });
        }, 800);
    });
}

function getPostsPromise(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["post1", "post2"]);
        }, 800);
    });
}

function getCommentsPromise(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["nice", "good"]);
        }, 800);
    });
}

function runPromises() {
    clearOutput();
    log(" Starting promise chain...", "loading");
    
    getUserPromise()
        .then((user) => {
            log(` User fetched: ${user.name}`, "user");
            return getPostsPromise(user.id);
        })
        .then((posts) => {
            log(` Posts fetched: ${posts.join(", ")}`, "posts");
            return getCommentsPromise(posts[0]);
        })
        .then((comments) => {
            log(` Comments fetched: ${comments.join(", ")}`, "comments");
            log(" Done! (Much cleaner!)", "loading");
        })
        .catch((error) => {
            log(` Error: ${error}`, "loading");
        });
}

// TASK 4: Async/Await

async function showData() {
    try {
        const user = await getUserPromise();
        log(` User fetched: ${user.name}`, "user");
        
        const posts = await getPostsPromise(user.id);
        log(` Posts fetched: ${posts.join(", ")}`, "posts");
        
        const comments = await getCommentsPromise(posts[0]);
        log(` Comments fetched: ${comments.join(", ")}`, "comments");
        
        log(" Done! (Cleanest syntax!)", "loading");
    } catch (error) {
        log(` Error: ${error}`, "loading");
    }
}

function runAsyncAwait() {
    clearOutput();
    log(" Starting async/await...", "loading");
    showData();
}