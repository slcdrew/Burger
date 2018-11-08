-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "todolist" database --
CREATE DATABASE burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
-- SELECT * FROM burgers;