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
    
}

