DROP DATABASE IF EXISTS railway;

CREATE DATABASE railway;

use railway;

-- Users Table --
CREATE TABLE  `users` (
 `USER_ID` int NOT NULL AUTO_INCREMENT UNIQUE,
 `USERNAME` varchar(128) NOT NULL UNIQUE,
 `FIRSTNAME` varchar(128) not null,
 `LASTNAME` varchar(128) not null,
 `EMAIL` varchar(128) not null unique,
 `PASSWORD` varchar(256) not null,
 `VERIFICATIONCODE` varchar(256),
 `VERIFIED` boolean not null default 0,
 `CREATED` datetime default current_timestamp,
 PRIMARY KEY (`USER_ID`),
);

-- Bookshelf Table --
CREATE TABLE  `bookshelf` (
 `BOOK_ID` int NOT NULL AUTO_INCREMENT UNIQUE,
 `USER_ID` int NOT NULL,
 `TITLE` varchar(128),
 `SUBTITLE` varchar(128),
 `AUTHORS` varchar(128),
 `CATEGORIES` varchar(128),
 `DESCRIPTION` varchar(128),
 `IMAGEURL` varchar(128),
 `CREATED` datetime default current_timestamp,
 FOREIGN KEY (USER_ID) REFERENCES users(USER_ID)
);