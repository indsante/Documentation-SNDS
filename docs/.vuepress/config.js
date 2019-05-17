const tables_sidebar = require('./tables_sidebar');

const sidebar = [
    '/documentation/',
    '/documentation/donnees',
    {
        title: 'Ressources',
        path: '/documentation/ressources/',
        children: [
            ['/documentation/ressources/kwikly', 'KWIKLY'],
            '/documentation/ressources/portail_sniiram',
        ]
    },
    '/documentation/bibliographie',
    {
        title: 'Tables',
        children: tables_sidebar
    },
    {
        title: 'Contribuer',
        children: [
            '/contribuer/',
            '/contribuer/introduction_gitlab',
            '/contribuer/tutoriel_markdown',
            '/contribuer/developpement_local',
            '/contribuer/nouveau_fichier',
        ]
    },
];

module.exports = {
    title: 'Documentation du SNDS',
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS",
    themeConfig: {
        repo: 'http://gitlab.com/healthdatahub/documentation-snds',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Éditer sur GitLab',
        nav: [
            {text: 'Documentation', link: '/documentation/'},
        ],
        sidebar: sidebar,
        sidebarDepth: 2,
        lastUpdated: 'Dernière mise à jour'
    }
}
