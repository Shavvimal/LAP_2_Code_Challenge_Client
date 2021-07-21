
// SETUP
const form = document.querySelector('#form-post');
const postsList = document.querySelector('#posts-list');

// Bind event listeners
form.addEventListener('submit', submitpost);

// Fetch all as soon as app is loaded
getAllPosts();

// ********************************************


// index
function getAllPosts(){
    fetch('http://localhost:3000/dogs')
        .then(r => r.json())
        .then(appendposts)
        .catch(console.warn)
};

// create
// function submitpost(e){
//     e.preventDefault();

//     const postData = {
//         name: e.target.title.value,
//         age: e.target.name.value,
//         // story: e.target.story.value,
//     };

//     const options = { 
//         method: 'POST',
//         body: JSON.stringify(postData),
//         headers: { "Content-Type": "application/json" }
//     };

//     fetch('http://localhost:3000/dogs', options)
//         .then(r => r.json())
//         .then(appendpost)
//         .then(() => e.target.reset())
//         .catch(console.warn)
// };


// helpers
function appendposts(data){
    console.log('Got here')
    // data.posts.forEach(appendpost);
};

function appendpost(postData){
    const newDiv = document.createElement('div');
    const postLi = formatpostdiv(postData, newDiv)
    postsList.append(newRow);
};


function formatpostdiv(post, div){
    const nameTd = document.createElement('h1');
    const ageTd = document.createElement('h3');
    const storyTd = document.createElement('p');

    nameTd.textContent = post.name
    ageTd.textContent = post.age
    // storyTd.textContent = post.story

    div.append(nameTd)
    div.append(ageTd)
    // div.append(storyTd)

    return div
}

