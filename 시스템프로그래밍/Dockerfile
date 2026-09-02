FROM ubuntu:18.04

SHELL ["/bin/bash", "-c"]

RUN sed -i 's/archive.ubuntu.com/ftp.kaist.ac.kr/gi' /etc/apt/sources.list
RUN sed -i 's/security.ubuntu.com/ftp.kaist.ac.kr/gi' /etc/apt/sources.list
RUN apt-get update && apt-get install gcc vim man-db -y
RUN yes | unminimize -y

WORKDIR /home/ubuntu