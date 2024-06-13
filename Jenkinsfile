pipeline {
    agent any
    

    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                git url: 'https://github.com/jvadrn/Belajar-webhook-jenkins.git', branch: 'main'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Run Cypress Tests') {
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
                    reportDir: 'cypress-tests/cypress/reports/html',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }
    post {
        always {
            // Clean workspace after build
            cleanWs()
        }
    }
    
}

