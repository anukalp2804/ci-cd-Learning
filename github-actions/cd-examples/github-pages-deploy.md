# Deploying a Static Site to GitHub Pages — Continuous Deployment in Action

This guide explains:
[`.github/workflows/deploy-docs-site.yml`](../../.github/workflows/deploy-docs-site.yml)

## Why This Example Matters

Everything else in this repo so far is **Continuous Integration** —
build, lint, test. This workflow is your first taste of **Continuous
Deployment**: code that passes goes live automatically, with zero manual
steps.

The "application" being deployed is `docs-site/` — a simple static landing
page for this repo. It's a perfect first deployment example because:
- No build step is needed (no compiling, no Docker)
- The deployment target (GitHub Pages) is free and built into GitHub
- You can see the result live in your browser within ~60 seconds of pushing

## One-Time Setup (Required!)

Unlike the CI workflow, this one needs a setting enabled in your repo
**once** before it works:

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under "Build and deployment" → **Source**, select **GitHub Actions**
3. That's it — no branch selection needed, the workflow handles deployment

After this, every push to `main` that touches `docs-site/` will redeploy
the site automatically.

## Anatomy of the Workflow

### Triggers
```yaml
on:
  push:
    branches: [main]
    paths:
      - 'docs-site/**'
  workflow_dispatch: {}
```
- Runs automatically on pushes to `main` that touch `docs-site/`.
- `workflow_dispatch: {}` adds a manual "Run workflow" button in the Actions
  tab — useful for redeploying without making a code change (e.g., if Pages
  settings changed).

### Permissions
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```
By default, GitHub Actions workflows have limited permissions. Deploying to
Pages requires explicitly granting:
- `pages: write` — permission to publish to GitHub Pages
- `id-token: write` — permission to generate a secure OIDC token used for
  the deployment, instead of a long-lived secret/password

This is an example of the **principle of least privilege**: only grant the
specific permissions a workflow actually needs.

### Concurrency
```yaml
concurrency:
  group: pages
  cancel-in-progress: true
```
If you push twice in quick succession, this ensures only the latest
deployment completes — the older, now-outdated run is cancelled rather than
both running and potentially deploying out of order.

### The `environment` Block
```yaml
environment:
  name: github-pages
  url: ${{ steps.deployment.outputs.page_url }}
```
This ties the job to a GitHub "Environment" named `github-pages`. After
deployment, the live URL appears directly in the workflow run summary and on
your repo's main page — no need to dig for it.

### Steps

1. **Checkout** — same as every other workflow; clones your repo onto the
   runner.
2. **Upload Pages artifact** (`actions/upload-pages-artifact@v3`) — packages
   the `docs-site/` folder into the special artifact format GitHub Pages
   expects.
3. **Deploy to GitHub Pages** (`actions/deploy-pages@v4`) — takes that
   artifact and publishes it. This step's output includes `page_url`, the
   live URL of your site.

## What to Try

1. Enable GitHub Pages (Settings → Pages → Source → GitHub Actions) as
   described above.
2. Push any small change to `docs-site/index.html` (e.g., change the
   headline text).
3. Watch the **Actions** tab — "Deploy Docs Site to GitHub Pages" runs.
4. Once it finishes, click the deployment link (or check Settings → Pages)
   to see your change live.

## Connecting This Back to the Big Picture

```
Push to main (docs-site/ changed)
        │
        ▼
   GitHub Actions triggers
        │
        ▼
  Checkout → Package as Pages artifact → Deploy
        │
        ▼
   Live at https://<username>.github.io/ci-cd-mastery/
```

This is the **simplest possible real CD pipeline** — no Docker, no
Kubernetes, no approval gates. As you move into
[`github-actions/intermediate/`](../intermediate/) and
[`github-actions/advanced/`](../advanced/), you'll see this same
deploy-on-push idea extended with build steps, multiple environments
(staging vs. production), and approval gates before production deploys.
