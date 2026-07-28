import './styles.css';
import site from '../content/site.json';

document.querySelectorAll('[data-year]').forEach((node)=>{node.textContent=new Date().getFullYear()});
const menu=document.querySelector('[data-menu]');
const nav=document.querySelector('[data-nav]');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open))});

const id=site.analytics?.ga4MeasurementId?.trim();
if(id){
  const s=document.createElement('script');s.async=true;s.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;document.head.append(s);
  window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};
  window.gtag('js',new Date());window.gtag('config',id,{page_path:location.pathname+location.search});
  document.addEventListener('click',(event)=>{
    const a=event.target.closest('a[href]');if(!a)return;
    const url=new URL(a.href,location.href);
    if(url.origin!==location.origin&&['http:','https:'].includes(url.protocol)){
      window.gtag('event','outbound_click',{link_url:url.href,link_domain:url.hostname,link_text:(a.textContent||'').trim().slice(0,100)});
    }
  });
}
