# Glossary

A quick-reference for terms used throughout this repo.

**Artifact**
A file (or set of files) produced by a pipeline run — e.g., a compiled
binary, a test coverage report, or a Docker image.

**Branch protection rule**
A GitHub setting that requires checks (like CI) to pass before code can be
merged into a branch (e.g., `main`).

**Build**
The process of converting source code into a runnable form — e.g.,
transpiling, compiling, or bundling.

**Cache**
Storage for files (like installed dependencies) that can be reused between
pipeline runs to save time.

**Continuous Delivery**
Code changes are automatically built, tested, and packaged for release, but
a human approves the final deployment to production.

**Continuous Deployment**
Code changes that pass all checks are automatically deployed to production
with no manual approval step.

**Continuous Integration (CI)**
Automatically building and testing code every time it changes, to catch
issues early.

**Container**
A lightweight, isolated environment that packages an application with
everything it needs to run (see: Docker).

**Environment**
A target where an application runs — common environments are
`development`, `staging`, and `production`.

**Job**
A set of steps that run together on the same runner/agent.

**Lint / Linting**
Automated checking of code for style issues, potential bugs, or
inconsistencies, without actually running the code.

**Matrix build**
Running the same job multiple times with different configurations (e.g.,
testing against Node.js 18, 20, and 22 in parallel).

**Pipeline**
The full automated sequence of stages/jobs that take code from commit to
deployment.

**Runner / Agent**
The machine (often a temporary virtual machine or container) that actually
executes pipeline steps.

**Secret**
A sensitive value (API key, password, token) stored securely by the CI/CD
platform and injected into the pipeline at runtime, never hard-coded in the
repo.

**Stage**
A logical grouping of jobs in a pipeline, often run in sequence (e.g.,
`build`, `test`, `deploy` are separate stages).

**Step**
A single command or action within a job.

**Trigger**
The event that starts a pipeline — e.g., a `git push`, a pull request, a
schedule (cron), or a manual button click.

**Workflow**
The configuration that defines a pipeline — e.g., a `.yml` file in
`.github/workflows/`.
