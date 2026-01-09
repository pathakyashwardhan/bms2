🚀 Monorepo Deployment with CI/CD, AWS & HTTPS (Staging & Production)

This project demonstrates real-world deployment of a Monorepo architecture with multiple applications, deployed on cloud infrastructure with separate staging and production environments, custom domains, and HTTPS enabled using AWS certificate management.

The goal of this project is to showcase production-level DevOps practices, including CI/CD, environment separation, process management, and reverse proxy configuration.

📌 Project Overview

Monorepo architecture with 3 independent applications

Environment separation using main (staging) and prod (production) branches

Automated CI/CD pipeline

Deployed on Amazon Web Services (EC2)

Custom domains for each app and environment

HTTPS enabled using AWS Certificate Management

Reverse proxy configured via NGINX

Process management using PM2

Monorepo orchestration using Turborepo

🧩 Monorepo Structure
.
├── apps/
│   ├── fe-app
│   ├── http-server
│   └── ws-server
├── packages/
│   └── prisma
├── turbo.json
├── package.json
└── pnpm-workspace.yaml

🌿 Branching & Environment Strategy
Branch	Environment
main	Staging
prod	Production
🌍 Domain Mapping (these domains will not work now as i have deleted the instances)
Production

https://project-fe.yashpathak.xyz

https://project-http.yashpathak.xyz

https://project-ws.yashpathak.xyz

Staging

https://staging.project-fe.yashpathak.xyz

https://staging.project-http.yashpathak.xyz

https://staging.project-ws.yashpathak.xyz

🔐 HTTPS & Certificates

SSL certificates managed using AWS Certificate Management

HTTPS enabled for all services

NGINX used for SSL termination and routing

⚙️ CI/CD Flow

Push code to main or prod

Server pulls latest changes

Install dependencies using pnpm

Build apps using Turborepo

Restart services using PM2

🛠️ Tech Stack

Node.js, TypeScript

Turborepo, pnpm

AWS EC2

NGINX

PM2

Git & GitHub

🎯 Why This Project

Demonstrates real production deployment

Shows DevOps & Cloud skills

Covers CI/CD, HTTPS, Monorepo, NGINX

📌 Author

Yashwardhan Pathak

⚠️ Important Notes

Secrets are managed securely and not committed to the repository

Production and staging deployments are isolated
