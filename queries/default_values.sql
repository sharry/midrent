USE midrent;
-- Insertion des districtss de Mohammedia
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('El Hassania', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Derb Marrakech', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Derb Rabat', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Lhabitat', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Derb Jamila', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Derb Ourida', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Derb Fath', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Derb Douchmane', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Riyad Salam', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Les Crêtes', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Laâyoune', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Riyad', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Chabab', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Sâada', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Hay El Falah', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Anfa', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Hay El Houria', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Rachidia', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Hay Reda', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Hay Nasr', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Hay El Fajr', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('La colline', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Hay Al Wahda', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Hay El Amal', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES(
        'Andalous',
        'Mohammedia',
        NOW(),
        NOW()
    );
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('El Kasbah', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Diour El kram', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Diour El Kraii', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Diour Doukkala', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('El Marsa', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Al Wafa', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES(
        'Lotissements Parc Plaza',
        'Mohammedia',
        NOW(),
        NOW()
    );
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES(
        'Lotissement Yasmina',
        'Mohammedia',
        NOW(),
        NOW()
    );
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Lotissement Soleil', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Lotissement Nice', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES(
        'Lotissement Al Assil',
        'Mohammedia',
        NOW(),
        NOW()
    );
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Les Florianes', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Marina Beach', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Les Orchidées', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Ben Ykhlef', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('El Mansouria', 'Mohammedia', NOW(), NOW());
INSERT INTO districts(name, city, createdAt, updatedAt)
VALUES('Nahda', 'Mohammedia', NOW(), NOW());
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