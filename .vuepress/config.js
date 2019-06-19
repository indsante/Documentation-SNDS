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
        repo: 'http://gitlab.com/healthdatahub/documentation-snds',
        docsDir: '.',
        editLinks: true,
        editLinkText: 'Éditer sur GitLab',
        nav: [
            {text: 'Dico interactif', link: 'http://dico-snds.health-data-hub.fr/'},
        ],
        sidebar: sidebar,
        sidebarDepth: 2,
        lastUpdated: 'Dernière mise à jour'
    }
}
