pipeline {
    agent any
    
    environment {
        CI = 'true'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --reporter cypress-mochawesome-reporter'
            }
        }
    }
    post {
        always {
            script {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports/html',
                    reportFiles: 'mochawesome_003.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }
}

