let showComments = false; 
let hideContents = false;

const postHandler = async (event) => {
    event.preventDefault();
  
    const username = event.currentTarget.querySelector("#username");
    const content = event.currentTarget.querySelector("#content");
    const commentBtn = event.currentTarget.querySelector("#comment-btn");
    const commentCard = event.currentTarget.querySelector("#comments");
    const hideBtn = event.currentTarget.querySelector("#hide-btn");

    username.style.display = "";
    content.style.display = "";
    commentBtn.style.display = "";

    console.log(commentCard);
    console.log(showComments);

    if(showComments) {
      commentCard.style.display = "";
      hideBtn.style.display = "";
      showComments = false;
    }

    if(hideContents) {
      commentCard.style.display = "none";
      hideBtn.style.display = "none";
      username.style.display = "none";
      content.style.display = "none";
      commentBtn.style.display = "none";
      hideContents = false;
    }
};

const commentHandler = async (event) => {
  event.preventDefault();
  console.log('click comment');

  console.log(event.target);
  showComments = true;

}

const contentHandler = async (event) => {
  event.preventDefault();
  console.log('click hide');
   
  hideContents = true;

}

const posts = document.getElementsByClassName('list-group-item');
let i = 1;

for (post of posts) {

  post.addEventListener('click', postHandler);
  i++;
};

const commentButtons = document.getElementsByClassName('com-buttons');
let i2 = 1;

for (button of commentButtons) {

  button.addEventListener('click', commentHandler);
  i2++;
};

const hideButtons = document.getElementsByClassName('hide-buttons');
let i3 = 1;

for (button of hideButtons) {

  button.addEventListener('click', contentHandler);
  i3++;
};