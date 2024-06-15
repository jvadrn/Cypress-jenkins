pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout the first repository
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: 'main']], 
                    extensions: [], 
                    userRemoteConfigs: [[
                        credentialsId: 'jvadrn', 
                        url: 'https://github.com/jvadrn/Fortesting-Cypress-Jenkins.git'
                    ]]
                ])
                // Checkout the second repository
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
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install --save-dev cypress-multi-reporters mochawesome mochawesome-merge mochawesome-report-generator'
                sh 'sudo apt-get update'
                sh 'sudo apt-get install -y xvfb'
                // Create reporter-config.json file
                writeFile file: 'reporter-config.json', text: '''{
                    "reporterEnabled": "mochawesome",
                    "mochawesomeReporterOptions": {
                        "reportDir": "cypress/reports",
                        "quite": true,
                        "overwrite": false,
                        "html": false,
                        "json": true
                    }
                }'''
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --reporter cypress-multi-reporters --reporter-options configFile=reporter-config.json'
            }
        }
    
    }
}
