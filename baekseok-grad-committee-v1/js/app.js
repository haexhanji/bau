
// Simple active link highlight
(function(){ 
  const path = location.pathname.split('/').pop() || 'index.html';
  const map = {
    "movie.html":"movie",
    "media.html":"media",
    "schedule.html":"schedule",
    "notices.html":"notices",
    "index.html":"movie"
  };
  const active = map[path] || "movie";
  document.querySelectorAll('[data-route]').forEach(el=>{
    if(el.getAttribute('data-route')===active) el.classList.add('active');
  });

  // mobile menu toggle
  const btn = document.querySelector('#menutgl');
  const sb = document.querySelector('#sidebar');
  if(btn && sb){
    btn.addEventListener('click',()=>{ sb.classList.toggle('hide'); });
  }
})();
