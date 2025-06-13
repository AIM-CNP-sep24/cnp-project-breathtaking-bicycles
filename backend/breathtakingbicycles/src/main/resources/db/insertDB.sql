USE breathtakingbicycles

select * from zin

SELECT b.id, MAX(CASE WHEN t.code = 'NL' THEN bv.tekst END) AS naamTaal1, MAX(CASE WHEN t.code = 'EN' THEN bv.tekst END) AS naamTaal2, b.parent_id, b.laag, b.rangnr, b.imgsrc FROM benodigdheid b LEFT OUTER JOIN benodigdheid_vertaling bv ON b.id = bv.benodigdheid_id LEFT OUTER JOIN taal t on bv.taal_id = t.id WHERE t.code IN ('NL', 'EN') AND b.id = 0 GROUP BY b.id, b.parent_id, b.laag, b.rangnr, b.imgsrc ORDER BY rangnr ASC


INSERT INTO taal (naam, code, imgsrc) VALUES ('Nederlands', 'NL', '1')
INSERT INTO taal (naam, code, imgsrc) VALUES ('Engels', 'EN', '1')

INSERT INTO benodigdheid (id, imgsrc) VALUES (-1, '')
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (1, 0, '../src/img/Food-Drinks-Icon.png', 1, 0)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (2, 0, '../src/img/Toilet-Icon.png', 2, 0)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (3, 0, '../src/img/Medicijn-Icon.png', 3, 0)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (4, 0, '../src/img/Slapen-Icon.png', 4, 0)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (5, 0, '../src/img/Badkamer-Icon.png', 5, 0)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (6, 0, '../src/img/Buiten-Icon.png', 6, 0)

INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (7, 1, '../src/img/Pizza-Icon.png', 1, 1)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (8, 1, '../src/img/Water-Icon.png', 2, 1)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (9, 1, '../src/img/Brood-Icon.png', 3, 1)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (10, 1, '../src/img/Thee-Icon.png', 4, 1)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (11, 1, '../src/img/Koffie-Icon.png', 5, 1)
INSERT INTO benodigdheid (id, parent_id, imgsrc, rangnr, laag) VALUES (12, 1, '../src/img/Appel-Icon.png', 6, 1)

INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 1, 'Eten & Drinken')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 1, 'Food & Drinks')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 2, 'Toilet')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 2, 'Toilet')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 3, 'Medicijnen')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 3, 'Medicine')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 4, 'Slapen')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 4, 'Sleeping')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 5, 'Badkamer')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 5, 'Bathroom')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 6, 'Naar buiten gaan')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 6, 'Going outside')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 7, 'Pizza')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 7, 'Pizza')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 8, 'Water')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 8, 'Water')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 9, 'Brood')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 9, 'Bread')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 10, 'Thee')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 10, 'Tea')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 11, 'Koffie')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 11, 'Coffee')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (1, 12, 'Fruit')
INSERT INTO benodigdheid_vertaling (taal_id, benodigdheid_id, tekst) VALUES (2, 12, 'Fruit')

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








