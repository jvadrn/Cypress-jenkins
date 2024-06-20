pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout repository pertama
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: 'main']], 
                    extensions: [], 
                    userRemoteConfigs: [[
                        credentialsId: 'jvadrn', 
                        url: 'https://github.com/jvadrn/Fortesting-Cypress-Jenkins.git'
                    ]]
                ])
                // Checkout repository kedua
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
        
        stage('Instalasi Dependencies') {
            steps {
                sh 'npm install'
                sh 'sudo apt-get update'
                sh 'sudo apt-get install -y xvfb'
                sh 'npm install mocha-multi-reporters mocha-junit-reporter --save-dev'

            }
        }
        
        stage('Debug Environment') {
            steps {
                sh 'echo "Workspace: ${WORKSPACE}"'
                sh 'ls -alh'
                sh 'ls -alh cypress'
                sh 'ls -alh cypress/reports'
            }
        }
        
        stage('Jalankan Tes Cypress') {
            steps {
                sh 'npx cypress run '
            }
        }
    }

     post {
        always {
            publishHTML(target: [
            allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'D:/All Project/TA/Cypress-jenkins/Cypress-jenkinss/cypress/reports/html',
            reportFiles: 'index.html',
            reportName: 'Cypress Test Results'
            ])
        }
        
        // success {
        //     // Publish HTML reports dari direktori lokal
        //     publishHTML(target: [
        //     allowMissing: false,
        //     alwaysLinkToLastBuild: true,
        //     keepAll: true,
        //     reportDir: 'D:/All Project/TA/Cypress-jenkins/Cypress-jenkinss/cypress/reports/html',
        //     reportFiles: 'index.html',
        //     reportName: 'Cypress Test Results'
        // ])

        // }
    }

}
