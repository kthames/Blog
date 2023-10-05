const commentPostHandler = async (event) => {
    console.log("click post");

    const post_id = parseFloat(event.currentTarget.getAttribute('data'));
    //console.log(postID);
    const content = event.currentTarget.previousElementSibling.querySelector("#comment-input").value.trim();
    //console.log(content);

    if (post_id && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ post_id, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to post comment');
          }
    }

};

const commentSubmit = document.getElementsByClassName('submit-buttons');
let i4 = 1;

for (submitBtn of commentSubmit) {

  submitBtn.addEventListener('click', commentPostHandler);
  i4++;
};