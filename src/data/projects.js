const projects = [
  {
    id: 1,
    name: 'MedPlan',
    description: "Application de gestion de rendez-vous médicaux, permettant aux patients de prendre rendez-vous en ligne et aux praticiens de gérer leur planning.",
    problem: "Faciliter la prise de rendez-vous médicaux et réduire les erreurs de planification liées à la gestion manuelle.",
      technologies: ['JavaScript', 'Python', 'CSS', 'HTML'],
    image: '/projects/medplan.jpg',
    demoLink:'' ,
    githubLink: '',
  },
  {
    id: 2,
    name: 'RED Product',
    description: "Projet d'intégration frontend et API, connectant une interface React à un backend Django REST Framework pour l'affichage et la gestion dynamique de produits.",
    problem: "Mettre en pratique l'intégration front/back avec une API REST réelle, du CRUD à l'affichage dynamique des données.",
    technologies: ['React', 'Django REST', 'PostgreSQL'],
    image: '/projects/red-product.jpg',
    demoLink: 'https://red-product-frontend-h4jp.onrender.com/hotels',
    githubLink: '',
  },
  {
    id: 3,
    name: 'AgriSN',
    description: "Projet réalisé durant un hackathon à AFI-L'UE, déployé en ligne sur Vercel.",
    problem: "Concevoir et livrer une solution fonctionnelle dans le temps limité d'un hackathon, avec un déploiement réel accessible en ligne.",
    technologies: ['JavaScript', 'HTML', 'CSS', 'Base de données'],
    image: '/projects/agrisn.jpg',
    demoLink: '', // colle ici le lien Vercel quand tu l'as
    githubLink: 'https://github.com/PaulPhilippe08/AgriSn.git',
  },
  {
    id: 4,
    name: 'Application de gestion de projets',
    description: "Application console de gestion de projets, avec stockage des données dans des fichiers JSON.",
    problem: "Proposer un outil de gestion de projets simple, fonctionnant en ligne de commande, sans base de données ni interface graphique.",
    technologies: ['Python', 'JSON', 'Application console'],
    image: '/projects/gestion-projets.jpg',
    demoLink: '',
    githubLink: '',
  },
  {
    id: 5,
    name: 'La Maison de la Jungle',
    description: "Site web réalisé avec React, alliant mise en page moderne et navigation fluide entre les différentes sections.",
    problem: "Mettre en pratique la création de composants React réutilisables et la construction d'une interface complète.",
    technologies: ['React'],
    image: '/projects/maison-jungle.jpg',
    demoLink: 'http://localhost:5174/',
    githubLink: '',
  },
 {
  id: 6,
  name: 'Projet de fin d’étude',
  description: "Plateforme digitale conçue pour AFI L’UE permettant de présenter l’établissement, ses formations, ses actualités et de gérer les préinscriptions en ligne. Le projet intègre également une analyse stratégique et économique à travers un business plan.",
  problem: "Concevoir une plateforme web moderne et fonctionnelle permettant à un établissement d’enseignement supérieur de mieux présenter ses offres, faciliter les préinscriptions et améliorer sa présence digitale.",
  technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  image: '/projects/fin-d-etude.jpg',
  demoLink: '',
  githubLink: 'https://github.com/Brelle/fin-etude.git',
},
{
  id: 7,
  name: 'Les Trois Sœurs',
  description: "Site web de vente de gerbes de fleurs créé par trois sœurs pour accompagner les familles dans les moments de deuil. La plateforme permet de découvrir les différentes compositions florales et de faciliter leur présentation aux clients.",
  problem: "Créer une plateforme web simple, élégante et accessible permettant de présenter les gerbes de fleurs proposées et de faciliter leur découverte par les familles souhaitant rendre hommage à leurs proches.",
  technologies: ['HTML', 'CSS', 'JavaScript'],
  image: "/projects/les-trois-soeurs.jpg",
  demoLink: '',
  githubLink: 'https://github.com/Brelle/les-trois-soeurs.git',
},
{
  id: 8,
  name: 'Projet JS',

  description: "Portfolio dynamique permettant de présenter et de gérer une liste de projets avec leurs descriptions, technologies utilisées, images et liens GitHub ou de démonstration.",

  problem: "Créer une interface simple permettant de centraliser les projets d’un portfolio et de faciliter leur ajout, modification, suppression et consultation.",

  technologies: ['HTML', 'CSS', 'JavaScript'],

  image: "/projects/projet-js.jpg",

  demoLink: '',

  githubLink: 'https://github.com/Brelle/projet-JS.git',
},
];

export default projects;