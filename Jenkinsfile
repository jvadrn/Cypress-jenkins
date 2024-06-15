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
                bat 'npm install'
                bat 'sudo apt-get update'
                bat 'sudo apt-get install -y xvfb'
                bat 'npm install mocha-multi-reporters mocha-junit-reporter --save-dev'

            }
        }
        
        stage('Debug Environment') {
            steps {
                bat 'echo "Workspace: ${WORKSPACE}"'
                bat 'ls -alh'
                bat 'ls -alh cypress'
                bat 'ls -alh cypress/reports'
            }
        }
        
        stage('Jalankan Tes Cypress') {
            steps {
                bat 'npx cypress run '
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

    //  post {
    //     always {
    //         script {
    //             // Arsipkan laporan tes dari direktori lokal
    //             archiveArtifacts artifacts: 'D:/All Project/TA/Cypress-jenkins/Cypress-jenkinss/cypress/reports/html', allowEmptyArchive: true
    //         }
    //         // Bersihkan workspace

    //     }
        
    //     success {
    //         // Publish HTML reports dari direktori lokal
    //         publishHTML(target: [
    //         allowMissing: false,
    //         alwaysLinkToLastBuild: true,
    //         keepAll: true,
    //         reportDir: 'D:/All Project/TA/Cypress-jenkins/Cypress-jenkinss/cypress/reports/html',
    //         reportFiles: 'index.html',
    //         reportName: 'Cypress Test Results'
    //     ])

    //     }
    // }

}
