// Example of adding a comment dynamically to the post page
document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const commentText = e.target.querySelector('textarea').value;
    if (commentText) {
        const commentList = document.getElementById('commentList');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        e.target.querySelector('textarea').value = ''; // Clear the textarea
    }
});
