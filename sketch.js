
const PHASES = [
  {
    kind:"welcome",
    label:"INICIO",
    title:"Hoy construimos 3.º A",
    subtitle:"Una tutoría para conocernos, escucharnos y empezar el curso como grupo.",
    duration:180,
    objective:"Durante una hora haremos varias dinámicas cortas. No buscamos respuestas perfectas: buscamos conocernos.",
    steps:[
      "Participa a tu manera.",
      "Escucha cuando otra persona esté hablando.",
      "Atrévete a hablar con alguien con quien todavía no tengas mucha confianza."
    ],
    cue:"Empezamos tranquilos. En unos minutos estaremos moviéndonos por el aula."
  },
  {
    kind:"rules",
    label:"ANTES DE EMPEZAR",
    title:"Tres reglas sencillas",
    subtitle:"Para que las dinámicas funcionen y todo el mundo pueda estar cómodo.",
    duration:120,
    objective:"Podemos divertirnos y movernos, pero cuidando el ambiente del grupo.",
    steps:[
      "Respeto: nada de burlas por una respuesta.",
      "Escucha: dejamos terminar antes de responder.",
      "Privacidad: nadie tiene que contar algo personal que no quiera."
    ],
    cue:"Y una cuarta: intenta no quedarte siempre con las mismas personas."
  },
  {
    kind:"curious",
    label:"1 · MOVIMIENTO",
    title:"El cuestionario de los curiosos",
    subtitle:"Levántate, muévete y encuentra personas que encajen con las pistas.",
    duration:720,
    objective:"Romper el hielo y descubrir cosas que compartimos con compañeros diferentes.",
    steps:[
      "Habla con una persona y hazle una pregunta.",
      "Si encaja con una pista, anota su nombre.",
      "Después busca a otra persona: intenta repetir nombres lo menos posible."
    ],
    prompts:[
      "Ha leído algún libro este verano",
      "Practica algún deporte",
      "Habla o aprende otro idioma",
      "Tiene una mascota",
      "Le gusta bailar o la música",
      "Toca algún instrumento",
      "Comparte contigo una afición",
      "Tiene una afición que tú no conocías"
    ],
    cue:"Objetivo extra: habla al menos con 3 personas con las que normalmente hablas poco."
  },
  {
    kind:"transition",
    label:"CAMBIO",
    title:"Últimas conversaciones",
    subtitle:"Completa lo que puedas y vuelve a tu sitio cuando termine el tiempo.",
    duration:180,
    objective:"Cerrar la actividad sin prisas y quedarnos con algo que hayamos descubierto.",
    steps:[
      "Busca una última persona con la que todavía no hayas hablado.",
      "Completa una pista que te falte.",
      "Piensa: ¿qué cosa te ha sorprendido de alguien?"
    ],
    cue:"Cuando termine el tiempo, formaremos parejas."
  },
  {
    kind:"interview",
    label:"2 · ENTREVISTA · TURNO A",
    title:"Conoce a tu compañero/a",
    subtitle:"Una persona pregunta y la otra responde. Después cambiaremos.",
    duration:300,
    objective:"Practicar una escucha real: preguntar, atender y recordar.",
    steps:[
      "A pregunta. B responde.",
      "No hace falta hacer todas las preguntas.",
      "Quédate con dos ideas que luego puedas contar."
    ],
    prompts:[
      "¿Qué te gusta hacer fuera del instituto?",
      "¿En qué crees que eres bueno/a?",
      "¿Qué asignatura te gusta más?",
      "¿Qué te gustaría aprender este año?",
      "¿Qué valoras en un compañero/a?",
      "¿Cómo sería para ti un buen grupo de clase?"
    ],
    cue:"No es un interrogatorio: podéis conversar y hacer preguntas nuevas."
  },
  {
    kind:"interview",
    label:"2 · ENTREVISTA · TURNO B",
    title:"Cambiamos los papeles",
    subtitle:"Ahora pregunta quien estaba respondiendo.",
    duration:300,
    objective:"Los dos miembros de la pareja deben tener tiempo para hablar y ser escuchados.",
    steps:[
      "B pregunta. A responde.",
      "Escucha para comprender, no para preparar tu siguiente respuesta.",
      "Recuerda dos cosas para la presentación."
    ],
    prompts:[
      "¿Qué te hace reír?",
      "¿Qué actividad se te da especialmente bien?",
      "¿Qué lugar te gustaría visitar?",
      "¿Qué te gustaría conseguir este curso?",
      "¿Qué cualidad aprecias en tus amigos?",
      "¿Qué podemos aportar nosotros a 3.º A?"
    ],
    cue:"Cuando termine, tendréis un momento para preparar cómo presentaros."
  },
  {
    kind:"prepare",
    label:"PREPARACIÓN",
    title:"Preparamos la presentación",
    subtitle:"Muy breve: elegid qué vais a contar de la otra persona.",
    duration:120,
    objective:"Seleccionar información y expresarla de forma clara y respetuosa.",
    steps:[
      "Elegid una o dos cosas interesantes.",
      "No contéis algo que la otra persona prefiera guardar.",
      "Pensad una presentación de unos 20 segundos cada uno."
    ],
    cue:"Podéis empezar así: «Os presento a… y he descubierto que…»"
  },
  {
    kind:"present",
    label:"3 · PRESENTACIONES",
    title:"Presentaciones relámpago",
    subtitle:"Cada pareja dispone de unos 40 segundos en total.",
    duration:600,
    objective:"Conocer al grupo a través de las palabras de otra persona.",
    steps:[
      "20 segundos aproximadamente por persona.",
      "Cuenta algo concreto y positivo o interesante.",
      "Mientras otra pareja habla, escuchamos."
    ],
    cue:"Si alguien comparte esa afición, puede levantar la mano al terminar."
  },
  {
    kind:"story",
    label:"4 · RETO DE MEMORIA",
    title:"Construimos una historia",
    subtitle:"Cada persona continúa la historia sin perder lo que ya ha ocurrido.",
    duration:600,
    objective:"Entrenar atención, memoria verbal, imaginación y escucha.",
    steps:[
      "Escucha la última parte de la historia.",
      "Mantén algo de lo anterior.",
      "Añade una nueva idea en una frase.",
      "Pasa el turno rápidamente."
    ],
    quote:"«Esta mañana, al llegar al instituto, había una caja misteriosa delante de la puerta…»",
    cue:"A mitad de la historia aparecerá obligatoriamente algo relacionado con el instituto."
  },
  {
    kind:"agreement",
    label:"5 · CIERRE",
    title:"¿Cómo queremos que sea 3.º A?",
    subtitle:"Terminamos convirtiendo nuestras ideas en un pequeño acuerdo de grupo.",
    duration:480,
    objective:"Pensar qué ambiente queremos y qué depende de nosotros para conseguirlo.",
    questions:[
      "Del 1 al 5: ¿cómo os habéis sentido hoy como grupo?",
      "¿Qué necesita un buen grupo para funcionar?",
      "¿Qué podemos hacer nosotros —no los demás— para conseguirlo?"
    ],
    cue:"Di una palabra. El tutor la añadirá a nuestro acuerdo de 3.º A."
  }
];

const EXTRA_CHALLENGES = [
  "Encuentra a alguien que tenga una afición que nunca hayas probado.",
  "Habla con alguien que esté sentado lejos de ti normalmente.",
  "Encuentra a alguien con quien compartas una canción, serie, juego o deporte.",
  "Descubre algo que alguien del grupo sepa hacer y tú no.",
  "Encuentra a alguien que quiera aprender algo parecido a ti este año.",
  "Pregunta a alguien qué habilidad le gustaría tener dentro de cinco años."
];

let phaseIndex = 0;
let remaining = PHASES[0].duration;
let running = true;
let lastTick = 0;
let timerFinished = false;
let agreements = [];
let confetti = [];

function setup(){
  const c = createCanvas(windowWidth, windowHeight - 72);
  c.parent("app");
  textFont("system-ui");
  lastTick = millis();
  loadAgreements();
  wireControls();
  syncUI();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight - 72);
}

function draw(){
  drawBackground();
  tickTimer();
  drawPhase(PHASES[phaseIndex]);
  drawPhaseProgress();
  drawConfetti();
  updateCountdownDOM();
}

function drawBackground(){
  background("#08111f");
  noStroke();
  for(let i=0;i<8;i++){
    const x = width*(.08+i*.13) + sin(frameCount*.006+i*1.8)*24;
    const y = height*(.12+(i%4)*.22) + cos(frameCount*.008+i)*18;
    fill(i%2===0 ? color(90,140,230,12) : color(93,205,170,10));
    circle(x,y,180+i*24);
  }
}

function tickTimer(){
  if(!running){
    lastTick = millis();
    return;
  }
  const now = millis();
  if(now-lastTick>=1000){
    const ticks = floor((now-lastTick)/1000);
    const old = remaining;
    remaining = max(0, remaining-ticks);
    lastTick += ticks*1000;

    if(old>10 && remaining<=10) playTick(500,.04);
    if(remaining>0 && remaining<=5 && remaining!==old) playTick(620+remaining*35,.035);

    if(remaining===0 && !timerFinished){
      running=false;
      timerFinished=true;
      playFinish();
      burstConfetti();
      syncUI();
    }
  }
}

function drawPhase(p){
  const margin = max(34,width*.032);
  const top = max(38,height*.055);
  const boxH = height-top-margin*.7;
  const leftW = width*.68-margin;
  const rightX = margin+leftW+14;
  const rightW = width-rightX-margin;

  noStroke();
  fill("#111e35");
  rect(margin,top,leftW,boxH,30);

  fill("#172945");
  rect(rightX,top,rightW,boxH,30);

  drawHeader(p,margin,top,leftW,rightX,rightW);
  drawContent(p,margin,top,leftW,boxH);
  drawVisual(p,rightX,top,rightW,boxH);
}

function drawHeader(p,x,y,w,rightX,rightW){
  fill("#92b9ff");
  textStyle(BOLD);
  textSize(clamp(width*.0125,15,23));
  text(p.label,x+30,y+39);

  fill("#f7f9ff");
  textSize(clamp(width*.032,34,62));
  textLeading(clamp(width*.037,40,70));
  text(p.title,x+30,y+76,w-60,90);

  fill("#aebcdb");
  textStyle(NORMAL);
  textSize(clamp(width*.016,18,29));
  textLeading(clamp(width*.021,22,36));
  text(p.subtitle,x+30,y+151,w-60,72);

  drawTimer(rightX+18,y+18,rightW-36,105);
}

function drawContent(p,x,y,w,h){
  const cx=x+30, cw=w-60;
  let cy=y+230;

  cy = drawObjective(cx,cy,cw,p.objective)+14;

  if(p.steps){
    cy = drawSteps(cx,cy,cw,p.steps)+14;
  }

  if(p.prompts){
    cy = drawPromptGrid(cx,cy,cw,p.prompts)+12;
  }

  if(p.quote){
    cy = drawQuote(cx,cy,cw,p.quote)+12;
  }

  if(p.questions){
    cy = drawQuestions(cx,cy,cw,p.questions)+12;
  }

  drawCue(cx,min(cy,height-83),cw,p.cue);
}

function drawObjective(x,y,w,txt){
  const h=76;
  fill("#20355d");
  rect(x,y,w,h,18);
  fill("#8fe4c9");
  textStyle(BOLD);
  textSize(clamp(width*.0118,14,21));
  text("PARA QUÉ",x+17,y+24);
  fill("#f7f9ff");
  textStyle(NORMAL);
  textSize(clamp(width*.014,16,25));
  textLeading(clamp(width*.019,20,31));
  text(txt,x+17,y+39,w-34,34);
  return y+h;
}

function drawSteps(x,y,w,steps){
  const rowH=42;
  const h=40+steps.length*rowH;
  fill("#152742");
  rect(x,y,w,h,18);
  fill("#92b9ff");
  textStyle(BOLD);
  textSize(clamp(width*.012,15,22));
  text("QUÉ HACEMOS",x+17,y+25);

  for(let i=0;i<steps.length;i++){
    const yy=y+54+i*rowH;
    fill("#8fe4c9");
    circle(x+22,yy-4,9);
    fill("#f7f9ff");
    textStyle(i===0?BOLD:NORMAL);
    textSize(clamp(width*.013,15,23));
    textLeading(27);
    text(steps[i],x+39,yy-15,w-52,32);
  }
  return y+h;
}

function drawPromptGrid(x,y,w,items){
  const cols=(width>1450 && items.length>4)?2:1;
  const gap=14;
  const colW=(w-gap*(cols-1))/cols;
  const rowH=64;
  const rows=ceil(items.length/cols);
  const h=40+rows*rowH+8;

  fill("#14243f");
  rect(x,y,w,h,18);
  fill("#ffd58c");
  textStyle(BOLD);
  textSize(clamp(width*.012,15,22));
  text(phaseIndex===2 ? "PISTAS" : "PREGUNTAS QUE PUEDES USAR",x+17,y+25);

  for(let i=0;i<items.length;i++){
    const col=i%cols,row=floor(i/cols);
    const bx=x+col*(colW+gap);
    const by=y+42+row*rowH;

    fill("#1d3154");
    rect(bx,by,colW,rowH-8,14);
    fill("#ffd58c");
    textStyle(BOLD);
    textSize(clamp(width*.0115,14,20));
    text(nf(i+1,2),bx+13,by+22);
    fill("#f7f9ff");
    textStyle(NORMAL);
    textSize(clamp(width*.012,14,21));
    textLeading(24);
    text(items[i],bx+42,by+12,colW-54,rowH-16);
  }
  return y+h;
}

function drawQuote(x,y,w,q){
  const h=82;
  fill("#26385f");
  rect(x,y,w,h,18);
  fill("#ffd58c");
  textStyle(BOLD);
  textSize(clamp(width*.0115,14,21));
  text("EMPEZAMOS ASÍ",x+17,y+24);
  fill("#ffffff");
  textSize(clamp(width*.015,17,27));
  textLeading(30);
  text(q,x+17,y+40,w-34,38);
  return y+h;
}

function drawQuestions(x,y,w,qs){
  const h=qs.length*76+6;
  for(let i=0;i<qs.length;i++){
    fill(i===0?"#20355d":"#182b49");
    rect(x,y+i*76,w,62,16);
    fill(i===0?"#8fe4c9":"#92b9ff");
    textStyle(BOLD);
    textSize(clamp(width*.0115,14,20));
    text(i+1,x+16,y+24+i*76);
    fill("#f7f9ff");
    textSize(clamp(width*.014,16,25));
    textLeading(28);
    text(qs[i],x+43,y+14+i*76,w-57,40);
  }
  return y+h;
}

function drawCue(x,y,w,txt){
  const h=54;
  fill("#0d192c");
  rect(x,y,w,h,16);
  fill("#aebcdb");
  textStyle(NORMAL);
  textSize(clamp(width*.0117,14,20));
  textLeading(23);
  text("→ "+txt,x+16,y+18,w-32,28);
}

function drawTimer(x,y,w,h){
  const urgent=remaining<=60;
  const ended=remaining===0;
  fill(ended?"#482629":urgent?"#3d2a2f":"#0c172a");
  rect(x,y,w,h,20);

  fill(ended?"#ffd58c":urgent?"#ffb3a6":"#92b9ff");
  textAlign(CENTER,CENTER);
  textStyle(BOLD);
  textSize(clamp(width*.027,34,52));
  text(formatTime(remaining),x+w/2,y+42);

  fill("#b9c6e4");
  textSize(clamp(width*.0087,11,15));
  textStyle(BOLD);
  text(ended?"TIEMPO":running?"EN MARCHA":"PAUSA",x+w/2,y+78);
  textAlign(LEFT,BASELINE);
}

function drawVisual(p,x,y,w,h){
  fill("#93a4c8");
  textStyle(BOLD);
  textSize(clamp(width*.0105,13,18));
  text("EN PANTALLA",x+22,y+145);

  push();
  translate(x+w/2,y+h*.53);
  const s=min(w,h)*.78;

  if(p.kind==="welcome") drawGroup(s);
  else if(p.kind==="rules") drawRules(s);
  else if(p.kind==="curious") drawCurious(s);
  else if(p.kind==="transition") drawClockScene(s);
  else if(p.kind==="interview") drawInterview(s);
  else if(p.kind==="prepare") drawCards(s);
  else if(p.kind==="present") drawMic(s);
  else if(p.kind==="story") drawStory(s);
  else if(p.kind==="agreement") drawAgreementVisual(s);
  pop();

  fill("#203250");
  rect(x+20,y+h-105,w-40,78,16);
  fill("#8fe4c9");
  textStyle(BOLD);
  textSize(clamp(width*.0108,13,18));
  text("RECUERDA",x+36,y+h-78);
  fill("#f7f9ff");
  textStyle(NORMAL);
  textSize(clamp(width*.0108,13,18));
  textLeading(22);
  text(shortReminder(p),x+36,y+h-57,w-72,34);
}

function shortReminder(p){
  if(p.kind==="curious") return "Muévete. Pregunta. Cambia de persona.";
  if(p.kind==="interview") return "Escuchar bien es más importante que preguntar mucho.";
  if(p.kind==="present") return "Breve, claro y respetuoso.";
  if(p.kind==="story") return "Escucha el hilo antes de añadir algo.";
  if(p.kind==="agreement") return "Piensa en algo que también dependa de ti.";
  if(p.kind==="rules") return "Respeto + escucha + privacidad.";
  if(p.kind==="transition") return "Última oportunidad y volvemos al sitio.";
  if(p.kind==="prepare") return "Una idea buena vale más que cinco deprisa.";
  return "Participa, escucha y deja espacio a los demás.";
}

function drawPerson(px,py,s,c,walk=false){
  push();
  translate(px,py);
  const k=walk?sin(frameCount*.08+px*.02):0;
  stroke(c);strokeWeight(max(2,s*.07));noFill();
  fill("#f7f9ff");circle(0,-s*.78,s*.42);
  line(0,-s*.57,0,-s*.05);
  line(0,-s*.43,-s*.30,-s*.20+k*s*.14);
  line(0,-s*.43,s*.30,-s*.20-k*s*.14);
  line(0,-s*.05,-s*.22,s*.32-k*s*.12);
  line(0,-s*.05,s*.22,s*.32+k*s*.12);
  pop();
}

function speech(x,y,w,h,txt){
  fill("#f7f9ff");noStroke();
  rect(x-w/2,y-h/2,w,h,16);
  triangle(x-w*.15,y+h/2,x-w*.04,y+h/2,x-w*.10,y+h*.68);
  fill("#26385f");
  textAlign(CENTER,CENTER);textStyle(BOLD);textSize(max(12,w*.09));
  text(txt,x,y,w*.86,h*.72);
  textAlign(LEFT,BASELINE);
}

function drawOrbitDots(r,n){
  noStroke();
  for(let i=0;i<n;i++){
    const a=TWO_PI*i/n+frameCount*.009;
    const rr=r*(.86+.07*sin(frameCount*.025+i));
    fill(i%3===0?"#ffd58c":i%3===1?"#8fe4c9":"#92b9ff");
    circle(cos(a)*rr,sin(a)*rr,7+(i%2)*3);
  }
}

function drawGroup(s){
  drawOrbitDots(s*.42,7);
  for(let i=-1;i<=1;i++){
    drawPerson(i*s*.22,sin(frameCount*.035+i)*7,s*.18,i===0?"#92b9ff":"#8fe4c9");
  }
  speech(0,-s*.28,s*.42,s*.14,"¿Empezamos?");
}

function drawRules(s){
  drawOrbitDots(s*.40,6);
  const bob=sin(frameCount*.035)*5;
  push();translate(0,bob);
  fill("#20355d");stroke("#8fe4c9");strokeWeight(4);
  beginShape();
  vertex(0,-s*.28);vertex(s*.22,-s*.18);vertex(s*.17,s*.13);vertex(0,s*.30);vertex(-s*.17,s*.13);vertex(-s*.22,-s*.18);
  endShape(CLOSE);
  noStroke();fill("#f7f9ff");textAlign(CENTER,CENTER);textStyle(BOLD);textSize(s*.105);text("✓",0,0);
  textAlign(LEFT,BASELINE);pop();
}

function drawCurious(s){
  drawOrbitDots(s*.43,8);
  for(let i=0;i<3;i++){
    const px=-s*.27+i*s*.27+sin(frameCount*.045+i)*10;
    const py=cos(frameCount*.052+i)*8;
    drawPerson(px,py,s*.14,i%2?"#8fe4c9":"#92b9ff",true);
  }
  noFill();stroke("#ffd58c");strokeWeight(4);
  arc(0,s*.10,s*.60,s*.28,0.15,PI-.15);
  noStroke();fill("#ffd58c");
  triangle(s*.28,s*.08,s*.20,s*.03,s*.21,s*.15);
}

function drawClockScene(s){
  drawOrbitDots(s*.4,6);
  push();rotate(sin(frameCount*.02)*.03);
  fill("#172945");stroke("#92b9ff");strokeWeight(5);circle(0,0,s*.50);
  stroke("#f7f9ff");strokeWeight(5);
  line(0,0,0,-s*.14);
  line(0,0,s*.11,s*.08);
  noStroke();pop();
  fill("#ffd58c");textAlign(CENTER,CENTER);textStyle(BOLD);textSize(s*.07);
  text("ÚLTIMAS\nCONVERSACIONES",0,s*.32);textAlign(LEFT,BASELINE);
}

function drawInterview(s){
  drawOrbitDots(s*.42,7);
  drawPerson(-s*.22,s*.20,s*.14,"#92b9ff");
  drawPerson(s*.22,s*.20,s*.14,"#8fe4c9");
  const a=sin(frameCount*.035)*7;
  speech(-s*.12,-s*.17+a,s*.34,s*.14,"¿Qué te gusta?");
  speech(s*.15,s*.01-a,s*.28,s*.12,"Te cuento…");
}

function drawCards(s){
  drawOrbitDots(s*.38,6);
  for(let i=0;i<3;i++){
    push();
    translate((i-1)*s*.10,sin(frameCount*.03+i)*6);
    rotate((i-1)*.07);
    fill(i===1?"#20355d":"#182b49");stroke(i===1?"#ffd58c":"#92b9ff");strokeWeight(3);
    rect(-s*.13,-s*.20,s*.26,s*.40,14);
    noStroke();fill("#dce5fa");
    rect(-s*.08,-s*.10,s*.16,s*.025,5);
    rect(-s*.08,-s*.02,s*.12,s*.025,5);
    rect(-s*.08,s*.06,s*.15,s*.025,5);
    pop();
  }
}

function drawMic(s){
  drawOrbitDots(s*.42,7);
  const b=sin(frameCount*.045)*7;
  push();translate(0,b);
  fill("#92b9ff");noStroke();
  rect(-s*.075,-s*.24,s*.15,s*.25,30);
  fill("#dce5fa");rect(-s*.025,0,s*.05,s*.22,8);
  fill("#ffd58c");rect(-s*.13,s*.20,s*.26,s*.035,6);
  pop();
  speech(0,-s*.34,s*.40,s*.13,"Os presento a…");
}

function drawStory(s){
  drawOrbitDots(s*.43,8);
  fill("#1d3154");stroke("#92b9ff");strokeWeight(3);
  rect(-s*.25,s*.02,s*.22,s*.28,12);
  rect(s*.03,s*.02,s*.22,s*.28,12);
  stroke("#dce5fa");line(0,s*.03,0,s*.30);
  noStroke();
  const fy=-s*.17+sin(frameCount*.04)*8;
  fill("#8fe4c9");circle(0,fy,s*.20);
  fill("#0b1930");textAlign(CENTER,CENTER);textStyle(BOLD);textSize(s*.08);text("?",0,fy);
  textAlign(LEFT,BASELINE);
}

function drawAgreementVisual(s){
  drawOrbitDots(s*.43,7);
  for(let i=0;i<4;i++){
    const a=-HALF_PI+i*TWO_PI/4+sin(frameCount*.018+i)*.04;
    drawPerson(cos(a)*s*.22,sin(a)*s*.16,s*.105,i%2?"#8fe4c9":"#92b9ff");
  }
  fill("#ff9bb2");noStroke();
  heart(0,0,s*.075);

  const words=agreements.slice(-5);
  for(let i=0;i<words.length;i++){
    const a=TWO_PI*i/max(1,words.length)+frameCount*.003;
    const r=s*.33;
    fill("#f7f9ff");
    textAlign(CENTER,CENTER);
    textStyle(BOLD);
    textSize(clamp(s*.035,12,19));
    text(words[i],cos(a)*r,sin(a)*r);
  }
  textAlign(LEFT,BASELINE);
}

function heart(x,y,s){
  push();translate(x,y);beginShape();
  vertex(0,s*.45);
  bezierVertex(-s*1.2,-s*.15,-s*.9,-s*1.15,0,-s*.50);
  bezierVertex(s*.9,-s*1.15,s*1.2,-s*.15,0,s*.45);
  endShape(CLOSE);pop();
}

function drawPhaseProgress(){
  const x=34,y=24;
  const available=min(width*.46,520);
  const gap=available/(PHASES.length-1);

  for(let i=0;i<PHASES.length;i++){
    noStroke();
    fill(i<phaseIndex?"#5576a9":i===phaseIndex?"#8fe4c9":"#283b5f");
    circle(x+i*gap,y,i===phaseIndex?10:7);
  }
}

function burstConfetti(){
  for(let i=0;i<34;i++){
    confetti.push({
      x:width*.5+random(-80,80),
      y:height*.38+random(-25,25),
      vx:random(-4,4),
      vy:random(-7,-2),
      g:random(.10,.19),
      life:150,
      c:random(["#92b9ff","#8fe4c9","#ffd58c","#ff9bb2"])
    });
  }
}

function drawConfetti(){
  noStroke();
  for(let i=confetti.length-1;i>=0;i--){
    const p=confetti[i];
    p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.life--;
    fill(p.c);rect(p.x,p.y,7,4,2);
    if(p.life<=0 || p.y>height+20) confetti.splice(i,1);
  }
}

function updateCountdownDOM(){
  const el=document.getElementById("countdown");
  if(running && remaining<=10 && remaining>0){
    el.textContent=remaining;
    el.classList.remove("hidden");
  }else{
    el.classList.add("hidden");
  }
}

function wireControls(){
  document.getElementById("prevBtn").onclick=()=>changePhase(-1);
  document.getElementById("nextBtn").onclick=()=>changePhase(1);
  document.getElementById("pauseBtn").onclick=togglePause;
  document.getElementById("resetBtn").onclick=resetTimer;
  document.getElementById("plusBtn").onclick=()=>adjustTimer(60);
  document.getElementById("minusBtn").onclick=()=>adjustTimer(-60);
  document.getElementById("fullBtn").onclick=toggleFull;
  document.getElementById("challengeBtn").onclick=showChallenge;
  document.getElementById("helpBtn").onclick=toggleHelp;
  document.getElementById("closeHelp").onclick=toggleHelp;
  document.getElementById("addAgreement").onclick=addAgreementFromInput;
  document.getElementById("clearAgreement").onclick=clearAgreements;

  const inp=document.getElementById("agreementInput");
  inp.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
      e.preventDefault();
      addAgreementFromInput();
    }
  });
}

function syncUI(){
  document.getElementById("prevBtn").disabled=phaseIndex===0;
  document.getElementById("nextBtn").disabled=phaseIndex===PHASES.length-1;

  const pause=document.getElementById("pauseBtn");
  pause.innerHTML=running?'Ⅱ <span>Pausa</span>':'▶ <span>Continuar</span>';

  const challenge=document.getElementById("challengeBtn");
  challenge.classList.toggle("hidden",phaseIndex!==2 && phaseIndex!==3);

  const agreement=document.getElementById("agreementPanel");
  agreement.classList.toggle("hidden",PHASES[phaseIndex].kind!=="agreement");
}

function changePhase(delta){
  phaseIndex=constrain(phaseIndex+delta,0,PHASES.length-1);
  remaining=PHASES[phaseIndex].duration;
  running=true;
  timerFinished=false;
  lastTick=millis();
  hideToast();
  syncUI();

  if(PHASES[phaseIndex].kind==="agreement"){
    setTimeout(()=>document.getElementById("agreementInput").focus(),120);
  }
}

function togglePause(){
  running=!running;
  timerFinished=false;
  lastTick=millis();
  playTick(running?640:420,.025);
  syncUI();
}

function resetTimer(){
  remaining=PHASES[phaseIndex].duration;
  running=true;
  timerFinished=false;
  lastTick=millis();
  playTick(520,.025);
  syncUI();
}

function adjustTimer(delta){
  remaining=max(0,remaining+delta);
  running=remaining>0;
  timerFinished=false;
  lastTick=millis();
  playTick(delta>0?690:480,.02);
  syncUI();
}

function toggleFull(){
  const isFull=!!document.fullscreenElement;
  if(!isFull){
    document.documentElement.requestFullscreen?.();
  }else{
    document.exitFullscreen?.();
  }
}

function toggleHelp(){
  document.getElementById("help").classList.toggle("hidden");
}

function showChallenge(){
  const txt=random(EXTRA_CHALLENGES);
  document.getElementById("toastText").textContent=txt;
  document.getElementById("toast").classList.remove("hidden");
  playTick(740,.035);
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(hideToast,6500);
}

function hideToast(){
  document.getElementById("toast").classList.add("hidden");
}

function addAgreementFromInput(){
  const inp=document.getElementById("agreementInput");
  const value=inp.value.trim();
  if(!value) return;

  const clean=value.replace(/\s+/g," ").slice(0,24);
  if(!agreements.some(a=>a.toLowerCase()===clean.toLowerCase())){
    agreements.push(clean);
    agreements=agreements.slice(-12);
    localStorage.setItem("acuerdo3A",JSON.stringify(agreements));
    burstConfetti();
    playTick(760,.035);
  }
  inp.value="";
  inp.focus();
}

function clearAgreements(){
  if(!confirm("¿Borrar todas las palabras del acuerdo de 3.º A?")) return;
  agreements=[];
  localStorage.removeItem("acuerdo3A");
}

function loadAgreements(){
  try{
    const saved=JSON.parse(localStorage.getItem("acuerdo3A")||"[]");
    if(Array.isArray(saved)) agreements=saved.slice(-12);
  }catch(e){ agreements=[]; }
}

function keyPressed(){
  const active=document.activeElement;
  if(active && (active.tagName==="INPUT" || active.tagName==="TEXTAREA")) return;

  if(keyCode===RIGHT_ARROW) changePhase(1);
  else if(keyCode===LEFT_ARROW) changePhase(-1);
  else if(key===" "){ togglePause(); return false; }
  else if(key==="r" || key==="R") resetTimer();
  else if(key==="f" || key==="F") toggleFull();
  else if(key==="h" || key==="H") toggleHelp();
  else if(key==="+" || key==="=") adjustTimer(60);
  else if(key==="-" || key==="_") adjustTimer(-60);
  else if((key==="e" || key==="E") && (phaseIndex===2 || phaseIndex===3)) showChallenge();
}

function playTick(freq=520,duration=.03){
  try{
    const AudioCtx=window.AudioContext||window.webkitAudioContext;
    if(!AudioCtx) return;
    window.__audioCtx=window.__audioCtx||new AudioCtx();
    const ctx=window.__audioCtx;
    if(ctx.state==="suspended") ctx.resume();
    const o=ctx.createOscillator();
    const g=ctx.createGain();
    o.frequency.value=freq;
    o.type="sine";
    g.gain.setValueAtTime(.035,ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+duration);
    o.connect(g);g.connect(ctx.destination);
    o.start();o.stop(ctx.currentTime+duration);
  }catch(e){}
}

function playFinish(){
  playTick(660,.09);
  setTimeout(()=>playTick(880,.12),120);
}

function formatTime(sec){
  return nf(floor(sec/60),2)+":"+nf(sec%60,2);
}
function clamp(v,a,b){ return max(a,min(b,v)); }
