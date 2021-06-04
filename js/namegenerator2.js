"use strict";
function getRandomName(retry, noSpace = false) {
	
	var showCount = 3;
	
	var nameLists = [
	
{ nama: 'Adam', arti: 'Manusia pertama di bumi' },
{ nama: 'Adelio', arti: 'Pangeran yang mulia' },
{ nama: 'Arsenio', arti: 'Gagah berani' },
{ nama: 'Aileen', arti: 'Cahaya yang terang' },
{ nama: 'August', arti: 'Bermartabat' },
{ nama: 'Bagas', arti: 'Kuat' },
{ nama: 'Brady', arti: 'Sahabat semua orang' },
{ nama: 'Barry', arti: 'Seorang pemimpin yang kuat' },
{ nama: 'Buana', arti: 'Jagat raya' },
{ nama: 'Brandon', arti: 'Pedang' },
{ nama: 'Candra', arti: 'Rembulan' },
{ nama: 'Cakra', arti: 'Panah' },
{ nama: 'Cavan', arti: 'Tampan' },
{ nama: 'Carya', arti: 'Seorang pengembara' },
{ nama: 'Cullen', arti: 'Sangat tampan' },
{ nama: 'Danish', arti: 'Bijaksana' },
{ nama: 'Damar', arti: 'Sumber cahaya' },
{ nama: 'Dary', arti: 'Orang yang arif' },
{ nama: 'Dilan', arti: 'Lelaki setia' },
{ nama: 'Deon', arti: 'Dewa' },
{ nama: 'Evans', arti: 'Pejuang muda' },
{ nama: 'Emery', arti: 'Pemimpin yang baik hati' },
{ nama: 'Eric', arti: 'Pemimpin yang abadi' },
{ nama: 'Edwin', arti: 'Sahabat yang makmur' },
{ nama: 'Evans', arti: 'Pejuang muda' },
{ nama: 'Farel', arti: 'Pemberani' },
{ nama: 'Farid', arti: 'Permata' },
{ nama: 'Fahman', arti: 'Memahami' },
{ nama: 'Fannan', arti: 'Seniman' },
{ nama: 'Farzan', arti: 'Bijaksana' },
{ nama: 'Ghafi', arti: 'Memaafkan, berhati lembut' },
{ nama: 'Gun', arti: 'Kuat' },
{ nama: 'Garry', arti: 'Perkasa' },
{ nama: 'Galih', arti: 'Seorang pemikir' },
{ nama: 'Gavin', arti: 'Kemenangan, elang putih' },
{ nama: 'Harshad', arti: 'Pemberi kegembiraan' },
{ nama: 'Haris', arti: 'Tertata rapi' },
{ nama: 'Haydar', arti: 'Singa, pemberani' },
{ nama: 'Harun', arti: 'Pembawa terang' },
{ nama: 'Harry', arti: 'Pemimpin' },
{ nama: 'Iravan', arti: 'Raja lautan' },
{ nama: 'Irfan', arti: 'Pengetahuan' },
{ nama: 'Indra', arti: 'Kebijaksanaan, keteguhan' },
{ nama: 'Janu', arti: 'Berpikir jauh ke depan' },
{ nama: 'Javer', arti: 'Cerah, cemerlang' },
{ nama: 'Julian', arti: 'Berjiwa muda' },
{ nama: 'Kavi', arti: 'Penyair' },
{ nama: 'Keenan', arti: 'Seorang pemilik' },
{ nama: 'Luzio', arti: 'Penerangan' },
{ nama: 'Lais', arti: 'Berani' },
{ nama: 'Manu', arti: 'Pria' },
{ nama: 'Marva', arti: 'Bagus' },
{ nama: 'Nanda', arti: 'Anak laki-laki' },
{ nama: 'Nadeem', arti: 'Teman' },
{ nama: 'Oskar', arti: 'Ahli tombak yang perkasa' },
{ nama: 'Oliver', arti: 'Penuh kasih sayang' },
{ nama: 'Pramadana', arti: 'Tertinggi, dermawan' },
{ nama: 'Paramayoga', arti: 'Anak yang terindah' },
{ nama: 'Qori', arti: 'Pembaca' },
{ nama: 'Qays', arti: 'Penuh irama' },
{ nama: 'Reiji', arti: 'Berperilaku baik' },
{ nama: 'Raden', arti: 'Seorang bangsawan Jawa' },
{ nama: 'Safwan', arti: 'Hati yang bersih dan ikhlas' },
{ nama: 'Syandana', arti: 'Mengalir terus' },
{ nama: 'Tony', arti: 'Cerdas' },
{ nama: 'Tadya', arti: 'Tertib' },
{ nama: 'Uri', arti: 'Cahaya' },
{ nama: 'Urdha', arti: 'Mulia' },
{ nama: 'Vaden', arti: 'Pembicara' },
{ nama: 'Vigo', arti: 'Pemenang' },
{ nama: 'Witton', arti: 'Orang yang bijak' },
{ nama: 'Wyman', arti: 'Prajurit' },
{ nama: 'Wistara', arti: 'Jelas dan pandai' },
{ nama: 'Wren', arti: 'Luar biasa' },
{ nama: 'Yasser', arti: 'Melakukan dengan baik' },
{ nama: 'Yardan', arti: 'Raja' },
{ nama: 'Zafran', arti: 'Kekayaan' },
{ nama: 'Zayyan', arti: 'Cemerlang' },
{ nama: 'Zayn', arti: 'Perhiasan' },
{ nama: 'Zahir', arti: 'Tumbuh dengan baik' },
{ nama: 'Adelia ', arti: 'Mulia' },
{ nama: 'Anindira ', arti: 'Pemberani' },
{ nama: 'Aqilla ', arti: 'Anak yang pandai' },
{ nama: 'Belinda', arti: 'Cantik' },
{ nama: 'Balerina', arti: 'Penari balet' },
{ nama: 'Carissa', arti: 'Anggun' },
{ nama: 'Calista', arti: 'Yang tercantik' },
{ nama: 'Dzakiyah', arti: 'Cerdas' },
{ nama: 'Dairah', arti: 'Lemah lembut' },
{ nama: 'Erina', arti: 'Wanita cantik' },
{ nama: 'Ermina', arti: 'Peramah' },
{ nama: 'Fany', arti: 'Gembira' },
{ nama: 'Freya', arti: 'Nama dewi cinta dan kecantikan' },
{ nama: 'Gayatri', arti: 'Memiliki 3 kekuatan' },
{ nama: 'Grizella', arti: 'Wanita pejuang yang keras' },
{ nama: 'Ines', arti: 'Suci' },
{ nama: 'Indira', arti: 'Berbuat Adil' },
{ nama: 'Jenifer', arti: 'Ombak Putih' },
{ nama: 'Jannie', arti: 'Wanita yang jujur' },
{ nama: 'Kallista', arti: 'Cantik' },
{ nama: 'Khairina', arti: 'Kebaikan' },
{ nama: 'Luvenia', arti: 'Yang tercinta' },
{ nama: 'Marsya', arti: 'Subur, Kesenangan' },
{ nama: 'Naura', arti: 'Cahaya yang Bersinar Terang' },
{ nama: 'Osella', arti: 'Burung' },
{ nama: 'Peggy', arti: 'Mutiara' },
{ nama: 'Queisha', arti: 'Hidup, wanita' },
{ nama: 'Sabrina', arti: 'Bidadari' },
{ nama: 'Talitha', arti: 'Muda Belia' },
{ nama: 'Yunita', arti: 'Bersahabat' },
{ nama: 'Zareena', arti: 'Emas' },		
{ nama: 'Chaddrick', arti: 'petarung yang tangguh' },
{ nama: 'Choky', arti: 'bebas' },
{ nama: 'Clodio', arti: 'yang mulia' },
{ nama: 'Dagoberto', arti: 'orang yang bersinar seperti matahari' },
{ nama: 'Dalmiro', arti: 'orang yang menginginkan warisan' },
{ nama: 'Daniel', arti: 'Tuhan sebagai penilainya' },
{ nama: 'Darek', arti: 'kepercayaan Tuhan' },
{ nama: 'Darelano', arti: 'anugerah tercinta' },
{ nama: 'Eginhardt', arti: 'kekuatan dari sebuah pedang' },
{ nama: 'Isaak', arti: 'orang yang tertawa' },
{ nama: 'Ivory', arti: 'pohon cemara' },
{ nama: 'Jagur', arti: 'pemburu' },
{ nama: 'Jakob', arti: 'menggantikan' },
{ nama: 'Jan :orang yang sangat ramah' },
{ nama: 'Jarvas', arti: 'orang yang terampil menggunakan tombak' },
{ nama: 'Jerry', arti: 'ujung tombak yang kuat.' },
{ nama: 'Valter', arti: 'jendral pemimpin' },
{ nama: 'Vamer', arti: 'tentara bertahan' },
{ nama: 'Vasyl', arti: 'berani seperti beruang' },
{ nama: 'Veitch', arti: 'kehidupan' },
{ nama: 'Victorious', arti: 'pemenang (Viktors, Viktoras)' },
{ nama: 'Vier', arti: 'empat' },
{ nama: 'Viktor', arti: 'raja yang cinta damai' },
{ nama: 'Walden', arti: 'untuk pemimpin (Welti)' },
{ nama: 'Waldermar', arti: 'punya kekuatan, terkenal' },
{ nama: 'Saldo', arti: 'pemimpin yang baik (Walfredo, Walfried)' },
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
    document.getElementById("btnGenerate").addEventListener('click', (ev) => {
        getRandomNameView();
    });
}
function init() {
    setupListeners();
    getRandomNameView();
}
init();