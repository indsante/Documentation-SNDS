const tables_sidebar = require('./tables_sidebar');

const sidebar = {
    '/tables/': tables_sidebar,
    '/': [
        '/documentation/',
        '/documentation/contribuer',
        '/documentation/tutoriel_markdown',
        '/documentation/donnees',
        '/documentation/ressources',
        '/documentation/portail_sniiram',
        '/documentation/bibliographie',
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
