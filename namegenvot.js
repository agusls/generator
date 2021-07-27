"use strict";
function getRandomName(retry, noSpace = false) {
	
	$(".copybutton").html('Copy');
	
	var showCount = 3;
	
	var nameLists = [
	
{ nama: 'Adam', arti: 'The first man on earth' },
{ nama: 'Adelio', arti: 'noble prince' },
{ nama: 'Arsenio', arti: 'bold' },
{ nama: 'Aileen', arti: 'bright light' },
{ nama: 'August', arti: 'Dignified' },
{ nama: 'Bagas', arti: 'Strong' },
{ nama: 'Brady', arti: 'Everyone s friend' },
{ nama: 'Barry', arti: 'A strong leader' },
{ nama: 'World', arti: 'The universe' },
{ nama: 'Brandon', arti: 'Sword' },
{ nama: 'Candra', arti: 'Moon' },
{ nama: 'Chakra', arti: 'Arrow' },
{ nama: 'Cavan', arti: 'Handsome' },
{ nama: 'Carya', arti: 'A wanderer' },
{ nama: 'Cullen', arti: 'So handsome' },
{ nama: 'Danish', arti: 'Wise' },
{ nama: 'Damar', arti: 'Source of light' },
{ nama: 'Dary', arti: 'The wise man' },
{ nama: 'Dilan', arti: 'Faithful man' },
{ nama: 'Deon', arti: 'God' },
{ nama: 'Evans', arti: 'Young warrior' },
{ nama: 'Emery', arti: 'Kind leader' },
{ nama: 'Eric', arti: 'eternal leader' },
{ nama: 'Edwin', arti: 'Prosperous friend' },
{ nama: 'Evans', arti: 'Young warrior' },
{ nama: 'Farel', arti: 'Dare' },
{ nama: 'Farid', arti: 'Jewel' },
{ nama: 'Fahman', arti: 'Understanding' },
{ nama: 'Fannan', arti: 'Artist' },
{ nama: 'Farzan', arti: 'Wise' },
{ nama: 'Ghafi', arti: 'Forgive, soft-hearted' },
{ nama: 'Gun', arti: 'Strong' },
{ nama: 'Garry', arti: 'Mighty' },
{ nama: 'Galih', arti: 'A thinker' },
{ nama: 'Gavin', arti: 'Victory, white eagle' },
{ nama: 'Harshad', arti: 'giver of joy' },
{ nama: 'Harris', arti: 'Well-groomed' },
{ nama: 'Haydar', arti: 'Lion, brave' },
{ nama: 'Aaron', arti: 'light bearer' },
{ nama: 'Harry', arti: 'Leader' },
{ nama: 'Iravan', arti: 'King of the seas' },
{ nama: 'Irfan', arti: 'Knowledge' },
{ nama: 'Indra', arti: 'Wisdom, firmness' },
{ nama: 'Janu', arti: 'Thinking far ahead' },
{ nama: 'Javer', arti: 'bright, brilliant' },
{ nama: 'Julian', arti: 'Youth at heart' },
{ nama: 'Kavi', arti: 'Poet' },
{ nama: 'Keenan', arti: 'An owner' },
{ nama: 'Luzio', arti: 'Lighting' },
{ nama: 'Lais', arti: 'Dare' },
{ nama: 'Manu', arti: 'Man' },
{ nama: 'Marva', arti: 'Good' },
{ nama: 'Nanda', arti: 'boy' },
{ nama: 'Nadeem', arti: 'Friend' },
{ nama: 'Oskar', arti: 'mighty spearman' },
{ nama: 'Oliver', arti: 'Lovely' },
{ nama: 'Pramadana', arti: 'Highest, benefactor' },
{ nama: 'Paramayoga', arti: 'The most beautiful child' },
{ nama: 'Qori', arti: 'Reader' },
{ nama: 'Qays', arti: 'Full of rhythm' },
{ nama: 'Reiji', arti: 'Behave well' },
{ nama: 'Raden', arti: 'A Javanese nobleman' },
{ nama: 'Safwan', arti: 'A clean and sincere heart' },
{ nama: 'Syandana', arti: 'flowing continuously' },
{ nama: 'Tony', arti: 'Intelligent' },
{ nama: 'Tadya', arti: 'Order' },
{ nama: 'Uri', arti: 'Light' },
{ nama: 'Urdha', arti: 'Noble' },
{ nama: 'Vaden', arti: 'Speaker' },
{ nama: 'Vigo', arti: 'Winner' },
{ nama: 'Witton', arti: 'A wise man' },
{ nama: 'Wyman', arti: 'Warrior' },
{ nama: 'Wistara', arti: 'Clear and clever' },
{ nama: 'Wren', arti: 'Amazing' },
{ nama: 'Yasser', arti: 'Doing well' },
{ nama: 'Yardan', arti: 'King' },
{ nama: 'Zafran', arti: 'Wealth' },
{ nama: 'Zayyan', arti: 'Brilliant' },
{ nama: 'Zayn', arti: 'Jewelry' },
{ nama: 'Zahir', arti: 'Growing up well' },
{ nama: 'Adelia', arti: 'Your Majesty' },
{ nama: 'Anindira', arti: 'Brave' },
{ nama: 'Aqilla', arti: 'Clever child' },
{ nama: 'Belinda', arti: 'Beautiful' },
{ nama: 'Balerina', arti: 'ballet dancer' },
{ nama: 'Carissa', arti: 'Gorgeous' },
{ nama: 'Calista', arti: 'The most beautiful' },
{ nama: 'Dzakiyah', arti: 'intelligent' },
{ nama: 'Dairah', arti: 'Meek' },
{ nama: 'Erina', arti: 'beautiful woman' },
{ nama: 'Ermina', arti: 'Friendly' },
{ nama: 'Fany', arti: 'Happy' },
{ nama: 'Freya', arti: 'nama of the goddess of love and beauty' },
{ nama: 'Gayatri', arti: 'Has 3 powers' },
{ nama: 'Grizella', arti: 'strong warrior woman' },
{ nama: 'Ines', arti: 'Holy' },
{ nama: 'Indira', arti: 'Do justice' },
{ nama: 'Jenifer', arti: 'White Wave' },
{ nama: 'Jannie', arti: 'honest woman' },
{ nama: 'Kallista', arti: 'Beautiful' },
{ nama: 'Khairina', arti: 'Kindness' },
{ nama: 'Luvenia', arti: 'Beloved' },
{ nama: 'Marsya', arti: 'Fertile, Pleasure' },
{ nama: 'Naura', arti: 'Bright Shining Light' },
{ nama: 'Osella', arti: 'Bird' },
{ nama: 'Peggy', arti: 'Pearl' },
{ nama: 'Queisha', arti: 'Life, woman' },
{ nama: 'Sabrina', arti: 'Angel' },
{ nama: 'Talitha', arti: 'Young Youth' },
{ nama: 'Yunita', arti: 'Friendly' },
{ nama: 'Zareena', arti: 'Gold' },
{ nama: 'Chaddrick', arti: 'tough fighter' },
{ nama: 'Choky', arti: 'free' },
{ nama: 'Clodio', arti: 'your majesty' },
{ nama: 'Dagoberto', arti: 'one who shines like the sun' },
{ nama: 'Dalmiro', arti: 'one who wants an inheritance' },
{ nama: 'Daniel', arti: 'God as judge' },
{ nama: 'Darelano', arti: 'beloved gift' },
{ nama: 'Eginhardt', arti: 'the power of a sword' },
{ nama: 'Isaak', arti: 'one who laughs' },
{ nama: 'Ivory', arti: 'fir tree' },
{ nama: 'Jagur', arti: 'hunter' },
{ nama: 'Jakob', arti: 'replace' },
{ nama: 'Jan :very friendly person' },
{ nama: 'Jarvas', arti: 'one skilled with spears' },
{ nama: 'Jerry', arti: 'strong spearhead.' },
{ nama: 'Valter', arti: 'leading general' },
{ nama: 'Vamer', arti: 'army defending' },
{ nama: 'Vasyl', arti: 'brave as a bear' },
{ nama: 'Veitch', arti: 'life' },
{ nama: 'Victorious', arti: 'winner (Viktors, Viktoras)' },
{ nama: 'Vier', arti: 'four' },
{ nama: 'Viktor', arti: 'peace-loving king' },
{ nama: 'Walden', arti: 'for the (Welti) leader' },
{ nama: 'Waldermar', arti: 'powerful, famous' },
{ nama: 'Balance', arti: 'good leader (Walfredo, Walfried)' },
{
nama: 'Luna',
arti: 'moon'
},
{
nama: 'Foerza',
arti: 'strength'
},
{
nama: 'Kage',
arti: 'shadow'
},
{
nama: 'Hermoso',
arti: 'beautiful'
},
{
nama: 'Shadow',
arti: 'shadow'
},
{
nama: 'Golem',
arti: 'giant'
},
{
nama: 'Kuro',
arti: 'black'
},
{
nama: 'Vasto',
arti: 'broad'
},
{
nama: 'Nube',
arti: 'cloud'
},
{
nama: 'Chispear',
arti: 'spark'
},
{
nama: 'Leon',
arti: 'lion'
},
{
nama: 'Divan',
arti: 'majestic'
},
{
nama: 'Ostar',
arti: 'sharp'
},
{
nama: 'Vjest',
arti: 'proficient'
},
{
nama: 'Tama',
arti: 'dark'
},
{
nama: 'Siva',
arti: 'gray'
},
{
nama: 'Roze',
arti: 'pink'
},
{
nama: 'Zuto',
arti: 'yellow'
},
{
nama: 'Air',
arti: 'fist'
},
{
nama: 'Mac',
arti: 'sword'
},
{
nama: 'Strelica',
arti: 'arrow'
},
{
nama: 'Desol',
arti: 'sun'
},
{
nama: 'Ostrica',
arti: 'sword'
},
{
nama: 'Alegre',
arti: 'happiness'
},
{
nama: 'Hitac',
arti: 'to throw'
},
{
nama: 'Luminous',
arti: 'light'
},
{
nama: 'Tenaz',
arti: 'persistent'
},
{
nama: 'Laidir',
arti: 'strong'
},
{
nama: 'Fragil',
arti: 'fragile'
},
{
nama: 'Cruas',
arti: 'tough'
},
{
nama: 'Malvado',
arti: 'evil'
},
{
nama: 'Severa',
arti: 'gloomy'
},
{
nama: 'Grim',
arti: 'shadow'
},
{
nama: 'Ganar',
arti: 'win'
},
{
nama: 'Logar',
arti: 'achieved'
},
{
nama: 'Reina',
arti: 'queen'
},
{
nama: 'El rey',
arti: 'king'
},
{
nama: 'Regla',
arti: 'ruler'
},
{
nama: 'Gris',
arti: 'gray'
},
{
nama: 'Sciros',
arti: 'destruction'
},
{
nama: 'Enorme',
arti: 'big'
},
{
nama: 'Iluvia',
arti: 'rain'
},
{
nama: 'Almighty',
arti: 'almighty'
},
{
nama: 'Ambition',
arti: 'ambition'
},
{
nama: 'Nunca',
arti: 'never'
},
{
nama: 'Aqua',
arti: 'water'
},
{
nama: 'Teska',
arti: 'difficult'
},
{
nama: 'Vitals',
arti: 'vital'
},
{
nama: 'Glass',
arti: 'sound'
},
{
nama: 'Kisa',
arti: 'rain'
},
{
nama: 'Alev',
arti: 'red'
},
{
nama: 'Puppet',
arti: 'doll'
},
{
nama: 'Vites',
arti: 'knight'
},
{
nama: 'Metal',
arti: 'metal'
},
{
nama: 'Blades',
arti: 'sword'
},
{
nama: 'Izliv',
arti: 'dry'
},
{
nama: 'Canon',
arti: 'cannon'
},
{
nama: 'Muirin',
arti: 'family'
},
{
nama: 'Cairde',
arti: 'friend'
},
{
nama: 'Lame',
arti: 'weak'
},
{
nama: 'Ruin',
arti: 'destroyed'
},
{
nama: 'Storm',
arti: 'storm'
},
{
nama: 'Wild',
arti: 'wild'
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
