# CI/CD Learning 🚀

A hands-on, **fork-and-learn** repository for understanding CI/CD from
absolute basics to advanced real-world setups — across **4 major CI/CD
platforms** and **3 programming languages**.

> **New to CI/CD?** Start with [`docs/01-what-is-cicd.md`](docs/01-what-is-cicd.md) —
> it explains *what* CI/CD is, *why* it exists, and the key vocabulary you'll
> need before touching any config files.

## How This Repo Is Organized

```
ci-cd-mastery/
├── docs/                 ← Start here: concepts, diagrams, glossary
├── docs-site/            ← Landing page for this repo (deployed via GitHub Pages)
├── apps/                 ← Sample applications (Node.js, Python, Java)
├── github-actions/       ← GHA pipelines: basic → intermediate → advanced
├── gitlab-ci/            ← GitLab CI pipelines: basic → intermediate → advanced
├── jenkins/              ← Jenkins pipelines: basic → intermediate → advanced
└── circleci/             ← CircleCI pipelines: basic → intermediate → advanced
```

Each platform folder contains three subfolders — `basic/`, `intermediate/`,
and `advanced/` — each with:
- A working pipeline config file
- A `.md` walkthrough explaining **every line** and **why it's there**
- Suggested exercises to "break it on purpose" and learn from the failure

## Learning Path

```
                ┌─────────────────────────┐
                │  docs/01-what-is-cicd.md │
                │  docs/02-platforms-...   │
                └────────────┬─────────────┘
                              │
                              ▼
                ┌─────────────────────────┐
                │   github-actions/basic   │  ← Start here (easiest setup)
                └────────────┬─────────────┘
                              │
                              ▼
                ┌─────────────────────────┐
                │ github-actions/          │
                │ intermediate → advanced  │
                └────────────┬─────────────┘
                              │
                              ▼
                ┌─────────────────────────┐
                │  gitlab-ci / jenkins /   │
                │  circleci (same levels)  │
                └─────────────────────────┘
```

## What You'll Learn at Each Level

| Level | Topics Covered |
|---|---|
| **Basic** | Triggers, jobs, steps, checkout, install dependencies, linting, running tests |
| **Intermediate** | Docker builds, dependency caching, matrix builds (multi-version testing), deploying to a staging environment |
| **Advanced** | Multi-environment pipelines (staging → production), manual approval gates, security/dependency scanning, Kubernetes deployment, rollback strategies |

## Sample Applications

| App | Location | Language |
|---|---|---|
| Node.js (Express API) | [`apps/node-app/`](apps/node-app/) | JavaScript |
| Python (Flask API) | [`apps/python-app/`](apps/python-app/) | Python |
| Java (Spring Boot API) | [`apps/java-app/`](apps/java-app/) | Java |

Each app is intentionally simple (a basic API with a health check endpoint
and a couple of unit tests) — the focus is on the **pipeline**, not the app.

## Currently Available

- ✅ `apps/node-app/` — working Express app with tests and Dockerfile
- ✅ `github-actions/basic/` — basic CI workflow for the Node app
- ✅ `docs-site/` — landing page deployed via GitHub Pages (a real CD example —
  see [`github-actions/cd-examples/github-pages-deploy.md`](github-actions/cd-examples/github-pages-deploy.md))
- 🚧 Python app, Java app, intermediate/advanced levels, and other platforms
  are being added progressively. Check back, or follow along as the repo
  grows!

## How to Use This Repo

1. **Fork it** — this is designed to be forked, not just read.
2. Pick a starting point based on your level (see Learning Path above).
3. Read the `.md` walkthrough for that pipeline.
4. Make small changes and push — watch your fork's **Actions/CI tab** to see
   the pipeline run in real time.
5. Deliberately break things (typos, failing tests) to see how the pipeline
   reports errors — this builds real intuition.

## Contributing

Found an issue, want to add an example, or improve an explanation? See
[`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT — use this freely for learning, teaching, or as a template for your own
projects.
