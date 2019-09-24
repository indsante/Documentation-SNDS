
const fs = require('fs');

function listMarkdownFilesInDirectory(directoryName) {
    return fs
        .readdirSync('./' + directoryName)
        .sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        })
        .filter(function (filename) {
            return filename !== 'README.md';
        })
        .filter(function (filename) {
            return filename.slice(-3) === '.md';
        })
        .map(function (filename) {
            return '/' + directoryName + '/' + filename.slice(0, -3);
        });
}

function listSubDirectories(directoryName) {
    return fs
        .readdirSync('./' + directoryName)
        .filter(function (filename) {
            return fs.lstatSync('./' + directoryName + '/' + filename).isDirectory();
        })
}


function getSidebarGroup(directoryPath) {
    const lastDirectory = directoryPath.split("/").pop();
    const sidebarGroup = {};

    sidebarGroup["title"] = lastDirectory.charAt(0).toUpperCase() + lastDirectory.slice(1);

    if (fs.existsSync('./' + directoryPath + '/README.md')) {
        sidebarGroup["path"] = '/' + directoryPath + '/';
    }
    const children = [];
    for (subDirectory of listSubDirectories(directoryPath)) {
        children.push(getSidebarGroup(directoryPath + '/' + subDirectory));
    }
    sidebarGroup["children"] = children.concat(listMarkdownFilesInDirectory(directoryPath));
    return sidebarGroup
}


const sidebar = [
    getSidebarGroup("introduction"),
    getSidebarGroup("fiches"),
    getSidebarGroup("glossaire"),
    getSidebarGroup("ressources"),
    getSidebarGroup("tables"),
    {
        title: 'Contribuer',
        path: '/contribuer/',
        children: [
            '/contribuer/',
            '/contribuer/introduction_gitlab',
            '/contribuer/tutoriel_markdown',
            '/contribuer/nouveau_fichier',
            '/contribuer/developpement_local',
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
            {text: 'Groupe Meetup', link: 'https://www.meetup.com/fr-FR/Health-Data-Hub/'},
        ],
        sidebar: sidebar,
        sidebarDepth: 1,
        lastUpdated: 'Dernière mise à jour',
        algolia: {
            apiKey: 'b1d88a4e2413821b4ebe7441ecc95a97',
            indexName: 'health-data-hub-snds'
        }
    }
};
