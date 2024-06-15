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
                
                // Buat file reporter-config.json
                writeFile file: 'reporter-config.json', text: '''{
                    "reporterEnabled": "mochawesome",
                    "mochawesomeReporterOptions": {
                        "reportDir": "cypress/reports",
                        "quiet": true,
                        "overwrite": false,
                        "html": false,
                        "json": true
                    }
                }'''
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
                sh 'npx cypress run --reporter mocha-multi-reporters --reporter-options configFile=reporter-config.json'
            }
        }
    }
    
    post {
        always {
            // Arsipkan laporan tes
            archiveArtifacts artifacts: 'cypress/reports/**/*.json', allowEmptyArchive: true
            // JUnit laporan
            junit 'cypress/reports/**/*.xml'
            // Bersihkan workspace
            deleteDir()
        }
    }
}
