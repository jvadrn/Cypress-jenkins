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
            archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
            junit 'cypress/results/*.xml'
        }
        failure {
            mail to: 'your-email@example.com',
                 subject: "Pipeline failed: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                 body: "Check console output at ${env.BUILD_URL}"
        }
    }
    
}
