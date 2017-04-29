# Docker Training

This repo contains all the material and labs used during my docker training session. It's a five hours training from theory to several hands on labs.

## Labs

### Module I - Containers and Docker

Module I is all about what is docker and several important concepts so no practical lab.

### Module II - Docker Installation and Setup

Docker can be installed on Windows, Mac and Linux. Since these options are frequently updated by Docker team, I'll use their web site to get everything we need.

1. Install Docker for your Operating System
    * [Mac](https://docs.docker.com/docker-for-mac/install/)
    * [Windows](https://docs.docker.com/docker-for-windows/install/#about-windows-containers-and-windows-server-2016)
    * [Docker Toolbox](https://docs.docker.com/toolbox/overview/#whats-in-the-box) - For older Windows and Mac versions
    * [Ubuntu](https://docs.docker.com/engine/installation/linux/ubuntu/), [Debian](https://docs.docker.com/engine/installation/linux/debian/) - Check the Docker website for other Linux distributions.

2. Check your installation

    After installing open your command line (or start docker toolbox command line) and run `docker version`, you should get a response with informtion about the docker client and server installed on your machine.

### Module III - Playing with Images and Containers

In this lab we'll download an image from my Docker Hub repository, run our first container, access it, make some changes and save it. Then we are going to stop and remove from our local repository.

1. In you command line, download from Docker Hub image brunocf/counter, a simple image that increments a counter every five seconds and print it on screen with the current date and time.

    Check that if you don have the image, docker will look for it on Docker Hub and download it.
    
2. Leave the container execution. Unfortunately the container is stopped. Check the container processes using `docker ps -a` It's because we ran it in foreground. Now start the same container as a deamon.

3. Check the containers log to make sure it's producing the expected output.

4. Stop your running container and then remove it. Use `docker ps -a` to check it's status.

5. Run a new container using the same image (brunocf/counter) as a deamon and now access it to check it's files (Remember the `docker exec` command.

6. Change the code to also output your name. You may need to install vi to edit the code within the container (Use `apt-get update` then `apt-get install vim`). You need to restart the container.

7. If you stop and remove the container all your changes are gone since the container is just a layer on top of other immutable images. Based on that, save your new image (use you name/counter as the new image name).

8. Check your new image is there (`docker images`) and now run your new image. Check the logs to make sure everything is fine.

9. Stop and remove your containers.

10. Remove the brunocf/counter image.

### Module IV - Dockerfile

This module introduced the Dockerfile concept and how it made the container creation simple allowing versioning and even tests.

1. Download the files from this repo located in *module-iv/docker-micro*

2. Build the Dockerfile. Use your_name/pyapp as the image name.

3. Check that your image has been created successfully.

4. Run your new container using your built image. Remember to expose port 8080 so you can access your app.

5. Access you running app via your web browser on *localhost:8080/myservice/list*. If you are using the toolbox, use your docker machine IP address (`docker-machine ip`) instead of localhost.
