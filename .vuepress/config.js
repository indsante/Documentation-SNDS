const tables_sidebar = require('./tables_sidebar');

const sidebar = [
    {
        title: 'Introduction',
        path: '/introduction/',
        children: [
            '/introduction/snds',
        ]
    },
    {
        title: 'Fiches thématiques',
        path: '/fiches/',
        children: [
            '/fiches/historique_donnees',
            '/fiches/cmu_c',
            '/fiches/audioprotheses',
            '/fiches/beneficiaires_ald',
            '/fiches/optique',
            ['/fiches/cartographie_pathologies', 'Cartographie des pathologies'],
            '/fiches/glossaire',
            '/fiches/graph_reperage_sniiram',
            '/fiches/montant_soins_de_ville',
            'fiches/aide_medicale_etat',
            '/fiches/fiche_beneficiaire',
            '/fiches/localisation_beneficiaires',
        ]
    },
    {
        title: 'Ressources',
        path: '/ressources/',
        children: [
            '/ressources/',
            '/ressources/meetup',
            ['/ressources/kwikly', 'KWIKLY'],
            '/ressources/portail_sniiram',
            '/ressources/programmes',
            '/ressources/bibliographie',
        ]
    },
    {
        title: 'Tables',
        children: tables_sidebar
    },
    {
        title: 'Contribuer',
        path: '/contribuer/',
        children: [
            '/contribuer/',
            '/contribuer/introduction_gitlab',
            '/contribuer/tutoriel_markdown',
            '/contribuer/developpement_local',
            '/contribuer/nouveau_fichier',
        ]
    }
];

module.exports = {
    title: 'Documentation du SNDS',
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS",
    themeConfig: {
        repo: 'https://gitlab.com/healthdatahub/documentation-snds',
        docsDir: '.',
        editLinks: true,
        editLinkText: 'Éditer sur GitLab',
        nav: [
            {text: 'Forum entraide', link: 'https://entraide.health-data-hub.fr/'},
            {text: 'Dico interactif', link: 'https://drees.shinyapps.io/dico-snds/'},
        ],
        sidebar: sidebar,
        sidebarDepth: 1,
        lastUpdated: 'Dernière mise à jour',
        algolia: {
            apiKey: 'b1d88a4e2413821b4ebe7441ecc95a97',
            indexName: 'health-data-hub-snds'
        }
    }
}
