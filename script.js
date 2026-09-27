const progress=document.querySelector('.progress');
const glow=document.querySelector('.cursor-glow');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/h*100)+'%';
});
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.skill-card').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
    card.style.transform=`perspective(700px) rotateX(${-(y-r.height/2)/28}deg) rotateY(${(x-r.width/2)/28}deg) translateY(-5px)`;
  });
  card.addEventListener('pointerleave',()=>card.style.transform='');
});
const menu=document.querySelector('.menu'), links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.top='65px';links.style.left='10px';links.style.right='10px';links.style.padding='20px';links.style.flexDirection='column';links.style.background='rgba(18,12,28,.96)';links.style.border='1px solid rgba(255,255,255,.1)';links.style.borderRadius='16px'});
