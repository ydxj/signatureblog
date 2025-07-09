import { ImInstagram } from "react-icons/im"
import {FastService,TransfertAeroport,TransfertInterville,camelTour,chauffeur,fesTanneries,hassanII,koutoubia,menara,miseDispo} from "../../Assets/assets"
import { FaFacebook } from "react-icons/fa"

function Home(){
    const Produits = [
        {
            title:"Circuit de 9 jours au départ de Casablanca",
            price: 8612,
            image:hassanII,
            details:"Ce circuit de 9 jours au départ de Casablanca devrait découvrir plus de 70% des différences marocaines les plus connues. Ce voyage part de la plus grande ville marocaine vers Rabat, la capitale administrative du pays. Ensuite, vers la ville impériale du Maroc, c'est-à-dire Fès. \n Votre voyage vous mènera ensuite dans le désert à couper le souffle de Merzouga. Plongez dans la culture et la splendeur naturelle du désert. Alors que le soleil se couche sur les dunes dorées de l'Erg Chebbi, observez comment les Bédouins ont traversé le désert pendant des siècles. Au camp, savourez un bon dîner tout en écoutant un spectacle de tambours berbères traditionnels. Vous remonterez votre chameau à Merzouga après avoir passé la nuit sous le ciel étoilé du désert.\nEnfin, vous arriverez à Marrakech, la ville rouge. Sans visiter cette ville, assurément, l'une des villes les plus belles et les plus fascinantes du pays,",
            pointsForts:[
                "Montez à dos de chameau et campez dans le désert",
                "Découvrez Chefchaouen, une ville à la façade bleue.",
                "En savoir plus sur les vestiges romains de Volubilis.",
                "Nourrir et photographier des singes sauvages.",
                "Explorez Fès, la plus ancienne ville du monde encore en vie.",
                "Découvrez les fascinants souks et marchés du Maroc.",
                "Explorez Marrakech et visitez Jamaa El Fna."
            ],
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Pack: 9,
            Circuits:[
                "Arrivée à Casablanca",
                "Casablanca - Rabat - Meknès - Fès",
                "Explorer Fès",
                "Fès-Ifrane-Midelt-Merzouga",
                "Explorer Merzouga",
                "Mergouga-Gorges du Todra-Vallée du Dadès",
                "Vallée du Dadès - Ouarzazate - Ait Ben-Haddou - Marrakech",
                "Visite de Marrakech",
                "Transfert à l'aéroport"
            ],
            Inclus:[
                "Chauffeur/guide multilingue",
                "éhicule tout confort 4×4/minibus climatisé",
                "Prise en charge et retour à l'aéroport / hôtel / riad",
                "Carburant et stationnement",
                "Guides locaux",
                "Billets d'entrée aux monuments et musées",
            ],
            Exclus:[
                "Dépenses personnelles",
                "Hôtels & hébergements",
                "Billets d'avion et visa"
            ]
        },
        {
            title:"Circuit de 7 jours de Casablanca à Marrakech",
            price: 5500,
            image:menara,
            details:"Ce circuit de 7 jours de Casablanca à Marrakech comprend tous les sites les plus emblématiques du pays. Voyagez en véhicule privé confortable entre les villes et profitez de visites guidées de sites clés tels que la mosquée Hassan II, la médina de Fès el Bali, classée au patrimoine mondial de l'UNESCO, et Ait Benhaddou. Avec un guide local expert à vos côtés, découvrez la culture et l'histoire marocaines tout en explorant certains des endroits les plus fascinants du pays. En chemin, profitez de beaucoup de temps pour vous détendre et vous imprégner de l'atmosphère unique de ce beau pays",
            pointsForts:[
                "Trekk chameaux et camp dans le désert",
                "Promenez-vous dans la rue étroite de Fès",
                "Explorez la médina de Marrakech et visitez Jamaa El Fna",
                "Découvrez les marchés exotiques et les souks du Maroc",
                "Balade dans la ville bleue de Chefchaouen",
                "Explorez les ruines romaines de Volubilis et Meknès",
            ],
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Pack: 7,
            Circuits:[
                "Casablanca to Chefchaouen (338 km)",
                "Free Day to Explore Chefchaouen",
                "Chefchaouen to Fes via Volubilis & Meknes (277 km)",
                "Fes Sightseeing Tour",
                "Fes to Merzouga via Ifrane, Azrou & Midelt (470km)",
                "Sahara Desert to Todra Gorge and Dades Valley",
                "Dades Valley to Marrakech via Ait Benhaddou (325km)"
            ],
            Inclus:[
                "Chauffeur/guide multilingue",
                "éhicule tout confort 4×4/minibus climatisé",
                "Prise en charge et retour à l'aéroport / hôtel / riad",
                "Carburant et stationnement",
                "Guides locaux",
                "Billets d'entrée aux monuments et musées",
            ],
            Exclus:[
                "Dépenses personnelles",
                "Hôtels & hébergements",
                "Billets d'avion et visa"
            ]
        },
        {
            title:"TRANSFERT AEROPORT",
            price: 350,
            image:chauffeur,
            details:"Les meilleures offres et avec un prix moins cher. Réservez alors votre Transfert Aéroport ou Transfert depuis l'aéroport vers autre ville, notre Agence de Transport Touristique mis à votre disposition ses meilleurs services tous pour votre satisfaction.\nVotre véhicule est privé et climatisé. Vous n’aurez pas à partager avec quelqu’un d’autre. Vous rencontrerez notre chauffeur juste à l’extérieur de l’Aéroport, où il tiendra une pancarte portant votre nom.\nNos chauffeurs parlent Arabe ,Anglais, Français",
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Circuits:["Aéroport Casablanca Vers Hôtel / Toutes les villes du Maroc"]
        },
        {
            title:"TRANSFERT INTER-VILLE",
            price: 1800,
            image:TransfertInterville,
            details:"Pour tout transfert inter-ville partout au Maroc. Signature Tours & Trip met à votre disposition un minivan avec chauffeur expérimenté qui vous accompagnera dans votre voyage.\nVoyagez sereinement avec un Chauffeur Privé : pas de compteur qui tourne, aucun supplément de tarif et n’attendez plus votre tour dans la file des Taxis.\nVous arrivez à l’aéroport? Un chauffeur vous attend avec une pancarte nominative à la sortie douane et nous portons vos valises jusqu’au véhicule.\nVous allez à l’aéroport? Programmez l’arrivée d’un chauffeur chez vous ou dans votre hôtel.",
            materiel:"51% cotton / 43% polyester / 6% elastane",
        },
        {
            title:"MISE À DISPOSITION",
            price: 1800,
            image:miseDispo,
            details:"Nous proposons un Service de mise à disposition complet\nBesoin d’une voiture de tourisme avec chauffeur à l’heure ou à la journée? Nous proposons la solution adaptée à vos attentes\n\nPour vos déplacements professionnels : Congrés, Évènements ou diner d’affaires..\nPour vos déplacements personnels : Diner, Soirées, Shopping ou un rendez-vous chez le médecin..\nUne visite touristique\nÉvènements exceptionnels : Mariages, Anniversaires, Réceptions..\nPour toutes ces occasions, nous mettons à disposition un Chauffeur VTC avec une Berline ou Van de standing, avec tout les équipements nécessaires à bord pour rendre votre trajet agréable.",
            miseaDisposition:[
                "Un forfait kilométrique (20km/h)",
                "Une Berline ou Van haut de gamme",
                "Un chauffeur expérimenté",
                "Un accueil personnalisé et le transport de vos bagages",
                "Le carburant, les péages ainsi que les assurances"
            ],
            NB:"Le prix est variable selon la prestation du service le jour / Nuit"
        },
        {
            title:"FAST SERVICE AEROPORT",
            price: 1550,
            image:FastService,
            details:"Pour votre arrivée, un agent vous est dédié et vous assiste dans toutes vos formalités aéroportuaires (Enregistrement, douanes, détaxe, Salon VIP…) en vous assurant un passage prioritaire aux services immigration.\n\nAccueil du passager selon la position de l'avion :\nSi l’avion est accosté, votre agent vous attendra à la sortie de la passerelle avec un panneau signalétique portant votre nom.\nSi l’avion est sur le tarmac, votre agent vous attendra à l'entrée du terminal (dès que vous descendez du bus) avec un panneau signalétique portant votre nom.\nPassage en priorité par un circuit dédié pour les formalités de l’immigration.\nAccompagnement du passager à la zone de collecte des bagages. Nous mettons à votre disposition, si vous le souhaitez, un véhicule avec chauffeur pour votre transfert depuis l’aéroport.",
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Circuits:[
                "Aéroport vers Hôtel"
            ],
        },
        {
            title:"Circuits 4 jours dans le désert de Marrakech à Fès",
            price: 3487,
            image:fesTanneries,
            details:"L'excursion de 4 jours dans le désert de Marrakech à Fès est l'une des meilleures excursions dans le désert de Marrakech que l'opérateur Signature Tours & Trip organise. Nous recommandons cette visite car il y a tellement de choses à voir et à faire en plus d'une balade à dos de chameau et d'une nuit dans le camp du désert de Merzouga.\n\n4 jours suffisent pour explorer le désert du Sahara et se rendre à Fès. Boire une tasse de thé, Profiter des sites des dunes de l'Erg Chebbi, rencontrer des nomades vivant dans des grottes… De plus, vous pourrez randonner dans les gorges du Todra et la vallée du Dadès.",
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Pack: 4,
            Circuits:[
                "Excursion d'une journée de Marrakech à Ait Ben Haddou et aux gorges du Dadès",
                "Excursion d'une journée des gorges du Dadès à l'Erg Chebbi et au désert de Merzouga",
                "Tour du désert de Merzouga et balade à dos de chameau",
                "Tour du désert de Merzouga à Fès",
            ],
            Inclus:[
                "Chauffeur/guide multilingue",
                "éhicule tout confort 4×4/minibus climatisé",
                "Prise en charge et retour à l'aéroport / hôtel / riad",
                "Carburant et stationnement",
                "Guides locaux",
                "Billets d'entrée aux monuments et musées",
            ],
            Exclus:[
                "Dépenses personnelles",
                "Hôtels & hébergements",
                "Billets d'avion et visa"
            ]
        }
    ]
    return(
        <>
            <div>
                {/* header */}
                <div>
                    <h1>SIGNATURE TOURS & TRIP</h1>
                    {/* menu */}
                    <ul>
                        <li>Acceuil</li>
                        <li>Nos Services</li>
                        <li>Nos vehicules</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* Hero section */}
                <div>
                    <h4>CONFIEZ A NOTRE EQUIPE DE PROFESSIONNELS TOUS VOS DEPLACEMENTS. AFIN D'OBTENIR UN DEVIS, N'HESITEZ PAS A CONTACTER NOTRE EQUIPE COMMERCIALE QUI VOUS REPONDRA DANS LES DELAIS LES PLUS BREFS.</h4>
                    <h5>BIENVENUE CHEZ VOTRE EXPERT DANS LE DOMAINE TOURISTIQUE AU MAROC !</h5>
                    <p>SIGNATURE TOURS & TRIP, le leader dans le secteur du transport touristique à Casablanca et partout au Maroc, Grace à sa longue expérience et son expertise, il est à votre disposition pour tous vos besoins de mobilité, entreprises, agences de voyages et particuliers.</p>
                </div>
                <img src={chauffeur} />
                <p>RÉSERVEZ VOTRE CHAUFFEUR A CASABLANCA AÉROPORT EN 2 MINUTES</p>
                <p>Notre Agence de transport touristique  SIGNATURE TOURS & TRIP à Casablanca mis à votre disposition ses véhicules confortables et climatisés pour réaliser votre Transfert Marrakech ou d'autres destinations et plusieurs formules d’Activités, Circuits et Excursions Maroc pour que vous puissiez découvrir les beaux sites et paysages et vivre le charme du tourisme au sud du Maroc.</p>
                <p>SIGNATURE TOURS & TRIP est spécialiste  de notre Agence de Transport Touristique située à Casablanca et très connue dans le marché du Transport Touristique dans la ville rouge.</p>
                <p>Service de qualité, Location de Minibus, 4×4 mis à votre disposition et des véhicules climatisés de bonne état et des chauffeurs de haut niveau pour vos Excursions, Circuits et Navettes et vers toutes les destinations du Royaume.</p>
                <h3>BOUTIQUE</h3>
                <div>
                    <div>
                        <img src={camelTour}/>
                        <p>CIRCUITS</p>
                    </div>
                    <div>
                        <img src={koutoubia}/>
                        <p>Visite de ville</p>
                    </div>
                </div>
                <h1>Produits phares</h1>
                {Produits.map((e)=><div>
                    <img src={e.image}/>
                    <p>{e.title}</p>
                    <p>{e.price}</p>
                </div>)}

                <form >
                    Formulaire de réservation :
Nom complet *
Numéro de téléphone *
 -
E-mail *
prénom@gmail.com
Nombre de personnes *
0
up arrow
down arrow
Lieu d'arrivée *
Date et heure d'arrivée *
09/07/2025

22
 :
20
Lieu départ *
Date de départ *

Veuillez sélectionner un jour

Veuillez sélectionner un mois

Veuillez sélectionner une année
Transport depuis l'aéroport ou le train ? *

Arrivée aéroport

Départ aéroport

Mise à disposition

Excursion touristique

Circuits

Autres
Numéro de vol
Demandes spéciales
Conditions Générales de Vente L'établissement se réserve le droit de refuser votre réservation dans le cas où les organismes officiels accrédités ne valideraient pas votre numéro de Carte Bancaire.

La réservation est considérée comme ferme et définitive à compter de la confirmation par Email envoyé . Cette réservation est garantie par votre numéro de carte bancaire. Les arrivées se font de 15h à 00h, les départs à tous moments . Les tarifs du service indiqués sur la réservation sont susceptibles d'être modifiés par l'établissement en fonction la disponibilite. Le paiement du séjour et des prestations annexes est effectué directement à l'établissement, aux conditions que ce dernier exerce dans son établissement.La réservation est garantie aux tarifs et aux conditions indiquées pour cette période. Ces tarifs et conditions sont susceptibles de ne pas être reconduits pour des réservations ultérieures. L'accès à la connexion wifi fait l'objet d'un supplément de prix.

Conditions d'annulation. Une réservation peut être annulée au minimum 96 heures à l'avance. Un délai inférieur à 96 heures ou une réservation non annulée, où le client ne se serait pas présenté, donnerait lieu à la facturation du service au tarif indiqué sur la réservation.

 <button>Je reserve!</button>
                </form>
                {/*Footer */}
                <div>
                    <ImInstagram/>
                    <FaFacebook/>
                </div>
            </div>
        </>
    )
}

export default Home