let screen = 'Home';
let buttonCause;
let buttonEffect;
let buttonHome;
let buttonAction;
let allow = true;
let colour = 1;


function setup() {
  createCanvas(1000,1000);
}
//preload
function preload(){
  shark1 = loadImage('picture/shark1.jpg');
  man = loadImage('picture/origin.png');
  plank = loadImage('picture/u.png');
  soup = loadImage('picture/soup.jpg');
  wwf = loadImage('picture/wwf.png');
  bloom = loadImage('picture/Bloom.png');
  br = loadImage('picture/back.png');
}
function draw() {
  
  
  background(br);
  colour += 3;
  if(colour > 255){
    colour = 1;
  }
  
  if(screen == 4){
    textSize(30)
    textFont('cabin')
    text("What action can we take?",width/2-50,40)
    textFont('Arial')
    textSize(24)
    text("Well even a small donation to NGO's such as WWF, Bloom association or hksharkfoundation will make a big difference. We advocate to stop shark finning on social platforms and educate people on why shark finning needs to stop.",width/2-280,400,600);
    image(wwf,width/3.2,170,200,200)
    image(bloom,width/1.7,170,200,200)
    line(80,0,80,width);
  }
  
  
  if(screen == 'Home'){
    background(255,255,255)
    textSize(40);
    textFont('Georgia')
    fill(1);
    text("Shark Finning: Sharks Turned Prey",width/2-150,40)
    image(soup,width/2-150,80,500,500);
    textFont('arial')
    fill(colour)
    text("Press 'enter' to continue",345,650)
    
  }
  if(screen == 3){
    textSize(30)
    textFont('cabin')
    text("Negative effect's",width/2-50,40)
    textFont('Arial')
    textSize(24)
    image(plank,width/2-100,50,400,300)
     text("As a result of shark finning, 100M sharks have been killed annually which means approximately 3 sharks are being killed per second   and once a shark is killed it is thrown back into the oceon to slowly die since it can't swim without its fins and slowly its gills  wont function and the shark will die, But shark cruelty isnt the only reason to stop sharks finning. Firstly fish will start to overpopulate, as normally sharks would eat some of them. Something called phytoplankton which converts 60% of the oxygen we breath from CO2 into oxygen. This is one of the most vital organisms in the world and it will be unprotected, as the greater numbers of smaller fish will eat it however usualy when sharks are alive they protect the plankton and dont eat the plankton themselves.  Sharks also actually eat plastic that we throw in the ocean and can survive with plastic in their mouths that normal fish would choke on. This could also reduce plastic pollution if there were enough sharks, however since sharks are being fined, this is starting to stop."
,width/2-280,400,600);
    line(80,0,80,width);
    fill(1)
  }
  if(screen == 2){
    textSize(30)
    textFont('cabin')
    text("Why do people buy/skill sharks?",width/2-50,40)
    textFont('Arial')
    textSize(24)
    image(man,width/2-100,50,400,300)
    text("People like to sell sharks since it makes them alot of money and a few of the richest people have componies that sell shark fin soup. But why do people but it? Many people buy these products for special occasions such as weddings, as a sign of wealth. Some people believe that eating shark fin soup cures any illnesses, even though it includes poison since it has a lot of toxins like lead and mercury. Also it has no nutritional value. Many people that consume shark fin soup don't know this information and are spending loads of dollars for this useless and tastless meal. 5 people have actually died due to shark fin soup poisoning."
,width/2-280,400,600);
    line(80,0,80,width);
    fill(1)
    
  }
  
  if(screen == 1){
    buttonCause = createButton("Cause's");
    buttonCause.position(10,50);
    buttonCause.mousePressed(cause);
    buttonHome = createButton('Intro');
    buttonHome.position(10,20);
    buttonHome.mousePressed(home);
    buttonEffect = createButton("Effect's")
    buttonEffect.position(10,80)
    buttonEffect.mousePressed(effect)
    buttonAction = createButton("Action")
    buttonAction.position(10,110);
    buttonAction.mousePressed(action);
    textSize(40)
    textFont('cabin')
    text("Intro",width/2-50,40)
    image(shark1,width/2-100,50,250,250)
    textFont('Arial')
    textSize(24)
    fill(1)
    text("Intro",width/2-280,350)
    text("The demand for shark fins has exponentially increased over the past century's. Infact shark finnings was first purposal was back in 950's while the emporer Taizu was the king of of the song dynasty adn he released it to the public. Now 'adays', Shark fin soup is everywhere and everyone likes to eat it aswell as people who sell it who can make around 400 usd for 1Kg of fins. However this happyness wont last untill shark's are extinct which comes with big negative flaws. "
,width/2-280,400,600);
    line(80,0,80,width);
    allow = false;
    
    
  }
  
}
function cause(){
  screen = 2;
}
function home(){
  screen = 1;
}
function effect(){
  screen = 3;
}
function keyPressed(){
  if(keyCode == ENTER){
    if(allow == true){
      console.log("k")
      screen = 1;
      allow = false;
    }
    
  }
}
function action(){
  screen = 4;
}
