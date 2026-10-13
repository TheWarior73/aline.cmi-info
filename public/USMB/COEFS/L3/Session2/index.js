import { loadSemesters } from "/scripts/coeffs/coeffs.js";

const S1 = [
	{
		option: false,
		titre: "INFO501",
		module: "UAF501 Outils formels",
		titre_long: "Logique",
		notes: {
			CT: 2.4,
			"RP*": 0.6,
		},
	},
	{
		option: false,
		titre: "INFO502",
		module: "UAF501 Outils formels",
		titre_long: "Automates Grammaires",
		notes: {
			CT: 2.7,
			"RP*": 0.3,
		},
	},
	{
		option: false,
		titre: "INFO503",
		module: "UAF502 Algorithmique et génie logiciel",
		titre_long: "Algorithmique 1",
		notes: {
			CT: 1.8,
			"RP*": 1.2,
		},
	},
	{
		option: false,
		titre: "INFO504",
		module: "UAF502 Algorithmique et génie logiciel",
		titre_long: "Génie logiciel et conduite de projets",
		notes: {
			CT: 1.5,
			"RP*": 1.5,
		},
	},
	{
		option: false,
		titre: "INFO505",
		module: "UAF503 Systèmes d'exploitation",
		titre_long: "Programmation en langage C-2",
		notes: {
			CT: 2.01,
			"RP*": 0.99,
		},
	},
	{
		option: false,
		titre: "INFO506",
		module: "UAF503 Systèmes d'exploitation",
		titre_long: "Système d'exploitation",
		notes: {
			CT: 2.25,
			"RP*": 0.75,
		},
	},
	{
		option: false,
		titre: "INFO507",
		module: "UAI504 Infrastructures ou Mobilité",
		titre_long: "Développements applications mobiles",
		notes: {
			CT: 1.8,
			"RP*": 1.2,
		},
	},
	{
		option: true,
		titre: "INFO508",
		module: "UAI504 Infrastructures des réseaux sociaux",
		titre_long: "Base de données orientée graphes",
		notes: {
			CT: 2.1,
			"RP*": 0.9,
		},
	},
	{
		option: true,
		titre: "INFO509",
		module: "UAI504 Mobilité et big data",
		titre_long: "Base de données orientées documents",
		notes: {
			CT: 2.1,
			"RP*": 0.9,
		},
	},
	{
		option: true,
		titre: "OSEC502_CMI",
		module: "UAI505 Compléments CMI",
		titre_long: "Projet numérique transversal",
		notes: {
			CT: 3, // Évaluation spécifique en 2nde chance (oral supplémentaire si < 10, puis moyenne)[cite: 5]
		},
	},
	{
		option: true,
		titre: "PROJ601_CMI",
		module: "UAJ605 Compléments CMI",
		titre_long: "Projet de recherche tuteuré (spécifique)",
		notes: {
			"RP*": 3, // Report de la note de session 1 à 100%[cite: 7]
		},
	},
	{
		option: false,
		titre: "ANGL501",
		module: "UAM505 Modulaire",
		titre_long: "Anglais - Compétences",
		notes: {
			"RP*": 3,
		},
	},
	{
		option: false,
		titre: "AIPE502",
		module: "UAM505 Modulaire",
		titre_long: "Expression écrite",
		notes: {
			"RP*": 1,
		},
	},
	{
		option: false,
		titre: "OUVERTURE_S5",
		module: "UAM505 Modulaire",
		titre_long: "Enseignements d'ouverture (AIPE501, SPOR101, etc.)",
		notes: {
			"RP**": 1,
		},
	},
];

const S2 = [
	{
		option: false,
		titre: "INFO603",
		module: "UAF601 Conception et programmation OO",
		titre_long: "Conception Orientée Objet 1",
		notes: {
			CT: 2.25,
			"RP*": 0.75,
		},
	},
	{
		option: false,
		titre: "INFO604",
		module: "UAF601 Conception et programmation OO",
		titre_long: "Programmation Orientée objet 3",
		notes: {
			CT: 1.8,
			"RP*": 1.2,
		},
	},
	{
		option: false,
		titre: "INFO605",
		module: "UAF602 Types abstraits et processus",
		titre_long: "Types abstraits",
		notes: {
			CT: 1.8,
			"RP*": 1.2,
		},
	},
	{
		option: false,
		titre: "INFO606",
		module: "UAF602 Types abstraits et processus",
		titre_long: "Synchronisation des processus",
		notes: {
			CT: 1.8,
			"RP*": 1.2,
		},
	},
	{
		option: false,
		titre: "INFO607",
		module: "UAF603 Application",
		titre_long: "Algorithmique 2",
		notes: {
			CT: 2.01,
			"RP*": 0.99,
		},
	},
	{
		option: false,
		titre: "INFO608",
		module: "UAF603 Application",
		titre_long: "Projet",
		notes: {
			"RP*": 3,
		},
	},
	{
		option: false,
		titre: "INFO601",
		module: "UAI604 Graphes",
		titre_long: "Graphes",
		notes: {
			CT: 2.4,
			"RP*": 0.6,
		},
	},
	{
		option: false,
		titre: "INFO601_CMI",
		module: "UAI604 Algorithmique avancée",
		titre_long: "Algorithmique numérique",
		notes: {
			CT: 1.5,
			"RP*": 1.5,
		},
	},
	{
		option: false,
		titre: "INFO602",
		module: "UAI604 Outils formels",
		titre_long: "Mathématiques pour l'informatique",
		notes: {
			CT: 2.7,
			"RP*": 0.3,
		},
	},
	{
		option: false,
		titre: "ANGL601",
		module: "UAM605 Modulaire",
		titre_long: "Anglais - Compétences",
		notes: {
			"RP*": 3,
		},
	},
	{
		option: false,
		titre: "INFO609",
		module: "UAM605 Modulaire",
		titre_long: "Conduite de projet",
		notes: {
			"RP*": 2,
		},
	},
	{
		option: false,
		titre: "OUVERTURE_S6",
		module: "UAM605 Modulaire",
		titre_long: "Enseignements d'ouverture (Sport, Conférence, Art...)",
		notes: {
			"RP**": 1,
		},
	},
];

// ONLOAD

export function html_onload() {
	// charge les semestres :
	loadSemesters(S1, S2);
}

window.addEventListener("DOMContentLoaded", html_onload);
