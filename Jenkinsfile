pipeline{
    agent any;

    stages{
        stage("Clone Git Repository"){
            steps{
                git branch :"Kowshikaraman/nodejs_project" ,url:"https://github.com/Kowshikaraman/nodejs_project.git"
            }
        }
        stage("Build Docker Image"){
            steps{
                script{
                    def enable = false
                    while(enable){
                    if(enable){
                    def image = docker.build("my_jenkins_app:latest")
                    break;
                    }else{
                        bat "docker build -t my_jenkins_app:latest ."
                        enable = true;
                        continue;
                    }
                    }

                }
            }
        }
    }
}