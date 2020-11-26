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
    {
        title: "Se former au SNDS",
        path: "/formation_snds/",
        children: [
            "/formation_snds/starter_kit",
            {
                title: "Guides et formations de la CNAM",
                path: "/formation_snds/documents_cnam/",
                children: [
                    "/formation_snds/documents_cnam/Formation_demex",
                    "/formation_snds/documents_cnam/Formation_PMSI",
                    {
                        title: "Guide causes médicales de décès",
                        path: "/formation_snds/documents_cnam/guide_cepidc/",
                        children: [
                            "/formation_snds/documents_cnam/guide_cepidc/Avant_propos",
                            "/formation_snds/documents_cnam/guide_cepidc/0-IntroductionCausesDeces",
                            "/formation_snds/documents_cnam/guide_cepidc/1-Chap1CausesDeces",
                            "/formation_snds/documents_cnam/guide_cepidc/2-Chap2CausesDeces",
                            "/formation_snds/documents_cnam/guide_cepidc/3-Chap3CausesDeces",
                            "/formation_snds/documents_cnam/guide_cepidc/4-Chap4CausesDeces",
                            "/formation_snds/documents_cnam/guide_cepidc/5-Annexe1-CausesDeces",
                            "/formation_snds/documents_cnam/guide_cepidc/6-Annexe2-CausesDeces"
                        ]
                    },
                    {
                        title: "Guides pédagogiques",
                        path: "/formation_snds/documents_cnam/guides_pedagogiques_SNDS/",
                        children: [
                            "/formation_snds/documents_cnam/guides_pedagogiques_SNDS/guide_pedagogique_acces_permanents",
                            "/formation_snds/documents_cnam/guides_pedagogiques_SNDS/guide_pedagogique_acces_projets"
                        ]
                    },
                ]
            },
            "/formation_snds/Sante_publique_France",
            "formation_snds/donnees_synthetiques",
            "/formation_snds/notebook",
            "/formation_snds/programmes"
        ]
    },
    {
        title: "Pour aller plus loin",
        path: "/aller_plus_loin/",
        children: [
            "/aller_plus_loin/portail_sniiram",
            {
                title: "Documents Cnam",
                path: "/aller_plus_loin/documents_cnam/",
                children: [
                    {
                        title: "FAQ",
                        path: "/aller_plus_loin/documents_cnam/faq",
                        children: [
                            "/aller_plus_loin/documents_cnam/faq/faq_dcir",
                            "/aller_plus_loin/documents_cnam/faq/faq_egb"
                        ]
                    },
                    "aller_plus_loin/documents_cnam/kwikly",
                    "aller_plus_loin/documents_cnam/pseudonymisation"
                ]
            },
            "aller_plus_loin/Epi-Phare",
            "aller_plus_loin/cartographie_indicateurs",
            "aller_plus_loin/internet",
            "aller_plus_loin/bibliographie"
        ]
    },
    {
        title: "Évènements passés et à venir",
        path: "/evenements/",
        children: [
            "/evenements/meetup",
            "/evenements/Amphi_SNDS",
        ]
    },
    sb.getSidebarGroup("tables"),
    {
        title: "Contribuer",
        path: "/contribuer/",
        children: [
            {
                title: "À lire",
                path: "/contribuer/A_lire/",
                children: [
                    "/contribuer/A_lire/Processus_contribution",
                    "/contribuer/A_lire/contactez_nous"
                ]
            },
            {
                title: "Guide de contribution",
                path: "/contribuer/Guide_contribution/",
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
        ]
    },
    {
        title: "À propos",
        path: "/A_propos/",
        children: [
            "/A_propos/mentions_legales.md",
            "/A_propos/politique_de_confidentialite.md"
        ]
    }
];

module.exports = {

    head: [
            ['script', {type: "text/javascript", src: "https://cdn.jsdelivr.net/gh/AmauriC/tarteaucitron.js@1.8.3/tarteaucitron.js"}, {}],

            ['script', {type: "text/javascript"}, `
                tarteaucitron.init({
                "privacyUrl": "", /* Privacy policy url */

                "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
                "cookieName": "tarteaucitron", /* Cookie name */

                "orientation": "middle", /* Banner position (top - bottom) */

                "showAlertSmall": false, /* Show the small banner on bottom right */
                "cookieslist": false, /* Show the cookie list */

                "showIcon": true, /* Show cookie icon to manage cookies */
                "iconPosition": "BottomRight", /* BottomRight, BottomLeft, TopRight and TopLeft */

                "adblocker": false, /* Show a Warning if an adblocker is detected */

                "DenyAllCta" : true, /* Show the deny all button */
                "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
                "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */

                "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

                "removeCredit": false, /* Remove credit link */
                "moreInfoLink": true, /* Show more info link */

                "useExternalCss": false, /* If false, the tarteaucitron.css file will be loaded */
                "useExternalJs": false, /* If false, the tarteaucitron.js file will be loaded */

                //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */

                "readmoreLink": "", /* Change the default readmore link */

                "mandatory": true, /* Show a message about mandatory cookies */
                });

                tarteaucitron.user.matomoId = 4;
                tarteaucitron.user.matomoHost = 'https://healthdatahub.matomo.cloud/';
                (tarteaucitron.job = tarteaucitron.job || []).push('matomohightrack');
            `]],

    title: "Documentation du SNDS",
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS",
    themeConfig: {
        repo: "https://gitlab.com/healthdatahub/documentation-snds",
        docsDir: '.',
        editLinks: true,
        nav: [
            {text: "Forum entraide", link: "https://entraide.health-data-hub.fr/"},
            {text: "Dico interactif", link: "https://health-data-hub.shinyapps.io/dico-snds/"},
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