const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

async function getUser(username) {
    if (!username.trim()) {
        result.innerHTML = "<p>Please enter a username.</p>";
        return;
    }

    result.innerHTML = "<p>Loading...</p>";

    const response = await fetch("https://api.github.com/users/" + username);

    if (!response.ok) {
        result.innerHTML = "<p>User not found.</p>";
        return;
    }

    const data = await response.json();

        const profileHTML = `
        <img src="${data.avatar_url}" alt="${data.login}" width="120">
        <h2>${data.name || data.login}</h2>
        <p>${data.bio || "No bio available"}</p>
        <p>Public repos: ${data.public_repos}</p>
        <p>Followers: ${data.followers} | Following: ${data.following}</p>
    `;
        const reposResponse = await fetch("https://api.github.com/users/" + username + "/repos?sort=updated&per_page=5");
    const repos = await reposResponse.json();

    let reposHTML = "<h3>Latest Repositories</h3>";

    repos.forEach(function (repo) {
        reposHTML += `
            <p>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                | ${repo.language || "N/A"} | Stars: ${repo.stargazers_count}
            </p>
        `;
    });
    
        result.innerHTML = profileHTML + reposHTML;
}

searchBtn.addEventListener("click", function () {
    const username = usernameInput.value;
    getUser(username);
});

usernameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getUser(usernameInput.value);
    }
});usernameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getUser(usernameInput.value);
    }
});