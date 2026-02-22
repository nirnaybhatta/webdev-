const message = document.getElementById('message');
const commentsList = document.getElementById('comments-list');

// API
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Remove message
        message.style.display = 'none';

        data.slice(0, 10).forEach(comment => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${comment.name}</strong>(${comment.email})<br>${comment.body}`;
            commentsList.appendChild(li);
        });
    })
    .catch(error => {
        message.textContent = 'Failed to load data';
        console.error(error);
    });