node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
  //  stage('test') {
  //    nodejs(nodeJSInstallationName: 'nodejs') {
  //      sh 'npm install -g @angular/cli@latest && npm install --global yarn && yarn install'
  //     //  sh 'npm test'
  //    }
  //  }
  
   stage('Deploy using docker-compose build & up') {  
       sh"""
       docker-compose build && docker-compose up -d
       """
   }
  }

