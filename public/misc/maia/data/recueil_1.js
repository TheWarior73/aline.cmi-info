import { createRecueil } from "../src/creationRecueil.js"

const recueil = {
    "title" : "Mon chibre dans toute sa splendeur",
    "year" : "2024",
    "author": "Maia",
    "poems": [
        {
            "author": "Maia",
            "title": "Mon Chibre",
            "date": "12/04/2024",
            "content":
            `
                La migraine me frappe,
                Tel un ouragan.
                La migraine me frappe,
                La chaleur fit chaud,
                La sueur coula.
                Mes envies de meurtres s'achevèrent.
                Ma tête tel les eaux de moïse.
                Tel l'Huile et le Vinaigre.
                Je suis bouleversée_ Refoulée
                Per________due.
                _____________________ et
                Consumée.
                La fièvre, la voila.
            `
        },
        {
            "author": "Maia",
            "title": "Pamplemousse, tel est la question",
            "date": "12/04/2024",
            "content":
            `
                Sacrebleu et sac-à-merde!
                Un pamplemousse dans ta kékette,
                A-É-I-O-U :
                Les voyelles que j'ai conçue.
                De sueur et de prouesse
                Ma splendeur est ma faiblesse
                Doliprane est mon ennemi,
                Le mojito est ma vie.
                Mais hélas ma fin me guette
                Encore; Un pamplemousse dans ta kékette.
                Fin.
            `
        },
        {
            "author": "Maia",
            "title": "Titre",
            "date": "29/04/2024",
            "note": "Les 3 premiers vers ne sont pas voulu par l'autrice, la scribe les a tout de même retranscrits. ",
            "content":
            `
                Ma meh mablblblbl-
                Non, J'ai dit non-
                Aller on reprends,

                Mes mains, les maçons de la libertée
                Mon chibre, le symbole de la muerte.
                Tout ce qui se roule se fume
                Tout ce qui se mord se hume.
                Tel une perle rare; mon chibre,
                Il s'exprime, il est libre,
                Tel un oiseau volant,
                Tel un pamplemousse coulant
                Ô, mon chibre !
                Ô, mon chibre !
                Ô, mon envie de vivre !
            `
        },
        {
            "author": "Maia",
            "title": "L'ALÈLCE",
            "date": "29/04/2024",
            "content":
            `
                Oh je cours, que j'ai cours
                l'LLCE me joue des tours
                stratégie de la loutre,
                esquive du furet ;
                Putain Marcellin arrête de parler!
            `
        },
        {
            "author": "Maia",
            "title": "Suis-je bi si j'aime que les hommes fixionel ?",
            "date": "29/04/2024",
            "note": "\"Fixionel\" n'est pas un mot réel ",
            "content":
            `
                Oh je cours, que je cours
                la vie est faite de détours
                lesbienne et ou bisexuelle ?
                question existentielle.
                        
                Moi je cours, la vie me freine
                Es-tu philosophe?
                Ou juste une brelle ?
                        
                Refelxion rocambolesque
                je dive dans tes boobs dantesques.
            `
        },
        {
            "author": "Maia",
            "title": "untitled",
            "date": "29/04/2024",
            "content":
            `
                « C'est pourtant simple les enfants »
                dit-elle en m'agaçant
                un deux trois
                mon cul, ma bite
                ferme-la, le temps passera plus vite
                sacre bleu et sac à merde
                il n'est que 11h37
            `
        },
        {
            "author": "Maia",
            "title": "untitled",
            "date": "29/04/2024",
            "content":
            `
                Mon amour pour le vagin
                me consume comme un requin
                mon admiration pour les boobies
                un de mes plus admirables hobbies
                
                Je suis un dauphin sans eau;
                charlie chaplin sans son chapeau;
                une fleur sans pesticides;
                un homme sans son chibre.
                oh ma bite, oh ma bite
            `
        },
        {
            "author": "Maia",
            "title": "quequette à l'air quequette par terre",
            "date": "10/11/2024",
            "content":
            `
                Kékette a l'air,
                Kékette par terre,
                pff Mon chibre,
                Plus gros que le chipre.
                De droite a gauche de haut en bas,
                De montenegro a cuba.
                
                Ô ma bite,
                Ô ma bite.
                Ô quel monde tragique,
                Mais hélas elle se fatigue.
                Ce n'est point diplomatique.
                
                Ma kékette a l'air,
                Ma kékette par terre,
                Ma kékette reste un mystère.
            `
        },
        {
            "author": "Maia",
            "title": "zizi ensoleillé",
            "date": "10/11/2024",
            "separator": true, // --------------------------------------------------------------------------------
            "content":
            `
                Zizi…
                Quel ridicule mot.
                Guère employé lors du régime de vichy.
                Et bien, avez vous, soldats, guerriers
                Des Zizis ensoleillés.
                Et bien, des zizis heureux
                
                Des zizis courageux et point peurreux
                Des zizis fièrement montrés
                Des zizis succulents a déguster
                
                Avez vous,
                Monsieur Madame,
                Des zizis faisant l'éloge de votre âme ?
            `
        },
        {
            "author": "Dorian",
            "title": "untitled",
            "date": "16/01/2026",
            "new":false,
            "content":
            `
                Ses cobras, elle les range par là
                Intelligente et chargée en bas
                Son nom résonne c'est Maia
                Prenez garre à son enorme bangala
            `
        },
        {
            "author": "Maia",
            "title": "untitled",
            "date": "16/01/2026",
            "new":false,
            "content":
            `
                Mon cobra intergalactique
                Traverse les esprits
                Perce les équipements aéronautiques
                Assèche les océans
                Tue(nt) les marins
                Hypnotise mes sneaky links
                Ceci est mon Cobra
            `
        },
        {
            "author": "Dorian",
            "title": "untitled",
            "date": "16/01/2026",
            "note": "Réponse au précédent poem",
            "new":false,
            "content":
            `
                Il sussure à ton oreille
                Une idée de succion
                Devant lui tu t'émerveille
                Et tu t'etales devant lui en clamant
                Je veux le cobra de Maia, c'est mon seul amant
            `
        },
        {
            "author": "Maia",
            "title": "untitled",
            "date": "16/01/2026",
            "note": "Réponse au précédent poem",
            "new": false,
            "separator": true, // --------------------------------------------------------------------------------
            "content":
            `
                Personne le satisfera
                Comme il satisfait
                Il abâtardit ses ennemis
                Et mords ses alliés
                Hélas ! Je le craignez guère
                Ceci n'est qu'un kink
                Touchez le si vous voulez
                Touchez le si vous êtes digne
            `
        },
        {
            "author": "Maia",
            "title": "Can ma Dice",
            "date": "11/10/2026",
            // "note": "",
            "new":true,
            "content":
            `
                Je vois une fissure dans notre avenir
                Je vois une blessure en devenir
                Elle est trop occupée à Can ma Dice
                Elle est trop fachée, elle est une zéro sur dix

                Mon cobra est la couleur de ses mèches violettes
                Je la guette de haut en bas
                De Montenegro à Cuba
                Jusqu'à ce qu'elle touche ma qequette

                Poilue ou fripée
                Tordue ou courbée
                Missionary ou Cowgirl
                je change de team comme Gallagher

                Plus jamais mon cobra ne sera seul
                Allez ferme ta gueule
            `
        },
        {
            "author": "Maia",
            "title": "Choisit ton combatant",
            "date": "11/10/2026",
            // "note": "",
            // "separator": false,
            "new":true,
            "content":
            `
                De pierre ou de terre
                Mon cobra n'as jamais été aussi deter
                Pisser debout, pisser en l'air
                Pisser assis, il nous fait des jets à la vitesse de la lumière

                Impressioné je sais que tu l'est
                Devant sa silouhette éthérée
                De Bogota en Érythrée
                Tel un bon tente de la traverser

                Choisi ton synonyme, choisi ton combattant
                Cobra, zizi, Kentuky
                Tout attaquera
                Ton cul transpersera

                Il fera mouche
                Tel un javelot
                Toi tu te touche
                J'exhibe le beau
            `
        },
        {
            "author": "Maia",
            "title": "La conquête de la qequette",
            "date": "11/10/2026",
            // "note": "",
            // "separator": false,
            "new":true,
            "content":
            `
                Roméo et Juliette
                Les princes héritiers de la qequette
                Tout deux poursuivent leur quête
                Tout doux est le poids de la bête

                C'est entre une ou deux pirouettes
                Qu'ils font dresser sa couette
                Droite devant eux elle est nette
                Elle attire les miettes

                Elle s'arrondit la rondelle
                Elle lève son bbl
            `
        },
        {
            "author": "Maia",
            "title": "Léonie Brejneva",
            "date": "11/10/2026",
            // "note": "",
            // "separator": false,
            "new":true,
            "content":
            `
                Tête d'or
                Oh qu'est ce que j'adore
                Le chambala de Maia
                Il me fait penser à Léonie Brejneva

                Léonie
                Je donnerais tout pour goûter à ton Kentuky
                Je renierais ma patrie, mon sol et mes ancêtres
                Juste pour te bend contre la fenêtre



                Gabriel Attal
                Gabriel j'ai mal
                Gabriel attirail
                Gabriel je te mitraille
            `
        },
    ]
}

createRecueil(recueil)

