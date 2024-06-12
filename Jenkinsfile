pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install -g npm'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                bat 'npm run cypress open'
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
            archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
            junit 'cypress/results/*.xml'
        }
        success {
            mail to: 'team@example.com',
                 subject: "Build ${env.BUILD_NUMBER} Successful",
                 body: "The build ${env.BUILD_NUMBER} was successful. Check it out at ${env.BUILD_URL}"
        }
        failure {
            mail to: 'team@example.com',
                 subject: "Build ${env.BUILD_NUMBER} Failed",
                 body: "The build ${env.BUILD_NUMBER} failed. Check it out at ${env.BUILD_URL}"
        }
    }
}
