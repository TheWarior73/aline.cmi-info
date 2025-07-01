const comments = [
    "(I am not beating the allegations with that one)",
    "(The irony isn't lost is it ?)",
    "(With a lovely GF)",
    "(Totally Unexpected, really.)",
    "(Who even reads that ?)",
    "(What are you gonna do about it ?)",
    "(Much love <3)",
]

var index;

function add_comment() {
    let html_comment = get_random_comment();

    let comment = document.querySelector("#bio-comment");                               // retrieve the comment part

    comment.appendChild(html_comment);
}

function get_random_comment() {
    let index_random_comment = Math.floor(Math.random() * comments.length);

    if (index_random_comment === index) {
        get_random_comment();                                                           // ooh recursivity~ spooky :scream:
    } else {
        index = index_random_comment;
    }

    return document.createTextNode(comments[index_random_comment]);                     // random comment in the array
}

function change_comment() {
    remove_comment();
    add_comment();
}

function remove_comment() {
    let comment = document.querySelector("#bio-comment");                               // retrieve the comment part
    comment.innerHTML = "";
}

let button = document.querySelector("#bio-comment");
button.addEventListener("click", change_comment);

add_comment();