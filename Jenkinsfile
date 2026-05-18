pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        GITHUB_TOKEN = credentials('github-token')
        DOCKER_IMAGE = "ghcr.io/YOUR_GITHUB_USERNAME/waterfall"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit 'test-results/**/*.xml'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
                sh 'npm run make'
            }
        }

        stage('Docker Build & Push') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    echo $GITHUB_TOKEN | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
                    docker build -t $DOCKER_IMAGE:$BUILD_NUMBER -t $DOCKER_IMAGE:latest .
                    docker push $DOCKER_IMAGE:$BUILD_NUMBER
                    docker push $DOCKER_IMAGE:latest
                '''
            }
        }

        stage('Release') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    gh release create v1.0.$BUILD_NUMBER \
                      out/make/**/*.exe \
                      out/make/**/*.dmg \
                      out/make/**/*.deb \
                      --title "Release v1.0.$BUILD_NUMBER" \
                      --notes "Automated release from Jenkins build $BUILD_NUMBER"
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed — check the logs above.'
        }
    }
}