# Contributing to CI/CD Mastery

This repo exists to help people **learn by doing**. Contributions that
improve clarity, fix broken pipelines, or add well-explained examples are
very welcome.

## Ways to Contribute

- **Fix a bug** in a pipeline config (e.g., a workflow that's failing)
- **Improve an explanation** in any `.md` walkthrough — if something
  confused you, it probably confuses others too
- **Add a new example** at an existing level (e.g., another way to cache
  dependencies)
- **Add diagrams or images** to `docs/images/` to make concepts clearer
- **Translate** docs into other languages

## Ground Rules

1. **Every pipeline change must include an explanation.** If you add a new
   step to a workflow, update the corresponding `.md` file explaining what
   it does and why.
2. **Keep examples minimal.** The sample apps are intentionally simple — the
   focus is the pipeline, not the application code.
3. **Test before submitting.** If you change a `apps/node-app` file, run
   `npm test` and `npm run lint` locally first.
4. **One concept per PR.** Small, focused PRs are easier to review and more
   useful as standalone learning references.

## Setting Up Locally

```bash
git clone https://github.com/<your-username>/ci-cd-mastery.git
cd ci-cd-mastery/apps/node-app
npm install
npm test
npm run lint
```

## Questions or Ideas?

Open an issue! Beginner questions are welcome — if something in the repo
wasn't clear to you, that's valuable feedback for improving the docs.
