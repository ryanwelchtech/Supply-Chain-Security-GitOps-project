# Project Hardened-Path: FedRAMP-Aligned DevSecOps on OpenShift

## Overview
This project demonstrates a secure CI/CD pipeline and microservice deployment on **Red Hat OpenShift**, modeled after compliance requirements for **DHS FedRAMP High** environments. 

## Key Features
- **Container Hardening:** Uses RHEL UBI 9 Minimal base images to reduce attack surface (NIST 800-53 CM-6).
- **Vulnerability Management:** Integrated **Trivy** scanning within GitHub Actions to block builds with Critical/High CVEs.
- **Infrastructure-as-Code (IaC):** OpenShift manifests for NetworkPolicies (Zero Trust) and ResourceQuotas.
- **GitOps Workflow:** Automated deployment triggered by GitHub Actions to the Red Hat Developer Sandbox.

## Tech Stack
- **Orchestration:** Red Hat OpenShift (Kubernetes)
- **CI/CD:** GitHub Actions
- **Security:** Trivy, Red Hat UBI, OpenShift SCC
- **Language:** Node.js

## Compliance Mapping
- **AC-3 (Access Control):** Implemented via OpenShift RBAC and NetworkPolicies.
- **SI-7 (Software Integrity):** Image scanning and hash verification in CI.
- **SC-7 (Boundary Protection):** Restricted Ingress via OpenShift Routes and Egress filtering.

## How to View
1. Review the `.github/workflows` for the security gate logic.
2. Check `k8s/network-policy.yaml` for micro-segmentation rules.