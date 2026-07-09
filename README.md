# 🚀 Jenkins CI/CD Pipeline

> An end-to-end CI/CD pipeline for a Node.js application using **Jenkins**, **Docker**, **SonarQube**, **Trivy**, and **Prometheus**.

![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge\&logo=jenkins\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)
![SonarQube](https://img.shields.io/badge/SonarQube-Code%20Quality-4E9BCD?style=for-the-badge\&logo=sonarqube\&logoColor=white)
![Trivy](https://img.shields.io/badge/Trivy-Security%20Scanner-1904DA?style=for-the-badge)
![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge\&logo=prometheus\&logoColor=white)

---

## 📖 Overview

This repository demonstrates a complete **Continuous Integration and Continuous Deployment (CI/CD)** workflow using Jenkins.

The pipeline automates the software delivery process—from fetching the latest source code to performing code quality checks, security scanning, Docker image creation, and deployment. The application also exposes Prometheus metrics for monitoring.

This project is intended for learning DevOps practices and showcasing an industry-standard CI/CD implementation.

---

## ✨ Features

* 🚀 Automated CI/CD Pipeline using Jenkins
* 📦 Node.js application build and execution
* 🔍 SonarQube static code analysis
* 🔒 Trivy vulnerability scanning
* 🐳 Docker image build
* 📊 Prometheus metrics exposure
* ⚙️ Easy deployment workflow
* 📁 Multiple Jenkins pipeline configurations

---

## 🛠 Tech Stack

| Tool       | Purpose                |
| ---------- | ---------------------- |
| Jenkins    | CI/CD Automation       |
| Node.js    | Backend Application    |
| Docker     | Containerization       |
| SonarQube  | Code Quality Analysis  |
| Trivy      | Security Scanning      |
| Prometheus | Monitoring & Metrics   |
| GitHub     | Source Code Management |

---

## 📂 Project Structure

```text
.
├── app.js
├── Dockerfile
├── package.json
├── package-lock.json
├── jenkinsfile
├── jenkinsfile_sonarqube_trivy
└── README.md
```

---

## 🔄 CI/CD Pipeline Flow

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Pipeline
    │
    ├── Checkout Source Code
    │
    ├── Install Dependencies
    │
    ├── Build Application
    │
    ├── SonarQube Analysis
    │
    ├── Trivy Security Scan
    │
    ├── Build Docker Image
    │
    └── Deploy Application
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/<your-github-username>/jenkins-cicd.git

cd jenkins-cicd
```

---

### Install Dependencies

```bash
npm install
```

---

### Run the Application

```bash
node app.js
```

or

```bash
npm start
```

---

## 🐳 Docker

### Build Docker Image

```bash
docker build -t jenkins-cicd .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 jenkins-cicd
```

---

## ⚙️ Jenkins Pipelines

This repository contains two Jenkins pipeline files.

### `jenkinsfile`

Basic CI/CD pipeline including:

* Checkout Code
* Install Dependencies
* Build Application
* Docker Build
* Deployment

---

### `jenkinsfile_sonarqube_trivy`

Advanced pipeline including:

* Checkout Source Code
* Install Dependencies
* SonarQube Code Analysis
* Trivy Vulnerability Scan
* Docker Build
* Deployment

---

## 📊 Monitoring

The Node.js application exposes metrics that can be collected by **Prometheus**.

This enables monitoring of application performance and health, making it easier to integrate with visualization tools such as **Grafana**.

---

## 📋 Prerequisites

Install the following tools before running the project.

* Git
* Node.js
* Jenkins
* Docker
* SonarQube *(Optional)*
* Trivy *(Optional)*
* Prometheus *(Optional)*

---

## 📈 Future Enhancements

* Kubernetes Deployment
* Helm Charts
* ArgoCD Integration
* Grafana Dashboard
* Slack Notifications
* Email Notifications
* Automated Testing
* Docker Image Push to Docker Hub
* AWS EC2 Deployment

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create a new feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 📜 License

This repository is created for educational and learning purposes.

Feel free to use, modify, and improve it.

---

## 👨‍💻 Author

**Mayank Kulshrestha**

GitHub: https://github.com/mayankkulshrestha

---

## ⭐ Support

If you found this project useful, please consider giving it a **Star ⭐** on GitHub.

It helps others discover the project and supports future improvements.
