# GitHub Profile Finder

A web app that searches GitHub users and shows their profile and latest repositories, using live data from the GitHub API.

**Live demo:** https://syedhummadhyaseen.github.io/github-finder/

## Features

- Search any GitHub username
- Shows avatar, name, bio, public repos, followers and following
- Lists the 5 most recently updated repositories with language and stars
- Search with the button or the Enter key
- Handles empty input and users that don't exist

## Technologies

- HTML
- CSS
- JavaScript (fetch, async/await)
- GitHub REST API

## What I learned

- Fetching data from a public API with `fetch` and `async/await`
- Handling errors and loading states
- Building the page from JSON data
- Fixing a bug where overlapping searches duplicated the repo list