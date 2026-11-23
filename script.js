var PAGES=["home","gallery","contact","trial"];
var WA="916390831017";
function route(){
  var h=(location.hash||"#home").slice(1);
  if(PAGES.indexOf(h)<0)h="home";
  PAGES.forEach(function(p){document.getElementById("v-"+p).classList.toggle("on",p===h)});
  document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("data-p")===h&&!a.classList.contains("cta"))});
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);route();
document.getElementById("tf").addEventListener("submit",function(e){
  e.preventDefault();
  var n=document.getElementById("f-name").value.trim(),p=document.getElementById("f-phone").value.replace(/\D/g,"").slice(-10),err=document.getElementById("err");
  if(!n){err.textContent="Please enter your name.";return}
  if(p.length!==10){err.textContent="Please enter a valid 10-digit phone number.";return}
  err.textContent="";
  var m="Hi Last Breath, I’d like to book a free trial.\nName: "+n+"\nPhone: "+p+"\nGoal: "+document.getElementById("f-goal").value+"\nPreferred time: "+document.getElementById("f-time").value;
  window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(m),"_blank");
});

document.documentElement.classList.add("js");
(function(){
  var rm=false;
  var els=document.querySelectorAll(".card,.vibe div,.step,.mosaic .ph,main h2,main .lead,.pagehead h1");
  els.forEach(function(e){e.classList.add("rv")});
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(e){io.observe(e)});
  }else{els.forEach(function(e){e.classList.add("in")})}
  document.querySelectorAll(".cnt").forEach(function(c){
    var to=+c.dataset.to;if(rm){c.textContent=to;return}
    var t0=null;function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1600,1);c.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}
    c.textContent=0;setTimeout(function(){requestAnimationFrame(f)},500);
  });
  var cv=document.getElementById("fx");if(!cv||rm)return;
  var x=cv.getContext("2d"),W,H,P=[];
  function size(){var r=cv.getBoundingClientRect();W=cv.width=r.width;H=cv.height=r.height}
  size();addEventListener("resize",size);
  function mk(i){return{x:Math.random()*W,y:i?H+Math.random()*40:Math.random()*H,r:Math.random()*2+.6,v:Math.random()*.6+.25,d:Math.random()*2*Math.PI,g:Math.random()<.2}}
  for(var i=0;i<46;i++)P.push(mk(0));
  function loop(){
    if(document.getElementById("v-home").classList.contains("on")){
      x.clearRect(0,0,W,H);
      P.forEach(function(p,i){
        p.y-=p.v;p.d+=.02;p.x+=Math.sin(p.d)*.4;
        if(p.y<-10)P[i]=mk(1);
        x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);
        x.fillStyle=p.g?"rgba(217,178,82,.6)":"rgba(230,60,70,.55)";x.fill();
      });
    }
    requestAnimationFrame(loop);
  }
  loop();
})();
