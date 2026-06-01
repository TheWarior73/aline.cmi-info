FROM php:8.5-apache

RUN a2enmod rewrite

RUN echo "ServerName AlineApache" >> /etc/apache2/apache2.conf

COPY ./public/ /var/www/html/

EXPOSE 80