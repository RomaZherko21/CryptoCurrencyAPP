# **FrontEnd**
*To start front-end (frontend dir): npm install > npm start*


# **BackEnd**
*Back-end part (MySQL database) is settle on localhost, so you can not get access to ***all users*** table and making new users*

*MySQL User table description*
user = `CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(30) NOT NULL,
    lastName INT NOT NULL,
    email VARCHAR(40) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL
);`