FROM ubuntu

ENV PYUSER_HOME /home/pyuser

RUN cd /home && mkdir pyuser && cd pyuser

RUN apt-get update && apt-get install -y \
 vim \
 python2.7 \
 python-dev \
 libmysqlclient-dev \
 python-pip \
 iputils-ping \
 
 && pip install --upgrade pip \
 && pip install flask \
 && pip install flask-cors \
 && pip install flask-api \
 && pip install MySQL-python
 

COPY app-mysqldb.py /home/pyuser/app-mysqldb.py

RUN chmod 775 /home/pyuser/app-mysqldb.py

EXPOSE 8082

WORKDIR ${PYUSER_HOME}

ENTRYPOINT ["python","/home/pyuser/app-mysqldb.py"]
