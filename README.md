# GitHub Education
GitHub Campus TNTU

## Local Development with Docker

### Prerequisites
- Docker and Docker Compose installed

### Initial Setup (First Time Only)

1. Copy the environment template file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your user's ID and group ID:
```bash
# Get your UID and GID
id

# Update .env with the values (example if you get uid=1001(vbrevus) gid=1001(vbrevus))
# Edit .env and set:
UID=1001
GID=1001
```

### Running the Development Server

Start the Hugo development server:
```bash
docker-compose up
```

The site will be available at `http://localhost:1313`. The development server automatically reloads when you make changes to the content.

### Stopping the Server

```bash
docker-compose down
```

## Contributing

Create GitHub issue with description of the problem or feature request, fill all possible fields in the issue. 
Create a new branch from issue, do not edit the created branch name. Implement the changes, and create a pull request. 
Ask for review in the pull request if needed.

After closing Pull Requests, push to main triggers GitHub Actions workflow to build and deploy the site to GitHub Pages.

### Merge Strategy

- **Feature branch to main**: Squash and merge on GitHub using Pull Requests.

---

### Resources

Hugo theme:
- [Demo Paige](https://bexer-hugo.vercel.app/)
- [Theme Bexer](https://gethugothemes.com/products/bexer)
- [Theme Bexer Documentation](https://docs.gethugothemes.com/bexer/)
- [Official Hugo Docker Image - GitHub registry](https://github.com/gohugoio/hugo/pkgs/container/hugo)
