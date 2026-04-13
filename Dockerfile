FROM php:8.5-fpm

RUN docker-php-ext-install mysqli
