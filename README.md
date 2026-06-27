# GenAI-APR2026 DevOps Acceleration

This repository demonstrates AI-assisted DevOps acceleration with GitHub Actions, Azure DevOps, and MCP preparation.

## What’s included

- GitHub Actions workflow: `.github/workflows/devops-acceleration.yml`
- GitHub Models workflow: `.github/workflows/models-demo.yml`
- Azure DevOps pipeline: `azure-pipelines.yml`
- GitHub Models prompt: `summarize.prompt.yml`
- Terraform MCP prep: `terraform-mcp-server/`
- Kubernetes MCP prep: `kubernetes-mcp-server/`

## Getting started

### 1. Install AI tooling in VS Code

- Install GitHub Copilot and Copilot Chat.
- Sign in with your GitHub account.
- Optional: install Azure Repos and Azure Pipelines extensions.

### 2. Run GitHub Actions CI

- Push changes to `main` or `develop`.
- Open Actions tab to confirm the `DevOps Acceleration CI` workflow runs.
- On pull requests, confirm the `AI PR Review` workflow comments a summary and review guidance.

### 3. Pull request guidance

- Use `.github/pull_request_template.md` for PR descriptions.
- Ensure the PR checklist includes:
  - CI passed: `DevOps Acceleration CI`
  - CodeQL scan completed
  - AI PR review summary generated

### 4. Run Azure DevOps pipeline

- Import `azure-pipelines.yml` into Azure DevOps.
- Ensure the repo has a valid `pom.xml` and Java source.

### 4. Validate the sample apps

#### Node.js
- `npm install --package-lock-only`
- `npm ci`
- `npm test`

#### Java
- `mvn test`

## Notes

- The GitHub Actions workflow uses CodeQL scanning for JavaScript.
- The Azure DevOps pipeline publishes JUnit results.
