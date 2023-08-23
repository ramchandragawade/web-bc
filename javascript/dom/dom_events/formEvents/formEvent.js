const form = document.querySelector('#tweetForm');
// const username = document.querySelector('#username');
// const tweet = document.querySelector('#tweet');
form.addEventListener('submit', function(e){
    e.preventDefault();
    // const un = username.value;
    // const twt = tweet.value;
    // other way to do it
    const username = form.elements.username;
    const tweet = form.elements.tweet;
    addtweet(username.value, tweet.value);
    username.value='';
    tweet.value='';
});

function addtweet (username, tweet) {
    const ul = document.querySelector('#tweetsList');
    const newLI = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newLI.append(bTag);
    newLI.append(`- ${tweet}`);
    // newLI.innerText = `${un}:${twt}`;
    ul.append(newLI);
}