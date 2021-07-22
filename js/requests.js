

const form = document.querySelector('#form');
const postsList = document.querySelector('#posts');

form.addEventListener('submit', submitpost);

getAllPosts();


function getAllPosts(){
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(appendposts)
        .catch(console.warn)
};

// create
function submitpost(e){
    e.preventDefault();

    const postData = {

        title: e.target.title.value,
        name: e.target.name.value,
        story: e.target.story.value,
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(appendpost)
        .then(() => e.target.reset())
        .catch(console.warn)
};




// helpers

function appendposts(data){
    data.posts.forEach(appendpost);
};

function appendpost(post) {
    let div = document.createElement("div")
    const titleE = document.createElement('h1');
    const nameE = document.createElement('h3');
    const storyE = document.createElement('p');

    titleE.textContent = post.title
    nameE.textContent = post.name
    storyE.textContent = post.story

    div.append(titleE)
    div.append(nameE)
    div.append(storyE)

    postsList.append(div);
};

