import { parseTopic } from './topic-trivia-seed-parser.js';

const moviesTV = parseTopic(`
@beginner
Which animated movie features a lost clownfish called Nemo?|Finding Nemo|What kind of fish is Nemo in Finding Nemo?|Clownfish
Which Disney movie has a princess named Elsa who controls snow and ice?|Frozen|What power does Elsa have in Frozen?|Ice and snow
Which film series features the cowboy toy Woody?|Toy Story|What kind of toy is Woody in Toy Story?|A cowboy doll
Which movie features a young lion named Simba?|The Lion King|What type of animal is Simba?|Lion
Which animated movie stars a friendly green ogre?|Shrek|What kind of creature is Shrek?|Ogre
Which Disney movie features a girl sailing across the ocean to save her island?|Moana|What is the name of the ocean-voyaging heroine in Moana?|Moana
Which movie features an old man flying a house using balloons?|Up|What makes the house fly in Up?|Balloons
In which Christmas movie is a boy accidentally left at home alone?|Home Alone|What is the first name of the boy left behind in Home Alone?|Kevin
Which movie series features a young wizard named Harry Potter?|Harry Potter|What school does Harry Potter attend?|Hogwarts
Which movie franchise features the masked villain Darth Vader?|Star Wars|What fictional weapon glows in Star Wars?|Lightsaber
Which classic movie features Dorothy following a yellow brick road?|The Wizard of Oz|What color is the brick road Dorothy follows?|Yellow
Which movie has a nanny who flies with an umbrella?|Mary Poppins|What object does Mary Poppins use to float through the air?|Umbrella
Which Disney movie tells the story of a young deer?|Bambi|What type of animal is Bambi?|Deer
Which fairy-tale movie features seven dwarfs?|Snow White and the Seven Dwarfs|How many dwarfs live with Snow White?|Seven
Which fairy-tale movie features a lost glass slipper?|Cinderella|What shoe does Cinderella leave behind?|Glass slipper
Which animated comedy features little yellow helpers called Minions?|Despicable Me|What are Gru's yellow helpers called?|Minions
Which Pixar movie has emotions including Joy and Sadness as characters?|Inside Out|Which emotion wears blue in Inside Out?|Sadness
Which animated movie features the race car Lightning McQueen?|Cars|What kind of vehicle is Lightning McQueen?|Race car
Which film features an orange-brown bear who loves marmalade sandwiches?|Paddington|What food does Paddington Bear especially love?|Marmalade sandwiches
Which animated show features a sponge who works at the Krusty Krab?|SpongeBob SquarePants|What is the name of SpongeBob's pink starfish friend?|Patrick Star
@novice
Which animated movie features the snowman Olaf?|Frozen|Which character in Frozen is a friendly snowman?|Olaf
Which TV cartoon follows a group of rescue dogs led by Ryder?|PAW Patrol|What is the name of the boy who leads the pups in PAW Patrol?|Ryder
Which animated series has the electric mouse Pokémon Pikachu?|Pokémon|What type of creature is Pikachu?|A Pokémon
Which TV show features the yellow bird Big Bird?|Sesame Street|What color is Big Bird in Sesame Street?|Yellow
Which movie features a talking rat who wants to be a chef?|Ratatouille|What is the rat chef's name in Ratatouille?|Remy
Which movie features a superhero family named the Parrs?|The Incredibles|What is the family's superhero surname in The Incredibles?|Parr
Which movie features a girl named Mulan who joins the army in disguise?|Mulan|Whom does Mulan disguise herself as to join the army?|A male soldier
Which movie features the princess Rapunzel with very long hair?|Tangled|What is the princess's name in Tangled?|Rapunzel
Which animated movie features the dragon Toothless?|How to Train Your Dragon|What type of creature is Toothless?|Dragon
Which superhero is the main character in the movie Black Panther?|Black Panther|What is the fictional African nation in Black Panther called?|Wakanda
@amateur
Who plays Hermione Granger in the Harry Potter films?|Emma Watson|Which Harry Potter character is played by Emma Watson?|Hermione Granger
Who plays Harry Potter in the film series?|Daniel Radcliffe|Which wizard character does Daniel Radcliffe play?|Harry Potter
Who plays Jack Sparrow in Pirates of the Caribbean?|Johnny Depp|Which pirate does Johnny Depp portray in Pirates of the Caribbean?|Jack Sparrow
Who plays Iron Man in the Marvel films?|Robert Downey Jr.|Which Marvel hero is played by Robert Downey Jr.?|Iron Man
Who voiced the character of Shrek in the original English-language films?|Mike Myers|Which animated green ogre did Mike Myers voice?|Shrek
Who plays Wednesday Addams in the 2022 Netflix series Wednesday?|Jenna Ortega|Which title character is played by Jenna Ortega in the TV series Wednesday?|Wednesday Addams
Who plays Katniss Everdeen in The Hunger Games films?|Jennifer Lawrence|Which Hunger Games heroine is played by Jennifer Lawrence?|Katniss Everdeen
Who plays Peter Parker in Spider-Man: Homecoming?|Tom Holland|Which hero is played by Tom Holland in Spider-Man: Homecoming?|Spider-Man
Who played Willy Wonka in the 2005 film Charlie and the Chocolate Factory?|Johnny Depp|Which eccentric chocolatier did Johnny Depp portray in 2005?|Willy Wonka
Who played Frodo Baggins in The Lord of the Rings films?|Elijah Wood|Which Lord of the Rings hobbit was played by Elijah Wood?|Frodo Baggins
@intermediate
Who directed the 1997 film Titanic?|James Cameron|Which 1997 film about a doomed ocean liner was directed by James Cameron?|Titanic
Who directed the 1993 film Jurassic Park?|Steven Spielberg|Which 1993 dinosaur adventure was directed by Steven Spielberg?|Jurassic Park
Who played Rose in the 1997 film Titanic?|Kate Winslet|Which Titanic character was played by Kate Winslet?|Rose
Who plays Walter White in Breaking Bad?|Bryan Cranston|Which Breaking Bad character is played by Bryan Cranston?|Walter White
Who plays Eleven in Stranger Things?|Millie Bobby Brown|Which Stranger Things character is played by Millie Bobby Brown?|Eleven
Who directed The Dark Knight in 2008?|Christopher Nolan|Which Batman film starring Christian Bale was directed by Christopher Nolan in 2008?|The Dark Knight
Who played Forrest Gump in the 1994 film?|Tom Hanks|Which 1994 film's title character was played by Tom Hanks?|Forrest Gump
Who directed the 2009 science-fiction film Avatar?|James Cameron|Which 2009 film set on Pandora was directed by James Cameron?|Avatar
Who plays Daenerys Targaryen in Game of Thrones?|Emilia Clarke|Which Game of Thrones queen was played by Emilia Clarke?|Daenerys Targaryen
Who voiced the Genie in Disney's 1992 Aladdin in English?|Robin Williams|Which Aladdin character did Robin Williams voice?|Genie
@competent
Who directed the 1994 film Pulp Fiction?|Quentin Tarantino|Which 1994 crime film starring John Travolta was directed by Quentin Tarantino?|Pulp Fiction
Who played Neo in The Matrix?|Keanu Reeves|Which Matrix character was played by Keanu Reeves?|Neo
Who directed the 1972 movie The Godfather?|Francis Ford Coppola|Which 1972 mafia-family epic was directed by Francis Ford Coppola?|The Godfather
Who played the Joker in the 2008 film The Dark Knight?|Heath Ledger|Which Dark Knight villain was played by Heath Ledger?|Joker
Who plays Michael Scott in the US version of The Office?|Steve Carell|Which Office boss is played by Steve Carell?|Michael Scott
Who created the TV series The Simpsons?|Matt Groening|Which animated family TV series was created by Matt Groening?|The Simpsons
Who directed the film Inception in 2010?|Christopher Nolan|Which 2010 film about dreams within dreams was directed by Christopher Nolan?|Inception
Who played Clarice Starling in the 1991 film The Silence of the Lambs?|Jodie Foster|Which FBI trainee was played by Jodie Foster in The Silence of the Lambs?|Clarice Starling
Who directed the film E.T. the Extra-Terrestrial?|Steven Spielberg|Which film about a stranded alien and a boy named Elliott was directed by Steven Spielberg?|E.T. the Extra-Terrestrial
Who played the first on-screen James Bond in the 1962 film Dr. No?|Sean Connery|Which spy did Sean Connery play in Dr. No?|James Bond
@skilled
Who directed the 1960 film Psycho?|Alfred Hitchcock|Which 1960 thriller about the Bates Motel was directed by Alfred Hitchcock?|Psycho
Who directed the Japanese film Seven Samurai (1954)?|Akira Kurosawa|Which 1954 samurai epic was directed by Akira Kurosawa?|Seven Samurai
Who directed the film 2001: A Space Odyssey?|Stanley Kubrick|Which 1968 science-fiction film features the computer HAL 9000?|2001: A Space Odyssey
Who created the TV series Twin Peaks with Mark Frost?|David Lynch|Which mystery TV series was co-created by David Lynch and Mark Frost?|Twin Peaks
Who played the main character in the 1942 film Casablanca, Rick Blaine?|Humphrey Bogart|Which Casablanca character was played by Humphrey Bogart?|Rick Blaine
Who directed the animated film Spirited Away?|Hayao Miyazaki|Which 2001 Studio Ghibli film was directed by Hayao Miyazaki?|Spirited Away
Who played Tony Soprano in The Sopranos?|James Gandolfini|Which mob boss on The Sopranos was played by James Gandolfini?|Tony Soprano
Who directed the 1979 science-fiction horror film Alien?|Ridley Scott|Which 1979 film about the spaceship Nostromo was directed by Ridley Scott?|Alien
Who directed the 2014 film The Grand Budapest Hotel?|Wes Anderson|Which 2014 hotel-set comedy was directed by Wes Anderson?|The Grand Budapest Hotel
Who played Walter Sobchak in The Big Lebowski?|John Goodman|Which Big Lebowski character was played by John Goodman?|Walter Sobchak
@advanced
Who directed the 1954 film Rear Window?|Alfred Hitchcock|Which 1954 thriller features photographer L. B. Jefferies?|Rear Window
Who directed the French film Breathless (1960)?|Jean-Luc Godard|Which 1960 French New Wave film was directed by Jean-Luc Godard?|Breathless
Who directed the Italian film Bicycle Thieves (1948)?|Vittorio De Sica|Which 1948 Italian neorealist film was directed by Vittorio De Sica?|Bicycle Thieves
Who directed the 1950 Japanese film Rashomon?|Akira Kurosawa|Which 1950 film tells contradictory versions of the same event?|Rashomon
Who directed the 1976 movie Taxi Driver?|Martin Scorsese|Which 1976 film features Robert De Niro as Travis Bickle?|Taxi Driver
Who directed the 1927 science-fiction film Metropolis?|Fritz Lang|Which 1927 silent film features a futuristic city and robot Maria?|Metropolis
Who directed the 1966 film Persona?|Ingmar Bergman|Which 1966 Swedish psychological drama was directed by Ingmar Bergman?|Persona
Who directed the 1958 movie Vertigo?|Alfred Hitchcock|Which Hitchcock film from 1958 stars James Stewart as Scottie Ferguson?|Vertigo
Who directed the 1982 movie Blade Runner?|Ridley Scott|Which 1982 film stars Harrison Ford as Rick Deckard?|Blade Runner
Who directed the 1988 animated film Akira?|Katsuhiro Otomo|Which Japanese cyberpunk animated film from 1988 was directed by Katsuhiro Otomo?|Akira
@grandmaster
Who directed the 1924 silent film Sherlock Jr.?|Buster Keaton|Which 1924 silent film stars a projectionist who dreams himself into a movie?|Sherlock Jr.
Who directed the 1928 film The Passion of Joan of Arc?|Carl Theodor Dreyer|Which 1928 silent film features Renée Jeanne Falconetti as Joan of Arc?|The Passion of Joan of Arc
Who directed the 1931 German film M?|Fritz Lang|Which 1931 film features a murderer played by Peter Lorre?|M
Who directed the 1939 French film The Rules of the Game?|Jean Renoir|Which 1939 Jean Renoir film satirizes French upper-class society?|The Rules of the Game
Who directed the 1948 film The Red Shoes?|Michael Powell and Emeric Pressburger|Which 1948 ballet film was made by Powell and Pressburger?|The Red Shoes
Who directed the 1953 Japanese movie Tokyo Story?|Yasujirō Ozu|Which 1953 family drama follows an elderly couple visiting their grown children in Tokyo?|Tokyo Story
Who directed the 1962 movie La Jetée?|Chris Marker|Which 1962 science-fiction short film is composed largely of still photographs?|La Jetée
Who directed the 1963 film 8½?|Federico Fellini|Which 1963 film by Federico Fellini features a director named Guido?|8½
Who directed the 1966 film The Battle of Algiers?|Gillo Pontecorvo|Which 1966 film dramatizes the Algerian struggle for independence?|The Battle of Algiers
Who directed the 1969 film The Color of Pomegranates?|Sergei Parajanov|Which 1969 visually experimental film explores the poet Sayat-Nova?|The Color of Pomegranates
`);


const culture = parseTopic(`
@beginner
On which holiday do many people decorate a Christmas tree?|Christmas|What do many people decorate for Christmas?|Christmas tree
What is the name of the orange vegetable carved into a lantern at Halloween?|Pumpkin|Which holiday commonly features carved pumpkins?|Halloween
On which holiday do many people hunt for painted eggs?|Easter|What decorated objects are traditionally hunted at Easter?|Eggs
What do people often blow out on a birthday cake?|Candles|On what celebration might a person blow out candles on a cake?|Birthday
What are chopsticks mainly used for?|Eating food|What utensils are two slim sticks used for eating?|Chopsticks
Which food is made by putting toppings on a round base of dough and baking it?|Pizza|What country is pizza traditionally associated with?|Italy
What is a traditional Japanese paper-folding art called?|Origami|What material is usually folded in origami?|Paper
What is a colorful parade with costumes often called?|Carnival|What do people often wear at a costume carnival?|Costumes
What do people commonly exchange during a wedding ceremony?|Rings|At what ceremony do partners often exchange rings?|Wedding
Which meal do many people eat in the morning?|Breakfast|What is the first meal of the day commonly called?|Breakfast
What do people use to greet someone by waving?|A hand|What friendly gesture can you make by moving your open hand?|Waving
Which month commonly begins the calendar year?|January|What celebration marks the start of a new calendar year?|New Year's Day
What do many people give each other on birthdays?|Gifts|At what yearly celebration do people often give a person gifts?|Birthday
What is a recipe for?|Instructions for preparing food|What do we call written cooking instructions?|A recipe
What do people often wear to show they belong to the same sports team?|Uniform|What do you call matching clothing worn by a team?|Uniform
Which country is especially associated with sushi?|Japan|What Japanese food often uses seasoned rice and may include fish or vegetables?|Sushi
What do you call a picture made by joining small colored tiles?|Mosaic|What small pieces are arranged to create a mosaic?|Tiles
What kind of food is spaghetti?|Pasta|What long thin pasta is commonly served with tomato sauce?|Spaghetti
What is a traditional story passed down through generations called?|Folktale|What do we call stories shared by a community for generations?|Folktales
What is the common name for a stick used to beat a drum?|Drumstick|What musical instrument is played with drumsticks?|Drum
@novice
Which festival is known as the Festival of Lights in India?|Diwali|What do people light during Diwali to symbolize light overcoming darkness?|Lamps (diyas)
What is the Japanese traditional robe called?|Kimono|In what country is a kimono traditional clothing?|Japan
Which Mexican celebration honors deceased loved ones on November 1–2?|Día de los Muertos|Which culture is Día de los Muertos especially associated with?|Mexican culture
Which country is associated with the dance flamenco?|Spain|What traditional dance and music style originates in southern Spain?|Flamenco
What is a traditional Korean fermented cabbage dish called?|Kimchi|In what country is kimchi a famous side dish?|South Korea
What is the traditional Chinese New Year also called?|Lunar New Year (Spring Festival)|Which festival in China is associated with red envelopes and a zodiac animal each year?|Lunar New Year
Which Italian city is famous for its masked carnival?|Venice|What accessory often hides faces at the Venice Carnival?|Masks
What Brazilian festival is known for samba parades?|Carnival|Which musical-dance style is central to Rio de Janeiro's Carnival?|Samba
What is the Hindi word for greeting often accompanied by palms together?|Namaste|What greeting can be made by pressing the palms together in India?|Namaste
Which food from Mexico is a folded or rolled tortilla filled with ingredients?|Taco|What is the flatbread usually used to make tacos?|Tortilla
@amateur
Which language is most widely spoken in Brazil?|Portuguese|Which major South American country primarily speaks Portuguese?|Brazil
What is the French word for hello?|Bonjour|What language uses bonjour as a common hello?|French
Which festival is the Muslim month of daily fasting?|Ramadan|What celebration marks the end of Ramadan?|Eid al-Fitr
Which traditional Japanese performance art features stylized makeup and elaborate costumes?|Kabuki|Which country developed kabuki theater?|Japan
Which annual Irish holiday is associated with shamrocks and green clothing?|St Patrick's Day|What plant is a symbol of St Patrick's Day?|Shamrock
What is a Spanish word commonly used for thanks?|Gracias|Which language commonly uses gracias to say thanks?|Spanish
What is the traditional dance of Argentina and Uruguay known as?|Tango|In which two South American countries did tango develop?|Argentina and Uruguay
What is the Jewish festival of lights celebrated for eight nights?|Hanukkah|How many nights does Hanukkah last?|Eight
Which country is famous for the tea ceremony called chanoyu?|Japan|What beverage is central to the Japanese chanoyu ceremony?|Tea
What do people traditionally throw in the air at many weddings?|Confetti|At what sort of celebration is confetti often thrown over a married couple?|Wedding
@intermediate
What language family includes Spanish, Italian and French?|Romance languages|Name two Romance languages spoken in Europe.|Spanish and French (also Italian, Portuguese, Romanian etc.)
Which West African musical instrument has 21 strings and resembles a harp?|Kora|In what part of Africa is the kora particularly associated with griot traditions?|West Africa
What is the practice of decorating skin with temporary henna designs called?|Mehndi|What plant-based dye is used in mehndi designs?|Henna
Which Japanese art form arranges flowers with emphasis on form and space?|Ikebana|What objects are arranged in the Japanese art of ikebana?|Flowers
What is the traditional Chinese board game with black and white stones on a grid?|Go (Weiqi)|What two colors are the stones normally used in Go?|Black and white
Which Italian cultural movement began in the 14th century and renewed classical learning?|Renaissance|In which country did the Renaissance begin?|Italy
What is the musical storytelling and dance performance form of Bali called?|Legong|Which Indonesian island is known for Legong dance?|Bali
Which celebration takes place during the Jewish springtime and recalls the Exodus?|Passover|Which biblical event is remembered during Passover?|Exodus from Egypt
What is the Korean traditional dress called?|Hanbok|In which country is hanbok traditional clothing?|Korea
What is the traditional decorative hand-painting style of India often using henna?|Mehndi|What natural dye is commonly used for Indian mehndi?|Henna
@competent
What is the name of the West African oral historian and storyteller tradition?|Griot|Which region is strongly associated with griot storytelling?|West Africa
Which Japanese theatrical form uses masked actors and stylized movement?|Noh|In which country did Noh theater develop?|Japan
What language family includes Hindi and Bengali?|Indo-Aryan|Name one major Indo-Aryan language.|Hindi (also Bengali and many others)
Which East Asian festival features dragon boats and commemorates Qu Yuan?|Dragon Boat Festival|What type of boats race during the Dragon Boat Festival?|Dragon boats
What is the traditional Indonesian wax-resist dyeing technique called?|Batik|In what region of Asia did the batik textile tradition develop?|Southeast Asia
What French term describes a way of living well, especially through food and hospitality?|Art de vivre|What does the French expression art de vivre literally mean?|Art of living
What is the Spanish term for a small savory dish served with drinks?|Tapa|In which country's cuisine are tapas traditional?|Spain
Which Moroccan city is known for its Jemaa el-Fnaa square?|Marrakesh|What famous public square lies at the heart of Marrakesh?|Jemaa el-Fnaa
Which Ethiopian staple food is a sour spongy flatbread made with teff?|Injera|Which grain is traditionally used to make injera?|Teff
What is the traditional decorative knotting craft associated with Chinese festivals called?|Chinese knotting|What type of handiwork uses cords tied into decorative symbolic patterns?|Knotting
@skilled
What Indian classical dance style originated in Tamil Nadu?|Bharatanatyam|In which Indian state did Bharatanatyam develop?|Tamil Nadu
Which Persian new-year festival falls around the spring equinox?|Nowruz|At what astronomical season change is Nowruz celebrated?|Spring equinox
What Korean writing system was commissioned under King Sejong?|Hangul|Which Korean king is associated with creation of Hangul?|King Sejong
Which Chinese decorative art uses carved red lacquer?|Cinnabar lacquer carving|What material is carved in traditional Chinese red lacquerware?|Layers of lacquer
What is the traditional Japanese repair art using gold to highlight cracks?|Kintsugi|What is used to emphasize repaired cracks in kintsugi?|Gold-colored lacquer
Which Mexican embroidered garment is a loose-fitting tunic called?|Huipil|What kind of clothing is a huipil?|Traditional woven tunic or blouse
Which North African cuisine uses a conical-lidded pot also called a tagine?|Moroccan cuisine|What is the name of the conical cooking vessel used in Moroccan tagine dishes?|Tagine
Which Japanese festival celebrates children on May 5 with carp streamers?|Children's Day (Kodomo no Hi)|What fish-shaped flags are flown for Japan's Children's Day?|Carp streamers
What is the Indian decorative floor art made with colored powder called?|Rangoli|What is commonly used to make rangoli patterns?|Colored powder or flower petals
Which ancient Greek theatrical festival honored the god Dionysus?|City Dionysia|Which Greek god was honored by the City Dionysia?|Dionysus
@advanced
Which artistic movement associated with the 1920s Harlem neighborhood celebrated Black cultural expression?|Harlem Renaissance|In which New York neighborhood did the Harlem Renaissance flourish?|Harlem
Which Indigenous North American decorative weaving tradition is particularly associated with the Navajo Nation?|Navajo weaving|Which Indigenous nation is especially associated with Navajo rugs?|Navajo (Diné)
Which Indonesian shadow-puppet theater is called wayang kulit?|Wayang kulit|What material is traditionally used to make wayang kulit shadow puppets?|Leather
What is the Japanese term for the tea ceremony often translated as the Way of Tea?|Sadō or Chadō|What beverage is central to sadō?|Tea
Which country has the national performing arts tradition of pansori?|South Korea|What is pansori?|Korean musical storytelling performed by singer and drummer
Which Irish language branch is part of the Celtic language family?|Goidelic|Name a Goidelic Celtic language.|Irish (or Scottish Gaelic or Manx)
What is the Italian Renaissance art technique creating an illusion of depth with a vanishing point?|Linear perspective|What is the point where parallel lines seem to meet in perspective drawing?|Vanishing point
Which textile art of Japan uses stitching to create intricate white-on-blue patterns?|Sashiko|What technique is sashiko?|Decorative or reinforcing hand stitching
Which festival in Thailand is famous for floating lotus-shaped baskets on water?|Loy Krathong|What is a krathong during the Thai Loy Krathong festival?|A small decorated floating offering
What word means a story that explains a culture's origins or sacred traditions?|Myth|What do we call the study of traditional myths?|Mythology
@grandmaster
Which Japanese aesthetic concept celebrates imperfection and impermanence?|Wabi-sabi|Which two broad qualities are valued by wabi-sabi?|Imperfection and impermanence
What is the Andean knotted-cord recording system called?|Quipu (Khipu)|Which pre-Columbian empire used quipu for record-keeping?|Inca Empire
Which French sociologist made the concept of habitus central to modern cultural theory?|Pierre Bourdieu|What term describes embodied social dispositions in Bourdieu's sociology?|Habitus
Which Yoruba masquerade tradition honors ancestors through masked performance?|Egungun|Which West African cultural tradition is Egungun especially associated with?|Yoruba
What is the Japanese term for the floating-world woodblock print genre?|Ukiyo-e|What kind of art does ukiyo-e refer to?|Japanese woodblock prints and paintings
Which theoretical concept is the study of signs and their meanings?|Semiotics|What does semiotics study?|Signs and meaning
Which Indonesian communal agricultural water-management tradition in Bali is called?|Subak|What Balinese system organizes irrigation collectively?|Subak
Which Inuit stone landmark made of balanced rocks serves as a marker?|Inuksuk|Which Indigenous Arctic culture is especially associated with inuksuit?|Inuit
What is the Yoruba divination system using odù called?|Ifá|What are the textual or oral corpora consulted in Ifá divination called?|Odù
Which ancient Mesopotamian epic features a king of Uruk seeking immortality?|Epic of Gilgamesh|Which city did Gilgamesh reign over according to the epic?|Uruk
`);

export const TOPIC_FACTS_B = { 'movies-tv': moviesTV, culture };
