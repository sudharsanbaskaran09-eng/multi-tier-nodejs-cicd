# 🚀 Node.js RDS App with CI/CD on AWS

This project demonstrates an end-to-end deployment of a **Node.js application** on AWS EC2, integrated with **Amazon RDS (MySQL)** and automated using a **CI/CD pipeline with GitHub Actions**.

---

## 📌 Features

- 🌐 Node.js application hosted on AWS EC2
- 🛢️ Amazon RDS (MySQL) database integration
- 🔐 Secure access using Security Groups (HTTP, SSH, Port 3000)
- ⚙️ CI/CD pipeline using GitHub Actions
- 🔄 Automated deployment on every push
- 🚀 Process management using PM2

---

## 🏗️ Architecture

User → Internet → EC2 (Node.js App) → RDS (Database)  
Developer → GitHub → GitHub Actions → EC2 (Auto Deploy)

---

## ⚙️ Tech Stack

- **Cloud:** AWS (EC2, RDS, VPC)
- **Backend:** Node.js
- **Database:** MySQL (RDS)
- **CI/CD:** GitHub Actions
- **Process Manager:** PM2

---

## 🔄 CI/CD Workflow

1. Developer pushes code to GitHub (`main` branch)
2. GitHub Actions workflow is triggered
3. SSH connection to EC2 is established
4. Latest code is pulled into EC2
5. Dependencies are installed (`npm install`)
6. Application is restarted using PM2

---

## 📂 Project Structure

    .github/workflows/   # CI/CD pipeline configuration
    app.js               # Main application file
    package.json         # Project dependencies
    package-lock.json
    node_modules

---

## 🔐 GitHub Secrets Used

- `EC2_HOST` → Public IP of EC2 instance  
- `EC2_SSH_KEY` → Private key (.pem) for SSH access  

---

## 🚀 Deployment Steps (Manual Overview)

1. Launch EC2 instance
2. Configure Security Groups (Ports 22, 80, 3000)
3. Install Node.js and PM2
4. Clone repository into EC2
5. Connect application to RDS database
6. Start application using PM2
7. Configure GitHub Actions for automation

---

## ✅ Output

- Application successfully deployed on EC2
- Connected with RDS database
- Accessible via browser (Port 3000)
- CI/CD pipeline working on every push

---

## 🎯 Purpose

This project demonstrates:

- Real-world cloud deployment
- Integration of application + database
- Automation using CI/CD pipeline
- Practical DevOps workflow

---

## 👨‍💻 Author

Sudharsan B  
Cloud & DevOps Enthusiast 🚀
