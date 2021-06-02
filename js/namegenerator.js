"use strict";
function getRandomName(retry, noSpace = false) {
	
	var showCount = 3;
	
	var nameLists = [
		{
			nama: 'Luna',
			arti: 'bulan'
		},
		{
			nama: 'Foerza',
			arti: 'kekuatan'
		},
		{
			nama: 'Kage',
			arti: 'bayangan'
		},
		{
			nama: 'Hermoso',
			arti: 'rupawan'
		},
		{
			nama: 'Shadow',
			arti: 'bayangan'
		},
		{
			nama: 'Golem',
			arti: 'raksasa'
		},
		{
			nama: 'Kuro',
			arti: 'hitam'
		},
		{
			nama: 'Vasto',
			arti: 'luas'
		},
		{
			nama: 'Nube',
			arti: 'awan'
		},
		{
			nama: 'Chispear',
			arti: 'percikan'
		},
		{
			nama: 'Leon',
			arti: 'singa'
		},
		{
			nama: 'Divan',
			arti: 'megah'
		},
		{
			nama: 'Ostar',
			arti: 'tajam'
		},
		{
			nama: 'Vjest',
			arti: 'mahir'
		},
		{
			nama: 'Tama',
			arti: 'gelap'
		},
		{
			nama: 'Siva',
			arti: 'abu-abu'
		},
		{
			nama: 'Roze',
			arti: 'merah muda'
		},
		{
			nama: 'Zuto',
			arti: 'kuning'
		},
		{
			nama: 'Udarac',
			arti: 'tinjuan'
		},
		{
			nama: 'Mac',
			arti: 'pedang'
		},
		{
			nama: 'Strelica',
			arti: 'panah'
		},
		{
			nama: 'De sol',
			arti: 'matahari'
		},
		{
			nama: 'Ostrica',
			arti: 'pedang'
		},
		{
			nama: 'Alegre',
			arti: 'kebahagiaan'
		},
		{
			nama: 'Hitac',
			arti: 'melempar'
		},
		{
			nama: 'Luminous',
			arti: 'cahaya'
		},
		{
			nama: 'Tenaz',
			arti: 'gigih'
		},
		{
			nama: 'Laidir',
			arti: 'kuat'
		},
		{
			nama: 'Fragil',
			arti: 'rapuh'
		},
		{
			nama: 'Cruas',
			arti: 'tangguh'
		},
		{
			nama: 'Malvado',
			arti: 'jahat'
		},
		{
			nama: 'Severa',
			arti: 'suram'
		},
		{
			nama: 'Grim',
			arti: 'bayangan'
		},
		{
			nama: 'Ganar',
			arti: 'menang'
		},
		{
			nama: 'Lograr',
			arti: 'tercapai'
		},
		{
			nama: 'Reina',
			arti: 'ratu'
		},
		{
			nama: 'El rey',
			arti: 'raja'
		},
		{
			nama: 'Regla',
			arti: 'penguasa'
		},
		{
			nama: 'Gris',
			arti: 'abu-abu'
		},
		{
			nama: 'Sciros',
			arti: 'kehancuran'
		},
		{
			nama: 'Enorme',
			arti: 'besar'
		},
		{
			nama: 'Iluvia',
			arti: 'hujan'
		},
		{
			nama: 'Almighty',
			arti: 'maha kuasa'
		},
		{
			nama: 'Ambition',
			arti: 'ambisi'
		},
		{
			nama: 'Nunca',
			arti: 'tak pernah'
		},
		{
			nama: 'Aqua',
			arti: 'air'
		},
		{
			nama: 'Teska',
			arti: 'sulit'
		},
		{
			nama: 'Vitalan',
			arti: 'vital'
		},
		{
			nama: 'Glas',
			arti: 'suara'
		},
		{
			nama: 'Kisa',
			arti: 'hujan'
		},
		{
			nama: 'Alev',
			arti: 'merah'
		},
		{
			nama: 'Puppet',
			arti: 'boneka'
		},
		{
			nama: 'Vites',
			arti: 'ksatria'
		},
		{
			nama: 'Metal',
			arti: 'logam'
		},
		{
			nama: 'Blade',
			arti: 'pedang'
		},
		{
			nama: 'Izliv',
			arti: 'kering'
		},
		{
			nama: 'Kanon',
			arti: 'meriam'
		},
		{
			nama: 'Muirin',
			arti: 'keluarga'
		},
		{
			nama: 'Cairde',
			arti: 'teman'
		},
		{
			nama: 'Lame',
			arti: 'lemah'
		},
		{
			nama: 'Ruin',
			arti: 'hancur'
		},
		{
			nama: 'Storm',
			arti: 'badai'
		},
		{
			nama: 'Wild',
			arti: 'liar'
		}
	];
	
	var i;	
	var nameGenerate = '';
	
	for (i = 0; i < showCount; i++) {
	
		var li = Math.floor(Math.random() * nameLists.length);
		var ri = Math.floor(Math.random() * nameLists.length);
		var retrySuffix = Math.floor(Math.random() * 10);
		
		nameGenerate += "<p><b>" + nameLists[li].nama + " " + nameLists[ri].nama + "</b></br>";
		nameGenerate += "<i>" + nameLists[li].arti + " " + nameLists[ri].arti + "</i></p>";
	}
	
    
	
    return nameGenerate;
}
function getRandomNameView() {
    var randomName = document.querySelector("#output");
    randomName.className = "";
    randomName.innerHTML = getRandomName();
    randomName.className = "output show-name custom-form-control";
}
function setupListeners() {
    document.addEventListener('click', (ev) => {
        getRandomNameView();
    });
}
function init() {
    setupListeners();
    getRandomNameView();
}
init();