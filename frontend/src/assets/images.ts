// ---------------------------------------------------------------------------
// Registre central des images du site.
//
// Chaque entrée associe une clé (utilisée dans `src/data/*.ts` via le champ
// `image`) à un fichier local, un texte alternatif descriptif et le crédit
// photo (auteur + licence + source).
//
// Pour remplacer une image : déposez le nouveau fichier dans
// `src/assets/images/<categorie>/` et mettez à jour uniquement l'import
// et l'entrée correspondante ci-dessous. Aucun composant n'a besoin d'être
// modifié.
//
// Licences :
// - Wikimedia Commons : CC BY / CC BY-SA — attribution obligatoire
//   (affichée en légende discrète sur les pages détail).
// - Unsplash : Unsplash License — utilisation libre, attribution appréciée
//   (conservée ici par courtoisie).
// ---------------------------------------------------------------------------

import andasibe from './images/destinations/andasibe.jpg'
import anakao from './images/destinations/anakao.jpg'
import ankarafantsika from './images/destinations/ankarafantsika.jpg'
import antananarivo from './images/destinations/antananarivo.jpg'
import antsiranana from './images/destinations/antsiranana.jpg'
import antsirabe from './images/destinations/antsirabe.jpg'
import fianarantsoa from './images/destinations/fianarantsoa.jpg'
import foulpointe from './images/destinations/foulpointe.jpg'
import ifaty from './images/destinations/ifaty.jpg'
import isalo from './images/destinations/isalo.jpg'
import montagneAmbre from './images/destinations/montagne-ambre.jpg'
import morondava from './images/destinations/morondava.jpg'
import nosyBe from './images/destinations/nosy-be.jpg'
import nosyIranja from './images/destinations/nosy-iranja.jpg'
import nosyKomba from './images/destinations/nosy-komba.jpg'
import nosyTanikely from './images/destinations/nosy-tanikely.jpg'
import ramena from './images/destinations/ramena.jpg'
import ranomafana from './images/destinations/ranomafana.jpg'
import sainteMarie from './images/destinations/sainte-marie.jpg'
import toamasina from './images/destinations/toamasina.jpg'
import tsingyBemaraha from './images/destinations/tsingy-bemaraha.jpg'
import lagonBleu from './images/hotels/lagon-bleu.jpg'
import pavillonSainteMarie from './images/hotels/pavillon-sainte-marie.jpg'
import relaisBaobabs from './images/hotels/relais-baobabs.jpg'
import villaPlateaux from './images/hotels/villa-plateaux.jpg'
import coucherBaobabs from './images/activities/coucher-de-soleil-baobabs.jpg'
import randonneeAndasibe from './images/activities/randonnee-andasibe.jpg'
import plongeeNosyBe from './images/activities/plongee-nosy-be.jpg'
import baleinesSainteMarie from './images/activities/baleines-sainte-marie.jpg'
import visiteTana from './images/activities/visite-guidee-tana.jpg'
import pirogueIfaty from './images/activities/pirogue-lagon-ifaty.jpg'

export interface ImageEntry {
  src: string
  alt: string
  /** Attribution courte, ex. "Diego Delso, CC BY-SA 4.0, via Wikimedia Commons". */
  credit: string
  /** Page source du fichier (traçabilité de la licence). */
  sourceUrl: string
}

const images: Record<string, ImageEntry> = {
  'destination-nosy-be': {
    src: nosyBe,
    alt: "Plage d'Ampasipohy à Nosy Be : cocotier penché, sable et pirogues",
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Ampasipohy,_Nosy_Be,_Madagascar,_2025-09-21,_DD_17.jpg',
  },
  'destination-morondava': {
    src: morondava,
    alt: "Allée des Baobabs à Morondava au coucher du soleil",
    credit: 'Noah Grossenbacher, Unsplash License, via Unsplash',
    sourceUrl: 'https://unsplash.com/photos/MIwNopNvIGM',
  },
  'destination-antananarivo': {
    src: antananarivo,
    alt: "Lac Anosy et panorama d'Antananarivo, capitale des Hauts-Plateaux",
    credit: 'Sascha Grabow, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Lake_Anosy,_Central_Antananarivo,_Capital_of_Madagascar,_Photo_by_Sascha_Grabow.jpg',
  },
  'destination-andasibe': {
    src: andasibe,
    alt: "Indri dans les arbres de la réserve d'Analamazaotra, près d'Andasibe",
    credit: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indri_(Indri_indri).jpg',
  },
  'destination-sainte-marie': {
    src: sainteMarie,
    alt: "Plage de sable blanc de l'île aux Nattes, Sainte-Marie",
    credit: 'Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Plage_de_l%27ile_aux_Nattes,_Sainte-Marie,_Madagascar.jpg",
  },
  'destination-ifaty': {
    src: ifaty,
    alt: 'Coucher de soleil sur la plage et les pirogues à Ifaty',
    credit: 'Rod Waddington, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Sunset,_Ifaty,_Madagascar_(21796862822).jpg',
  },
  'destination-isalo': {
    src: isalo,
    alt: "Canyons et massif ruiniforme du parc national de l'Isalo",
    credit: 'Moongateclimber, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Isalo_canyons.jpg',
  },
  'destination-tsingy-bemaraha': {
    src: tsingyBemaraha,
    alt: 'Pics calcaires acérés des Tsingy de Bemaraha',
    credit: 'Cactus0625, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Relief_karstique,_Tsingy_de_Bemaraha,_Madagascar.jpg',
  },
  'destination-ranomafana': {
    src: ranomafana,
    alt: 'Rivière Namorona au cœur de la forêt humide de Ranomafana',
    credit: 'Smiley.toerist, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Namorona_River_in_Ranomafana_National_Park_2013_1.jpg',
  },
  'destination-antsirabe': {
    src: antsirabe,
    alt: 'Rue principale d’Antsirabe avec pousse-pousse colorés',
    credit: 'Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Antsirabe_-_rue_principale02.JPG',
  },
  'destination-anakao': {
    src: anakao,
    alt: 'Lagon turquoise, pirogue et paillotes sur la plage d’Anakao',
    credit: 'Marie Salichon, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anakao_South_of_Madagascar.jpg',
  },
  'destination-nosy-komba': {
    src: nosyKomba,
    alt: 'Village de pêcheurs, pirogue et cocotiers sur la plage de Nosy Komba',
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Nosy_Komba,_Madagascar,_2025-09-12,_DD_48.jpg',
  },
  'destination-ramena': {
    src: ramena,
    alt: 'Plage de Ramena : ponton, sable et baigneurs face à la mer',
    credit: 'Chirocca77, CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Plage_de_Ramena_Antsiranana_Madagascar_01.jpg',
  },
  'destination-foulpointe': {
    src: foulpointe,
    alt: 'Plage de Foulpointe : eau turquoise, pirogues et cocotiers',
    credit: 'Souvaroff, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Foulpointe.jpg',
  },
  'destination-fianarantsoa': {
    src: fianarantsoa,
    alt: 'Vieille ville de Fianarantsoa sur sa colline, églises et maisons anciennes',
    credit: 'HoneyGaLe, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Vue_globale_de_la_ville_Fianarantsoa_2.jpg',
  },
  'destination-antsiranana': {
    src: antsiranana,
    alt: "L'îlot du Pain de Sucre dans la baie de Diego-Suarez, près d'Antsiranana",
    credit: 'AngeN, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Le_pain_de_sucre_dans_la_baie_de_Diego_Suarez,_Madagascar.JPG',
  },
  'destination-toamasina': {
    src: toamasina,
    alt: 'Boulevard Labourdonnais à Toamasina, bordé de flamboyants en fleurs',
    credit: 'Privatemajory, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Boulevard_Labourdonnais_Toamasina.jpg',
  },
  'destination-montagne-ambre': {
    src: montagneAmbre,
    alt: "Cascade entourée de forêt humide dans le parc national de la Montagne d'Ambre",
    credit: 'LETCHY06, CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Cascade_%C3%A0_Montagne_d%E2%80%99ambre_Antsiranana.jpg',
  },
  'destination-ankarafantsika': {
    src: ankarafantsika,
    alt: "Lac Ravelobe bordé de forêt dans le parc national d'Ankarafantsika",
    credit: 'Botaurus, CC BY 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Lake_Ravelobe,_Ankarafantsika_National_Park,_Madagascar.jpg',
  },
  'destination-nosy-iranja': {
    src: nosyIranja,
    alt: 'Plage de sable blanc, pirogues et eau turquoise à Nosy Iranja',
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Nosy_Iranja,_Madagascar,_2025-09-17,_DD_19.jpg',
  },
  'destination-nosy-tanikely': {
    src: nosyTanikely,
    alt: 'Phare historique de Nosy Tanikely au milieu de la végétation',
    credit: 'Hiroki Ogawa, CC BY 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Lighthouse_Nosy_Tanikely_Madagascar_-_panoramio.jpg',
  },
  'hotel-lagon-bleu': {
    src: lagonBleu,
    alt: "Vue aérienne d'un lodge de plage entre forêt et lagon turquoise, dans le nord-ouest de Madagascar",
    credit: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Anjajavy_Le_Lodge,_Madagascar.jpg',
  },
  'hotel-relais-baobabs': {
    src: relaisBaobabs,
    alt: "Lodge aux toits de chaume au bord de l'eau, sur la côte de Morondava",
    credit: 'Rudolphfurtado, CC BY 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Luxury_resort_along_Morondava_Fishing_village_coastline.jpg',
  },
  'hotel-villa-plateaux': {
    src: villaPlateaux,
    alt: "Bungalows d'une maison d'hôtes au pied des collines, à Miandrivazo sur les Hauts-Plateaux",
    credit: 'Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lakana_Hotel_02.jpg',
  },
  'hotel-pavillon-sainte-marie': {
    src: pavillonSainteMarie,
    alt: "Piscine à débordement face à l'océan, palmiers et paillotes à Sainte-Marie",
    credit: 'Antony Stanley, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Princess_Bora_Lodge,_%C3%8Ele_Sainte-Marie_(3958615912).jpg',
  },
  'activity-coucher-baobabs': {
    src: coucherBaobabs,
    alt: "Silhouettes des baobabs de l'Allée des Baobabs au coucher du soleil, près de Morondava",
    credit: 'Zigomar, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Baobabs_Avenue_Sunset_1.jpg',
  },
  'activity-randonnee-andasibe': {
    src: randonneeAndasibe,
    alt: "Forêt humide et plan d'eau dans le parc national d'Andasibe-Mantadia",
    credit: 'Lodewicus de Honsvels, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Ansicht_Nationalpark_Andasibe-Mantadia_in_Madagaskar.jpg',
  },
  'activity-plongee-nosy-be': {
    src: plongeeNosyBe,
    alt: "Poisson-clown endémique dans son anémone, eaux de l'archipel de Nosy Be",
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Pez_payaso_de_Madagascar_(Amphiprion_latifasciatus),_Nosy_Sakatia,_Madagascar,_2025-09-18,_DD_34.jpg',
  },
  'activity-baleines-sainte-marie': {
    src: baleinesSainteMarie,
    alt: 'Baleine à bosse en saut hors de l’eau au large de Sainte-Marie',
    credit: 'Sturm, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Baleine_%C3%A0_bosse,_Sainte_Marie,_Madagascar_(25980295042).jpg',
  },
  'activity-visite-tana': {
    src: visiteTana,
    alt: "Palais de la Reine (Rova de Manjakamiadana) sur les hauteurs d'Antananarivo",
    credit: 'Peacekeeper44, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Rova_Manjakamiadana_Palais_de_la_Reine.jpg',
  },
  'activity-pirogue-ifaty': {
    src: pirogueIfaty,
    alt: 'Plage de Mangily près d’Ifaty : cocotiers, paillotes et embarcation face au lagon',
    credit: 'Bgag, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ifaty_beach_Madagascar.jpg',
  },
  // Entrées distantes (Wikimedia Commons, vignettes 1280 px sauf mention) :
  // `src` est ici une URL https vérifiée, sans import local. Crédits et
  // pages sources vérifiés via l’API Commons avant intégration.
  'activity-grenouille-ranomafana': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Madagascar_bright-eyed_frog_%28Boophis_madagascariensis%29_juvenile_Ranomafana.jpg/1280px-Madagascar_bright-eyed_frog_%28Boophis_madagascariensis%29_juvenile_Ranomafana.jpg',
    alt: 'Grenouille aux yeux brillants (Boophis madagascariensis) dans le parc de Ranomafana',
    credit: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Madagascar_bright-eyed_frog_%28Boophis_madagascariensis%29_juvenile_Ranomafana.jpg',
  },
  'activity-vue-nosy-komba': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/View_Nosy_Komba_from_Nosy_Tanikely_Madagascar_-_panoramio.jpg/1280px-View_Nosy_Komba_from_Nosy_Tanikely_Madagascar_-_panoramio.jpg',
    alt: 'Vue de Nosy Komba depuis Nosy Tanikely',
    credit: 'Hiroki Ogawa, CC BY 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:View_Nosy_Komba_from_Nosy_Tanikely_Madagascar_-_panoramio.jpg',
  },
  'activity-mangrove-ramena': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Mangrove_au_bord_de_la_mer_sur_la_route_de_Ramena_Antsiranana_Il_%28Ala_Honko_%C3%A0_Pasira_%29_02.jpg/1280px-Mangrove_au_bord_de_la_mer_sur_la_route_de_Ramena_Antsiranana_Il_%28Ala_Honko_%C3%A0_Pasira_%29_02.jpg',
    alt: 'Mangroves plantées au bord de la mer sur la route de Ramena',
    credit: 'Sishan2405, CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Mangrove_au_bord_de_la_mer_sur_la_route_de_Ramena_Antsiranana_Il_%28Ala_Honko_%C3%A0_Pasira_%29_02.jpg',
  },
  'activity-fort-manda': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Fort_Manda_Foulpointe%2C_Madagascar.jpg/1280px-Fort_Manda_Foulpointe%2C_Madagascar.jpg',
    alt: 'Fort Manda à Foulpointe, fort historique du XIXe siècle',
    credit: 'Mika Andrianoelison, CC BY 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Fort_Manda_Foulpointe%2C_Madagascar.jpg',
  },
  'activity-chapelle-fianarantsoa': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/SALT_Ivory_Avaratra-_Fianarantsoa.jpg/1280px-SALT_Ivory_Avaratra-_Fianarantsoa.jpg',
    alt: 'Chapelle à Fianarantsoa (Ivory Avaratra)',
    credit: 'Pastafb, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:SALT_Ivory_Avaratra-_Fianarantsoa.jpg',
  },
  'activity-baie-montagne-francais': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Vue_panoramique_de_Diego-Suarez_du_haut_des_Montagnes_des_Fran%C3%A7ais_%2885022%29.jpg/1280px-Vue_panoramique_de_Diego-Suarez_du_haut_des_Montagnes_des_Fran%C3%A7ais_%2885022%29.jpg',
    alt: 'Vue panoramique de Diego-Suarez depuis la Montagne des Français',
    credit: 'IrmaA2, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Vue_panoramique_de_Diego-Suarez_du_haut_des_Montagnes_des_Fran%C3%A7ais_%2885022%29.jpg',
  },
  'activity-port-toamasina': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Port_Toamasina_Madagascar.jpg',
    alt: 'Port de Toamasina',
    credit: 'JialiangGao, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Port_Toamasina_Madagascar.jpg',
  },
  'activity-cameleon-ambre': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Amber_Mountain_chameleon_%28Calumma_amber%29_male_Montagne_d%27Ambre.jpg/1280px-Amber_Mountain_chameleon_%28Calumma_amber%29_male_Montagne_d%27Ambre.jpg',
    alt: 'Caméléon de la Montagne d’Ambre (Calumma amber), mâle',
    credit: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Amber_Mountain_chameleon_%28Calumma_amber%29_male_Montagne_d%27Ambre.jpg',
  },
  'activity-lac-ravelobe': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Lake_Ravelobe%2C_Ankarafantsika_National_Park%2C_Madagascar_%284467382692%29.jpg/1280px-Lake_Ravelobe%2C_Ankarafantsika_National_Park%2C_Madagascar_%284467382692%29.jpg',
    alt: 'Lac Ravelobe dans le parc national d’Ankarafantsika',
    credit: 'Frank Vassen, CC BY 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Lake_Ravelobe%2C_Ankarafantsika_National_Park%2C_Madagascar_%284467382692%29.jpg',
  },
  'activity-corail-iranja': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Coral_%28Acropora_clathrata%29%2C_Nosy_Iranja%2C_Madagascar%2C_2025-09-17%2C_DD_53.jpg/1280px-Coral_%28Acropora_clathrata%29%2C_Nosy_Iranja%2C_Madagascar%2C_2025-09-17%2C_DD_53.jpg',
    alt: 'Corail (Acropora clathrata) à Nosy Iranja',
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Coral_%28Acropora_clathrata%29%2C_Nosy_Iranja%2C_Madagascar%2C_2025-09-17%2C_DD_53.jpg',
  },
  'activity-poisson-tanikely': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/L%C3%A1brido_%28Anampses_meleagrides%29%2C_Nosy_Tanikely%2C_Madagascar%2C_2025-09-19%2C_DD_97.jpg/1280px-L%C3%A1brido_%28Anampses_meleagrides%29%2C_Nosy_Tanikely%2C_Madagascar%2C_2025-09-19%2C_DD_97.jpg',
    alt: 'Labre (Anampses meleagrides) à Nosy Tanikely',
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:L%C3%A1brido_%28Anampses_meleagrides%29%2C_Nosy_Tanikely%2C_Madagascar%2C_2025-09-19%2C_DD_97.jpg',
  },
  'activity-lac-tritriva': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Lake_Tritriva_01.jpg/1280px-Lake_Tritriva_01.jpg',
    alt: 'Lac Tritriva près d’Antsirabe',
    credit: 'Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lake_Tritriva_01.jpg',
  },
  'activity-tsingy-rouge': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Tsingy_Rouges_Madagascar_-_panoramio_%281%29.jpg/1280px-Tsingy_Rouges_Madagascar_-_panoramio_%281%29.jpg',
    alt: 'Tsingy Rouges près d’Antsiranana',
    credit: 'Hiroki Ogawa, CC BY 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Tsingy_Rouges_Madagascar_-_panoramio_%281%29.jpg',
  },
  'activity-pirogues-manambolo': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Pirogues%2C_Bekopaka%2C_rivi%C3%A8re_Manambola%2C_Madagascar_%2826031588936%29.jpg/1280px-Pirogues%2C_Bekopaka%2C_rivi%C3%A8re_Manambola%2C_Madagascar_%2826031588936%29.jpg',
    alt: 'Pirogues à Bekopaka sur la rivière Manambolo',
    credit: 'krishna naudin, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Pirogues%2C_Bekopaka%2C_rivi%C3%A8re_Manambola%2C_Madagascar_%2826031588936%29.jpg',
  },
  'activity-lemurien-komba': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/L%C3%A9mur_negro_%28Eulemur_macaco%29%2C_Nosy_Komba%2C_Madagascar%2C_2025-09-12%2C_DD_15.jpg/1280px-L%C3%A9mur_negro_%28Eulemur_macaco%29%2C_Nosy_Komba%2C_Madagascar%2C_2025-09-12%2C_DD_15.jpg',
    alt: 'Lémur noir (Eulemur macaco) à Nosy Komba',
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:L%C3%A9mur_negro_%28Eulemur_macaco%29%2C_Nosy_Komba%2C_Madagascar%2C_2025-09-12%2C_DD_15.jpg',
  },
  'activity-pangalanes': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Madagascar._canal_des_pangalanes._Habitation_traditionnelle.jpg/1280px-Madagascar._canal_des_pangalanes._Habitation_traditionnelle.jpg',
    alt: 'Habitation traditionnelle sur le canal des Pangalanes',
    credit: 'Andopascalou, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Madagascar._canal_des_pangalanes._Habitation_traditionnelle.jpg',
  },
  'activity-train-fce': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/TRAIN_FIANA_MANAKARA.jpg',
    alt: 'Voiture du train FCE entre Fianarantsoa et Manakara',
    credit: 'Ph. Sagnardon, CC BY 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:TRAIN_FIANA_MANAKARA.jpg',
  },
  'activity-islote-nosy-ve': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Islote_de_Nosy_Ve_Madagascar_20171106_110245.jpg/1280px-Islote_de_Nosy_Ve_Madagascar_20171106_110245.jpg',
    alt: 'Îlot de Nosy Ve face à Anakao',
    credit: 'Josefito123, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Islote_de_Nosy_Ve_Madagascar_20171106_110245.jpg',
  },
  'hotel-thermes-antsirabe': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Antsirabe_-_H%C3%B4tel_des_Thermes_-_front.jpg/1280px-Antsirabe_-_H%C3%B4tel_des_Thermes_-_front.jpg',
    alt: 'Façade de l’Hôtel des Thermes à Antsirabe',
    credit: 'Hardscarf, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Antsirabe_-_H%C3%B4tel_des_Thermes_-_front.jpg',
  },
  'activity-piscine-isalo': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/IsaloSwimmingPool.jpg/1280px-IsaloSwimmingPool.jpg',
    alt: 'Piscine naturelle dans le parc national de l’Isalo',
    credit: 'Zigomar, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:IsaloSwimmingPool.jpg',
  },
  'activity-lemuriens-isalo': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Isalo_National_park_2013_19.jpg/1280px-Isalo_National_park_2013_19.jpg',
    alt: 'Lémuriens dans le parc national de l’Isalo',
    credit: 'Smiley.toerist, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Isalo_National_park_2013_19.jpg',
  },
  'activity-petits-tsingy': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Petit_Tsingy%2C_Morondava%2C_Madagascar.jpg/1280px-Petit_Tsingy%2C_Morondava%2C_Madagascar.jpg',
    alt: 'Formations des Petits Tsingy',
    credit: 'Cactus0625, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Petit_Tsingy%2C_Morondava%2C_Madagascar.jpg',
  },
  'activity-vezo-peche': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Vezo_%C3%A0_la_p%C3%AAche.JPG/1280px-Vezo_%C3%A0_la_p%C3%AAche.JPG',
    alt: 'Pêcheurs vezo sur une pirogue traditionnelle',
    credit: 'Boosha Afrikaf, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Vezo_%C3%A0_la_p%C3%AAche.JPG',
  },
  'activity-mer-emeraude': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Mer_d%27emeraude%2C_Madagascar_%2825803285040%29.jpg/1280px-Mer_d%27emeraude%2C_Madagascar_%2825803285040%29.jpg',
    alt: 'Lagon turquoise de la Mer d’Émeraude',
    credit: 'krishna naudin, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Mer_d%27emeraude%2C_Madagascar_%2825803285040%29.jpg',
  },
  'activity-marche-toamasina': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Toamasina%27s_market_%2827431793023%29.jpg/1280px-Toamasina%27s_market_%2827431793023%29.jpg',
    alt: 'Marché de Toamasina et ses étals',
    credit: 'Cédric Liénart, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Toamasina%27s_market_%2827431793023%29.jpg',
  },
  'activity-microcebe-ankarafantsika': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Microcebus_ravelobensis_173025710.jpg',
    alt: 'Microcèbe roux (Microcebus ravelobensis), lémurien nocturne',
    credit: 'novvictan, CC BY 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Microcebus_ravelobensis_173025710.jpg',
  },
  // Images TEMPORAIRES (Picsum, génériques) : en attente de photos réelles
  // vérifiables. Mention honnête exigée : ni auteur, ni licence, ni ancrage
  // géographique inventés. À remplacer au prochain stage.
  'activity-thermes-ranomafana': {
    src: 'https://picsum.photos/seed/thermes-ranomafana/800/600',
    alt: 'Illustration temporaire des sources thermales de Ranomafana',
    credit: 'Image temporaire — Picsum',
    sourceUrl: 'https://picsum.photos/',
  },
  'activity-artisanat-antsirabe': {
    src: 'https://picsum.photos/seed/artisanat-antsirabe/800/600',
    alt: 'Illustration temporaire de l’artisanat d’Antsirabe',
    credit: 'Image temporaire — Picsum',
    sourceUrl: 'https://picsum.photos/',
  },
  'activity-snorkeling-anakao': {
    src: 'https://picsum.photos/seed/snorkeling-anakao/800/600',
    alt: 'Illustration temporaire du snorkeling à Anakao',
    credit: 'Image temporaire — Picsum',
    sourceUrl: 'https://picsum.photos/',
  },
  'activity-vignobles-fianarantsoa': {
    src: 'https://picsum.photos/seed/vignobles-fianarantsoa/800/600',
    alt: 'Illustration temporaire des vignobles de Fianarantsoa',
    credit: 'Image temporaire — Picsum',
    sourceUrl: 'https://picsum.photos/',
  },
  'activity-parc-ivoloina': {
    src: 'https://picsum.photos/seed/parc-ivoloina/800/600',
    alt: 'Illustration temporaire du parc d’Ivoloina',
    credit: 'Image temporaire — Picsum',
    sourceUrl: 'https://picsum.photos/',
  },
  'activity-lacs-ambre': {
    src: 'https://picsum.photos/seed/lacs-cratere-ambre/800/600',
    alt: 'Illustration temporaire des lacs de cratère de la Montagne d’Ambre',
    credit: 'Image temporaire — Picsum',
    sourceUrl: 'https://picsum.photos/',
  },
  'activity-village-phare-iranja': {
    src: 'https://picsum.photos/seed/village-phare-iranja/800/600',
    alt: 'Illustration temporaire du village et du phare de Nosy Iranja',
    credit: 'Image temporaire — Picsum',
    sourceUrl: 'https://picsum.photos/',
  },
  // Hôtels — photos VÉRIFIÉES (Wikimedia Commons, 1280 px sauf mention) :
  // `src` est ici une URL https vérifiée (HTTP 200 + image). Crédits,
  // pages sources et licences vérifiés via l’API Commons avant intégration.
  // 3 photos montrent réellement l’établissement nommé ; les 36 autres sont
  // des photos d’illustration honnêtes (l’établissement photographié est
  // nommé dans le crédit). Badge « Photo d’illustration » actif partout.
  'hotel-placeholder-jardin-du-roy': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/H%C3%B4tel_Jardin_du_Roy_et_Jacaranda%2C_Isalo.jpg/1280px-H%C3%B4tel_Jardin_du_Roy_et_Jacaranda%2C_Isalo.jpg',
    alt: "Le Jardin du Roy à Isalo — bungalows et jacarandas en fleurs de l'établissement",
    credit: 'Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:H%C3%B4tel_Jardin_du_Roy_et_Jacaranda,_Isalo.jpg',
  },
  'hotel-placeholder-isalo-rock-lodge': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Sarova_Lion_Hill_Lodge.jpg/1280px-Sarova_Lion_Hill_Lodge.jpg',
    alt: 'Photo d’illustration — chambres d’un lodge avec patio face au lac (Sarova Lion Hill Lodge, Kenya)',
    credit:
      'Photo d’illustration — Sarova Lion Hill Lodge · John Hickey-Fry, CC BY 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sarova_Lion_Hill_Lodge.jpg',
  },
  'hotel-placeholder-chez-alice': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/H%C3%B4tel_Jardin_du_Roy.jpg/1280px-H%C3%B4tel_Jardin_du_Roy.jpg',
    alt: 'Photo d’illustration — hôtel au village de Ranohira, près de l’Isalo (Hôtel Jardin du Roy)',
    credit:
      'Photo d’illustration — Hôtel Jardin du Roy, Isalo · Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:H%C3%B4tel_Jardin_du_Roy.jpg',
  },
  'hotel-placeholder-soleil-des-tsingy': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Kimony_Resort%2C_Morondava_%2C_Madagascar.jpg/1280px-Kimony_Resort%2C_Morondava_%2C_Madagascar.jpg',
    alt: 'Photo d’illustration — resort et piscine à Morondava, sur la côte Ouest (Kimony Resort)',
    credit:
      'Photo d’illustration — Kimony Resort, Morondava · Cactus0625, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Kimony_Resort,_Morondava_,_Madagascar.jpg',
  },
  'hotel-placeholder-olympe-du-bemaraha': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/New_parc_resort_de_Mahajanga.jpg/1280px-New_parc_resort_de_Mahajanga.jpg',
    alt: 'Photo d’illustration — resort à Mahajanga, sur la côte Nord-Ouest (New Parc Resort)',
    credit: 'Photo d’illustration — New Parc Resort, Mahajanga · Quinze2001, CC0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:New_parc_resort_de_Mahajanga.jpg',
  },
  'hotel-placeholder-setam-lodge': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Bungalow_%C3%A0_Masoala.jpg/1280px-Bungalow_%C3%A0_Masoala.jpg',
    alt: 'Photo d’illustration — bungalow entouré d’arbres à Masoala, dans l’Est forestier',
    credit: 'Photo d’illustration — bungalow à Masoala · Mendel264, CC0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bungalow_%C3%A0_Masoala.jpg',
  },
  'hotel-placeholder-thermal-ranomafana': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/H%C3%B4tel_Thermal_de_Ranomafana.jpg/1280px-H%C3%B4tel_Thermal_de_Ranomafana.jpg',
    alt: 'Hôtel Thermal de Ranomafana — façade de l’établissement près du parc national',
    credit: 'Harena61, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:H%C3%B4tel_Thermal_de_Ranomafana.jpg',
  },
  'hotel-placeholder-trianon': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/H%C3%B4tel_des_Thermes_Antsirabe_II.jpg/1280px-H%C3%B4tel_des_Thermes_Antsirabe_II.jpg',
    alt: 'Photo d’illustration — terrasse de l’Hôtel des Thermes à Antsirabe',
    credit:
      'Photo d’illustration — Hôtel des Thermes, Antsirabe · Smiley.toerist, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:H%C3%B4tel_des_Thermes_Antsirabe_II.jpg',
  },
  'hotel-placeholder-anakao-ocean-lodge': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort%2C_Koh_Lipe_Island_01.jpg/1280px-Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort%2C_Koh_Lipe_Island_01.jpg',
    alt: 'Photo d’illustration — resort de plage et bungalows face au lagon (Koh Lipe Beach Resort, Thaïlande)',
    credit: 'Photo d’illustration — Koh Lipe Beach Resort · CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort,_Koh_Lipe_Island_01.jpg',
  },
  'hotel-placeholder-longo-vezo': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort%2C_Koh_Lipe_Island_02.jpg/1280px-Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort%2C_Koh_Lipe_Island_02.jpg',
    alt: 'Photo d’illustration — bungalows dans un jardin face à la mer (Koh Lipe Beach Resort, Thaïlande)',
    credit: 'Photo d’illustration — Koh Lipe Beach Resort · CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort,_Koh_Lipe_Island_02.jpg',
  },
  'hotel-placeholder-prince-anakao': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Bungalow_on_the_Beach%2C_Neemrana_Hotels%2C_in_Tranquebar%2C_Tamil_Nadu.jpg',
    alt: 'Photo d’illustration — bungalow historique face à la mer (The Bungalow on the Beach, Tranquebar, Inde)',
    credit:
      'Photo d’illustration — The Bungalow on the Beach · Koshy Koshy, CC BY 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Bungalow_on_the_Beach,_Neemrana_Hotels,_in_Tranquebar,_Tamil_Nadu.jpg',
  },
  'hotel-placeholder-jardin-vanille': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Nosy_Komba_Hotel.jpg/1280px-Nosy_Komba_Hotel.jpg',
    alt: 'Photo d’illustration — hôtel entre plage et forêt à Nosy Komba (Nosy Komba Hotel)',
    credit:
      'Photo d’illustration — Nosy Komba Hotel · VisitingMadagascar, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nosy_Komba_Hotel.jpg',
  },
  'hotel-placeholder-tsara-komba': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Bungalow_near_fort_Aguada_-_panoramio.jpg/1280px-Bungalow_near_fort_Aguada_-_panoramio.jpg',
    alt: 'Photo d’illustration — bungalow tropical près du fort d’Aguada (Goa, Inde)',
    credit:
      'Photo d’illustration — bungalow près du fort d’Aguada · Deepak Patil, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bungalow_near_fort_Aguada_-_panoramio.jpg',
  },
  'hotel-placeholder-case-falafy': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/La_Myra_hotel_de_Madiorano.jpg/1280px-La_Myra_hotel_de_Madiorano.jpg',
    alt: 'Photo d’illustration — hôtel dans le Nord de Madagascar (La Myra, Madiorano)',
    credit:
      'Photo d’illustration — La Myra, Madiorano · Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:La_Myra_hotel_de_Madiorano.jpg',
  },
  'hotel-placeholder-lakana-ramena': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Lakana_Hotel_01.jpg/1280px-Lakana_Hotel_01.jpg',
    alt: 'Photo d’illustration — Lakana Hotel à Miandrivazo, sur les Hauts-Plateaux',
    credit:
      'Photo d’illustration — Lakana Hotel, Miandrivazo · Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lakana_Hotel_01.jpg',
  },
  'hotel-placeholder-manda-beach': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Bungallow_Manda_beach.jpg/1280px-Bungallow_Manda_beach.jpg',
    alt: 'Manda Beach Hôtel à Foulpointe — bungalow de l’établissement',
    credit: 'Hlovaarivelo, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bungallow_Manda_beach.jpg',
  },
  'hotel-placeholder-lagon-foulpointe': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Hotel_de_la_poste_Antsiranana_%28ancien%29.jpg/1280px-Hotel_de_la_poste_Antsiranana_%28ancien%29.jpg',
    alt: 'Photo d’illustration — hôtel de ville dans le Nord malgache (Hôtel de la Poste, Antsiranana)',
    credit:
      'Photo d’illustration — Hôtel de la Poste, Antsiranana · Chirocca77, CC BY 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_de_la_poste_Antsiranana_(ancien).jpg',
  },
  'hotel-placeholder-zomatel': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/AmbositraGrandHotel.jpg/1280px-AmbositraGrandHotel.jpg',
    alt: 'Photo d’illustration — grand hôtel d’architecture coloniale à Ambositra, sur les Hauts-Plateaux',
    credit:
      'Photo d’illustration — Grand Hôtel, Ambositra · Torbenbrinker, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:AmbositraGrandHotel.jpg',
  },
  'hotel-placeholder-tsara-guest-house': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Hotel_Le_Pavillon_de_l%27Emyrne.jpg/1280px-Hotel_Le_Pavillon_de_l%27Emyrne.jpg',
    alt: 'Photo d’illustration — maison d’hôtes à Antananarivo (Hôtel Le Pavillon de l’Emyrne)',
    credit:
      'Photo d’illustration — Le Pavillon de l’Emyrne, Antananarivo · VisitingMadagascar, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_Le_Pavillon_de_l%27Emyrne.jpg',
  },
  'hotel-placeholder-soafia': {    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Swimming_pool_and_main_building_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg/1280px-Swimming_pool_and_main_building_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg',
    alt: 'Photo d’illustration — piscine et bâtiment principal d’un hôtel avec restaurant (Amantaka, Luang Prabang, Laos)',
    credit:
      'Photo d’illustration — Amantaka Resort · Basile Morin, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Swimming_pool_and_main_building_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg',
  },
  'hotel-placeholder-pietra': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Antsirabe_-_h%C3%B4tel_des_Thermes.JPG/1280px-Antsirabe_-_h%C3%B4tel_des_Thermes.JPG',
    alt: 'Photo d’illustration — hôtel de ville sur les Hauts-Plateaux (Hôtel des Thermes, Antsirabe)',
    credit:
      'Photo d’illustration — Hôtel des Thermes, Antsirabe · Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Antsirabe_-_h%C3%B4tel_des_Thermes.JPG',
  },
  'hotel-placeholder-grand-diego': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/H%C3%B4tel_Le_Victoria_Diego-Suarez_Madagascar.jpg/1280px-H%C3%B4tel_Le_Victoria_Diego-Suarez_Madagascar.jpg',
    alt: 'Photo d’illustration — Hôtel Le Victoria à Diego-Suarez (Antsiranana)',
    credit: 'Photo d’illustration — Hôtel Le Victoria, Diego-Suarez · Chirocca77, CC0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:H%C3%B4tel_Le_Victoria_Diego-Suarez_Madagascar.jpg',
  },
  'hotel-placeholder-allamanda': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Swimming_pool_and_terrasse_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg/1280px-Swimming_pool_and_terrasse_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg',
    alt: 'Photo d’illustration — piscine et terrasse d’un hôtel (Amantaka, Luang Prabang, Laos)',
    credit:
      'Photo d’illustration — Amantaka Resort · Basile Morin, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Swimming_pool_and_terrasse_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg',
  },
  'hotel-placeholder-belle-aventure': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/A_Hotel_in_Accra.jpg/1280px-A_Hotel_in_Accra.jpg',
    alt: 'Photo d’illustration — hôtel de ville (Accra, Ghana)',
    credit: 'Photo d’illustration — hôtel à Accra · Gkbediako, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:A_Hotel_in_Accra.jpg',
  },
  'hotel-placeholder-calypso': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Swimming_pool_of_Khan_Pool_Suite_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg/1280px-Swimming_pool_of_Khan_Pool_Suite_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg',
    alt: 'Photo d’illustration — piscine privée d’une suite d’hôtel avec espace bien-être (Amantaka, Luang Prabang, Laos)',
    credit:
      'Photo d’illustration — Amantaka Resort · Basile Morin, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Swimming_pool_of_Khan_Pool_Suite_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg',
  },
  'hotel-placeholder-neptune': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Tanjona_Menabe_Hotel_in_Andakabe_locality_of_Morondava.jpg/1280px-Tanjona_Menabe_Hotel_in_Andakabe_locality_of_Morondava.jpg',
    alt: 'Photo d’illustration — grand hôtel à Morondava (Tanjona Menabe Hotel)',
    credit:
      'Photo d’illustration — Tanjona Menabe Hotel, Morondava · Rudolphfurtado, CC BY 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Tanjona_Menabe_Hotel_in_Andakabe_locality_of_Morondava.jpg',
  },
  'hotel-placeholder-sharon': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/The_Ibis_Styles_Hotel_in_Westlands_Nairobi.jpg',
    alt: 'Photo d’illustration — hôtel de ville moderne (Ibis Styles, Nairobi, Kenya)',
    credit:
      'Photo d’illustration — Ibis Styles, Nairobi · Blancos khim, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Ibis_Styles_Hotel_in_Westlands_Nairobi.jpg',
  },
  'hotel-placeholder-nature-lodge': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Village_d%27Ampasindava_%28h%C3%B4tel%29.jpg/1280px-Village_d%27Ampasindava_%28h%C3%B4tel%29.jpg',
    alt: 'Photo d’illustration — hôtel de village dans l’extrême Nord de Madagascar (Ampasindava)',
    credit:
      'Photo d’illustration — hôtel du village d’Ampasindava · Soa.joe.P, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Village_d%27Ampasindava_(h%C3%B4tel).jpg',
  },
  'hotel-placeholder-fontenay': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Maison_principale_du_Lac_H%C3%B4tel.JPG/1280px-Maison_principale_du_Lac_H%C3%B4tel.JPG',
    alt: 'Photo d’illustration — maison principale d’un lac-hôtel (Lac Hôtel)',
    credit: 'Photo d’illustration — Lac Hôtel · Grnhp, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Maison_principale_du_Lac_H%C3%B4tel.JPG',
  },
  'hotel-placeholder-blue-vanga': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Ankify_Lodge_%28Dauphin_Bleu%29_Madagascar.jpg/1280px-Ankify_Lodge_%28Dauphin_Bleu%29_Madagascar.jpg',
    alt: 'Photo d’illustration — lodge dans une maison coloniale au bout de la presqu’île d’Ankify, dans le Nord-Ouest (Dauphin Bleu)',
    credit:
      'Photo d’illustration — Ankify Lodge (Dauphin Bleu) · Rvdb2, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ankify_Lodge_(Dauphin_Bleu)_Madagascar.jpg',
  },
  'hotel-placeholder-ampijoroa': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Bungalows_la_salamandre_%C3%A0_foulpointe.JPG/1280px-Bungalows_la_salamandre_%C3%A0_foulpointe.JPG',
    alt: 'Photo d’illustration — bungalows pour séjours moyenne ou longue durée (Bungalows La Salamandre, Foulpointe)',
    credit:
      'Photo d’illustration — Bungalows La Salamandre, Foulpointe · Hafidhou, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bungalows_la_salamandre_%C3%A0_foulpointe.JPG',
  },
  'hotel-placeholder-iranja-lodge': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Negombo_Beach_resort_pool_%28Unsplash%29.jpg/1280px-Negombo_Beach_resort_pool_%28Unsplash%29.jpg',
    alt: 'Photo d’illustration — piscine d’un resort en bord de mer (Negombo, Sri Lanka)',
    credit: 'Photo d’illustration — resort à Negombo · Recal Media, CC0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Negombo_Beach_resort_pool_(Unsplash).jpg',
  },
  'hotel-placeholder-vakona-forest-lodge': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/H%C3%B4tel_Jardin_du_Roy%2C_Isalo.jpg/1280px-H%C3%B4tel_Jardin_du_Roy%2C_Isalo.jpg',
    alt: 'Photo d’illustration — lodge à Isalo (Hôtel Jardin du Roy)',
    credit:
      'Photo d’illustration — Hôtel Jardin du Roy, Isalo · Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:H%C3%B4tel_Jardin_du_Roy,_Isalo.jpg',
  },
  'hotel-placeholder-mantadia-lodge': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Swimming_pool_at_Hotel_Terra_Barichara.jpg/1280px-Swimming_pool_at_Hotel_Terra_Barichara.jpg',
    alt: 'Photo d’illustration — piscine d’un hôtel entourée de bâtiments (Hotel Terra Barichara, Colombie)',
    credit:
      'Photo d’illustration — Hotel Terra Barichara · Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Swimming_pool_at_Hotel_Terra_Barichara.jpg',
  },
  'hotel-placeholder-eulophiella-lodge': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Hotel_Restaurant_Kimony_Resort%2C_Morondava%2C_Madagascar.jpg/1280px-Hotel_Restaurant_Kimony_Resort%2C_Morondava%2C_Madagascar.jpg',
    alt: 'Photo d’illustration — restaurant d’un hôtel à Morondava (Kimony Resort)',
    credit:
      'Photo d’illustration — Kimony Resort, Morondava · Cactus0625, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Hotel_Restaurant_Kimony_Resort,_Morondava,_Madagascar.jpg',
  },
  'hotel-placeholder-andasibe-hotel': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Hotel_in_Antananarivo.jpg/1280px-Hotel_in_Antananarivo.jpg',
    alt: 'Photo d’illustration — hôtel dans la capitale malgache (Antananarivo)',
    credit: 'Photo d’illustration — hôtel à Antananarivo · Lukys, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_in_Antananarivo.jpg',
  },
  'hotel-placeholder-ifaty-beach-club': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Beach_Ifaty_swimming_pool.jpg/1280px-Beach_Ifaty_swimming_pool.jpg',
    alt: 'Photo d’illustration — piscine près de la plage à Ifaty (Bamboo Club)',
    credit:
      'Photo d’illustration — piscine du Bamboo Club, Ifaty · Smiley.toerist, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beach_Ifaty_swimming_pool.jpg',
  },
  'hotel-placeholder-bamboo-club-ifaty': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Beach_Ifaty_I.jpg/1280px-Beach_Ifaty_I.jpg',
    alt: 'La plage vue depuis le Bamboo Club à Ifaty — photo prise sur place',
    credit: 'Smiley.toerist, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beach_Ifaty_I.jpg',
  },
  'hotel-placeholder-paradisier-ifaty': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort%2C_Koh_Lipe_Island_04.jpg/1280px-Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort%2C_Koh_Lipe_Island_04.jpg',
    alt: 'Photo d’illustration — resort de plage et cocotiers (Koh Lipe Beach Resort, Thaïlande)',
    credit: 'Photo d’illustration — Koh Lipe Beach Resort · CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort,_Koh_Lipe_Island_04.jpg',
  },
  'hotel-placeholder-fenetre-sur-ifaty': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort%2C_Koh_Lipe_Island_05.jpg/1280px-Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort%2C_Koh_Lipe_Island_05.jpg',
    alt: 'Photo d’illustration — bungalows face au lagon turquoise (Koh Lipe Beach Resort, Thaïlande)',
    credit: 'Photo d’illustration — Koh Lipe Beach Resort · CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Koh_Lipe_Thailand._Koh_Lipe_Beach_Resort,_Koh_Lipe_Island_05.jpg',
  },
  // Photos SUPPLÉMENTAIRES d’hébergement (stage galerie : minimum 3 photos
  // différentes par destination avec hébergement). Même convention : URLs
  // https vérifiées (HTTP 200 + image/jpeg), crédits et pages sources
  // vérifiés via l’API Commons. Toutes sont des photos d’illustration
  // honnêtes (l’établissement photographié est nommé dans le crédit),
  // sauf mention contraire. Clés explicites par destination.
  'hotel-extra-nosy-be-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Tsarabanjina_Resort.jpg/1280px-Tsarabanjina_Resort.jpg',
    alt: 'Photo d’illustration — resort insulaire dans l’archipel des Mitsio, au large de Nosy Be (Tsarabanjina Resort)',
    credit:
      'Photo d’illustration — Tsarabanjina Resort · VisitingMadagascar, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tsarabanjina_Resort.jpg',
  },
  'hotel-extra-nosy-be-2': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Tsarabanjina_Resort_-_4251482844.jpg/1280px-Tsarabanjina_Resort_-_4251482844.jpg',
    alt: 'Photo d’illustration — hébergement du Tsarabanjina Resort, dans l’archipel des Mitsio (Nord-Ouest)',
    credit:
      'Photo d’illustration — Tsarabanjina Resort · VisitingMadagascar, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tsarabanjina_Resort_-_4251482844.jpg',
  },
  'hotel-extra-morondava-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/MADA_HOTEL%2CMajunga-Madagascar.jpg/1280px-MADA_HOTEL%2CMajunga-Madagascar.jpg',
    alt: 'Photo d’illustration — hôtel sur la côte Ouest malgache (Mada Hôtel, Mahajanga)',
    credit:
      'Photo d’illustration — Mada Hôtel, Mahajanga · Fleur28, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:MADA_HOTEL,Majunga-Madagascar.jpg',
  },
  'hotel-extra-morondava-2': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/H%C3%B4tel-restaurant_Le_Relais_de_la_haute_ville%2C_Antananarivo%2C_janvier_2023.jpg/1280px-H%C3%B4tel-restaurant_Le_Relais_de_la_haute_ville%2C_Antananarivo%2C_janvier_2023.jpg',
    alt: 'Photo d’illustration — hôtel-restaurant aux toits de tuiles (Le Relais de la haute ville, Antananarivo)',
    credit:
      'Photo d’illustration — Le Relais de la haute ville, Antananarivo · Artvill, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:H%C3%B4tel-restaurant_Le_Relais_de_la_haute_ville,_Antananarivo,_janvier_2023.jpg',
  },
  'hotel-extra-antananarivo-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Hilton_Hotel_Antananarivo_-_8604196258.jpg/1280px-Hilton_Hotel_Antananarivo_-_8604196258.jpg',
    alt: 'Hôtel Hilton à Antananarivo — vue de l’établissement',
    credit: 'sussexbirder, CC BY 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hilton_Hotel_Antananarivo_-_8604196258.jpg',
  },
  'hotel-extra-antananarivo-2': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Le_Relais_Normand_hotel_in_Downtown_Antananarivo.jpg/1280px-Le_Relais_Normand_hotel_in_Downtown_Antananarivo.jpg',
    alt: 'Hôtel Le Relais Normand dans le centre d’Antananarivo — façade de l’établissement',
    credit: 'Rudolphfurtado, CC BY 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Le_Relais_Normand_hotel_in_Downtown_Antananarivo.jpg',
  },
  'hotel-extra-sainte-marie-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Hotel_%C3%A0_Masoala_village.jpg/1280px-Hotel_%C3%A0_Masoala_village.jpg',
    alt: 'Photo d’illustration — bungalows d’un petit hôtel de village côtier (Cap Masoala, Nord-Est)',
    credit: 'Photo d’illustration — hôtel à Masoala · Mendel264, CC0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_%C3%A0_Masoala_village.jpg',
  },
  'hotel-extra-sainte-marie-2': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Hotel_Centrest_Ranomafana.jpg/1280px-Hotel_Centrest_Ranomafana.jpg',
    alt: 'Photo d’illustration — accueil d’un hôtel en lisière de parc national (Hôtel Centrest, Ranomafana)',
    credit:
      'Photo d’illustration — Hôtel Centrest, Ranomafana · Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_Centrest_Ranomafana.jpg',
  },
  'hotel-extra-tsingy-bemaraha-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Bungalow_de_l%27Hotel_Centrest_Ranomafana.jpg/1280px-Bungalow_de_l%27Hotel_Centrest_Ranomafana.jpg',
    alt: 'Photo d’illustration — bungalow d’un hôtel en lisière de parc national (Hôtel Centrest, Ranomafana)',
    credit:
      'Photo d’illustration — Hôtel Centrest, Ranomafana · Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Bungalow_de_l%27Hotel_Centrest_Ranomafana.jpg',
  },
  'hotel-extra-ranomafana-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Hotel_Domaine_Nature%2C_Ranomafana.jpg/1280px-Hotel_Domaine_Nature%2C_Ranomafana.jpg',
    alt: 'Photo d’illustration — balcon d’une chambre face à la forêt (Domaine Nature, Ranomafana)',
    credit:
      'Photo d’illustration — Domaine Nature, Ranomafana · sussexbirder, CC BY 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_Domaine_Nature,_Ranomafana.jpg',
  },
  'hotel-extra-antsirabe-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/AntsirabeHotelDesThermes1a.jpg/1280px-AntsirabeHotelDesThermes1a.jpg',
    alt: 'Hôtel des Thermes à Antsirabe — autre vue de l’établissement',
    credit: 'Torbenbrinker, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:AntsirabeHotelDesThermes1a.jpg',
  },
  'hotel-extra-nosy-komba-1': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Traditional_bungalow_and_garden_Vohimana_Madagascar.jpg',
    alt: 'Photo d’illustration — bungalow traditionnel au toit de chaume entouré de verdure (réserve de Vohimana)',
    credit: 'Photo d’illustration — bungalow à Vohimana · Mammysou17, CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Traditional_bungalow_and_garden_Vohimana_Madagascar.jpg',
  },
  'hotel-extra-ramena-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Hotel_Vahombe_-_panoramio.jpg/1280px-Hotel_Vahombe_-_panoramio.jpg',
    alt: 'Photo d’illustration — hôtel côtier dans le Sud malgache (Hôtel Vahombe, Ambola)',
    credit: 'Photo d’illustration — Hôtel Vahombe, Ambola · CC BY 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_Vahombe_-_panoramio.jpg',
  },
  'hotel-extra-foulpointe-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Bungalows_la_Salamandre.jpg/1280px-Bungalows_la_Salamandre.jpg',
    alt: 'Photo d’illustration — bungalows pour séjours à Foulpointe (Bungalows La Salamandre)',
    credit:
      'Photo d’illustration — Bungalows La Salamandre, Foulpointe · hafidhou, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bungalows_la_Salamandre.jpg',
  },
  'hotel-extra-montagne-ambre-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Eco-lodge_structures_Vohimana_Reserve_Madagascar.jpg/1280px-Eco-lodge_structures_Vohimana_Reserve_Madagascar.jpg',
    alt: 'Photo d’illustration — bungalows d’un écolodge en forêt (réserve de Vohimana)',
    credit: 'Photo d’illustration — écolodge de Vohimana · Mammysou17, CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Eco-lodge_structures_Vohimana_Reserve_Madagascar.jpg',
  },
  'hotel-extra-ankarafantsika-1': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Bungalow_ao_amin%27ny_valan-javaboaharin%27i_Vohimana.jpg',
    alt: 'Photo d’illustration — bungalow écologique dans une réserve de biodiversité (Vohimana)',
    credit: 'Photo d’illustration — bungalow à Vohimana · Mammysou17, CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Bungalow_ao_amin%27ny_valan-javaboaharin%27i_Vohimana.jpg',
  },
  'hotel-extra-nosy-iranja-1': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Tsarabanjina_Resort_-_4250711183.jpg/1280px-Tsarabanjina_Resort_-_4250711183.jpg',
    alt: 'Photo d’illustration — hébergement d’un resort sur îlot du Nord-Ouest (Tsarabanjina Resort)',
    credit:
      'Photo d’illustration — Tsarabanjina Resort · VisitingMadagascar, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tsarabanjina_Resort_-_4250711183.jpg',
  },
  'hotel-extra-nosy-iranja-2': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Le_Hintsy_h%C3%B4tel_de_l%27ikopa_01.jpg',
    alt: 'Photo d’illustration — bungalows dans le parc d’un hôtel (Le Hintsy, Alasora)',
    credit:
      'Photo d’illustration — Le Hintsy, Alasora · Hariniaina14, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Le_Hintsy_h%C3%B4tel_de_l%27ikopa_01.jpg',
  },
  // Photos des NOUVEAUX HÔTELS (stage 5.4 : minimum 3 hébergements réels
  // par destination). Photos réelles de l’établissement nommé quand
  // disponible sur Commons, sinon illustration honnête (établissement
  // photographié nommé dans le crédit). URLs, crédits et pages sources
  // vérifiés via l’API Commons avant intégration.
  'hotel-vanila-spa': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Ambatoloaka_%283186851947%29.jpg/1280px-Ambatoloaka_%283186851947%29.jpg',
    alt: 'Photo d’illustration — bungalows en bord de mer à Ambatoloaka, Nosy Be',
    credit:
      'Photo d’illustration — bungalows à Ambatoloaka, Nosy Be · mwanasimba, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ambatoloaka_(3186851947).jpg',
  },
  'hotel-royal-andilana': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Ideal_Beach_Resort_Pool_Mahabalipuram_Sep22_R16_06310.jpg/1280px-Ideal_Beach_Resort_Pool_Mahabalipuram_Sep22_R16_06310.jpg',
    alt: 'Photo d’illustration — piscine d’un resort en bord de mer (Ideal Beach Resort, Mahabalipuram, Inde)',
    credit:
      'Photo d’illustration — Ideal Beach Resort, Mahabalipuram · Timothy A. Gonsalves, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Ideal_Beach_Resort_Pool_Mahabalipuram_Sep22_R16_06310.jpg',
  },
  'hotel-kimony-resort': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Hotel_Restaurant_Kimony_Resort%2C_Morondava%2C_Madagascar.jpg/1280px-Hotel_Restaurant_Kimony_Resort%2C_Morondava%2C_Madagascar.jpg',
    alt: 'Kimony Resort à Morondava — restaurant de l’établissement',
    credit: 'Kimony Resort, Morondava · Cactus0625, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Hotel_Restaurant_Kimony_Resort,_Morondava,_Madagascar.jpg',
  },
  'hotel-palissandre-morondava': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Swimming_pool%2C_Hotel_Pal%C3%A9tuviers_Tul%C3%A9ar.jpg/1280px-Swimming_pool%2C_Hotel_Pal%C3%A9tuviers_Tul%C3%A9ar.jpg',
    alt: 'Photo d’illustration — piscine d’un hôtel sur la côte Sud-Ouest (Hôtel Les Palétuviers, Tuléar)',
    credit:
      'Photo d’illustration — Hôtel Les Palétuviers, Tuléar · Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Swimming_pool,_Hotel_Pal%C3%A9tuviers_Tul%C3%A9ar.jpg',
  },
  'hotel-carlton-tana': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Hilton_Hotel_Antananarivo_-_8603097193.jpg/1280px-Hilton_Hotel_Antananarivo_-_8603097193.jpg',
    alt: 'Photo d’illustration — grand hôtel à Antananarivo (Hilton)',
    credit: 'Photo d’illustration — Hilton, Antananarivo · sussexbirder, CC BY 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hilton_Hotel_Antananarivo_-_8603097193.jpg',
  },
  'hotel-palissandre-tana': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Hotel_Le_Pavillon_de_l%27Emyrne_-_4250691417.jpg/1280px-Hotel_Le_Pavillon_de_l%27Emyrne_-_4250691417.jpg',
    alt: 'Photo d’illustration — maison d’hôtes à Antananarivo (Le Pavillon de l’Emyrne)',
    credit:
      'Photo d’illustration — Le Pavillon de l’Emyrne, Antananarivo · VisitingMadagascar, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Hotel_Le_Pavillon_de_l%27Emyrne_-_4250691417.jpg',
  },
  'hotel-princesse-bora': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Princesse_Bora.jpg/1280px-Princesse_Bora.jpg',
    alt: 'Princesse Bora Lodge & Spa à Sainte-Marie — vue de l’établissement',
    credit: 'Princesse Bora, Sainte-Marie · Bluerose25, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Princesse_Bora.jpg',
  },
  'hotel-la-crique': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Ambatoloaka_%283186851509%29.jpg/1280px-Ambatoloaka_%283186851509%29.jpg',
    alt: 'Photo d’illustration — bungalow en bord de mer sous les cocotiers (Ambatoloaka, Nosy Be)',
    credit:
      'Photo d’illustration — bungalow à Ambatoloaka, Nosy Be · mwanasimba, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ambatoloaka_(3186851509).jpg',
  },
  'hotel-orchidee-bemaraha': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Jardin_du_Roy%2C_Isalo_%2844240%29.jpg/1280px-Jardin_du_Roy%2C_Isalo_%2844240%29.jpg',
    alt: 'Photo d’illustration — lodge dans un cadre minéral de l’Ouest (Hôtel Jardin du Roy, Isalo)',
    credit:
      'Photo d’illustration — Hôtel Jardin du Roy, Isalo · Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jardin_du_Roy,_Isalo_(44240).jpg',
  },
  'hotel-domaine-nature': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Hotel_Domaine_Nature%2CRanomafana_-_8604173754.jpg/1280px-Hotel_Domaine_Nature%2CRanomafana_-_8604173754.jpg',
    alt: 'Domaine Nature à Ranomafana — entrée de l’établissement',
    credit: 'Domaine Nature, Ranomafana · sussexbirder, CC BY 2.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_Domaine_Nature,Ranomafana_-_8604173754.jpg',
  },
  'hotel-arotel': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Skye_blue_h%C3%B4tel_et_espace_%C3%A0_Alasora.jpg',
    alt: 'Photo d’illustration — hôtel avec piscine et jardin sur les Hauts-Plateaux (Skye Blue, Alasora)',
    credit:
      'Photo d’illustration — Skye Blue, Alasora · Hariniaina14, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Skye_blue_h%C3%B4tel_et_espace_%C3%A0_Alasora.jpg',
  },
  'hotel-nosy-komba-lodge': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Bord_du_lac_Itasy_%C3%A0_Madagascar.jpg',
    alt: 'Photo d’illustration — bungalows au toit de chaume dans un site touristique (lac Itasy)',
    credit:
      'Photo d’illustration — bungalows au lac Itasy · Hariniaina14, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bord_du_lac_Itasy_%C3%A0_Madagascar.jpg',
  },
  'hotel-ramena-nofy': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Le_Grand_h%C3%B4tel_02.jpg/1280px-Le_Grand_h%C3%B4tel_02.jpg',
    alt: 'Photo d’illustration — grand hôtel dans le Nord malgache (Grand Hôtel, Antsiranana)',
    credit: 'Photo d’illustration — Grand Hôtel, Antsiranana · Jogopla, CC0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Le_Grand_h%C3%B4tel_02.jpg',
  },
  'hotel-ixora': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Hotel_Ixora_Foulpointe.JPG/1280px-Hotel_Ixora_Foulpointe.JPG',
    alt: 'Hôtel Ixora à Foulpointe — vue de l’établissement',
    credit: 'Hôtel Ixora, Foulpointe · Rasfrench, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_Ixora_Foulpointe.JPG',
  },
  'hotel-ambre-nature': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/H%C3%B4tel_Castel_d%27_Anjozorobe_1.jpg',
    alt: 'Photo d’illustration — complexe hôtelier avec piscine et bungalows à la campagne (Castel, Anjozorobe)',
    credit:
      'Photo d’illustration — Castel, Anjozorobe · Geoleval, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:H%C3%B4tel_Castel_d%27_Anjozorobe_1.jpg',
  },
  'hotel-tia-asity': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Jardin_du_Roy%2C_Isalo_%2819649%29.jpg/960px-Jardin_du_Roy%2C_Isalo_%2819649%29.jpg',
    alt: 'Photo d’illustration — lodge dans un cadre sec de l’Ouest (Hôtel Jardin du Roy, Isalo)',
    credit:
      'Photo d’illustration — Hôtel Jardin du Roy, Isalo · Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jardin_du_Roy,_Isalo_(19649).jpg',
  },
  'hotel-zahir-iranja': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Beach_Ifaty_table.jpg/1280px-Beach_Ifaty_table.jpg',
    alt: 'Photo d’illustration — terrasse d’un lodge face au lagon (Bamboo Club, Ifaty)',
    credit:
      'Photo d’illustration — terrasse du Bamboo Club, Ifaty · Smiley.toerist, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beach_Ifaty_table.jpg',
  },
}

export function resolveImage(key?: string): string | undefined {
  if (!key) return undefined
  return images[key]?.src
}

export function resolveImageAlt(key?: string): string | undefined {
  if (!key) return undefined
  return images[key]?.alt
}

export function resolveImageCredit(key?: string): string | undefined {
  if (!key) return undefined
  return images[key]?.credit
}

export interface ImageCreditEntry extends ImageEntry {
  key: string
}

// Liste de toutes les images référencées, pour la page des crédits photos.
// Ne modifie ni les crédits ni les sources : simple lecture du registre.
export function listImages(): ImageCreditEntry[] {
  return Object.entries(images).map(([key, entry]) => ({ key, ...entry }))
}
