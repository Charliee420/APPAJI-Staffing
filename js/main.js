const WA_NUMBER = "919972819131";
const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbzjP6oZIUV9sHXvg7vCh9kAdTzEVQlRJGfA-uN5hFI-l2TzQUekXq8R5fRV8F0Gmto5iQ/exec";

function toggleNav(){
  const n=document.getElementById("mainNav");
  const o=document.getElementById("navOverlay");
  const open=n&&!n.classList.contains("open");
  if(n)n.classList.toggle("open",open);
  if(o)o.classList.toggle("show",!!open);
  document.body.classList.toggle("nav-open",!!open);
}

function closeNav(){
  const n=document.getElementById("mainNav");
  const o=document.getElementById("navOverlay");
  if(n)n.classList.remove("open");
  if(o)o.classList.remove("show");
  document.body.classList.remove("nav-open");
}

function waLink(msg){
  return "https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(msg);
}

function saveToSheet(payload){
  if(!SHEET_ENDPOINT)return Promise.resolve();
  try{
    return fetch(SHEET_ENDPOINT,{
      method:"POST",
      mode:"no-cors",
      headers:{"Content-Type":"text/plain"},
      body:JSON.stringify(payload)
    }).catch(()=>{});
  }catch(err){
    return Promise.resolve();
  }
}

function bindQuoteForms(){
  document.querySelectorAll("[data-wa-form]").forEach(f=>{
    f.addEventListener("submit",e=>{
      e.preventDefault();
      const d=new FormData(f);
      const name=(d.get("name")||"").toString();
      const company=(d.get("company")||"").toString();
      const service=(d.get("service")||"").toString();
      const phone=(d.get("phone")||"").toString();
      const message=(d.get("message")||"").toString();
      const duration=(d.get("duration")||"").toString();
      const btn=f.querySelector('button[type="submit"]');
      if(btn){
        btn.disabled=true;
        const old=btn.textContent;
        btn.textContent="Sending...";
        setTimeout(()=>{btn.disabled=false;btn.textContent=old;},2500);
      }
      saveToSheet({timestamp:new Date().toISOString(),name:name,company:company,service:service,phone:phone,message:message,duration:duration,page:location.href});
      window.open(waLink("New Enquiry - Appaji Staffing\n\nName: "+name+"\nCompany: "+company+"\nService: "+service+"\nPhone: "+phone+(duration?"\nWork Duration: "+duration:"")+"\nMessage: "+message),"_blank");
    });
  });
}

function bindServiceButtons(){
  document.querySelectorAll("[data-service-enquire]").forEach(b=>{
    b.addEventListener("click",()=>{
      const s=b.getAttribute("data-service-enquire")||"General";
      window.open(waLink("Hello Appaji Staffing, I need a quote for: "+s),"_blank");
    });
  });
}

function ensureOverlay(){
  if(!document.getElementById("navOverlay")){
    const d=document.createElement("div");
    d.id="navOverlay";
    d.className="nav-overlay";
    d.addEventListener("click",closeNav);
    document.body.appendChild(d);
  }
}

function ensureNavCloseBtn(){
  const n=document.getElementById("mainNav");
  if(!n || n.querySelector(".nav-drawer-header")) return;
  const header=document.createElement("div");
  header.className="nav-drawer-header";
  header.innerHTML='<span class="nav-drawer-title">Menu</span><button class="nav-close-btn" aria-label="Close navigation" type="button">✕</button>';
  header.querySelector(".nav-close-btn").addEventListener("click",closeNav);
  n.insertBefore(header,n.firstChild);
}

function ensureMobileBar(){
  if(document.querySelector(".mobile-bar")) return;
  const b=document.createElement("div");
  b.className="mobile-bar";
  const isSub=window.location.pathname.indexOf("/services/")>-1;
  const quoteHref=isSub?"../contact.html":"contact.html";
  b.innerHTML=`
    <a class="mb-call" href="tel:+919972819131" aria-label="Call Appaji Staffing">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call</span>
    </a>
    <a class="mb-wa" href="https://wa.me/919972819131?text=Hello%20Appaji%20Staffing%2C%20I%20need%20a%20quote" target="_blank" rel="noopener" aria-label="WhatsApp enquiry">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a class="mb-quote" href="${quoteHref}" aria-label="Get a free quote">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="18" height="18" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      <span>Quote</span>
    </a>
  `;
  document.body.appendChild(b);
}

function bindNav(){
  const n=document.getElementById("mainNav");
  if(n){
    n.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeNav));
  }
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeNav();});
  window.addEventListener("resize",()=>{if(window.innerWidth>=900)closeNav();});
}

function headerShadow(){
  const h=document.querySelector(".header");
  if(!h)return;
  const on=()=>h.classList.toggle("scrolled",window.scrollY>8);
  on();
  window.addEventListener("scroll",on,{passive:true});
}

function reveal(){
  const els=document.querySelectorAll(".card,.check,.vm div,.quote,.hero-card");
  els.forEach(el=>el.classList.add("reveal"));
  if(!("IntersectionObserver" in window)){
    els.forEach(el=>el.classList.add("visible"));
    return;
  }
  const io=new IntersectionObserver(es=>{
    es.forEach(x=>{
      if(x.isIntersecting){
        x.target.classList.add("visible");
        io.unobserve(x.target);
      }
    });
  },{threshold:.08});
  els.forEach(el=>io.observe(el));
}

function wrapTables(){
  document.querySelectorAll("table.table").forEach(t=>{
    if(!t.parentElement.classList.contains("table-wrap")){
      const w=document.createElement("div");
      w.className="table-wrap";
      t.parentNode.insertBefore(w,t);
      w.appendChild(t);
    }
  });
}

/* Rolling / Sliding Testimonial Carousel */
function initTestimonialCarousel(){
  const track = document.querySelector(".carousel-track");
  if(!track) return;
  const slides = Array.from(track.querySelectorAll(".carousel-slide"));
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const dotsContainer = document.querySelector(".carousel-dots");
  
  if(!slides.length) {
    const wrapper = track.closest(".testimonials-wrapper");
    if(wrapper) {
      const section = wrapper.closest("section");
      if(section) section.style.display = "none";
    }
    return;
  }

  let currentIndex = 0;
  let autoTimer = null;
  let startX = 0;
  let isDragging = false;

  function getVisibleCount(){
    if(window.innerWidth >= 1040) return 3;
    if(window.innerWidth >= 680) return 2;
    return 1;
  }

  function maxIndex(){
    const visible = getVisibleCount();
    return Math.max(0, slides.length - visible);
  }

  function createDots(){
    if(!dotsContainer) return;
    dotsContainer.innerHTML = "";
    const count = maxIndex() + 1;
    for(let i = 0; i < count; i++){
      const d = document.createElement("div");
      d.className = "dot" + (i === currentIndex ? " active" : "");
      d.setAttribute("data-index", i);
      d.setAttribute("role", "button");
      d.setAttribute("aria-label", "Go to slide " + (i + 1));
      d.addEventListener("click", () => {
        goToSlide(i);
        restartAuto();
      });
      dotsContainer.appendChild(d);
    }
  }

  function updateDots(){
    if(!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((d, idx) => {
      d.classList.toggle("active", idx === currentIndex);
    });
  }

  function updatePosition(){
    const visible = getVisibleCount();
    const slideWidthPct = 100 / visible;
    track.style.transform = `translateX(-${currentIndex * slideWidthPct}%)`;
    updateDots();
  }

  function goToSlide(index){
    const max = maxIndex();
    if(index < 0) currentIndex = max;
    else if(index > max) currentIndex = 0;
    else currentIndex = index;
    updatePosition();
  }

  function nextSlide(){
    const max = maxIndex();
    if(currentIndex >= max) currentIndex = 0;
    else currentIndex++;
    updatePosition();
  }

  function prevSlide(){
    const max = maxIndex();
    if(currentIndex <= 0) currentIndex = max;
    else currentIndex--;
    updatePosition();
  }

  if(nextBtn){
    nextBtn.addEventListener("click", () => { nextSlide(); restartAuto(); });
  }
  if(prevBtn){
    prevBtn.addEventListener("click", () => { prevSlide(); restartAuto(); });
  }

  function startAuto(){
    stopAuto();
    autoTimer = setInterval(nextSlide, 4200);
  }
  function stopAuto(){
    if(autoTimer) clearInterval(autoTimer);
  }
  function restartAuto(){
    stopAuto();
    startAuto();
  }

  const viewport = track.parentElement;
  if(viewport){
    viewport.addEventListener("mouseenter", stopAuto);
    viewport.addEventListener("mouseleave", startAuto);

    // Touch Swipe support
    viewport.addEventListener("touchstart", e => {
      stopAuto();
      startX = e.touches[0].clientX;
      isDragging = true;
    }, {passive: true});

    viewport.addEventListener("touchend", e => {
      if(!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if(diff > 45) {
        nextSlide();
      } else if(diff < -45) {
        prevSlide();
      }
      startAuto();
    }, {passive: true});
  }

  window.addEventListener("resize", () => {
    createDots();
    if(currentIndex > maxIndex()) currentIndex = maxIndex();
    updatePosition();
  });

  createDots();
  updatePosition();
  startAuto();
}

/* FAQ Accordion Interaction */
function initFaqAccordion(){
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-question");
    if(!q) return;
    q.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(other => {
        if(other !== item) other.classList.remove("open");
      });
      item.classList.toggle("open", !wasOpen);
    });
  });
}

/* Gallery Category Filter */
function initGalleryFilters(){
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".gallery-card");
  if(!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-filter");

      cards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if(cat === "all" || cardCat === cat){
          card.style.display = "flex";
          setTimeout(() => { card.style.opacity = "1"; card.style.transform = "none"; }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.96)";
          setTimeout(() => { card.style.display = "none"; }, 200);
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  ensureOverlay();
  ensureNavCloseBtn();
  ensureMobileBar();
  bindNav();
  bindQuoteForms();
  bindServiceButtons();
  headerShadow();
  wrapTables();
  reveal();
  initTestimonialCarousel();
  initFaqAccordion();
  initGalleryFilters();
  const y=document.getElementById("year");
  if(y)y.textContent=new Date().getFullYear();
});
