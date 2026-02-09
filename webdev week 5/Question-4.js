// TASK 4: Async/Await Version//


console.log("\n=== TASK 4: Using Async/Await ===\n");

async function showData() {
    try {
        // Fetch user
        const user = await getUser();
        console.log("User:", user);
        
        // Fetch posts for that user
        const posts = await getPosts(user.id);
        console.log("Posts:", posts);
        
        // Fetch comments for the first post
        const comments = await getComments(posts[0]);
        console.log("Comments:", comments);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
showData();