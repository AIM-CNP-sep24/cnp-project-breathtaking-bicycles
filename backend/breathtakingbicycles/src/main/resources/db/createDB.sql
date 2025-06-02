
CREATE DATABASE breathtakingbicycles
use breathtakingbicycles

CREATE TABLE taal (
    id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    naam varchar(100) NOT NULL,
    code varchar(10) NOT NULL,
    imgsrc varchar(255) NOT NULL,
);

CREATE TABLE zin (
    id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
);

CREATE TABLE vertaling (
    id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    taal_id bigint NOT NULL,
    zin_id bigint NOT NULL,
    tekst varchar(max) NOT NULL,

	CONSTRAINT FK_vertaling_taal
        FOREIGN KEY (taal_id)
        REFERENCES taal(id)
        ON DELETE CASCADE,

	CONSTRAINT FK_vertaling_zin
        FOREIGN KEY (zin_id)
        REFERENCES zin(id)
        ON DELETE CASCADE
);

CREATE TABLE benodigdheid (
    id bigint NOT NULL PRIMARY KEY,
    parent_id bigint NULL,
    laag int NULL,
    imgsrc varchar(255) NOT NULL,
    rangnr int NULL,

    CONSTRAINT CHK_rangnr_zesoflager
      CHECK (rangnr <= 6),

    CONSTRAINT CHK_laag_tussen0en2
      CHECK (laag >= 0 AND laag <= 2)
);

CREATE TABLE benodigdheid_vertaling (
    id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    taal_id bigint NOT NULL,
    benodigdheid_id bigint NOT NULL,
    tekst varchar(max) NOT NULL,

	CONSTRAINT FK_benodigdheid_vertaling_taal
		FOREIGN KEY (taal_id)
		REFERENCES taal(id)
		ON DELETE CASCADE,

	CONSTRAINT FK_benodigdheid_vertaling_benodigdheid
		FOREIGN KEY (benodigdheid_id)
		REFERENCES benodigdheid(id)
		ON DELETE CASCADE
);

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