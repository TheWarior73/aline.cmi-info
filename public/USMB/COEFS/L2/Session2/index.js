import { loadSemesters } from "/scripts/coeffs/coeffs.js";

const S1 = [
	{
		option: false,
		titre: "MATH103",
		module: "UAF101 Outils Mathématiques",
		titre_long: "Mathématiques et applications",
		notes: {
			CT: 5.4,
		},
	},
	{
		option: false,
		titre: "MATH103_CPT",
		module: "UAF101 Outils Mathématiques",
		titre_long: "Mathématiques et applications - Compétences",
		notes: {
			"RP*": 0.6,
		},
	},
	{
		option: false,
		titre: "ETRS101",
		module: "UAF102 Sciences du numérique",
		titre_long: "Mathématiques pour le numérique 1",
		notes: {
			CT: 2.1,
			"RP*": 0.9,
		},
	},
	{
		option: false,
		titre: "ETRS102",
		module: "UAF102 Sciences du numérique",
		titre_long: "Systèmes numériques",
		notes: {
			CT: 2.1,
		},
	},
	{
		option: false,
		titre: "ETRS102_CPT",
		module: "UAF102 Sciences du numérique",
		titre_long: "Systèmes numériques - Compétences",
		notes: {
			"RP*": 0.9,
		},
	},
	{
		option: false,
		titre: "INFO101",
		module: "UAF103 Informatique",
		titre_long: "Algorithmique",
		notes: {
			CT: 2.1,
		},
	},
	{
		option: false,
		titre: "INFO101_CPT",
		module: "UAF103 Informatique",
		titre_long: "Algorithmique - Compétences",
		notes: {
			"RP*": 0.9,
		},
	},
	{
		option: false,
		titre: "INFO102",
		module: "UAF103 Informatique",
		titre_long: "Langages du Web 1",
		notes: {
			CT: 1.8,
			"RP*": 1.2,
		},
	},
	{
		option: true,
		titre: "ETRS103",
		module: "UAI104 Projet Interdisciplinaire",
		titre_long: "Domotique SAE",
		notes: {
			"RP*": 6,
		},
	},
	{
		option: true,
		titre: "MATH104",
		module: "UAI104 Mathématiques",
		titre_long: "Statistique descriptive",
		notes: {
			CT: 2.25,
		},
	},
	{
		option: true,
		titre: "MATH104_CPT",
		module: "UAI104 Mathématiques",
		titre_long: "Statistique descriptive - Compétences",
		notes: {
			"RP*": 0.75,
		},
	},
	{
		option: true,
		titre: "MATH105",
		module: "UAI104 Mathématiques",
		titre_long: "Logique et ensembles",
		notes: {
			CT: 2.4,
		},
	},
	{
		option: true,
		titre: "MATH105_CPT",
		module: "UAI104 Mathématiques",
		titre_long: "Logique et ensembles - Compétences",
		notes: {
			"RP*": 0.6,
		},
	},
	{
		option: false,
		titre: "ANGL101",
		module: "UAM105 Modulaire",
		titre_long: "Anglais",
		notes: {
			CT: 3,
		},
	},
	{
		option: false,
		titre: "AIPE101",
		module: "UAM105 Modulaire",
		titre_long: "Méthodologie du travail universitaire",
		notes: {
			"RP*": 1,
		},
	},
	{
		option: false,
		titre: "AIPE102",
		module: "UAM105 Modulaire",
		titre_long: "Intégration à la vie universitaire",
		notes: {
			"RP*": 1,
		},
	},
	{
		option: true,
		titre: "OUVERTURE_S1",
		module: "UAM105 Modulaire",
		titre_long: "Enseignements d'ouverture",
		notes: {
			"RP**": 1,
		},
	},
];

const S2 = [
	{
		option: false,
		titre: "MATH204",
		module: "UAF201 Mathématiques pour le numérique",
		titre_long: "Algèbre 2",
		notes: {
			CT: 2.4,
		},
	},
	{
		option: false,
		titre: "MATH204_CPT",
		module: "UAF201 Mathématiques pour le numérique",
		titre_long: "Algèbre 2 - Compétences",
		notes: {
			"RP*": 0.6,
		},
	},
	{
		option: false,
		titre: "INFO205",
		module: "UAF201 Mathématiques pour le numérique",
		titre_long: "Mathématiques pour le numérique 2",
		notes: {
			CT: 2.4,
			"RP*": 0.6,
		},
	},
	{
		option: false,
		titre: "ETRS201",
		module: "UAF202 Systèmes et Réseaux informatiques",
		titre_long: "Réseaux informatiques et internet",
		notes: {
			CT: 2.1,
		},
	},
	{
		option: false,
		titre: "ETRS201_CPT",
		module: "UAF202 Systèmes et Réseaux informatiques",
		titre_long: "Réseaux informatiques et internet - Compétences",
		notes: {
			"RP*": 0.9,
		},
	},
	{
		option: false,
		titre: "INFO201",
		module: "UAF202 Systèmes et Réseaux informatiques",
		titre_long: "Systèmes d'exploitation",
		notes: {
			CT: 1.8,
			"RP*": 1.2,
		},
	},
	{
		option: false,
		titre: "INFO202",
		module: "UAF203 Algo et programmation",
		titre_long: "Programmation et algorithmique",
		notes: {
			CT: 1.8,
			"RP*": 1.2,
		},
	},
	{
		option: false,
		titre: "INFO203",
		module: "UAF203 Algo et programmation",
		titre_long: "Langages du WEB 2",
		notes: {
			CT: 1.5,
			"RP*": 1.5,
		},
	},
	{
		option: true,
		titre: "ETRS202",
		module: "UAI204 Parcours INFO/SPI",
		titre_long: "Electronique programmable",
		notes: {
			CT: 2.25,
			"RP*": 0.75,
		},
	},
	{
		option: true,
		titre: "INFO204_CPT",
		module: "UAI204 Parcours INFO/SPI",
		titre_long: "Projet multi disciplinaire - Compétences",
		notes: {
			"RP*": 3,
		},
	},
	{
		option: true,
		titre: "ETRS202_MATH",
		module: "UAI204 Parcours MATHS",
		titre_long: "Electronique programmable",
		notes: {
			CT: 2.25,
			"RP*": 0.75,
		},
	},
	{
		option: true,
		titre: "MATH202",
		module: "UAI204 Parcours MATHS",
		titre_long: "Analyse",
		notes: {
			CT: 2.4,
		},
	},
	{
		option: true,
		titre: "MATH202_CPT",
		module: "UAI204 Parcours MATHS",
		titre_long: "Analyse - Compétences",
		notes: {
			"RP*": 0.6,
		},
	},
	{
		option: false,
		titre: "ANGL201",
		module: "UAM205 UA Modulaire",
		titre_long: "Anglais - Compétences",
		notes: {
			CT: 3,
		},
	},
	{
		option: false,
		titre: "AIPE201",
		module: "UAM205 UA Modulaire",
		titre_long: "Orientation et métiers",
		notes: {
			"RP*": 2,
		},
	},
	{
		option: true,
		titre: "OUVERTURE_S2",
		module: "UAM205 UA Modulaire",
		titre_long: "Enseignements d'ouverture",
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
