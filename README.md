# gp-services
GPM Services 

gp-services.ma

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

Push to main triggers GitHub Actions workflow to build and deploy the site to stage subdomain.
Push to production branch triggers Amplify workflow to build and deploy the site to production domain. Note: amplyfy
does not respond to creat tag events, so the release tag should be created locally and pushed to GitHub with
the commits when merging to production (see instruction in below chapters).

### Merge Strategy

- **Feature branch to main**: Squash and merge on GitHub using Pull Requests.
- **Main to production**: Merge locally, add a release tag on production branch, and push to GitHub. Note: be sure
  to use "push tags" option to push the tag with commits to GitHub.

### Release Tags

When merging to production, create a release tag locally:

1. Merge the main branch to production locally.
2. Create a new release tag (e.g., `v1.0.0`) on the last commit of production branch.
3. Push the production branch with the new tag to GitHub. Be sure to push tag with commits, may require the use of
   an additional option, depends on used IDE.

### Checking the Deployed Version

The currently deployed version on production can be checked by looking at the last `<div>` tag of the footer where
the `deployed_git_tag` variable is displayed, showing the current release version (e.g., `v1.0.0`). The last `<div>`
tag is hidden and can be checked by HTML inspection using browser developer tools.

Deployed version from git tag is displayed only on production domain, for stage domain it is displayed as
"local-version" the same as for localhost.

---

### Resources

Hugo theme:
- [Demo Paige](https://bexer-hugo.vercel.app/)
- [Theme Bexer](https://gethugothemes.com/products/bexer)
- [Theme Bexer Documentation](https://docs.gethugothemes.com/bexer/)
- [Official Hugo Docker Image - GitHub registry](https://github.com/gohugoio/hugo/pkgs/container/hugo)
