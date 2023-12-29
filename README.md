# Motomechz Bike Service Application 
We at Motomechz, focus on automating and improving the process of vehicle service and address the pain points within the user's journey.
Create table for sign up
    CREATE TABLE users (
id int(11) NOT NULL, name varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(255) NOT NULL, created_at datetime NOT NULL, updated_at datetime NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

Create table for booking CREATE TABLE registration ( id int(1) NOT NULL, name varchar(255) NOT NULL, email varchar(255) NOT NULL, vehicle_no varchar(255) NOT NULL, vehicle_name varchar(255) NOT NULL, phone_no varchar(255) NOT NULL, service varchar(255) NOT NULL, status varchar(255) NOT NULL, created_at datetime NOT NULL, updated_at datetime NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
