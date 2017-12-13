
var bgColour = [184,230,194];
var sloth;
var userSpeech = "wowo";

var speaking = false;
var speech;

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0);
    sloth = loadImage("assets/sloth.png");  // Load the image

  let speech = new p5.Speech();
  let speechRec = new p5.SpeechRec('en-US', gotSpeech);
  let continuous = true;
  let interim = false;
    
    speech.setVoice(3);
speech.speak('Hellooooo Despina and Valentine, I am Zentor!... Why did the baker have smelly hands?');

    speechRec.start(continuous, interim);

  let bot = new RiveScript();
  bot.loadFile("brain.rive", brainReady, brainError);

  function brainReady() {
    console.log('Chatbot ready!');
    bot.sortReplies();
  }

  function brainError() {
    console.log('Chatbot error!')
  }


  function gotSpeech() {
    if (speechRec.resultValue) {
      let input = speechRec.resultString;
      let reply = bot.reply("local-user", input);
      userSpeech = input;
      speech.speak(reply);   
    }
  }

}

function draw() {
    background(bgColour);
    image(sloth, width/2-(sloth.width/2), height-sloth.height);
    textAlign(CENTER);
    textSize(100);
    fill(255);
        
    text(userSpeech,  width/7, height/7, 5*(width/7), height/2);

    
}
