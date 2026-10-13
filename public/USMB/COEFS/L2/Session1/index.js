import { loadSemesters } from "/scripts/coeffs/coeffs.js";

const S1 = [
	{
		option: false,
		titre: "MATH103",
		module: "UAF101 Outils Mathématiques",
		titre_long: "Mathématiques et applications",
		notes: {
			CT: 2.97,
			CI: 2.43,
		},
	},
	{
		option: false,
		titre: "MATH103_CPT",
		module: "UAF101 Outils Mathématiques",
		titre_long: "Mathématiques et applications - Compétences",
		notes: {
			CC: 0.6,
		},
	},
	{
		option: false,
		titre: "ETRS101",
		module: "UAF102 Sciences du numérique",
		titre_long: "Mathématiques pour le numérique 1",
		notes: {
			CTA: 2.1,
			CI: 0.9,
		},
	},
	{
		option: false,
		titre: "ETRS102",
		module: "UAF102 Sciences du numérique",
		titre_long: "Systèmes numériques",
		notes: {
			CTA: 2.1,
		},
	},
	{
		option: false,
		titre: "ETRS102_CPT",
		module: "UAF102 Sciences du numérique",
		titre_long: "Systèmes numériques - Compétences",
		notes: {
			CC1: 0.603,
			CC2: 0.297,
		},
	},
	{
		option: false,
		titre: "INFO101",
		module: "UAF103 Informatique",
		titre_long: "Algorithmique",
		notes: {
			CTA: 1.26,
			CI: 0.84,
		},
	},
	{
		option: false,
		titre: "INFO101_CPT",
		module: "UAF103 Informatique",
		titre_long: "Algorithmique - Compétences",
		notes: {
			CC: 0.9,
		},
	},
	{
		option: false,
		titre: "INFO102",
		module: "UAF103 Informatique",
		titre_long: "Langages du Web 1",
		notes: {
			CT: 1.8,
			CI: 1.2,
		},
	},
	{
		option: true,
		titre: "ETRS103",
		module: "UAI104 Projet Interdisciplinaire",
		titre_long: "Domotique SAE",
		notes: {
			CC: 6,
		},
	},
	{
		option: true,
		titre: "MATH104",
		module: "UAI104 Mathématiques",
		titre_long: "Statistique descriptive",
		notes: {
			CTA: 2.25,
		},
	},
	{
		option: true,
		titre: "MATH104_CPT",
		module: "UAI104 Mathématiques",
		titre_long: "Statistique descriptive - Compétences",
		notes: {
			CC1: 0.45,
			CC2: 0.3,
		},
	},
	{
		option: true,
		titre: "MATH105",
		module: "UAI104 Mathématiques",
		titre_long: "Logique et ensembles",
		notes: {
			CTA: 2.4,
		},
	},
	{
		option: true,
		titre: "MATH105_CPT",
		module: "UAI104 Mathématiques",
		titre_long: "Logique et ensembles - Compétences",
		notes: {
			CC: 0.6,
		},
	},
	{
		option: false,
		titre: "ANGL101",
		module: "UAM105 Modulaire",
		titre_long: "Anglais",
		notes: {
			CC: 3,
		},
	},
	{
		option: false,
		titre: "AIPE101",
		module: "UAM105 Modulaire",
		titre_long: "Méthodologie du travail universitaire",
		notes: {
			CCI: 0.5,
			Eval: 0.5,
		},
	},
	{
		option: false,
		titre: "AIPE102",
		module: "UAM105 Modulaire",
		titre_long: "Intégration à la vie universitaire",
		notes: {
			CCI: 0.5,
			Eval: 0.5,
		},
	},
	{
		option: true,
		titre: "OUVERTURE_S1",
		module: "UAM105 Modulaire",
		titre_long: "Enseignements d'ouverture",
		notes: {
			Note: 1,
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
			CTA: 2.4,
		},
	},
	{
		option: false,
		titre: "MATH204_CPT",
		module: "UAF201 Mathématiques pour le numérique",
		titre_long: "Algèbre 2 - Compétences",
		notes: {
			CC1: 0.45,
			CC2: 0.15,
		},
	},
	{
		option: false,
		titre: "INFO205",
		module: "UAF201 Mathématiques pour le numérique",
		titre_long: "Mathématiques pour le numérique 2",
		notes: {
			CT: 2.4,
			CC: 0.6,
		},
	},
	{
		option: false,
		titre: "ETRS201",
		module: "UAF202 Systèmes et Réseaux informatiques",
		titre_long: "Réseaux informatiques et internet",
		notes: {
			CTA: 2.1,
		},
	},
	{
		option: false,
		titre: "ETRS201_CPT",
		module: "UAF202 Systèmes et Réseaux informatiques",
		titre_long: "Réseaux informatiques et internet - Compétences",
		notes: {
			CC: 0.9,
		},
	},
	{
		option: false,
		titre: "INFO201",
		module: "UAF202 Systèmes et Réseaux informatiques",
		titre_long: "Systèmes d'exploitation",
		notes: {
			CT: 1.8,
			CI: 1.2,
		},
	},
	{
		option: false,
		titre: "INFO202",
		module: "UAF203 Algo et programmation",
		titre_long: "Programmation et algorithmique",
		notes: {
			CC1: 1.8,
			CC2: 1.2,
		},
	},
	{
		option: false,
		titre: "INFO203",
		module: "UAF203 Algo et programmation",
		titre_long: "Langages du WEB 2",
		notes: {
			CT: 1.5,
			CC: 1.5,
		},
	},
	{
		option: true,
		titre: "ETRS202",
		module: "UAI204 Parcours INFO/SPI",
		titre_long: "Electronique programmable",
		notes: {
			CT: 2.25,
			CI: 0.75,
		},
	},
	{
		option: true,
		titre: "INFO204_CPT",
		module: "UAI204 Parcours INFO/SPI",
		titre_long: "Projet multi disciplinaire - Compétences",
		notes: {
			CT: 3,
		},
	},
	{
		option: true,
		titre: "ETRS202_MATH",
		module: "UAI204 Parcours MATHS",
		titre_long: "Electronique programmable",
		notes: {
			CT: 2.25,
			CI: 0.75,
		},
	},
	{
		option: true,
		titre: "MATH202",
		module: "UAI204 Parcours MATHS",
		titre_long: "Analyse",
		notes: {
			CC: 2.4,
		},
	},
	{
		option: true,
		titre: "MATH202_CPT",
		module: "UAI204 Parcours MATHS",
		titre_long: "Analyse - Compétences",
		notes: {
			CC: 0.6,
		},
	},
	{
		option: false,
		titre: "ANGL201",
		module: "UAM205 UA Modulaire",
		titre_long: "Anglais - Compétences",
		notes: {
			CC1: 2.4,
			CC2: 0.6,
		},
	},
	{
		option: false,
		titre: "AIPE201",
		module: "UAM205 UA Modulaire",
		titre_long: "Orientation et métiers",
		notes: {
			CCI: 1.5,
			Eval: 0.5,
		},
	},
	{
		option: true,
		titre: "OUVERTURE_S2",
		module: "UAM205 UA Modulaire",
		titre_long: "Enseignements d'ouverture",
		notes: {
			Note: 1,
		},
	},
];

// ONLOAD

export function html_onload() {
	// charge les semestres :
	loadSemesters(S1, S2);
}

window.addEventListener("DOMContentLoaded", html_onload);
