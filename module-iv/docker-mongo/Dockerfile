FROM ubuntu

ENV PYUSER_HOME /home/pyuser

RUN cd /home && mkdir pyuser && cd pyuser

RUN apt-get update && apt-get install -y \
 vim \
 python2.7 \
 python-pip \
 iputils-ping \
 
 && pip install --upgrade pip \
 && pip install flask \
 && pip install flask-cors \
 && pip install flask-api \
 && pip install pymongo
 

COPY appdb.py /home/pyuser/appdb.py

RUN chmod 775 /home/pyuser/appdb.py

EXPOSE 8080

WORKDIR ${PYUSER_HOME}

ENTRYPOINT ["python","/home/pyuser/appdb.py"]
