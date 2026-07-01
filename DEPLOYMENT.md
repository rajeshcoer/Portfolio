# Deployment Guide: Portfolio App on Vercel

This document outlines how to deploy your Next.js portfolio app to Vercel using GitHub Actions.

## Prerequisites

- GitHub repository (with this code pushed)
- Vercel account (https://vercel.com)
- GitHub personal access token (optional, for manual deployments)

## Step-by-Step Setup

### 1. Create a Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select your GitHub repository
4. Vercel will detect it's a Next.js project automatically
5. Click **"Deploy"**
6. Wait for the initial deployment to complete

### 2. Get Required Secrets

You need three secrets from Vercel. Go to your Vercel project settings:

#### a. VERCEL_TOKEN

1. Visit https://vercel.com/account/tokens
2. Click **"Create Token"**
3. Give it a name (e.g., `github-actions-deploy`)
4. Set expiration to as needed (or no expiration)
5. Click **"Create"** and copy the token

#### b. VERCEL_ORG_ID and VERCEL_PROJECT_ID

1. Go to your project settings at https://vercel.com/[username]/[project-name]/settings
2. Scroll to "Project ID" section - copy the **Project ID**
3. Go to https://vercel.com/account/settings
4. Look for your team/organization ID (shown as "Team ID" if you're in a team)

### 3. Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"** and add:

| Secret Name         | Value                                                              |
| ------------------- | ------------------------------------------------------------------ |
| `VERCEL_TOKEN`      | Your Vercel token from step 2a                                     |
| `VERCEL_ORG_ID`     | Your organization ID (for personal accounts, this is your user ID) |
| `VERCEL_PROJECT_ID` | Your Vercel project ID from step 2b                                |

### 4. Configure Vercel Environment Variables (Optional)

If your app uses environment variables:

1. Go to your Vercel project settings
2. Click **Environment Variables**
3. Add any necessary variables (e.g., `NEXT_PUBLIC_SITE_URL`)

### 5. Deploy

#### Automatic Deployment (Main Branch)

```bash
# Push to main branch
git push origin main
```

The GitHub Action will automatically build and deploy to Vercel production.

#### Preview Deployment (Pull Requests)

```bash
# Create a feature branch
git checkout -b feature/my-changes

# Make changes and push
git push origin feature/my-changes

# Open a pull request on GitHub
```

A preview deployment will be created and a comment added to the PR with the preview URL.

## Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) does the following:

- **On every push to main**:
  - Installs dependencies
  - Runs the linter
  - Builds the app
  - Deploys to production on Vercel

- **On every pull request**:
  - Installs dependencies
  - Runs the linter
  - Builds the app
  - Creates a preview deployment
  - Comments on the PR with deployment status

## Monitoring Deployments

1. **GitHub Actions**: View logs at `Repository → Actions`
2. **Vercel Dashboard**: View deployments at https://vercel.com/[username]/[project-name]/deployments
3. **GitHub PR Comments**: Preview URLs appear as comments on pull requests

## Troubleshooting

### Build Fails in GitHub Actions

- Check the workflow logs in GitHub Actions
- Ensure all environment variables are set in Vercel
- Verify Node.js version matches locally

### Deployment to Vercel Fails

- Verify the Vercel secrets are correctly set
- Check that your Vercel project still exists
- Ensure your account has sufficient resources

### Preview Deployments Not Creating

- Check that `VERCEL_PROJECT_ID` and `VERCEL_ORG_ID` are correct
- Verify token has appropriate permissions

## Custom Domain (Optional)

To add a custom domain:

1. Go to Vercel project settings → **Domains**
2. Click **"Add Domain"**
3. Enter your domain and follow the DNS configuration steps
4. Point your domain registrar's DNS to Vercel nameservers

## Environment Variables

For environment-specific variables, add them in Vercel project settings → **Environment Variables**:

Example:

```
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
```

Note: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Further Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
