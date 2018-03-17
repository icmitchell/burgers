DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Double Bacon Cheesebuger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Royale with cheese', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Burger?', FALSE);
