function hidepostsshowform() {
    let sect = document.getElementById('posts-sect') 
    sect.setAttribute('class', 'hidden')
    let sect2 = document.getElementById('form-sect') 
    sect2.setAttribute('class', '')
}

function hideformshowpost() {
    let sect = document.getElementById('form-sect') 
    sect.setAttribute('class', 'hidden')
    let sect2 = document.getElementById('posts-sect')
    sect2.setAttribute('class', '')
}