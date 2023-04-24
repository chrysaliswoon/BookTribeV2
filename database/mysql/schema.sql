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
 `PROFILEIMG` varchar(256) not null,
 `VERIFICATIONCODE` varchar(256),
 `VERIFIED` boolean not null default 0,
 `CREATED` datetime default current_timestamp,
 PRIMARY KEY (`USER_ID`)
);

-- Bookshelf Table --
CREATE TABLE  `bookshelf` (
 `BOOK_ID` varchar(128) NOT NULL,
 `EMAIL` varchar(128) not null,
 `TITLE` varchar(128),
 `SUBTITLE` varchar(128),
 `AUTHORS` varchar(128),
 `CATEGORIES` varchar(128),
 `IMAGEURL` varchar(800),
 `CREATED` datetime default current_timestamp,
 PRIMARY KEY (`BOOK_ID`),
 FOREIGN KEY (EMAIL) REFERENCES users(EMAIL)
 ON DELETE CASCADE
);

-- Book Review Table --
CREATE TABLE  `reviews` (
 `REVIEW_ID` int NOT NULL AUTO_INCREMENT UNIQUE,
 `EMAIL` varchar(128) not null,
 `BOOK_ID` varchar(128) NOT NULL,
 `COMMENTS` text,
 `CREATED` datetime default current_timestamp,
 FOREIGN KEY (BOOK_ID) REFERENCES bookshelf(BOOK_ID)
 ON DELETE CASCADE
);


-- All Book Review Table --
CREATE TABLE book_reviews AS SELECT bookshelf.BOOK_ID, reviews.EMAIL, bookshelf.TITLE, bookshelf.IMAGEURL, reviews.COMMENTS FROM bookshelf INNER JOIN REVIEWS ON bookshelf.BOOK_ID=reviews.BOOK_ID;
