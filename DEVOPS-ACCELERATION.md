# AI-Powered DevOps Acceleration

This repository now includes example DevOps automation for GitHub Actions and Azure DevOps.

## What was added

- `.github/workflows/devops-acceleration.yml`
  - Runs on pushes to `main`/`develop` and on pull requests.
  - Executes Node.js install, unit tests, and optional lint.
  - Runs CodeQL security analysis.

- `azure-pipelines.yml`
  - Example Azure DevOps pipeline for a Maven-based Java service.
  - Runs `mvn clean test` and publishes JUnit results.

- `summarize.prompt.yml`
  - GitHub Models prompt file in the repository root.

## Next steps

1. Open this repository in VS Code.
2. Verify your branch strategy: `main`, `develop`, and `feature/*`.
3. Configure branch protection rules in GitHub for required status checks:
   - `devops-acceleration.yml` jobs
   - `codeql` analysis
4. Update your package scripts if needed:
   - `npm test`
   - `npm run lint`
5. If you are using Azure DevOps, connect the repo and create a pipeline using `azure-pipelines.yml`.
6. Use GitHub Copilot or Copilot Chat to improve or extend these workflows.

## Usage

- GitHub Actions workflow runs automatically on push/PR.
- Azure DevOps pipeline can be imported from `azure-pipelines.yml`.
- `summarize.prompt.yml` is a reusable GitHub Models prompt.
