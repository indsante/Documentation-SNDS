const tables_sidebar = require('./tables_sidebar');

const sidebar = {
    '/tables/': tables_sidebar,
    '/': [
        '/documentation/',
        '/documentation/donnees',
        '/documentation/portail_sniiram',
        '/documentation/ressources',
        '/documentation/bibliographie',
        '/documentation/contribuer'
    ],
};

module.exports = {
    title: 'Documentation du SNDS',
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS",
    themeConfig: {
        repo: 'indsante/Documentation-SNDS',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Éditer sur GitHub',
        nav: [
            {text: 'Documentation', link: '/documentation/'},
            {text: 'Tables', link: '/tables/'},
        ],
        sidebar: sidebar,
        sidebarDepth: 2,
        lastUpdated: 'Dernière mise à jour'
    }
}
