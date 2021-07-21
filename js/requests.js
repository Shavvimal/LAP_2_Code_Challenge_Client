

const form = document.querySelector('#form');
const postsList = document.querySelector('#posts');

form.addEventListener('submit', submitpost);

getAllPosts();


function getAllPosts(){
    fetch('http://localhost:3000/dogs')
        .then(r => r.json())
        .then(appendposts)
        .catch(console.warn)
};

// create
function submitpost(e){
    e.preventDefault();

    const postData = {
        name: e.target.title.value,
        age: e.target.name.value,
        // story: e.target.story.value,
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/dogs', options)
        .then(r => r.json())
        .then(appendpost)
        .then(() => e.target.reset())
        .catch(console.warn)
};




// helpers

function appendposts(data){
    data.dogs.forEach(appendpost);
};

function appendpost(post) {
    let div = document.createElement("div")
    const nameTd = document.createElement('h1');
    const ageTd = document.createElement('h3');

    nameTd.textContent = post.name
    ageTd.textContent = post.age

    div.append(nameTd)
    div.append(ageTd)

    postsList.append(div);
};

