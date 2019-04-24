const tables_sidebar = require('./tables_sidebar');

const sidebar = {
    '/tables/': tables_sidebar,
    '/': [
        '/documentation/',
        '/documentation/donnees',
        '/documentation/ressources',
        '/documentation/portail_sniiram',
        '/documentation/bibliographie',
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
    ],
};

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
            {text: 'Tables', link: '/tables/'},
        ],
        sidebar: sidebar,
        sidebarDepth: 2,
        lastUpdated: 'Dernière mise à jour'
    }
}
