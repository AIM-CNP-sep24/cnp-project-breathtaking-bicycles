USE breathtakingbicycles;
DROP TABLE users

CREATE TABLE users (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(255) NOT NULL,
    password NVARCHAR(255) NOT NULL,
    enabled BIT NOT NULL DEFAULT 1,
    roles NVARCHAR(MAX) NULL
);

--wachtwoord is een hash voor StrongPassword123!
INSERT INTO Users (username, password, enabled, roles)
VALUES ('development', '{bcrypt}$2a$10$9vV/gw7FRg1WumNn0U.4k.Q.6uHdZ8sMcqzQ1ZlvA9VThIVPLI7cG', 1, 'ROLE_USER');