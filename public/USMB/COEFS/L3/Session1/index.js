import { loadSemesters } from "/scripts/coeffs/coeffs.js";

// TODO MODULES
const S1 = [
	{
		option: false,
		titre: "INFO501",
		module: "UAF501 Outils formels",
		titre_long: "Logique",
		notes: {
			CM_CTA: 2.4,
			TP_Pratique: 0.6,
		},
	},
	{
		option: false,
		titre: "INFO502",
		module: "UAF501 Outils formels",
		titre_long: "Automates Grammaires",
		notes: {
			CM_CTA: 2.7,
			TP_Pratique: 0.3,
		},
	},

	// *** --- ***

	{
		option: false,
		titre: "INFO503",
		module: "UAF502 Algorithmique et génie logiciel",
		titre_long: "Algorithmique 1",
		notes: {
			CM_CT: 1.8,
			TP_Pratique: 1.2,
		},
	},
	{
		option: false,
		titre: "INFO504",
		module: "UAF502 Algorithmique et génie logiciel",
		titre_long: "Génie logiciel et conduite de projets",
		notes: {
			CM_Ecrit: 1.5,
			TP_Pratique: 1.5,
		},
	},

	// *** --- ***

	{
		option: false,
		titre: "INFO505",
		module: "UAF503 Systèmes d'exploitation",
		titre_long: "Programmation en langage C-2",
		notes: {
			CM_Ecrit: 2.01,
			TP_Pratique: 0.99,
		},
	},
	{
		option: false,
		titre: "INFO506",
		module: "UAF503 Systèmes d'exploitation",
		titre_long: "Système d'exploitation",
		notes: {
			CM_CT: 2.25,
			TP_Pratique: 0.75,
		},
	},

	// *** --- OPTIONS UAI504 (Choisir 1 bloc parmi 2) --- ***

	{
		option: true,
		titre: "INFO507",
		module: "UAI504 Infrastructures ou Mobilité",
		titre_long: "Développements applications mobiles",
		notes: {
			CM_CTA: 1.8,
			TP_Pratique: 1.2,
		},
	},
	{
		option: true,
		titre: "INFO508",
		module: "UAI504 Infrastructures des réseaux sociaux",
		titre_long: "Base de données orientée graphes",
		notes: {
			CM_CTA: 2.1,
			TP_Pratique: 0.9,
		},
	},
	{
		option: true,
		titre: "INFO509",
		module: "UAI504 Mobilité et big data",
		titre_long: "Base de données orientées documents",
		notes: {
			CM_CTA: 2.1,
			TP_Pratique: 0.9,
		},
	},

	// *** --- MODULES TRANSVERSAUX (UAM505) --- ***

	{
		option: false,
		titre: "ANGL501",
		module: "UAM505 Modulaire",
		titre_long: "Anglais - Compétences",
		notes: {
			TD_Oral: 2.1,
			Autonomie: 0.9,
		},
	},
	{
		option: false,
		titre: "AIPE502",
		module: "UAM505 Modulaire",
		titre_long: "Expression écrite",
		notes: {
			TD_Ecrit: 1,
		},
	},
	{
		option: true,
		titre: "OUVERTURE_S5",
		module: "UAM505 Modulaire",
		titre_long: "Enseignements d'ouverture (AIPE501, SPOR101, etc.)",
		notes: {
			Note_Unique: 1,
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
			CM_CTA: 2.25,
			TP_Pratique: 0.75,
		},
	},
	{
		option: false,
		titre: "INFO604",
		module: "UAF601 Conception et programmation OO",
		titre_long: "Programmation Orientée objet 3",
		notes: {
			CM_CT: 1.8,
			TP_Pratique: 1.2,
		},
	},

	// *** --- ***

	{
		option: false,
		titre: "INFO605",
		module: "UAF602 Types abstraits et processus",
		titre_long: "Types abstraits",
		notes: {
			CM_CT: 1.8,
			TP_Pratique: 1.2,
		},
	},
	{
		option: false,
		titre: "INFO606",
		module: "UAF602 Types abstraits et processus",
		titre_long: "Synchronisation des processus",
		notes: {
			CM_CTA: 1.8,
			TP_Pratique: 1.2,
		},
	},

	// *** --- ***

	{
		option: false,
		titre: "INFO607",
		module: "UAF603 Application",
		titre_long: "Algorithmique 2",
		notes: {
			CM_CTA: 2.01,
			TP_Pratique: 0.99,
		},
	},
	{
		option: false,
		titre: "INFO608",
		module: "UAF603 Application",
		titre_long: "Projet",
		notes: {
			Pratique: 2.01,
			Soutenance: 0.99,
		},
	},

	// *** --- OPTIONS UAI604 (Choisir 1 bloc parmi 2) --- ***

	{
		option: true,
		titre: "INFO601",
		module: "UAI604 Graphes (Commun aux deux options)",
		titre_long: "Graphes",
		notes: {
			CM_CT: 2.4,
			TP_Pratique: 0.6,
		},
	},
	{
		option: true,
		titre: "INFO601_CMI",
		module: "UAI604 Algorithmique avancée",
		titre_long: "Algorithmique numérique",
		notes: {
			CM_CT: 1.5,
			TP_Pratique: 1.5,
		},
	},
	{
		option: true,
		titre: "INFO602",
		module: "UAI604 Outils formels",
		titre_long: "Mathématiques pour l'informatique",
		notes: {
			CM_CTA: 2.7,
			TP_Pratique: 0.3,
		},
	},

	// *** --- MODULES TRANSVERSAUX (UAM605) --- ***

	{
		option: false,
		titre: "ANGL601",
		module: "UAM605 Modulaire",
		titre_long: "Anglais - Compétences",
		notes: {
			Ecrit_Oral: 2.4,
			Autonomie: 0.6,
		},
	},
	{
		option: false,
		titre: "INFO609",
		module: "UAM605 Modulaire",
		titre_long: "Conduite de projet",
		notes: {
			Oral: 2,
		},
	},
	{
		option: true,
		titre: "OUVERTURE_S6",
		module: "UAM605 Modulaire",
		titre_long: "Enseignements d'ouverture (Sport, Conférence, Art...)",
		notes: {
			Note_Unique: 1,
		},
	},
];

// ONLOAD

export function html_onload() {
	// charge les semestres :
	loadSemesters(S1, S2);
}

window.addEventListener("DOMContentLoaded", html_onload);
