/* --- menu items --- */
var MENU_ITEMS = [

	['<img src="http://rhonealpes-volley.fr/lravb/images/ligue_ico_16.gif" align="top" border="0px" />&nbsp;La Ligue','http://rhonealpes-volley.fr/lravb/ligue/ligue.php',{'tw' :'_self', 	'sb' :'La Ligue'},
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Coordonnées',     '            http://rhonealpes-volley.fr/lravb/ligue/adresse.php', {'tw' :'_self', 	'sb' :'Coordonnées Ligue'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Comité Directeur','            http://rhonealpes-volley.fr/lravb/ligue/cd.php',      {'tw' :'_self', 	'sb' :'Comité Directeur'}]
        ],


	['<img src="http://rhonealpes-volley.fr/lravb/images/sportive_ico_16.gif" align="top" border="0px" />&nbsp;La Sportive','http://rhonealpes-volley.fr/lravb/sportive/sportive.php',{'tw' :'_self', 			'sb' :'La Sportive'},
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Saisie des résultats',              'http://www.ffvolley.org/resu/saisie_resu.php',{'tw' :'_blank', 				'sb' :'Saisie des résultats'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Commission Sportive',               'http://rhonealpes-volley.fr/lravb/contact.php?rub=sportive',{'tw' :'_self', 		'sb' :'Commission Sportive'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Championnats Ligue',                'http://rhonealpes-volley.fr/lravb/sportive/ligue.php',{'tw' :'_self', 			'sb'    :'Championnats Ligue'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Coupe R&eacute;gionale Seniors',     'http://rhonealpes-volley.fr/modules/webindex/index.php',{'tw' :'_self', 			'sb'  :'Coupe R/A Seniors'}],
		  ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Championnats Départementaux <img src="http://rhonealpes-volley.fr/lravb/images/menu_n2.gif" />',null,{'sb' :'Championnats Départementaux'},
		  	['&nbsp; Championnats CD38',                 'http://rhonealpes-volley.fr/lravb/sportive/comite38.php',{'tw' :'_self', 			'sb' :'Championnats CD38'}],
	          	['&nbsp; Championnats CD42',                 'http://rhonealpes-volley.fr/lravb/sportive/comite42.php',{'tw' :'_self', 			'sb' :'Championnats CD42'}],
	          	['&nbsp; Championnats CD69',                 'http://rhonealpes-volley.fr/lravb/sportive/comite69.php',{'tw' :'_self', 			'sb' :'Championnats CD69'}],
	          	['&nbsp; Championnats CD74',                 'http://rhonealpes-volley.fr/lravb/sportive/comite74.php',{'tw' :'_self', 			'sb' :'Championnats CD74'}]],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Historique (podiums)',              'http://rhonealpes-volley.fr/lravb/sportive/archives/podium.php',{'tw' :'_self', 		'sb' :'Historique (les podiums)'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/pdf.gif" align="top" /> RGER',                                'http://rhonealpes-volley.fr/lravb/sportive/docs/rger_ra.pdf',{'tw' :'_blank', 		'sb' :'RGER'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/pdf.gif" align="top" /> BRI',                                 'http://rhonealpes-volley.fr/lravb/sportive/docs/bri_2004-2005.pdf',{'tw' :'_blank', 	'sb' :'BRI'}]
        ],


	['<img src="http://rhonealpes-volley.fr/lravb/images/arbitrage_ico_16.gif" align="top" border="0px" />&nbsp;Arbitrage','http://rhonealpes-volley.fr/lravb/arbitrage/arbitrage.php',{'tw' :'_self', 		'sb' :'L\'Arbitrage'},
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Commission Arbitrage',             'http://rhonealpes-volley.fr/lravb/contact.php?rub=arbitrage',{'tw' :'_self', 		'sb' :'Commission Arbitrage'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/pdf.gif" align="top" /> Programme de formation',             'http://rhonealpes-volley.fr/lravb/ligue/docs/cra_formation2004-2005.pdf',{'tw' :'_blank', 	'sb' :'Programme de formation'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/pdf.gif" align="top" /> Remboursement Frais Arbitrage',      'http://rhonealpes-volley.fr/lravb/arbitrage/docs/cra_remboursement.pdf',{'tw' :'_blank', 	'sb' :'Remboursement Frais Arbitrage'}]
        ],


	['<img src="http://rhonealpes-volley.fr/lravb/images/technique_ico_16.gif" align="top" border="0px" />&nbsp;La Technique','http://rhonealpes-volley.fr/lravb/technique/technique.php',{'tw' :'_self', 'sb' :'La Technique'},
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/pdf.gif" align="top" /> Programme Prévisionnel',             'http://rhonealpes-volley.fr/lravb/technique/docs/programme_technique.pdf',{'tw' :'_blank', 		'sb' :'Programme Prévisionnel'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/pdf.gif" align="top" /> Recyclage Entraineurs',              'http://rhonealpes-volley.fr/lravb/technique/docs/recyclage_entraineurs_15012005.pdf',{'tw' :'_blank', 	'sb' :'Recyclage Entraineurs'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/pdf.gif" align="top" /> Formation entraineur régional',      'http://rhonealpes-volley.fr/lravb/technique/docs/formation_er.pdf',{'tw' :'_blank', 			'sb' :'Formation entraineur régional'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/pdf.gif" align="top" /> Jeunes à convoquer en CRE',          'http://rhonealpes-volley.fr/lravb/technique/docs/propositions_cre_cadet.pdf',{'tw' :'_blank', 		'sb' :'Jeunes à convoquer en CRE'}]
        ],


	['<img src="http://rhonealpes-volley.fr/lravb/images/beach_ico_16.gif" align="top" border="0px" />&nbsp;Le Beach','http://rhonealpes-volley.fr/lravb/beach/beach.php',{'tw' :'_self', 		'sb' :'Le Beach'},
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/blanc.gif" align="top" /> Terrains',                    'http://rhonealpes-volley.fr/lravb/beach/terrains.php',{'tw' :'_self', 		'sb' :'Terrains'}],
	          ['<img src="http://rhonealpes-volley.fr/lravb/images/pdf.gif" align="top" /> Règlement FIVB',                'http://rhonealpes-volley.fr/lravb/beach/docs/beach_fivb.pdf',{'tw' :'_blank', 	'sb' :'Règlement FIVB'}]
        ],
];
