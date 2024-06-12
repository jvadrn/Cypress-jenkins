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
                bat 'npx cypress run'
            }
        }
    }
    
    post {
        always {
            // Pastikan untuk menggunakan pola yang benar untuk file XML hasil tes JUnit
            junit 'cypress/reports/*.xml'
            
            // Pastikan pola ini sesuai dengan file JSON yang ingin Anda arsipkan
            archiveArtifacts artifacts: 'cypress/reports/*.json', allowEmptyArchive: true
        }
    }
}

