DROP DATABASE euro;
CREATE DATABASE euro;
use euro;

DROP TABLE teams;

CREATE TABLE teams (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(50),
    country VARCHAR(50),
    status BOOLEAN,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO teams (team_name, country, status) VALUES
('Ukraine','Ukraine', true),
('Germany','Germany', false),
('Spain','Spain', true),
('Netherlands','Netherlands', false),
('Russian','Russian', true);

DELETE FROM teams;
