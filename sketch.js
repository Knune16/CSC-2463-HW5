
let sounds = new Tone.Players({
  'Shotgun': "Assets/Shotgun.wav",
  'Waterstorm': "Assets/Stormwater.mp3",
  'Rainforest': "Assets/bbc_rainforest_nhu0501110.mp3",
  'FootSteps': "Assets/bbc_footsteps-_07004045.mp3"
});

let delay = new Tone.FeedbackDelay("8n",0.5);
let button1, button2, button3, button4, delaySlider;


sounds.connect(delay);
delay.toDestination();

function setup() {
  createCanvas(400, 400);

  button1 = createButton('Shotgun');
  button1.position(85,150);
  button1.mousePressed(() => sounds.player("Shotgun").start());

  button2 = createButton('WaterStorm');
  button2.position(205,150);
  button2.mousePressed(() => sounds.player("Waterstorm").start());

  button3 = createButton('Rainforest');
  button3.position(85,100);
  button3.mousePressed(() => sounds.player("Rainforest").start());

  button4 = createButton('FootSteps');
  button4.position(205,100);
  button4.mousePressed(()=> sounds.player("FootSteps").start());

  

  delaySlider = createSlider(0.,1.,0.5,0.05);
  delaySlider.position(120,250);
  delaySlider.mousePressed(() => {
    delay.delayTime.value = delaySlider.value();
  })
}

function draw() {
  background('Green');
  text ("Add delay with slider", 130, 300)
}
