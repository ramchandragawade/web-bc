const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const getDadJoke = async function () {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  }
  catch (error) {
    return 'No jokes available! Sorry!'
  }
};


const addNewJoke = async function() {
  const jokeText = await getDadJoke();
  const newLi = document.createElement('LI');
  newLi.append(jokeText);
  jokes.append(newLi);
}

button.addEventListener('click', addNewJoke);
