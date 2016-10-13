### Schema

CREATE DATABASE cars_db;
USE cars_db;

CREATE TABLE cars
(
	id int NOT NULL AUTO_INCREMENT,
	car_model varchar(255) NOT NULL,
	rented BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
