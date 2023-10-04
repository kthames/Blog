

const postHandler = async (event) => {
    event.preventDefault();

    const postID = parseFloat(event.currentTarget.getAttribute('data'));
    console.log(postID);

    const username = event.currentTarget.querySelector("#username");
    const content = event.currentTarget.querySelector("#content");
    const commentBtn = event.currentTarget.querySelector("#comment-btn");

    username.style.display = "";
    content.style.display = "";
    commentBtn.style.display = "";










};


const posts = document.getElementsByClassName('list-group-item');

let i = 1;

for (post of posts) {

  post.addEventListener('click', postHandler);
  i++;
};