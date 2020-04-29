const sb = require("./sidebar");

const sidebar = [
    {
        title: "Introduction",
        path: "/introduction/",
        children: [
            "/introduction/01-snds",
            "/introduction/02-bases-snds",
            "/introduction/03-acces-snds",
            "/introduction/04-recherche-snds"
        ]
    },
    sb.getSidebarGroup("fiches"),
    sb.getSidebarGroup("glossaire"),
    sb.getSidebarGroup("ressources"),
    sb.getSidebarGroup("tables"),
    {
        title: "Contribuer",
        path: "/contribuer/",
        children: [
            {
                title: "Guide de contribution",
                path: "/contribuer/Guide_contribution",
                children: [
                    "/contribuer/Guide_contribution/partager_des_sources",
                    "/contribuer/Guide_contribution/contactez_nous"
                ]
            },
            {
                title: "Guide d\'utilisation des outils",
                path: "/contribuer/Guide_utilisation_des_outils",
                children: [ 
                    "/contribuer/Guide_utilisation_des_outils/Utiliser_le_site_de_documentation",
                    "/contribuer/Guide_utilisation_des_outils/Introduction_Gitlab",
                    "/contribuer/Guide_utilisation_des_outils/tutoriel_markdown",
                    "/contribuer/Guide_utilisation_des_outils/Ticket",
                    "/contribuer/Guide_utilisation_des_outils/Modifier_une_fiche",
                    "/contribuer/Guide_utilisation_des_outils/Créer_une_fiche",
                    "/contribuer/Guide_utilisation_des_outils/contribution_tables",
                    "/contribuer/Guide_utilisation_des_outils/Forum",
                    "/contribuer/Guide_utilisation_des_outils/developpement_local",
                    "/contribuer/Guide_utilisation_des_outils/Cheat_Sheet.md",
                    "/contribuer/Guide_utilisation_des_outils/exercices_formation"
                ]
            },
            "/contribuer/A_propos"
        ]
    }
];

module.exports = {
    title: "Documentation du SNDS",
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS",
    themeConfig: {
        repo: "https://gitlab.com/healthdatahub/documentation-snds",
        docsDir: '.',
        editLinks: true,
        nav: [
            {text: "Forum entraide", link: "https://entraide.health-data-hub.fr/"},
            {text: "Dico interactif", link: "https://drees.shinyapps.io/dico-snds/"},
            {text: "Groupe Meetup", link: "https://www.meetup.com/fr-FR/Health-Data-Hub/"},
        ],
        sidebar: sidebar,
        sidebarDepth: 1,
        lastUpdated: "Dernière modification",
        algolia: {
            apiKey: "b1d88a4e2413821b4ebe7441ecc95a97",
            indexName: "health-data-hub-snds"
        },
        smoothScroll: true
    },
    markdown: {
        // options for markdown-it-anchor
        // anchor: { permalink: false },
        // options for markdown-it-toc
        //toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.use(require("markdown-it-footnote"))
        }
    },
    plugins: [
        "mermaidjs"
    ]
};
