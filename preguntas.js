/* =====================================================================
   Banco de preguntas — English File Beginner, 5th edition (Oxford, 2025)
   Cada File tiene tres niveles: f = Fácil, m = Medio, d = Difícil.
   Los textos sueltos ("Libro p.92 · Grammar Bank 1A") son la página de
   referencia: se aplican a todas las preguntas que vienen después.
   ===================================================================== */
const M=(q,a,o,e)=>({t:"m",q,a,o,e});            // opción múltiple
const L=(a,o,e,say)=>({t:"l",a,o,e,say});         // escuchar y elegir
const O=(a,q,e,alt)=>({t:"o",a,q,e,alt});         // ordenar la oración (q = traducción)
const W=(q,a,e)=>({t:"w",q,a:[].concat(a),e});    // escribir

/* Páginas del libro */
const GB=(n,l)=>`Libro p.${90+n*2} · Grammar Bank ${n}${l||""}`;
const VB=(p,t)=>`Libro p.${p} · Vocabulary Bank (${t})`;
const SB=(p,l)=>`Libro p.${p} · ${l}`;
const WB=(p,l)=>`Workbook p.${p} · ${l}`;
const WORDS=(p,f)=>`Libro p.${p} · Words and phrases to learn (${f})`;

const UNITS=[
/* ============================== FILE 1 ============================== */
{n:1,t:"Nice to meet you · Music round the world",g:"be: I, you, he, she, it · números 0–10 · días · países · el aula",pages:"pp. 6–11, 92, 116–118",
f:[
 GB(1,"A"),
 M("I ___ Helen.","am",["are","is","be"],"Con I siempre va am: I am = I'm."),
 M("You ___ Tom.","are",["am","is","be"],"Con you va are: you are = you're."),
 M("— Are you Mike? — Yes, I ___.","am",["are","is","do"],"Respuesta corta afirmativa sin contraer: Yes, I am."),
 M("— Am I in class 2? — Yes, you ___.","are",["am","is","be"]),
 GB(1,"B"),
 M("He ___ from Italy.","is",["are","am","be"],"Con he / she / it va is."),
 M("She ___ from Spain.","is",["are","am","be"],"She is = She's."),
 M("___ he from France?","Is",["Are","Am","Be"],"Pregunta: el verbo va antes del sujeto: Is he…?"),
 M("he = …","un hombre",["una mujer","una cosa","un grupo"],"he = man, she = woman, it = thing."),
 VB(116,"Numbers"),
 M("seven + two = ___","nine",["eight","ten","six"]),
 M("three + five = ___","eight",["seven","nine","six"]),
 M("ten − six = ___","four",["five","three","two"]),
 VB(117,"Countries"),
 M("¿Cómo se dice «Alemania»?","Germany",["Germania","German","Germanland"],"Germany es el país; German es la nacionalidad."),
 M("¿Cómo se dice «Suiza»?","Switzerland",["Sweden","Swissland","Swiss"]),
 M("¿Cómo se dice «Egipto»?","Egypt",["Egipt","Egyptian","Egito"]),
 M("¿Cómo se dice «Estados Unidos»?","the United States",["the America States","the Unity States","the States United"]),
 VB(118,"The classroom"),
 M("«Open your books.» significa…","Abran los libros.",["Cierren los libros.","Miren el pizarrón.","Siéntense."]),
 M("«Sit down.» significa…","Sentate.",["Parate.","Abrí la puerta.","Mirá el pizarrón."]),
 M("«the board» es…","el pizarrón",["la puerta","la ventana","la mesa"]),
 M("«a chair» es…","una silla",["una mesa","una ventana","una puerta"]),
 SB(6,"1A"),
 M("¿Cómo decís «Encantado/a de conocerte»?","Nice to meet you.",["Nice to see you tomorrow.","Meet you nice.","How are you meet?"]),
 M("Te despedís y lo/la ves mañana. ¿Qué decís?","See you tomorrow.",["Nice to meet you.","Hello.","Just a minute."])
],
m:[
 GB(1,"A"),
 M("— ___ you Liz? — No, I'm not. I'm Maria.","Are",["Am","Is","Do"]),
 M("You ___ in room 5. You're in room 4.","aren't",["isn't","not","am not"],"you are not = you aren't (o you're not)."),
 M("___ Ellen. I'm Marisa.","I'm not",["I not","I aren't","I isn't"],"I am not = I'm not."),
 O("Are you in class 2?","¿Estás en la clase 2?"),
 O("I'm not in room 4.","No estoy en el aula 4."),
 GB(1,"B"),
 M("— Is Ivan from Poland? — No, he ___. He's from Russia.","isn't",["aren't","not","is"]),
 M("— Where's Bergamo? — ___ in Italy.","It's",["He's","She's","Is"],"Para lugares y cosas: it."),
 M("Strasbourg ___ in Germany. It's in France.","isn't",["aren't","not","is"]),
 M("Where ___ she from?","is",["are","am","does"]),
 M("— Is it good? — Yes, ___.","it is",["it's","is it","he is"],"En las respuestas cortas afirmativas no se contrae: Yes, it is."),
 O("Where's he from?","¿De dónde es él?"),
 SB(8,"1B"),
 O("Where are you from?","¿De dónde sos?"),
 O("I think it's in Italy.","Creo que está en Italia."),
 L("She's from Spain.",["He's from Spain.","She's from Japan.","She isn't from Spain."]),
 L("I'm not Tom.",["I'm Tom.","I'm not Tony.","You aren't Tom."]),
 SB(6,"1A"),
 L("Thursday",["Tuesday","Saturday","Sunday"],"Thursday empieza con /θ/; Tuesday con /tj/."),
 SB(10,"Practical English 1"),
 M("— What's your surname? — Gómez. — ___","How do you spell it?",["How do you say it?","What do you spell?","How spell you it?"]),
 VB(118,"The classroom"),
 M("No entendiste lo que dijo la profe. ¿Qué decís?","Sorry? Can you repeat that, please?",["Sorry I'm late.","See you tomorrow.","Look at the board, please."]),
 M("No sabés la respuesta. ¿Qué decís?","I don't know.",["I don't understand.","Sorry I'm late.","How do you spell it?"])
],
d:[
 GB(1,"A"),
 W("Contracción: I am → ___","i'm"),
 W("Contracción: you are not → ___",["you aren't","you're not"],"El libro acepta las dos: you aren't / you're not."),
 W("Respuesta corta: — Are you Tom? — Yes, ___.","i am","No se contrae: Yes, I am (nunca «Yes, I'm»)."),
 M("¿Cuál está bien?","I'm Helen.",["Am Helen.","I Helen.","Helen I'm."],"Siempre hace falta el sujeto: I'm Helen."),
 GB(1,"B"),
 W("Contracción: he is not → ___",["he isn't","he's not"]),
 W("Respuesta corta: — Is she from Brazil? — No, ___.",["she isn't","she's not"]),
 W("Hacé la pregunta: «She's from Russia.» → ___ she from Russia?","is"),
 W("Completá: «___ are you from?» (dónde)","where"),
 M("¿Cuál está bien?","Where's he from?",["Where he is from?","Where from is he?","From where he is?"]),
 VB(117,"Countries"),
 W("País: «Italia» en inglés","italy","Los países van con mayúscula: Italy."),
 W("País: «Rusia» en inglés","russia"),
 W("País: «Japón» en inglés","japan"),
 W("País: «Turquía» en inglés",["türkiye","turkiye","turkey"],"El libro usa Türkiye."),
 VB(118,"The classroom"),
 O("Excuse me. What's gracias in English?","Disculpe, ¿cómo se dice gracias en inglés?"),
 O("Sorry? Can you repeat that, please?","¿Perdón? ¿Podés repetir eso, por favor?"),
 SB(10,"Practical English 1"),
 L("How do you spell it?",["How do you say it?","How are you?","Where are you from?"])
]},

/* ============================== FILE 2 ============================== */
{n:2,t:"Are you on holiday? · What number is the bus?",g:"be: we, you, they · nacionalidades · preguntas Wh- · números 11–100",pages:"pp. 12–17, 94, 116–117",
f:[
 GB(2,"A"),
 M("We ___ on holiday.","are",["is","am","be"]),
 M("They ___ from Mexico.","are",["is","am","be"]),
 M("___ they free? — Yes, they are.","Are",["Is","Am","Do"]),
 M("Anna and Tom are from London. ___'re from London.","They",["We","You","She"]),
 M("Diana and I are in room 4. ___'re in room 4.","We",["They","You","She"]),
 M("The Taj Mahal is in India. ___'s in India.","It",["He","She","They"]),
 GB(2,"B"),
 M("___ old is he?","How",["What","Who","Where"]),
 M("___'s your name?","What",["Who","How","When"]),
 M("— ___ is she? — She's my friend, Julia.","Who",["What","Where","How"],"Who = quién."),
 M("— ___'s the concert? — On Tuesday at 7.30.","When",["Where","Who","How"],"When = cuándo."),
 M("— How are you? — ___","I'm fine, thanks.",["I'm twenty.","I'm from Spain.","I'm on holiday."]),
 WORDS(131,"2B"),
 M("«a bedroom» es…","un dormitorio",["una cocina","un jardín","un baño"]),
 M("«a kitchen» es…","una cocina",["un dormitorio","un jardín","un living"]),
 M("«a garden» es…","un jardín",["un garaje","una cocina","un dormitorio"])
],
m:[
 GB(2,"A"),
 M("They ___ German. They're Swiss.","aren't",["isn't","not","don't"]),
 M("— Are you from Russia? (ustedes) — No, we ___.","aren't",["are","isn't","don't"]),
 M("— Are we late? — Yes, you ___.","are",["is","am","aren't"]),
 M("Where ___ they from?","are",["is","do","be"]),
 M("— ___ Adidas American? — No, it isn't. It's German.","Is",["Are","Does","Am"]),
 M("Nikolai is from Moscow. He ___ from St Petersburg.","isn't",["aren't","not","don't"]),
 O("We're on business.","Estamos por trabajo."),
 O("Are you on holiday?","¿Estás de vacaciones?"),
 GB(2,"B"),
 M("¿Cuál está bien?","How old is she?",["How old's she?","How old she is?","How she is old?"],"Si la pregunta termina en pronombre, is no se contrae: How old is she?"),
 M("¿Cuál está bien?","Where is he?",["Where's he?","Where he is?","He is where?"],"Si termina en pronombre, no se contrae: Where is he?"),
 M("How old are you?","I'm twenty-one.",["I'm twenty-one years.","I have twenty-one.","I have twenty-one years."],"La edad va con be: I'm 21 (nunca «I have»)."),
 O("What's your phone number?","¿Cuál es tu número de teléfono?"),
 O("What class are you in?","¿En qué clase estás?"),
 VB(116,"Numbers"),
 L("thirteen",["thirty","three","thirty-three"],"-teen se acentúa al final (thir-TEEN); -ty al principio (THIR-ty)."),
 L("fifty",["fifteen","five","fifty-five"],"-ty se acentúa al principio: FIF-ty."),
 SB(14,"2B"),
 L("079431",["079413","097431","079341"],"En los números de teléfono el 0 se dice «oh».","oh, seven, nine, four, three, one")
],
d:[
 GB(2,"A"),
 W("Contracción: they are → ___","they're"),
 W("Contracción: we are not → ___",["we aren't","we're not"]),
 W("Hacé la pregunta: «They're from Russia.» → ___ they from Russia?","are"),
 W("Respuesta corta: — Are they Mexican? — Yes, ___.","they are","No se contrae: Yes, they are."),
 O("Where are they from?","¿De dónde son ellos?"),
 O("Is Recife in Brazil?","¿Recife está en Brasil?"),
 L("They're on holiday.",["They're on business.","They aren't on holiday.","We're on holiday."]),
 GB(2,"B"),
 W("Completá con una palabra: «___ old are you?»","how"),
 W("Completá con una palabra: «___'s your email?»","what"),
 W("Completá con una palabra: «___ is he? — He's my brother.»","who"),
 M("¿Cuál está bien?","Where are they from?",["Where they are from?","Where from are they?","Where are from they?"],"Pregunta: palabra de pregunta + verbo + sujeto."),
 VB(117,"Countries and nationalities"),
 M("Brasil: la nacionalidad es Brazilian. ¿Y el idioma?","Portuguese",["Brazilian","Spanish","Brazilese"],"Brazil: nationality Brazilian, language Portuguese."),
 M("Egipto: la nacionalidad es Egyptian. ¿Y el idioma?","Arabic",["Egyptian","English","French"],"Egypt: nationality Egyptian, language Arabic."),
 M("¿En cuál cambia la sílaba fuerte entre país y nacionalidad?","Japan → Japanese",["Brazil → Brazilian","Mexico → Mexican","Poland → Polish"],"Cambian: China > Chinese, Egypt > Egyptian, Italy > Italian, Japan > Japanese.")
]},

/* ============================== FILE 3 ============================== */
{n:3,t:"Where's my phone? · Souvenirs",g:"singular y plural · a / an · this, that, these, those · cosas chicas · precios",pages:"pp. 18–23, 96, 119",
f:[
 GB(3,"A"),
 M("What ___ it? — It's a key.","is",["are","am","be"]),
 M("What ___ they? — They're keys.","are",["is","am","be"]),
 M("It's ___ ID card.","an",["a","two","the a"],"ID se pronuncia /aɪ diː/: empieza con sonido de vocal, por eso an."),
 VB(119,"Small things"),
 M("«a key» es…","una llave",["una billetera","un lápiz","una foto"]),
 M("«an umbrella» es…","un paraguas",["una cámara","un cargador","un pasaporte"]),
 M("«a charger» es…","un cargador",["una cámara","una tarjeta","una foto"]),
 M("«a pencil» es…","un lápiz",["una lapicera","un cuaderno","una llave"]),
 M("«a wallet» es…","una billetera",["un cuaderno","un paraguas","una llave"]),
 GB(3,"B"),
 M("Una cosa lejos de vos: «___ is my phone.»","That",["This","These","Those"],"this / these = cerca; that / those = lejos."),
 M("Una cosa cerca de vos: «What's ___?»","this",["that","these","those"]),
 M("Varias cosas cerca: «___ are my keys.»","These",["This","That","Those"]),
 M("Varias cosas lejos: «How much are ___ T-shirts?»","those",["that","this","these"]),
 SB(20,"3B"),
 M("How much ___ this mug?","is",["are","am","be"]),
 M("How much ___ these key rings?","are",["is","am","be"])
],
m:[
 GB(3,"A"),
 M("Where ___ my glasses?","are",["is","am","be"],"glasses (anteojos) es plural en inglés."),
 M("What's in your bag?","I have two bank cards.",["I have two bank card.","I have a two bank cards.","I two bank cards have."]),
 M("What are they?","They're keys.",["It's keys.","They keys.","They're a keys."]),
 GB(3,"B"),
 M("Are ___ your T-shirts? (están lejos)","those",["that","this","these"]),
 M("Who's ___? Is he your brother? (está lejos)","that",["this","these","those"]),
 M("— Are these mugs for us? — Yes, ___.","they are",["it is","these are","they're"],"Respuesta corta sin contraer: Yes, they are."),
 M("— What's that? — ___ a T-shirt. It's for you!","It's",["They're","This","Its"]),
 O("Is this your phone?","¿Este es tu teléfono?"),
 O("What are those?","¿Qué son esos?"),
 SB(20,"3B"),
 O("How much is this mug?","¿Cuánto cuesta esta taza?"),
 O("They're twenty pounds.","Cuestan veinte libras."),
 L("£25",["£52","£20.50","£35"],null,"They're twenty-five pounds."),
 L("What are these?",["What is this?","What are those?","Where are these?"]),
 M("— Thank you very much. — ___","You're welcome.",["Very much.","Thanks you.","Yes, please."]),
 SB(22,"Practical English 2"),
 M("— Can I help you? — ___","An orange juice, please.",["Yes, I can.","It's an orange.","How much, please."]),
 L("€3.50",["€3.15","€13.50","€30.50"],null,"It's three euros fifty.")
],
d:[
 GB(3,"A"),
 W("Pasá a plural: «It's a watch.» → They're ___.","watches","Después de ch, sh, s, ss, x se agrega -es."),
 W("Pasá a plural: «It's a city.» → They're ___.","cities","Consonante + y → -ies."),
 M("¿Cuál está bien?","What is it?",["What's it?","What it is?","What are it?"],"El libro lo marca: What is it? (no «What's it?»)."),
 M("¿Cuál está bien?","They're keys.",["They're a keys.","It's keys.","They keys."]),
 GB(3,"B"),
 W("Lejos y plural: «What are ___? They're cats.»","those"),
 W("Cerca y singular: «What's ___? It's a key.»","this"),
 O("How much are these key rings?","¿Cuánto cuestan estos llaveros?"),
 O("Look at the board.","Miren el pizarrón."),
 VB(120,"People and family"),
 W("Plural: one person → two ___","people","Plural irregular."),
 W("Plural: one child → two ___","children","Plural irregular."),
 W("Plural: one man → two ___","men","Plural irregular."),
 SB(20,"3B"),
 L("They're twenty pounds.",["They're twelve pounds.","They're twenty-two pounds.","It's twenty pounds."])
]},

/* ============================== FILE 4 ============================== */
{n:4,t:"This is my family · The right car for me",g:"posesivos · 's · familia · colores y adjetivos",pages:"pp. 24–29, 98, 120–121",
f:[
 GB(4,"A"),
 M("I'm from Spain. ___ name is Ana.","My",["I","Me","Mine"]),
 M("He's from Rome. ___ name is Marco.","His",["Her","He","He's"],"his = de él; her = de ella."),
 M("She's Italian. ___ name is Clara.","Her",["His","She","She's"]),
 M("We're from Brazil. ___ names are Selma and Luis.","Our",["We","Us","Ours"]),
 M("They're from Mexico. ___ names are Pedro and Maria.","Their",["They","There","Them"]),
 M("Hi! What's ___ name?","your",["you","you're","yours"]),
 VB(120,"People and family"),
 M("Your brother is your mother's ___.","son",["daughter","father","husband"]),
 M("Your sister is your father's ___.","daughter",["son","wife","mother"]),
 M("The father of your mother is your ___.","grandfather",["father","brother","son"]),
 M("mother + father = ___","parents",["fathers","grandparents","children"],"parents = padres (mamá y papá); fathers = varios papás."),
 VB(121,"Adjectives"),
 M("«amarillo»","yellow",["orange","white","green"]),
 M("«gris»","grey",["green","brown","blue"]),
 M("«marrón»","brown",["black","orange","red"]),
 M("Lo contrario de «cheap» es…","expensive",["slow","old","small"]),
 M("Lo contrario de «new» es…","old",["big","ugly","short"]),
 M("Lo contrario de «easy» es…","difficult",["dirty","ugly","slow"]),
 M("Lo contrario de «clean» es…","dirty",["difficult","old","short"])
],
m:[
 GB(4,"A"),
 M("¿Cómo se dice «Es el auto de Jack»?","It's Jack's car.",["It's car Jack.","It's the car of Jack's.","It's Jacks car."],"Persona + 's + cosa: Jack's car."),
 M("Ella is Ben's ___. (esposa)","wife",["husband","sister","daughter"]),
 M("Pizzeria Marco is a good restaurant. ___ phone number is 0543387.","Its",["It's","His","Their"],"its = de una cosa o animal; it's = it is."),
 M("___ a French restaurant.","It's",["Its","It","Is"],"It's = It is."),
 M("«my brothers' room» significa…","la habitación de mis hermanos",["la habitación de mi hermano","mis hermanos están en la habitación","la habitación es de un hermano"],"Apóstrofo después de un plural: my brothers' = de dos o más hermanos."),
 O("What's your sister's name?","¿Cómo se llama tu hermana?"),
 L("His name is Marco.",["Her name is Marco.","His name is Mario.","Is his name Marco?"]),
 GB(4,"B"),
 M("It's a ___.","red car",["car red","reds car","car is red"],"El adjetivo va antes del sustantivo."),
 M("They're ___ houses.","old",["olds","the old","an old"],"Los adjetivos no tienen plural."),
 M("An Audi is ___.","expensive",["an expensive","expensives","a expensive"]),
 O("Is the car for you?","¿El auto es para vos?"),
 O("I prefer that red car.","Prefiero ese auto rojo."),
 L("They're old houses.",["They're new houses.","They're big houses.","It's an old house."]),
 VB(121,"Adjectives"),
 M("✓✓✓ = ___","great",["very good","good","awful"],"✓ good · ✓✓ very good · ✓✓✓ great / fantastic."),
 M("✗✗✗ = ___","terrible",["bad","very bad","great"],"✗ bad · ✗✗ very bad · ✗✗✗ awful / terrible."),
 O("It's a very fast car.","Es un auto muy rápido.")
],
d:[
 GB(4,"A"),
 W("Posesivo: we → ___","our"),
 W("Posesivo: they → ___","their"),
 W("Posesivo: he → ___","his"),
 W("Con 's: the car of Jim → ___ car","jim's"),
 M("¿Cuál está bien?","Your names are Marek and Ania.",["Yours names are Marek and Ania.","Your's names are Marek and Ania.","You names are Marek and Ania."]),
 M("¿En cuál 's significa is?","She's American.",["Emma is Maria's daughter.","This is Jack's car.","My sister's name is Molly."],"She's = She is. En los otros 's es posesivo."),
 O("My sister's name is Molly.","Mi hermana se llama Molly."),
 VB(120,"People and family"),
 W("Plural: a woman → two ___","women"),
 W("«marido» en inglés","husband"),
 W("«hija» en inglés","daughter"),
 GB(4,"B"),
 M("¿Cuál está bien?","It's a fast car.",["It's a car fast.","It's fast car.","It's a fasts car."]),
 M("¿Cuál está bien?","An Audi is expensive.",["An Audi expensive is.","An Audi is an expensive.","An Audi expensive."]),
 VB(121,"Adjectives"),
 W("«amarillo» en inglés","yellow"),
 W("«gris» en inglés",["grey","gray"]),
 W("Lo contrario de «beautiful»","ugly"),
 W("Lo contrario de «long»","short"),
 W("Lo contrario de «fast»","slow")
]},

/* ============================== FILE 5 ============================== */
{n:5,t:"My favourite meal · A very long flight",g:"present simple: I, you, we, they · comida y bebida · la hora · cómo te sentís",pages:"pp. 30–35, 100, 122–123",
f:[
 GB(5,"A"),
 M("I ___ cereal for breakfast.","have",["has","having","haves"]),
 M("I ___ like fish. I'm a vegetarian.","don't",["doesn't","not","am not"]),
 M("We ___ coffee every morning.","drink",["drinks","drinking","are drink"]),
 GB(5,"B"),
 M("___ you live near here?","Do",["Are","Does","Is"]),
 M("— Do you have a car? — Yes, I ___.","do",["have","am","does"],"Respuesta corta con el auxiliar: Yes, I do. / No, I don't."),
 VB(122,"Food and drink"),
 M("«pescado»","fish",["chicken","meat","rice"]),
 M("«pan»","bread",["butter","cheese","rice"]),
 M("«queso»","cheese",["butter","bread","sugar"]),
 M("«manteca»","butter",["cheese","bread","milk"]),
 M("«papas»","potatoes",["tomatoes","vegetables","eggs"]),
 M("«agua»","water",["wine","milk","beer"]),
 VB(123,"Common verb phrases 1"),
 M("___ TV","watch",["look","see","make"]),
 M("___ the newspaper","read",["watch","listen","speak"]),
 M("___ to the radio","listen",["hear","watch","read"]),
 M("___ English","speak",["talk","say","tell"]),
 SB(34,"Practical English 3"),
 M("I'm ___. I want a sandwich.","hungry",["tired","thirsty","cold"]),
 M("I'm ___. I want to go to bed.","tired",["hungry","thirsty","hot"]),
 M("I'm ___. I want a glass of water.","thirsty",["hungry","tired","cold"])
],
m:[
 GB(5,"A"),
 M("They don't ___ meat.","eat",["eats","eating","to eat"]),
 M("We ___ eggs for breakfast. (−)","don't have",["not have","doesn't have","no have"]),
 M("¿Cuál está bien?","We don't have coffee.",["We not have coffee.","We doesn't have coffee.","We no have coffee."],"Negativo: don't + verbo."),
 GB(5,"B"),
 M("___ they have children?","Do",["Are","Does","Have"]),
 M("— Do you live in a flat? — No, I ___.","don't",["doesn't","not","am not"]),
 M("¿Cuál está bien?","Do you live here?",["You live here?","Live you here?","Do you lives here?"],"ASI: Auxiliar (do) + Sujeto + Infinitivo."),
 O("Do you want fish or pasta?","¿Querés pescado o pasta?"),
 O("What time do we arrive?","¿A qué hora llegamos?"),
 VB(122,"Food and drink"),
 M("breakfast es la comida de…","la mañana",["el mediodía","la noche","la tarde"]),
 M("I ___ tea with milk.","drink",["eat","read","live"]),
 M("Green ___ is popular in Japan.","tea",["toast","soup","rice"]),
 SB(32,"5B"),
 O("I need to go to the toilet.","Necesito ir al baño."),
 M("«Keep the change.» significa…","Quedate con el vuelto.",["Cambiá de lugar.","Guardá la ropa.","Cambiá la plata."]),
 L("Do you want fish or pasta?",["Do you want fish or pizza?","Do you like fish or pasta?","Do they want fish or pasta?"])
],
d:[
 GB(5,"A"),
 W("Pasá a negativo: «I have coffee for breakfast.»",["i don't have coffee for breakfast","i do not have coffee for breakfast"]),
 W("Pasá a negativo: «They eat meat.»",["they don't eat meat","they do not eat meat"]),
 GB(5,"B"),
 W("Pregunta: «They live near here.» → ___ they live near here?","do"),
 W("Respuesta corta: — Do you like cats? — No, ___.",["i don't","i do not"]),
 W("Respuesta corta: — Do they have children? — Yes, ___.","they do"),
 O("Where do you live?","¿Dónde vivís?"),
 O("I don't eat fast food.","No como comida rápida."),
 VB(122,"Food and drink"),
 W("«leche» en inglés","milk"),
 W("«arroz» en inglés","rice"),
 W("«verduras» en inglés","vegetables"),
 W("«azúcar» en inglés","sugar"),
 VB(123,"Common verb phrases 1"),
 W("Completá: «___ in a flat» (vivir)","live"),
 W("Completá: «___ a new car» (necesitar)","need")
]},

/* ============================== FILE 6 ============================== */
{n:6,t:"Old friends? · Good morning, goodnight",g:"present simple: he, she, it · trabajos · un día típico · adverbios de frecuencia",pages:"pp. 36–41, 102, 124–125",
f:[
 GB(6,"A"),
 M("She ___ in a hospital.","works",["work","working","is work"],"Con he / she / it el verbo lleva -s."),
 M("He ___ wear glasses.","doesn't",["don't","isn't","not"]),
 M("___ she work in a hotel?","Does",["Do","Is","Are"]),
 VB(124,"Jobs and places of work"),
 M("Works in a restaurant and brings food to the table.","a waiter",["a doctor","a lawyer","a nurse"]),
 M("Teaches students in a school.","a teacher",["a nurse","a lawyer","a chef"]),
 M("Drives people in a car.","a taxi driver",["a tour guide","a chef","a receptionist"]),
 M("Cooks food in a restaurant.","a chef",["a waiter","a shop assistant","a journalist"]),
 M("Works in a shop.","a shop assistant",["a factory worker","a lawyer","a nurse"]),
 GB(6,"B"),
 M("He's ___ late. (nunca)","never",["always","usually","sometimes"]),
 M("100% = ___","always",["usually","sometimes","never"]),
 M("0% = ___","never",["sometimes","usually","always"]),
 VB(125,"A typical day"),
 M("___ a shower","have",["do","make","go"]),
 M("___ housework","do",["make","have","go"],"make dinner / coffee, pero do housework, do homework."),
 M("___ dinner (prepararla)","make",["do","go","get"]),
 M("___ shopping","go",["have","make","get"])
],
m:[
 GB(6,"A"),
 M("What does she do?","She's a journalist.",["She is journalist.","She does journalist.","She works journalist."],"Con profesiones va a / an: She's a journalist."),
 M("— Does he like coffee? — No, he ___.","doesn't",["don't","isn't","not"]),
 O("Where does he work?","¿Dónde trabaja él?"),
 O("She doesn't wear glasses.","Ella no usa anteojos."),
 L("He doesn't work.",["He does work.","She doesn't work.","He doesn't walk."]),
 GB(6,"B"),
 M("¿Cuál está bien?","I always get up early.",["I get up always early.","Always I get up early.","I get always up early."],"El adverbio va antes del verbo."),
 M("¿Cuál está bien?","He's never late.",["He never is late.","Never he's late.","He's late never."],"Con be el adverbio va después: He's never late."),
 M("¿Cuál está bien?","He never eats meat.",["He doesn't never eat meat.","He never eat meat.","He doesn't eat never meat."],"Con never el verbo va en afirmativo."),
 M("She ___ TV in the evening.","sometimes watches",["watches sometimes","sometimes watch","sometime watches"]),
 O("What time do you get up?","¿A qué hora te levantás?"),
 VB(125,"A typical day"),
 M("¿Cuál está bien?","go home",["go to home","go to the home","go at home"],"go home, sin to."),
 M("go ___ gym","to the",["to","the","at"],"go to the gym, go to the cinema."),
 L("She gets up at half past nine.",["She gets up at half past five.","He gets up at half past nine.","She gets up at nine."]),
 VB(124,"Jobs and places of work"),
 M("Where does a doctor work?","In a hospital.",["In a factory.","In a shop.","In the street."]),
 M("Where does a police officer work?","In the street.",["In a restaurant.","In a factory.","In a shop."])
],
d:[
 GB(6,"A"),
 W("he / she / it de «have» → ___","has","have es irregular: he has."),
 W("Pasá a negativo: «She works in an office.»",["she doesn't work in an office","she does not work in an office"]),
 W("Pregunta: «He lives in Spain.» → ___ he live in Spain?","does"),
 W("Respuesta corta: — Does it work? — Yes, ___.","it does"),
 M("¿Cuál está bien?","She studies history.",["She studys history.","She studyes history.","She study history."],"Consonante + y → -ies."),
 GB(6,"B"),
 M("¿Cuál está bien?","Does she usually go shopping on Saturday?",["Does usually she go shopping on Saturday?","Usually does she go shopping on Saturday?","Does she go usually shopping on Saturday?"]),
 O("He never eats meat.","Él nunca come carne."),
 L("He has a shower every morning.",["He has a shower every evening.","He had a shower this morning.","He has a sandwich every morning."]),
 VB(124,"Jobs and places of work"),
 W("Trabajo: writes for a newspaper → a ___","journalist"),
 W("Trabajo: works at Reception in a hotel → a ___","receptionist"),
 W("Trabajo: works in a factory → a factory ___","worker"),
 W("Lugar: «I work ___ home.» (desde casa)","from")
]},

/* ============================== FILE 7 ============================== */
{n:7,t:"At the weekend · Lights, camera, action!",g:"orden en las preguntas · imperativos · me, him, her… · meses y fechas",pages:"pp. 42–47, 104, 126–127",
f:[
 GB(7,"A"),
 M("___ you a football fan?","Are",["Do","Is","Does"],"Con un adjetivo o sustantivo (a fan) va be."),
 M("What ___ you do at the weekend?","do",["are","does","is"]),
 GB(7,"B"),
 M("¿Cómo se dice «¡No te muevas!»?","Don't move!",["No move!","Not move!","Don't moving!"]),
 M("¿Cómo se dice «¡Hacé silencio!»?","Be quiet!",["Is quiet!","You quiet!","Are quiet!"]),
 M("I love Tom. I love ___.","him",["he","his","he's"],"Después del verbo: me, you, him, her, it, us, them."),
 M("Where's Anna? Call ___!","her",["she","hers","his"]),
 M("Can you help ___? (a nosotros)","us",["we","our","ours"]),
 M("This film is boring. I don't like ___.","it",["him","them","its"]),
 M("I want to read these books. I want to read ___.","them",["they","their","it"]),
 WORDS(131,"7B"),
 M("La persona que dirige una película es…","a film director",["an actor","a scene","a football fan"]),
 M("«Don't cry!» significa…","¡No llores!",["¡No grites!","¡No corras!","¡No te muevas!"])
],
m:[
 GB(7,"A"),
 M("Where ___ your sister work?","does",["do","is","are"]),
 M("What music ___ you like?","do",["are","does","is"]),
 M("How old ___ you?","are",["do","is","have"]),
 M("Why ___ you late?","are",["do","is","does"]),
 M("When ___ Jane go to the gym?","does",["do","is","are"]),
 O("What do you do at the weekend?","¿Qué hacés el fin de semana?"),
 O("Is your brother a football fan?","¿Tu hermano es fanático del fútbol?"),
 O("Do you go out on Friday nights?","¿Salís los viernes a la noche?"),
 GB(7,"B"),
 M("Listen to ___!","me",["I","my","mine"]),
 M("They don't speak to ___.","us",["we","our","ours"]),
 M("Don't talk to ___. (a ella)","her",["she","hers","his"]),
 M("¿Cómo se dice «¡No llores!»?","Don't cry!",["No cry!","Not cry!","Don't crying!"]),
 VB(127,"Months and ordinal numbers"),
 L("21st March",["23rd March","21st May","1st March"],"Las fechas se dicen con ordinales.","the twenty-first of March"),
 SB(46,"Practical English 4"),
 M("— Hello, can I speak to Mark, please? — ___","Just a minute.",["I'm Mark speaking you.","Yes, you speak.","Wait me."])
],
d:[
 GB(7,"A"),
 W("Completá: «What ___ your sister do?»","does"),
 W("Completá: «Where ___ you from?»","are"),
 M("¿Cuál está bien?","Where do you go?",["Where you go?","Where go you?","Where do you goes?"],"QuASI: palabra de pregunta + auxiliar + sujeto + infinitivo."),
 M("¿Cuál está bien?","What time is it?",["What time it is?","What is time it?","What time does it?"]),
 O("What does your sister do?","¿A qué se dedica tu hermana?"),
 O("Who does she live with?","¿Con quién vive ella?"),
 GB(7,"B"),
 W("Pronombre: «I see Tom every week.» → I see ___ every week.","him"),
 W("Pronombre: «Look at the children.» → Look at ___.","them"),
 W("Imperativo negativo: ___ worry! (no te preocupes)","don't"),
 M("¿Cuál está bien?","I see him every week.",["I see he every week.","I see his every week.","I him see every week."]),
 O("Don't talk to her.","No hables con ella."),
 VB(127,"Months and ordinal numbers"),
 M("¿Cómo se dice «el 2 de marzo»?","the second of March",["the two of March","the second March","March the two"]),
 L("the third of May",["the thirtieth of May","the third of March","the thirteenth of May"])
]},

/* ============================== FILE 8 ============================== */
{n:8,t:"Can I park here? · I ♥ shopping",g:"can / can't · like, love, hate + -ing · actividades",pages:"pp. 48–53, 106, 128",
f:[
 GB(8,"A"),
 M("— Can you swim? — Yes, I ___.","can",["do","am","swim"]),
 M("She ___ drive. She doesn't have a driving licence.","can't",["doesn't","isn't","don't"]),
 M("He can ___ the guitar.","play",["plays","playing","to play"],"Después de can, el verbo va en forma base."),
 M("— Can I park here? — ___","No, you can't. Sorry.",["No, you don't.","No, you aren't.","No, can't you."]),
 GB(8,"B"),
 M("I love ___.","cooking",["cook","cooks","cooked"],"love / like / hate + verbo con -ing."),
 M("I hate ___ up early.","getting",["get","geting","gets"]),
 VB(128,"Activities"),
 M("«acampar»","camping",["cycling","cooking","shopping"]),
 M("«andar en bici»","cycling",["camping","running","flying"]),
 M("«salir a comer afuera»","eating out",["going out","eating in","cooking"]),
 M("«cantar»","singing",["sleeping","swimming","shopping"]),
 WORDS(131,"8A"),
 M("«pass» un examen significa…","aprobar",["reprobar","rendir","estudiar"]),
 M("«fail» un examen significa…","reprobar",["aprobar","rendir","estudiar"]),
 M("«nervous» significa…","nervioso/a",["enojado/a","cansado/a","aburrido/a"])
],
m:[
 GB(8,"A"),
 M("___ I sit here?","Can",["Do","Am","Does"]),
 M("¿Cuál está bien?","Can I sit here?",["Do I can sit here?","I can sit here?","Can I to sit here?"],"El libro lo marca: Can I sit here? (no «Do I can…»)."),
 M("You ___ park on a yellow line.","can't",["don't","aren't","not can"]),
 M("— Can they come to dinner tonight? — Yes, they ___.","can",["do","are","come"]),
 O("Can I park here?","¿Puedo estacionar acá?"),
 O("I can't speak French.","No sé hablar francés."),
 L("I can't come.",["I can come.","I can't go.","I come."],"can't suena /kɑːnt/ con vocal larga; can suena corto /kən/."),
 GB(8,"B"),
 M("What do you like ___ at the weekend?","doing",["do","to doing","does"]),
 M("She doesn't like ___.","flying",["fly","flies","flys"]),
 M("We like ___.","swimming",["swiming","swim","swims"],"Una vocal + una consonante: se duplica (swimming)."),
 M("I hate ___ at night.","driving",["driveing","drive","drives"],"Termina en -e: se saca la e (driving)."),
 O("I don't like studying.","No me gusta estudiar."),
 L("I love cooking.",["I love cookies.","I like cooking.","I love cycling."]),
 SB(48,"8A"),
 M("I took my driving test and I ___. I can drive now!","passed",["failed","lost","missed"]),
 M("Total disaster! I ___ my driving test.","failed",["passed","won","started"]),
 SB(50,"8B"),
 M("«frightened» significa…","asustado/a",["aburrido/a","cansado/a","enojado/a"])
],
d:[
 GB(8,"A"),
 W("Negativo: «I can swim.» → I ___ swim.",["can't","cannot"]),
 W("Respuesta corta: — Can he help us? — No, ___.",["he can't","he cannot"]),
 M("¿Cuál está bien?","She can drive.",["She cans drive.","She can drives.","She can to drive."]),
 M("«You can't park on a yellow line.» Acá you significa…","la gente en general",["solo vos","ustedes dos","yo"],"you puede ser impersonal: la gente en general."),
 O("Can you play the guitar?","¿Sabés tocar la guitarra?"),
 L("Can I park here?",["Can I pay here?","Can I park there?","I can park here."]),
 GB(8,"B"),
 W("Completá: «I like ___ for a walk.» (go)","going"),
 M("¿Cuál está bien?","I love swimming.",["I love swiming.","I love swim.","I love to swimming."]),
 O("He doesn't like shopping.","A él no le gusta ir de compras."),
 O("I hate getting up early.","Odio levantarme temprano.")
]},

/* ============================== FILE 9 ============================== */
{n:9,t:"What are they really doing? · Watching and waiting",g:"present continuous · ¿continuous o simple? · ropa · viajes · invitar",pages:"pp. 54–59, 108, 126, 129",
f:[
 GB(9,"A"),
 M("Look! It ___.","is raining",["rains","rain","raining"],"Algo que pasa ahora: be + verbo-ing."),
 M("What ___ you doing?","are",["do","is","does"]),
 M("She ___ a red jacket today.","is wearing",["wears","wear","wearing"]),
 M("They ___ to the teacher.","are listening",["listening","is listening","listens"]),
 VB(129,"Clothes"),
 M("«pantalones»","trousers",["shorts","shirts","socks"]),
 M("«pollera»","a skirt",["a scarf","a shirt","a sweater"]),
 M("«zapatillas» (para correr)","trainers",["sandals","boots","socks"]),
 M("«medias»","socks",["shoes","shorts","shirts"]),
 M("«gorra»","a cap",["a hat","a coat","a cup"]),
 VB(126,"Travelling"),
 M("___ a suitcase (armar la valija)","pack",["book","rent","wear"]),
 M("___ a car (alquilar)","rent",["book","pack","carry"]),
 M("___ in a hotel","stay",["wait","leave","rent"]),
 M("___ for a flight","wait",["stay","leave","book"]),
 SB(58,"Practical English 5"),
 M("— Would you like a coffee? — ___","Yes, please.",["Yes, I like.","Yes, I do.","Yes, I'd love."])
],
m:[
 GB(9,"A"),
 M("— Is she having a shower? — No, she ___.","isn't",["doesn't","not","aren't"]),
 M("— Are they listening to the teacher? — Yes, they ___.","are",["do","listen","is"]),
 M("— What's he doing? — He ___ TV at home.","is watching",["watches","watch","watching"]),
 M("— Where are you going? — ___","To a party.",["I go to a party.","Yes, I am.","I'm go to a party."]),
 O("What are they doing?","¿Qué están haciendo?"),
 O("Are you working today?","¿Estás trabajando hoy?"),
 L("What are you doing?",["What do you do?","Where are you going?","What are you eating?"]),
 GB(9,"B"),
 M("I usually ___ to work by bus.","go",["am going","going","goes"],"Rutina (usually, every day) → present simple."),
 M("I ___ in an office. I usually wear a suit.","work",["am working","working","works"]),
 M("Today I ___ at home.","am working",["work","working","works"],"Algo de hoy, distinto de lo habitual → present continuous."),
 O("I'm waiting for a friend.","Estoy esperando a un amigo."),
 L("She's wearing a dress.",["She's wearing a jacket.","She wears a dress.","He's wearing a dress."]),
 SB(58,"Practical English 5"),
 M("— Would you like to come? — ___","Yes, I'd love to.",["Yes, I like.","Yes, I would like come.","Yes, I'd love."]),
 M("— Would you like a coffee? — ___ (no querés)","No, thank you.",["No, I wouldn't like.","No, I don't.","No, please."])
],
d:[
 GB(9,"A"),
 W("Pasá a negativo: «He's playing football.»",["he isn't playing football","he's not playing football","he is not playing football"]),
 W("Pregunta: «You're working today.» → ___ you working today?","are"),
 W("Respuesta corta: — Are you working now? — No, ___.",["i'm not","i am not"]),
 O("What's he doing?","¿Qué está haciendo él?"),
 O("She's having a shower.","Ella se está duchando."),
 GB(9,"B"),
 M("¿Cuál está bien? (ahora)","I can't talk now. I'm driving.",["I can't talk now. I drive.","I can't talk now. I'm drive.","I can't talk now. I driving."],"El libro: I'm driving. NO «I drive»."),
 M("¿Cuál está bien? (siempre)","I never get up early on Saturday.",["I never am getting up early on Saturday.","I never getting up early on Saturday.","I'm never get up early on Saturday."]),
 VB(129,"Clothes"),
 W("«pollera» en inglés",["skirt","a skirt"]),
 W("«medias» en inglés","socks"),
 W("«traje» en inglés",["suit","a suit"]),
 W("«zapatillas» (para correr) en inglés","trainers"),
 VB(126,"Travelling"),
 W("Completá: «___ a taxi» (tomar)","get"),
 W("Completá: «___ tickets» (reservar)","book")
]},

/* ============================== FILE 10 ============================== */
{n:10,t:"A room with a view · Where was he?",g:"there is / there are · some / any · hotel · was / were · in, on, at",pages:"pp. 60–65, 110, 130",
f:[
 GB(10,"A"),
 M("There ___ a TV in the room.","is",["are","be","it's"]),
 M("There ___ two beds.","are",["is","be","have"]),
 M("___ there a minibar?","Is",["Are","Has","Does"]),
 M("There are ___ chairs on the balcony.","some",["any","a","an"],"Afirmativas con plural → some."),
 GB(10,"B"),
 M("I ___ at home yesterday.","was",["were","am","is"]),
 M("They ___ at the cinema last night.","were",["was","are","been"]),
 M("He ___ tired last night.","was",["were","is","did"]),
 VB(130,"Hotels"),
 M("«a towel» es…","una toalla",["una almohada","una lámpara","una ducha"]),
 M("«a pillow» es…","una almohada",["una toalla","un armario","una cama"]),
 M("«a lift» es…","un ascensor",["una escalera","un estacionamiento","un gimnasio"]),
 M("«a cupboard» es…","un armario",["una cama","una mesa","una lámpara"]),
 M("«a car park» es…","un estacionamiento",["un parque","una plaza","un jardín"]),
 SB(60,"10A"),
 M("The cat is ___ the bed. (debajo)","under",["on","in","at"]),
 M("The keys are ___ the table. (sobre)","on",["in","under","at"])
],
m:[
 GB(10,"A"),
 M("There aren't ___ towels.","any",["some","a","an"],"Negativas y preguntas con plural → any."),
 M("Are there ___ pictures?","any",["some","a","an"]),
 M("— Is there a bath? — No, there ___.","isn't",["aren't","is","not"]),
 M("— Are there any towels? — Yes, there ___.","are",["is","aren't","they are"]),
 O("Is there a lift in the hotel?","¿Hay ascensor en el hotel?"),
 O("There are two beds in the room.","Hay dos camas en la habitación."),
 L("There's a shower.",["There's a towel.","Is there a shower?","There's a flower."]),
 GB(10,"B"),
 M("Where ___ you yesterday afternoon?","were",["was","are","did"]),
 M("— ___ he at work? — No, he wasn't.","Was",["Were","Is","Did"]),
 M("There ___ a party at the school last night.","was",["were","is","did"],"El pasado de there is es there was."),
 M("El pasado de «there are» es…","there were",["there was","there are","there been"]),
 O("Where were you last night?","¿Dónde estuviste anoche?"),
 O("Was she a singer?","¿Ella era cantante?"),
 L("We were in London last month.",["We were in London last week.","We are in London this month.","He was in London last month."]),
 SB(62,"10B"),
 M("I was born ___ 1998.","in",["on","at","to"],"in + años, meses."),
 M("See you ___ Monday!","on",["in","at","the"],"on + días y fechas."),
 M("The film starts ___ 7 o'clock.","at",["in","on","to"],"at + horas."),
 VB(130,"Hotels"),
 M("— Where's the swimming pool? — It's ___ the fifth floor.","on",["in","at","under"])
],
d:[
 GB(10,"A"),
 W("Completá: «There ___ two beds.»","are"),
 W("Pasá a negativo: «There's a phone.» → There ___ a phone.",["isn't","is not"]),
 M("¿Cuál está bien?","There aren't any towels.",["There aren't some towels.","There isn't any towels.","There not are any towels."]),
 L("Is there a gym?",["There's a gym.","Is there a gift shop?","Are there any gyms?"]),
 GB(10,"B"),
 W("Pasado: «He is at home.» → He ___ at home yesterday.","was"),
 W("Pasado: «They are famous.» → They ___ famous in the 60s.","were"),
 W("Respuesta corta: — Were you late? — No, ___.",["i wasn't","i was not"]),
 M("¿Cuál está bien?","Where were you yesterday?",["Where you were yesterday?","Where was you yesterday?","Where did you were yesterday?"]),
 O("Was it hot last week?","¿Hizo calor la semana pasada?"),
 SB(62,"10B"),
 W("in, on o at: «___ Monday»","on"),
 W("in, on o at: «___ 1998»","in"),
 W("in, on o at: «___ seven o'clock»","at"),
 W("in, on o at: «___ the weekend» (inglés británico)","at"),
 VB(130,"Hotels"),
 W("«toalla» en inglés",["towel","a towel"]),
 W("«ascensor» en inglés (británico)",["lift","a lift","elevator","an elevator"])
]},

/* ============================== FILE 11 ============================== */
{n:11,t:"A new life in the USA · How was your day?",g:"past simple: regulares · get, go, have, do · direcciones",pages:"pp. 66–71, 112, 133",
f:[
 GB(11,"A"),
 M("I ___ TV last night.","watched",["watch","watching","watches"]),
 M("She didn't ___ the film.","like",["liked","likes","liking"],"Después de didn't, el verbo va en infinitivo."),
 M("___ you visit Paris last year?","Did",["Do","Were","Was"]),
 GB(11,"B"),
 M("Yesterday I ___ to the cinema.","went",["go","goed","goes"]),
 M("We ___ a party on Saturday.","had",["have","haved","has"]),
 M("He ___ home at 7 o'clock.","got",["get","getted","gets"]),
 M("We ___ yoga yesterday.","did",["do","doed","does"]),
 SB(70,"Practical English 6"),
 M("«next to» significa…","al lado de",["enfrente de","entre","detrás de"]),
 M("«opposite» significa…","enfrente de",["al lado de","entre","cerca de"]),
 M("«between» significa…","entre",["al lado de","enfrente de","lejos de"]),
 M("«Turn left.» significa…","Doblá a la izquierda.",["Doblá a la derecha.","Seguí derecho.","Volvé."]),
 M("«Go straight on.» significa…","Seguí derecho.",["Doblá a la izquierda.","Volvé atrás.","Pará acá."])
],
m:[
 GB(11,"A"),
 M("— Did you go out last night? — No, I ___.","didn't",["don't","wasn't","not"]),
 M("¿Cuál está bien?","I didn't arrive at the airport.",["I didn't arrived at the airport.","I not arrived at the airport.","I don't arrived at the airport."],"El libro: didn't + infinitivo (no «didn't arrived»)."),
 M("¿Cuál está bien?","Did you watch TV?",["Did you watched TV?","You did watch TV?","Watched you TV?"]),
 SB(66,"11A"),
 M("¿En cuál -ed suena como una sílaba más /ɪd/?","decided",["played","worked","lived"],"-ed suena /ɪd/ solo después de t o d."),
 M("¿En cuál -ed suena /ɪd/?","wanted",["stopped","changed","finished"]),
 L("wanted",["want","went","wants"]),
 GB(11,"B"),
 M("What time did you ___ up?","get",["got","gets","getting"]),
 M("Where did you ___ lunch?","have",["had","has","having"]),
 M("They ___ their homework last night.","did",["do","made","done"]),
 O("How was your day?","¿Cómo te fue hoy?"),
 O("I didn't go to work yesterday.","Ayer no fui a trabajar."),
 O("Where did you go on Saturday?","¿Adónde fuiste el sábado?"),
 L("I got up late yesterday.",["I get up late every day.","I got up early yesterday.","I went out late yesterday."]),
 SB(70,"Practical English 6"),
 M("— Is there a bank near here? — Yes, it's ___ the supermarket. (al lado de)","next to",["opposite","between","on"]),
 M("«Go straight on and turn left.»","Seguí derecho y doblá a la izquierda.",["Doblá a la derecha y seguí derecho.","Volvé y doblá a la izquierda.","Seguí derecho; está a la derecha."])
],
d:[
 GB(11,"A"),
 W("Pregunta: «She walked to work.» → ___ she walk to work?","did"),
 W("Respuesta corta: — Did they play tennis? — No, ___.",["they didn't","they did not"]),
 W("Pasado: cry → ___","cried","Consonante + y → -ied."),
 W("Pasado: stop → ___","stopped","Consonante + vocal + consonante: se duplica la última."),
 GB(11,"B"),
 W("Pasá a negativo: «I got up early.»",["i didn't get up early","i did not get up early"]),
 W("Pasado: do → ___","did"),
 W("Pasado: have → ___","had"),
 W("Pasado: go → ___","went"),
 M("¿Cuál está bien?","Did you have breakfast?",["Did you had breakfast?","Do you had breakfast?","Had you breakfast?"]),
 O("What time did you get up?","¿A qué hora te levantaste?"),
 O("What did you do last night?","¿Qué hiciste anoche?")
]},

/* ============================== FILE 12 ============================== */
{n:12,t:"Strangers on a train · Revise the past",g:"past simple: regulares e irregulares · did / didn't · was / were · repaso",pages:"pp. 72–77, 114, 133 · Workbook pp. 60–63",
f:[
 SB(72,"12A Verbs Quiz"),
 M("Pasado de «buy»","bought",["buyed","brought","boughted"]),
 M("Pasado de «see»","saw",["seed","seen","sawed"]),
 M("Pasado de «tell»","told",["telled","said","tolded"]),
 M("Pasado de «sit»","sat",["sitted","seat","sit"]),
 M("Verbs Quiz: ¿cuál de estos verbos duplica la consonante final en pasado?","stop",["open","wait","talk"],"stop → stopped."),
 M("Verbs Quiz: ¿cuál de estos verbos solo agrega -d en pasado?","arrive",["ask","finish","talk"],"Termina en -e: arrive → arrived (igual que move, phone, exchange)."),
 SB(72,"12A Strangers on a train"),
 M("Strangers on a train: ¿dónde vio David a la mujer por primera vez?","On the platform.",["On the train.","In the café.","At the concert."],"«I saw a woman on the platform.»"),
 M("Strangers on a train: ¿de qué hablaron en el tren?","Classical music.",["Their jobs.","London.","Tennis."],"«We talked about music until the train arrived at Paddington Station.»"),
 WORDS(132,"12A"),
 M("«a platform» (en la estación) es…","un andén",["un asiento","un boleto","un vagón"]),
 M("«a seat» es…","un asiento",["un andén","una entrada","un vagón"]),
 M("«turn on a light» significa…","prender una luz",["apagar una luz","mirar una luz","cambiar una luz"]),
 GB(12,"A"),
 M("Where did you ___ on Saturday?","go",["went","goes","going"],"Después de did, el verbo va en infinitivo."),
 M("— What did you buy? — I ___ a new jacket.","bought",["buy","buyed","buys"]),
 SB(74,"12B"),
 M("¿be, have o do? «___ hungry»","be",["have","do"],"En inglés el hambre y el cansancio van con be: be hungry, be tired."),
 M("¿be, have o do? «___ homework»","do",["have","be"],"do homework, do sport."),
 M("¿be, have o do? «___ lunch»","have",["do","be"],"have lunch, have a good day.")
],
m:[
 GB(12,"A"),
 M("— ___ it expensive? — No, it wasn't.","Was",["Did","Were","Is"],"Con adjetivos (expensive, tired) va was / were, no did."),
 M("— Did you like the film? — No, I ___ it very much.","didn't like",["didn't liked","don't like","wasn't like"],"Negativo: didn't + infinitivo."),
 M("— Did you like the film? — Yes, I ___.","did",["liked","was","do"],"Respuesta corta: Yes, I did. / No, I didn't."),
 O("Where did he see her?","¿Dónde la vio?"),
 O("He saw her on the train.","La vio en el tren."),
 L("He saw her on the train.",["He sat with her on the train.","He saw her on the platform.","He sees her on the train."]),
 SB(73,"12A Strangers on a train"),
 M("Strangers on a train: ¿por qué David le dio su dirección a Olivia?","She offered to drive him home.",["She wanted to send him a letter.","He wanted to visit her.","She wanted to buy his flat."],"«I can drive you home,» she said. «I live near Chelsea.»"),
 L("We bought two coffees.",["We brought two coffees.","We bought two cookies.","We buy two coffees."]),
 SB(74,"12B"),
 M("¿Cuál tiene un sonido vocálico distinto? bought · saw · talked · worked","worked",["bought","saw","talked"],"bought, saw y talked suenan /ɔː/ como horse; worked suena /ɜː/."),
 M("¿Cuál tiene un sonido vocálico distinto? painted · rained · said · waited","said",["painted","rained","waited"],"said se pronuncia /sed/."),
 M("¿Cuál de estos verbos es irregular?","go",["book","pack","stay"],"go → went. Los otros agregan -ed."),
 L("What did you do last Saturday?",["What do you do on Saturday?","What did you do last Sunday?","Where did you go last Saturday?"]),
 WB(62,"12B"),
 M("Max was tired so he ___ to bed early last night.","went",["got","had","did"]),
 M("John and Dina ___ married in the summer.","got",["went","had","did"],"get married = casarse."),
 WB(61,"12A"),
 M("— Did you have a good journey? — No, I didn't sit down for two hours. The train was ___.","full",["empty","free","late"]),
 M("— My grandparents went to China last year. — ___! Where did they go?","That's interesting",["Time to go","Nice to meet you","Have a good day"]),
 M("Mmm, that's a ___. Is Dad cooking?","nice smell",["nice seat","nice message","nice platform"])
],
d:[
 SB(72,"12A Verbs Quiz"),
 W("Pasado: leave →","left"),
 W("Pasado: write →","wrote"),
 W("Pasado: send →","sent"),
 W("Pasado: say →","said"),
 M("Verbs Quiz: ¿en cuál -ed suena /ɪd/?","started",["opened","looked","asked"],"-ed suena /ɪd/ solo después de t o d: started, waited."),
 GB(12,"A"),
 M("What time ___?","did the concert finish",["finished the concert","the concert finished","did the concert finished"],"QuASI: palabra de pregunta + did + sujeto + infinitivo."),
 M("— What time ___ to bed last night? — At 10.30.","did you go",["did you went","you went","went you"]),
 M("I liked the jacket, but I ___ it.","didn't buy",["didn't bought","not bought","don't buy"]),
 M("— ___ at school this morning? — Yes, I was.","Were you",["Did you","Was you","Are you"]),
 M("Were you at work yesterday? I ___ you.","didn't see",["didn't saw","not saw","wasn't see"]),
 O("What time did they get up?","¿A qué hora se levantaron?"),
 M("«Ayer compré un regalo.»","Yesterday I bought a present.",["Yesterday I buyed a present.","Yesterday I did buy a present.","Yesterday I brought a present."],"buy → bought (comprar); bring → brought (traer)."),
 SB(74,"12B"),
 M("¿Qué pasado suena con /e/, como egg?","left",["saw","told","bought"],"left, sent y said suenan /e/."),
 M("¿be, have o do? «___ tired»","be",["have","do","get"]),
 WB(62,"12B"),
 M("Sorry I'm late. I ___ the bus this morning.","got",["went","had","did"],"get the bus = tomar el colectivo."),
 WB(61,"12A"),
 M("Did you ___ numbers with the girl you met at the party?","exchange",["change","send","tell"],"exchange numbers = intercambiar números.")
]}
];

/* Verbos de la página «Regular and irregular verbs» (Libro p.133) */
const REG="answer answered|arrive arrived|ask asked|book booked|carry carried|change changed|clean cleaned|close closed|cook cooked|cry cried|decide decided|finish finished|hate hated|help helped|invite invited|learn learned|like liked|listen listened|live lived|look looked|love loved|miss missed|move moved|need needed|offer offered|open opened|pack packed|paint painted|park parked|pass passed|phone phoned|play played|rain rained|relax relaxed|rent rented|snow snowed|start started|stay stayed|stop stopped|study studied|talk talked|travel travelled|turn turned|use used|wait waited|walk walked|want wanted|wash washed|watch watched|work worked".split("|").map(s=>s.split(" "));
const IRR=[["be (I / he)","was"],["be (you / we / they)","were"],["buy","bought"],["do","did"],["get","got"],["go","went"],["have","had"],["leave","left"],["say","said"],["see","saw"],["send","sent"],["sit","sat"],["tell","told"],["write","wrote"]];
const ALT={learned:["learnt"],travelled:["traveled"]};
const P133="Libro p.133 · Regular and irregular verbs";

/* ===================== Generadores: preguntas que cambian cada vez ===================== */
const _r=a=>a[Math.random()*a.length|0];
const _sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];}return a;};
const _uniq=a=>[...new Set(a)];
const ONES="zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const TENS=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
const numW=n=>n===100?"a hundred":n<20?ONES[n]:TENS[n/10|0]+(n%10?"-"+ONES[n%10]:"");
const DAYS="Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" ");
const MONTHS="January February March April May June July August September October November December".split(" ");
const ORD_SPECIAL={1:"first",2:"second",3:"third",5:"fifth",8:"eighth",9:"ninth",12:"twelfth",20:"twentieth",30:"thirtieth"};
const ordW=n=>ORD_SPECIAL[n]||(n>20&&n%10?TENS[n/10|0]+"-"+ordW(n%10):numW(n)+"th");
const ordS=n=>n+((n%100>=11&&n%100<=13)?"th":["th","st","nd","rd"][n%10]||"th");
const NAT=[["Brazil","Brazilian"],["China","Chinese"],["Egypt","Egyptian"],["England","English"],["France","French"],["Germany","German"],["Italy","Italian"],["Japan","Japanese"],["Mexico","Mexican"],["Nigeria","Nigerian"],["Poland","Polish"],["Russia","Russian"],["Spain","Spanish"],["Switzerland","Swiss"],["Türkiye","Turkish"],["the United States","American"],["the UK","British"]];
const ARTICLE=[["a","phone"],["a","watch"],["a","tablet"],["a","bag"],["a","wallet"],["a","purse"],["a","pencil"],["a","notebook"],["a","photo"],["a","passport"],["a","camera"],["a","key"],["a","charger"],["an","ID card"],["an","umbrella"],["an","email"],["an","office"],["an","omelette"]];
const PLURAL=[["phone","phones","+s"],["key","keys","vocal + y: solo se agrega -s"],["bag","bags","+s"],["holiday","holidays","vocal + y: solo se agrega -s"],["watch","watches","después de ch se agrega -es"],["class","classes","después de ss se agrega -es"],["dictionary","dictionaries","consonante + y → -ies"],["city","cities","consonante + y → -ies"],["country","countries","consonante + y → -ies"],["umbrella","umbrellas","+s"],["passport","passports","+s"],["tablet","tablets","+s"],["email","emails","+s"],["wallet","wallets","+s"],["photo","photos","+s"]];
const THIRD=[["work","works"],["live","lives"],["watch","watches"],["finish","finishes"],["study","studies"],["have","has"],["go","goes"],["do","does"],["drink","drinks"],["speak","speaks"],["read","reads"],["wear","wears"],["teach","teaches"],["play","plays"],["get up","gets up"]];
const ING=[["read","reading","+ing"],["fly","flying","+ing"],["cycle","cycling","se saca la e"],["drive","driving","se saca la e"],["swim","swimming","vocal + consonante: se duplica"],["shop","shopping","vocal + consonante: se duplica"],["cook","cooking","+ing"],["dance","dancing","se saca la e"],["run","running","vocal + consonante: se duplica"],["get","getting","vocal + consonante: se duplica"],["sit","sitting","vocal + consonante: se duplica"],["paint","painting","+ing"],["write","writing","se saca la e"],["play","playing","+ing"],["have","having","se saca la e"],["make","making","se saca la e"]];

const POSS=[["I'm Ana.","My","name is Ana."],["You're Ben.","Your","name is Ben."],["He's Marco.","His","name is Marco."],["She's Clara.","Her","name is Clara."],["We're Selma and Luis.","Our","names are Selma and Luis."],["They're Pedro and Maria.","Their","names are Pedro and Maria."]];
const BE_NOW=[["I","am","are"],["You","are","is"],["He","is","are"],["She","is","are"],["We","are","is"],["They","are","is"]];
const ING_NOW=[["read","reading"],["cook","cooking"],["swim","swimming"],["run","running"],["sit","sitting"],["paint","painting"],["write","writing"],["dance","dancing"],["drive","driving"],["work","working"],["sleep","sleeping"],["study","studying"]];
const WASWERE=[["I","was"],["He","was"],["She","was"],["You","were"],["We","were"],["They","were"]];
/* hora */
function timeForms(h,m){
  const hw=x=>ONES[((x-1+12)%12)+1];
  const mm=String(m).padStart(2,"0");
  let ph;
  if(m===0) ph=`${hw(h)} o'clock`;
  else if(m===15) ph=`quarter past ${hw(h)}`;
  else if(m===30) ph=`half past ${hw(h)}`;
  else if(m===45) ph=`quarter to ${hw(h+1)}`;
  else if(m<30) ph=`${numW(m)} past ${hw(h)}`;
  else ph=`${numW(60-m)} to ${hw(h+1)}`;
  const digital=m===0?ph:`${hw(h)} ${m<10?"oh "+numW(m):numW(m)}`;
  const acc=_uniq([ph,"it's "+ph,digital,"it's "+digital].concat(/^quarter/.test(ph)?["a "+ph,"it's a "+ph]:[]));
  return {d:`${h}:${mm}`,ph,acc};
}
const fixH=h=>((h-1+12)%12)+1;

const GEN={
  1:{ref:VB(116,"Numbers")+" · "+SB(6,"1A"),
    f:()=>[(()=>{const n=_r([0,1,2,3,4,5,6,7,8,9,10]);const o=_sh([0,1,2,3,4,5,6,7,8,9,10].filter(x=>x!==n)).slice(0,3);return L(String(n),o.map(String),null,numW(n));})(),
           (()=>{const i=_r([0,1,2,3,4,5]);return M(`¿Qué día viene después de ${DAYS[i]}?`,DAYS[i+1],_sh(DAYS.filter((d,k)=>k!==i+1&&k!==i)).slice(0,3));})()],
    m:()=>[(()=>{const n=_r([0,1,2,3,4,5,6,7,8,9,10]);const o=_sh([0,1,2,3,4,5,6,7,8,9,10].filter(x=>x!==n)).slice(0,3);return L(String(n),o.map(String),null,numW(n));})()],
    d:()=>[(()=>{const n=_r([0,2,3,4,5,6,7,8,9,10]);return W(`Escribí en letras: ${n}`,numW(n));})(),
           (()=>{const i=_r([0,1,2,3,4,5]);return W(`Día que viene después de ${DAYS[i]}`,DAYS[i+1].toLowerCase(),"Los días van con mayúscula.");})()]},
  2:{ref:VB(116,"Numbers")+" · "+VB(117,"Nationalities"),
    f:()=>{const[c,n]=_r(NAT);return [M(`He's from ${c}. He's ___.`,n,_sh(NAT.filter(x=>x[1]!==n).map(x=>x[1])).slice(0,3)),numListen()];},
    m:()=>[numListen(),numListen()],
    d:()=>{const[c,n]=_r(NAT);const k=_r([13,14,15,16,17,18,19,21,30,34,40,47,50,55,62,66,70,77,80,88,90,99]);
      return [W(`Nacionalidad: She's from ${c}. She's ___.`,n.toLowerCase(),"Las nacionalidades van con mayúscula."),W(`Escribí en letras: ${k}`,_uniq([numW(k),numW(k).replace("-"," ")]))];}},
  3:{ref:GB(3,"A")+" · "+VB(119,"Small things"),
    f:()=>{const[a,w]=_r(ARTICLE);const[s,p,e]=_r(PLURAL);return [M(`It's ___ ${w}.`,a,a==="a"?["an","two"]:["a","two"],a==="an"?"an antes de sonido de vocal.":"a antes de sonido de consonante."),M(`one ${s} → two ___`,p,_sh(_uniq([s+"s",s+"es",s.replace(/y$/,"ies"),s.replace(/y$/,"yes")]).filter(x=>x!==p)).slice(0,2),e)];},
    m:()=>{const[a,w]=_r(ARTICLE);return [M(`It's ___ ${w}.`,a,["an","a","two","some"].filter(x=>x!==a),a==="an"?"an antes de sonido de vocal.":"a antes de sonido de consonante.")];},
    d:()=>{const[s,p,e]=_r(PLURAL);const[a,w]=_r(ARTICLE);return [W(`Plural: one ${s} → two ___`,p,e),W(`a o an: «It's ___ ${w}.»`,a)];}},
  4:{ref:GB(4,"A"),
    f:()=>{const[s,p,x]=_r(POSS);return [M(`${s} ___ ${x}`,p,_sh(POSS.map(z=>z[1]).filter(z=>z!==p)).slice(0,2))];},
    m:()=>{const[s,p,x]=_r(POSS);return [M(`${s} ___ ${x}`,p,_sh(POSS.map(z=>z[1]).filter(z=>z!==p)).slice(0,3))];},
    d:()=>{const[s,p,x]=_r(POSS);return [W(`${s} ___ ${x}`,p.toLowerCase())];}},
  5:{ref:SB(34,"Practical English 3 (the time)"),
    f:()=>[timeM()],
    m:()=>[timeL(),timeM()],
    d:()=>{const h=_r([1,2,3,4,5,6,7,8,9,10,11,12]),m=_r([0,15,30,45,10,20,40,50]);const t=timeForms(h,m);return [W(`Escribí la hora en inglés: ${t.d}`,t.acc,`${t.d} = ${t.ph}.`)];}},
  6:{ref:GB(6,"A"),
    f:()=>{const[b,s]=_r(THIRD);return [M(`I ${b} → he ___`,s,_sh(_uniq([b,b+"s",b+"es",b.replace(/y$/,"ies")]).filter(x=>x!==s)).slice(0,2))];},
    m:()=>{const[b,s]=_r(THIRD);return [M(`I ${b} → she ___`,s,_sh(_uniq([b,b+"s",b+"es",b.replace(/y$/,"ies"),b+"ing"]).filter(x=>x!==s)).slice(0,3))];},
    d:()=>{const[b,s]=_r(THIRD);return [W(`I ${b} → he ___`,s)];}},
  7:{ref:VB(127,"Months and ordinal numbers"),
    f:()=>{const i=_r([0,1,2,3,4,5,6,7,8,9,10]);const n=_r([1,2,3,5,8,9,12,20,21,22,23,30,31]);
      return [M(`¿Qué mes viene después de ${MONTHS[i]}?`,MONTHS[i+1],_sh(MONTHS.filter((x,k)=>k!==i+1&&k!==i)).slice(0,3)),
              M(`${ordS(n)} se dice…`,ordW(n),_sh(_uniq([numW(n),ordW(n>20?n-10:n+10),numW(n)+"th",ordW(n===1?3:n===3?1:n===2?20:n-1)]).filter(x=>x!==ordW(n))).slice(0,3))];},
    m:()=>{const n=_r([1,2,3,4,5,8,9,12,13,20,21,22,23,30,31]);const mo=_r(MONTHS);const say=`the ${ordW(n)} of ${mo}`;
      const near=_uniq([n+10,n-10,n+1,n-1,n+20].filter(x=>x>=1&&x<=31&&x!==n));
      return [L(`${ordS(n)} ${mo}`,_sh(near).slice(0,2).map(x=>`${ordS(x)} ${mo}`).concat([`${ordS(n)} ${MONTHS[(MONTHS.indexOf(mo)+_r([1,2,3]))%12]}`]),"Las fechas se dicen con ordinales: the … of …",say)];},
    d:()=>{const n=_r([1,2,3,5,8,9,12,15,20,21,22,23,30,31]);const i=_r([0,1,2,3,4,5,6,7,8,9,10]);
      return [W(`Escribí en letras: ${ordS(n)}`,_uniq([ordW(n),ordW(n).replace("-"," ")])),W(`Mes que viene después de ${MONTHS[i]}`,MONTHS[i+1].toLowerCase(),"Los meses van con mayúscula.")];}},
  8:{ref:GB(8,"B"),
    f:()=>{const[b,g,e]=_r(ING);return [M(`-ing: ${b} → ___`,g,_sh(_uniq([b+"ing",b.replace(/e$/,"")+"ing",b+b.slice(-1)+"ing",b+"eing"]).filter(x=>x!==g)).slice(0,2),e)];},
    m:()=>{const[b,g,e]=_r(ING);return [M(`I like ___. (${b})`,g,_sh(_uniq([b,b+"s",b+"ing",b.replace(/e$/,"")+"ing",b+b.slice(-1)+"ing"]).filter(x=>x!==g)).slice(0,3),e)];},
    d:()=>{const[b,g,e]=_r(ING);return [W(`-ing: ${b} → ___`,g,e)];}},
  9:{ref:GB(9,"A"),
    f:()=>{const[su,be,wr]=_r(BE_NOW),[b,g]=_r(ING_NOW);return [M(`${su} ___ now. (${b})`,`${be} ${g}`,_sh([`${wr} ${g}`,`${be} ${b}`,g]).slice(0,2),"Algo que pasa ahora: be + verbo-ing.")];},
    m:()=>{const[su,be,wr]=_r(BE_NOW),[b,g]=_r(ING_NOW);return [M(`${su} ___ now. (${b})`,`${be} ${g}`,[`${wr} ${g}`,`${be} ${b}`,g],"Algo que pasa ahora: be + verbo-ing.")];},
    d:()=>{const[su,be]=_r(BE_NOW),[b,g]=_r(ING_NOW);return [W(`${su} ___ now. (${b})`,`${be} ${g}`,"be + verbo-ing.")];}},
  10:{ref:GB(10,"B"),
    f:()=>{const[su,v]=_r(WASWERE);return [M(`${su} ___ at home last night.`,v,v==="was"?["were","is"]:["was","are"])];},
    m:()=>{const[su,v]=_r(WASWERE);return [M(`${su} ___ in class yesterday.`,v,v==="was"?["were","is","did"]:["was","are","did"])];},
    d:()=>{const[su,v]=_r(WASWERE);return [W(`Negativo en pasado: ${su} ___ at home last night.`,v==="was"?["wasn't","was not"]:["weren't","were not"])];}},
  11:{ref:P133,
    f:()=>{const[b,p]=_r(REG);return [M(`Pasado de «${b}»`,p,_sh(_uniq([b+"ed",b+"d",b.replace(/y$/,"ied"),b+b.slice(-1)+"ed",b]).filter(x=>x!==p&&!(ALT[p]||[]).includes(x))).slice(0,2))];},
    m:()=>{const[b,p]=_r(REG);return [M(`Yesterday I ___. (${b})`,p,_sh(_uniq([b,b+"ed",b+"d",b.replace(/y$/,"ied"),b+b.slice(-1)+"ed",b+"s"]).filter(x=>x!==p&&!(ALT[p]||[]).includes(x))).slice(0,3))];},
    d:()=>{const[b,p]=_r(REG);return [W(`Pasado: ${b} →`,[p].concat(ALT[p]||[]))];}},
  12:{ref:P133,
    f:()=>{const[b,p]=_r(IRR.slice(2));return [M(`Pasado de «${b}»`,p,_sh(_uniq([b+"ed",b+"d",p+"ed",b]).filter(x=>x!==p)).slice(0,2))];},
    m:()=>{const[b,p]=_r(REG.concat(IRR.slice(2)));return [W(`Pasado: ${b} →`,[p].concat(ALT[p]||[]))];},
    d:()=>{const a=_sh(IRR.slice(2)).slice(0,2);return a.map(([b,p])=>W(`Pasado: ${b} →`,p));}}
};
function numListen(){
  const n=_r([13,14,15,16,17,18,19,21,30,33,40,44,50,55,60,66,70,77,80,88,90,99]);
  const c=[];
  if(n>=13&&n<=19) c.push((n-10)*10); if(n%10===0&&n>=30) c.push(n/10+10);
  c.push(Number(String(n).split("").reverse().join("")),n+1,n-1,n+10,n-10);
  const o=_uniq(c.filter(x=>x!==n&&x>=11&&x<=100)).slice(0,3);
  return L(String(n),o.map(String),"-teen se acentúa al final; -ty al principio.",numW(n));
}
function timeOpts(h,m){
  const c=[[h,(60-m)%60],[fixH(h+1),m],[fixH(h-1),m],[h,(m+30)%60]];
  return _uniq(c.map(([a,b])=>timeForms(a,b).d)).filter(x=>x!==timeForms(h,m).d);
}
function timeM(){const h=_r([1,2,3,4,5,6,7,8,9,10,11,12]),m=_r([0,15,30,45,10,20,40,50]);const t=timeForms(h,m);
  return M(`«It's ${t.ph}.»`,t.d,timeOpts(h,m).slice(0,3),`${t.ph} = ${t.d}`);}
function timeL(){const h=_r([1,2,3,4,5,6,7,8,9,10,11,12]),m=_r([15,30,45,20,40]);const t=timeForms(h,m);
  return L(t.d,timeOpts(h,m).slice(0,3),`${t.d} = ${t.ph}.`,`It's ${t.ph}.`);}

/* Aplica la página de referencia a cada pregunta */
UNITS.forEach(u=>["f","m","d"].forEach(k=>{
  let ref=""; u[k]=u[k].flatMap(x=>typeof x==="string"?(ref=x,[]):[Object.assign(x,{p:ref})]);
}));
