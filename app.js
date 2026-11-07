(() => {
  const D = window.PORTFOLIO_DATA;
  const savedLang = localStorage.getItem("portfolio-language");
  let lang = savedLang || (navigator.language.startsWith("ar") ? "ar" : "en");
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const t = (obj) => obj?.[lang] ?? obj ?? "";
  const labels = {
    en: { nav:["Home","About","Skills","Experience","Education","Projects","Learning","Resume","Contact"], headings:{about:"HR operations with a data focus.",skills:"Tools I use and skills I am building.",experience:"Experience and process improvements.",education:"Business and technology foundation.",projects:"Selected projects.",certificates:"Current learning.",resume:"English resume.",contact:"Get in touch."}, section:{about:"About",skills:"Capabilities",experience:"Experience",education:"Education",projects:"Selected work",certificates:"Learning",resume:"Resume",contact:"Contact"}, buttons:{projects:"View projects",resume:"View resume",source:"Download case study",credential:"View credential",contact:"Get in touch",top:"Back to top"}, insight:"Practical reporting and problem solving", resumeCopy:"View my English resume and download a PDF copy.", contactCopy:"Exploring Data Analyst, BI Analyst and HR Analytics roles.", footer:"" },
    ar: { nav:["الرئيسية","نبذة","المهارات","الخبرة","التعليم","المشاريع","التعلم","السيرة الذاتية","التواصل"], headings:{about:"خبرة موارد بشرية بتركيز على البيانات.",skills:"أدوات أستخدمها ومهارات أطورها.",experience:"خبرات وتحسينات عملية.",education:"أساس يجمع الأعمال والتقنية.",projects:"مشاريع مختارة.",certificates:"التعلم الحالي.",resume:"السيرة الذاتية الإنجليزية.",contact:"تواصل معي."}, section:{about:"نبذة",skills:"القدرات",experience:"الخبرة",education:"التعليم",projects:"أعمال مختارة",certificates:"التعلم",resume:"السيرة الذاتية",contact:"التواصل"}, buttons:{projects:"عرض المشاريع",resume:"عرض السيرة الذاتية",source:"تحميل ملخص المشروع",credential:"عرض الشهادة",contact:"تواصل معي",top:"العودة للأعلى"}, insight:"تقارير عملية وحل مشكلات", resumeCopy:"اعرض سيرتي الذاتية الإنجليزية أو حمّل نسخة PDF.", contactCopy:"أبحث عن فرص في تحليل البيانات وذكاء الأعمال وتحليلات الموارد البشرية.", footer:"" }
  };
  const ids = ["home","about","skills","experience","education","projects","certificates","resume","contact"];

  function render() {
    const L = labels[lang];
    document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `${t(D.name)} | ${t(D.role)}`;
    $$('[data-name]').forEach(el => el.textContent = t(D.name));
    $("#nav").innerHTML = ids.map((id,i)=>`<a href="#${id}">${L.nav[i]}</a>`).join("");
    $("#hero-eyebrow").textContent=t(D.hero[lang].eyebrow); $("#hero-title").textContent=t(D.hero[lang].title); $("#hero-summary").textContent=t(D.hero[lang].summary);
    $("#profile-role").textContent=t(D.role); $("#availability-text").textContent=t(D.availability); $("#insight-label").textContent=L.insight;
    $("#profile-tags").innerHTML=["Excel","Power BI","HR data","SQL · learning"].map(x=>`<span>${x}</span>`).join("");
    $("#hero-actions").innerHTML=`<a class="button primary" href="#projects">${L.buttons.projects} <span>↗</span></a><a class="button secondary" href="${D.resume}">${L.buttons.resume}</a>`;
    $("#hero-contact").innerHTML=`<span>${D.email}</span><span>${D.phone}</span><span>${t(D.location)}</span>`;
    Object.keys(L.headings).forEach(k=>{ const el=$(`#${k}-heading`); if(el) el.textContent=L.headings[k]; });
    $$('[data-section-label]').forEach(el=>el.textContent=L.section[el.dataset.sectionLabel]);
    $("#about-copy").textContent=t(D.about); $("#facts-grid").innerHTML=D.facts.map(f=>`<article class="fact"><strong>${f.value}</strong><span>${t(f.label)}</span></article>`).join("");
    $("#skills-grid").innerHTML=D.skills.map(s=>`<article class="skill-card reveal"><span class="card-number">${s.icon}</span><h3>${t(s.title)}</h3><div>${s.items.map(i=>`<span>${i}</span>`).join("")}</div></article>`).join("");
    $("#experience-list").innerHTML=D.experience.map(e=>`<article class="timeline-item reveal"><div class="timeline-meta"><span>${t(e.period)}</span><p>${t(e.company)}</p></div><div><h3>${t(e.role)}</h3><ul>${e.bullets[lang].map(b=>`<li>${b}</li>`).join("")}</ul></div></article>`).join("");
    $("#education-list").innerHTML=D.education.map(e=>`<article class="education-card glass reveal"><div class="edu-icon">MIS</div><div><p>${t(e.school)}</p><h3>${t(e.degree)}</h3><span>${t(e.note)}</span></div></article>`).join("");
    $("#projects-list").innerHTML=D.projects.map((p,i)=>`<article class="project-card reveal"><div class="project-visual visual-${i%3}"><span>0${i+1}</span><div class="chart-lines"></div></div><div class="project-body"><span class="status">${t(p.status)}</span><h3>${t(p.title)}</h3><p>${t(p.description)}</p><div class="tool-list">${p.tools.map(x=>`<span>${x}</span>`).join("")}</div>${p.link?`<a href="${p.link}" download>${L.buttons.source} ↓</a>`:""}</div></article>`).join("");
    $("#certificates-list").innerHTML=D.certificates.map(c=>`<article class="certificate-card reveal"><span>◎</span><div><h3>${t(c.title)}</h3><p>${t(c.issuer)}${c.year?` · ${c.year}`:""}</p>${c.link?`<a href="${c.link}" target="_blank" rel="noopener">${L.buttons.credential} ↗</a>`:""}</div></article>`).join("");
    $("#resume-copy").textContent=L.resumeCopy; $("#resume-link").textContent=L.buttons.resume; $("#resume-link").href=D.resume;
    $("#contact-copy").textContent=L.contactCopy;
    const contacts=[]; if(D.email) contacts.push(`<span><strong>Email</strong>${D.email}</span>`); if(D.phone) contacts.push(`<span><strong>${lang==='ar'?'الهاتف':'Phone'}</strong>${D.phone}</span>`); if(D.linkedin) contacts.push(`<a href="${D.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>`); if(D.github) contacts.push(`<a href="${D.github}" target="_blank" rel="noopener">GitHub ↗</a>`);
    $("#contact-links").innerHTML=contacts.join(""); $("#footer-copy").textContent=`© ${new Date().getFullYear()} ${t(D.name)}. ${L.footer}`; $("#back-top").textContent=L.buttons.top+" ↑";
    $("#lang-toggle").textContent=lang==="en"?"عربي":"EN";
    observe();
  }
  function observe(){ const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12}); $$(".reveal").forEach(x=>io.observe(x)); }
  $("#lang-toggle").addEventListener("click",()=>{lang=lang==="en"?"ar":"en"; localStorage.setItem("portfolio-language",lang); render();});
  const preferred=localStorage.getItem("portfolio-theme-v2")||"dark"; document.documentElement.dataset.theme=preferred;
  $("#theme-toggle").addEventListener("click",()=>{const n=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=n;localStorage.setItem("portfolio-theme-v2",n);});
  $("#menu-toggle").addEventListener("click",()=>{const open=$("#nav").classList.toggle("open");$("#menu-toggle").setAttribute("aria-expanded",open)}); $("#nav").addEventListener("click",()=>$("#nav").classList.remove("open"));
  $("#back-top").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  render();
})();
