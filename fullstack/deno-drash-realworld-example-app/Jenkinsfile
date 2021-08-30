node {
    def commit_id
    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"                        
        commit_id = readFile('.git/commit-id').trim()
    }
    stage('Tests using deno') {
        sh 'cd src && deno test tests/deps.ts'
    }
  
    stage('Deploy using docker-compose build & up') {  
        sh"""
            docker-compose build && docker-compose up -d
        """
        }
    }

