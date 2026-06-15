# GitHub Actions — Basic Level (Node.js App)

This guide explains the workflow file:
[`.github/workflows/node-basic.yml`](../../.github/workflows/node-basic.yml)

## What This Pipeline Does

Every time code is pushed (or a pull request is opened) that touches the
Node.js app, GitHub Actions automatically:

1. Checks out the repository code
2. Sets up Node.js
3. Installs npm dependencies
4. Runs the linter (catches style/syntax issues)
5. Runs the test suite with coverage

If any step fails, the whole workflow is marked ❌ and you (and anyone
reviewing a PR) see exactly which step failed and why — without anyone
needing to run anything locally.

## Anatomy of the Workflow File

### 1. `name`
```yaml
name: Node App - Basic CI
```
This is just a label shown in the GitHub Actions UI so you can identify the
workflow at a glance.

### 2. `on` — Triggers
```yaml
on:
  push:
    branches: [main]
    paths:
      - 'apps/node-app/**'
  pull_request:
    branches: [main]
    paths:
      - 'apps/node-app/**'
```
- `push` to `main` and `pull_request` targeting `main` both trigger this
  workflow.
- `paths` is an optimization: the workflow **only runs if files inside
  `apps/node-app/` changed**. Since this repo has multiple apps and
  platforms, this prevents unrelated changes (e.g., editing the Python app)
  from triggering the Node pipeline unnecessarily.

### 3. `jobs` and `runs-on`
```yaml
jobs:
  build-and-test:
    runs-on: ubuntu-latest
```
- A **job** is a unit of work that runs on its own virtual machine (runner).
- `ubuntu-latest` means GitHub provides a fresh Ubuntu Linux VM for this job.
  Every run starts from a clean slate — nothing persists between runs unless
  you explicitly cache or upload it.

### 4. `defaults.run.working-directory`
```yaml
defaults:
  run:
    working-directory: apps/node-app
```
Since the Node app lives in a subfolder (not the repo root), this tells every
`run:` step in this job to execute from inside `apps/node-app/` — so commands
like `npm install` work without needing `cd apps/node-app &&` on every line.

### 5. Steps — the actual work

#### Step 1: Checkout
```yaml
- name: Checkout code
  uses: actions/checkout@v4
```
The runner VM starts **empty** — it doesn't have your code. This step uses
the official `actions/checkout` action to clone your repository onto the
runner. Almost every workflow needs this as its first step.

#### Step 2: Set up Node.js
```yaml
- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'
    cache-dependency-path: apps/node-app/package-lock.json
```
This installs Node.js version 20 on the runner. The `cache: 'npm'` option
tells GitHub Actions to cache the `~/.npm` directory between runs, keyed on
the `package-lock.json` file — so if dependencies haven't changed, future runs
install much faster.

#### Step 3: Install dependencies
```yaml
- name: Install dependencies
  run: npm install
```
A plain shell command. Since we set `working-directory` above, this runs
inside `apps/node-app`.

#### Step 4: Lint
```yaml
- name: Run ESLint
  run: npx eslint src/**/*.js tests/**/*.js
```
Catches code style issues and common mistakes (e.g., unused variables,
undefined references) **before** they become bugs.

#### Step 5: Test
```yaml
- name: Run tests
  run: npx jest --coverage
```
Runs the Jest test suite. `--coverage` also generates a report showing what
percentage of the code is covered by tests.

## How to See This in Action

1. Fork this repository.
2. Make a small change inside `apps/node-app/src/app.js` (e.g., change the
   welcome message).
3. Push the change (or open a PR).
4. Go to the **Actions** tab on your fork — you'll see "Node App - Basic CI"
   running.
5. Click into it to see each step execute live, with full logs.

## Try Breaking It (Recommended Exercise!)

The best way to learn CI is to **watch it fail and understand why**:

- Introduce a syntax error in `app.js` → watch the lint step fail.
- Change `expect(add(2, 3)).toBe(5)` to `.toBe(6)` in the test file → watch
  the test step fail with a clear diff.
- Remove `package-lock.json` → see how the cache step behaves differently.

## What's Next

Once you're comfortable with this basic pipeline, move on to
[`github-actions/intermediate/`](../intermediate/) where we add:
- Docker image builds
- Matrix testing (multiple Node.js versions at once)
- Deployment to a staging environment
