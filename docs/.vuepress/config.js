const tables_sidebar = require('./tables_sidebar');

const sidebar = {
    '/tables/': tables_sidebar,
    '/': [
        '/documentation/',
        '/documentation/donnees',
        '/documentation/portail_sniiram',
        '/documentation/ressources',
        '/documentation/bibliographie',
    ],
};

module.exports = {
    title: 'Documentation du SNDS',
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS",
    themeConfig: {
        docsDir: 'docs',
        repo: 'indsante/Documentation-SNDS',
        nav: [
            {text: 'Documentation', link: '/documentation/'},
            {text: 'Tables', link: '/tables/'},
            {text: 'Editer', link: '/admin/#/'},
        ],
        sidebar: sidebar,
        sidebarDepth: 0,
        lastUpdated: 'Last Updated'
    }
}