USE midrent;
-- Insertion des Villes
INSERT INTO `midrent`.`ville` (`ville`)
VALUES ('mohammedia');
-- Insertion des Quartiers de Mohammedia
INSERT INTO quartier(nom_q, id_v)
VALUES('El Hassania', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Derb Marrakech', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Derb Rabat', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Lhabitat', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Derb Jamila', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Derb Ourida', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Derb Fath', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Derb Douchmane', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Riyad Salam', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Les Crêtes', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Laâyoune', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Riyad', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Chabab', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Sâada', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Hay El Falah', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Anfa', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Hay El Houria', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Rachidia', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Hay Reda', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Hay Nasr', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Hay El Fajr', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('La colline', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Hay Al Wahda', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Hay El Amal', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Andalous Mohammedia', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('El Kasbah', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Diour El kram', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Diour El Kraii', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Diour Doukkala', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('El Marsa', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Al Wafa', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Lotissements Parc Plaza', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Lotissement Yasmina', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Lotissement Soleil', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Lotissement Nice', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Lotissement Al Assil', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Les Florianes', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Marina Beach', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Les Orchidées', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Ben Ykhlef', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('El Mansouria', 1);
INSERT INTO quartier(nom_q, id_v)
VALUES('Nahda', 1);
-- Insertion des Cibles
INSERT INTO `midrent`.`cible` (`cible`)
VALUES ('hommes');
INSERT INTO `midrent`.`cible` (`cible`)
VALUES ('femmes');
-- Insertion des Services
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (0, 0, 0, 0);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (0, 0, 0, 1);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (0, 0, 1, 0);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (0, 0, 1, 1);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (0, 1, 0, 0);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (0, 1, 0, 1);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (0, 1, 1, 0);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (0, 1, 1, 1);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (1, 0, 0, 0);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (1, 0, 0, 1);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (1, 0, 1, 0);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (1, 0, 1, 1);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (1, 1, 0, 0);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (1, 1, 0, 1);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (1, 1, 1, 0);
INSERT INTO `midrent`.`services` (`ameublement`, `factures`, `wifi`, `gas`)
VALUES (1, 1, 1, 1);
-- Insertion des Types des locaux
INSERT INTO `midrent`.`typelocal` (`typelocal`)
VALUES ('appartement');
INSERT INTO `midrent`.`typelocal` (`typelocal`)
VALUES ('studio');
INSERT INTO `midrent`.`typelocal` (`typelocal`)
VALUES ('residence universitaire privé');
INSERT INTO `midrent`.`typelocal` (`typelocal`)
VALUES ('villa');
-- Insertion des Types des signaux
INSERT INTO `midrent`.`typesignal` (`type`)
VALUES ('autre chose');
INSERT INTO `midrent`.`typesignal` (`type`)
VALUES ('spam');
INSERT INTO `midrent`.`typesignal` (`type`)
VALUES ('non autorisé');
INSERT INTO `midrent`.`typesignal` (`type`)
VALUES ('trompeur');
INSERT INTO `midrent`.`typesignal` (`type`)
VALUES ('fausse information');
INSERT INTO `midrent`.`typesignal` (`type`)
VALUES ('concernant les images');
INSERT INTO `midrent`.`typesignal` (`type`)
VALUES ('concernant le texte');