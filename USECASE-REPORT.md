# GitHub Models + DevOps + MCP Use Case Report

## Overview
This repository demonstrates a combined automation solution for:

1. GitHub Models-powered prompt management and AI automation for PR review/issue classification/SAST.
2. AI-assisted DevOps acceleration using GitHub Actions and Azure DevOps pipelines.
3. MCP-based Kubernetes DevOps automation with a cloned Kubernetes MCP server repository.

The implementation includes:

- `summarize.prompt.yml` — GitHub Models reusable prompt file
- `.github/workflows/models-demo.yml` — sample GitHub Models inference workflow
- `.github/workflows/devops-acceleration.yml` — GitHub Actions CI workflow for Node.js testing and CodeQL scanning
- `azure-pipelines.yml` — Azure DevOps pipeline YAML for Maven build, test, and JUnit result publishing
- `DEVOPS-ACCELERATION.md` — repository documentation for the DevOps automation artifacts
- `kubernetes-mcp-server/` — cloned MCP Kubernetes server repository

---

## Use Case 1: GitHub Models Automation

### Goal
Automate AI-powered PR review, issue classification, and security analysis through GitHub Models.

### What was implemented

- `summarize.prompt.yml` created at the repository root.
- This prompt file follows GitHub Models prompt format and is now available for the GitHub Models prompt editor.
- `models-demo.yml` demonstrates invoking GitHub Models from GitHub Actions using the `models.github.ai/inference/chat/completions` API.

### Files

- `summarize.prompt.yml`
- `.github/workflows/models-demo.yml`

### Steps performed

1. Created `summarize.prompt.yml` in repository root.
2. Verified the prompt file is tracked in Git and pushed to remote.
3. Confirmed repository remote is `https://github.com/niraj5aug/GENAIAPR2026.git`.
4. Created `models-demo.yml` workflow to call GitHub Models via curl.
5. Committed and pushed the changes.

### Evidence

- `git ls-tree -r --name-only HEAD | Select-String -Pattern 'summarize.prompt.yml'` returned `summarize.prompt.yml`.
- `git config --get remote.origin.url` returned the repository remote.
- `git push` completed successfully.

### Notes

- The prompt file is now in the correct directory for GitHub Models prompt management.
- The workflow file is available for CI-based model execution.

---

## Use Case 2: AI-Powered DevOps Acceleration

### Goal
Automate repository CI/CD and accelerate DevOps workflows using GitHub Actions and Azure DevOps, with AI-assisted pipeline generation.

### What was implemented

- `.github/workflows/devops-acceleration.yml`
  - Runs on pushes to `main` and `develop`.
  - Runs on pull requests targeting `main` and `develop`.
  - Executes Node.js install, unit tests, and optional lint.
  - Runs CodeQL security scanning.

- `azure-pipelines.yml`
  - Azure DevOps pipeline for a Java service using Maven.
  - Runs `mvn clean test`.
  - Publishes JUnit test results.

- Sample Node.js project added with `package.json`, `index.js`, `test/index.test.js`, and `package-lock.json`.
- Sample Java project added with `pom.xml`, `src/main/java/com/example/App.java`, and `src/test/java/com/example/AppTest.java`.
- `DEVOPS-ACCELERATION.md` updated with implementation notes, VS Code AI guidance, and next steps.

### Files

- `.github/workflows/devops-acceleration.yml`
- `azure-pipelines.yml`
- `DEVOPS-ACCELERATION.md`

### Steps performed

1. Created the GitHub Actions workflow for CI and CodeQL.
2. Created the Azure DevOps pipeline YAML for Maven-based Java builds.
3. Documented the workflow and next steps in `DEVOPS-ACCELERATION.md`.
4. Committed and pushed the files.

### Evidence

- `git status --short` showed the new files.
- `git commit -m "Add DevOps acceleration workflows and documentation"` created the commit.
- `git push` reported `main -> main` successfully.
- Local Node.js validation passed with `npm test`.
- `package-lock.json` was generated to support `npm ci` in the GitHub Actions workflow.

### Notes

- These workflows establish a branch strategy check and required automated validations.
- The repo now contains both GitHub Actions and Azure DevOps pipeline definitions.
- Local Node.js CI validation is complete; local Maven validation is pending because `mvn` is not installed in this environment.

---

## MCP DevOps Automation: Kubernetes

### Goal
Enable natural language Kubernetes operations via MCP.

### What was implemented

- Cloned the Kubernetes MCP server repository:
  - `kubernetes-mcp-server/`
- Added `KUBERNETES-MCP.md` with installation, usage, and evidence capture guidance.
- Updated `screenshots/README.md` with Kubernetes MCP evidence filenames.

### Evidence

- `git clone https://github.com/containers/kubernetes-mcp-server.git` completed successfully.
- `npm list -g --depth=0 @modelcontextprotocol/server-kubernetes --json` reports the package in the global npm list.
- `KUBERNETES-MCP.md` now documents the use case and evidence steps.

### Limitations

- Kubernetes cluster access could not be verified because the cluster API endpoint was unreachable from this environment.
- A connectivity check was performed with `kubectl config current-context` and `kubectl cluster-info`; the context was available but the cluster API at `https://34.60.78.134:443` failed to respond.
- This prevented successful runtime verification of commands such as `kubectl get pods -n production`.
- The MCP workflow is documented for a target cluster, but actual command execution requires a reachable kubeconfig and network access.

---

## Use Case 2: Infrastructure as Code Automation — Terraform MCP

### Goal
Prepare the Terraform MCP Server for Terraform plan validation, state inspection, and drift detection.

### What was implemented

- Cloned the Terraform MCP server repository:
  - `terraform-mcp-server/`
- Verified the repository contains the Terraform MCP server source and documentation.

### Evidence

- `git clone --depth 1 https://github.com/hashicorp/terraform-mcp-server.git terraform-mcp-server` completed successfully.
- `terraform-mcp-server/README.md` exists and describes Terraform MCP server usage.

### Status

- No Terraform configuration files (`*.tf`) were present in the main repository root, so no `terraform validate`, `terraform plan`, `terraform apply`, or Terraform state inspection operations were executed.
- The Terraform MCP server was cloned for preparation only; runtime IaC validation was not completed because there is no target Terraform workspace or configured backend in this repo.

### Next steps

1. Add or reference actual Terraform configuration files such as `main.tf`, `variables.tf`, and backend settings.
2. Configure the Terraform MCP server environment variables for HCP/TFE:
   - `TFE_ADDRESS`
   - `TFE_TOKEN`
   - `ENABLE_TF_OPERATIONS=true`
3. Run the server using `terraform-mcp-server stdio` or `terraform-mcp-server streamable-http`.
4. Use an MCP-capable client to issue natural language commands like:
   - "Validate the main.tf file for AWS infrastructure"
   - "Show the Terraform plan for staging environment changes"
   - "Apply the approved infrastructure changes with auto-approval"
   - "List all resources managed by Terraform in production"

---

## Commands executed (selected)

```powershell
# Verify repo state
git status --short

# Add and push prompt file
git add summarize.prompt.yml
git commit -m "Add GitHub Models prompt"
git push

# Add CI and pipeline definitions
git add .github/workflows/devops-acceleration.yml azure-pipelines.yml DEVOPS-ACCELERATION.md
git commit -m "Add DevOps acceleration workflows and documentation"
git push

# Clone Kubernetes MCP server repository
git clone https://github.com/containers/kubernetes-mcp-server.git

# Verify npm package
npm list -g --depth=0 @modelcontextprotocol/server-kubernetes --json

# Kubernetes cluster connectivity check
kubectl config current-context
kubectl get pods -n production
Test-NetConnection -ComputerName 34.60.78.134 -Port 443
```

---

## Screenshots (placeholders)

Please capture the following screenshots and add them to the `screenshots/` folder for evidence:

1. `screenshots/01_repo-root.png` — repository root showing `summarize.prompt.yml` and workflow files.
2. `screenshots/02_summarize_prompt.png` — contents of `summarize.prompt.yml` in VS Code or GitHub editor.
3. `screenshots/03_models_demo_workflow.png` — GitHub Actions workflow file `models-demo.yml`.
4. `screenshots/04_devops_acceleration_workflow.png` — GitHub Actions workflow file `devops-acceleration.yml`.
5. `screenshots/05_azure_pipelines_yml.png` — Azure DevOps pipeline file `azure-pipelines.yml`.
6. `screenshots/06_git_push_evidence.png` — terminal output showing successful `git push`.
7. `screenshots/07_k8s_connectivity_issue.png` — terminal output showing cluster API connectivity failure.

---

## Summary
The repository has been updated to support the requested use cases for GitHub Models automation, AI-assisted DevOps acceleration, and MCP DevOps preparation.  The only remaining operational validation is live Kubernetes cluster access, which is blocked by API server connectivity issues.
