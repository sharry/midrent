    -- Users
    INSERT INTO `midrent`.`utilisateur` (
            `email`,
            `motdepasse`,
            `civilite`,
            `prenom`,
            `nom`,
            `datenaissance`,
            `telephone`,
            `admin`
        )
    VALUES (
            'sharry@midrent.ma',
            '123456',
            'm',
            'Youssef',
            'BEN SADIK',
            '2000-01-16',
            '0700459037',
            '1'
        );
    INSERT INTO `midrent`.`utilisateur` (
            `email`,
            `motdepasse`,
            `civilite`,
            `prenom`,
            `nom`,
            `datenaissance`,
            `telephone`
        )
    VALUES (
            'user@midrent.ma',
            '123456',
            'mlle',
            'Kenza',
            'SLIMANI',
            '2000-01-01',
            '0601020304'
        );
    -- Locaux de user@midrent.ma
    INSERT INTO `midrent`.`local` (
            `adresse`,
            `cout`,
            `effectif`,
            `id_q`,
            `id_tl`,
            `id_u`,
            `id_r`
        )
    VALUES (
            '12 Rue Smara',
            '550',
            '2',
            '9',
            '1',
            '1000001',
            '10'
        );
    INSERT INTO `midrent`.`local` (
            `adresse`,
            `cout`,
            `effectif`,
            `id_q`,
            `id_tl`,
            `id_u`,
            `id_r`
        )
    VALUES (
            '15 Rue Amal',
            '800',
            '2',
            '9',
            '1',
            '1000001',
            '16'
        );
    -- Pub 1
    INSERT INTO `midrent`.`publication` (
            `titre`,
            `desc_p`,
            `id_u`,
            `id_l`,
            `id_c`,
            `invisible`
        )
    VALUES (
            'Bit kbir dyal 2',
            'Lorem Ipsum....',
            '1000001',
            '1000001',
            '1',
            '0'
        );