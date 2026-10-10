import type { Destination } from '../types'

export const destinations: Destination[] = [
  {
    slug: 'fianarantsoa',
    image: 'destination-fianarantsoa',
    name: 'Fianarantsoa',
    location: {
      label: 'Fianarantsoa, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fianarantsoa%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Hauts-Plateaux',
    category: 'Ville',
    summary:
      "Ville historique des Hauts-Plateaux, connue pour sa vieille ville, son patrimoine culturel et sa position de porte d'entrée vers le Sud de Madagascar.",
    description: [
      "Fianarantsoa, souvent appelée Fianar, est l'une des grandes villes historiques des Hauts-Plateaux. Sa haute ville, perchée sur sa colline, rassemble maisons anciennes, églises et ruelles chargées d'histoire.",
      "Ville de culture et d'enseignement, elle est aussi une étape naturelle sur la route du Sud, entre Antananarivo, le pays Betsileo et les parcs du Grand Sud.",
    ],
    highlights: [
      'La haute ville et son patrimoine bâti',
      'Églises et ruelles historiques',
      'Étape sur la route du Sud',
    ],
    en: {
      summary:
        'Historic Hauts-Plateaux city, known for its old town, cultural heritage and position as a gateway to southern Madagascar.',
      description: [
        'Fianarantsoa, often called Fianar, is one of the great historic cities of the Hauts-Plateaux. Its upper town, perched on its hill, gathers old houses, churches and lanes steeped in history.',
        'A city of culture and education, it is also a natural stop on the road South, between Antananarivo, Betsileo country and the parks of the far South.',
      ],
      highlights: [
        'The upper town and its built heritage',
        'Historic churches and lanes',
        'A stop on the road South',
      ],
    },
  },
  {
    slug: 'nosy-be',
    image: 'destination-nosy-be',
    name: 'Nosy Be',
    location: {
      label: 'Nosy Be, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nosy%20Be%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Nord-Ouest',
    category: 'Île',
    summary: "Archipel aux lagoons turquoise, plages de sable blanc et marchés aux épices.",
    description: [
      "Au large de la côte nord-ouest, Nosy Be est la plus célèbre des îles malgaches : un archipel de petites îles volcaniques entourées de lagoons turquoise et de plages de sable blanc.",
      "Surnommée l'île aux parfums pour ses plantations d'ylang-ylang, de vanille et d'épices, elle mêle farniente balnéaire, sorties en mer et rencontres dans les villages de pêcheurs.",
    ],
    highlights: [
      'Lagoons turquoise et plages de sable blanc',
      "Marchés aux épices et plantations d'ylang-ylang",
      'Sorties en mer vers les îles voisines',
      'Fonds marins propices au snorkeling et à la plongée',
    ],
    bestPeriod: "D'avril à novembre",
    recommendedDuration: '4 à 7 jours',
    en: {
      summary: 'An archipelago of turquoise lagoons, white-sand beaches and spice markets.',
      description: [
        "Off the north-west coast, Nosy Be is the most famous of Madagascar's islands: an archipelago of small volcanic islands surrounded by turquoise lagoons and white-sand beaches.",
        'Nicknamed the island of scents for its ylang-ylang, vanilla and spice plantations, it blends beach relaxation, sea trips and encounters in fishing villages.',
      ],
      highlights: [
        'Turquoise lagoons and white-sand beaches',
        'Spice markets and ylang-ylang plantations',
        'Sea trips to the neighbouring islands',
        'Seabeds ideal for snorkelling and diving',
      ],
      bestPeriod: 'From April to November',
      recommendedDuration: '4 to 7 days',
    },
  },
  {
    slug: 'morondava',
    image: 'destination-morondava',
    name: 'Morondava',
    location: {
      label: 'Morondava, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Morondava%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Ouest',
    category: 'Nature',
    summary: "Porte de l'Allée des Baobabs et des couchers de soleil les plus emblématiques de l'île.",
    description: [
      "Sur la côte ouest, Morondava est la porte d'entrée de l'Allée des Baobabs, cette piste bordée de géants centenaires devenue l'un des paysages les plus photographiés de Madagascar.",
      "La région se découvre lentement : plages tranquilles, forêts sèches, villages de pêcheurs vezo et couchers de soleil spectaculaires entre les baobabs.",
    ],
    highlights: [
      "L'Allée des Baobabs au coucher du soleil",
      'Forêts sèches et faune de l’ouest',
      'Plages paisibles de la côte ouest',
      'Rencontres avec les communautés vezo',
    ],
    bestPeriod: "D'avril à octobre",
    recommendedDuration: '2 à 4 jours',
    en: {
      summary: "Gateway to the Avenue of the Baobabs and the island's most iconic sunsets.",
      description: [
        "On the west coast, Morondava is the gateway to the Avenue of the Baobabs, a track lined with centuries-old giants that has become one of Madagascar's most photographed landscapes.",
        'The region is best discovered slowly: quiet beaches, dry forests, Vezo fishing villages and spectacular sunsets among the baobabs.',
      ],
      highlights: [
        'The Avenue of the Baobabs at sunset',
        'Dry forests and wildlife of the west',
        'Peaceful west-coast beaches',
        'Encounters with Vezo communities',
      ],
      bestPeriod: 'From April to October',
      recommendedDuration: '2 to 4 days',
    },
  },
  {
    slug: 'antananarivo',
    image: 'destination-antananarivo',
    name: 'Antananarivo',
    location: {
      label: 'Antananarivo, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Antananarivo%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Hauts-Plateaux',
    category: 'Ville',
    summary: 'La capitale des collines : palais royaux, marchés colorés et héritage malgache.',
    description: [
      "Perchée sur les collines des Hauts-Plateaux, Antananarivo — qu'on appelle Tana — est le cœur historique et culturel de Madagascar.",
      "Entre le palais de la Reine surplombant la ville, les marchés colorés, les ateliers d'artisans et les ruelles de la haute ville, la capitale offre une première immersion idéale dans l'héritage malgache.",
    ],
    highlights: [
      'Le palais de la Reine et la haute ville',
      'Marchés artisanaux et ateliers locaux',
      'Gastronomie des Hauts-Plateaux',
      'Point de départ vers les autres régions',
    ],
    bestPeriod: "D'avril à octobre",
    recommendedDuration: '1 à 3 jours',
    en: {
      summary: 'The capital of the hills: royal palaces, colourful markets and Malagasy heritage.',
      description: [
        'Perched on the hills of the Hauts-Plateaux, Antananarivo — known as Tana — is the historical and cultural heart of Madagascar.',
        "Between the Queen's Palace overlooking the city, colourful markets, craft workshops and the lanes of the upper town, the capital offers an ideal first immersion in Malagasy heritage.",
      ],
      highlights: [
        "The Queen's Palace and the upper town",
        'Craft markets and local workshops',
        'Hauts-Plateaux gastronomy',
        'Starting point for other regions',
      ],
      bestPeriod: 'From April to October',
      recommendedDuration: '1 to 3 days',
    },
  },
  {
    slug: 'andasibe',
    image: 'destination-andasibe',
    name: 'Andasibe',
    location: {
      label: 'Andasibe, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Andasibe%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Est',
    category: 'Nature',
    summary: "Forêt humide de l'est, chants des indris et sentiers de randonnée.",
    description: [
      "À quelques heures de la capitale, Andasibe protège l'une des plus belles forêts humides de l'est de Madagascar.",
      "C'est le royaume de l'indri, le plus grand lémurien de l'île, dont le chant porte loin à l'aube. Les sentiers balisés, accessibles à tous les niveaux, permettent d'observer lémuriens, caméléons et orchidées.",
    ],
    highlights: [
      "Le chant des indris au lever du jour",
      'Randonnées dans la forêt humide',
      'Lémuriens, caméléons et oiseaux endémiques',
      'Visites nocturnes à la tombée de la nuit',
    ],
    bestPeriod: "De septembre à décembre",
    recommendedDuration: '2 à 3 jours',
    en: {
      summary: 'Eastern rainforest, indri calls and hiking trails.',
      description: [
        'A few hours from the capital, Andasibe protects one of the finest rainforests of eastern Madagascar.',
        "It is the kingdom of the indri, the island's largest lemur, whose call carries far at dawn. Marked trails, suitable for all levels, reveal lemurs, chameleons and orchids.",
      ],
      highlights: [
        'Indri calls at daybreak',
        'Hikes through the rainforest',
        'Endemic lemurs, chameleons and birds',
        'Night visits after dark',
      ],
      bestPeriod: 'From September to December',
      recommendedDuration: '2 to 3 days',
    },
  },
  {
    slug: 'sainte-marie',
    image: 'destination-sainte-marie',
    name: 'Île Sainte-Marie',
    location: {
      label: 'Île Sainte-Marie, Madagascar',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=%C3%8Ele%20Sainte-Marie%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Est',
    category: 'Île',
    summary: 'Criques paisibles, baleines à bosse en saison et atmosphère insulaire.',
    description: [
      "Au large de la côte est, l'île Sainte-Marie est un ruban de terre bordé de criques paisibles, de cocoteraies et d'eaux calmes.",
      "Chaque année, les baleines à bosse y font escale, offrant l'un des plus beaux spectacles naturels de l'océan Indien. Le reste du temps, l'île vit au rythme doux des pirogues, des épices et des cases au bord de l'eau.",
    ],
    highlights: [
      'Observation des baleines à bosse en saison',
      'Criques paisibles et cocoteraies',
      'Histoire des pirates et cimetière marin',
      'Balades en pirogue et fruits de mer',
    ],
    bestPeriod: 'De juillet à septembre pour les baleines',
    recommendedDuration: '3 à 5 jours',
    en: {
      summary: 'Peaceful coves, humpback whales in season and an island atmosphere.',
      description: [
        'Off the east coast, Sainte-Marie island is a ribbon of land edged with peaceful coves, coconut groves and calm waters.',
        'Every year, humpback whales stop here, offering one of the finest natural spectacles of the Indian Ocean. The rest of the time, the island lives to the gentle rhythm of pirogues, spices and huts by the water.',
      ],
      highlights: [
        'Humpback whale watching in season',
        'Peaceful coves and coconut groves',
        'Pirate history and marine cemetery',
        'Pirogue rides and seafood',
      ],
      bestPeriod: 'From July to September for the whales',
      recommendedDuration: '3 to 5 days',
    },
  },
  {
    slug: 'ifaty',
    image: 'destination-ifaty',
    name: 'Ifaty',
    location: {
      label: 'Ifaty, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ifaty%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Sud-Ouest',
    category: 'Plage',
    summary: 'Côte sud-ouest, récifs de corail, plages sauvages et baobabs troncs-gros.',
    description: [
      "Au nord de Tuléar, Ifaty borde un lagon protégé par une barrière de corail, dans un décor mêlant plages sauvages, bush épineux et baobabs.",
      "C'est une destination de détente et de découverte marine : snorkeling sur le récif, pirogue avec les pêcheurs vezo et balades dans la forêt de baobabs à proximité.",
    ],
    highlights: [
      'Lagon protégé et récif de corail',
      'Plages sauvages du sud-ouest',
      'Forêt de baobabs et bush épineux',
      'Sorties en pirogue avec les pêcheurs vezo',
    ],
    bestPeriod: "D'avril à novembre",
    recommendedDuration: '3 à 5 jours',
    en: {
      summary: 'South-west coast, coral reefs, wild beaches and stout-trunked baobabs.',
      description: [
        'North of Toliara, Ifaty borders a lagoon protected by a coral barrier reef, in a setting of wild beaches, spiny bush and baobabs.',
        'It is a destination for relaxation and marine discovery: snorkelling on the reef, pirogue trips with Vezo fishermen and walks in the nearby baobab forest.',
      ],
      highlights: [
        'Sheltered lagoon and coral reef',
        'Wild south-west beaches',
        'Baobab forest and spiny bush',
        'Pirogue trips with Vezo fishermen',
      ],
      bestPeriod: 'From April to November',
      recommendedDuration: '3 to 5 days',
    },
  },
  {
    slug: 'isalo',
    image: 'destination-isalo',
    name: 'Isalo',
    location: {
      label: 'Isalo, Madagascar',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Isalo%20National%20Park%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Sud-Ouest',
    category: 'Nature',
    summary:
      "Canyons sculptés par l'érosion, piscines naturelles et formations rocheuses spectaculaires au cœur d'un parc national mythique.",
    description: [
      "Le Parc National de l'Isalo est l'un des sites les plus visités de Madagascar. Ses paysages de grès ruiniformes, ses canyons profonds et ses piscines naturelles d'eau turquoise créent un décor presque lunaire. On y randonne à la rencontre de lémuriens catta, de plantes endémiques et de villages Bara aux traditions funéraires uniques.",
    ],
    recommendedDuration: '1 à 2 jours',
    en: {
      summary:
        'Canyons sculpted by erosion, natural pools and spectacular rock formations in a legendary national park.',
      description: [
        "Isalo National Park is one of Madagascar's most visited sites. Its ruiniform sandstone landscapes, deep canyons and turquoise natural pools create an almost lunar setting. Hike to meet ring-tailed lemurs, endemic plants and Bara villages with unique funeral traditions.",
      ],
      recommendedDuration: '1 to 2 days',
    },
  },
  {
    slug: 'tsingy-bemaraha',
    image: 'destination-tsingy-bemaraha',
    name: 'Tsingy de Bemaraha',
    location: {
      label: 'Tsingy de Bemaraha, Madagascar',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Tsingy%20de%20Bemaraha%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Ouest',
    category: 'Nature',
    summary:
      'Site classé UNESCO aux formations karstiques uniques au monde, entre aventure et paysages spectaculaires.',
    description: [
      'Les Tsingy de Bemaraha forment un labyrinthe de pics calcaires acérés, sculptés par des millions d’années d’érosion. Accessibles via des parcours à tyroliennes, ponts suspendus et échelles, ils abritent une faune endémique rare (lémuriens, oiseaux, reptiles). Un des paysages les plus impressionnants et les moins accessibles de l’île.',
    ],
    recommendedDuration: '2 à 3 jours',
    en: {
      summary:
        'UNESCO-listed site with karst formations unique in the world, between adventure and spectacular landscapes.',
      description: [
        'The Tsingy de Bemaraha form a labyrinth of sharp limestone peaks, sculpted by millions of years of erosion. Reached via ziplines, suspension bridges and ladders, they shelter rare endemic wildlife (lemurs, birds, reptiles). One of the most impressive and least accessible landscapes on the island.',
      ],
      recommendedDuration: '2 to 3 days',
    },
  },
  {
    slug: 'ranomafana',
    image: 'destination-ranomafana',
    name: 'Ranomafana',
    location: {
      label: 'Ranomafana, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ranomafana%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Hauts-Plateaux',
    category: 'Nature',
    summary:
      'Forêt tropicale humide, lémuriens dorés en voie de disparition et sources thermales réputées.',
    description: [
      'Ranomafana signifie « eau chaude » en malgache, en référence à ses sources thermales. Son parc national, classé au patrimoine mondial, protège une forêt primaire dense abritant plus de 12 espèces de lémuriens dont le rare lémurien à front doré. Une destination incontournable pour les amateurs de biodiversité.',
    ],
    recommendedDuration: '1 à 2 jours',
    en: {
      summary: 'Humid tropical forest, endangered golden lemurs and renowned hot springs.',
      description: [
        'Ranomafana means “hot water” in Malagasy, a reference to its hot springs. Its World Heritage-listed national park protects dense primary forest home to more than 12 lemur species, including the rare golden-fronted lemur. An unmissable destination for biodiversity lovers.',
      ],
      recommendedDuration: '1 to 2 days',
    },
  },
  {
    slug: 'antsirabe',
    image: 'destination-antsirabe',
    name: 'Antsirabe',
    location: {
      label: 'Antsirabe, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Antsirabe%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Hauts-Plateaux',
    category: 'Ville',
    summary:
      'La « ville d’eau » malgache : pousse-pousse colorés, artisanat local et climat frais des hauts plateaux.',
    description: [
      'Fondée par des missionnaires norvégiens pour ses eaux thermales, Antsirabe est aujourd’hui célèbre pour ses pousse-pousse décorés et son artisanat (maquettes de voitures, objets en corne de zébu). Climat frais toute l’année, architecture coloniale et ambiance vivante en font une étape appréciée entre Antananarivo et le Sud.',
    ],
    recommendedDuration: '1 jour',
    en: {
      summary:
        'The Malagasy “city of water”: colourful rickshaws, local crafts and the cool highland climate.',
      description: [
        'Founded by Norwegian missionaries for its thermal waters, Antsirabe is now famous for its decorated rickshaws and crafts (car models, zebu-horn objects). Cool all year round, with colonial architecture and a lively atmosphere, it is a popular stop between Antananarivo and the South.',
      ],
      recommendedDuration: '1 day',
    },
  },
  {
    slug: 'anakao',
    image: 'destination-anakao',
    name: 'Anakao',
    location: {
      label: 'Anakao, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Anakao%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Sud-Ouest',
    category: 'Plage',
    summary: 'Village de pêcheurs Vezo, plages sauvages et spot reconnu de kitesurf.',
    description: [
      'Accessible uniquement par bateau depuis Toliara, Anakao offre des plages préservées bordées de pirogues traditionnelles Vezo. Le vent constant en fait un spot prisé de kitesurf, tandis que les eaux calmes et le récif corallien attirent plongeurs et amateurs de farniente loin du tourisme de masse.',
    ],
    recommendedDuration: '2 à 3 jours',
    en: {
      summary: 'Vezo fishing village, wild beaches and a renowned kitesurf spot.',
      description: [
        'Reachable only by boat from Toliara, Anakao offers unspoilt beaches lined with traditional Vezo pirogues. The steady wind makes it a popular kitesurf spot, while the calm waters and coral reef attract divers and beach lovers far from mass tourism.',
      ],
      recommendedDuration: '2 to 3 days',
    },
  },
  {
    slug: 'nosy-komba',
    image: 'destination-nosy-komba',
    name: 'Nosy Komba',
    location: {
      label: 'Nosy Komba, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nosy%20Komba%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Nord-Ouest',
    category: 'Île',
    summary:
      '« L’île aux lémuriens », petite et paisible, à quelques minutes en bateau de Nosy Be.',
    description: [
      'Nosy Komba se visite facilement en excursion à la journée depuis Nosy Be. Sans voitures ni grandes routes, l’île se parcourt à pied entre village de pêcheurs, réserve de lémuriens macaco en semi-liberté et plages tranquilles. Une parenthèse authentique et accessible.',
    ],
    recommendedDuration: 'Demi-journée à 1 jour',
    en: {
      summary: '“Lemur island”, small and peaceful, a few minutes by boat from Nosy Be.',
      description: [
        'Nosy Komba is easy to visit as a day trip from Nosy Be. With no cars or major roads, the island is explored on foot, between fishing village, free-ranging black-lemur reserve and quiet beaches. An authentic and accessible getaway.',
      ],
      recommendedDuration: 'Half-day to 1 day',
    },
  },
  {
    slug: 'ramena',
    image: 'destination-ramena',
    name: 'Ramena',
    location: {
      label: 'Ramena, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ramena%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Nord',
    category: 'Plage',
    summary:
      'Plage proche de Diego-Suarez, connue pour ses eaux turquoise et son ambiance décontractée.',
    description: [
      "À une courte distance d'Antsiranana, le village de Ramena s'ouvre sur une longue plage de sable bordée d'eaux turquoise. Son ponton, lieu de promenade et de baignade apprécié, donne à la plage son caractère reconnaissable.",
      "L'ambiance y est décontractée : baignades, balades sur le sable, gargotes et vie de village rythmée par la pêche. Une excursion simple et accessible depuis la grande ville du Nord.",
    ],
    highlights: [
      'Le ponton, lieu de promenade et de baignade',
      'Plage de sable et eaux turquoise',
      'Ambiance décontractée du village',
    ],
    en: {
      summary: 'Beach near Diego-Suarez, known for its turquoise waters and laid-back atmosphere.',
      description: [
        'A short distance from Antsiranana, the village of Ramena opens onto a long sandy beach edged with turquoise waters. Its pier, a popular spot for strolling and swimming, gives the beach its recognisable character.',
        'The atmosphere is laid-back: swimming, walks on the sand, food stalls and village life set to the rhythm of fishing. A simple, accessible outing from the North’s main city.',
      ],
      highlights: [
        'The pier, for strolling and swimming',
        'Sandy beach and turquoise waters',
        'Laid-back village atmosphere',
      ],
    },
  },
  {
    slug: 'foulpointe',
    image: 'destination-foulpointe',
    name: 'Foulpointe',
    location: {
      label: 'Foulpointe, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Foulpointe%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Est',
    category: 'Plage',
    summary:
      'Station balnéaire familiale de la côte Est, connue pour son récif protecteur et ses plages bordées de végétation tropicale.',
    description: [
      "Sur la côte Est, Foulpointe (Mahavelona) est une station balnéaire appréciée des familles. Un récif au large protège le rivage et forme des zones de baignade calmes, bordées de cocotiers et de végétation tropicale.",
      "La station se prête aux séjours détente : baignades, promenades sur la plage et découverte des environs, dont le fort de Manda, vestige de l'histoire locale.",
    ],
    highlights: [
      'Baignade abritée derrière le récif',
      'Plages bordées de végétation tropicale',
      'Le fort de Manda, vestige historique',
    ],
    en: {
      summary:
        'Family seaside resort on the East coast, known for its protective reef and beaches fringed with tropical vegetation.',
      description: [
        'On the East coast, Foulpointe (Mahavelona) is a seaside resort popular with families. An offshore reef shelters the shore, forming calm swimming areas fringed with coconut palms and tropical vegetation.',
        'The resort lends itself to relaxing stays: swimming, beach walks and discovering the surroundings, including the Manda fort, a vestige of local history.',
      ],
      highlights: [
        'Sheltered swimming behind the reef',
        'Beaches fringed with tropical vegetation',
        'Manda fort, a historic vestige',
      ],
    },
  },

  {
    slug: 'antsiranana',
    image: 'destination-antsiranana',
    name: 'Antsiranana',
    location: {
      label: 'Antsiranana, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Antsiranana%2C%20Madagascar',
    },
    aliases: ['Diego-Suarez', 'Diego Suarez', 'Diégo-Suarez'],
    country: 'Madagascar',
    region: 'Nord',
    category: 'Ville',
    summary:
      "Grande ville du nord de Madagascar, située autour d'une vaste baie et proche de sites naturels comme la Montagne d'Ambre.",
    description: [
      "Antsiranana, longtemps appelée Diego-Suarez, est la grande ville de l'extrême nord de Madagascar. Elle s'organise autour d'une vaste baie parsemée d'îlots, dont le Pain de Sucre, silhouette emblématique visible depuis le rivage.",
      "Ville portuaire au carrefour des influences, elle sert de point de départ vers les sites naturels voisins : la plage de Ramena et le parc national de la Montagne d'Ambre.",
    ],
    highlights: [
      'La baie et l’îlot du Pain de Sucre',
      'Rues et architecture du centre-ville',
      'Point de départ vers Ramena et la Montagne d’Ambre',
    ],
    en: {
      summary:
        "Major city in northern Madagascar, set around a vast bay and close to natural sites such as Montagne d'Ambre.",
      description: [
        "Antsiranana, long known as Diego-Suarez, is the main city of Madagascar's far north. It is organised around a vast bay dotted with islets, including Sugar Loaf, the emblematic silhouette visible from the shore.",
        'A port city at the crossroads of influences, it serves as a starting point for nearby natural sites: Ramena beach and Montagne d’Ambre national park.',
      ],
      highlights: [
        'The bay and Sugar Loaf islet',
        'Streets and architecture of the city centre',
        'Starting point for Ramena and Montagne d’Ambre',
      ],
    },
  },
  {
    slug: 'toamasina',
    image: 'destination-toamasina',
    name: 'Toamasina',
    location: {
      label: 'Toamasina, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Toamasina%2C%20Madagascar',
    },
    aliases: ['Tamatave'],
    country: 'Madagascar',
    region: 'Est',
    category: 'Ville',
    summary:
      'Principale ville portuaire de Madagascar, connue pour son ambiance côtière, ses marchés et son boulevard maritime.',
    description: [
      "Toamasina, encore souvent appelée Tamatave, est le principal port de Madagascar et la grande ville de la côte Est. Son activité portuaire rythme la vie économique de l'île.",
      "Côté visite, la ville offre une ambiance côtière détendue : boulevards ombragés, front de mer, marchés animés et gastronomie aux saveurs de l'océan Indien.",
    ],
    highlights: [
      'Le port, premier port commercial du pays',
      'Boulevards ombragés et front de mer',
      'Marchés animés de la côte Est',
    ],
    en: {
      summary:
        "Madagascar's main port city, known for its coastal atmosphere, markets and seaside boulevard.",
      description: [
        "Toamasina, still often called Tamatave, is Madagascar's main port and the largest city on the East coast. Its port activity sets the pace of the island's economic life.",
        'For visitors, the city offers a relaxed coastal atmosphere: shaded boulevards, seafront, lively markets and gastronomy with Indian Ocean flavours.',
      ],
      highlights: [
        "The port, the country's leading commercial harbour",
        'Shaded boulevards and seafront',
        'Lively East-coast markets',
      ],
    },
  },
  {
    slug: 'montagne-ambre',
    image: 'destination-montagne-ambre',
    name: "Montagne d'Ambre",
    location: {
      label: "Montagne d'Ambre, Madagascar",
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Montagne%20d%27Ambre%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Nord',
    category: 'Nature',
    summary:
      'Parc naturel du nord de Madagascar, connu pour sa forêt humide, ses cascades, ses lacs et sa biodiversité endémique.',
    description: [
      "Le parc national de la Montagne d'Ambre protège un massif d'origine volcanique recouvert de forêt humide, à proximité d'Antsiranana. Cascades, lacs de cratère et fougères arborescentes composent un paysage verdoyant qui contraste avec les plaines sèches environnantes.",
      "Ses sentiers de découverte permettent d'observer une biodiversité endémique remarquable, dans une forêt où l'eau est omniprésente.",
    ],
    highlights: [
      'Cascades et lacs de cratère',
      'Forêt humide et fougères arborescentes',
      'Sentiers de découverte dans la forêt',
    ],
    en: {
      summary:
        'Nature park in northern Madagascar, known for its rainforest, waterfalls, lakes and endemic biodiversity.',
      description: [
        "Montagne d'Ambre national park protects a volcanic massif covered in rainforest, near Antsiranana. Waterfalls, crater lakes and tree ferns form a lush landscape that contrasts with the surrounding dry plains.",
        'Its discovery trails reveal remarkable endemic biodiversity, in a forest where water is ever-present.',
      ],
      highlights: [
        'Waterfalls and crater lakes',
        'Rainforest and tree ferns',
        'Discovery trails through the forest',
      ],
    },
  },
  {
    slug: 'ankarafantsika',
    image: 'destination-ankarafantsika',
    name: 'Ankarafantsika',
    location: {
      label: 'Ankarafantsika, Madagascar',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Ankarafantsika%20National%20Park%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Nord-Ouest',
    category: 'Nature',
    summary:
      'Parc national du nord-ouest de Madagascar, composé de forêts sèches, de lacs et d’habitats abritant une faune endémique remarquable.',
    description: [
      "Le parc national d'Ankarafantsika protège de vastes forêts sèches caducifoliées, des savanes et plusieurs lacs, dont le lac Ravelobe. C'est l'un des grands espaces naturels de l'ouest malgache.",
      "Le parc abrite une faune endémique remarquable et constitue un site reconnu pour l'observation des oiseaux, entre forêt, zones humides et points de vue sur les lacs.",
    ],
    highlights: [
      'Le lac Ravelobe et ses oiseaux',
      'Forêts sèches caducifoliées',
      'Faune endémique de l’Ouest',
    ],
    en: {
      summary:
        'National park in north-western Madagascar, made up of dry forests, lakes and habitats sheltering remarkable endemic wildlife.',
      description: [
        'Ankarafantsika national park protects vast dry deciduous forests, savannahs and several lakes, including Lake Ravelobe. It is one of the great natural areas of western Madagascar.',
        'The park shelters remarkable endemic wildlife and is a renowned birdwatching site, between forest, wetlands and viewpoints over the lakes.',
      ],
      highlights: [
        'Lake Ravelobe and its birds',
        'Dry deciduous forests',
        'Endemic wildlife of the West',
      ],
    },
  },
  {
    slug: 'nosy-iranja',
    image: 'destination-nosy-iranja',
    name: 'Nosy Iranja',
    location: {
      label: 'Nosy Iranja, Madagascar',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nosy%20Iranja%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Nord-Ouest',
    category: 'Île',
    summary:
      'Archipel connu pour ses deux îlots reliés par un banc de sable visible selon les marées, ainsi que pour ses plages et ses eaux turquoise.',
    description: [
      "Nosy Iranja se compose de deux îlots reliés à marée basse par un long banc de sable blanc, l'un des paysages les plus photogéniques du nord-ouest de Madagascar.",
      "L'archipel offre des plages préservées et des eaux turquoise propices à la baignade et aux balades, dans un cadre insulaire resté paisible.",
    ],
    highlights: [
      'Le banc de sable entre les deux îlots',
      'Plages de sable blanc préservées',
      'Eaux turquoise et baignade',
    ],
    en: {
      summary:
        'Archipelago known for its two islets linked by a sandbank visible with the tides, and for its beaches and turquoise waters.',
      description: [
        'Nosy Iranja consists of two islets linked at low tide by a long white sandbank, one of the most photogenic landscapes of north-western Madagascar.',
        'The archipelago offers unspoilt beaches and turquoise waters ideal for swimming and walks, in a peaceful island setting.',
      ],
      highlights: [
        'The sandbank between the two islets',
        'Unspoilt white-sand beaches',
        'Turquoise waters and swimming',
      ],
    },
  },
  {
    slug: 'nosy-tanikely',
    image: 'destination-nosy-tanikely',
    name: 'Nosy Tanikely',
    location: {
      label: 'Nosy Tanikely, Madagascar',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Nosy%20Tanikely%2C%20Madagascar',
    },
    country: 'Madagascar',
    region: 'Nord-Ouest',
    category: 'Île',
    summary:
      'Petite île protégée proche de Nosy Be, réputée pour ses fonds marins et les activités de snorkeling autour de sa réserve marine.',
    description: [
      "Nosy Tanikely est une petite île située non loin de Nosy Be, classée parc national marin. L'île et les eaux qui l'entourent forment une aire protégée reconnue pour la richesse de ses fonds marins.",
      "Le récif corallien qui borde l'île se découvre en snorkeling, dans des eaux peu profondes adaptées à l'observation. Sur l'île, un sentier mène au phare historique qui domine la végétation.",
    ],
    highlights: [
      'Snorkeling sur le récif corallien',
      'Le phare historique de l’île',
      'Excursion à la journée depuis Nosy Be',
    ],
    en: {
      summary:
        'Small protected island near Nosy Be, renowned for its seabeds and snorkelling around its marine reserve.',
      description: [
        "Nosy Tanikely is a small island not far from Nosy Be, listed as a marine national park. The island and its surrounding waters form a protected area renowned for the richness of its seabeds.",
        'The coral reef edging the island is discovered by snorkelling, in shallow waters suited to observation. On the island, a trail leads to the historic lighthouse overlooking the vegetation.',
      ],
      highlights: [
        'Snorkelling on the coral reef',
        "The island's historic lighthouse",
        'Day trip from Nosy Be',
      ],
    },
  },
]
