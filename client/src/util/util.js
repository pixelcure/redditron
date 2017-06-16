
// Use the SVG DOM to read each vertex position and then work out 
// the distance between the vertices using pythagoras theorem. 
// Then add up all the distances.
export const polylineLength = (polyline) => {
	
	let totalLength = 0,
		prevPos;


	for (let i = 0 ; i < polyline.points.numberOfItems;i++) {
	    let pos = polyline.points.getItem(i);
	    if (i > 0) {
	        totalLength += Math.sqrt(Math.pow((pos.x - prevPos.x), 2) + Math.pow((pos.y - prevPos.y), 2));
	    };
	    prevPos = pos;
	};

	return totalLength;
};

// Shuffle Array
export const shuffle = (array) => {
	
	let currentIndex = array.length, 
		temporaryValue, 
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

// Generate Integer
export const getRandomNum = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

// Unix Timestamp to Human Time
export const timeConverter = (timestamp) => {
  
  // Timestamp * 1000
  let a = new Date(timestamp * 1000);
  
  // Get months
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  
  // Get year
  let year = a.getFullYear();
  
  // Find month based off timestanp
  let month = months[a.getMonth()];
  
  // Get day
  let day = a.getDate();
  
  // Get hour
  let hour = a.getHours();
  
  // Get minute
  let min = a.getMinutes();
  
  // Get seconds
  let sec = a.getSeconds();

  // Concat data
  let time = `${month}/${day}/${year} ${hour}:${min}:${sec}`;
  
  // return concat date/time
  return time;

};

// Nav Items
export const navItems = [
	{	
		text : '❤', 
		to : 'favorites'
	}, 
	{
		text : '📞️', 
		to : 'contact'
	}
];

// Reddit board tabs
export const tabs = [
				'top',
				'new',
				'hot',
				'rising',
				'controversial'
		];

// Random Boards
export const randomBoards = [
	'pics',
	'nyc',
	'cats',
	'gifs',
	'art',
	'analog',
	'cringepics',
	'memes',
	'skyporn',
	'ImaginaryLandscapes',
	'ImaginaryMonsters',
	'ImaginaryTechnology',
	'specart',
	'ApocalypsePorn',
	'wallpapers',
	'drawing',
	'museum',
	'trippy',
	'artporn',
	'alternativeart',
	'idap',
	'earthporn',

	'PhotoshopBattles',
	'perfecttiming',
	'itookapicture',
	'Pareidolia',
	'ExpectationVSReality',
	'dogpictures',
	'misleadingthumbnails',
	'FifthWorldPics',
	'TheWayWeWere',

	'PhotoshopBattles',
	'ColorizedHistory',
	'reallifedoodles',
	'HybridAnimals'

];

// Random Boards
export const randomNsfwBoards = [
	'altgonewild',
	'gonewild',
	'asiansgonewild',
	'petitegonewild',
	'curvygonewild',
	'PokémonGoNSFW',
	'braww',
	'BDSM',
	'Polygonwild',
	'uncommonposes',
	'coffeegonewild',
	'erotica',
	'NSFW411',
	
	'nsfw',
	'Hotchickswithtattoos',
	'randomsexiness',
	'HappyEmbarrassedGirls',
	'suicidegirls',
	'nsfw2',
	'unashamed',
	'Camwhores',
	'TipOfMyPenis',
	'bonermaterial',
	'passionx',
	'porn',
	'sexyfrex',
	'nsfw411',
	'iWantToFuckHer',
	'freeuse',
	'exxxtras',
	'distension',
	'bimbofetish',
	'christiangirls',
	'cuckold',
	'dirtygaming',
	'facesitting',
	'sexybutnotporn',
	'borednignored',
	'femalepov',
	'tanlines',
	'omgbeckylookathiscock',
	'camsluts',

	'GoneWild',
	'PetiteGoneWild',
	'gonewildstories',
	'GoneWildTube',
	'treesgonewild',
	'gonewildaudio',
	'GWNerdy',
	'gonemild',
	'altgonewild',
	'gifsgonewild',
	'analgw',
	'gonewildsmiles',
	'onstageGW',
	'RepressedGoneWild',
	'bdsmgw',
	'UnderwearGW',
	'LabiaGW'


];