const username = 'YourCodewarsUsername';

async function fetchCompletedChallenges() {
  try {
    const response = await fetch(`https://www.codewars.com/api/v1/users/CROCIATO/code-challenges/completed?page=0`);
    const data = await response.json();
    
    if (data.totalItems > 0) {
      displayChallenges(data.data);
    } else {
      console.log('No completed challenges found.');
    }
  } catch (error) {
    console.error('Error fetching Codewars challenges:', error);
  }
}
function displayChallenges(challenges) {
  const container = document.querySelector('.codewars-challenges');

  challenges.forEach(challenge => {
    const challengeElement = document.createElement('div');
    challengeElement.classList.add('challenge-item');

    challengeElement.innerHTML = `
      <h3>${challenge.name}</h3>
      <p>Language: ${challenge.completedLanguages.join(', ')}</p>
      <a href="https://www.codewars.com/kata/${challenge.slug}" target="_blank">View Challenge</a>
    `;
    container.appendChild(challengeElement);
  });
}
fetchCompletedChallenges();
