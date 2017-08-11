CREATE TABLE infoclient (
idclient INTEGER primary key,
nom VARCHAR(200),
prenom VARCHAR(200),
ville VARCHAR(200),
carteadresse INTEGER,
adresse INTEGER,
email VARCHAR(200)
);

CREATE TABLE commandes(
idcommande INTEGER primary key,
idclient INTEGER
);

CREATE TABLE contenuCommandes(
idcommande INTEGER,
idclient INTEGER,
idarticle VARCHAR(200),
idcategorie INTEGER,
dateEtHeure DATE
);

CREATE TABLE categorieArticle(
idcategorie INTEGER,
categorie VARCHAR
);

CREATE TABLE article(
	idarticle INTEGER primary key,
	referenceArticle VARCHAR(200),
	description VARCHAR(300),
	prix INTEGER,
	stock INTEGER
);

CREATE TABLE promo(
idpromo INTEGER,
description VARCHAR(300)

);

CREATE TABLE promoClient(
idpromo INTEGER,
idclient INTEGER
);

CREATE TABLE promosapplications(
idcategorie INTEGER,
idpromo INTEGER
);
