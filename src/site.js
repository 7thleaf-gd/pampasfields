import './styles.css';
import site from '../content/site.json';

document.querySelectorAll('[data-year]').forEach((node)=>{node.textContent=new Date().getFullYear()});
const menu=document.querySelector('[data-menu]');
const nav=document.querySelector('[data-nav]');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open))});

const header=document.querySelector('.site-header');
if(header){
  const starfield=document.createElement('div');
  starfield.className='header-stars';
  starfield.setAttribute('aria-hidden','true');
  for(let index=0;index<30;index+=1){
    const star=document.createElement('i');
    const wanderers=[3,18];
    const visitors=[10,24];
    star.className=`header-star${wanderers.includes(index)?' header-star--wanderer':''}${visitors.includes(index)?' header-star--visitor':''}`;
    star.style.setProperty('--star-x',`${(index*37+11)%98}%`);
    star.style.setProperty('--star-y',`${(index*29+17)%82+9}%`);
    star.style.setProperty('--star-size',`${index%7===0?3:index%3===0?2:1}px`);
    star.style.setProperty('--star-delay',`${-(index%9)*.7}s`);
    star.style.setProperty('--star-speed',`${4.8+(index%6)*.9}s`);
    starfield.append(star);
  }
  header.append(starfield);
}

document.querySelectorAll('[data-youtube-id]').forEach((button)=>{
  button.addEventListener('click',()=>{
    const videoId=button.dataset.youtubeId;
    const iframe=document.createElement('iframe');
    iframe.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
    iframe.title=button.getAttribute('aria-label')||'THE PAN video';
    iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen=true;
    button.replaceWith(iframe);
  });
});

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

const networkBar=document.createElement('aside');
networkBar.className='network-bar';
networkBar.setAttribute('aria-label','7thleaf network');
networkBar.innerHTML='<span>EXPLORE THE SIGNAL</span><a href="https://thepan.xyz/">THE PAN</a><a href="https://tools.thepan.xyz/">BROWSER TOOLS</a><a href="https://7thleaf.base.shop/">SHOP</a><a href="https://7thleaf.xyz/">STUDIO</a>';
document.body.append(networkBar);
