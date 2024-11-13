fetch("https://api.github.com/users/CROCIATOFAF/repos")
  .then((response) => response.json())
  .then((repos) => {
    const projectsSection = document.getElementById("projects-links");
    repos.forEach((repo) => {
      const projectElement = document.createElement("div");
      projectElement.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description available"}</p>
        <p>Language: ${repo.language || "N/A"}</p>
      `;
      projectsSection.appendChild(projectElement);
    });
  })
  .catch((error) => console.error("Error fetching GitHub repos:", error));
