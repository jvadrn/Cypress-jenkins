pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout the first repository
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: 'main']], 
                    extensions: [], 
                    userRemoteConfigs: [[
                        credentialsId: 'jvadrn', 
                        url: 'https://github.com/jvadrn/Fortesting-Cypress-Jenkins.git'
                    ]]
                ])
                // Checkout the second repository
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: 'main']], 
                    extensions: [], 
                    userRemoteConfigs: [[
                        credentialsId: 'jvadrn', 
                        url: 'https://github.com/jvadrn/Cypress-jenkins.git'
                    ]]
                ])
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'sudo apt-get update'
                sh 'sudo apt-get install -y xvfb'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
        stage('Publish Test Report') {
            steps {
                // Publish laporan tes Cypress
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'Cypress-jenkins/cypress/reports/html',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }
}
