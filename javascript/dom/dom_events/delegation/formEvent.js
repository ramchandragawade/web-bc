const form = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweetsList');

// Following only sets event listener to the lis which are currently on UI and not on dynamically added ones
// const lis = document.querySelectorAll('li');
// for (let item of lis) {
//     item.addEventListener('click',function(e){
//         item.remove();
//     });
// }

form.addEventListener('submit', function(e){
    e.preventDefault();
    const username = form.elements.username;
    const tweet = form.elements.tweet;
    addtweet(username.value, tweet.value);
    form.reset();
});

function addtweet (username, tweet) {
    const newLI = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newLI.append(bTag);
    newLI.append(`- ${tweet}`);
    tweetsContainer.append(newLI);
}

tweetsContainer.addEventListener('click', function(e){
    // console.log(e);
    const targetComp = e.target;
    targetComp.nodeName === 'LI' && targetComp.remove();
});