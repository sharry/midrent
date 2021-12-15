CREATE DATABASE MIDRENT;
USE MIDRENT;
CREATE TABLE IF NOT EXISTS `utilisateur` (
    `id_u` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `motdepasse` VARCHAR(50) NOT NULL,
    `civilite` VARCHAR(5),
    `prenom` VARCHAR(80),
    `nom` VARCHAR(80),
    `datenaissance` DATE,
    `telephone` VARCHAR(10),
    `photo` LONGBLOB,
    `admin` TINYINT DEFAULT 0,
    `dateinscription` DATETIME NULL DEFAULT (NOW()),
    PRIMARY KEY (`id_u`)
);
ALTER TABLE `utilisateur` AUTO_INCREMENT = 1000000;
CREATE TABLE IF NOT EXISTS `typesignal` (
    `id_ts` INT NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id_ts`)
);
CREATE TABLE IF NOT EXISTS `cible` (
    `id_c` INT NOT NULL AUTO_INCREMENT,
    `cible` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id_c`)
);
CREATE TABLE IF NOT EXISTS `typelocal` (
    `id_tl` INT NOT NULL AUTO_INCREMENT,
    `typelocal` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`id_tl`)
);
CREATE TABLE IF NOT EXISTS `services` (
    `id_r` INT NOT NULL AUTO_INCREMENT,
    `ameublement` TINYINT NOT NULL,
    `factures` TINYINT NOT NULL,
    `wifi` TINYINT NOT NULL,
    `gas` TINYINT NOT NULL,
    PRIMARY KEY (`id_r`)
);
CREATE TABLE IF NOT EXISTS `ville` (
    `id_v` INT NOT NULL AUTO_INCREMENT,
    `ville` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id_v`)
);
CREATE TABLE IF NOT EXISTS `quartier` (
    `id_q` INT NOT NULL AUTO_INCREMENT,
    `nom_q` VARCHAR(100) NOT NULL,
    `id_v` INT NOT NULL,
    PRIMARY KEY (`id_q`),
    FOREIGN KEY (`id_v`) REFERENCES `midrent`.`ville` (`id_v`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS `local` (
    `id_l` INT NOT NULL AUTO_INCREMENT,
    `adresse` VARCHAR(150) NOT NULL,
    `cout` DECIMAL(10, 2) NULL,
    `effectif` INT NOT NULL,
    `id_q` INT NOT NULL,
    `id_tl` INT NOT NULL,
    `id_u` INT NOT NULL,
    `id_r` INT NOT NULL,
    PRIMARY KEY (`id_l`),
    FOREIGN KEY (`id_q`) REFERENCES `midrent`.`quartier` (`id_q`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`id_tl`) REFERENCES `midrent`.`typelocal` (`id_tl`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`id_u`) REFERENCES `midrent`.`utilisateur` (`id_u`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`id_r`) REFERENCES `midrent`.`services` (`id_r`) ON DELETE CASCADE ON UPDATE CASCADE
);
ALTER TABLE `local` AUTO_INCREMENT = 1000000;
CREATE TABLE IF NOT EXISTS `image` (
    `id_i` INT NOT NULL AUTO_INCREMENT,
    `image` LONGBLOB NOT NULL,
    `id_l` INT NOT NULL,
    PRIMARY KEY (`id_i`),
    FOREIGN KEY (`id_l`) REFERENCES `midrent`.`local` (`id_l`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS `publication` (
    `id_p` INT NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(50) NOT NULL,
    `desc_p` VARCHAR(150),
    `datecreation` DATETIME NOT NULL DEFAULT (NOW()),
    `id_u` INT NOT NULL,
    `id_l` INT NOT NULL,
    `id_c` INT NOT NULL,
    `invisible` TINYINT NOT NULL DEFAULT 0,
    PRIMARY KEY (`id_p`),
    FOREIGN KEY (`id_u`) REFERENCES `midrent`.`utilisateur` (`id_u`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`id_l`) REFERENCES `midrent`.`local` (`id_l`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`id_c`) REFERENCES `midrent`.`cible` (`id_c`) ON DELETE CASCADE ON UPDATE CASCADE
);
ALTER TABLE `publication` AUTO_INCREMENT = 1000000;
CREATE TABLE IF NOT EXISTS `signal` (
    `id_s` INT NOT NULL AUTO_INCREMENT,
    `desc_s` VARCHAR(255) NULL,
    `id_p` INT NOT NULL,
    `id_u` INT NOT NULL,
    `id_ts` INT NOT NULL,
    PRIMARY KEY (`id_s`),
    FOREIGN KEY (`id_p`) REFERENCES `midrent`.`publication` (`id_p`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`id_u`) REFERENCES `midrent`.`utilisateur` (`id_u`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`id_ts`) REFERENCES `midrent`.`typesignal` (`id_ts`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS `sauvegarde` (
    `id_g` INT NOT NULL,
    `id_u` INT NOT NULL,
    `id_p` INT NOT NULL,
    PRIMARY KEY (`id_g`),
    FOREIGN KEY (`id_u`) REFERENCES `midrent`.`utilisateur` (`id_u`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`id_p`) REFERENCES `midrent`.`publication` (`id_p`) ON DELETE CASCADE ON UPDATE CASCADE
);