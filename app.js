let favoriteCityId = 'rome'
console.log(favoriteCityId)
favoriteCityId = 'paris'
console.log(favoriteCityId)

/////////////////////////////////////////////////////////////////

let citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro']
console.log("////////////////////////////////")
console.log(citiesId)

/////////////////////////////////////////////////////////////////

/* 
citiesId = []
console.log(citiesId) 
=====> Erreur car on ne peut pas réassigner une constante
*/

/////////////////////////////////////////////////////////////////

citiesId.push('tokyo')
console.log("////////////////////////////////")
console.log(citiesId)

/////////////////////////////////////////////////////////////////

function getWeather(cityId)
{
	city = cityId.toUpperCase();
	temperature = 20;

	return '{city: "' + city + '", temperature: ' + temperature + "}";

}

const weather = getWeather(favoriteCityId)
console.log("////////////////////////////////")
console.log(weather)
console.log("////////////////////////////////")

/////////////////////////////////////////////////////////////////

let weather2 = { city: 'PARIS', temperature: 20 };

let {  city: CITY, temperature: TEMP} = weather2;

console.log(CITY); 
console.log(TEMP);
console.log("////////////////////////////////")

/////////////////////////////////////////////////////////////////

let [parisId, nycId, othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);
console.log("////////////////////////////////")

/////////////////////////////////////////////////////////////////

class Trip
{

	constructor(id,name,imageUrl) 
	{
	  this.id = id;
	  this.name = name;
	  this.imageUrl = imageUrl;
	}

	get price()
	{
		return this._price;
	}

  	set price(newPrice) 
  	{
 		this._price = newPrice;
  	}

  	static getDefaultTrip(id, name, imageUrl) 
  	{
  		id = "rio-de-janeiro";
  		name = "Rio de Janeiro";
  		imageUrl = "img/rio-de-janeiro.jpg";
  		return 'Trip [' + id + ', ' + name + ', ' + imageUrl + ']';
  	}

}

const parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
parisTrip.price = 100;

Trip.prototype.toString = function tripToString() 
{
  return `Trip [${this.id},${this.name},${this.imageUrl},${this.price}]`;
};


const defaultTrip = Trip.getDefaultTrip();

console.log(parisTrip)
console.log(parisTrip.name)
console.log(parisTrip.toString())
console.log(defaultTrip)


/////////////////////////////////////////////////////////////////

class FreeTrip extends Trip {}
const freeTrip = new Trip("nantes", "Nantes", "img/nantes.jpg");
parisTrip.price = 0;

console.log(freeTrip)

FreeTrip.prototype.toString = function freetripToString() 
{
  return `FreeTrip [${this.id},${this.name},${this.imageUrl},${this.price}]`;
};

console.log(freeTrip.toString())

/////////////////////////////////////////////////////////////////

class TripService 
{
  constructor() 
  {
  // TODO Set of 3 trips
  //
  	this.parisTrip = new Trip("paris", "Paris", "img/paris.jpg");// new Trip('paris', 'Paris', 'img/paris.jpg')
  	this.nantesTrip = new Trip("nantes", "Nantes", "img/nantes.jpg");// new Trip('nantes', 'Nantes', 'img/nantes.jpg')
  	this.rioTrip = new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")// new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
  }
  findByName(tripName) 
  {
  return new Promise((resolve, reject) => 
  {
	  setTimeout( () => {
	  // ici l'exécution du code est asynchrone
	  // TODO utiliser resolve et reject en fonction du résultat de la recherche
	  }, 2000)
	  });
  }
}
class PriceService 
{
  constructor() 
  {

  // TODO Map of 2 trips
	  let mapMap = new Map()  
	  
	  	mapMap.set('paris', 100);// 'paris' --> price == 100
		mapMap.set('rio-de-janeiro', 800);// 'rio-de-janeiro' --> price == 800)
		// no price for 'nantes'
  }
  findPriceByTripId(tripId) 
  {
  return new Promise((resolve, reject) => 
  {
  setTimeout( () => 
  {
  // ici l'exécution du code est asynchrone
  // TODO utiliser resolve et reject en fonction du résultat de la recherche
  }, 2000)
  });
  }
}

