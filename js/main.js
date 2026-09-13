const WA_NUMBER = "919876543210";
const TELEGRAM_URL = "https://t.me/appajistaffing";
const INSTA_URL = "https://instagram.com/appajistaffing";
function toggleNav(){const n=document.getElementById("mainNav");if(n)n.classList.toggle("open")}
function waLink(msg){return "https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(msg)}
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
      const text="New Enquiry - Appaji Staffing%0A".replace(/%0A/g,"\n")+("\nName: "+name+"\nCompany: "+company+"\nService: "+service+"\nPhone: "+phone+"\nMessage: "+message);
      window.open(waLink(text),"_blank");
    });
  });
}
function bindServiceButtons(){
  document.querySelectorAll("[data-service-enquire]").forEach(b=>{
    b.addEventListener("click",()=>{
      const s=b.getAttribute("data-service-enquire")||"General";
      window.open(waLink("Hello Appaji Staffing, I need a quote for: "+s)," _blank".trim());
    });
  });
}
document.addEventListener("DOMContentLoaded",()=>{bindQuoteForms();bindServiceButtons();const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();});
