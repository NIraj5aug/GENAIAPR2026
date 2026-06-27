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

- `package.json`, `package-lock.json`, `index.js`, and `test/index.test.js`
  - Sample Node.js app and test to validate the GitHub Actions workflow.

- `pom.xml`, `src/main/java/com/example/App.java`, and `src/test/java/com/example/AppTest.java`
  - Sample Java app and JUnit test to validate the Azure DevOps pipeline.

- `summarize.prompt.yml`
  - GitHub Models prompt file in the repository root.

## Next steps

1. Open this repository in VS Code.
2. Verify your branch strategy: `main`, `develop`, and `feature/*`.
3. Configure branch protection rules in GitHub for required status checks:
   - `DevOps Acceleration CI` workflow
   - `CodeQL Security Scan` job
   - `AI PR Review` workflow (optional for PR summary gating)
4. Confirm the sample Node.js project works:
   - `npm ci`
   - `npm test`
5. Confirm the sample Java project works:
   - `mvn test`
6. If you are using Azure DevOps, connect the repo and create a pipeline using `azure-pipelines.yml`.
7. Use GitHub Copilot or Copilot Chat to improve or extend these workflows.

## Using AI in VS Code

- Install GitHub Copilot and Copilot Chat.
- Sign in with your GitHub account for workspace suggestions.
- Use Copilot prompts to generate or edit YAML workflows, pipeline definitions, and test cases.
- Example prompts:
  - "Create a GitHub Actions workflow that runs Node.js unit tests on push and performs CodeQL security scan on pull requests."
  - "Generate an Azure DevOps pipeline YAML for a Java service with Maven build, unit tests, and publishing test results."

## Usage

- GitHub Actions workflow runs automatically on push/PR.
- Azure DevOps pipeline can be imported from `azure-pipelines.yml`.
- `summarize.prompt.yml` is a reusable GitHub Models prompt.
