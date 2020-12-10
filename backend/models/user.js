const user = `CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(30) NOT NULL,
    lastName INT NOT NULL,
    email VARCHAR(40) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL
);`;
