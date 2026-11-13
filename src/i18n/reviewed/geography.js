export const geographyBeginner = `Hoe heet de planeet waarop wij leven?|Wat stelt een wereldbol voor?
Hoe noemen we een heel grote hoeveelheid zout water?|Bestaat de Stille Oceaan uit zoet of zout water?
Hoe noemen we een hooggelegen stuk land?|Hoe noemen we een zeer hoge natuurlijke verheffing in het landschap?
Welke windrichting staat op een gewone kaart meestal bovenaan?|Welke windrichting ligt tegenover het zuiden?
Hoe noemen we water dat door een natuurlijke bedding stroomt?|Hoe noemen we een grotere natuurlijke waterloop?
Is de Sahara een woestijn of een oceaan?|Hoe heet de enorme woestijn in Noord-Afrika?
Op welk continent ligt Egypte?|Ligt Egypte in Afrika of in Australië?
Op welk continent ligt Frankrijk?|Ligt Frankrijk in Europa of in Zuid-Amerika?
Hoe noemen we een groot stuk land dat helemaal door water is omringd?|Is Groenland een eiland of een rivier?
Wat is de grootste oceaan ter wereld?|Welke oceaan ligt tussen Azië en Noord- en Zuid-Amerika?
Welk continent heeft de grootste oppervlakte?|Heeft Azië een grotere oppervlakte dan Europa?
In welke windrichting lijkt de zon op te komen?|Welke windrichting ligt tegenover het westen?
Hoe noemen we de denkbeeldige lijn rond het midden van de aarde?|Ligt de evenaar dichter bij de Noordpool of bij het midden van de aarde?
Welk land staat bekend om de Eiffeltoren?|In welke stad staat de Eiffeltoren?
Waarvoor gebruik je een landkaart?|Gebruik je een kaart om de weg te vinden of om een taart te bakken?
Hoe noemen we land dat aan drie kanten door water wordt omringd?|Lijkt Italië qua vorm meer op een laars of een driehoek?
Op welk continent ligt Brazilië?|Op welk werelddeel ligt Brazilië?
Hoe heet bevroren water dat 's winters de grond bedekt?|Hoe noemen we de witte, bevroren neerslag die in de winter valt?
Wat is groter: een meer of een plas?|Hoe noemen we een grote hoeveelheid water die helemaal door land wordt omringd?
Welke windrichting ligt tegenover het oosten?|Welke windrichting ligt tegenover het noorden?`;

// The 70 pairs of capital-city questions are deliberately expressed by two
// manually reviewed Dutch grammatical templates. Local names use Dutch spelling.
export const countriesNL = {
  'the United Kingdom':'het Verenigd Koninkrijk', 'the Netherlands':'Nederland', France:'Frankrijk', Italy:'Italië', Spain:'Spanje', Germany:'Duitsland', 'United Kingdom':'het Verenigd Koninkrijk',
  Netherlands:'Nederland', Portugal:'Portugal', Belgium:'België', Denmark:'Denemarken', Norway:'Noorwegen',
  Sweden:'Zweden', Finland:'Finland', Greece:'Griekenland', Ireland:'Ierland', Poland:'Polen', Japan:'Japan',
  China:'China', Australia:'Australië', Canada:'Canada', Austria:'Oostenrijk', Hungary:'Hongarije',
  Czechia:'Tsjechië', Switzerland:'Zwitserland', Turkey:'Turkije', Thailand:'Thailand', 'South Korea':'Zuid-Korea',
  Mexico:'Mexico', Argentina:'Argentinië', Kenya:'Kenia', Egypt:'Egypte', Chile:'Chili', Peru:'Peru',
  Colombia:'Colombia', Morocco:'Marokko', 'New Zealand':'Nieuw-Zeeland', Vietnam:'Vietnam', Malaysia:'Maleisië',
  Pakistan:'Pakistan', Bangladesh:'Bangladesh', Ukraine:'Oekraïne', Slovakia:'Slowakije', Slovenia:'Slovenië',
  Croatia:'Kroatië', Romania:'Roemenië', Bulgaria:'Bulgarije', Estonia:'Estland', Latvia:'Letland',
  Lithuania:'Litouwen', Serbia:'Servië', Albania:'Albanië', Georgia:'Georgië', Armenia:'Armenië',
  Azerbaijan:'Azerbeidzjan', Mongolia:'Mongolië', Uzbekistan:'Oezbekistan', Kyrgyzstan:'Kirgizië',
  Tajikistan:'Tadzjikistan', Nepal:'Nepal', Cambodia:'Cambodja', Laos:'Laos', Bhutan:'Bhutan',
  Eritrea:'Eritrea', Djibouti:'Djibouti', Suriname:'Suriname', Guyana:'Guyana', Moldova:'Moldavië',
  'North Macedonia':'Noord-Macedonië', 'Timor-Leste':'Oost-Timor', Lesotho:'Lesotho', Seychelles:'de Seychellen'
};
export const capitalsNL = {
 Rome:'Rome', London:'Londen', Lisbon:'Lissabon', Brussels:'Brussel', Copenhagen:'Kopenhagen',
 Warsaw:'Warschau', Vienna:'Wenen', Prague:'Praag', Seoul:'Seoel', 'Mexico City':'Mexico-Stad',
 Cairo:'Caïro', Bucharest:'Boekarest', Belgrade:'Belgrado', Yerevan:'Jerevan', 'Ulaanbaatar':'Ulaanbaatar',
 'Tashkent':'Tasjkent', Bishkek:'Bisjkek', Dushanbe:'Doesjanbe', Kathmandu:'Kathmandu',
 'Phnom Penh':'Phnom Penh', 'Djibouti City':'Djibouti', 'Chișinău':'Chisinau', Skopje:'Skopje'
};
export function translateCapitalRow(row) {
  const m=row[0].match(/^What is the capital of (.+?)(?: \(the country\))?\?$/);
  if(!m)return null;
  const country = m[1];
  const nlCountry=countriesNL[country];
  if(!nlCountry)return null;
  const capital=capitalsNL[row[1]]||row[1];
  let question1=`Wat is de hoofdstad van ${nlCountry}?`;
  let question2=`Van welk land is ${capital} de hoofdstad?`;
  if(country==='Switzerland')question2=`Van welk land is Bern de federale stad en feitelijke hoofdstad?`;
  if(country==='Malaysia')question2=`Van welk land is Kuala Lumpur de officiële hoofdstad en zetel van het parlement?`;
  if(country==='Djibouti')question2=`Van welk Afrikaans land is Djibouti de hoofdstad?`;
  if(country==='Guyana')question2=`Van welk Zuid-Amerikaans land is Georgetown de hoofdstad?`;
  if(country==='Seychelles')question2=`Van welke eilandstaat in de Indische Oceaan is Victoria de hoofdstad?`;
  if(country==='Georgia')question2=`Van welk land in de Kaukasus is Tbilisi de hoofdstad?`;
  return [question1,question2];
}
