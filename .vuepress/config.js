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
                title: "À lire",
                path: "/contribuer/A_lire",
                children: [
                    "/contribuer/A_lire/Processus_contribution",
                    "/contribuer/A_lire/contactez_nous"
                ]
            },
            {
                title: "Guide de contribution",
                path: "/contribuer/Guide_contribution",
                children: [ 
                    "/contribuer/Guide_contribution/Utiliser_le_site_de_documentation",
                    "/contribuer/Guide_contribution/Introduction_Gitlab",
                    "/contribuer/Guide_contribution/tutoriel_markdown",
                    "/contribuer/Guide_contribution/Ticket",
                    "/contribuer/Guide_contribution/Modifier_une_fiche",
                    "/contribuer/Guide_contribution/Creer_une_fiche",
                    "/contribuer/Guide_contribution/inclure_image",
                    "/contribuer/Guide_contribution/processus_relecture",
                    "/contribuer/Guide_contribution/erreur_pipelines",
                    "/contribuer/Guide_contribution/partage_document",
                    "/contribuer/Guide_contribution/demande_fusion",
                    "/contribuer/Guide_contribution/contribution_tables",
                    "/contribuer/Guide_contribution/developpement_local",
                    "/contribuer/Guide_contribution/Cheat_Sheet.md",
                    "/contribuer/Guide_contribution/exercices_formation",
                    "/contribuer/Guide_contribution/Forum"
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
