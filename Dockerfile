FROM php:8.5-apache

# mod_rewrite for .htaccess
RUN a2enmod rewrite

RUN docker-php-ext-install mysqli

# allow .htaccess overrides
RUN sed -ri -e 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

EXPOSE 80
