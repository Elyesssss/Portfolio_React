export interface CompetenceContent {
  title: string;
  description: string;
  definition: string;
  importance: string;
  aptitudes: string[];
  apprentissages: {
    techniques: string[];
    outils: string[];
    methodologies: string[];
  };
  projets: {
    title: string;
    description: string;
    competences: string[];
    technologies: string[];
    images?: string[];
    image?: string;
    repository?: string;
  }[];
  reflexion: string;
  evaluation: {
    niveau: number;
    progression: {
      semestre: string;
      description: string;
    }[];
    axes: string[];
  };
}

export const competences: Record<string, CompetenceContent> = {
  "gerer": {
    title: "Gérer",
    description: "Concevoir et gérer des bases de données",
    definition: "La compétence 'Gérer' consiste à concevoir, mettre en place et administrer des bases de données. Cette compétence est essentielle pour stocker, organiser et restituer efficacement les données nécessaires aux applications.",
    importance: "La gestion des bases de données est fondamentale car elle permet de structurer et d'optimiser l'accès aux données. Une bonne gestion des bases de données garantit l'intégrité, la sécurité et la performance des applications.",
    aptitudes: [
      "Conception : Élaborer le schéma de la base de données",
      "Modélisation : Créer des modèles de données adaptés",
      "Optimisation : Améliorer les performances des requêtes",
      "Administration : Gérer les accès et la sécurité"
    ],
    apprentissages: {
      techniques: [
        "Modélisation des données",
        "Langage SQL",
        "Optimisation des requêtes",
        "Gestion des transactions"
      ],
      outils: [
        "SGBD (MySQL/MariaDB)",
        "PostgreSQL",
        "MongoDB",
        "Outils de modélisation"
      ],
      methodologies: [
        "Normalisation des données",
        "Indexation",
        "Gestion des versions",
        "Planification des sauvegardes"
      ]
    },
    projets: [
      {
        title: "Système de Réservation de Billets de Train",
        description: "Ce système de réservation concrétise la compétence 'Gérer' à travers sa capacité à concevoir et optimiser une base de données complexe. L'utilisation de MongoDB pour gérer les données hétérogènes démontre la maîtrise des modèles de données NoSQL.",
        competences: [
          "Conception du schéma de données",
          "Optimisation des requêtes",
          "Gestion des transactions",
          "Sécurisation des données"
        ],
        technologies: ["JavaScript", "MongoDB", "Node.js", "Express"],
        images: [
          "/images/train1.png",
          "/images/train2.png",
          "/images/train3.png",
          "/images/train4.png"
        ]
      }
    ],
    reflexion: "La compétence 'Gérer' m'a permis de comprendre l'importance d'une bonne conception des bases de données. J'ai appris que la structure des données impacte directement les performances et la maintenabilité des applications.",
    evaluation: {
      niveau: 65,
      progression: [
        {
          semestre: "Semestre 1",
          description: "Initiation aux bases de données"
        },
        {
          semestre: "Semestre 2",
          description: "Modélisation des données"
        },
        {
          semestre: "Semestre 3",
          description: "Optimisation des requêtes"
        },
        {
          semestre: "Semestre 4",
          description: "Gestion avancée des bases de données"
        }
      ],
      axes: [
        "Approfondir mes connaissances en NoSQL",
        "Développer mes compétences en optimisation",
        "Améliorer mes pratiques en matière de sécurité"
      ]
    }
  },
  "conduire": {
    title: "Conduire",
    description: "Satisfaire les besoins des utilisateurs",
    definition: "La compétence 'Conduire' consiste à organiser et piloter un projet informatique en fonction des besoins des utilisateurs. Cette compétence est essentielle pour garantir la réussite des projets et la satisfaction des parties prenantes.",
    importance: "La conduite de projet est fondamentale car elle permet d'assurer que les projets répondent aux besoins réels des utilisateurs, respectent les contraintes de temps et de budget, et apportent une valeur ajoutée à l'organisation.",
    aptitudes: [
      "Analyse des besoins : Identifier et comprendre les exigences",
      "Planification : Établir un calendrier et définir les ressources",
      "Gestion d'équipe : Coordonner le travail des intervenants",
      "Suivi et contrôle : Mesurer l'avancement et prendre des décisions"
    ],
    apprentissages: {
      techniques: [
        "Méthodes agiles (Scrum, Kanban)",
        "Gestion des risques",
        "Estimation des coûts",
        "Suivi de projet"
      ],
      outils: [
        "Outils de planification",
        "Plateformes collaboratives",
        "Outils de reporting",
        "Gestionnaires de versions"
      ],
      methodologies: [
        "Analyse des besoins",
        "Gestion des changements",
        "Communication projet",
        "Documentation"
      ]
    },
    projets: [
      {
        title: "Jeu Zelda",
        description: "Ce projet de jeu Zelda reflète l'excellence de la compétence 'Conduire' en mettant l'accent sur la satisfaction des besoins utilisateurs à travers une démarche de projet structurée.",
        competences: [
          "Analyse des besoins utilisateurs",
          "Planification du projet",
          "Gestion d'équipe",
          "Suivi des livrables"
        ],
        technologies: ["Java", "JavaFX"],
        image: "/images/zelda.png"
      }
    ],
    reflexion: "La compétence 'Conduire' m'a permis de développer une vision globale des projets informatiques. J'ai compris que le succès d'un projet ne dépend pas uniquement de la qualité du code, mais aussi de la capacité à comprendre les besoins des utilisateurs.",
    evaluation: {
      niveau: 80,
      progression: [
        {
          semestre: "Semestre 1",
          description: "Initiation à la gestion de projet"
        },
        {
          semestre: "Semestre 2",
          description: "Application des méthodes classiques"
        },
        {
          semestre: "Semestre 3",
          description: "Découverte des méthodes agiles"
        },
        {
          semestre: "Semestre 4",
          description: "Pilotage complet de projets"
        }
      ],
      axes: [
        "Approfondir ma maîtrise des outils de gestion de projet",
        "Développer mes compétences en estimation",
        "Améliorer mes techniques de résolution de conflits"
      ]
    }
  },
  "collaborer": {
    title: "Collaborer",
    description: "Travailler dans une équipe informatique",
    definition: "La compétence 'Collaborer' consiste à travailler efficacement au sein d'une équipe informatique. Cette compétence est essentielle pour assurer la cohésion et la productivité des équipes de développement.",
    importance: "La collaboration est fondamentale car elle permet de mutualiser les compétences, d'accélérer le développement et d'améliorer la qualité des solutions. Une bonne collaboration est souvent le facteur clé du succès des projets.",
    aptitudes: [
      "Communication : Échanger efficacement avec l'équipe",
      "Coordination : Organiser le travail collectif",
      "Partage : Mettre en commun les connaissances",
      "Adaptation : S'intégrer dans différents contextes"
    ],
    apprentissages: {
      techniques: [
        "Travail collaboratif",
        "Gestion des versions",
        "Code review",
        "Documentation partagée"
      ],
      outils: [
        "Git/GitHub",
        "Slack/Discord",
        "Jira/Trello",
        "Google Workspace"
      ],
      methodologies: [
        "Pair programming",
        "Code review",
        "Documentation",
        "Communication agile"
      ]
    },
    projets: [
      {
        title: "Application de Gestion de Projet",
        description: "Ce projet d'équipe a permis de mettre en pratique les principes de collaboration efficace. L'utilisation de Git pour la gestion des versions et les revues de code a été essentielle pour maintenir la qualité du code.",
        competences: [
          "Travail d'équipe",
          "Communication",
          "Gestion des versions",
          "Code review"
        ],
        technologies: ["React", "Node.js", "Git", "MongoDB"],
        images: [
          "/images/traviaRecherche1.png",
          "/images/traviaRecherche2.png",
          "/images/traviaRecherche3.png",
          "/images/traviaRecherche4.png"
        ]
      }
    ],
    reflexion: "La compétence 'Collaborer' m'a appris l'importance de la communication et du partage dans le développement logiciel. J'ai compris que le succès d'un projet dépend souvent de la capacité de l'équipe à travailler ensemble efficacement.",
    evaluation: {
      niveau: 75,
      progression: [
        {
          semestre: "Semestre 1",
          description: "Initiation au travail d'équipe"
        },
        {
          semestre: "Semestre 2",
          description: "Utilisation des outils collaboratifs"
        },
        {
          semestre: "Semestre 3",
          description: "Pratique du pair programming"
        },
        {
          semestre: "Semestre 4",
          description: "Leadership d'équipe"
        }
      ],
      axes: [
        "Améliorer mes compétences en communication",
        "Développer mes capacités de leadership",
        "Approfondir ma maîtrise des outils collaboratifs"
      ]
    }
  },
  "administrer": {
    title: "Administrer",
    description: "Installation et configuration",
    definition: "La compétence 'Administrer' consiste à installer et configurer des systèmes informatiques, des réseaux et des services. Cette compétence est essentielle pour assurer le bon fonctionnement et la maintenance des infrastructures informatiques.",
    importance: "L'administration des systèmes est fondamentale car elle permet de maintenir et d'optimiser les infrastructures informatiques. Une bonne administration garantit la disponibilité, la sécurité et la performance des services informatiques.",
    aptitudes: [
      "Installation : Mettre en place des systèmes d'exploitation et des services",
      "Configuration : Paramétrer les systèmes et les services selon les besoins",
      "Maintenance : Assurer le bon fonctionnement et la mise à jour des systèmes",
      "Sécurité : Protéger les systèmes et les données"
    ],
    apprentissages: {
      techniques: [
        "Administration système Linux",
        "Configuration de services réseau",
        "Gestion des utilisateurs et des droits",
        "Sécurisation des systèmes"
      ],
      outils: [
        "Outils de monitoring",
        "Gestionnaires de paquets",
        "Outils de sauvegarde",
        "Pare-feu et sécurité"
      ],
      methodologies: [
        "Gestion des incidents",
        "Procédures de maintenance",
        "Documentation technique",
        "Planification des mises à jour"
      ]
    },
    projets: [
      {
        title: "Serveur Web",
        description: "Ce projet de serveur web Apache met en valeur la compétence 'Administrer' en couvrant l'ensemble des aspects de déploiement et de configuration réseau. La mise en place d'un serveur DNS pour la résolution de noms et d'un serveur DHCP pour l'attribution dynamique d'adresses IP démontre la maîtrise des services réseau essentiels.",
        competences: [
          "Configuration du serveur Apache",
          "Mise en place du DNS et DHCP",
          "Configuration du pare-feu",
          "Gestion des logs système"
        ],
        technologies: ["Apache", "Linux", "PHP"],
        image: "/images/serveur-web.png"
      }
    ],
    reflexion: "La compétence 'Administrer' m'a permis de comprendre l'importance d'une infrastructure informatique bien gérée. J'ai appris que l'administration des systèmes ne se limite pas à la configuration technique, mais implique aussi une vision globale de la sécurité et de la maintenance.",
    evaluation: {
      niveau: 70,
      progression: [
        {
          semestre: "Semestre 1",
          description: "Initiation à l'administration système"
        },
        {
          semestre: "Semestre 2",
          description: "Configuration des services réseau"
        },
        {
          semestre: "Semestre 3",
          description: "Sécurisation des systèmes"
        },
        {
          semestre: "Semestre 4",
          description: "Gestion avancée des infrastructures"
        }
      ],
      axes: [
        "Approfondir mes connaissances en virtualisation",
        "Développer mes compétences en cloud computing",
        "Améliorer mes pratiques en matière de sécurité"
      ]
    }
  },
  "optimiser": {
    title: "Optimiser",
    description: "Proposer des applications informatiques optimisées",
    definition: "La compétence 'Optimiser' consiste à proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources. Cette compétence est essentielle pour développer des solutions performantes qui répondent efficacement aux besoins des utilisateurs.",
    importance: "L'optimisation est fondamentale dans le développement logiciel car elle permet de créer des applications plus rapides, plus économes en ressources et plus réactives. Dans un contexte où les attentes des utilisateurs sont toujours plus élevées et où les contraintes techniques peuvent être importantes, la capacité à optimiser devient un avantage concurrentiel majeur.",
    aptitudes: [
      "Analyse de performance : Identifier les goulots d'étranglement et les points critiques",
      "Optimisation algorithmique : Améliorer l'efficacité des algorithmes",
      "Gestion de ressources : Minimiser l'utilisation de mémoire et de CPU",
      "Refactoring : Restructurer le code sans en modifier le comportement"
    ],
    apprentissages: {
      techniques: [
        "Analyse de complexité algorithmique",
        "Optimisation des requêtes SQL",
        "Amélioration des structures de données",
        "Techniques de cache et de mise en mémoire"
      ],
      outils: [
        "Métriques de performance",
        "Tests de charge",
        "Bonnes pratiques",
        "Clean Code et refactoring"
      ],
      methodologies: [
        "Design patterns optimisés",
        "Documentation des optimisations",
        "Benchmarking et comparaisons"
      ]
    },
    projets: [
      {
        title: "Scanner de vulnérabilité SQL",
        description: "Ce scanner de vulnérabilités SQL incarne parfaitement la compétence 'Optimiser' à travers un projet personnel né d'une passion pour la cybersécurité. Développé en autodidacte avec le langage Go, l'outil implémente des algorithmes sophistiqués pour la détection automatisée des failles d'injection SQL.",
        competences: [
          "Optimisation d'algorithmes de détection",
          "Gestion efficace des scans concurrents",
          "Analyse récursive des pages web",
          "Génération de rapports détaillés"
        ],
        technologies: ["Go"],
        image: "/images/scanner-sql.jpg",
        repository: "https://github.com/Elyesssss/SqlScan"
      }
    ],
    reflexion: "La compétence 'Optimiser' a représenté pour moi un défi passionnant qui m'a permis de développer ma pensée analytique et ma rigueur. J'ai découvert que l'optimisation n'est pas seulement une question technique, mais aussi une approche systématique pour résoudre des problèmes complexes.",
    evaluation: {
      niveau: 50,
      progression: [
        {
          semestre: "Semestre 1",
          description: "Sensibilisation aux problématiques de performance"
        },
        {
          semestre: "Semestre 2",
          description: "Initiation aux techniques d'optimisation algorithmique"
        },
        {
          semestre: "Semestre 3",
          description: "Application des techniques d'optimisation dans des projets concrets"
        },
        {
          semestre: "Semestre 4",
          description: "Approfondissement des méthodes d'analyse et de benchmarking"
        }
      ],
      axes: [
        "Approfondir mes connaissances en optimisation de bases de données",
        "Développer mes compétences en analyse de performance d'applications mobiles",
        "Explorer les techniques d'optimisation pour les applications à forte charge"
      ]
    }
  },
  "realiser": {
    title: "Réaliser",
    description: "Développer des applications",
    definition: "La compétence 'Réaliser' consiste à concevoir et développer des applications informatiques en respectant les bonnes pratiques et les standards de l'industrie. Cette compétence est fondamentale pour créer des solutions robustes et maintenables.",
    importance: "La réalisation d'applications est au cœur du métier de développeur. Une bonne maîtrise de cette compétence permet de créer des solutions efficaces, performantes et adaptées aux besoins des utilisateurs.",
    aptitudes: [
      "Conception : Élaborer des architectures logicielles",
      "Développement : Implémenter des solutions",
      "Tests : Vérifier la qualité du code",
      "Optimisation : Améliorer les performances"
    ],
    apprentissages: {
      techniques: [
        "Programmation orientée objet",
        "Design patterns",
        "Tests unitaires",
        "Optimisation de code"
      ],
      outils: [
        "IDE (VS Code, IntelliJ)",
        "Outils de test",
        "Outils de profilage",
        "Outils de build"
      ],
      methodologies: [
        "Clean Code",
        "TDD (Test-Driven Development)",
        "Refactoring",
        "Code review"
      ]
    },
    projets: [
      {
        title: "Application de Gestion de Tâches",
        description: "Ce projet a permis de mettre en pratique les principes de développement propre et de tests. L'utilisation de TDD a été particulièrement enrichissante pour garantir la qualité du code.",
        competences: [
          "Architecture logicielle",
          "Tests unitaires",
          "Clean Code",
          "Performance"
        ],
        technologies: ["TypeScript", "React", "Jest", "Docker"],
        image: "/images/portail-bancaire.png"
      }
    ],
    reflexion: "La compétence 'Réaliser' m'a permis de comprendre l'importance de la qualité du code et des bonnes pratiques de développement. J'ai appris que la maintenabilité et la performance sont des aspects essentiels du développement logiciel.",
    evaluation: {
      niveau: 70,
      progression: [
        {
          semestre: "Semestre 1",
          description: "Initiation à la programmation"
        },
        {
          semestre: "Semestre 2",
          description: "Pratique des design patterns"
        },
        {
          semestre: "Semestre 3",
          description: "Mise en place des tests"
        },
        {
          semestre: "Semestre 4",
          description: "Optimisation et refactoring"
        }
      ],
      axes: [
        "Approfondir mes connaissances en architecture logicielle",
        "Développer mes compétences en tests",
        "Améliorer mes pratiques de clean code"
      ]
    }
  }
}; 