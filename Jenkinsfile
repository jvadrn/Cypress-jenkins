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
                sh 'npx cypress run --reporter mocha-multi-reporters --reporter-options configFile=cypress.json'
            }
        }

        // stage('Periksa Laporan') {
        //     steps {
        //         script {
        //             def reports = sh(script: 'ls -1 cypress/reports/junit', returnStdout: true).trim()
        //             echo "Laporan yang ditemukan:\n${reports}"
        //         }
        //     }
        // }
    }
    
    // post {
    //     always {
    //         script {
    //             def reportsExist = fileExists('cypress/reports/junit')
    //             if (reportsExist) {
    //                 echo 'Laporan tes ditemukan, mengarsipkan...'
    //                 // Arsipkan laporan tes
    //                 archiveArtifacts artifacts: 'cypress/reports/**/*.json', allowEmptyArchive: true
    //                 // JUnit laporan
    //                 junit 'cypress/reports/junit/*.xml'
    //             } else {
    //                 echo 'Tidak ada laporan tes yang ditemukan untuk diarsipkan.'
    //             }
    //         }
    //         // Bersihkan workspace
    //         deleteDir()
    //     }
    // }
}
