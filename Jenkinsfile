pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: 'main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jvadrn', url: 'https://github.com/jvadrn/Cypress-jenkins.git']])
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'sudo apt-get update'
                sh 'sudo apt-get install xvfb'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                sh 'xvfb-run --auto-servernum --server-args="-screen 0 1024x768x24" npx cypress run'
            }
        }
    }
    
    
}

