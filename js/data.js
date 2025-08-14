
// Données centralisées pour chaque lieu
const lieuxTempliers = {
    P: {
        nom: "Panthéon",
        gps: [48.8464971, 2.3448783],
        enigme: "Revenez là où le peuple honore ses héros,\nDans un temple de pierre élevé sur la colline.\nJadis, les Templiers y furent jugés ;\nAujourd’hui, leurs murmures y dorment encore sous la coupole.",
        narratif: "Ici se dressait jadis l’abbaye Saint-Geneviève, où la commission pontificale convoquée par le pape Clément examina le sort des Templiers.\nDans le silence des voûtes, des mots codés furent glissés dans les archives.",
        indice: "578 hivers s’étaient écoulés depuis l’arrestation des Templiers lorsque le monument changea de visage. La décennie d'ou il devint témoin n'attends que d'être capté.",
        code: "85"
    },
    SJ: {
        nom: "Église Saint-Julien-le-Pauvre",
        gps: [48.8522991, 2.3470093],
        enigme: "Face à l’île, à l’ombre du plus vieil arbre,\nLe pauvre saint veille sur le chemin,\nCherchez là où l’histoire pousse encore,\nDans un jardin que mille hivers n’ont pas fait ployer.",
        narratif: "L’église Saint-Julien-le-Pauvre est l’une des plus vieilles de Paris.\nSes fondations ont vu naître les Templiers et portent encore leurs secrets, transmis dans le silence des pierres et des bois.",
        indice: "Le vieux saint déploie ses ailes immobiles.Sauras-tu les compter pour te guider vers le trésor perdu ?",
        code: "4"
    },
    ND: {
        nom: "Cathédrale Notre-Dame",
        gps: [48.8533483, 2.3488919],
        enigme: "Deux tours veillent sur la Seine,\nLeur pierre raconte mille scènes,\nDes rois, des saints et des gargouilles,\nLà où la cloche sonne, le temps s’égrène.",
        narratif: "Certains disent que les maîtres d’œuvre de Notre-Dame furent proches des Templiers, partageant symboles et secrets dans la pierre.\nSous l’œil des gargouilles, un signe discret garde la mémoire d’un fragment des coordonnées.",
        indice: "La rosace du midi éclaire la Seine de ses panneaux secrets.Chaque panneau de verre compte, tous ensemble ils composent le chiffre que seuls les yeux curieux peuvent lire",
        code: "84"
    },
    MF: {
        nom: "Marché aux fleurs Reine Elizabeth II",
        gps: [48.8553909, 2.3477630],
        enigme: "À deux pas des cloches, un parfum discret,\nS’élève parmi mille pétales serrés,\nDans un marché qui porte le nom d’une reine,\nLes couleurs et les odeurs s’unissent sans peine.",
        narratif: "Ce marché n’existait pas du temps des Templiers… mais les descendants de l’ordre savaient y échanger messages et monnaies sous couvert de bouquets.",
        indice: "Parmi étals et bouquets, la disposition des principaux bâtiments saura vous glisser le chiffre égaré.",
        code: "3"
    },
    TH: {
        nom: "Tour de l’Horloge",
        gps: [48.8561432, 2.3463257],
        enigme: "Je marque le temps mais ne le donne pas,\nMa cloche sonne, mais je ne parle pas,\nSur l’île, mon cadran d’or et d’azur,\nGarde les heures et les murmures.",
        narratif: "Cet endroit servit de prison, peut-être pour certains Templiers.\nL’horloge, chef-d’œuvre médiéval, aurait été modifiée pour dissimuler un code temporel.",
        indice: "Suivez la main de la Justice : elle vous indiquera le chiffre que seuls les yeux attentifs peuvent discerner. ",
        code: "9"
    },
    VG: {
        nom: "Square du Vert-Galant",
        gps: [48.8572384, 2.3407662],
        enigme: "Traversez les âges jusqu’à la pointe où l’eau se divise,\nLà où un maître en blanc affronta le bûcher.\nSous les saules, le vent transporte encore les dernières paroles\nD’un serment que nul feu n’a pu effacer.",
        narratif: "C’est ici que Jacques de Molay, dernier grand maître des Templiers, fut brûlé en 1318.\nLes flammes consumèrent son corps, mais non sa malédiction.",
        indice: "Les visages millénaires qui vous font face, déjà présents lors de la nuit tragique, tous comptés, murmureront le chemin vers l’héritage oublié",
        code: "28"
    },
    SM: {
        nom: "Fontaine Saint-Michel",
        gps: [48.8532767, 2.3438041],
        enigme: "Suivez la rive jusqu’à l’archange,\nQui terrasse la bête d’un coup d’épée.\nDerrière ses ailes figées dans la pierre,\nL’eau coule comme une prière éternelle.",
        narratif: "Construite bien après l’ordre du Temple, elle fut néanmoins utilisée par certains héritiers pour dissimuler un fragment des coordonnées.",
        indice: "L’archange terrasse la bête, son regard sur l’eau. La hauteur de ce monument, entre ciel et pierre, cache un chiffre ancien.",
        code: "26"
    },
    LV: {
        nom: "Louve (Romulus et Rémus)",
        gps: [48.8500559, 2.3438011],
        enigme: "Rendez-vous après celle qui, dans le silence des origines, nourrit deux frères de force sauvage, forgeant les bases d’un empire appelé à régner sur le monde.",
        narratif: "Les Templiers voyageaient jusqu’à Rome.\nCette statue fut un symbole de fraternité et de transmission, tout comme leur ordre.",
        indice: "La louve veille sur deux frères qui fonderont la grande cité. À l'aube de son temps, elle saura vous guider.",
        code: "753"
    },
    FINAL: {
        nom: "Place de la Sorbonne",
        gps: [48.8485753, 2.3426928],
        enigme: "",
        narratif: "Vous avez rassemblé tous les fragments qui constituent les codes suivant :\n48.ABCDEFG , 2.HIJKLMN\nIls vous conduisent où se trouve le trésor oublié des Templiers.",
        indice: "Coordonnées complètes : 48.ABCDEFG , 2.HIJKLMN",
        code: ""
    }
};
