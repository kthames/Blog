const showPostHandler = async (event) =>  {
    event.preventDefault();

    showPostButton.style.display = "none";
    postGroup.style.display = "";

};

const newPostHandler = async (event) =>  {
    event.preventDefault();

    showPostButton.style.display = "";
    postGroup.style.display = "none";

    content = document.querySelector('#post-input').value.trim();
    title = document.querySelector('#title-post').value.trim();

    if(content && title) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to post comment');
          }
    }
    
    showPostHandler();
};

const showEditHandler = async (event) => {
    event.preventDefault();

    event.currentTarget.nextElementSibling.style.display = "";
    event.currentTarget.style.display = "none";

    newContent = event.currentTarget.previousElementSibling.querySelector('#edit-content');
    newTitle = event.currentTarget.previousElementSibling.querySelector('#edit-title');
    postedContent = event.currentTarget.previousElementSibling.querySelector('#dash-content');
    postedTitle = event.currentTarget.previousElementSibling.querySelector('#dash-title');

    newContent.style.display = "";
    newTitle.style.display = "";
    postedContent.style.display = "none";
    postedTitle.style.display = "none";
  
};

const editHandler = async (event) => {
    event.preventDefault();

    newContent = event.currentTarget.previousElementSibling.previousElementSibling.querySelector('#edit-content');
    newTitle = event.currentTarget.previousElementSibling.previousElementSibling.querySelector('#edit-title');
    postedContent = event.currentTarget.previousElementSibling.previousElementSibling.querySelector('#dash-content');
    postedTitle = event.currentTarget.previousElementSibling.previousElementSibling.querySelector('#dash-title');

    newContent.style.display = "none";
    newTitle.style.display = "none";
    postedContent.style.display = "";
    postedTitle.style.display = "";

    event.currentTarget.style.display = "none";
    event.currentTarget.previousElementSibling.style.display = "";

    const content_post = newContent.value.trim();
    const title_post = newTitle.value.trim();
    const post_id = parseInt(event.currentTarget.getAttribute("data"));

    if (title_post && content_post && post_id) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({title: title_post, content: content_post}),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          console.log(response.statusText);
        }
    }
};

const deleteHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data')) {
      const id = event.target.getAttribute('data');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }

};

const showEditButtons = document.getElementsByClassName('edit-buttons');
let i5 = 1;

for (button of showEditButtons) {

  button.addEventListener('click', showEditHandler);
  i5++;
};

const editButtons = document.getElementsByClassName('edit-post');
let i7 = 1;

for (button of editButtons) {

  button.addEventListener('click', editHandler);
  i7++;
};

const deleteButtons = document.getElementsByClassName('delete-buttons');
let i6 = 1;

for (button of deleteButtons) {

  button.addEventListener('click', deleteHandler);
  i6++;
};

const postGroup = document.querySelector('.new-post-group');

const showPostButton = document.querySelector('.show-new-post');
showPostButton.addEventListener('click', showPostHandler);

const newPostButton = document.querySelector('.post-button');
newPostButton.addEventListener('click', newPostHandler);