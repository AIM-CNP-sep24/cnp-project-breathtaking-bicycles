DROP TABLE dbo.kleurenpalet

CREATE TABLE kleurenpalet (
    id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    naam varchar(126) NOT NULL,
    color_one varchar(7) NOT NULL,
    color_one_shadow varchar(7) NOT NULL,
    color_two varchar(7) NOT NULL,
    color_two_shadow varchar(7) NOT NULL,
    color_three varchar(7) NOT NULL,
    color_three_shadow varchar(7) NOT NULL,
    color_four varchar(7) NOT NULL,
    color_four_shadow varchar(7) NOT NULL,
)

INSERT INTO kleurenpalet (
	naam,
    color_one,
    color_one_shadow,
    color_two,
    color_two_shadow,
    color_three,
    color_three_shadow,
    color_four,
    color_four_shadow)
    VALUES ('Standaard palet',
	'#F5EEDC',
    '#E0D9C8',
    '#27548A',
    '#1C406B',
    '#183B4E',
    '#132F3F',
    '#DDA853',
    '#BA8C43')

    USE breathtakingbicycles

INSERT INTO kleurenpalet (
	naam,
    color_one,
    color_one_shadow,
    color_two,
    color_two_shadow,
    color_three,
    color_three_shadow,
    color_four,
    color_four_shadow)
    VALUES ('Kleurenblinden palet',
	'#FFBE85',
    '#CF9868',
    '#4090C2',
    '#3378A3',
    '#265896',
    '#1C4374',
    '#A0A1A3',
    '#7E8084')