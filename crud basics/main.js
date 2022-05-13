let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


//from submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents refreshing on click
  console.log("button clicked");
  formValidation(); //calls formValidation function
});


let formValidation = () => {
  if (input.value === "") {
    console.log("failure");
    msg.innerHTML = "Post cannot be blank";
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();//function to collect data
  }
};



// input data
let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

//creating dynamic div for displaying data
let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};


//deleting entry
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};


//adding entry
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};


