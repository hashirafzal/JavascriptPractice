const jokeContainer = document.getElementById('jokeContainer');
const generateButton = document.getElementById('generateButton');

// Function to fetch a joke from the API
async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

// Function to display the fetched joke
async function displayJoke() {
    const jokeData = await fetchJoke();
    const jokeText = jokeData.setup + ' ' + jokeData.punchline;
    jokeContainer.innerHTML = `<p id="jokeText">${jokeText}</p>`;
}

// Event listener for the generate button
generateButton.addEventListener('click', displayJoke);