node {
    def commit_id
    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"                        
        commit_id = readFile('.git/commit-id').trim()
    }
    stage('Tests using deno') {
        sh 'cd fullstack/deno-drash-realworld-example-app/src && deno test tests/deps.ts'
    }
  
    stage('Deploy using docker-compose build & up') {  
        sh"""
            cd fullstack/deno-drash-realworld-example-app
            docker-compose build && docker-compose up -d
        """
        }
    }
