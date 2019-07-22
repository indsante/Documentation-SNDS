const tables_sidebar = require('./tables_sidebar');

var fs = require('fs');
function getFilePaths(folderName){
    return fs
        .readdirSync('./' + folderName)
        .sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); })
        .filter(function (value) {
            return value !==  'README.md';
        })
        .map(function (value) {
            return '/' + folderName + '/' + value.slice(0, -3);
        });
}


const sidebar = [
    {
        title: 'Introduction',
        path: '/introduction/',
        children: getFilePaths('introduction')
    },
    {
        title: 'Fiches thématiques',
        path: '/fiches/',
        children: getFilePaths('fiches')
    },
    {
        title: 'Glossaire',
        path: '/glossaire/',
        children: getFilePaths('glossaire')
    },
    {
        title: 'Ressources',
        path: '/ressources/',
        children: getFilePaths('ressources')
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
