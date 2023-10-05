const showPostHandler = async () =>  {

    showPostButton.style.display = "none";
    postGroup.style.display = "";

};

const newPostHandler = async () =>  {

    showPostButton.style.display = "";
    postGroup.style.display = "none";
    
};








// const editButtons = document.getElementsByClassName('edit-buttons');
// let i5 = 1;

// for (button of editButtons) {

//   button.addEventListener('click', editHandler);
//   i5++;
// };

// const deleteButtons = document.getElementsByClassName('delete-buttons');
// let i6 = 1;

// for (button of deleteButtons) {

//   button.addEventListener('click', deleteHandler);
//   i6++;
// };

const postGroup = document.querySelector('.new-post-group');

const showPostButton = document.querySelector('.show-new-post');
showPostButton.addEventListener('click', showPostHandler);

const newPostButton = document.querySelector('.post-button');
newPostButton.addEventListener('click', newPostHandler);