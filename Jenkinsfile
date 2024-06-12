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
        stage('Debug Reports') {
            steps {
                sh 'ls -la cypress/reports'
                sh 'ls -la cypress/screenshots'
            }
        }
        // stage('Deploy to Staging') {
        //     when {
        //         branch 'main'
        //     }
        //     steps {
        //         bat 'sh deploy-to-staging.sh'
        //     }
        // }
    }
     post {
        always {
            junit 'cypress/reports/*.xml'
            archiveArtifacts artifacts: 'cypress/reports/*.json', allowEmptyArchive: true
        }
    }

}
