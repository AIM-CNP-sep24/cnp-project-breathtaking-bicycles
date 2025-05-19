--DROP TABLE dbo.vertaling;
--DROP TABLE dbo.benodigdheid_vertaling;
--DROP TABLE dbo.benodigdheid;
--DROP TABLE dbo.taal;
--DROP TABLE dbo.zin;

CREATE TABLE taal (
    id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    naam varchar(100) NOT NULL,
    code varchar(10) NOT NULL,
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
    id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    parent_id bigint NULL,
    laag int NOT NULL CHECK (laag BETWEEN 0 AND 2),
    imgsrc varchar(255) NOT NULL,

    CONSTRAINT FK_benodigdheid_parent
      FOREIGN KEY (parent_id)
          REFERENCES benodigdheid(id)
          ON DELETE NO ACTION
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