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
                bat 'npx cypress run '
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                reportDir: 'cypress/reports/html',
                reportFiles: 'cypress-report.html',
                reportName: 'Cypress Test Report',
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true
            ])

            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'cypress/reports']]
            ])
        }
    }
}

