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

5. Access your running app via your web browser on *localhost:8080/myservice/list*. If you are using the toolbox, use your docker machine IP address (`docker-machine ip`) instead of localhost.

### Module V - Managing Volumes

Let's make our python app easier to run by creating a volume so we can run our app in the container using a file system from the host machine.

1. Download the Dockerfile_Volume located in the module-v directory and build it as new image.

2. Run the container using the docker-micro directory you created in the previous module as the external volume and map it to the `/home/pyuser` directory. Remember to use the `-v` flag.

3. Access the container using `docker exec -it` and go to your new mounted volume (/home/pyuser) and check your files are there.

4. Make some changes to the API hardcoded json, restart the container and check the changes have been updated when calling the API on your browser.

### Module VI - Docker Networking

Moving forward, it's time to make containers talk to each other by using the network features offered by Docker.

1. Download the mongo image from Docker Hub.

2. Go through the repository Readme to understand more about the image details and how to run the mongo container.

3. Create a new network called mongo-python.

4. Run the mongo container, name it 'mongodb' and add it to your 'mongo-python' network. Run the container as a deamon process.

5. Download the docker-mongo directory located in the module-vi-viii directory and build the Dockerfile. Name the image 'your_name/pymongo'.

6. Access the mongodb container. In the container type mongo to reach mongodb console and use the following commands to create a new database and collection.
    * use testdb - to create the testdb database.
    
    * Insert at least three products in the 'products' collection. Use `db.products.insert({“product”:”mango”})` to create the collection and insert the products. Change only the product name.
    
    * Use `db.products.find()` to list the documents in your collection and make sure you have data there.

7. Run your image naming it 'pymongo-app', add it to the 'mongo-python' network and make port 8080 accessigle to your host.

8. Access your running app via your web browser on *localhost:8080/myservice/list*. If you are using the toolbox, use your docker machine IP address (`docker-machine ip`) instead of localhost. 

**Up for some challenge!? Let's hit the road!**

9. Create a new Dockerfile to run the NodeJS app located in the module-vi-viii/docker-node directory.

10. Build your image and name it your_name/nodeapp

11. Run your container. Make sure you use all the correct flags and parameters so your container is able to access your Python API. Use port 8081 to avoid conflicts.

12. Test your NodeJS app on the web browser and check your mongodb container to view the data added.

**What about using a different database to store our product data?**

13. Download from Docker Hub a MySQL image ('mysql' is the official image name) and read the kick off instructions on how to run the container.

14. Run the mysql container, name it 'mysql' and add it to a new 'mysql-net' network.

15. Access the mysql container to create your database and add some data to that.
    * In the mysql container run `mysql -u root -p`, provide the password you created.
    
    * Create your 'testdb' database running `create database testdb`.
    
    * Check your database was created `show databases` and switch to your new database `use testdb`.
    
    * Create a 'products' table - `create table products (name varchar(40))`.
    
    * Insert at least three products in it. Use the insert command to do so. `insert into products values ('mango')`.

16. Download the 'docker-mysql' directory located in the *module-vi-viii* directory. This folder contains the python code responsible to access the MySQL database and create our products API.

17. Build the Dockerfile provided and name the image 'your_name/pymysql'.

18. Run a new container using the pymysql image, name it 'pymysql'. Make sure to add it to the correct network and expose the required ports.

19. Check the container logs and test your API on the web browser. Remember to use the right port.

### Module VII - Docker Hub and Registry

Now it's time to share your images and take advantage of using Docker containers!

1. Go to [Docker Hub](https://hub.docker.com) and create a new free account if have not done so yet.

2. In the command line, login to you created account running `docker login <your username>`. Provide your password and you should be ok.

3. Upload your pymysql image you created in the previous module. Remember you have to name your image with your_docker_hub _username>/pymysql. To upload you image use `docker push <image name>`.

4. Check on your Docker Hub if you image is there.

5. Now, using `docker search` look for your classmate pymysql image. Download it using `docker pull <image name>`.

6. Run your downloaded image as a new container provided all the required setting and test on your web browser.

### Module VIII - Docker Compose

Managing more than one container can become a challenge work. Start each one, make sure the run command is correct, stop them all, etc. Hopefully there is the Docker Compose that allows us to manage many container from one file and submit one command that affect the whole set of clusters.

This time we'll use a compose file to start our python mongo API.

1. Download the *docker-compose.yml* file located in the *module-vi-viii/docker-mongo* directory if you haven't done so and put it in your local *docker-mongo* directory.

2. Start your puthon mongo system. Use `docker-compose -f docker-compose.yml up -d`.

3. Check your containers are running (`docker ps -a`) and test the API on your web browser.

4. Using `docker inspect <container name>` check that a new network has been created for both container and they are reacheable through their container ids or name used as aliases.

5. Stop you continers system but do not remove them.

6. Start your containers again and then remove all your system using the `docker-compose -f docker-compose.yml down` command.

7. Add to the docker-compose.yml file the NodeJS image as a new service. Remember to expose the required ports.

8. Start your new set of containers and check your NodeJS application is running accordingly on the web browser.

9. Stop and remove your container system.

### Module Extra - Docker on IBM Bluemix

Since you already know everything about containers, it's time to bring it to the cloud.

1. Go to [Bluemix](www.bluemix.net) and create a new account in case you don't have one.

2. Click [here](https://console.ng.bluemix.net/docs/containers/container_cli_cfic_install.html) and follow the steps to set up the tools to access and interact with containers within Bluemix.

3. With all set, check you can view your images in Bluemix using `bx ic images`.

4. Download the *brunocf/counter* image from Docker Hub in Bluemix. Use the `bx ix cpi` command. Check out this [link](https://console.ng.bluemix.net/docs/containers/container_images_adding_ov.html#container_images_adding_ov) for command details.

5. Check that the new image is there and then run it. Name the new container 'counter'.

6. Check the container logs to make sure it's working.

7. Stop and the remove the container. Since you are working in a remote environment, it might take a while before the container actually stops.

8. Now go to your *docker-micro* directory on your local machine and build the Dockerfile in Bluemix.

9. When done, create a new volume and call it 'pyvolume'. Check it was created by listing them (`bx ic volumes`).

10. Start a new container using the pymicro image you built. This time make sure to use the new volume you created and map it to '/home/pyuser/myvolume'.

11. Add any file to your volume using `bx ic cp <your file> <container name>:/home/pyuser/myvolume`.

12. Access the container using `bx ic exec` to make sure your copied file is there.

13. Since we are in the cloud, we can't test our API using 'localhost', you need to request a new IP address.

14. Bind your new IP to your container and make sure that happened ok by issuing `bx ic ps -a`

15. Test your API, go to \<your ip\>:\<your exposed port\>/myservice/list to make sure it's working.

**That's great now let's move to the last part of our training**

16. Set up your environment so you can run native docker commands in Bluemix. Run `bluemix login`, provide your credential and select your workspace.

17. Run `bx ic init`, and set the environment variables in your machine. After set them when running `docker images` you should be able to view your images in Bluemix and not the local ones. If that's true, you made it!

18. Now run your docker-compose command to start the python mongo environment on Bluemix using the `docker-compose` command.
