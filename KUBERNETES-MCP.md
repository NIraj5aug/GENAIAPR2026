# Kubernetes MCP Server Use Case

## Problem Statement

DevOps teams struggle with complex `kubectl` commands and need extensive expertise, leading to slow troubleshooting and higher error rates in production environments.

## Solution

Use the Kubernetes MCP Server to interact with clusters using natural language commands and reduce the need for manual CLI command composition.

## Installation

1. Install the Kubernetes MCP server package:

```bash
npm install -g @modelcontextprotocol/server-kubernetes
```

2. Clone the Kubernetes MCP server repository for local reference:

```bash
git clone https://github.com/containers/kubernetes-mcp-server.git
```

3. Review the server docs in `kubernetes-mcp-server/README.md` and the default instructions in `kubernetes-mcp-server/cmd/kubernetes-mcp-server/instructions.md`.

## Start the MCP server

Example command for streamable HTTP transport:

```bash
kubernetes-mcp-server streamable-http --transport-port 8080 --transport-host 127.0.0.1
```

Or run the server in stdio mode:

```bash
kubernetes-mcp-server stdio
```

## Natural Language Commands

Use an MCP-capable client or AI assistant to issue commands such as:

- "Show me all pods in the production namespace with their status"
- "Scale the frontend deployment to 5 replicas and verify health"
- "Investigate why the payment service is crashing - check logs and events"

## Key Features

- Real-time pod status and log retrieval
- Deployment scaling and rollback operations
- Multi-resource troubleshooting workflows
- RBAC-compliant command execution

## Example workflow

1. Start the MCP server.
2. Connect your AI assistant or MCP client to the server endpoint.
3. Ask natural language questions about the cluster.
4. Review generated kubectl operations before approval, if required.

## Notes

- The MCP server requires cluster access via a configured kubeconfig.
- For production use, ensure RBAC and network policies are in place.
- If the target cluster is unreachable, commands cannot be executed even though the MCP server itself is available.
- Verification attempt: `kubectl` reported the current context, but could not connect to the cluster API at `https://34.60.78.134:443`.

## Evidence capture

Capture the following screenshots for evidence:

- `screenshots/11_kubernetes_mcp_install.png` — `npm install -g @modelcontextprotocol/server-kubernetes` and `git clone` command output.
- `screenshots/12_kubernetes_mcp_run.png` — MCP server startup output.
- `screenshots/13_kubernetes_mcp_command.png` — natural language query and response from the MCP client.
- `screenshots/14_kubernetes_mcp_logs.png` — log retrieval or command execution evidence.
