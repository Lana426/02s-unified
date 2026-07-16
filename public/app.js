/* ================= ICONS (McCarthy-colored inline SVG, no emoji) ================= */
const ICONS={
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 box:'<path d="M21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>',
 cart:'<circle cx="9" cy="21" r="1.4"/><circle cx="19" cy="21" r="1.4"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
 clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1.2"/>',
 receipt:'<path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/>',
 chart:'<line x1="3" y1="21" x2="21" y2="21"/><rect x="5" y="11" width="3" height="8" rx="1"/><rect x="10.5" y="6" width="3" height="13" rx="1"/><rect x="16" y="14" width="3" height="5" rx="1"/>',
 calendar:'<rect x="3" y="4" width="18" height="18" rx="2.5"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
 layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/>',
 truck:'<rect x="1" y="4" width="14" height="12" rx="1.5"/><path d="M15 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18" r="2.2"/><circle cx="18" cy="18" r="2.2"/>',
 team:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
 chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
 inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
 gauge:'<path d="M3.5 13a8.5 8.5 0 1 1 17 0"/><line x1="12" y1="13" x2="8.5" y2="9.5"/><circle cx="12" cy="13" r="1.2"/>',
 bulb:'<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
 warning:'<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
 file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
 help:'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
 user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
 search:'<circle cx="11" cy="11" r="7.5"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
 chevronRight:'<polyline points="9 18 15 12 9 6"/>',
 chevronLeft:'<polyline points="15 18 9 12 15 6"/>',
 chevronDown:'<polyline points="6 9 12 15 18 9"/>',
 check:'<polyline points="20 6 9 17 4 12"/>',
 close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
 upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
 send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
 clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
 pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
 dollar:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
 bot:'<rect x="4" y="8" width="16" height="12" rx="3"/><circle cx="9" cy="14" r="1.2"/><circle cx="15" cy="14" r="1.2"/><line x1="12" y1="8" x2="12" y2="5"/><circle cx="12" cy="3.5" r="1.4"/>',
 sparkle:'<path d="M12 3l1.6 5L18 9.5l-4.4 1.5L12 16l-1.6-5L6 9.5 10.4 8 12 3z"/>',
 flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
 plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
 edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
 map:'<polygon points="1 6 8 3 16 6 23 3 23 18 16 21 8 18 1 21 1 6"/><line x1="8" y1="3" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="21"/>',
 filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
 refresh:'<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
 menu:'<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>'
};
function ic(name,cls){return `<svg class="ic-svg ${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`;}

/* ================= STATE + ROUTER ================= */
const state={role:'landing',mode:'v1',productMode:{},screen:{portal:'p-dash',command:'c-dash',opp:'o-list','command-tower':'o-list'}};
/* Shared project profile — single source for ship-to pre-fill, roster, and contacts */
const PROJECT={name:'Hercules Solar + BESS',number:'004987.000',city:'Hercules, CA',
 shipTo:{contact:'Rian M. (PM)',phone:'(510) 555-0142',line1:'2600 Refinery Rd — Gate 3',line2:'Hercules, CA 94547',hours:'Mon–Fri 6:00a–3:30p',notes:'Check in at trailer city; hard-hat + vest required past gate.'}};
let IS_ADMIN=true; // demo toggle for admin-gated roster controls
function effMode(id){return state.productMode[id]||state.mode;}
function modeClass(id){return effMode(id)==='v1'?'is-v1':'is-ns';}
function projBadge(){return `<div class="proj-meta"><span class="proj-tag">${ic('pin','ic-14')} ${PROJECT.city}</span><span class="proj-tag">${ic('clipboard','ic-14')} ${PROJECT.number}</span></div>`;}
function prodToggle(id){const m=effMode(id);return `<div class="prodmode"><span class="lbl">This screen</span><div class="sw"><button class="${m==='v1'?'active':''}" onclick="setProductMode('${id}','v1')">V1</button><button class="${m==='northstar'?'active ns':''}" onclick="setProductMode('${id}','northstar')">${ic('sparkle','ic-14')} North Star</button></div></div>`;}

function setGlobalMode(m){state.mode=m;state.productMode={};resetBrowseCart();document.querySelectorAll('.modeswitch').forEach(sw=>sw.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.mode===m)));
 // tower + command are mode-aware: rebuild nav and reset to a valid default screen
 state.screen['command-tower']=towerDefaultScreen();
 // command: c-pillars only exists in V1; per-pillar pages only in NS — snap to Overview if current screen is invalid
 const cValidNS=['c-dash','c-backlog','c-edp','c-pill-prefab','c-pill-proc','c-pill-log','c-pill-profsvc','c-capex','c-billing'];
 const cValidV1=['c-dash','c-backlog','c-edp','c-pillars','c-capex','c-billing'];
 const cValid=m==='northstar'?cValidNS:cValidV1;
 if(!cValid.includes(state.screen.command))state.screen.command='c-dash';
 buildShell('command-tower');buildShell('command');
 towerState();renderCurrent();
 if(state.role==='command-tower')setNavActive('command-tower',state.screen['command-tower']);
 if(state.role==='command')setNavActive('command',state.screen.command);}
function setProductMode(id,m){if(id==='p-browse'&&effMode('p-browse')!==m)resetBrowseCart();state.productMode[id]=m;renderCurrent();}

/* ================= SHELLS ================= */
function globalSwitchHTML(){return `<div class="modeswitch"><span class="lbl">Version:</span><button data-mode="v1" onclick="setGlobalMode('v1')">V1</button><button data-mode="northstar" class="ns" onclick="setGlobalMode('northstar')">${ic('sparkle','ic-14')} North Star</button></div>`;}
const PORTAL_NAV=[{id:'p-dash',label:'Dashboard',icon:'grid'},{grp:'Order'},{id:'p-catalog',label:'Product catalog',icon:'box'},{id:'p-browse',label:'On-demand browse &amp; checkout',icon:'cart'},{id:'p-orders',label:'Orders',icon:'clipboard'},{id:'p-billing',label:'Billing & budget',icon:'receipt'},{grp:'Demand plans'},{id:'p-edp',label:'Equipment plan',icon:'calendar'},{id:'p-prefab',label:'Prefab plan',icon:'layers'},{id:'p-proc',label:'Procurement plan',icon:'cart'},{id:'p-log',label:'Logistics plan',icon:'truck'},{id:'p-profsvc',label:'Prof. services plan',icon:'team'},{grp:'Project'},{id:'p-profile',label:'Project profile',icon:'gear'},{id:'p-support',label:'Contact & support',icon:'chat'}];
const COMMAND_NAV_V1=[{id:'c-dash',label:'Overview',icon:'grid'},{id:'c-backlog',label:'Order backlog',icon:'inbox'},{grp:'Demand plans (ops)'},{id:'c-edp',label:'Equipment demand plan',icon:'calendar'},{id:'c-pillars',label:'Other pillar plans',icon:'layers'},{grp:'Planning & controls'},{id:'c-capex',label:'CAPEX plan',icon:'chart'},{id:'c-billing',label:'Billings & invoicing',icon:'receipt'}];
const COMMAND_NAV_NS=[{id:'c-dash',label:'Overview',icon:'grid'},{id:'c-backlog',label:'Order backlog',icon:'inbox'},{grp:'Demand plans (ops)'},{id:'c-edp',label:'Equipment',icon:'calendar'},{id:'c-pill-prefab',label:'Prefab',icon:'layers'},{id:'c-pill-proc',label:'Procurement',icon:'cart'},{id:'c-pill-log',label:'Logistics',icon:'truck'},{id:'c-pill-profsvc',label:'Prof. services',icon:'team'},{grp:'Planning & controls'},{id:'c-capex',label:'CAPEX plan',icon:'chart'},{id:'c-billing',label:'Billings & invoicing',icon:'receipt'}];
const COMMAND_NAV=COMMAND_NAV_V1;
function commandNav(){return state.mode==='northstar'?COMMAND_NAV_NS:COMMAND_NAV_V1;}
const OPP_NAV=[{id:'o-list',label:'Opportunities',icon:'chart'},{id:'o-detail',label:'Margin plan',icon:'dollar'}];
const TOWER_NAV_NS=[{id:'ct-main',label:'Control Tower',icon:'flag'},{id:'ct-forecast',label:'YoY forecast',icon:'chart'},{id:'ct-allocation',label:'Allocation & G&A',icon:'layers'},{id:'ct-fpa',label:'Enterprise FP&A',icon:'dollar'}];
const TOWER_NAV_V1=[{grp:'02S Opportunities'},{id:'o-list',label:'Opportunities',icon:'chart'},{id:'o-detail',label:'Margin plan',icon:'dollar'}];
function towerNav(){return state.mode==='northstar'?TOWER_NAV_NS:TOWER_NAV_V1;}
function towerDefaultScreen(){return state.mode==='northstar'?'ct-main':'o-list';}
/* role → shell config so all four workspaces share one shell/router */
const ROLE_CFG={
 portal:{cont:'portalApp',main:'portalMain',title:'CUSTOMER PORTAL',tag:PROJECT.name,nav:PORTAL_NAV,foot:'',selector:true},
 command:{cont:'commandApp',main:'commandMain',title:'COMMAND CENTER',tag:'02S operations',nav:COMMAND_NAV,foot:'One to sustain'},
 opp:{cont:'oppApp',main:'oppMain',title:'02S OPPORTUNITIES',tag:'Pursuit & estimating',nav:OPP_NAV,foot:'Pursuit & estimating'},
 'command-tower':{cont:'towerApp',main:'towerMain',title:'CONTROL TOWER',tag:'Pursuit, estimating & finance',nav:TOWER_NAV_V1,foot:'Plan to performance'}
};
function navHTML(role,items){return items.map(it=>it.grp?`<div class="grp">${it.grp}</div>`:`<a data-screen="${it.id}" onclick="nav('${role}','${it.id}')" title="${it.label}">${ic(it.icon)}<span>${it.label}</span></a>`).join('');}
function buildShell(role){
  const cfg=ROLE_CFG[role];const cont=document.getElementById(cfg.cont);
  const navItems=role==='command-tower'?towerNav():(role==='command'?commandNav():cfg.nav);
  cont.innerHTML=`
   <div class="topbar">
     <button class="mob-ham-btn" onclick="toggleMobNav()" aria-label="Open navigation">${ic('menu','ic-22')}</button>
     <span class="logo" title="McCarthy">McCarthy</span>
     <span class="app-title">02S <span class="accent">${cfg.title}</span><span class="role-tag">${cfg.tag}</span></span>
     <span class="spacer"></span>
     ${globalSwitchHTML()}
     ${cfg.selector?`<div class="selector desk-only"><span>${ic('box','ic-16')}</span><span><span class="k">Project</span><span class="v">Hercules Solar + BESS</span></span>${ic('chevronDown','ic-14')}</div>`:''}
     <button class="ic-btn desk-only" title="Notifications" onclick="showNotifications()">${ic('bell')}</button>
     <button class="ic-btn desk-only" title="Help" onclick="showHelp()">${ic('help')}</button>
     <button class="ic-btn desk-only" title="Account" onclick="showAccount()">${ic('user')}</button>
     <button class="home-btn desk-only" onclick="goHome()">${ic('chevronLeft','ic-14')} Roles</button>
   </div>
   <nav class="nav">${navHTML(role,navItems)}<div class="nav-foot"><span class="o2smark">0<b>2</b>S</span> <span>${cfg.foot}</span></div><button class="nav-toggle" onclick="toggleNav()" title="Toggle sidebar">${ic('chevronLeft','ic-16')}<span class="toggle-label">Collapse</span></button></nav>
   <main class="main" id="${cfg.main}"></main>
   <div class="mob-backdrop" onclick="closeMobNav()"></div>`;
}
function buildLanding(){
  document.getElementById('landing').innerHTML=`
   <div class="land-top"><div class="brand"><span class="logo" title="McCarthy">McCarthy</span><span class="brand-div"></span><span class="disp" style="font-weight:900;color:var(--charcoal);letter-spacing:.14em;font-size:12px">02S UNIFIED</span></div>${globalSwitchHTML()}</div>
   <div class="land-hero"><h1>02S <b>Unified</b><br>Closed-Loop Ecosystem</h1><p class="land-sub">McCarthy's platform for planning, ordering, and managing rental equipment and services across a project. Pick your workspace to get started.</p></div>
   <div class="roles">
     <div class="role portal" onclick="enter('portal')"><span class="bar"></span><div class="icn">${ic('team','ic-28')}</div><h3>Customer Portal</h3><div class="who">For the project team</div><p>Browse and order 02S products, track orders and billing, manage budget, and build the project's demand plans.</p><button class="enter">Enter workspace ${ic('chevronRight','ic-14')}</button></div>
     <div class="role command" onclick="enter('command')"><span class="bar"></span><div class="icn">${ic('gauge','ic-28')}</div><h3>Command Center</h3><div class="who">For 02S operations</div><p>Work the cross-pillar order backlog, optimize owned-vs-re-rent fulfillment, plan CAPEX from real gaps, and catch billing anomalies.</p><button class="enter">Enter workspace ${ic('chevronRight','ic-14')}</button></div>
     <div class="role tower" id="towerCard" onclick="enter('command-tower')"><span class="bar"></span><span class="lock-note" id="towerNote">${ic('check','ic-14')} In V1</span><div class="icn">${ic('flag','ic-28')}</div><h3>Control Tower</h3><div class="who">Pursuit, estimating &amp; finance</div><p id="towerDesc">In V1, the existing <b>02S Opportunities</b> product — pipeline, margin plans, and pillar breakdowns. Grows into the full finance tower in North Star.</p><button class="enter" id="towerBtn">Enter workspace ${ic('chevronRight','ic-14')}</button></div>
   </div>
   <div class="land-foot"><div class="mode-explain">
     <div class="mode-card v"><span class="tag">${ic('check','ic-14')} V1 Scope — Nov 1 launch</span><p>What's being built now: the equipment demand plan (manual planning) plus simple other-pillar demand plans, catalog and on-demand ordering, equipment-pillar order &amp; billing on YardHub, the three Command Center products for the equipment pillar (order backlog, owned-vs-re-rent, CAPEX), and the existing 02S Opportunities product inside the Control Tower.</p></div>
     <div class="mode-card n"><span class="tag">${ic('sparkle','ic-14')} North Star — target state</span><p>Where it's heading: AI-drafted demand plans tied to the schedule, all five pillars live with their own demand plans and intelligence built into the Command Center intelligence layer, a cross-02S execution lookahead, richer order and billing tracking, and the Control Tower growing from Opportunities into the full leadership finance surface.</p></div>
   </div></div>`;
}

function towerState(){const c=document.getElementById('towerCard');if(!c)return;const b=document.getElementById('towerBtn'),n=document.getElementById('towerNote'),d=document.getElementById('towerDesc');if(!b)return;
 if(state.mode==='northstar'){n.innerHTML=ic('sparkle','ic-14')+' North Star';n.style.background='var(--gold-050)';n.style.color='var(--gold)';d.innerHTML='The full leadership finance surface — margin-plan handshake, YoY forecast, allocation flow, G&amp;A waterfall, and the return to enterprise FP&amp;A. (02S Opportunities lives inside it.)';}
 else{n.innerHTML=ic('check','ic-14')+' In V1';n.style.background='var(--gold-050)';n.style.color='var(--proc)';d.innerHTML='In V1, the existing <b>02S Opportunities</b> product — pipeline, margin plans, and pillar breakdowns. Grows into the full finance tower in North Star.';}
 b.textContent='Enter workspace →';}
function towerClick(){enter('command-tower');}
function toggleNav(){const app=document.querySelector('.app.show');if(app)app.classList.toggle('nav-collapsed');}
function toggleMobNav(){const app=document.querySelector('.app.show');if(app)app.classList.toggle('mob-nav-open');}
function closeMobNav(){document.querySelectorAll('.app.mob-nav-open').forEach(a=>a.classList.remove('mob-nav-open'));}

function enter(role){state.role=role;
 if(role==='command-tower'){buildShell('command-tower');
   const valid=(state.mode==='northstar'?['ct-main','ct-forecast','ct-allocation','ct-fpa','o-list','o-detail']:['o-list','o-detail']);
   if(!valid.includes(state.screen['command-tower']))state.screen['command-tower']=towerDefaultScreen();}
 if(role==='command'){buildShell('command');
   const cValid=(state.mode==='northstar'?['c-dash','c-backlog','c-edp','c-pill-prefab','c-pill-proc','c-pill-log','c-pill-profsvc','c-capex','c-billing']:['c-dash','c-backlog','c-edp','c-pillars','c-capex','c-billing']);
   if(!cValid.includes(state.screen.command))state.screen.command='c-dash';}
 document.getElementById('landing').classList.add('hidden');Object.keys(ROLE_CFG).forEach(r=>document.getElementById(ROLE_CFG[r].cont).classList.toggle('show',r===role));setNavActive(role,state.screen[role]);window.scrollTo(0,0);renderCurrent();}
function goHome(){state.role='landing';Object.keys(ROLE_CFG).forEach(r=>document.getElementById(ROLE_CFG[r].cont).classList.remove('show'));document.getElementById('landing').classList.remove('hidden');window.scrollTo(0,0);}
function setNavActive(role,id){const cfg=ROLE_CFG[role];if(!cfg)return;const nv=document.querySelector('#'+cfg.cont+' .nav');if(nv)nv.querySelectorAll('a[data-screen]').forEach(a=>a.classList.toggle('active',a.dataset.screen===id));}
function nav(role,id){state.screen[role]=id;setNavActive(role,id);renderCurrent();window.scrollTo(0,0);closeMobNav();}
function renderCurrent(){const cfg=ROLE_CFG[state.role];if(cfg)renderScreen(state.role,state.screen[state.role],document.getElementById(cfg.main));}
function renderScreen(role,id,host){const fn=SCREENS[id];host.className='main '+modeClass(id);host.innerHTML=fn?fn(id):stub('Coming soon','This screen is stubbed.');if(id==='p-edp'||id==='c-edp')requestAnimationFrame(()=>{initEDPDrag();initEDPDragTouch();});if(['p-edp','p-prefab','p-proc','p-log','p-profsvc'].includes(id))requestAnimationFrame(initNsDrag);if(id==='p-catalog'){CAT_VIEW='landing';renderCatalog();}if(id==='c-backlog')renderBacklog(BACKLOG_FILTER);if(id==='c-capex')refreshCapex();if(id==='c-billing')billRefresh();requestAnimationFrame(updateCartBadges);}
function stub(t,d,f){return `<div class="placeholder"><h3>${t}</h3><p>${d}</p>${f?`<div class="feat">${f.map(x=>`<span>${x}</span>`).join('')}</div>`:''}</div>`;}

/* ================= MODAL + TOAST ================= */
function openModal(html,wide){const ov=document.getElementById('modalOverlay');document.getElementById('modalCard').className='modal'+(wide?' wide':'');document.getElementById('modalCard').innerHTML=html;ov.classList.add('open');}
function closeModal(){document.getElementById('modalOverlay').classList.remove('open');}
function openConfirm(title,body,confirmLabel,fn){window.__cb=fn;openModal(`<div class="modal-head"><h3>${title}</h3><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><p style="margin:0;color:var(--charcoal-700)">${body}</p></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="(window.__cb&&window.__cb());closeModal()">${confirmLabel}</button></div>`);}
let _toastT;function toast(msg){const t=document.getElementById('toast');t.innerHTML=ic('check','ic-16')+'<span>'+msg+'</span>';t.classList.add('show');clearTimeout(_toastT);_toastT=setTimeout(()=>t.classList.remove('show'),2600);}

/* ================= DEMAND PLAN DATA + BUILDERS ================= */
const MONTHS=['Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan'];
const EQLINES=[
 {nm:'Excavator 45–55T',qty:2,cat:'Earthmoving',phase:'Sitework & Civil',code:'31-2100',start:0,span:6,cost:'$101K',cls:''},
 {nm:'Wheel loader 3yd',qty:1,cat:'Earthmoving',phase:'Sitework & Civil',code:'31-2200',start:0,span:4,cost:'$24K',cls:''},
 {nm:'Water truck 4K',qty:1,cat:'Support',phase:'Sitework & Civil',code:'31-2300',start:0,span:6,cost:'$31K',cls:''},
 {nm:'Tower crane',qty:1,cat:'Lifting',phase:'Structure',code:'05-1000',start:2,span:3,cost:'$318K',cls:'n2'},
 {nm:'Telehandler 10K',qty:2,cat:'Lifting',phase:'Structure',code:'05-1200',start:2,span:5,cost:'$86K',cls:'n2'},
 {nm:'Scissor lift 32ft',qty:4,cat:'Aerial',phase:'MEP / Electrical',code:'26-2600',start:4,span:4,cost:'$37K',cls:'n3'},
 {nm:'Boom lift 60ft',qty:2,cat:'Aerial',phase:'MEP / Electrical',code:'26-2610',start:5,span:3,cost:'$52K',cls:'n3'}
];
let CURRENT_EDP_GROUP='Controlling code';
const GROUP_COLORS=['','n2','n3','n4','n5']; // cycles through red, charcoal, blue, gold, rose
function edpGroups(key){const f=key==='Equipment class'?'cat':key==='Scope'?'phase':'code';const order=[],map={};EQLINES.forEach(l=>{const k=l[f];if(!map[k]){map[k]=[];order.push(k);}map[k].push(l);});
  return order.map((k,gi)=>{const lines=map[k];const gStart=Math.min.apply(null,lines.map(l=>l.start));const gEnd=Math.max.apply(null,lines.map(l=>l.start+l.span));
    return {key:k,lines,gi,cls:GROUP_COLORS[gi%GROUP_COLORS.length],cost:'$'+lines.reduce((s,l)=>s+parseInt(l.cost.replace(/[^0-9]/g,'')),0)+'K',peak:Math.max.apply(null,lines.map(l=>l.qty)),gStart,gSpan:gEnd-gStart};});}
function buildSchedule(key){const gs=edpGroups(key);return `<div class="gantt2"><div class="today-overlay"></div><div class="g2-row head"><div class="g2-left"><span class="sub" style="font-weight:700;color:var(--gray-500)">${key==='Controlling code'?'Controlling code / equipment':key==='Equipment class'?'Equipment class / equipment':'Scope / equipment'}</span></div><div class="g2-track">${MONTHS.map(m=>`<span>${m}</span>`).join('')}</div><div class="g2-cost" style="font-size:10px;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em">Cost</div><div class="g2-act"></div></div>${gs.map(g=>`<div class="g2-row group" onclick="toggleGrp(this)"><div class="g2-left"><span class="nm"><span class="caret">${ic('chevronDown','ic-14')}</span> ${g.key}</span><span class="sub">${g.lines.length} ${g.lines.length===1?'need':'needs'} · peak ${g.peak}</span></div><div class="g2-track"><div class="gbar gbar-agg ${g.cls}" style="left:${(g.gStart/8*100).toFixed(2)}%;width:${(g.gSpan/8*100-1.5).toFixed(2)}%" title="${g.key}: ${MONTHS[g.gStart]}–${MONTHS[Math.min(7,g.gStart+g.gSpan-1)]}"><span class="agglab">${g.key}</span></div></div><div class="g2-cost">${g.cost}</div><div class="g2-act"><button class="gact-all" onclick="event.stopPropagation();addGroupToCart('${g.key.replace(/'/g,"\\'")}',${g.lines.length})" title="Add all ${g.lines.length} to request">${ic('cart','ic-14')} +${g.lines.length}</button></div></div>${g.lines.map(l=>`<div class="g2-row line"><div class="g2-left"><span class="nm">${l.qty}× ${l.nm}</span><span class="sub"><span class="code-chip">${l.code}</span><span class="dates">${MONTHS[l.start]} – ${MONTHS[Math.min(7,l.start+l.span-1)]}</span></span></div><div class="g2-track"><div class="gbar ${g.cls}" data-span="${l.span}" style="left:${(l.start/8*100).toFixed(2)}%;width:${(l.span/8*100-1.5).toFixed(2)}%">${l.qty}×</div></div><div class="g2-cost">${l.cost}</div><div class="g2-act"><button class="gact" onclick="addLineToCart('${l.nm.replace(/'/g,"\\'")}','${l.qty}×')" title="Add to request">${ic('cart','ic-14')}</button></div></div>`).join('')}`).join('')}</div>`;}
function lineStatus(l){if(l.start===0)return ['ok','On-rent'];if(l.start===1)return ['warn','Pending'];return ['gray','Planned'];}
function buildList(key){const gs=edpGroups(key);let rows='';gs.forEach(g=>g.lines.forEach(l=>{const [sc,sl]=lineStatus(l);const offBtn=sl==='On-rent'?`<button class="btn ghost sm" style="color:var(--gray-500);white-space:nowrap" onclick="openOffRent('${l.nm.replace(/'/g,"\\'")}')">Call off</button>`:'';rows+=`<tr><td><input type="checkbox" aria-label="select ${l.nm}"></td><td><b>${l.nm}</b></td><td>${l.qty}</td><td><span class="grp-chip" style="background:${grpColorVar(g.cls)}1a;color:${grpColorVar(g.cls)}">${g.key}</span></td><td>${MONTHS[l.start]} 2026</td><td>${MONTHS[Math.min(7,l.start+l.span-1)]}</td><td class="mono">${l.code}</td><td>${l.cost}</td><td><span class="chip ${sc}">${sl}</span></td><td>${offBtn}</td></tr>`;}));return `<div class="list"><table class="mini" style="padding:4px 10px"><tr><th style="width:26px"></th><th>Equipment</th><th>Qty</th><th>${key}</th><th>On-rent</th><th>Off-rent</th><th>Cost code</th><th>Est. cost</th><th>Status</th><th></th></tr>${rows}</table></div><div style="display:flex;gap:8px;margin-top:12px"><button class="btn primary" onclick="promoteSelected()">${ic('send','ic-14')} Promote selected → request</button><button class="btn" onclick="openOffRent()">Call off selected</button></div>`;}
function grpColorVar(cls){return cls==='n2'?'var(--charcoal)':cls==='n3'?'var(--steel-bright)':cls==='n4'?'var(--gold)':cls==='n5'?'var(--rose)':'var(--red)';}
/* North Star: AI-prebuilt equipment plan */
/* ============ NORTH STAR: unified multi-pillar demand-plan system ============ */
const NS_MONTHS=['Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb'];
// item: {q, nm, s, e, conf, note}  — s/e are indices into NS_MONTHS (on-rent / off-rent month)
const NS_PLANS={
 equipment:{unit:'units',hero:'Hercules Solar + BESS reads as a <b>solar + BESS</b> build in <b>Hercules, CA</b>.',groups:[
   {phase:'Sitework & Civil',color:'var(--red)',why:'Earthwork & grading activities in Scheduling Intelligence + the sitework scope in Estimating Intelligence (Foundry)',items:[
     {q:2,nm:'Excavator 45–55T',s:0,e:3,conf:'98%',note:'mass grading'},{q:1,nm:'Excavator 30–40T',s:0,e:2,conf:'95%',note:'trenching'},{q:2,nm:'Wheel loader 3yd',s:0,e:3,conf:'95%',note:''},{q:1,nm:'Dozer D6',s:0,e:2,conf:'93%',note:'rough grade'},{q:2,nm:'Water truck 4K',s:0,e:3,conf:'92%',note:'dust control'},{q:1,nm:'Motor grader',s:0,e:2,conf:'90%',note:'fine grade'},{q:2,nm:'Smooth drum roller',s:1,e:3,conf:'89%',note:'compaction'},{q:1,nm:'Skid steer',s:0,e:3,conf:'88%',note:''}]},
   {phase:'Foundations & BESS pads',color:'var(--proc)',why:'Concrete & pad activities in Scheduling Intelligence, sized to the BESS enclosure count',items:[
     {q:1,nm:'Concrete pump',s:1,e:4,conf:'94%',note:''},{q:2,nm:'Telehandler 10K',s:1,e:4,conf:'92%',note:''},{q:1,nm:'Rough terrain crane 80T',s:2,e:4,conf:'90%',note:'pad sets'},{q:4,nm:'Generator 100kW',s:1,e:4,conf:'88%',note:'temp power'}]},
   {phase:'Structure / Steel',color:'var(--charcoal)',why:'Steel-erection window in Scheduling Intelligence (P6-anchored)',items:[
     {q:1,nm:'Tower crane',s:2,e:5,conf:'96%',note:'peak-month driver'},{q:1,nm:'Crawler crane 100T',s:2,e:5,conf:'93%',note:''},{q:3,nm:'Telehandler 10K',s:2,e:5,conf:'94%',note:''},{q:2,nm:'Boom lift 80ft',s:2,e:5,conf:'90%',note:''}]},
   {phase:'Racking & Modules',color:'var(--profsvc)',why:'Solar racking & module-install activities; quantities from 5 similar solar + BESS builds',items:[
     {q:6,nm:'Scissor lift 26ft',s:3,e:6,conf:'91%',note:''},{q:4,nm:'Telehandler 6K',s:3,e:6,conf:'90%',note:'module handling'},{q:2,nm:'Rough terrain forklift',s:3,e:6,conf:'88%',note:''},{q:3,nm:'Light tower',s:3,e:6,conf:'86%',note:'extended shifts'}]},
   {phase:'MEP / Electrical',color:'var(--steel)',why:'MEP rough-in activities + the electrical scope in Estimating Intelligence (Foundry)',items:[
     {q:4,nm:'Scissor lift 32ft',s:4,e:7,conf:'91%',note:''},{q:2,nm:'Boom lift 60ft',s:4,e:6,conf:'89%',note:''},{q:2,nm:'Cable puller',s:4,e:7,conf:'87%',note:''},{q:3,nm:'Generator 100kW',s:4,e:7,conf:'86%',note:'commissioning power'}]},
   {phase:'Commissioning & closeout',color:'var(--gold)',why:'Testing & commissioning activities in Scheduling Intelligence',items:[
     {q:2,nm:'Boom lift 40ft',s:6,e:8,conf:'88%',note:''},{q:1,nm:'Telehandler 10K',s:6,e:8,conf:'85%',note:'demob support'},{q:2,nm:'Light tower',s:6,e:8,conf:'84%',note:''}]}
 ]},
 prefab:{unit:'assemblies',hero:'This <b>solar + BESS</b> build has repeatable assemblies worth pre-building off-site.',groups:[
   {phase:'Foundations & pads',color:'var(--prefab)',why:'Pad & vault activities in Scheduling Intelligence + structural scope in Estimating Intelligence (Foundry)',items:[
     {q:24,nm:'BESS equipment pads',s:1,e:3,conf:'93%',note:'pre-cast'},{q:12,nm:'Utility vaults',s:1,e:4,conf:'90%',note:''}]},
   {phase:'Electrical rooms',color:'var(--prefab)',why:'Matched to electrical-room set dates and the MEP scope in Estimating Intelligence',items:[
     {q:6,nm:'Pre-fab e-houses',s:3,e:6,conf:'91%',note:'skid-mounted'},{q:18,nm:'MEP racks',s:3,e:6,conf:'89%',note:''}]},
   {phase:'Module support',color:'var(--prefab)',why:'Racking pre-assembly ahead of the module-install window',items:[
     {q:40,nm:'Racking sub-assemblies',s:2,e:5,conf:'88%',note:'shop-built'},{q:8,nm:'Combiner skids',s:4,e:6,conf:'86%',note:''}]}
 ]},
 procurement:{unit:'orders',hero:'Bulk materials and consumables 02S can commit ahead of need.',groups:[
   {phase:'Sitework materials',color:'var(--proc)',why:'Sitework quantities from Estimating Intelligence (Foundry), timed to grading activities',items:[
     {q:1,nm:'Aggregate & base rock',s:0,e:2,conf:'94%',note:'blanket PO'},{q:1,nm:'Erosion control',s:0,e:3,conf:'90%',note:'White Cap'}]},
   {phase:'Electrical & BESS',color:'var(--proc)',why:'Long-lead electrical from Estimating Intelligence, ordered against set dates',items:[
     {q:1,nm:'MV cable & conduit',s:2,e:5,conf:'92%',note:'long-lead'},{q:1,nm:'Switchgear & transformers',s:1,e:4,conf:'89%',note:'Graybar tier'},{q:1,nm:'Grounding materials',s:3,e:6,conf:'87%',note:''}]},
   {phase:'Consumables',color:'var(--proc)',why:'Recurring consumables auto-replenished across the job',items:[
     {q:1,nm:'Safety & PPE',s:0,e:8,conf:'88%',note:'Grainger national'},{q:1,nm:'Fasteners & hardware',s:1,e:7,conf:'86%',note:'Fastenal'}]}
 ]},
 logistics:{unit:'moves',hero:'Deliveries, laydown, and hauling across the job, sequenced to the schedule.',groups:[
   {phase:'Mobilization',color:'var(--logistics)',why:'Mobilization activities in Scheduling Intelligence',items:[
     {q:1,nm:'Site trailer & office setup',s:0,e:1,conf:'93%',note:''},{q:1,nm:'Laydown yard grading',s:0,e:1,conf:'90%',note:''}]},
   {phase:'Major deliveries',color:'var(--logistics)',why:'Heavy-haul timed to crane & BESS set dates',items:[
     {q:1,nm:'BESS enclosure heavy-haul',s:2,e:4,conf:'91%',note:'permitted loads'},{q:1,nm:'Transformer delivery',s:2,e:3,conf:'89%',note:''},{q:1,nm:'Module container drayage',s:3,e:6,conf:'87%',note:'St. Louis hub'}]},
   {phase:'Demobilization',color:'var(--logistics)',why:'Closeout & demob activities',items:[
     {q:1,nm:'Equipment return hauling',s:6,e:8,conf:'86%',note:''},{q:1,nm:'Site restoration',s:7,e:8,conf:'84%',note:''}]}
 ]},
 profsvc:{unit:'engagements',hero:'Specialty services and inspections tied to the build milestones.',groups:[
   {phase:'Preconstruction',color:'var(--profsvc)',why:'Survey & geotech scope from Estimating Intelligence',items:[
     {q:1,nm:'Survey & layout',s:0,e:2,conf:'93%',note:''},{q:1,nm:'Geotechnical testing',s:0,e:1,conf:'90%',note:''}]},
   {phase:'Construction QA',color:'var(--profsvc)',why:'Inspection cadence matched to structure & MEP activities',items:[
     {q:1,nm:'Special inspections',s:2,e:6,conf:'91%',note:'concrete + steel'},{q:1,nm:'Electrical testing',s:4,e:7,conf:'88%',note:''}]},
   {phase:'Commissioning',color:'var(--profsvc)',why:'Commissioning activities in Scheduling Intelligence',items:[
     {q:1,nm:'BESS commissioning agent',s:6,e:8,conf:'89%',note:''},{q:1,nm:'Performance testing',s:7,e:8,conf:'85%',note:''}]}
 ]}
};
function nsPlan(p){return NS_PLANS[p]||NS_PLANS.equipment;}
function nsMonthOpts(sel){return NS_MONTHS.map((m,i)=>`<option value="${i}" ${i===sel?'selected':''}>${m}</option>`).join('');}
function nsTotals(p){let lines=0,units=0;nsPlan(p).groups.forEach(g=>g.items.forEach(it=>{lines++;units+=(it.q||1);}));return {lines,units,groups:nsPlan(p).groups.length};}

let NS_EDIT={};
function nsPlanListHTML(p,edit){return nsPlan(p).groups.map((g,gi)=>`<div class="nspg"><div class="nspg-h"><span class="nspg-phase">${g.phase}</span><span class="nspg-win">${NS_MONTHS[Math.min.apply(null,g.items.map(x=>x.s))]} – ${NS_MONTHS[Math.max.apply(null,g.items.map(x=>x.e))]}</span><span class="nspg-why">${ic('sparkle','ic-14')} ${g.why}</span></div>${g.items.map((it,ii)=>edit?`<div class="nspg-item editing"><span class="nspg-dot" style="background:${g.color}"></span><div class="nspg-edit"><div class="nse-line"><input class="ns-edit-inp qty" value="${it.q}" onchange="nsEditQty('${p}',${gi},${ii},this.value)" title="Quantity"><input class="ns-edit-inp" value="${it.nm.replace(/"/g,'&quot;')}" onchange="nsEditName('${p}',${gi},${ii},this.value)"></div><div class="nse-dates"><span class="nse-lbl">On-rent</span><select class="ns-date" onchange="nsEditDate('${p}',${gi},${ii},'s',this.value)">${nsMonthOpts(it.s)}</select><span class="nse-arrow">→</span><span class="nse-lbl">Off-rent</span><select class="ns-date" onchange="nsEditDate('${p}',${gi},${ii},'e',this.value)">${nsMonthOpts(it.e)}</select></div></div><button class="ns-line-del" onclick="nsRemoveLine('${p}',${gi},${ii})" title="Remove line">${ic('close','ic-14')}</button></div>`:`<div class="nspg-item"><span class="nspg-dot" style="background:${g.color}"></span><div class="nspg-nm">${it.q}× ${it.nm}</div><div class="nspg-meta">${NS_MONTHS[it.s]} → ${NS_MONTHS[it.e]}${it.note?' · '+it.note:''}</div><div class="nspg-conf">${it.conf}</div></div>`).join('')}</div>`).join('');}
function nsRenderList(p){const el=document.getElementById('ns-list');if(el)el.innerHTML=nsPlanListHTML(p,!!NS_EDIT[p]);const g=document.getElementById('ns-gantt');if(g)g.innerHTML=buildNsGantt(p);requestAnimationFrame(initNsDrag);}
function nsEditToggle(p){NS_EDIT[p]=!NS_EDIT[p];nsRenderList(p);const lbl=document.getElementById('nsEditLbl'),acts=document.getElementById('nsEditActions'),note=document.getElementById('nsListNote'),sub=document.getElementById('nsListSub');const on=!!NS_EDIT[p];
 if(lbl)lbl.innerHTML=on?ic('check','ic-14')+' Done editing':ic('edit','ic-14')+' Edit the plan';
 if(acts)acts.classList.toggle('hidden',!on);
 if(sub)sub.textContent=on?'editing — change quantities, on/off-rent dates, or remove lines':'grouped the way your job runs — no codes to manage';
 if(note)note.innerHTML=on?'Editing the draft. Adjust a quantity, set on/off-rent months from the dropdowns, drag a bar on the Gantt, or remove a line. 02S still handles coding and fulfillment.':'Every line is coded, dated, and tied to the activity it supports. You never touch a cost code — 02S resolves it in the background. Want to change something? Hit <b>Edit the plan</b>.';}
function nsEditQty(p,gi,ii,v){const q=Math.max(1,parseInt(v)||1);nsPlan(p).groups[gi].items[ii].q=q;const g=document.getElementById('ns-gantt');if(g)g.innerHTML=buildNsGantt(p);}
function nsEditName(p,gi,ii,v){nsPlan(p).groups[gi].items[ii].nm=v;}
function nsEditDate(p,gi,ii,field,v){const it=nsPlan(p).groups[gi].items[ii];let val=parseInt(v);if(field==='s'){it.s=val;if(it.e<it.s)it.e=it.s;}else{it.e=val;if(it.e<it.s)it.s=it.e;}nsRenderList(p);}
function nsRemoveLine(p,gi,ii){nsPlan(p).groups[gi].items.splice(ii,1);if(!nsPlan(p).groups[gi].items.length)nsPlan(p).groups.splice(gi,1);nsRenderList(p);toast('Line removed');}
function nsAddLine(p){nsPlan(p).groups[0].items.push({q:1,nm:'New equipment',s:0,e:1,conf:'manual'});nsRenderList(p);toast('Line added — set the details');}

// Gantt (per-line bars, drag to shift the rental window)
function buildNsGantt(p){const N=NS_MONTHS.length;let rows='';
 nsPlan(p).groups.forEach((g,gi)=>{
   const gs=Math.min.apply(null,g.items.map(x=>x.s)),ge=Math.max.apply(null,g.items.map(x=>x.e));const n=g.items.reduce((s,it)=>s+(it.q||1),0);
   rows+=`<div class="g2-row group"><div class="g2-left"><span class="nm">${g.phase}</span><span class="sub">${g.items.length} line${g.items.length>1?'s':''} · ${n} ${nsPlan(p).unit}</span></div><div class="g2-track"><div class="gbar gbar-agg" style="left:${(gs/N*100).toFixed(1)}%;width:${((ge-gs+1)/N*100-1.5).toFixed(1)}%;background:${g.color}"><span class="agglab">${g.phase}</span></div></div><div class="g2-cost">${n}</div></div>`;
   g.items.forEach((it,ii)=>{rows+=`<div class="g2-row line"><div class="g2-left"><span class="nm">${it.q}× ${it.nm}</span><span class="sub"><span class="dates">${NS_MONTHS[it.s]} → ${NS_MONTHS[it.e]}</span></span></div><div class="g2-track"><div class="gbar nsbar" data-p="${p}" data-gi="${gi}" data-ii="${ii}" data-span="${it.e-it.s+1}" style="left:${(it.s/N*100).toFixed(1)}%;width:${((it.e-it.s+1)/N*100-1.5).toFixed(1)}%;background:${g.color}">${it.q}×</div></div><div class="g2-cost">${it.q}</div></div>`;});
 });
 return `<div class="gantt2"><div class="g2-row head"><div class="g2-left"><span class="sub" style="font-weight:700;color:var(--gray-500)">Activity / line</span></div><div class="g2-track">${NS_MONTHS.map(m=>`<span>${m}</span>`).join('')}</div><div class="g2-cost" style="font-size:10px;color:var(--gray-500)">Qty</div></div>${rows}</div><div class="drag-hint">${ic('chevronLeft','ic-14')}${ic('chevronRight','ic-14')} Bars come from Scheduling Intelligence activity dates. In <b>Edit the plan</b>, drag a line to shift its on/off-rent window — or use the date dropdowns.</div>`;}
function initNsDrag(){const N=NS_MONTHS.length;document.querySelectorAll('#ns-gantt .gbar.nsbar').forEach(bar=>{bar.onmousedown=(e)=>{const p=bar.dataset.p;e.preventDefault();const track=bar.parentElement,tw=track.getBoundingClientRect().width;const sl=parseFloat(bar.style.left),w=parseFloat(bar.style.width),sx=e.clientX;bar.style.opacity='.7';const mv=(ev)=>{let d=(ev.clientX-sx)/tw*100;bar.style.left=Math.max(0,Math.min(100-w,sl+d))+'%';};const up=()=>{document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up);bar.style.opacity='';const gi=+bar.dataset.gi,ii=+bar.dataset.ii,sp=+bar.dataset.span;let si=Math.round(parseFloat(bar.style.left)/100*N);si=Math.max(0,Math.min(N-sp,si));const it=nsPlan(p).groups[gi].items[ii];it.s=si;it.e=si+sp-1;nsRenderList(p);requestAnimationFrame(initNsDrag);};document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);};});}

// Accept plan -> change the screen to a locked/confirmed plan
let NS_ACCEPTED={};
function nsAcceptPlan(p){const t=nsTotals(p);openModal(`<div class="modal-head"><div><h3>Accept plan</h3><div class="sub">${t.lines} lines · ${t.units} ${nsPlan(p).unit} · tied to your schedule</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="ai-panel" style="margin:0 0 12px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">02S takes it from here</div></div><div class="ctx" style="margin-bottom:0">You confirmed the plan — no codes, no manual scheduling. 02S sources owned-vs-re-rent, resolves coding, and delivers each line to the activity it supports.</div></div><div class="valid-list"><div class="vrow ok">${ic('check','ic-16')}<div><b>All ${t.lines} lines tied to schedule activities</b><div class="vh">Dates move automatically as Scheduling Intelligence updates</div></div></div><div class="vrow ok">${ic('check','ic-16')}<div><b>Coding resolved in the background</b><div class="vh">Controlling + CMiC codes applied by 02S — nothing to enter</div></div></div><div class="vrow ok">${ic('check','ic-16')}<div><b>Fulfillment handled by OMS</b><div class="vh">Owned fleet first, re-rent only where needed</div></div></div></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Not yet</button><button class="btn primary" onclick="NS_ACCEPTED['${p}']=true;NS_EDIT['${p}']=false;closeModal();renderCurrent();toast('Plan accepted — 02S is running it')">${ic('check','ic-14')} Accept &amp; let 02S run it</button></div>`,true);}
function nsReopenPlan(p){NS_ACCEPTED[p]=false;renderCurrent();toast('Plan reopened for editing');}
function nsAcceptedHTML(p){const t=nsTotals(p);const gi=nsPlan(p);
 return `<div class="ns-accepted-hero"><div class="nah-l"><span class="nah-ico">${ic('check','ic-20')}</span><div><div class="nah-t">Plan accepted — 02S is running it</div><div class="nah-s">${t.lines} lines · ${t.units} ${gi.unit} · locked and handed to 02S. Orders, coding, and delivery are handled automatically; you'll see them appear as the schedule progresses.</div></div></div><button class="btn ghost" onclick="nsReopenPlan('${p}')">${ic('edit','ic-14')} Reopen &amp; edit</button></div>
 <div class="nsplan-summary"><div class="nps-stat"><div class="nps-n">${t.lines}</div><div class="nps-k">lines locked</div></div><div class="nps-div"></div><div class="nps-stat"><div class="nps-n" style="color:var(--ok)">Live</div><div class="nps-k">02S managing</div></div><div class="nps-div"></div><div class="nps-stat"><div class="nps-n">${t.groups}</div><div class="nps-k">activity groups</div></div><div class="nps-div"></div><div class="nps-stat"><div class="nps-n" style="color:var(--ok)">auto</div><div class="nps-k">ordering &amp; coding</div></div></div>
 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci">${ic('calendar','ic-16')}</span><span class="t">Confirmed plan on your schedule</span><span class="sub">locked — 02S is delivering to these dates</span><span class="chip ok" style="margin-left:auto">${ic('check','ic-14')} Accepted</span></div><div>${buildNsGantt(p)}</div></div>
 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci">${ic('box','ic-16')}</span><span class="t">Fulfillment status</span><span class="sub">02S is sourcing and scheduling these now</span></div>
   <div class="list"><div class="lrow lhead" style="grid-template-columns:1.6fr 1fr 1fr 1fr"><div>Line</div><div>Window</div><div>Source</div><div>Status</div></div>${gi.groups[0].items.slice(0,4).map((it,i)=>`<div class="lrow" style="grid-template-columns:1.6fr 1fr 1fr 1fr"><div class="pri">${it.q}× ${it.nm}</div><div style="color:var(--gray-500);font-size:11.5px">${NS_MONTHS[it.s]} → ${NS_MONTHS[it.e]}</div><div style="font-size:11.5px;color:var(--gray-500)">${i%2?'re-rent (auto)':'owned fleet'}</div><div><span class="chip ${i===0?'ok':i===1?'steel':'gray'}">${i===0?'Scheduled':i===1?'Sourcing':'Queued'}</span></div></div>`).join('')}</div>
   <div style="font-size:11px;color:var(--gray-500);margin-top:10px">This is what you'll watch after accepting — 02S turns the plan into orders and deliveries without another hand-off.</div>
 </div>`;}
let NSWALK_STEP=0;
const NSWALK=[
 ['Project from CRM',ic('team','ic-20'),'Pulled Hercules Solar + BESS — $180M solar + BESS, Hercules CA, preconstruction. Project type sets the equipment shape.'],
 ['Schedule activities',ic('calendar','ic-20'),'P6 schedule via Scheduling Intelligence set every on-rent / off-rent window from sitework through commissioning.'],
 ['Estimate & cost codes',ic('clipboard','ic-20'),'Estimating Intelligence (Foundry) gave budgets by scope. Budget ÷ rate = billable months per line.'],
 ['5 similar jobs',ic('gauge','ic-20'),'Matched 5 completed solar + BESS builds for quantities — 92% ran 2 excavators through grading, 6 scissor lifts through racking.'],
 ['Plan built',ic('sparkle','ic-20'),'Full draft: coded, dated, grouped by activity. Adjust any line or accept as-is.']
];
function nsWalkthrough(){NSWALK_STEP=0;renderNsWalk();}
/* Reusable North Star draft/accepted screen for ANY pillar */
function nsDraftScreen(p,opts){opts=opts||{};const t=nsTotals(p);const cfg=nsPlan(p);
 if(NS_ACCEPTED[p]) return nsAcceptedHTML(p);
 const title=opts.title||'02S drafted your plan';
 const sources=opts.sources||[['calendar','Scheduling Intelligence','Ontology · anchored in P6'],['clipboard','Estimating Intelligence','cost codes + budgets · Foundry'],['team','CRM','project type, size & stage'],['gauge','Historical jobs','5 similar solar + BESS builds']];
 return `<div class="nsplan-hero"><div class="nph-top"><div class="nph-ico">${ic('sparkle','ic-16')}</div><div><div class="nph-t">${title}</div><div class="nph-s">${cfg.hero} I assembled the full plan from your data and tied every line to a schedule activity — review it, adjust anything, or accept as-is.</div></div><span class="nph-conf">96% confidence</span></div>
   <div class="nph-sources"><span class="nph-slabel">Pre-built from</span>${sources.map(s=>`<div class="nph-src"><span class="nph-src-ico">${ic(s[0],'ic-14')}</span><div><b>${s[1]}</b><div class="nph-src-s">${s[2]}</div></div><span class="nph-check">${ic('check','ic-14')}</span></div>`).join('')}</div>
   <div class="nph-actions"><button class="btn primary" onclick="nsAcceptPlan('${p}')">${ic('check','ic-14')} Accept plan &amp; continue</button><button class="btn ghost" onclick="nsWalkthrough()">${ic('sparkle','ic-14')} Walk me through it</button><button class="btn ghost" onclick="nsEditToggle('${p}')"><span id="nsEditLbl">${ic('edit','ic-14')} Edit the plan</span></button><button class="btn ghost" onclick="openAskQuestion()">Ask a question</button></div>
 </div>
 <div class="nsplan-summary"><div class="nps-stat"><div class="nps-n">${t.lines}</div><div class="nps-k">lines drafted</div></div><div class="nps-div"></div><div class="nps-stat"><div class="nps-n">${t.units}</div><div class="nps-k">${cfg.unit}</div></div><div class="nps-div"></div><div class="nps-stat"><div class="nps-n">${t.groups}</div><div class="nps-k">activity groups</div></div><div class="nps-div"></div><div class="nps-stat"><div class="nps-n" style="color:var(--ok)">auto</div><div class="nps-k">coding &amp; dates</div></div></div>
 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci">${ic('calendar','ic-16')}</span><span class="t">The plan on your schedule</span><span class="sub">tied to activities — dates track Scheduling Intelligence</span><span class="ns-badge" style="margin-left:auto">North Star</span></div>
   <div id="ns-gantt">${buildNsGantt(p)}</div>
 </div>
 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci">${ic('layers','ic-16')}</span><span class="t">The plan, by schedule activity</span><span class="sub" id="nsListSub">grouped the way your job runs — no codes to manage</span><span class="ns-badge" style="margin-left:auto">North Star</span></div>
   <div class="nsplan-list" id="ns-list">${nsPlanListHTML(p,false)}</div>
   <div id="nsEditActions" class="hidden" style="display:flex;gap:8px;margin-top:12px"><button class="btn primary sm" onclick="nsAddLine('${p}')">${ic('plus','ic-14')} Add a line</button><button class="btn sm" onclick="nsEditToggle('${p}')">${ic('check','ic-14')} Done editing</button></div>
   <div id="nsListNote" style="font-size:11px;color:var(--gray-500);margin-top:12px">Every line is coded, dated, and tied to the activity it supports. You never touch a cost code — 02S resolves it in the background. Want to change something? Hit <b>Edit the plan</b>.</div>
 </div>
 <div class="nsplan-foot"><div style="font-size:12.5px;color:var(--charcoal-700)">${ic('check','ic-14')} Looks right? One tap and 02S handles ordering, coding, and delivery to your schedule.</div><button class="btn primary" onclick="nsAcceptPlan('${p}')">${ic('check','ic-14')} Accept &amp; let 02S run it</button></div>`;}
function renderNsWalk(){const s=NSWALK[NSWALK_STEP],n=NSWALK.length;
 openModal(`<div class="modal-head"><div><h3>How 02S built your plan</h3><div class="sub">Step ${NSWALK_STEP+1} of ${n}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="nswalk"><div class="nsw-dots">${NSWALK.map((_,i)=>`<span class="nsw-dot ${i===NSWALK_STEP?'on':''} ${i<NSWALK_STEP?'done':''}"></span>`).join('')}</div><div class="nsw-card"><div class="nsw-ico">${s[1]}</div><div class="nsw-t">${s[0]}</div><div class="nsw-body">${s[2]}</div></div></div></div><div class="modal-foot">${NSWALK_STEP>0?`<button class="btn" onclick="nsWalkStep(-1)">Back</button>`:`<button class="btn" onclick="closeModal()">Skip</button>`}${NSWALK_STEP<n-1?`<button class="btn primary" onclick="nsWalkStep(1)">Next ${ic('chevronRight','ic-14')}</button>`:`<button class="btn primary" onclick="closeModal()">${ic('check','ic-14')} Got it — review plan</button>`}</div>`,true);}
function nsWalkStep(d){NSWALK_STEP=Math.max(0,Math.min(NSWALK.length-1,NSWALK_STEP+d));renderNsWalk();}
function promoteSelected(){
  const checked=Array.from(document.querySelectorAll('table.mini input[type="checkbox"]:checked'));
  const rows=checked.length?checked.map(cb=>{const tr=cb.closest('tr');const cells=tr?Array.from(tr.querySelectorAll('td')):[];return {name:cells[1]?cells[1].textContent.trim():'Equipment line',qty:cells[2]?cells[2].textContent.trim():'1',dates:(cells[4]?cells[4].textContent.trim():'')+(cells[5]?' – '+cells[5].textContent.trim():'')};}):[{name:'All equipment lines from plan',qty:'',dates:'Per plan window',costCode:DEFAULT_COST_CODE}];
  openCheckout(rows,{source:'plan',title:'Promote to request',planName:'Equipment plan request'});
}
function openAskQuestion(){openModal(`<div class="modal-head"><div><h3>Ask about this plan</h3><div class="sub">02S AI · answers from your plan data</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body co-body"><div class="field"><label>Your question</label><textarea id="aqText" rows="3" placeholder="e.g. Can we push the tower crane off-rent by 2 weeks? What's the cost impact of adding 2 excavators in September?"></textarea></div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px">${['Push crane by 2 weeks?','Cost of 2 more excavators?','What phases need equipment Aug–Oct?'].map(q=>`<button class="btn sm" onclick="document.getElementById('aqText').value='${q}'">${q}</button>`).join('')}</div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="aqSubmit()">${ic('sparkle','ic-14')} Ask</button></div>`);}
function aqSubmit(){const q=document.getElementById('aqText')?.value;if(!q){toast('Enter a question first');return;}closeModal();setTimeout(()=>openModal(`<div class="modal-head"><div><h3>Ask about this plan</h3><div class="sub">02S AI response</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="ai-panel"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">02S AI</div></div><div class="ctx">${q.includes('crane')?'Pushing the tower crane off-rent by 2 weeks (to mid-October) reduces estimated spend by ~$18,400 based on current rates. The Structure phase ends Aug 30 — a 2-week buffer is feasible. Want me to update the plan?':q.includes('excavator')?'Adding 2 excavators in September adds ~$16,800/mo for an estimated 3-month window (Sep–Nov), totalling ~$50,400. Current plan has 2 excavators already active in that window. I can revise the plan to show 4 units.':'Based on the current plan, the Aug–Oct window requires tower cranes (Structure), scissor lifts (MEP rough-in), and telehandlers (Logistics support). Peak spend is in September at ~$84,000.'}</div></div><div style="font-size:11.5px;color:var(--gray-500);margin-top:12px">This answer is generated from the current plan data and schedule context. Update dates, quantities, or phases in the plan editor — the AI will recalculate.</div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Close</button><button class="btn primary" onclick="closeModal();toast('Plan editor opened — apply changes directly')">${ic('edit','ic-14')} Edit plan</button></div>`),200);}
function openOffRent(item){const sub=item?item+' · off-rent request':'Selected lines · call-off request';openModal(`<div class="modal-head"><div><h3>Call off equipment</h3><div class="sub">${sub}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body co-body"><div class="co-note">${ic('warning','ic-14')} This calls off the rental and triggers return logistics. 02S will contact the carrier and confirm the pickup window.</div><div class="field-row"><div class="field"><label>Off-rent date <span class="req">*</span></label><input type="date" id="orDate" value="${new Date(Date.now()+86400000*3).toISOString().slice(0,10)}"></div><div class="field"><label>Return to</label><select><option>02S West yard — Las Vegas</option><option>02S Central depot</option><option>On-site (owner pickup)</option></select></div></div><div class="field"><label>Reason</label><select><option>Scope complete — no longer needed</option><option>Early finish — ahead of schedule</option><option>Substitute with owned asset</option><option>Project delay / on hold</option><option>Other</option></select></div><div class="field"><label>Notes <span style="font-weight:400;color:var(--gray-400)">optional</span></label><textarea rows="2" placeholder="Any return instructions, gate contact, or pickup notes…"></textarea></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Call-off submitted — 02S will confirm pickup window')">${ic('check','ic-14')} Submit call-off</button></div>`);}
function openSubmittal(){openModal(`<div class="modal-head"><div><h3>Prefab submittal — L2 headwalls</h3><div class="sub">Shop drawings due Thu · Prefab plan · Hercules Solar + BESS</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body co-body"><div class="list"><div class="lrow lhead" style="grid-template-columns:1.5fr 1fr .8fr .8fr"><div>Document</div><div>Type</div><div>Rev</div><div>Status</div></div><div class="lrow" style="grid-template-columns:1.5fr 1fr .8fr .8fr"><div class="pri">L2 Headwall — shop drawings</div><div style="color:var(--gray-500)">PDF · 48 pages</div><div>Rev 3</div><div><span class="chip warn">Due Thu</span></div></div><div class="lrow" style="grid-template-columns:1.5fr 1fr .8fr .8fr"><div class="pri">MEP rack — coordination set</div><div style="color:var(--gray-500)">DWG · 12 sheets</div><div>Rev 1</div><div><span class="chip gray">Draft</span></div></div></div><div class="co-note" style="margin-top:12px">${ic('warning','ic-14')} Submit drawings to the 02S prefab shop by Thursday to hold your Aug 15 delivery slot.</div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Close</button><button class="btn" onclick="toast('Opened in document viewer (demo)')">${ic('file','ic-14')} Review drawings</button><button class="btn primary" onclick="closeModal();toast('Submittal sent to 02S prefab shop — confirmation incoming')">${ic('send','ic-14')} Submit to shop</button></div>`,true);}
function openShipTo(){openModal(`<div class="modal-head"><div><h3>Confirm delivery address</h3><div class="sub">Tower crane mobilization · ${PROJECT.name}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body co-body"><div class="field"><label>Delivery address</label><select id="stAddr"><option selected>${PROJECT.shipTo.line1}, ${PROJECT.shipTo.line2}</option><option>02S yard pickup — Las Vegas</option><option>Alternate site address</option></select></div><div class="field-row"><div class="field"><label>Site contact</label><input value="${PROJECT.shipTo.contact}"></div><div class="field"><label>Contact phone</label><input value="${PROJECT.shipTo.phone}"></div></div><div class="field"><label>Delivery window</label><select><option>Mon–Fri 6:00a–3:30p (standard)</option><option>Saturday delivery (confirm with 02S)</option><option>Overnight / off-hours</option></select></div><div class="field"><label>Gate / access notes</label><textarea rows="2" value="${PROJECT.shipTo.notes}" placeholder="${PROJECT.shipTo.notes}"></textarea></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Ship-to confirmed — routed to OMS for mobilization scheduling')">${ic('check','ic-14')} Confirm ship-to</button></div>`,true);}
function openSafetyBulletin(){openModal(`<div class="modal-head"><div><h3>Safety bulletin — crane lift zone</h3><div class="sub">Required acknowledgment before tower crane mobilization</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="valid-list"><div class="vrow ok"><div class="ico">${ic('warning','ic-14')}</div><div><b>Exclusion zone — 60ft radius</b><div class="vh">Establish barricades before lift operations. Coordinate with site super for daily pre-lift walkdown.</div></div></div><div class="vrow ok"><div class="ico">${ic('warning','ic-14')}</div><div><b>Wind limit — suspend at 25 mph</b><div class="vh">Monitor anemometer continuously. 02S ops receives automatic alert at threshold.</div></div></div><div class="vrow ok"><div class="ico">${ic('clipboard','ic-14')}</div><div><b>Pre-lift checklist required daily</b><div class="vh">Operator and rigger must co-sign before each shift. Digital form links to ORD-3044.</div></div></div></div><div style="font-size:11.5px;color:var(--gray-500);margin-top:12px">By acknowledging you confirm the site team has been briefed on these requirements and accepts responsibility for the exclusion zone and pre-lift protocol.</div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Not yet</button><button class="btn primary" onclick="closeModal();toast('Safety bulletin acknowledged — logged to ORD-3044')">${ic('check','ic-14')} Acknowledge &amp; log</button></div>`,true);}
function pillarUpdate(item,project){openModal(`<div class="modal-head"><div><h3>Update status</h3><div class="sub">${item} · ${project}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body co-body"><div class="field"><label>New status</label><select id="puStatus"><option>New</option><option selected>Acknowledged</option><option>In review</option><option>In progress</option><option>Fulfilled</option><option>On hold</option></select></div><div class="field"><label>Note to project team <span style="font-weight:400;color:var(--gray-400)">optional</span></label><textarea id="puNote" rows="2" placeholder="e.g. Reviewing capacity — will confirm by Thu"></textarea></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('${item} → '+document.getElementById('puStatus')?.value+' · project notified')">${ic('check','ic-14')} Save &amp; notify</button></div>`);}
function pillarFulfill(item,project){openModal(`<div class="modal-head"><div><h3>Route to execution</h3><div class="sub">${item} · ${project}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body co-body"><div class="co-note">${ic('send','ic-14')} This will mark the request as fulfilled and log it against the execution system.</div><div class="field-row"><div class="field"><label>Execution system</label><select><option>TBD — system to be confirmed</option><option>Procore (construction mgmt)</option><option>Fieldwire</option><option>Manual coordination</option></select></div><div class="field"><label>Fulfillment date</label><input type="date" value="${new Date().toISOString().slice(0,10)}"></div></div><div class="field"><label>Reference / PO number <span style="font-weight:400;color:var(--gray-400)">optional</span></label><input placeholder="e.g. PO-20481"></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('${item} routed to execution · project notified')">${ic('check','ic-14')} Confirm fulfillment</button></div>`);}
function openProjectPlan(name,lines,status){openModal(`<div class="modal-head"><div><h3>${name}</h3><div class="sub">Equipment demand plan · ${lines} lines · ${status}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div style="font-size:12px;color:var(--gray-500);margin-bottom:12px">Submitted by the project team — read-only view for 02S ops. Taxonomy and OvR decisions are set on the backlog screen.</div>${buildSchedule('Equipment class').replace(/onclick="[^"]*"/g,'onclick="toast(\'Read-only view for ops — edit decisions on the order backlog\')"').replace(/addGroupToCart|addLineToCart/g,'noOp')}</div><div class="modal-foot"><button class="btn" onclick="closeModal()">Close</button><button class="btn primary" onclick="closeModal();nav('command','c-backlog')">${ic('inbox','ic-14')} View in backlog</button></div>`,true);}
function openAssetAssign(item,qty){
  const ns=effMode('c-edp')==='northstar';
  const vItems=ns?[
    {id:'TC-001',nm:'Liebherr LTM 1100-4.1',avail:'Available · Las Vegas yard',ovr:'Owned',util:'34%',rec:true},
    {id:'TC-002',nm:'Grove GMK5150L',avail:'Available · Phoenix yard (3-day transit)',ovr:'Owned',util:'58%',rec:false},
    {id:'TC-RR-1',nm:'Re-rent — Maxim Crane (quote in)',avail:'Est. $12,400/mo · 2-day lead',ovr:'Re-rent',util:'—',rec:false}
  ]:[
    {id:'TC-001',nm:'Liebherr LTM 1100-4.1',avail:'Las Vegas yard — 80% ready',tag:''},
    {id:'TC-002',nm:'Grove GMK5150L',avail:'Phoenix yard — needs service',tag:'service'},
    {id:'TC-003',nm:'Liebherr LTM 1200-9.1',avail:'Currently on Project Beta (avail Sep)',tag:'in-use'}
  ];
  const rowsNS=vItems.map(a=>`<div class="lrow" style="grid-template-columns:auto 1fr 1fr .7fr auto;align-items:center;gap:10px;cursor:pointer" onclick="assignAsset('${item}','${a.id}','${a.nm}')"><input type="radio" name="assetpick" ${a.rec?'checked':''}><div><div style="font-size:13px;font-weight:600">${a.nm}</div><div style="font-size:11.5px;color:var(--gray-500)">${a.avail}</div></div><div><span class="chip ${a.ovr==='Owned'?'ok':'gold'}">${a.ovr}</span></div><div style="font-size:12px;color:var(--charcoal-700)">${a.util} util</div><div style="font-size:11.5px;font-weight:600;color:${a.rec?'var(--ok)':'var(--gray-400)'}">${a.rec?'Recommended':''}</div></div>`).join('');
  const rowsV1=vItems.map(a=>`<div class="lrow" style="grid-template-columns:auto 1fr 1fr auto;align-items:center;gap:10px;cursor:pointer" onclick="assignAsset('${item}','${a.id}','${a.nm}')"><input type="radio" name="assetpick" ${!a.tag?'checked':''}><div><div style="font-size:13px;font-weight:600">${a.nm}</div><div style="font-size:11.5px;color:var(--gray-500)">${a.avail}</div></div><div><span class="chip ${!a.tag?'ok':a.tag==='service'?'warn':'gray'}">${!a.tag?'Available':a.tag==='service'?'Needs service':'In use'}</span></div><div style="text-align:right"><button class="btn sm" onclick="event.stopPropagation();assignAsset('${item}','${a.id}','${a.nm}')">Assign</button></div></div>`).join('');
  openModal(`<div class="modal-head"><div><h3>Assign assets — ${item}</h3><div class="sub">${qty} unit${qty!=='1'?'s':''} required${ns?' · suggestions from T3 EAM':' · manual assignment'}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body">${ns?`<div class="ai-panel" style="margin:0 0 14px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">T3 EAM recommendation</div></div><div class="ctx" style="margin-bottom:0">Recommended <b>TC-001 (Liebherr LTM 1100-4.1)</b> — available in Las Vegas yard, 34% utilization, owned. Saves ~$12,400/mo vs. re-rent. Confirm or choose a different asset below.</div></div>`:'<div style="font-size:12px;color:var(--gray-500);margin-bottom:12px">Select from your available fleet — or add a re-rent if nothing fits.</div>'}<div class="list">${ns?rowsNS:rowsV1}</div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Asset assigned — reflected in plan and YardHub')">${ic('check','ic-14')} Confirm assignment</button></div>`,true);}
function assignAsset(item,id,nm){document.querySelectorAll('input[name="assetpick"]').forEach(r=>r.checked=r.closest('.lrow')?.onclick?.toString().includes(id));toast('Selected '+nm);}
function noOp(){}
/* add-to-cart / send-request directly from the Gantt (or list) */
let EDP_CART=1; // starts with 1 line already staged (REQ-1058 in cart)
function edpCartBadges(){document.querySelectorAll('.edp-cart-count').forEach(b=>{b.textContent=EDP_CART;b.classList.toggle('empty',EDP_CART===0);});}
function addLineToCart(nm,qty){EDP_CART++;edpCartBadges();toast(qty+' '+nm+' added to request cart');}
function addGroupToCart(key,n){EDP_CART+=n;edpCartBadges();toast(n+' lines from "'+key+'" added to request cart');}
function edpSendRequest(){if(EDP_CART===0){toast('Cart is empty — add lines from the plan first');return;}
 const sample=EQLINES.slice(0,Math.min(EDP_CART,EQLINES.length)).map(l=>({name:l.nm,qty:l.qty,dates:MONTHS[l.start]+'–'+MONTHS[Math.min(7,l.start+l.span-1)],costCode:l.code}));
 if(sample.length<EDP_CART)for(let i=sample.length;i<EDP_CART;i++)sample.push({name:'Equipment line '+(i+1),dates:'Per plan',costCode:DEFAULT_COST_CODE});
 openCheckout(sample,{source:'edp',title:'Send equipment request',planName:'Equipment plan request'});}
function edpCodeCheck(){const v=(document.getElementById('edpCode').value||'').replace(/[^0-9.]/g,'');const digits=v.replace(/\./g,'').length;const prev=document.getElementById('edpCodePrev'),st=document.getElementById('edpCodeStatus'),btn=document.getElementById('edpSendBtn');
 prev.textContent=v||'—';
 if(digits===16){st.innerHTML=`<span class="chip ok">${ic('check','ic-14')} 16/16</span>`;btn.style.pointerEvents='';btn.style.opacity='';}
 else{st.innerHTML=`<span class="chip red">${digits}/16</span>`;btn.style.pointerEvents='none';btn.style.opacity='.5';}}
function setEDPGroup(v){CURRENT_EDP_GROUP=v.includes('class')?'Equipment class':v.includes('Scope')?'Scope':'Controlling code';document.getElementById('edp-schedule').innerHTML=buildSchedule(CURRENT_EDP_GROUP);document.getElementById('edp-list').innerHTML=buildList(CURRENT_EDP_GROUP);requestAnimationFrame(initEDPDrag);toast('Grouped by '+CURRENT_EDP_GROUP);}
function toggleGrp(g){g.classList.toggle('collapsed');let n=g.nextElementSibling;while(n&&!n.classList.contains('group')){if(n.classList.contains('line'))n.classList.toggle('hidden',g.classList.contains('collapsed'));n=n.nextElementSibling;}const c=g.querySelector('.caret');if(c)c.style.transform=g.classList.contains('collapsed')?'rotate(-90deg)':'';}
function edpView(el,which){el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));el.classList.add('on');document.getElementById('edp-schedule').classList.toggle('hidden',which!=='sched');document.getElementById('edp-list').classList.toggle('hidden',which!=='list');}
function addEq(){document.getElementById('edp-add').classList.toggle('hidden');}
function initEDPDrag(){const MT=8,M=MONTHS;document.querySelectorAll('#edp-schedule .gbar:not(.gbar-agg)').forEach(bar=>{bar.onmousedown=(e)=>{e.preventDefault();const track=bar.parentElement,tw=track.getBoundingClientRect().width;const sl=parseFloat(bar.style.left),w=parseFloat(bar.style.width),sx=e.clientX;const mv=(ev)=>{let d=(ev.clientX-sx)/tw*100;bar.style.left=Math.max(0,Math.min(100-w,sl+d))+'%';};const up=()=>{document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up);let fr=parseFloat(bar.style.left)/100*MT,sn=Math.round(fr*2)/2;bar.style.left=(sn/MT*100)+'%';const sp=parseFloat(bar.dataset.span),si=Math.floor(sn),eiv=Math.min(MT-1,Math.floor(sn+sp-1));const lab=bar.closest('.g2-row').querySelector('.dates');if(lab)lab.textContent=M[si]+' – '+M[Math.max(si,eiv)];};document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);};});}
function initEDPDragTouch(){document.querySelectorAll('#edp-schedule .gbar:not(.gbar-agg)').forEach(bar=>{bar.ontouchstart=(e)=>{e.preventDefault();const touch=e.touches[0];const track=bar.parentElement,tw=track.getBoundingClientRect().width;const sl=parseFloat(bar.style.left),w=parseFloat(bar.style.width),sx=touch.clientX;const MT=8,M=MONTHS;const mv=(ev)=>{const t=ev.touches[0];let d=(t.clientX-sx)/tw*100;bar.style.left=Math.max(0,Math.min(100-w,sl+d))+'%';};const up=()=>{document.removeEventListener('touchmove',mv);document.removeEventListener('touchend',up);let fr=parseFloat(bar.style.left)/100*MT,sn=Math.round(fr*2)/2;bar.style.left=(sn/MT*100)+'%';const sp=parseFloat(bar.dataset.span),si=Math.floor(sn),eiv=Math.min(MT-1,Math.floor(sn+sp-1));const lab=bar.closest('.g2-row')?.querySelector('.dates');if(lab)lab.textContent=M[si]+' – '+M[Math.max(si,eiv)];};document.addEventListener('touchmove',mv,{passive:false});document.addEventListener('touchend',up);};});}

/* ================= CATALOG DATA ================= */
const PILLARS=['Equipment','Prefab','Procurement','Logistics','Professional services'];
function pillColor(p){return {Equipment:'var(--red)',Prefab:'var(--prefab)',Procurement:'var(--proc)',Logistics:'var(--logistics)','Professional services':'var(--profsvc)'}[p];}
function pillHex(p){return {Equipment:'#DC1D34',Prefab:'#4B7B3F',Procurement:'#B4632B','Logistics':'#6E5AA6','Professional services':'#2E6E63'}[p];}
/* Full 02S catalog — mirrors the five-pillar services deck. Each item: name, category, attrs, monthly rate ($— = quote). */
const CATALOG={
 Equipment:{level:'full',cats:['Earthmoving','Aerial Lifts, Scissor Lifts & Man Lifts','Trucks, Trailers & Sweeper/Scrubbers','Material Handling','Temporary Power & Lighting','Compressors, Breakers & Compactors','Water & Dust Control','Small Tools','Survey Equipment','Cranes','Forklifts','Skid Steers'],items:[
   {n:'Excavator 45–55T',cat:'Earthmoving',attrs:'Hydraulic · dual aux · GPS-ready',rate:'$8,400',kw:'excavator'},
   {n:'Mini excavator 5T',cat:'Earthmoving',attrs:'Zero-tail · rubber track',rate:'$2,900',kw:'excavator'},
   {n:'Dozer D6',cat:'Earthmoving',attrs:'6-way blade · slope assist',rate:'$9,800',kw:'dozer'},
   {n:'Backhoe loader',cat:'Earthmoving',attrs:'4×4 · extendahoe',rate:'$3,400',kw:'backhoe'},
   {n:'Motor scraper',cat:'Earthmoving',attrs:'Self-loading · 24yd',rate:'$12,500',kw:'scraper'},
   {n:'Roller (vibratory)',cat:'Earthmoving',attrs:'Off-road · smooth drum',rate:'$4,100',kw:'roller compactor'},
   {n:'Scissor lift 32ft',cat:'Aerial Lifts, Scissor Lifts & Man Lifts',attrs:'Electric · narrow',rate:'$1,150',kw:'scissor lift'},
   {n:'Boom lift 60ft',cat:'Aerial Lifts, Scissor Lifts & Man Lifts',attrs:'Articulating · diesel',rate:'$3,900',kw:'boom lift'},
   {n:'Straight mast 80ft',cat:'Aerial Lifts, Scissor Lifts & Man Lifts',attrs:'Telescopic · 4WD',rate:'$5,200',kw:'manlift'},
   {n:'Rough-terrain scissor 40ft',cat:'Aerial Lifts, Scissor Lifts & Man Lifts',attrs:'Outriggers · self-propelled',rate:'$1,900',kw:'scissor lift'},
   {n:'Stake bed truck',cat:'Trucks, Trailers & Sweeper/Scrubbers',attrs:'16ft · lift gate',rate:'$2,300',kw:'truck stake bed'},
   {n:'Dump truck 10yd',cat:'Trucks, Trailers & Sweeper/Scrubbers',attrs:'Tandem axle',rate:'$4,600',kw:'dump truck'},
   {n:'Tilt trailer 20T',cat:'Trucks, Trailers & Sweeper/Scrubbers',attrs:'Equipment transport',rate:'$1,400',kw:'trailer tilt'},
   {n:'Vac excavator',cat:'Trucks, Trailers & Sweeper/Scrubbers',attrs:'Hydro/air · 12yd spoil',rate:'$7,800',kw:'vac excavator'},
   {n:'Ride-on floor scrubber',cat:'Trucks, Trailers & Sweeper/Scrubbers',attrs:'Sweeper/scrubber',rate:'$1,200',kw:'scrubber sweeper'},
   {n:'Warehouse forklift 5K',cat:'Forklifts',attrs:'LP · cushion tire',rate:'$1,300',kw:'forklift warehouse'},
   {n:'Telehandler / reach forklift 10K',cat:'Forklifts',attrs:'Rough terrain · 55ft reach',rate:'$4,300',kw:'telehandler reach forklift'},
   {n:'Skid steer (tracked)',cat:'Skid Steers',attrs:'Aux hydraulics · tracked',rate:'$2,100',kw:'skid steer'},
   {n:'Skid steer (wheeled)',cat:'Skid Steers',attrs:'Standard-flow · wheeled',rate:'$1,850',kw:'skid steer'},
   {n:'Pallet jack (electric)',cat:'Material Handling',attrs:'4,500 lb',rate:'$380',kw:'pallet jack material handling'},
   {n:'Material lift',cat:'Material Handling',attrs:'Genie · 24ft',rate:'$260',kw:'material lift handling'},
   {n:'Generator 100kW',cat:'Temporary Power & Lighting',attrs:'Towable · auto-start',rate:'$2,600',kw:'generator power'},
   {n:'Transformer skid',cat:'Temporary Power & Lighting',attrs:'480V · pad-mount',rate:'$1,800',kw:'transformer distribution'},
   {n:'Light tower',cat:'Temporary Power & Lighting',attrs:'LED · solar-hybrid',rate:'$520',kw:'lighting tower'},
   {n:'Battery BESS unit',cat:'Temporary Power & Lighting',attrs:'Silent · 60kWh',rate:'$3,200',kw:'bess battery power'},
   {n:'Distribution panel + cable',cat:'Temporary Power & Lighting',attrs:'Spider box · disconnects',rate:'$640',kw:'distribution panel disconnect breaker'},
   {n:'Air compressor (towable)',cat:'Compressors, Breakers & Compactors',attrs:'185 CFM · diesel',rate:'$780',kw:'air compressor'},
   {n:'Plate compactor',cat:'Compressors, Breakers & Compactors',attrs:'Reversible · 5,000 lbf',rate:'$620',kw:'compactor plate'},
   {n:'Hydraulic breaker',cat:'Compressors, Breakers & Compactors',attrs:'Excavator-mount',rate:'$1,700',kw:'breaker hammer river buster'},
   {n:'Jumping jack rammer',cat:'Compressors, Breakers & Compactors',attrs:'Trench compaction',rate:'$340',kw:'rammer jumping jack tamper'},
   {n:'Water truck 4,000gal',cat:'Water & Dust Control',attrs:'Spray bar · cannon',rate:'$5,400',kw:'water truck dust'},
   {n:'Water tank + pump',cat:'Water & Dust Control',attrs:'Skid · 500gal · stand',rate:'$460',kw:'water pump tank stand'},
   {n:'Dust suppression cannon',cat:'Water & Dust Control',attrs:'Misting · 100ft throw',rate:'$1,100',kw:'dust suppression'},
   {n:'Small tools kit',cat:'Small Tools',attrs:'Handheld field tools',rate:'$340',kw:'tools handheld'},
   {n:'Core drill rig',cat:'Small Tools',attrs:'Wet · up to 12"',rate:'$540',kw:'drill core'},
   {n:'GPS rover + base',cat:'Survey Equipment',attrs:'RTK · layout',rate:'$2,200',kw:'survey gps rover'},
   {n:'Robotic total station',cat:'Survey Equipment',attrs:'One-person layout',rate:'$3,600',kw:'survey total station'},
   {n:'Tower crane (self-erect)',cat:'Cranes',attrs:'Luffing jib · 12T',rate:'$—',nsRate:'$14,800',kw:'crane tower'},
   {n:'Rough-terrain crane 90T',cat:'Cranes',attrs:'Hydraulic · pick & carry',rate:'$—',nsRate:'$11,200',kw:'crane rough terrain'},
   {n:'Truck-mounted crane',cat:'Cranes',attrs:'All-terrain · boom',rate:'$—',nsRate:'$8,600',kw:'crane truck mounted all terrain'}
 ]},
 Prefab:{level:'full',cats:['Concrete','Electrical','Mechanical & plumbing','Steel','Self-perform prefab','Vendor-managed'],items:[
   {n:'Cast-in-place prefab formwork',cat:'Concrete',attrs:'Modular · reusable',rate:'$—',nsRate:'$18,500',kw:'concrete formwork cast in place'},
   {n:'Garage beam system',cat:'Concrete',attrs:'Shop-cast · repeatable',rate:'$—',nsRate:'$24,000',ns:true,kw:'concrete garage beam'},
   {n:'Aluminum gang forms',cat:'Concrete',attrs:'Reusable · fast-cycle',rate:'$—',nsRate:'$9,600',ns:true,kw:'concrete aluminum gang form'},
   {n:'Custom radius formwork (CNC)',cat:'Concrete',attrs:'CNC-cut · curved',rate:'$—',nsRate:'$12,400',ns:true,kw:'concrete radius formwork cnc'},
   {n:'Precast trench products',cat:'Concrete',attrs:'Underground · shop-cast',rate:'$—',nsRate:'$7,800',ns:true,kw:'concrete precast trench'},
   {n:'Prefab electrical room',cat:'Electrical',attrs:'Skid-mounted · pre-wired',rate:'$—',nsRate:'$42,000',kw:'electrical room skid'},
   {n:'Combiner box assemblies (RE)',cat:'Electrical',attrs:'Renewables · pre-tested',rate:'$—',nsRate:'$8,900',ns:true,kw:'electrical combiner box renewable'},
   {n:'Underground conduit racks',cat:'Electrical',attrs:'Pre-built · tagged',rate:'$—',nsRate:'$6,700',ns:true,kw:'electrical conduit rack underground'},
   {n:'UL-listed IC panels',cat:'Electrical',attrs:'Water · UL-listed',rate:'$—',nsRate:'$15,200',ns:true,kw:'electrical ic panel ul listed water'},
   {n:'Prefab MEP rack',cat:'Mechanical & plumbing',attrs:'Multi-trade · pre-tested',rate:'$—',nsRate:'$16,800',kw:'mep rack mechanical multi-trade'},
   {n:'Bathroom pod',cat:'Mechanical & plumbing',attrs:'Fully finished · plumbed',rate:'$—',nsRate:'$28,500',kw:'pod bathroom'},
   {n:'Pipe support skids',cat:'Mechanical & plumbing',attrs:'Shop-fabricated',rate:'$—',nsRate:'$5,400',ns:true,kw:'mechanical pipe support skid'},
   {n:'Pre-assembled trade kit',cat:'Mechanical & plumbing',attrs:'Kitted · sequenced',rate:'$—',nsRate:'$4,200',ns:true,kw:'mechanical kitted trade components'},
   {n:'Structural steel frame',cat:'Steel',attrs:'Shop-welded · coped',rate:'$—',nsRate:'$34,000',kw:'steel structural frame'},
   {n:'Stair + rail module',cat:'Steel',attrs:'Galv · code-compliant',rate:'$—',nsRate:'$11,500',kw:'steel stair rail'},
   {n:'Columns & trusses',cat:'Steel',attrs:'Shop-fabricated',rate:'$—',nsRate:'$22,000',ns:true,kw:'steel columns trusses'},
   {n:'Embeds & misc. metals',cat:'Steel',attrs:'Prefab-ready',rate:'$—',nsRate:'$6,300',ns:true,kw:'steel embeds misc metals'},
   {n:'Self-perform headwall',cat:'Self-perform prefab',attrs:'Level-2 · MEP integrated',rate:'$—',nsRate:'$9,200',kw:'headwall self-perform'},
   {n:'Overhead corridor rack',cat:'Self-perform prefab',attrs:'Rolling · pre-loaded',rate:'$—',nsRate:'$7,100',kw:'corridor rack self-perform'},
   {n:'Multi-trade rack (self-perform)',cat:'Self-perform prefab',attrs:'Coming soon',rate:'$—',kw:'self-perform multi trade rack'},
   {n:'Vendor prefab program',cat:'Vendor-managed',attrs:'Managed · coming soon',rate:'$—',kw:'vendor managed prefab'},
   {n:'Volumetric pods (vendor)',cat:'Vendor-managed',attrs:'Coming soon',rate:'$—',kw:'vendor volumetric pods'}
 ]},
 Procurement:{level:'partial',cats:['Mechanical systems','Electrical systems','Specialties & EV','Steel & metals','Commodities','Safety & consumables'],items:[
   {n:'Mechanical building systems',cat:'Mechanical systems',attrs:'Volume buy · scheduled',rate:'$—',nsRate:'$185,000',kw:'mechanical building systems'},
   {n:'AHU / RTU package',cat:'Mechanical systems',attrs:'Air handlers · rooftop units',rate:'$—',nsRate:'$96,000',ns:true,kw:'mechanical ahu rtu air handler'},
   {n:'Chillers & cooling towers',cat:'Mechanical systems',attrs:'Central plant',rate:'$—',nsRate:'$142,000',ns:true,kw:'mechanical chiller cooling tower'},
   {n:'Electrical building systems',cat:'Electrical systems',attrs:'Gear · generators',rate:'$—',nsRate:'$210,000',kw:'electrical building systems'},
   {n:'Switchgear & distribution',cat:'Electrical systems',attrs:'MV/HV · ATS',rate:'$—',nsRate:'$128,000',ns:true,kw:'electrical switchgear distribution ats'},
   {n:'Generator package',cat:'Electrical systems',attrs:'Standby · paralleled',rate:'$—',nsRate:'$88,000',ns:true,kw:'electrical generator standby'},
   {n:'EV charger package',cat:'Specialties & EV',attrs:'L2 / DCFC · CSI Div 10',rate:'$—',nsRate:'$54,000',kw:'ev charger l2 dcfc'},
   {n:'Wall protection / accessories',cat:'Specialties & EV',attrs:'Toilet & bath accessories',rate:'$—',nsRate:'$16,500',kw:'specialty wall protection toilet bath'},
   {n:'Structural / misc metals',cat:'Steel & metals',attrs:'Prefab-ready · Unistrut',rate:'$—',nsRate:'$72,000',kw:'steel metal structural unistrut'},
   {n:'Renewable energy piles',cat:'Steel & metals',attrs:'Solar · driven piles',rate:'$—',nsRate:'$38,000',ns:true,kw:'steel renewable energy piles solar'},
   {n:'Core construction commodities',cat:'Commodities',attrs:'Rebar · lumber · pipe',rate:'$—',nsRate:'$64,000',kw:'commodity rebar lumber pipe'},
   {n:'Concrete inputs (volume)',cat:'Commodities',attrs:'Scale buy · hedged',rate:'$—',nsRate:'$41,000',ns:true,kw:'commodity concrete inputs'},
   {n:'Safety supplies bundle',cat:'Safety & consumables',attrs:'PPE · signage · barricade',rate:'$—',nsRate:'$12,800',kw:'safety ppe supplies'},
   {n:'Small tools & disposables',cat:'Safety & consumables',attrs:'Volume buy · ~100 SKUs',rate:'$—',nsRate:'$8,400',kw:'tools consumable disposables'},
   {n:'Office consumables program',cat:'Safety & consumables',attrs:'Recurring · trailers',rate:'$—',nsRate:'$3,600',ns:true,kw:'office consumables program'}
 ]},
 Logistics:{level:'category',cats:['Site Signage','Drinking Water & Ice','Trailers/Trailer City Setup','Street Sweeping & Cleaning','Waste Hauling & Recycling','Restrooms & Sanitation','Consumables','Pest Control','Security','Site Mobilization & Remobilization','Temporary Power & Utilities','Transportation & Warehousing'],items:[
   {n:'Site signage package',cat:'Site Signage',attrs:'Safety & wayfinding signage',rate:'$—',nsRate:'$1,450',kw:'signage'},
   {n:'Custom safety sign set',cat:'Site Signage',attrs:'Site-specific · printed',rate:'$—',nsRate:'$680',ns:true,kw:'signage custom safety'},
   {n:'Drinking water & ice service',cat:'Drinking Water & Ice',attrs:'Scheduled delivery',rate:'$—',nsRate:'$920',kw:'water ice'},
   {n:'Bottled water program',cat:'Drinking Water & Ice',attrs:'Recurring · per crew size',rate:'$—',nsRate:'$540',ns:true,kw:'water bottled'},
   {n:'Trailer city setup',cat:'Trailers/Trailer City Setup',attrs:'Office trailers · hookups',rate:'$—',nsRate:'$8,600',kw:'trailer city'},
   {n:'Office trailer (single)',cat:'Trailers/Trailer City Setup',attrs:'8×20 · furnished',rate:'$—',nsRate:'$1,150',ns:true,kw:'trailer office'},
   {n:'Storage container 40ft',cat:'Trailers/Trailer City Setup',attrs:'Weather-tight · lockable',rate:'$—',nsRate:'$320',ns:true,kw:'container storage'},
   {n:'Street sweeping (scheduled)',cat:'Street Sweeping & Cleaning',attrs:'SWPPP compliant',rate:'$—',nsRate:'$2,400',kw:'sweeping street'},
   {n:'Site janitorial service',cat:'Street Sweeping & Cleaning',attrs:'Recurring · trailers + offices',rate:'$—',nsRate:'$1,800',ns:true,kw:'cleaning janitorial'},
   {n:'Waste hauling & recycling',cat:'Waste Hauling & Recycling',attrs:'Roll-off · diversion tracking',rate:'$—',nsRate:'$3,100',kw:'waste recycling'},
   {n:'Roll-off dumpster (40yd)',cat:'Waste Hauling & Recycling',attrs:'Haul + swap included',rate:'$—',nsRate:'$780',ns:true,kw:'dumpster roll-off'},
   {n:'Restrooms & sanitation',cat:'Restrooms & Sanitation',attrs:'Units · hand-wash stations',rate:'$—',nsRate:'$650',kw:'restroom sanitation'},
   {n:'ADA restroom unit',cat:'Restrooms & Sanitation',attrs:'Serviced weekly',rate:'$—',nsRate:'$310',ns:true,kw:'restroom ada'},
   {n:'Site consumables restock',cat:'Consumables',attrs:'Recurring restock program',rate:'$—',nsRate:'$1,200',kw:'consumables'},
   {n:'Pest control service',cat:'Pest Control',attrs:'Scheduled treatment',rate:'$—',nsRate:'$540',kw:'pest control'},
   {n:'Site security (guard)',cat:'Security',attrs:'Guard · turnstile · cameras',rate:'$—',nsRate:'$9,400',kw:'security guard'},
   {n:'Camera / turnstile package',cat:'Security',attrs:'Access control · monitored',rate:'$—',nsRate:'$2,700',ns:true,kw:'security camera turnstile'},
   {n:'Site mobilization / demob',cat:'Site Mobilization & Remobilization',attrs:'Mobilize / demobilize',rate:'$—',nsRate:'$12,000',kw:'mobilization'},
   {n:'Temporary power & utilities',cat:'Temporary Power & Utilities',attrs:'Temp service · distribution',rate:'$—',nsRate:'$4,800',kw:'power utility temp'},
   {n:'Vetted carrier freight (FTL)',cat:'Transportation & Warehousing',attrs:'Qualified carrier · per load',rate:'$—',nsRate:'$3,400',ns:true,kw:'freight carrier transportation ftl'},
   {n:'Warehousing & storage (mo.)',cat:'Transportation & Warehousing',attrs:'Managed · TMS + inventory',rate:'$—',nsRate:'$5,600',ns:true,kw:'warehouse storage transportation'},
   {n:'OFCI/CFCI receiving & handling',cat:'Transportation & Warehousing',attrs:'Owner/contractor-furnished',rate:'$—',nsRate:'$2,100',ns:true,kw:'ofci cfci receiving transportation'}
 ]},
 'Professional services':{level:'category',cats:['Subsurface Utility Mapping (SUM)','Geospatial (GEO)','Building Automation Systems (BAS)','Medical Equipment Planning (OFE)','Infrared Thermography (IRT)','Enhanced Visualization (VIZ)'],items:[
   {n:'Subsurface utility mapping',cat:'Subsurface Utility Mapping (SUM)',attrs:'2D exhibit · 3D utility model',rate:'$—',nsRate:'$14,500',kw:'sum utility mapping'},
   {n:'Electro-magnetic locate (EM)',cat:'Subsurface Utility Mapping (SUM)',attrs:'SUM service tool',rate:'$—',nsRate:'$3,200',ns:true,kw:'sum em electromagnetic locate'},
   {n:'Ground penetrating radar (GPR)',cat:'Subsurface Utility Mapping (SUM)',attrs:'SUM service tool',rate:'$—',nsRate:'$3,800',ns:true,kw:'sum gpr radar'},
   {n:'Acoustic pipe locate (APL)',cat:'Subsurface Utility Mapping (SUM)',attrs:'SUM service tool',rate:'$—',nsRate:'$2,900',ns:true,kw:'sum apl acoustic pipe'},
   {n:'CCTV pipe inspection',cat:'Subsurface Utility Mapping (SUM)',attrs:'Closed-circuit television',rate:'$—',nsRate:'$2,600',ns:true,kw:'sum cctv pipe inspection'},
   {n:'Geospatial survey & layout',cat:'Geospatial (GEO)',attrs:'Survey & location data',rate:'$—',nsRate:'$6,400',kw:'geo survey layout'},
   {n:'Field engineering / layout',cat:'Geospatial (GEO)',attrs:'Construction layout · as-builts',rate:'$—',nsRate:'$4,900',ns:true,kw:'geo field engineering layout'},
   {n:'Utility locates (private)',cat:'Geospatial (GEO)',attrs:'Private marking · concrete scan',rate:'$—',nsRate:'$2,400',ns:true,kw:'geo utility locate private'},
   {n:'Machine control support',cat:'Geospatial (GEO)',attrs:'On-site setup · remote support',rate:'$—',nsRate:'$3,300',ns:true,kw:'geo machine control'},
   {n:'Building automation coordination',cat:'Building Automation Systems (BAS)',attrs:'Controls · commissioning',rate:'$—',nsRate:'$18,000',kw:'bas automation controls'},
   {n:'Sequence of operations review',cat:'Building Automation Systems (BAS)',attrs:'Design intent verification',rate:'$—',nsRate:'$5,200',ns:true,kw:'bas sequence operations'},
   {n:'Commissioning assistance',cat:'Building Automation Systems (BAS)',attrs:'Testing · turnover support',rate:'$—',nsRate:'$7,800',ns:true,kw:'bas commissioning'},
   {n:'Medical equipment planning',cat:'Medical Equipment Planning (OFE)',attrs:'OFE · room-by-room lists',rate:'$—',nsRate:'$16,500',kw:'ofe medical equipment planning'},
   {n:'OFE procurement & logistics',cat:'Medical Equipment Planning (OFE)',attrs:'Delivery + install tracking',rate:'$—',nsRate:'$8,400',ns:true,kw:'ofe procurement logistics'},
   {n:'Infrared thermography scan',cat:'Infrared Thermography (IRT)',attrs:'Thermal imaging · reporting',rate:'$—',nsRate:'$4,600',kw:'irt thermal thermography'},
   {n:'Building envelope IR survey',cat:'Infrared Thermography (IRT)',attrs:'Moisture · insulation gaps',rate:'$—',nsRate:'$3,700',ns:true,kw:'irt envelope moisture insulation'},
   {n:'Electrical panel IR scan',cat:'Infrared Thermography (IRT)',attrs:'Hot spots · load issues',rate:'$—',nsRate:'$2,200',ns:true,kw:'irt electrical panel scan'},
   {n:'Enhanced visualization',cat:'Enhanced Visualization (VIZ)',attrs:'Renderings · animations',rate:'$—',nsRate:'$9,800',kw:'viz visualization renderings'},
   {n:'Architectural rendering',cat:'Enhanced Visualization (VIZ)',attrs:'Photoreal · marketing-ready',rate:'$—',nsRate:'$3,400',ns:true,kw:'viz architectural rendering'},
   {n:'4D animation video',cat:'Enhanced Visualization (VIZ)',attrs:'Schedule-linked sequence',rate:'$—',nsRate:'$6,200',ns:true,kw:'viz 4d animation video'},
   {n:'Immersive virtual tour',cat:'Enhanced Visualization (VIZ)',attrs:'Walkthrough · fly-through',rate:'$—',nsRate:'$5,100',ns:true,kw:'viz virtual tour immersive'}
 ]}
};
/* ===== PILLAR_META — verbatim language & structure from the 02S Digital Catalog ===== */
const PILLAR_META={
 Equipment:{
  tagline:'Equipment',
  intro:'The 02S Equipment Pillar centralizes how McCarthy owns, manages, and deploys vehicles, owned and rented equipment, fleet/personal assets, CCEP, and fuel across the business.',
  offerings:[
   {t:'02S Equipment',d:'A single 02S Equipment team supporting your project across owned fleet and external supply.'},
   {t:'Contractor Controlled Equipment Program (CCEP)',d:'A project-specific equipment program where McCarthy centrally manages trade partners through a single, “on-site” yard.'},
   {t:'Fleet & Personal Assets',d:'Vehicles, fuel cards, phones, tablets, and laptops designed to safety and compliance for end-to-end support.'},
   {t:'Fuel Program',d:'Centralized fuel procurement for jobsite fueling, forecasting, and reporting.'}
  ],
  benefits:[
   {t:'Simpler Support',d:'One team to contact for equipment needs across owned and externally sourced equipment.'},
   {t:'Better Value',d:'We prioritize owned fleet when available and secure competitive external supply when it is not.'},
   {t:'Faster Response',d:'Better planning and coordinated sourcing help equipment arrive when needed.'},
   {t:'Clearer Visibility',d:'Standardized coordination, billing, and reporting make equipment easier to track and manage.'},
   {t:'Less Distraction for the Field',d:'Project teams stay focused on building while 02S manages sourcing and equipment support.'}
  ],
  works:[
   {t:'Identify a Need',d:'Your superintendent identifies a rental need (e.g. Lift, Forklift, Light Tower) for your project.'},
   {t:'Engage Your RSI',d:''},
   {t:'02S Sources Equipment',d:'The Equipment Team chooses the right vendor from a network of preferred vendors at standard rates.'},
   {t:'Equipment is Delivered',d:'Equipment is tracked as “on-rent,” providing accurate reporting and reconciliation.'},
   {t:'Vendors Bill EMP',d:'The Equipment Team will allocate the cost to your project.'}
  ]},
 Logistics:{
  tagline:'Logistics',
  intro:'The logistics pillar centralizes GC/GR site services, transportation, and warehousing to simplify mobilization.',
  offerings:[
   {t:'GC/GR Services',d:'Centralized management of non-permanent site services (trailers, temp power, security, waste, ice, cleaning, etc.) with preferred vendors and published rates.'},
   {t:'Transportation & Warehousing',d:'National and regional carrier and storage solutions to move and hold OFCI/CFCI and other materials, integrated with TMS and inventory management.'}
  ],
  benefits:[
   {t:'Faster Mobilization',d:'Makes it easier to get up and running.'},
   {t:'Smoother Site Operations',d:'Helps keep jobsites running efficiently.'},
   {t:'Less Administrative Burden',d:'Reduces coordination and paperwork for project teams.'},
   {t:'More Consistent Service',d:'Uses standard processes and preferred vendors.'},
   {t:'Better Schedule Control',d:'Improves planning and helps projects stay on track.'}
  ],
  works:[
   {t:'Engage Your RSI',d:'Engage in preconstruction to understand site constraints and schedule.'},
   {t:'Plan',d:'Build the GC/GR plan for trailers, temp power, restrooms, waste, and other services.'},
   {t:'Source Services',d:'Implement the plan through preferred vendors.'},
   {t:'Execute',d:'Deliver services on site per plan.'},
   {t:'Adjust Support',d:'Maintain and adjust as scope and phase change.'},
   {t:'Demobilize/Closeout',d:'Coordinate demobilization and closeout.'}
  ]},
 Prefab:{
  tagline:'Prefabrication',
  intro:'A systematic way of delivering projects using standardized designs and assemblies, offsite manufacturing, and just-in-time logistics and field installation.',
  offerings:[
   {t:'Concrete',d:''},{t:'Electrical',d:''},{t:'Mechanical & Plumbing',d:''},{t:'Steel',d:''},
   {t:'Self-Perform Prefab Products',d:'Coming soon'},{t:'Vendor-Managed Prefab Programs',d:'Coming soon'}
  ],
  benefits:[
   {t:'Safer, Lower-Risk Delivery',d:'Moves more work offsite into controlled shop environments to improve safety and reduce labor risk.'},
   {t:'Faster Project Delivery',d:'Uses modular and prefabricated solutions to accelerate schedules and support compression.'},
   {t:'More Consistent Execution',d:'Drives efficiency through repeatable products and standardized approaches.'},
   {t:'Stronger Market Differentiation',d:'Supports national program delivery and helps stand out across key sectors.'}
  ],
  works:[
   {t:'Productization',d:'Engage Your RSI and Prefab leads during the pursuit or early design to identify repeatable elements and IC opportunities.'},
   {t:'DfMA',d:'Design for Manufacturing and Assembly is an Owner+AE validated strategy that embeds designs for efficient prefabrication and assembly.'},
   {t:'Fabrication',d:'Fabrication of products starts as soon as design is locked in to ensure products show up in time to deliver schedule savings for the project.'},
   {t:'Sequence',d:'The project team ensures appropriate sequencing is aligned with Prefab Logistics so assembly onsite can be executed without any issues.'}
  ]},
 Procurement:{
  tagline:'Procurement',
  intro:'Centrally sources and manages key building systems and materials, from mechanical and electrical systems to specialties, EV chargers, steel, commodities, prefab, self-perform volume buys, and safety supplies and consumables.',
  offerings:[
   {t:'Mechanical Systems',d:'Mechanical, Building Systems'},
   {t:'Electrical Systems',d:'Electrical, Building Systems, Generators'},
   {t:'Specialties/CSI Div. 10 & Electrical Vehicle (EV) Chargers',d:'Wall protection, Toilet & Bath Accessories, EV Chargers'},
   {t:'Steel & Metals',d:'Structural, Prefab, Misc Metals'},
   {t:'Commodity',d:'Core Construction Commodities'},
   {t:'Self-Perform & Prefab Volume Buys',d:'Supporting Hero Products'},
   {t:'Safety Supplies and Consumables Volume Buys',d:'PPE, Small Tools, Disposables, Office Consumables'}
  ],
  benefits:[
   {t:'Buying Power',d:'Combines national scale, data, technology, and supplier strategy.'},
   {t:'Cost Reduction',d:'Lowers costs through coordinated procurement programs.'},
   {t:'Risk Mitigation',d:'Improves control and reduces supply chain risk.'},
   {t:'Reliability',d:'Increases consistency, performance, and project support.'},
   {t:'Sourcing',d:'Secures equipment, materials, commodities, and services.'},
   {t:'Supply Chain',d:'Improves pricing, lead times, and inventory availability.'}
  ],
  works:[
   {t:'Engage Your RSI',d:'Project teams or RSIs flag procurement program needs (OFE, MEP equipment, commodities, safety).'},
   {t:'Evaluate Requirement',d:'Procurement confirms whether the requirement is a fungible catalog item or engineered/custom.'},
   {t:'Select Sourcing Path',d:'Run the appropriate sourcing path: MSA Work Authorization, Contract PO Long or Short Form, Simple PO.'},
   {t:'Supplier, Pricing & Terms',d:'Manage supplier selection, pricing and terms.'},
   {t:'Coordinate & Execute',d:'Coordinate with project teams, vendors and other pillars.'},
   {t:'Deliver & Approve',d:'Manage submittals, delivery, approvals, and closeout documents to close the loop.'}
  ]},
 'Professional services':{
  tagline:'Professional Services',
  intro:'Unifies subsurface utility mapping, geospatial, building automation systems, medical equipment planning, infrared thermography, and enhanced visualization into one integrated center of excellence.',
  offerings:[
   {t:'Subsurface Utility Mapping (SUM)',d:'Identifying and mapping underground utilities to reduce risk before construction.'},
   {t:'Geospatial (GEO)',d:'Providing survey and location data to support planning, design, and construction.'},
   {t:'Building Automation Systems (BAS)',d:'Coordinating building controls so systems operate efficiently and as intended.'},
   {t:'Medical Equipment Planning (OFE)',d:'Planning owner-furnished equipment so procurement, delivery, and installation stay aligned.'},
   {t:'Infrared Thermography (IRT)',d:'Using thermal imaging to find hidden moisture, insulation, or electrical issues.'},
   {t:'Enhanced Visualization (VIZ)',d:'Creating visual tools like renderings and animations to improve understanding and decision-making.'}
  ],
  benefits:[
   {t:'Reduced Utility Strike Risk',d:'SUM provides a more reliable understanding of underground conditions before excavation begins.'},
   {t:'Improved Design Decisions',d:'More accurate utility information allows design teams to plan with greater confidence.'},
   {t:'Fewer Change Orders',d:'Better visibility into existing utilities helps teams avoid surprises that lead to scope changes.'},
   {t:'Less Schedule Delay',d:'Identifying underground conflicts early reduces disruptions during construction.'},
   {t:'Safer Excavation and Shoring',d:'Clearer subsurface conditions support safer field operations and better risk management.'}
  ],
  works:[
   {t:'Engage Your RSI',d:''},
   {t:'Gather Information',d:'Collect existing records and project details.'},
   {t:'Investigate',d:'Use electromagnetic locating, GPR, and other methods to identify utilities and assign quality levels.'},
   {t:'Create',d:'Process the data into utility base maps and models that work with design and BIM.'},
   {t:'Share',d:'Provide findings to the project team and designers, and support utility verification during construction as needed.'}
  ]}
};
function pillMeta(p){return PILLAR_META[p]||PILLAR_META.Equipment;}
let CURRENT_PILLAR='Equipment';
let CURRENT_CAT='__all__';
let CAT_VIEW='landing'; /* 'landing' = pillar overview, 'pillar' = category grid for CURRENT_PILLAR */
function catSetPillar(p){CURRENT_PILLAR=p;CURRENT_CAT='__all__';CAT_VIEW='pillar';renderCatalog();}
function catEnterPillar(p){CURRENT_PILLAR=p;CURRENT_CAT='__all__';CAT_VIEW='pillar';renderCatalog();window.scrollTo(0,0);}
function catBackToLanding(){CAT_VIEW='landing';renderCatalog();window.scrollTo(0,0);}
function catPick(cat){CURRENT_CAT=cat;renderCatGrid();document.querySelectorAll('.cat-tree a').forEach(a=>a.classList.toggle('on',a.dataset.cat===cat));}
/* Inline SVG product thumbnails — brand-colored, glyph per category, no external image dependency */
const THUMB_GLYPHS={
 'Earthmoving':'<path d="M14 44h30l4-10h10v10h6" stroke-width="3"/><rect x="44" y="30" width="14" height="8" rx="1"/><circle cx="22" cy="48" r="6"/><circle cx="42" cy="48" r="6"/><path d="M14 34l6-8h12l4 8" stroke-width="3"/>',
 'Aerial & lifts':'<rect x="26" y="14" width="20" height="10" rx="1.5"/><path d="M30 24l-6 18M42 24l6 18" stroke-width="3"/><path d="M34 24v14M38 24v14" stroke-width="2.5"/><rect x="18" y="42" width="36" height="7" rx="1.5"/>',
 'Trucks & trailers':'<rect x="12" y="26" width="26" height="16" rx="2"/><path d="M38 30h10l6 6v6H38z" stroke-width="3"/><circle cx="22" cy="46" r="5"/><circle cx="46" cy="46" r="5"/>',
 'Material handling':'<path d="M20 44V16h6v28" stroke-width="3"/><path d="M26 20h18M26 30h18" stroke-width="3"/><path d="M44 20v14" stroke-width="3"/><rect x="38" y="40" width="14" height="8" rx="1"/><circle cx="24" cy="50" r="4"/>',
 'Power & lighting':'<rect x="18" y="22" width="36" height="22" rx="2"/><path d="M26 22v-4h20v4" stroke-width="3"/><path d="M30 30l-4 8h8l-4 8" stroke-width="2.5" stroke-linejoin="round"/>',
 'Compaction & breaking':'<rect x="24" y="16" width="24" height="10" rx="2"/><path d="M30 26v8M42 26v8" stroke-width="3"/><ellipse cx="36" cy="44" rx="18" ry="7"/>',
 'Water & dust control':'<path d="M36 14c8 10 12 16 12 22a12 12 0 0 1-24 0c0-6 4-12 12-22z" stroke-width="3" stroke-linejoin="round"/>',
 'Small tools':'<path d="M40 20a8 8 0 0 0-11 10L16 43l5 5 13-13a8 8 0 0 0 10-11l-6 6-4-4z" stroke-width="3" stroke-linejoin="round"/>',
 'Survey':'<path d="M36 18v10M28 46l8-18 8 18" stroke-width="3" stroke-linejoin="round"/><circle cx="36" cy="16" r="3"/><path d="M24 48h24" stroke-width="3"/>',
 'Cranes':'<path d="M20 50V16h4l24 8" stroke-width="3" stroke-linejoin="round"/><path d="M24 16h20M40 24v8" stroke-width="3"/><rect x="18" y="50" width="12" height="4"/>',
 'Concrete':'<rect x="18" y="24" width="36" height="20" rx="2"/><path d="M18 34h36" stroke-width="2.5"/><circle cx="27" cy="29" r="1.5"/><circle cx="45" cy="39" r="1.5"/>',
 'Electrical':'<path d="M38 14l-12 22h10l-4 16 14-24H36z" stroke-width="3" stroke-linejoin="round"/>',
 'Mechanical & plumbing':'<rect x="20" y="16" width="32" height="34" rx="2"/><path d="M20 26h32M20 36h32" stroke-width="2.5"/><circle cx="28" cy="21" r="2"/><circle cx="28" cy="31" r="2"/>',
 'Steel':'<path d="M18 20h36l-6 10H24zM24 30v18M48 30v18M24 40h24" stroke-width="3" stroke-linejoin="round"/>',
 'Self-perform prefab':'<rect x="18" y="20" width="36" height="28" rx="2"/><path d="M36 20v28" stroke-width="2.5"/><rect x="24" y="28" width="6" height="6"/><rect x="42" y="28" width="6" height="6"/>',
 'Vendor-managed':'<rect x="20" y="22" width="32" height="24" rx="2"/><path d="M20 30h32" stroke-width="2.5"/><path d="M30 22v-4h12v4" stroke-width="3"/>',
 'default':'<rect x="20" y="20" width="32" height="26" rx="2"/><path d="M20 28h32" stroke-width="2.5"/>'
};
/* aliases so renamed catalog categories keep meaningful glyphs */
THUMB_GLYPHS['Aerial Lifts, Scissor Lifts & Man Lifts']=THUMB_GLYPHS['Aerial & lifts'];
THUMB_GLYPHS['Trucks, Trailers & Sweeper/Scrubbers']=THUMB_GLYPHS['Trucks & trailers'];
THUMB_GLYPHS['Material Handling']=THUMB_GLYPHS['Material handling'];
THUMB_GLYPHS['Temporary Power & Lighting']=THUMB_GLYPHS['Power & lighting'];
THUMB_GLYPHS['Compressors, Breakers & Compactors']=THUMB_GLYPHS['Compaction & breaking'];
THUMB_GLYPHS['Water & Dust Control']=THUMB_GLYPHS['Water & dust control'];
THUMB_GLYPHS['Small Tools']=THUMB_GLYPHS['Small tools'];
THUMB_GLYPHS['Survey Equipment']=THUMB_GLYPHS['Survey'];
THUMB_GLYPHS['Forklifts']=THUMB_GLYPHS['Material handling'];
THUMB_GLYPHS['Skid Steers']=THUMB_GLYPHS['Earthmoving'];
function prodThumb(cat,color){const g=THUMB_GLYPHS[cat]||THUMB_GLYPHS.default;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 72"><rect width="180" height="72" fill="${color}" opacity="0.09"/><g transform="translate(54,4)" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.82">${g}</g></svg>`;
 return 'data:image/svg+xml;base64,'+btoa(svg);}
function effRate(it,ns){return (ns&&it.nsRate)?it.nsRate:it.rate;}
function isComingSoon(it){return /coming soon/i.test(it.attrs||'');}
function rateBlock(it,ns){if(isComingSoon(it))return `<div class="rate"><span class="soon-pill">Coming soon</span></div>`;const r=effRate(it,ns);return `<div class="rate"><b>${r}</b><span>${r==='$—'?'quote':'/mo · 02S rate'}</span></div>`;}
function prodCard(it){const color=pillHex(CURRENT_PILLAR);const lead=LEADTIME(it.n);return `<div class="prod" onclick="addToOrder('${esc(it.n)}')"><div class="pimg" style="background-image:url(&quot;${prodThumb(it.cat,color)}&quot;)"><span class="pcat">${it.cat}</span></div><div class="pb"><div class="pn">${it.n}</div><div class="attrs">${it.attrs}</div>${rateBlock(it,false)}<div class="plead">${ic('clock','ic-14')} ${lead}</div></div><button class="addbtn" onclick="event.stopPropagation();addToOrder('${esc(it.n)}')">${ic('cart','ic-14')} Add to order</button></div>`;}
function prodCardNS(it){const color=pillHex(CURRENT_PILLAR);const lead=LEADTIME(it.n);return `<div class="prod" onclick="addToOrder('${esc(it.n)}')"><div class="pimg" style="background-image:url(&quot;${prodThumb(it.cat,color)}&quot;)"><span class="pcat">${it.cat}</span></div><div class="pb"><div class="pn">${it.n}</div><div class="attrs">${it.attrs}</div>${rateBlock(it,true)}<div class="plead">${ic('clock','ic-14')} ${lead}</div><div class="pactions"><button class="mini-a" onclick="event.stopPropagation();toast('Spec sheet opened (demo)')">${ic('file','ic-14')} Specs</button><button class="mini-a" onclick="event.stopPropagation();toast('Saved to a list (demo)')">${ic('clipboard','ic-14')} Save</button></div></div><button class="addbtn" onclick="event.stopPropagation();addToOrder('${esc(it.n)}')">${ic('cart','ic-14')} Add to order</button></div>`;}
/* V1 category tile — for category-level pillars (Logistics, Prof services), shows the category not individual products */
function catTile(cat,count){const color=pillHex(CURRENT_PILLAR);return `<div class="prod cat-only cat-tile" onclick="catPick('${esc(cat)}')"><div class="pimg" style="background-image:url(&quot;${prodThumb(cat,color)}&quot;)"><span class="pcat">Category</span></div><div class="pb"><div class="pn">${cat}</div><div class="attrs">${count} ${count===1?'offering':'offerings'} · request through guided path</div><div class="rate"><b style="font-size:13px;color:var(--gray-500)">Scoped per project</b></div></div><button class="addbtn" style="background:var(--charcoal)" onclick="event.stopPropagation();nav('portal','p-browse')">${ic('edit','ic-14')} Start a request</button></div>`;}
function LEADTIME(name){const opts=['Ready in 2–3 days','~1 week lead','Ready this week','~2 week lead'];return opts[name.length%4];}
/* ---- On-demand browse & checkout: live type-ahead + dynamic request cart ---- */
function parseRate(rate){const n=parseInt(String(rate).replace(/[^0-9]/g,''));return isNaN(n)?0:n;}
let BROWSE_CART=[{name:'Excavator 45–55T',rate:8400,qty:2,pillar:'Equipment',quote:false,code:'01020034.3005.2000'}];
function resetBrowseCart(){BROWSE_CART=[{name:'Excavator 45–55T',rate:8400,qty:2,pillar:'Equipment',quote:false,code:'01020034.3005.2000'}];NS_BUNDLE=[];NS_BUNDLE_EDIT=false;}
const DEFAULT_COST_CODE='01020034.3005.2000';
function codeDigits(code){return String(code||'').replace(/[^0-9]/g,'').length;}
function codeValid(code){return codeDigits(code)===16;}
function allLinesCoded(){return BROWSE_CART.every(it=>codeValid(it.code));}
function cartLineSetCode(i,val){if(BROWSE_CART[i]){BROWSE_CART[i].code=val;}updateCartBadges();}
function money(n){return '$'+n.toLocaleString('en-US');}
function browseReqLinesHTML(){if(!BROWSE_CART.length)return `<div class="cl" style="color:var(--gray-500)">No items yet — search the catalog and add what you need.</div>`;
 return BROWSE_CART.map((it,i)=>`<div class="cl req-cl"><span class="req-nm">${it.name}<span class="req-qty"><button onclick="browseQty(${i},-1)">−</button><b>${it.qty}</b><button onclick="browseQty(${i},1)">+</button></span></span><span class="req-amt">${it.quote?'quote':money(it.rate*it.qty)}<button class="req-x" onclick="browseRemove(${i})" title="Remove">${ic('close','ic-14')}</button></span></div>`).join('')+`<div class="cl"><span>Delivery &amp; mobilization</span><span>incl.</span></div>`;}
function browseReqTotal(){const anyQuote=BROWSE_CART.some(it=>it.quote);const sum=BROWSE_CART.reduce((s,it)=>s+(it.quote?0:it.rate*it.qty),0);return money(sum)+(anyQuote?' + quote':'');}
function browseCartRefresh(){const l=document.getElementById('reqLines');if(l)l.innerHTML=browseReqLinesHTML();const t=document.getElementById('reqTotal');if(t)t.textContent=browseReqTotal();}
function browseQty(i,d){BROWSE_CART[i].qty=Math.max(1,BROWSE_CART[i].qty+d);browseCartRefresh();}
function browseRemove(i){const nm=BROWSE_CART[i].name;BROWSE_CART.splice(i,1);browseCartRefresh();toast(nm+' removed from request');}
function browseAllItems(){let out=[];Object.keys(CATALOG).forEach(p=>{(CATALOG[p].items||[]).forEach(it=>out.push({...it,pillar:p}));});return out;}
function browseFill(q){const inp=document.getElementById('browseSearch');if(inp){inp.value=q;browseSearch();inp.focus();}}
function browseSearch(){const inp=document.getElementById('browseSearch'),ta=document.getElementById('browseTA');if(!inp||!ta)return;const q=inp.value.trim().toLowerCase();
 if(!q){ta.innerHTML='';return;}
 const hits=browseAllItems().filter(it=>(it.n+' '+it.attrs+' '+(it.kw||'')+' '+it.cat+' '+it.pillar).toLowerCase().includes(q)).slice(0,6);
 let h=hits.map((it,i)=>`<div class="ta" onclick="browseAdd('${esc(it.n)}','${esc(it.rate)}','${esc(it.cat)}','${esc(it.pillar)}')"><span><b>${it.n}</b> · ${it.cat} <span style="color:var(--gray-500);font-size:11px">(${it.pillar})</span></span><span style="display:flex;gap:10px;align-items:center">${i===0?'<span class="aimatch">Top match</span>':''}<span style="color:var(--gray-500)">${it.rate==='$—'?'quote':it.rate+'/mo'}</span></span></div>`).join('');
 h+=`<div class="ta cust" onclick="browsePath(null,'cust')"><span>Can't find it? Start a custom request</span><span>${ic('chevronRight','ic-14')}</span></div>`;
 ta.innerHTML=h;}
// Maps catalog item names to their actual equipment demand plan entries.
// Only items in this map will trigger the reconcile panel — no false positives.
const PLAN_ITEM_MAP={
 'Excavator 45–55T':{phase:'Sitework & Civil',dates:'Jun–Nov'},
 'Scissor lift 32ft':{phase:'MEP / Electrical rough-in',dates:'Oct–Jan'},
 'Telehandler / reach forklift 10K':{phase:'Structure',dates:'Aug–Dec'},
 'Tower crane (self-erect)':{phase:'Structure',dates:'Aug–Oct'},
};
function browseAdd(name,rate,cat,pillar){const cart=document.getElementById('browseCart');const eq=pillar==='Equipment';const quote=(rate==='$—');
 const existing=BROWSE_CART.find(it=>it.name===name);
 if(existing){existing.qty++;}else{BROWSE_CART.push({name,rate:parseRate(rate),qty:1,pillar,quote,code:DEFAULT_COST_CODE});}
 browseCartRefresh();updateCartBadges();
 const planMatch=eq&&PLAN_ITEM_MAP[name];
 cart.innerHTML=`${planMatch?`<div class="reconcile">${ic('link','ic-16')}<div><b>This matches a plan item.</b> "${name}" is on your equipment demand plan (${planMatch.phase}, ${planMatch.dates}). Linking avoids double-counting demand.</div><div class="rc-acts"><button class="btn primary sm" onclick="toast('Linked to plan item')">Link to plan</button><button class="btn sm" onclick="toast('Logged as new need')">New need</button></div></div>`:''}
   <div class="add-conf">${ic('check','ic-14')} <b>${name}</b> added to your request → <span style="color:var(--gray-500)">see the cart on the right</span></div>`;
 document.getElementById('browseTA').innerHTML='';document.getElementById('browseSearch').value='';
 toast(name+' added to your request');}
function nsAssistFill(q){const inp=document.getElementById('nsAssist');if(inp){inp.value=q;nsAssistRun();inp.focus();}}
/* ---- Browse & checkout: full visual catalog displayed below the type-ahead ---- */
let BROWSE_CAT_PILLAR='Equipment';
function browseCatSetPillar(p){BROWSE_CAT_PILLAR=p;const g=document.getElementById('browseCatGrid');if(g)g.innerHTML=browseCatGridHTML();document.querySelectorAll('#browseCatPills .bcp').forEach(el=>el.classList.toggle('on',el.dataset.p===p));}
function browseCatGridHTML(){const p=BROWSE_CAT_PILLAR,data=CATALOG[p],ns=effMode('p-browse')==='northstar';
 const catV1=!ns&&data.level==='category';
 if(catV1){return data.cats.filter(c=>data.items.some(it=>!it.ns&&it.cat===c)).map(c=>{const cnt=data.items.filter(it=>!it.ns&&it.cat===c).length;const color=pillHex(p);return `<div class="prod cat-only cat-tile" onclick="browsePath(null,'cust')"><div class="pimg" style="background-image:url(&quot;${prodThumb(c,color)}&quot;)"><span class="pcat">Category</span></div><div class="pb"><div class="pn">${c}</div><div class="attrs">${cnt} ${cnt===1?'offering':'offerings'} · request through guided path</div><div class="rate"><b style="font-size:13px;color:var(--gray-500)">Scoped per project</b></div></div><button class="addbtn" style="background:var(--charcoal)" onclick="event.stopPropagation();browsePath(null,'cust')">${ic('edit','ic-14')} Start a request</button></div>`;}).join('');}
 const prevPillar=CURRENT_PILLAR;CURRENT_PILLAR=p; // prodCard reads CURRENT_PILLAR for color
 const items=data.items.filter(it=>ns||!it.ns);
 const html=items.map(it=>ns?prodCardNS(it):prodCard(it)).join('');
 CURRENT_PILLAR=prevPillar;
 return html;}
function browseCatalogHTML(){
 return `<div class="browse-catalog">
   <div class="bc-pills" id="browseCatPills">${PILLARS.map(p=>`<button class="bcp ${p===BROWSE_CAT_PILLAR?'on':''}" data-p="${p}" onclick="browseCatSetPillar('${p}')"><span class="bcp-dot" style="background:${pillColor(p)}"></span>${p}</button>`).join('')}</div>
   <div class="prod-grid" id="browseCatGrid">${browseCatGridHTML()}</div>
 </div>`;}
let NS_BUNDLE=[];let NS_BUNDLE_EDIT=false;let NS_BUNDLE_PHASE='';let NS_BUNDLE_WHEN='';
function nsAssistRun(){const inp=document.getElementById('nsAssist'),out=document.getElementById('nsAssistOut');if(!inp||!out)return;const q=inp.value.trim();if(!q){out.innerHTML='';return;}
 // interpret the plain-language phrase → assemble a bundle
 const ql=q.toLowerCase();let bundle,phase,when;
 if(ql.includes('mep')||ql.includes('rough-in')||ql.includes('electrical')||ql.includes('mechanical')){phase='MEP / Electrical rough-in';when='next month (Jul)';bundle=[['Scissor lift 32ft','Aerial',4,1480,false],['Telehandler 10K','Lifting',2,4300,false],['Temp power distribution','Temp power',1,0,true],['Pipe threading machine','Small tools',2,620,false]];}
 else if(ql.includes('foundation')||ql.includes('pour')||ql.includes('concrete')||ql.includes('earth')||ql.includes('excav')){phase='Foundations / Sitework';when='June';bundle=[['Excavator 45–55T','Earthmoving',2,8400,false],['Wheel loader 3yd','Earthmoving',1,6100,false],['Concrete pump','Concrete',1,0,true],['Water truck 4K','Support',1,3100,false]];}
 else{phase='General mobilization';when='next month';bundle=[['Telehandler 10K','Lifting',1,4300,false],['Site signage package','Logistics',1,0,true],['Temp power distribution','Temp power',1,0,true]];}
 NS_BUNDLE=bundle.map(b=>({nm:b[0],cat:b[1],qty:b[2],rate:b[3],quote:b[4],on:true}));NS_BUNDLE_EDIT=false;NS_BUNDLE_PHASE=phase;NS_BUNDLE_WHEN=when;
 nsBundleRender();}
function nsBundleRate(b){return b.quote?'quote':money(b.rate)+'/mo';}
function nsBundleRender(){const out=document.getElementById('nsAssistOut');if(!out)return;const e=NS_BUNDLE_EDIT;
 const rows=NS_BUNDLE.map((b,i)=>`<div class="lrow cols5" style="${b.on?'':'opacity:.4'}"><div class="pri">${b.nm}</div><div style="color:var(--gray-500)">${b.cat}</div><div>${e?`<span class="req-qty"><button onclick="nsBundleQty(${i},-1)">−</button><b>${b.qty}</b><button onclick="nsBundleQty(${i},1)">+</button></span>`:b.qty}</div><div>${nsBundleRate(b)}</div><div style="text-align:right"><input type="checkbox" ${b.on?'checked':''} onchange="nsBundleToggle(${i})"></div></div>`).join('');
 const chosen=NS_BUNDLE.filter(b=>b.on);const anyQuote=chosen.some(b=>b.quote);const sum=chosen.reduce((s,b)=>s+(b.quote?0:b.rate*b.qty),0);
 out.innerHTML=`<div class="assist-out"><div class="ao-h">${ic('sparkle','ic-14')} Assembled bundle for <b>${NS_BUNDLE_PHASE}</b> · scheduled for <b>${NS_BUNDLE_WHEN}</b>, tied to your project schedule</div>
   <div class="list"><div class="lrow cols5 lhead"><div>Item</div><div>Category</div><div>Qty</div><div>Rate</div><div>Include</div></div>${rows}</div>
   <div class="ao-total">${chosen.length} item${chosen.length!==1?'s':''} selected · <b>${money(sum)}${anyQuote?' + quote':''}/mo</b></div>
   <div style="display:flex;gap:8px;margin-top:10px"><button class="btn primary sm" onclick="nsBundleAdd()">${ic('cart','ic-14')} Add bundle to request</button><button class="btn ghost sm" onclick="nsBundleAdjust()">${e?ic('check','ic-14')+' Done adjusting':ic('edit','ic-14')+' Adjust'}</button></div>
   <div style="font-size:11px;color:var(--gray-500);margin-top:8px">North Star read your intent, inferred the phase and timing from the schedule, and matched catalog items across pillars.${e?' Toggle items off, or step quantities up and down.':''}</div></div>`;}
function nsBundleQty(i,d){NS_BUNDLE[i].qty=Math.max(1,NS_BUNDLE[i].qty+d);nsBundleRender();}
function nsBundleToggle(i){NS_BUNDLE[i].on=!NS_BUNDLE[i].on;nsBundleRender();}
function nsBundleAdjust(){NS_BUNDLE_EDIT=!NS_BUNDLE_EDIT;nsBundleRender();}
function nsBundleAdd(){const chosen=NS_BUNDLE.filter(b=>b.on);if(!chosen.length){toast('Select at least one item to add');return;}
 chosen.forEach(b=>{const ex=BROWSE_CART.find(x=>x.name===b.nm);if(ex){ex.qty+=b.qty;}else{BROWSE_CART.push({name:b.nm,rate:b.rate,qty:b.qty,pillar:'Equipment',quote:b.quote,code:DEFAULT_COST_CODE});}});
 browseCartRefresh();toast(`${chosen.length} item${chosen.length!==1?'s':''} added to your request — dates set from schedule`);
 const out=document.getElementById('nsAssistOut');if(out)out.innerHTML=`<div class="add-conf">${ic('check','ic-14')} Bundle added to your request → <span style="color:var(--gray-500)">see the cart on the right</span></div>`;}
function esc(s){return String(s).replace(/'/g,"\\'");}
function findCatalogItem(name){for(const p of PILLARS){const it=CATALOG[p].items.find(x=>x.n===name);if(it)return {it,pillar:p};}return null;}
function addToOrder(name){const found=findCatalogItem(name);if(!found){toast(name+' added to your order');return;}
 const ns=effMode('p-catalog')==='northstar';const it=found.it;
 if(isComingSoon(it)){toast(it.n+' is coming soon — not yet orderable');return;}
 const r=effRate(it,ns);const quote=(r==='$—');
 const existing=BROWSE_CART.find(x=>x.name===name);
 if(existing){existing.qty++;}else{BROWSE_CART.push({name,rate:parseRate(r),qty:1,pillar:found.pillar,quote,code:DEFAULT_COST_CODE});}
 browseCartRefresh();updateCartBadges();
 toast(it.n+' added to your order');}
/* ---- Consolidated cart (shared by Product catalog + On-demand browse & checkout) ---- */
function cartCount(){return BROWSE_CART.reduce((s,it)=>s+it.qty,0);}
function cartButton(){const n=cartCount();return `<button class="cart-btn" onclick="openCartDrawer()">${ic('cart','ic-16')} <span>Order</span><span class="cart-badge${n===0?' empty':''}">${n}</span></button>`;}
function updateCartBadges(){const n=cartCount();document.querySelectorAll('.cart-badge').forEach(b=>{b.textContent=n;b.classList.toggle('empty',n===0);});}
function cartDrawerLinesHTML(){if(!BROWSE_CART.length)return `<div class="cart-empty">${ic('cart','ic-20')}<div>Your order is empty.</div><div class="ce-sub">Add items from the Product catalog or On-demand browse &amp; checkout.</div></div>`;
 return `<div class="cd-lines">${BROWSE_CART.map((it,i)=>`<div class="cd-line"><div class="cd-linetop"><div class="cd-dot" style="background:${pillColor(it.pillar)}"></div><div class="cd-main"><div class="cd-nm">${it.name}</div><div class="cd-meta">${it.pillar}${it.quote?' · quote':' · '+money(it.rate)+'/mo'}</div></div><span class="cd-qty"><button onclick="cartQty(${i},-1)">−</button><b>${it.qty}</b><button onclick="cartQty(${i},1)">+</button></span><span class="cd-amt">${it.quote?'quote':money(it.rate*it.qty)}</span><button class="cd-x" onclick="cartRemove(${i})" title="Remove">${ic('close','ic-14')}</button></div></div>`).join('')}</div>`;}
function cartDrawerTotal(){const anyQuote=BROWSE_CART.some(it=>it.quote);const sum=BROWSE_CART.reduce((s,it)=>s+(it.quote?0:it.rate*it.qty),0);return money(sum)+(anyQuote?' + quote':'');}
function openCartDrawer(){openModal(`<div class="modal-head"><h3>${ic('cart','ic-16')} Your order <span class="cd-count">${cartCount()} ${cartCount()===1?'item':'items'}</span></h3><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body" id="cartDrawerBody">${cartDrawerLinesHTML()}<div class="cd-total"><span>Estimated /mo</span><b>${cartDrawerTotal()}</b></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Keep browsing</button><button class="btn primary"${BROWSE_CART.length?'':' disabled'} onclick="checkoutFromCart()">${ic('check','ic-14')} Checkout</button></div>`);}
function cartDrawerRefresh(){const b=document.getElementById('cartDrawerBody');if(b)b.innerHTML=`${cartDrawerLinesHTML()}<div class="cd-total"><span>Estimated /mo</span><b>${cartDrawerTotal()}</b></div>`;const c=document.querySelector('.cd-count');if(c)c.textContent=cartCount()+' '+(cartCount()===1?'item':'items');}
function cartQty(i,d){BROWSE_CART[i].qty=Math.max(1,BROWSE_CART[i].qty+d);browseCartRefresh();updateCartBadges();cartDrawerRefresh();}
function cartRemove(i){const nm=BROWSE_CART[i].name;BROWSE_CART.splice(i,1);browseCartRefresh();updateCartBadges();cartDrawerRefresh();toast(nm+' removed from order');}
function checkoutFromCart(){if(!BROWSE_CART.length){toast('Add items to your order first');return;}openCheckout(BROWSE_CART,{source:'catalog',title:'Checkout'});}
function openCheckout(items,opts){
 opts=opts||{};const ns=effMode('p-browse')==='northstar';const source=opts.source||'catalog';
 if(!items||!items.length){toast('Nothing to checkout');return;}
 const isCatalog=source==='catalog';
 const total=isCatalog?browseReqTotal():'';
 const subtitle=items.length+' item'+(items.length!==1?'s':'')+(total?' · est. '+total+'/mo':'');
 const itemsHTML=items.map(it=>{
   const amt=it.cost||(it.rate&&!it.quote?money(it.rate*(it.qty||1)):it.quote?'quote req.':'');
   return `<div class="co-line" style="flex-direction:column;align-items:stretch;gap:6px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><span class="co-nm">${it.name}${it.qty&&it.qty>1?` <span class="co-qty">×${it.qty}</span>`:''}</span><span class="co-right">${it.dates?`<span class="co-dates">${it.dates}</span>`:''}${amt?`<span class="co-amt">${amt}</span>`:''}</span></div><div style="display:flex;align-items:center;gap:6px"><label style="font-size:11px;color:var(--gray-500);white-space:nowrap;flex-shrink:0">Cost code</label><input class="co-cc" placeholder="${it.costCode||DEFAULT_COST_CODE||'Enter code'}" style="font-size:12px;border:1px solid var(--gray-200);border-radius:6px;padding:3px 8px;flex:1;min-width:0"></div></div>`;
 }).join('');
 const inclRow=isCatalog?`<div class="co-line co-incl"><span class="co-nm">Delivery &amp; mobilization</span><span class="co-right"><span class="co-amt">incl.</span></span></div>`:'';
 const totalRow=isCatalog?`<div class="co-total"><span>Estimated /mo</span><b>${total}</b></div>`:'';
 const hasItemDates=!isCatalog&&items[0]&&items[0].dates;
 const dateField=!hasItemDates?`<div class="field-row"><div class="field"><label>On-rent date <span class="req">*</span></label><input type="date" id="coStart" value="2026-08-01"></div><div class="field"><label>Off-rent date</label><input type="date" id="coEnd" value="2026-11-30"></div></div>`:'';
 const codeField=isCatalog&&!ns?`<div class="field"><label>Cost code <span class="req">*</span></label><input id="coCode" class="mono" placeholder="${DEFAULT_COST_CODE}" value="${items[0]&&(items[0].costCode||items[0].code)||DEFAULT_COST_CODE}"></div>`:(isCatalog&&ns?`<div class="co-note">${ic('sparkle','ic-14')} Cost codes auto-resolved per line in North Star</div>`:'');
 const n=items.length;const submitAct=isCatalog?`coSubmit(${n})`:(`closeModal();toast('${(opts.planName||'Request').replace(/'/g,"\\'")} submitted — ${n} line${n!==1?'s':''} sent to 02S')`);
 const submitLbl=isCatalog?'Submit order':'Submit request';
 openModal(`<div class="modal-head"><div><h3>${opts.title||'Checkout'}</h3><div class="sub">${subtitle}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body co-body"><div class="co-items">${itemsHTML}${inclRow}${totalRow}</div><div class="field"><label>Delivery address</label><select id="coAddr"><option>${PROJECT.shipTo.line1}, ${PROJECT.shipTo.line2}</option><option>02S yard pickup</option><option>Other (specify in notes)</option></select></div>${dateField}${codeField}<div class="field"><label>Notes <span style="font-weight:400;color:var(--gray-400)">optional</span></label><textarea id="coNote" rows="2" placeholder="Special delivery instructions, required specs…"></textarea></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="${submitAct}">${ic('send','ic-14')} ${submitLbl}</button></div>`,true);}
function coSubmit(n){const start=document.getElementById('coStart');if(start&&!start.value){toast('Set an on-rent date first');return;}BROWSE_CART.length=0;updateCartBadges();browseCartRefresh();closeModal();toast('Order submitted — '+n+' line'+(n!==1?'s':'')+' routed to YardHub');}
/* ---------- Pillar hero art (brand-colored SVG banner + glyph, no external images) ---------- */
const PILLAR_GLYPH={
 Equipment:'<path d="M14 44h30l4-10h10v10h6" stroke-width="3"/><rect x="44" y="30" width="14" height="8" rx="1"/><circle cx="22" cy="48" r="6"/><circle cx="42" cy="48" r="6"/><path d="M14 34l6-8h12l4 8" stroke-width="3"/>',
 Logistics:'<rect x="12" y="26" width="26" height="16" rx="2"/><path d="M38 30h10l6 6v6H38z" stroke-width="3"/><circle cx="22" cy="46" r="5"/><circle cx="46" cy="46" r="5"/>',
 Prefab:'<rect x="18" y="20" width="36" height="28" rx="2"/><path d="M36 20v28" stroke-width="2.5"/><rect x="24" y="28" width="6" height="6"/><rect x="42" y="28" width="6" height="6"/>',
 Procurement:'<rect x="20" y="22" width="32" height="24" rx="2"/><path d="M20 30h32" stroke-width="2.5"/><path d="M30 22v-4h12v4" stroke-width="3"/>',
 'Professional services':'<path d="M36 18v10M28 46l8-18 8 18" stroke-width="3" stroke-linejoin="round"/><circle cx="36" cy="16" r="3"/><path d="M24 48h24" stroke-width="3"/>'
};
function pillarHeroArt(p,h){const color=pillHex(p);const g=PILLAR_GLYPH[p]||PILLAR_GLYPH.Equipment;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 ${h}" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${color}"/><stop offset="1" stop-color="${color}" stop-opacity="0.72"/></linearGradient></defs><rect width="400" height="${h}" fill="url(#g)"/><g fill="none" stroke="#fff" stroke-width="1.4" opacity="0.14"><circle cx="330" cy="${h-40}" r="120"/><circle cx="60" cy="30" r="80"/></g><g transform="translate(300,${h/2-36}) scale(2.2)" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">${g}</g></svg>`;
 return 'data:image/svg+xml;base64,'+btoa(svg);}
function pillLevelTag(p){return '';}
/* ---------- CATALOG LANDING (pillar overview) — one fancier landing for both modes ---------- */
function catLandingHTML(ns){
 const cards=PILLARS.map((p,idx)=>{const m=pillMeta(p);const color=pillHex(p);const data=CATALOG[p];
   const offerChips=m.offerings.slice(0,5).map(o=>`<span class="off-chip"${o.d==='Coming soon'?' data-soon="1"':''}>${o.t}${o.d==='Coming soon'?' <i>soon</i>':''}</span>`).join('');
   const more=m.offerings.length>5?`<span class="off-chip more">+${m.offerings.length-5} more</span>`:'';
   return `<div class="pl-card" style="--pc:${color}" onclick="catEnterPillar('${p}')">
     <div class="pl-hero" style="background-image:url(&quot;${pillarHeroArt(p,150)}&quot;)"><div class="pl-hero-glow"></div><div class="pl-hero-name">${m.tagline}</div></div>
     <div class="pl-body">
       <div class="pl-intro">${m.intro}</div>
       <div class="pl-off-h">Offerings</div>
       <div class="pl-offs">${offerChips}${more}</div>
       <div class="pl-cta">Browse ${m.tagline.toLowerCase()} ${ic('chevronRight','ic-14')}</div>
     </div>
   </div>`;}).join('');

 return `<div class="cat-land">
   <div class="cl-hero">
     <div class="clh-inner">
       <div class="clh-badge">${ic('box','ic-14')} 02S Product Catalog</div>
       <h1>Everything 02S delivers, in one catalog</h1>
       <p>Five pillars — Equipment, Logistics, Prefabrication, Procurement, and Professional Services — each with its own products and services. Choose a pillar to explore what's inside.</p>
       <div class="clh-stats">
         ${PILLARS.map(p=>`<button class="clh-stat" style="--pc:${pillHex(p)}" onclick="catEnterPillar('${p}')"><span class="cs-dot"></span><span class="cs-name">${pillMeta(p).tagline}</span></button>`).join('')}
       </div>
     </div>
     <div class="clh-art">${PILLARS.map(p=>`<span class="clh-art-dot" style="background:${pillHex(p)}"></span>`).join('')}</div>
   </div>
   <div class="cl-sech"><span>Choose a pillar</span></div>
   <div class="pl-grid">${cards}</div>
 </div>`;
}
function renderCatalog(){const el=document.getElementById('catContent');if(!el)return;const mode=effMode('p-catalog'),p=CURRENT_PILLAR,data=CATALOG[p];const ns=mode==='northstar';
 const cov=document.getElementById('covBanner');
 // Landing (pillar overview) view
 if(CAT_VIEW==='landing'){if(cov)cov.style.display='none';el.innerHTML=catLandingHTML(ns);return;}
 // Pillar (category grid) view
 if(cov)cov.style.display='';
 document.querySelectorAll('#covBanner .cov').forEach(c=>c.classList.toggle('on',c.dataset.p===p));
 const m=pillMeta(p);let h='';
 h+=`<div class="pillar-bar" style="--pc:${pillHex(p)}"><button class="backlink" onclick="catBackToLanding()">${ic('chevronLeft','ic-14')} All pillars</button><span class="pb-name">${m.tagline}</span><span class="pb-intro">${m.intro}</span></div>`;
 // Benefits strip — exact catalog "Benefits" language, per pillar
 if(m.benefits&&m.benefits.length){h+=`<div class="pben" style="--pc:${pillHex(p)}"><div class="pben-h">${ic('check','ic-14')} Why ${m.tagline}</div><div class="pben-grid">${m.benefits.map(b=>`<div class="pben-item"><b>${b.t}</b>${b.d?`<span>${b.d}</span>`:''}</div>`).join('')}</div></div>`;}
 const visItems=ns?data.items:data.items.filter(it=>!it.ns);
 const visCats=data.cats.filter(c=>ns||visItems.some(it=>it.cat===c));
 h+=`<div class="cat-wrap"><div class="cat-tree"><div class="ct-h">${p}</div><a class="${CURRENT_CAT==='__all__'?'on':''}" data-cat="__all__" onclick="catPick('__all__')">All ${p.toLowerCase()} <span class="n">${visItems.length}</span></a>${visCats.map(c=>{const cnt=visItems.filter(it=>it.cat===c).length;return `<a class="${CURRENT_CAT===c?'on':''}" data-cat="${esc(c)}" onclick="catPick('${esc(c)}')">${c} <span class="n">${cnt}</span></a>`;}).join('')}</div><div><div class="searchbar" style="margin-bottom:14px"><span class="si">${ic(ns?'bot':'search','ic-16')}</span><input id="catSearch" oninput="renderCatGrid()" placeholder="${ns?'Search or describe what you need — AI maps it to the catalog…':'Search the '+p.toLowerCase()+' catalog…'}"></div><div class="prod-grid" id="catGrid"></div></div></div>`;
 el.innerHTML=h;renderCatGrid();}
function renderCatGrid(){const g=document.getElementById('catGrid');if(!g)return;const p=CURRENT_PILLAR,data=CATALOG[p],ns=effMode('p-catalog')==='northstar';const q=(document.getElementById('catSearch')?.value||'').trim().toLowerCase();
 // V1 + category-level pillar (Logistics, Prof services): show CATEGORY TILES, not individual products — unless a category is selected or the user is searching
 const categoryLevelV1 = !ns && data.level==='category';
 if(categoryLevelV1 && CURRENT_CAT==='__all__' && !q){
   g.innerHTML=data.cats.filter(c=>data.items.some(it=>!it.ns&&it.cat===c)).map(c=>catTile(c,data.items.filter(it=>!it.ns&&it.cat===c).length)).join('');
   return;
 }
 // Otherwise show line-items. In V1, hide North-Star-only items.
 let items=data.items.filter(it=>CURRENT_CAT==='__all__'||it.cat===CURRENT_CAT);
 if(!ns)items=items.filter(it=>!it.ns);
 if(q)items=items.filter(it=>(it.n+' '+it.attrs+' '+(it.kw||'')+' '+it.cat).toLowerCase().includes(q));
 if(!items.length){g.innerHTML=`<div class="empty-cat">${ic('search','ic-20')}<div>No catalog items match${q?` "${q}"`:''} in ${CURRENT_CAT==='__all__'?p:CURRENT_CAT}.</div><button class="btn sm" onclick="nav('portal','p-browse')">${ic('edit','ic-14')} Start a custom request</button></div>`;return;}
 g.innerHTML=items.map(it=>ns?prodCardNS(it):prodCard(it)).join('');}
/* ================= BACKLOG DATA (command) ================= */
const STATUSES=['New','Acknowledged','In fulfillment','Fulfilled'];
const BACKLOG=[
 {id:'REQ-1058',pillar:'Equipment',project:'Hercules Solar + BESS',item:'2× excavator 45–55T',qty:'2',need:'Jun 1',type:'Catalog',status:'New',tax:'Asset › Earthmoving › Excavator › 45-55T',taxMapped:false,
  ovr:{rec:'rerent',summary:'No owned 45–55T units within 200 mi; mobilization cost from Sacramento exceeds value for this rental window.',
   guardrails:[
    ['Fleet availability','0 idle owned units within 200 mi — Sacramento has 1 unit but committed through Jun 8','red'],
    ['Transport / mob cost','Sacramento yard 142 mi away · est. $4,200 mob — 4-wk rental doesn\'t recover transport cost','red'],
    ['Utilization target','Cat class at 100% committed across portfolio — no idle capacity to draw from','warn'],
    ['Near-term demand at source','Sacramento unit has incoming demand Jun 8 — releasing it creates a gap','warn']
   ],
   ns:{confPct:88,lifecycle:'W. yard fleet avg 7.2yr / 68% health — above maintenance-risk threshold; relocation not advised',demand:'Competing demand Jun 8 at Sacramento confirmed by demand plan',netCost:'Re-rent saves est. $6,800 net over window after mob + transport costs'}}},
 {id:'ORD-3042',pillar:'Equipment',project:'Riverside Office',item:'2× ¾-Ton 4×4',qty:'2',need:'May 20',type:'Catalog',status:'In fulfillment',tax:'Asset › Light › Pickup Truck › ¾-Ton 4×4',taxMapped:true,
  ovr:{rec:'owned',summary:'4 idle units at Riverside yard (41% utilization vs. 70% target) — owned meets the threshold before going to market.',
   guardrails:[
    ['Fleet availability','4 idle ¾-Ton 4×4 units at Riverside yard · 12 mi from job site','ok'],
    ['Transport / mob cost','12 mi · $0 est. mob cost — 3-month duration fully justifies the move','ok'],
    ['Utilization target','Class at 41% vs. 70% target — policy requires own-fleet use before re-renting','ok'],
    ['Near-term demand at source','No competing demand at Riverside yard through Aug 28 — units are free to commit','ok']
   ],
   ns:{confPct:96,lifecycle:'Units avg 2.1yr / 94% health — low maintenance risk, no lifecycle flag triggered',demand:'0 competing demand at yard through Q3 — safe to commit for full window',netCost:'Owned saves est. $8,400 vs. re-rent over the 3-month rental window'}}},
 {id:'REQ-1071',pillar:'Equipment',project:'Mercy Hospital',item:'1× tower crane (self-erect)',qty:'1',need:'Aug 3',type:'Catalog',status:'New',tax:'Asset › Lifting › Tower Crane › Self-Erect',taxMapped:false,
  ovr:{rec:'rerent',summary:'No owned tower cranes in the McCarthy portfolio — specialty class always fulfilled through re-rent.',
   guardrails:[
    ['Fleet availability','No owned tower cranes in portfolio — specialty class not held in fleet','red'],
    ['Transport / mob cost','n/a — no owned inventory to evaluate for this class','warn'],
    ['Utilization target','Class not owned; utilization target doesn\'t apply','warn'],
    ['Near-term demand at source','n/a','warn']
   ],
   ns:{confPct:99,lifecycle:'No owned fleet — lifecycle analysis not applicable for this class',demand:'n/a — specialty class, no owned inventory exists',netCost:'Market rate competitive with historical benchmarks; no owned alternative'}}},
 {id:'REQ-2201',pillar:'Prefab',project:'Mercy Hospital',item:'Level-2 headwall',qty:'12',need:'Aug 15',type:'Custom',status:'Acknowledged'},
 {id:'REQ-2210',pillar:'Prefab',project:'Hercules Solar + BESS',item:'Prefab MEP rack',qty:'8',need:'Sep 1',type:'Custom',status:'New'},
 {id:'REQ-2288',pillar:'Logistics',project:'Hercules Solar + BESS',item:'"need lowboy for transformer move wk of Jun 9"',qty:'1',need:'Jun 9',type:'Open text',status:'New'},
 {id:'REQ-2291',pillar:'Logistics',project:'Riverside Office',item:'Waste hauling & recycling — roll-off',qty:'3',need:'Jun 15',type:'Custom',status:'Acknowledged'},
 {id:'REQ-2290',pillar:'Professional services',project:'Mercy Hospital',item:'"commissioning agent, 3 wks"',qty:'1',need:'Nov 1',type:'Open text',status:'New'},
 {id:'REQ-2293',pillar:'Professional services',project:'Hercules Solar + BESS',item:'"subsurface utility mapping before excavation"',qty:'1',need:'Jun 20',type:'Open text',status:'New'},
 {id:'REQ-2295',pillar:'Procurement',project:'Riverside Office',item:'Safety supplies bundle',qty:'40',need:'Jun 1',type:'Catalog',status:'Acknowledged'},
 {id:'REQ-2298',pillar:'Procurement',project:'Mercy Hospital',item:'EV charger package (CSI Div 10)',qty:'6',need:'Oct 1',type:'Custom',status:'New'}
];
let BACKLOG_FILTER='All';
function filterBacklog(v){BACKLOG_FILTER=v;renderBacklog(v);document.querySelectorAll('#backlogFilters .fpill').forEach(p=>p.classList.toggle('on',p.dataset.f===v));}
function updateStatus(id,val){const r=BACKLOG.find(x=>x.id===id);if(r)r.status=val;toast(id+' → '+val+' · reflected on project side');}
function backlogRowHTML(r){const eq=r.pillar==='Equipment';const ns=effMode('c-backlog')==='northstar';
 if(ns){
   const statusChip=r.status==='New'?'gray':(r.status==='Fulfilled'||r.status==='Acknowledged')?'ok':r.status==='Unable to fill'?'red':'steel';
   const nsOvrChip=eq&&r.ovr?`<span class="chip ${r.ovr.rec==='owned'?'ok':'steel'}" style="font-size:10px" title="OvR — ${r.ovr.ns.confPct}% confidence">${ic('sparkle','ic-14')} ${r.ovr.ns.confPct}% ${r.ovr.rec==='owned'?'Owned':'Re-rent'}</span>`:'';
   return `<div class="lrow cols-back"><div class="pri">${r.id}</div><div>${r.item}<div class="brow-sub">${r.project}</div></div><div style="text-align:center">${r.qty}</div><div>${r.need}</div><div><span class="chip ${r.type==='Open text'?'steel':r.type==='Custom'?'gold':'gray'}">${r.type}</span></div><div><span class="chip ${statusChip}">${r.status}</span></div><div style="display:flex;gap:6px;justify-content:flex-end;align-items:center">${nsOvrChip}<span class="oms-tag" title="Routed through T3 (OMS)">${ic('sparkle','ic-14')} OMS</span><button class="btn ghost sm" onclick="reviewRequest('${r.id}')">Review</button></div></div>`;
 }
 // V1 — Equipment: taxonomy confirm + OvR → Send to YH; status auto-synced from YardHub
 if(eq){
   const ov=OVR_OVERRIDES[r.id];
   const ovrInfo=r.ovr?(ov?{rec:ov.choice,over:true}:{rec:r.ovr.rec,over:false}):null;
   const ovrChip=ovrInfo?`<span class="chip ${ovrInfo.rec==='owned'?'ok':'steel'}" style="font-size:10px">${ovrInfo.rec==='owned'?'Owned':'Re-rent'}${ovrInfo.over?' ↩':''}</span>`:'';
   const yhSent=r.status==='In fulfillment'||r.status==='Fulfilled';
   const statusCls=r.status==='New'?'gray':r.status==='Acknowledged'?'ok':r.status==='In fulfillment'?'steel':r.status==='Unable to fill'?'red':'gray';
   const taxCol=r.taxMapped?`<button class="tax-chip ok" onclick="reviewRequest('${r.id}')" title="${r.tax||''}">${ic('check','ic-14')} ${r.tax?(r.tax.split(' › ').slice(-2).join(' › ')):'Taxonomy'}</button>`:`<button class="tax-chip sug" onclick="reviewRequest('${r.id}')">${ic('sparkle','ic-14')} Needs confirm</button>`;
   return `<div class="lrow cols-back"><div class="pri">${r.id}</div><div>${r.item}<div class="brow-sub">${r.project}</div></div><div style="text-align:center">${r.qty}</div><div>${r.need}</div><div>${taxCol}</div><div><span class="chip ${statusCls}" title="Auto-synced from YardHub">${r.status}</span></div><div style="display:flex;gap:6px;justify-content:flex-end;align-items:center">${ovrChip}${yhSent?`<span class="chip ok" style="font-size:10px">${ic('check','ic-14')} Sent to YH</span>`:`<button class="btn sm" onclick="reviewRequest('${r.id}')">${ic('send','ic-14')} Review &amp; send</button>`}</div></div>`;
 }
 // V1 — Non-equipment: manual status, map to catalog for non-catalog items
 const action=r.type!=='Catalog'?`<button class="btn sm" onclick="openMap('${r.id}')">${ic('link','ic-14')} Map to catalog</button>`:`<span class="chip gray">As-is</span>`;
 return `<div class="lrow cols-back"><div class="pri">${r.id}</div><div>${r.item}<div class="brow-sub">${r.project}</div></div><div style="text-align:center">${r.qty}</div><div>${r.need}</div><div><span class="chip ${r.type==='Open text'?'steel':r.type==='Custom'?'gold':'gray'}">${r.type}</span></div><div><select class="perm" onchange="updateStatus('${r.id}',this.value)">${STATUSES.map(s=>`<option ${s===r.status?'selected':''}>${s}</option>`).join('')}</select></div><div style="display:flex;gap:6px;justify-content:flex-end;align-items:center">${action}<button class="btn ghost sm" onclick="reviewRequest('${r.id}')">Review</button></div></div>`;}
function renderBacklog(f){const el=document.getElementById('backlogRows');if(!el)return;const pillars=f==='All'?PILLARS:[f];const ns=effMode('c-backlog')==='northstar';
 let h='';
 pillars.forEach(p=>{const rows=BACKLOG.filter(r=>r.pillar===p);if(!rows.length)return;const nNew=rows.filter(r=>r.status==='New').length;const eq=p==='Equipment';
   const route=ns?`${ic('sparkle','ic-14')} Routed via T3 (OMS) · live status`:(eq?'Confirm taxonomy + OvR → send to YardHub · status auto-synced':'Managed queue · map to catalog + update status manually');
   const statusHdr=ns?'Status':(eq?'YardHub status':'Status');
   const originHdr=(!ns&&eq)?'Taxonomy':'Origin';
   h+=`<div class="back-group"><div class="bg-head"><span class="pdot" style="background:${pillColor(p)}"></span><b>${p}</b><span class="bg-count">${rows.length} open${nNew?` · ${nNew} new`:''}</span><span class="bg-route">${route}</span></div><div class="list"><div class="lrow cols-back lhead"><div>Ref</div><div>Item · project</div><div style="text-align:center">Qty</div><div>Need by</div><div>${originHdr}</div><div>${statusHdr}</div><div></div></div>${rows.map(backlogRowHTML).join('')}</div></div>`;});
 el.innerHTML=h||`<div style="padding:24px;text-align:center;color:var(--gray-500)">No requests for this pillar.</div>`;}
function sendToYardHub(id){const r=BACKLOG.find(x=>x.id===id);if(!r)return;if(!r.taxMapped){toast('Confirm the taxonomy match first — taxonomy must be confirmed before sending to YardHub');return;}r.status='In fulfillment';closeModal();toast(id+' → sent to YardHub · status now In fulfillment · project notified');renderBacklog(BACKLOG_FILTER);}
function bkTaxPick(el,val){const inp=document.getElementById('bkTaxChosen');if(inp)inp.value=val;if(el){el.parentElement.querySelectorAll('.tax-opt').forEach(b=>b.classList.remove('on'));el.classList.add('on');}}
function backlogConfirmTax(id){const r=BACKLOG.find(x=>x.id===id);if(!r)return;const chosen=document.getElementById('bkTaxChosen')?.value||r.tax;r.tax=chosen;r.taxMapped=true;const sec=document.getElementById('bkTaxSection');if(sec)sec.innerHTML=`<div class="ovr-panel-head"><span class="ovr-label">Taxonomy match</span><span class="chip ok" style="font-size:10px">${ic('check','ic-14')} Confirmed</span></div><div class="ovr-summary" style="margin:4px 0 0">${r.tax}</div>`;renderBacklog(BACKLOG_FILTER);toast(id+' taxonomy confirmed — ready to send to YardHub');}
function reviewRequest(id){const r=BACKLOG.find(x=>x.id===id);if(!r)return;const eq=r.pillar==='Equipment';const ns=effMode('c-backlog')==='northstar';
 if(ns){
   // North Star: read-only tracking — OMS owns fulfillment & status
   openModal(`<div class="modal-head"><div><h3>Track ${id}</h3><div class="sub"><span class="pdot" style="background:${pillColor(r.pillar)}"></span>${r.pillar} · ${r.project}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body">
     <div class="field"><label>What the project submitted</label><input value='${r.item.replace(/"/g,'')}' readonly></div>
     <div class="field-row"><div class="field"><label>Qty</label><input value="${r.qty}" readonly></div><div class="field"><label>Need by</label><input value="${r.need}" readonly></div><div class="field"><label>Origin</label><input value="${r.type}" readonly></div></div>
     <div class="limit-note" style="background:var(--steel-050);border-color:#CFE0EF;color:var(--charcoal-700)">${ic('sparkle','ic-16')}<div><b>Handled by OMS (T3).</b> Triaged, coded, and routed automatically — status flows from OMS.</div></div>
     ${eq&&r.ovr?ovrPanelNsHTML(r.id,r.ovr):''}
     <div class="track-status"><div class="ts-lbl">Live status from OMS</div><div class="req-lifecycle"><span class="st ${['New','Acknowledged','Fulfilled','Archived'].indexOf(r.status)>=0?'':''} ${r.status==='New'?'on':''}">New</span><span class="arr">→</span><span class="st ${r.status==='Acknowledged'?'on':''}">Acknowledged</span><span class="arr">→</span><span class="st ${r.status==='Fulfilled'?'on':''}">Fulfilled</span><span class="arr">→</span><span class="st locked ${r.status==='Archived'?'on':''}">Archived</span></div><div style="font-size:11.5px;color:var(--gray-500);margin-top:8px">Current: <b>${r.status}</b> · synced live to the project team</div></div>
   </div><div class="modal-foot"><button class="btn primary" onclick="closeModal()">Close</button></div>`,true);return;}
 // V1 — Equipment: confirm taxonomy + OvR, then send to YardHub
 if(eq){
   const taxOpts=(TAX_OPTS[taxKey(r.item)])||[];
   const taxQuick=taxOpts.map(o=>`<button class="tax-opt ${o===r.tax?'on':''}" onclick="bkTaxPick(this,'${o}')">${o}</button>`).join('');
   const taxSectionHTML=r.taxMapped
    ?`<div class="ovr-panel" style="margin-bottom:12px" id="bkTaxSection"><div class="ovr-panel-head"><span class="ovr-label">Taxonomy match</span><span class="chip ok" style="font-size:10px">${ic('check','ic-14')} Confirmed</span></div><div class="ovr-summary" style="margin:4px 0 0">${r.tax||''}</div></div>`
    :`<div class="ovr-panel" style="margin-bottom:12px" id="bkTaxSection"><div class="ovr-panel-head"><span class="ovr-label">Taxonomy match</span><span class="chip warn" style="font-size:10px">Needs confirmation</span></div><div class="ai-panel" style="margin:8px 0 0;padding:10px 12px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">AI-recommended taxonomy</div></div><div class="tax-rec" style="margin:6px 0 8px">${r.tax||''}</div><div style="font-size:11px;color:var(--gray-500);margin-bottom:6px">Quick options</div><div class="tax-quick">${taxQuick}</div><input id="bkTaxChosen" value="${r.tax||''}" style="display:none"><button class="btn sm" onclick="backlogConfirmTax('${id}')" style="margin-top:8px">${ic('check','ic-14')} Confirm match</button></div></div>`;
   openModal(`<div class="modal-head"><div><h3>Review &amp; send ${id}</h3><div class="sub"><span class="pdot" style="background:${pillColor(r.pillar)}"></span>${r.pillar} · ${r.project}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body">
     <div class="field"><label>What the project submitted</label><input value='${r.item.replace(/"/g,'')}' readonly></div>
     <div class="field-row"><div class="field"><label>Qty</label><input value="${r.qty}" readonly></div><div class="field"><label>Need by</label><input value="${r.need}" readonly></div><div class="field"><label>Origin</label><input value="${r.type}" readonly></div></div>
     <div class="limit-note" style="background:var(--gray-100);border-color:var(--gray-200);color:var(--charcoal-700);margin-bottom:12px">${ic('truck','ic-16')}<div><b>Routes to YardHub — status auto-synced.</b> Confirm taxonomy match and OvR recommendation before sending.</div></div>
     ${taxSectionHTML}
     ${r.ovr?ovrPanelV1HTML(r.id,r.ovr):''}
   </div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="sendToYardHub('${id}')">${ic('send','ic-14')} Send to YardHub</button></div>`,true);
   return;}
 // V1 — Non-equipment: manual status + catalog mapping
 openModal(`<div class="modal-head"><div><h3>Review request ${id}</h3><div class="sub"><span class="pdot" style="background:${pillColor(r.pillar)}"></span>${r.pillar} · ${r.project}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body">
   <div class="field"><label>What the project submitted</label><input value='${r.item.replace(/"/g,'')}' readonly></div>
   <div class="field-row"><div class="field"><label>Qty</label><input value="${r.qty}" readonly></div><div class="field"><label>Need by</label><input value="${r.need}" readonly></div><div class="field"><label>Origin</label><input value="${r.type}" readonly></div></div>
   <div class="limit-note" style="background:var(--steel-050);border-color:#CFE0EF;color:var(--charcoal-700)">${ic('info','ic-16')}<div><b>Non-equipment — managed queue.</b> The ${r.pillar.toLowerCase()} lead fulfills through the existing process outside Command Center; update status and the project sees each change.</div></div>
   <div class="field"><label>Set status</label><select id="revStatus">${STATUSES.map(s=>`<option ${s===r.status?'selected':''}>${s}</option>`).join('')}</select></div>
   <div class="field"><label>Note to project <span class="opt">optional</span></label><textarea rows="2" placeholder="e.g. confirmed with vendor — delivery scheduled ${r.need}"></textarea></div>
 </div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button>${r.type!=='Catalog'?`<button class="btn dark" onclick="closeModal();openMap('${id}')">${ic('link','ic-14')} Map to catalog</button>`:''}<button class="btn primary" onclick="updateStatus('${id}',document.getElementById('revStatus').value);closeModal()">${ic('check','ic-14')} Update &amp; notify project</button></div>`,true);}
/* V1 simple other-pillar demand: view + manually update status */
function cPillV1RowsHTML(filter){const rows=BACKLOG.filter(r=>r.pillar!=='Equipment'&&(filter==='all'||r.pillar===filter));
 if(!rows.length)return `<div style="padding:16px;color:var(--gray-500);font-size:12.5px">No open ${filter==='all'?'':filter+' '}demand right now.</div>`;
 return rows.map(r=>`<div class="lrow" style="grid-template-columns:1.4fr 1.5fr .7fr .8fr 1.3fr"><div class="pri"><span class="pdot" style="background:${pillColor(r.pillar)}"></span>${r.pillar}</div><div>${r.item}<div class="brow-sub">${r.project}</div></div><div>${r.qty}</div><div>${r.need}</div><div><select class="perm" onchange="updateStatus('${r.id}',this.value);toast('${r.id} → '+this.value+' · project notified')">${STATUSES.map(s=>`<option ${s===r.status?'selected':''}>${s}</option>`).join('')}</select></div></div>`).join('');}
function cPillV1Filter(el,filter){el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));el.classList.add('on');const box=document.getElementById('cPillV1Rows');if(box)box.innerHTML=cPillV1RowsHTML(filter);}
function openMap(id){
 const r=BACKLOG.find(x=>x.id===id);
 const CATALOG_SUGS={
  'Prefab':[['Prefab › Architectural › Level-2 headwall','Architectural headwall unit — pre-configured for patient room'],
            ['Prefab › MEP › MEP rack assembly','Rack-mount MEP assembly — pre-wired and tested off-site'],
            ['Prefab › Structural › Structural wall panel','Load-bearing panel module for exterior/interior walls']],
  'Logistics':[['Logistics › Freight › Lowboy trailer move','Heavy haul / over-dimensional freight — lowboy configuration'],
               ['Logistics › Waste › Roll-off waste hauling','On-site debris removal via roll-off container'],
               ['Logistics › Site › Site material delivery','General materials delivery to staging area']],
  'Professional services':[['Prof. Services › Commissioning › Cx agent engagement','Third-party Cx agent — scope per spec section 01 91 13'],
                            ['Prof. Services › Survey › Subsurface utility mapping','SUE investigation before excavation — QL-A or QL-B'],
                            ['Prof. Services › Inspection › Site inspection','Third-party inspection per applicable code section']],
  'Procurement':[['Procurement › Safety › Safety supplies bundle','OSHA-compliant site safety supplies package'],
                 ['Procurement › Consumables › Site consumables kit','Fasteners, sealants, and general consumables'],
                 ['Procurement › Tools › Tool package','Project tool set — by CSI division or trade']]
 };
 const sug=CATALOG_SUGS[r.pillar]||CATALOG_SUGS['Logistics'];
 const optHTML=sug.map(([label])=>`<option>${label}</option>`).join('');
 openModal(`<div class="modal-head"><div><h3>Map to catalog</h3><div class="sub">${id} · ${r.pillar}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="field"><label>What the project submitted</label><input value='${r.item.replace(/"/g,'')}' readonly></div><div class="ai-panel" style="margin:0 0 14px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">Suggested catalog match</div></div><div class="ctx">Best match from the 02S ${r.pillar.toLowerCase()} catalog — confirms the item so it routes and reports correctly.</div><div class="ai-sug"><div class="txt"><b>${sug[0][0]}</b><br><span class="why">${sug[0][1]}</span></div><div class="acts"><button class="conf" onclick="closeModal();toast('${id} matched to catalog · project notified')">Use match</button></div></div></div><div class="field"><label>Or pick a catalog item manually</label><select class="field">${optHTML}</select></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('${id} matched to catalog · project notified')">Confirm match</button></div>`);}
/* ================= OVR: owned-vs-re-rent overrides + panel builders ================= */
const OVR_OVERRIDES={};
function ovrPanelV1HTML(id,ovr){const ov=OVR_OVERRIDES[id];const rec=ov?ov.choice:ovr.rec;
 const grDot=s=>({ok:'var(--ok)',warn:'var(--warn)',red:'var(--red)'}[s]||'var(--gray-300)');
 return `<div class="ovr-panel">
  <div class="ovr-panel-head">
    <span class="ovr-label">Owned vs. re-rent recommendation</span>
    <span class="chip ${rec==='owned'?'ok':'steel'}">${rec==='owned'?ic('check','ic-14')+' Owned fleet':ic('truck','ic-14')+' Re-rent'}${ov?` <span class="ovr-ov-tag">EM override</span>`:''}</span>
    <button class="btn sm" onclick="openOvrOverride('${id}')" style="margin-left:auto">${ic('edit','ic-14')} ${ov?'Update':'Override'}</button>
  </div>
  <div class="ovr-summary">${ovr.summary}</div>
  <div class="ovr-guardrails">${ovr.guardrails.map(([label,detail,status])=>`<div class="ovr-gr"><span class="ovr-gr-dot" style="background:${grDot(status)}"></span><div><b>${label}</b><span class="ovr-gr-detail">${detail}</span></div></div>`).join('')}</div>
  ${ov?`<div class="ovr-override-note">${ic('edit','ic-14')} EM decision: <b>${ov.choice==='owned'?'Owned fleet':'Re-rent'}</b> — "${ov.reason}"</div>`:''}
 </div>`;}
function ovrPanelNsHTML(id,ovr){const ov=OVR_OVERRIDES[id];const ns=ovr.ns;const rec=ov?ov.choice:ovr.rec;
 return `<div class="ai-panel" style="margin:10px 0">
  <div class="aih">
    <div class="ico">${ic('sparkle','ic-16')}</div>
    <div class="t">Owned vs. re-rent &nbsp;·&nbsp; <span class="chip ${rec==='owned'?'ok':'steel'}" style="font-size:10px;vertical-align:middle">${rec==='owned'?'Owned fleet':'Re-rent'} · ${ns.confPct}% confidence${ov?' · EM override':''}</span></div>
    <span class="ns-badge" style="margin-left:auto">North Star</span>
  </div>
  <div class="ctx" style="margin:8px 0 10px">
    <div class="ovr-ns-signals">
      <div class="ovr-nss"><span class="ovr-nss-ico" style="background:var(--red-050);color:var(--red)">${ic('chart','ic-14')}</span><div><b>Asset lifecycle</b><span>${ns.lifecycle}</span></div></div>
      <div class="ovr-nss"><span class="ovr-nss-ico" style="background:var(--steel-050);color:var(--steel)">${ic('calendar','ic-14')}</span><div><b>Demand forecast</b><span>${ns.demand}</span></div></div>
      <div class="ovr-nss"><span class="ovr-nss-ico" style="background:var(--ok-050);color:var(--ok)">${ic('dollar','ic-14')}</span><div><b>Net cost delta</b><span>${ns.netCost}</span></div></div>
      <div class="ovr-nss"><span class="ovr-nss-ico" style="background:var(--gold-050);color:var(--gold)">${ic('gauge','ic-14')}</span><div><b>Confidence</b><span>${ns.confPct}% — fleet history, demand signals &amp; cost model</span></div></div>
    </div>
  </div>
  ${ov?`<div class="ovr-override-note" style="margin-bottom:10px">${ic('edit','ic-14')} EM decision: <b>${ov.choice==='owned'?'Owned fleet':'Re-rent'}</b> — "${ov.reason}" <span style="color:var(--gray-500);font-size:10.5px;font-weight:600">· feeds model</span></div>`:''}
  <div style="display:flex;align-items:center;gap:9px">
    <button class="btn sm" onclick="openOvrOverride('${id}')">${ic('edit','ic-14')} ${ov?'Update override':'Override recommendation'}</button>
    ${!ov?`<span style="font-size:11px;color:var(--gray-500)">Overrides are reviewed by the 02S lead and improve future recommendations</span>`:''}
  </div>
 </div>`;}
function openOvrOverride(id){const r=BACKLOG.find(x=>x.id===id);if(!r?.ovr)return;
 const ov=OVR_OVERRIDES[id];const altRec=ov?ov.choice:(r.ovr.rec==='owned'?'rerent':'owned');
 openModal(`<div class="modal-head"><div><h3>Override OvR recommendation</h3><div class="sub">${id} · ${r.item}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div>
 <div class="modal-body">
   <div class="limit-note" style="background:var(--gold-050);border-color:var(--gold-mid)">${ic('warning','ic-16')}<div><b>You're overriding a system recommendation.</b> The system suggested <b>${r.ovr.rec==='owned'?'Owned fleet':'Re-rent'}</b>. Your decision and reasoning are logged and feed the model over time.</div></div>
   <div class="field" style="margin-bottom:12px"><label>Your decision</label>
     <div class="seg-toggle" style="width:100%;margin-top:6px">
       <button id="ovr-own-btn" style="flex:1" class="${altRec==='owned'?'on':''}" onclick="document.getElementById('ovr-own-btn').classList.add('on');document.getElementById('ovr-rr-btn').classList.remove('on')">${ic('check','ic-14')} Owned fleet</button>
       <button id="ovr-rr-btn" style="flex:1" class="${altRec==='rerent'?'on':''}" onclick="document.getElementById('ovr-rr-btn').classList.add('on');document.getElementById('ovr-own-btn').classList.remove('on')">${ic('truck','ic-14')} Re-rent from market</button>
     </div>
   </div>
   <div class="field"><label>Reasoning <span style="color:var(--red)">*</span></label><textarea id="ovrReason" rows="3" placeholder="e.g. Project schedule requires faster delivery than owned-fleet transport allows — re-rent premium is justified…">${ov?.reason||''}</textarea></div>
   <div style="font-size:11.5px;color:var(--gray-500);margin-top:-6px">Required. Reviewed by the 02S lead and feeds the recommendation model.</div>
 </div>
 <div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="submitOvrOverride('${id}')">${ic('check','ic-14')} Submit override</button></div>`);}
function submitOvrOverride(id){
 const reason=(document.getElementById('ovrReason')?.value||'').trim();
 if(!reason){toast('Please add reasoning before submitting.');return;}
 const choice=document.getElementById('ovr-own-btn')?.classList.contains('on')?'owned':'rerent';
 OVR_OVERRIDES[id]={choice,reason,ts:new Date().toLocaleTimeString()};
 closeModal();
 toast(id+' → OvR overridden to '+(choice==='owned'?'Owned fleet':'Re-rent')+' · reasoning logged');
 renderBacklog(BACKLOG_FILTER);}
/* ================= ORDERS DATA + TRACKER ================= */
const ORD_STAGES=['Requested','Acknowledged','In fulfillment','Delivered','On-rent','Off-rent'];
const ORDERS=[
 {id:'ORD-3048',prod:'2× Excavator 45–55T',placed:'May 28',arrived:'Jun 1',status:'On-rent',code:'31-2100',dates:'Jun 1 – Nov 30',stage:4,pillar:'Equipment'},
 {id:'ORD-3047',prod:'1× Wheel loader 3yd',placed:'May 28',arrived:'Jun 1',status:'On-rent',code:'31-2200',dates:'Jun 1 – Sep 30',stage:4,pillar:'Equipment'},
 {id:'ORD-3046',prod:'1× Water truck 4K gal',placed:'May 28',arrived:'Jun 2',status:'On-rent',code:'31-2300',dates:'Jun 2 – Nov 30',stage:4,pillar:'Equipment'},
 {id:'ORD-3044',prod:'1× Tower crane',placed:'Jun 10',arrived:'—',status:'Pending delivery',code:'05-1000',dates:'Aug 1 – Oct 31',stage:2,pillar:'Equipment'},
 {id:'ORD-3042',prod:'2× Telehandler 10K',placed:'Jun 10',arrived:'—',status:'Pending delivery',code:'05-1200',dates:'Aug 1 – Dec 31',stage:2,pillar:'Equipment'},
 {id:'ORD-3039',prod:'1× SUV AWD',placed:'May 14',arrived:'May 18',status:'On-rent',code:'010200.3005.2000',dates:'May 14 – Aug 28',stage:4,pillar:'Equipment'},
 {id:'ORD-2988',prod:'1× Scissor lift 32ft',placed:'Apr 2',arrived:'Apr 6',status:'Off-rent',code:'262600.4100.1000',dates:'Apr 2 – May 15',stage:5,pillar:'Equipment'}
];
function trackerHTML(stage){const icons=['cart','check','box','truck','pin','clock'];return `<div class="tracker">${ORD_STAGES.map((s,i)=>`<div class="step ${i<stage?'done':i===stage?'current':''}"><div class="node">${ic(icons[i],'ic-16')}</div><div class="lab">${s}</div></div>`).join('')}</div>`;}
function openOrderDetail(i){const o=ORDERS[i];const ns=effMode('p-orders')==='northstar';
 const timeline=[
   {t:'Requested',d:o.placed+' · 8:12a',who:'Rian M.',done:o.stage>=1,note:'Submitted from equipment plan (REQ-1042)'},
   {t:'Acknowledged',d:o.placed+' · 2:40p',who:'02S ops',done:o.stage>=2,note:'Yard confirmed availability — West yard'},
   {t:'In fulfillment',d:(o.stage>=3?o.placed:'')+(o.stage>=3?' · staged':''),who:'YardHub',done:o.stage>=3,note:'Picked, inspected, staged for dispatch'},
   {t:'In transit',d:ns&&o.stage>=3?'ETA May 20, 10:40a':'',who:'Sunbelt 3PL',done:o.stage>=4,note:ns?'42 mi out · live GPS · driver: M. Alvarez':'Carrier dispatch',nsOnly:true},
   {t:'Delivered',d:o.arrived!=='—'?o.arrived+' · 10:52a':'',who:'Site',done:o.stage>=4,note:'Received at gate 3'+(ns?' · 3 photos':'')},
   {t:'On-rent',d:o.status==='On-rent'||o.status==='Off-rent'?o.dates.split('–')[0].trim():'',who:'Billing',done:o.stage>=4,note:'Billing clock started'},
   {t:'Off-rent',d:o.status==='Off-rent'?o.dates.split('–')[1].trim():'',who:'',done:o.stage>=5,note:o.status==='Off-rent'?'Returned & closed':'Call-off when done'}
 ].filter(s=>ns||!s.nsOnly);
 const tlHTML=`<div class="otl">${timeline.map((s)=>`<div class="otl-row ${s.done?'done':'pending'}"><div class="otl-dot">${s.done?ic('check','ic-14'):''}</div><div class="otl-body"><div class="otl-top"><span class="otl-t">${s.t}</span>${s.d?`<span class="otl-d">${s.d}</span>`:'<span class="otl-d muted">pending</span>'}</div><div class="otl-note">${s.note}${s.who?` · <b>${s.who}</b>`:''}</div></div></div>`).join('')}</div>`;
 openModal(`<div class="modal-head"><div><h3>${o.id}</h3><div class="sub">${o.prod} · ${o.pillar} · <span class="mono">${o.code}</span></div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div>
 <div class="modal-body">${trackerHTML(o.stage)}
   ${ns?`<div class="ord-live"><div class="ord-map">${ic('map','ic-28')}<span>Live route · 42 mi out</span></div><div class="ord-live-side"><div class="olab">Live ETA</div><div class="oeta">May 20 · 10:40a</div><div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap"><span class="chip ok">On schedule</span><span class="chip steel">Photos (3)</span></div><div style="font-size:11px;color:var(--gray-500);margin-top:8px">Alert armed if ETA slips &gt; 2h</div></div></div>`:''}
   <div class="otl-h">${ns?'Full tracking timeline':'Fulfillment history'}</div>
   ${tlHTML}
   <div class="grid g2" style="margin-top:16px"><div class="field"><label>Rental window</label><div>${o.dates}</div></div><div class="field"><label>Status</label><div><span class="chip ${o.status==='On-rent'?'ok':o.status==='Off-rent'?'gray':'warn'}">${o.status}</span></div></div></div>
   ${ns?`<div class="ai-panel" style="margin-top:4px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">Proactive insight</div><span class="ns-badge" style="margin-left:auto">North Star</span></div><div class="ctx" style="margin-bottom:0">This unit has been on-rent 6 days with <b>low usage</b> (1.2 hrs/day). If the civil scope is wrapping, consider an early off-rent to stop ~$1.9K/wk in idle billing.</div></div>`:`<div style="margin-top:8px;font-size:12px;color:var(--gray-500)">V1 shows YardHub fulfillment status. Live 3PL tracking, ETAs, delivery photos, and usage insights arrive in North Star.</div>`}
 </div>
 <div class="modal-foot">${ns?`<button class="btn" onclick="toast('Receiving confirmed · photos attached')">${ic('check','ic-14')} Confirm receipt</button>`:''} ${o.status==='On-rent'?`<button class="btn" onclick="closeModal();openOffRent()">${ic('clock','ic-14')} Initiate off-rent</button>`:''}<button class="btn primary" onclick="closeModal()">Close</button></div>`,true);}
function ordTab(el,which){el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));el.classList.add('on');document.getElementById('ord-active').classList.toggle('hidden',which!=='active');document.getElementById('ord-history').classList.toggle('hidden',which!=='history');}

/* ================= BILLING: dispute + approve + tabs ================= */
function billTab(el,which){el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));el.classList.add('on');document.getElementById('bill-pending').classList.toggle('hidden',which!=='pending');document.getElementById('bill-budget').classList.toggle('hidden',which!=='budget');}
function openDispute(){const ns=effMode('p-billing')==='northstar';
 if(!ns){
   openModal(`<div class="modal-head"><div><h3>Correct cost / task code</h3><div class="sub">BILL-9012 · Excavator 45–55T · $8,400 · 2 days left in window</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div>
   <div class="modal-body">
     <div class="field-row" style="margin-bottom:6px"><div class="field"><label>Job / Dept</label><input value="004987.01"></div><div class="field"><label>Expenditure</label><input value="3005"></div><div class="field"><label>Task code</label><input value="2000"></div></div>
     <div style="font-size:11.5px;color:var(--gray-500);margin-bottom:12px">Full code <span class="code-chip">010200.3005.2000</span> · applies to this bill only.</div>
     <div class="field"><label>Note <span class="opt">optional</span></label><textarea rows="2" placeholder="e.g. should be coded to civil earthwork, not general conditions">Should be coded to civil earthwork (task 2000), not general conditions.</textarea></div>
   </div>
   <div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Cost code corrected on BILL-9012 · written back to YardHub')">${ic('check','ic-14')} Save corrected code</button></div>`,true);
   return;
 }
 const reasons=['Wrong rate vs. MSA','Wrong cost / task code','On-rent date incorrect','Off-rent date incorrect','Rental duration incorrect','Equipment returned / off-rented early','Equipment not delivered / no-show','Damaged on arrival','Duplicate bill','Other'];
 openModal(`<div class="modal-head"><div><h3>Dispute bill</h3><div class="sub">BILL-9012 · Excavator 45–55T · $8,400 · 2 days left in window</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div>
 <div class="modal-body">
   <div class="modal-step"><span class="step-n">1</span><span class="step-t">Correct cost / task code</span></div>
   <div class="field-row" style="margin-bottom:6px"><div class="field"><label>Job / Dept</label><input value="004987.01"></div><div class="field"><label>Expenditure</label><input value="3005"></div><div class="field"><label>Task code</label><input value="2000"></div></div>
   <div style="font-size:11.5px;color:var(--gray-500);margin-bottom:14px">Full code <span class="code-chip">010200.3005.2000</span> · applies to this bill only. <button class="btn sm" style="margin-left:6px" onclick="closeModal();toast('Cost code corrected on BILL-9012')">${ic('check','ic-14')} Save code only</button></div>
   <div class="modal-step"><span class="step-n">2</span><span class="step-t">Raise a dispute</span></div>
   <div class="field"><label>Dispute reason</label><select>${reasons.map(o=>`<option>${o}</option>`).join('')}</select></div>
   <div class="field-row"><div class="field"><label>On-rent date on bill</label><input type="date" value="2026-06-01"></div><div class="field"><label>Actual on-rent date</label><input type="date" value="2026-06-01"></div></div>
   <div class="field-row"><div class="field"><label>Off-rent date on bill</label><input type="date" value="2026-12-15"></div><div class="field"><label>Actual off-rent date</label><input type="date" value="2026-12-15"></div></div>
   <div class="field-row"><div class="field"><label>Billed rate</label><input value="$8,400/mo"></div><div class="field"><label>MSA rate</label><input value="$8,400/mo" placeholder="per MSA"></div></div>
   <div class="field"><label>Note to 02S</label><textarea rows="2" placeholder="e.g. unit was off-rented on Dec 1 per site log — please adjust duration">Rate is $8,400/mo but our MSA effective May 1 lists this class at $7,600/mo — please confirm and adjust.</textarea></div>
   <div class="field"><label>Attach evidence <span class="opt">optional</span></label><div class="dropzone" onclick="this.nextElementSibling.classList.remove('hidden');toast('File attached to dispute')">${ic('upload','ic-16')} Drop the MSA, delivery ticket, or off-rent confirmation</div><span class="filechip hidden">${ic('file','ic-14')} MSA_2026_rates.pdf</span></div>
 </div>
 <div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Dispute raised on BILL-9012 — finalization paused, 02S notified')">${ic('flag','ic-14')} Submit dispute</button></div>`,true);}
function approveBill(){openConfirm('Approve &amp; finalize?','Approving BILL-9012 ($8,400) routes it to YardHub for finalization. This is captured with your name, timestamp, and closes the 10-day window for this bill.','Approve → finalize',()=>toast('Bill approved → routed to YardHub for finalization'));}

/* ================= command: owned-vs-rerent expand ================= */
function ovrPanelHTML(ctx){const c=ctx||'2× tower crane · Alpha';return `<div class="ovr"><div class="opt win"><div class="lbl">Use owned</div><div class="val">$18,400</div><div class="meta">#EX-2231 idle · West yard · 42 mi · 1-day mob</div><span class="tagwin">Recommended</span></div><div class="opt"><div class="lbl">Re-rent</div><div class="val">$26,900</div><div class="meta">Vendor MSA · available now</div></div></div><div style="font-size:12px;color:var(--charcoal-700);margin-top:10px">Owned unit available in window · transport justified by duration · within service-node distance · no near-term demand at current location.</div><div style="display:flex;gap:8px;margin-top:10px"><button class="btn primary sm" onclick="ovrValidate('${esc(c)}')">${ic('check','ic-14')} Validate — use owned</button><button class="btn sm" onclick="ovrDecline('${esc(c)}')">${ic('close','ic-14')} Decline &amp; capture reason</button></div>`;}
function ovrValidate(ctx){openModal(`<div class="modal-head"><div><h3>Validate recommendation</h3><div class="sub">${ctx} · use owned #EX-2231</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="limit-note" style="background:var(--ok-050);border-color:#BEE3CC;color:var(--charcoal-700)">${ic('check','ic-16')}<div>Confirming routes this to YardHub as an <b>owned</b> transfer and books the mobilization. Saves <b>$8,500</b> vs re-rent.</div></div><div class="field"><label>Note <span class="opt">optional</span></label><textarea rows="2" placeholder="e.g. confirmed unit condition with West yard; mob booked for Mon"></textarea></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Validated — routed to YardHub as owned · decision logged')">${ic('check','ic-14')} Confirm — use owned</button></div>`);}
function ovrDecline(ctx){openModal(`<div class="modal-head"><div><h3>Decline recommendation</h3><div class="sub">${ctx} · overriding "use owned"</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><p style="font-size:12.5px;color:var(--charcoal-700);margin:0 0 12px">As equipment manager you can override the owned recommendation. Capture why — this feeds the recommendation model and the CAPEX signal.</p>
   <div class="field"><label>Reason <span class="req">required</span></label><select id="ovrReasonSel"><option>Owned unit condition / maintenance hold</option><option>Reserved for higher-priority job</option><option>Transport cost / distance not justified</option><option>Timing — owned unit not free in window</option><option>Project requested specific vendor spec</option><option>Other (explain below)</option></select></div>
   <div class="field"><label>Details</label><textarea id="ovrReasonTxt" rows="3" placeholder="Add context for the record — e.g. EX-2231 is down for hydraulic service until the 18th; re-renting to hold the Alpha crane window.">EX-2231 is in for hydraulic service until the 18th — re-renting to protect the Alpha crane window.</textarea></div>
   <div class="field"><label>Fulfillment instead</label><select><option>Re-rent — vendor MSA ($26,900)</option><option>Owned from another yard</option><option>Defer / hold</option></select></div>
 </div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn dark" onclick="closeModal();toast('Declined — reason captured, fed to model &amp; CAPEX signal')">${ic('flag','ic-14')} Decline &amp; record reason</button></div>`,true);}
function toggleOVR(row){const n=row.nextElementSibling;if(n&&n.classList.contains('_ovr')){n.remove();return;}
 if(row.tagName==='TR'){const tr=document.createElement('tr');tr.className='_ovr';tr.innerHTML=`<td colspan="4" style="padding:0"><div class="expand-body">${ovrPanelHTML()}</div></td>`;row.after(tr);}
 else{const div=document.createElement('div');div.className='_ovr';div.innerHTML=`<div class="expand-body">${ovrPanelHTML()}</div>`;row.after(div);}}
/* ================= CAPEX: ranked buy list → CAPEX plan ================= */
const CAPEX_BUYS=[
 {id:'cr-crane',cat:'Tower cranes',buy:'2',why:'Recurring shortfall + $1.8M re-rent/yr',valNum:1.8,val:'$1.8M'},
 {id:'cr-form',cat:'Modular formwork',buy:'2 sets',why:'Productivity + high reuse across jobs',valNum:0.9,val:'$0.9M'},
 {id:'cr-gen',cat:'Generators 100kW',buy:'4',why:'Sustained demand, short payback',valNum:0.7,val:'$0.7M'}
];
let CAPEX_PLAN=[]; // validated ids
function renderCapexBuyList(){const el=document.getElementById('capexBuyList');if(!el)return;
 el.innerHTML=`<div class="lrow lhead" style="grid-template-columns:1.2fr .6fr 1.5fr .7fr 1.1fr"><div>Category</div><div>Buy</div><div>Why</div><div>Value</div><div></div></div>`+
 CAPEX_BUYS.map(b=>{const inPlan=CAPEX_PLAN.includes(b.id);return `<div class="lrow ${inPlan?'row-done':''}" style="grid-template-columns:1.2fr .6fr 1.5fr .7fr 1.1fr"><div class="pri">${b.cat}</div><div>${b.buy}</div><div style="color:var(--gray-500);font-size:12px">${b.why}</div><div><b>${b.val}</b></div><div style="display:flex;gap:5px;justify-content:flex-end">${inPlan?`<span class="chip ok">${ic('check','ic-14')} In plan</span>`:`<button class="btn primary sm" onclick="capexValidate('${b.id}')">Validate</button><button class="btn ghost sm" onclick="capexDecline('${b.id}')">Decline</button>`}</div></div>`;}).join('');}
function renderCapexPlan(){const body=document.getElementById('capexPlanBody');if(!body)return;
 const items=CAPEX_BUYS.filter(b=>CAPEX_PLAN.includes(b.id));
 const total=items.reduce((s,b)=>s+b.valNum,0);
 document.getElementById('capexPlanTotal').textContent=total?('$'+total.toFixed(1)+'M'):'$0';
 document.getElementById('capexPlanCount').textContent=items.length?`${items.length} item${items.length>1?'s':''} validated`:'empty';
 document.getElementById('capexSubmitBtn').style.display=items.length?'flex':'none';
 const lbl=document.getElementById('capexSubmitLbl');if(lbl)lbl.textContent=effMode('c-capex')==='northstar'?'Submit to Anaplan → Control Tower':'Submit CAPEX plan';
 if(!items.length){body.innerHTML=`<div class="capex-empty">${ic('clipboard','ic-20')}<div><b>No line items yet</b><div style="font-size:11.5px;color:var(--gray-500);margin-top:3px">Validate items from the ranked buy list and they'll populate here, building the plan with a running total.</div></div></div>`;return;}
 body.innerHTML=`<div class="list">${items.map(b=>`<div class="lrow" style="grid-template-columns:1.5fr .6fr .8fr .5fr"><div class="pri">${b.cat}</div><div>${b.buy}</div><div><b>${b.val}</b></div><div style="text-align:right"><button class="btn ghost sm" title="Remove" onclick="capexRemove('${b.id}')">${ic('close','ic-14')}</button></div></div>`).join('')}</div>`;}
function capexSubmit(){const ns=effMode('c-capex')==='northstar';
 if(!ns){openModal(`<div class="modal-head"><div><h3>CAPEX plan submitted</h3><div class="sub">V1 · on screen for review</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="vrow ok">${ic('check','ic-16')}<div><b>Plan captured</b><div class="vh">Your validated buy list is saved and shown here for leadership review. In V1 the plan lives on this screen — export or share it manually.</div></div></div><div style="display:flex;gap:8px;margin-top:12px"><button class="btn" onclick="toast('Exported to PDF (demo)')">${ic('file','ic-14')} Export PDF</button><button class="btn" onclick="toast('Link copied (demo)')">${ic('link','ic-14')} Copy share link</button></div></div><div class="modal-foot"><button class="btn primary" onclick="closeModal()">Done</button></div>`,true);return;}
 openModal(`<div class="modal-head"><div><h3>Submit to Anaplan → Control Tower</h3><div class="sub">North Star · connected</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="ai-panel" style="margin:0 0 12px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">What happens on submit</div></div><div class="ctx" style="margin-bottom:0">The validated CAPEX plan pushes to <b>Anaplan</b> as a capital request, and links into the <b>Control Tower</b> so leadership sees it against enterprise FP&amp;A, YoY forecast, and fleet utilization — with the buy rationale attached.</div></div><div class="valid-list"><div class="vrow ok">${ic('check','ic-16')}<div><b>Push to Anaplan</b><div class="vh">Capital request created · model 02S_FY25_Plan_v3</div></div></div><div class="vrow ok">${ic('link','ic-16')}<div><b>Link to Control Tower</b><div class="vh">Appears under Allocation &amp; G&amp;A and enterprise FP&amp;A</div></div></div><div class="vrow ok">${ic('chart','ic-16')}<div><b>Attach evidence</b><div class="vh">Buy-vs-rent, utilization, and payback travel with the request</div></div></div></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('CAPEX plan pushed to Anaplan &amp; linked to Control Tower')">${ic('send','ic-14')} Submit &amp; connect</button></div>`,true);}
function refreshCapex(){renderCapexBuyList();renderCapexPlan();}
function capexValidate(cid){const b=CAPEX_BUYS.find(x=>x.id===cid);if(!b)return;openModal(`<div class="modal-head"><div><h3>Validate for CAPEX</h3><div class="sub">${b.cat} · buy ${b.buy} · ${b.val}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="limit-note" style="background:var(--ok-050);border-color:#BEE3CC;color:var(--charcoal-700)">${ic('check','ic-16')}<div>Validating adds <b>${b.cat}</b> to the CAPEX plan and captures your name, timestamp, and reasoning for the model.</div></div><div class="field"><label>Validation reasoning <span class="opt">recommended</span></label><textarea rows="2" placeholder="e.g. gap confirmed across 3 jobs through Q3; re-rent spend justifies purchase">Gap confirmed across the pipeline; recurring re-rent spend justifies the buy.</textarea></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="capexConfirm('${cid}')">${ic('check','ic-14')} Validate &amp; add to plan</button></div>`);}
function capexConfirm(cid){if(!CAPEX_PLAN.includes(cid))CAPEX_PLAN.push(cid);closeModal();refreshCapex();const b=CAPEX_BUYS.find(x=>x.id===cid);toast(b.cat+' validated → added to CAPEX plan');}
function capexRemove(cid){CAPEX_PLAN=CAPEX_PLAN.filter(x=>x!==cid);refreshCapex();toast('Removed from CAPEX plan');}
function capexDecline(cid){const b=CAPEX_BUYS.find(x=>x.id===cid);openModal(`<div class="modal-head"><div><h3>Decline buy recommendation</h3><div class="sub">${b.cat} · excluding from CAPEX</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="field"><label>Reason <span class="req">required</span></label><select><option>One-off spike — not sustained demand</option><option>Re-rent more cost-effective</option><option>Capital constrained this cycle</option><option>Prefer to redeploy existing fleet</option><option>Other</option></select></div><div class="field"><label>Details</label><textarea rows="2" placeholder="Captured for the record and the model"></textarea></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn dark" onclick="closeModal();toast('${b.cat} declined — reason captured, excluded from buy signal')">${ic('flag','ic-14')} Decline &amp; record</button></div>`);}
/* ---- Command Center billing: dynamic invoice state ---- */
const INVOICES=[
 {id:'INV-5521',eq:'2× excavator 45–55T',check:'Rate',chipClass:'red',billed:16800,corrected:15200,variance:'+$1,600',issue:'Rate above contract',detail:'Vendor billed $8,400/mo; contracted rate is $7,600/mo. Regenerating at the contracted rate recovers $1,600 before the billing goes to the project.',action:'Regenerate at $7,600',status:'flagged'},
 {id:'INV-5518',eq:'1× tower crane',check:'Late start',chipClass:'warn',billed:28000,corrected:29680,variance:'−6 days',issue:'Late billing start',detail:'On-rent date was Jun 1 but billing starts Jun 7 — 6 billable days uncaptured. Correcting the start recovers the days.',action:'Correct start date',status:'flagged'},
 {id:'INV-5510',eq:'20× scissor lift',check:'PO mismatch',chipClass:'gray',billed:29600,corrected:26640,variance:'2 units',issue:'PO / double-bill mismatch',detail:'Invoice bills 20 units; PO and delivery confirm 18. 2 units are over-billed. Correcting matches the invoice to what was received.',action:'Correct to 18 units',status:'flagged'},
 {id:'INV-5505',eq:'4× generator 100kW',check:'Clean',chipClass:'ok',billed:12400,corrected:12400,variance:'—',issue:'',detail:'',action:'',status:'clean'}
];
function billStatsHTML(){const awaiting=INVOICES.filter(i=>i.status==='flagged').length;const flagged=INVOICES.filter(i=>i.status==='flagged').length;const atRisk=INVOICES.filter(i=>i.status==='flagged').reduce((s,i)=>s+Math.abs(i.billed-i.corrected),0);const ready=INVOICES.filter(i=>i.status==='clean'||i.status==='corrected').length;
 return `<div class="edp-stat"><div class="k">Awaiting review</div><div class="n">${awaiting}</div><div class="s">vendor invoices</div></div><div class="edp-stat"><div class="k">Anomalies flagged</div><div class="n">${flagged}</div><div class="s">across 3 checks</div></div><div class="edp-stat cost"><div class="k">Margin at risk</div><div class="n">${atRisk>=1000?'$'+(atRisk/1000).toFixed(1)+'K':money(atRisk)}</div><div class="s">if paid as-billed</div></div><div class="edp-stat"><div class="k">Ready to send</div><div class="n">${ready}</div><div class="s">billings to projects</div></div>`;}
function invoiceRowsHTML(){return INVOICES.map(inv=>{
 const cols='grid-template-columns:1fr 1.2fr 1fr 1.1fr 1fr';
 if(inv.status==='flagged') return `<div class="lrow" style="${cols};background:var(--red-050)"><div class="pri">${inv.id}</div><div>${inv.eq}</div><div><span class="chip ${inv.chipClass}">${inv.check}</span></div><div style="color:var(--red);font-weight:700">${money(inv.billed)} <span style="font-size:10px;font-weight:600">billed</span></div><div><button class="btn sm primary" onclick="reviewInvoice('${inv.id}')">Review</button></div></div>`;
 if(inv.status==='corrected') return `<div class="lrow" style="${cols};background:var(--ok-050)"><div class="pri">${inv.id}</div><div>${inv.eq}</div><div><span class="chip ok">${ic('check','ic-14')} Corrected</span></div><div style="font-weight:700"><span style="text-decoration:line-through;color:var(--gray-400);font-weight:500">${money(inv.billed)}</span> ${money(inv.corrected)}</div><div><button class="btn sm" onclick="sendBilling('${inv.id}')">Send billing</button></div></div>`;
 if(inv.status==='sent') return `<div class="lrow" style="${cols}"><div class="pri">${inv.id}</div><div>${inv.eq}</div><div><span class="chip ok">${ic('check','ic-14')} Sent</span></div><div style="font-weight:700">${money(inv.corrected)}</div><div style="text-align:right;color:var(--gray-500);font-size:11px">to project ✓</div></div>`;
 return `<div class="lrow" style="${cols}"><div class="pri">${inv.id}</div><div>${inv.eq}</div><div><span class="chip ok">Clean</span></div><div style="font-weight:700">${money(inv.billed)}</div><div><button class="btn sm" onclick="sendBilling('${inv.id}')">Send billing</button></div></div>`;}).join('');}
function billRefresh(){const r=document.getElementById('invRows');if(r)r.innerHTML=invoiceRowsHTML();const s=document.getElementById('billStats');if(s)s.innerHTML=billStatsHTML();}
function reviewInvoice(id){const inv=INVOICES.find(x=>x.id===id);if(!inv)return;const recovered=Math.abs(inv.billed-inv.corrected);
 openModal(`<div class="modal-head"><div><h3>Review invoice ${id}</h3><div class="sub">${inv.eq} · <span class="chip ${inv.chipClass}">${inv.issue}</span></div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="limit-note" style="background:var(--red-050);border-color:var(--red-100);color:var(--charcoal-700)">${ic('warning','ic-16')}<div>${inv.detail}</div></div>
   <div class="inv-compare"><div class="ic-col"><div class="ic-lbl">As billed</div><div class="ic-amt bad">${money(inv.billed)}</div></div><div class="ic-arrow">${ic('chevronRight','ic-16')}</div><div class="ic-col"><div class="ic-lbl">Corrected</div><div class="ic-amt good">${money(inv.corrected)}</div></div><div class="ic-col ic-delta"><div class="ic-lbl">${inv.corrected<inv.billed?'Recovered':'Recaptured'}</div><div class="ic-amt">${money(recovered)}</div></div></div>
   <div style="font-size:12px;color:var(--charcoal-700);margin:0">Regenerating corrects the vendor invoice, then generates the project billing from the corrected figures and sends it to the project team's Pending approval.</div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn dark" onclick="invRegenerate('${id}')">${inv.action}</button><button class="btn primary" onclick="invRegenerate('${id}',true)">${ic('send','ic-14')} Regenerate &amp; send</button></div>`,true);}
function invRegenerate(id,send){const inv=INVOICES.find(x=>x.id===id);if(!inv)return;inv.status=send?'sent':'corrected';closeModal();billRefresh();
 toast(send?`${id} corrected to ${money(inv.corrected)} & billing sent to project`:`${id} regenerated — now ${money(inv.corrected)}`);}
function sendBilling(id){const inv=INVOICES.find(x=>x.id===id);openConfirm('Send billing to project?','Invoice '+id+' is ready. Sending generates the project billing ('+money(inv.corrected)+') and places it in the project team&rsquo;s Pending billing approval (10-day window).','Send billing',()=>{inv.status='sent';billRefresh();toast(id+' billing sent to project team');});}

/* ================= contact/support chat ================= */
function sendChat(inputId,boxId,bot){const inp=document.getElementById(inputId);const v=inp.value.trim();if(!v)return;const box=document.getElementById(boxId);if(!box){inp.value='';toast('Message sent to 02S');return;}box.insertAdjacentHTML('beforeend',`<div class="bub me"><div class="who">You</div>${v}</div>`);inp.value='';box.scrollTop=box.scrollHeight;if(bot){setTimeout(()=>{box.insertAdjacentHTML('beforeend',`<div class="bub them"><div class="who">02S Assistant</div>Thanks — I can help with that. I found order <b>ORD-3042</b> tied to this job; want me to open a support ticket or route you to the equipment desk?</div>`);box.scrollTop=box.scrollHeight;},700);}}
function chatKey(e,inputId,boxId,bot){if(e.key==='Enter')sendChat(inputId,boxId,bot);}
function supNav(screen){enter('portal');nav('portal',screen);}
function setBudgetAlert(){openModal(`<div class="modal-head"><div><h3>Configure budget alerts</h3><div class="sub">cost-overrun guardrails · this project</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><p style="font-size:12.5px;color:var(--charcoal-700);margin:0 0 12px">02S auto-monitors committed spend against budget by cost code and pillar, and alerts before an overrun — not after.</p><div class="field"><label>Warn the project team at</label><select><option>90% committed</option><option>85% committed</option><option>95% committed</option></select></div><div class="field"><label>Escalate to PM + 02S ops at</label><select><option>100% committed</option><option>95% committed</option></select></div><div class="field"><label>Require approval for new orders above</label><select><option>105% of budget</option><option>100% of budget</option><option>Never block</option></select></div><div class="field"><label>Notify</label><select><option>PM + Project Accountant</option><option>PM only</option><option>Whole team</option></select></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Budget alert thresholds saved')">${ic('check','ic-14')} Save thresholds</button></div>`,true);}
/* delivery photo thumbnails (inline SVG stand-ins) + lightbox */
function photoThumb(i){const scenes=[
  `<svg viewBox="0 0 120 90"><rect width="120" height="90" fill="#DCE3EA"/><rect y="60" width="120" height="30" fill="#B8C2CC"/><rect x="18" y="30" width="54" height="34" rx="3" fill="#E8B14C"/><rect x="30" y="20" width="30" height="14" rx="2" fill="#E8B14C"/><circle cx="30" cy="66" r="7" fill="#3A3A3A"/><circle cx="60" cy="66" r="7" fill="#3A3A3A"/></svg>`,
  `<svg viewBox="0 0 120 90"><rect width="120" height="90" fill="#D8DEE4"/><rect x="10" y="46" width="100" height="22" rx="2" fill="#6B7683"/><rect x="16" y="30" width="80" height="18" rx="2" fill="#E8B14C"/><circle cx="28" cy="70" r="6" fill="#2A2A2A"/><circle cx="52" cy="70" r="6" fill="#2A2A2A"/><circle cx="92" cy="70" r="6" fill="#2A2A2A"/><line x1="20" y1="30" x2="96" y2="48" stroke="#C43A2B" stroke-width="2"/></svg>`,
  `<svg viewBox="0 0 120 90"><rect width="120" height="90" fill="#EFEFEF"/><rect x="30" y="14" width="60" height="66" rx="3" fill="#fff" stroke="#CBD2D9"/><line x1="40" y1="28" x2="80" y2="28" stroke="#9AA5B1" stroke-width="3"/><line x1="40" y1="40" x2="80" y2="40" stroke="#C4CDD5" stroke-width="2"/><line x1="40" y1="50" x2="72" y2="50" stroke="#C4CDD5" stroke-width="2"/><line x1="40" y1="60" x2="76" y2="60" stroke="#C4CDD5" stroke-width="2"/></svg>`
 ];return scenes[i]||scenes[0];}
function openPhoto(i){const caps=['Loaded at West yard · 8:05a','Secured on trailer · 8:20a','BOL / paperwork · signed'];
 openModal(`<div class="modal-head"><div><h3>Delivery photo ${i+1} of 3</h3><div class="sub">ORD-3042 · ${caps[i]}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="photo-big">${photoThumb(i)}</div><div class="photo-nav">${[0,1,2].map(n=>`<button class="pn-thumb ${n===i?'on':''}" onclick="openPhoto(${n})">${photoThumb(n)}</button>`).join('')}</div></div>`,true);}
function cPillarTab(el,idx){el.parentElement.querySelectorAll('.pn-tab').forEach(t=>t.classList.remove('on'));el.classList.add('on');document.getElementById('cPillarBody').innerHTML=cPillarIntel(idx);}
/* Dedicated NS Command Center page per pillar */
const CPILLAR={
 prefab:{name:'Prefab',color:'var(--prefab)',accent050:'var(--prefab-050)',intel:2,open:6,val:'$210K',unit:'assemblies',sla:'96%',route:'Managed queue + shop scheduling',
   rows:[['Level-2 headwall','Mercy Hospital','12','Aug 15','Acknowledged'],['Prefab MEP rack','Hercules Solar + BESS','8','Sep 1','New'],['Bathroom pod','Riverside Office','24','Oct 10','New']],
   gantt:[['Headwalls',0,0,55,'48','group'],['— Mercy Hospital',1,20,45,'12',''],['— Baystate Med',2,45,40,'36',''],['MEP racks',0,10,60,'40','group'],['Bathroom pods',0,55,40,'60','group'],['Utility vaults',0,30,35,'18','group']]},
 proc:{name:'Procurement',color:'var(--proc)',accent050:'var(--proc-050)',intel:0,open:12,val:'$96K',unit:'POs',sla:'94%',route:'PO issuance + supplier management',
   rows:[['Safety supplies bundle','Riverside Office','40','Jun 1','Acknowledged'],['EV charger package','Mercy Hospital','6','Oct 1','New'],['Small tools kit','Hercules Solar + BESS','15','Jun 1','New']],
   gantt:[['EV chargers',0,40,45,'22','group'],['— Mercy Hospital',1,55,30,'6',''],['— Civic Center',2,60,35,'16',''],['Electrical gear',0,15,70,'—','group'],['Safety consumables',0,0,95,'40','group'],['Steel & metals',0,25,50,'—','group']]},
 log:{name:'Logistics',color:'var(--logistics)',accent050:'var(--logistics-050)',intel:1,open:4,val:'$54K',unit:'moves',sla:'91%',route:'3PL dispatch + site delivery',
   rows:[['Warehousing','Hercules Solar + BESS','2,000 sf','Jul 1','Acknowledged'],['Heavy haul — transformer','Hercules Solar + BESS','1','Jun 9','New'],['Waste & recycling','Riverside Office','3','Jun 15','Acknowledged']],
   gantt:[['Warehousing',0,25,60,'3','group'],['— Hercules Solar',1,30,50,'1',''],['Site deliveries',0,0,95,'daily','group'],['Heavy haul',0,20,15,'2','group'],['Waste & recycling',0,10,80,'3','group']]},
 profsvc:{name:'Professional services',color:'var(--profsvc)',accent050:'var(--profsvc-050)',intel:3,open:5,val:'$26K',unit:'engagements',sla:'89%',route:'Specialist scheduling',
   rows:[['Subsurface utility mapping','Hercules Solar + BESS','1','Jun 20','New'],['Commissioning','Mercy Hospital','1','Nov 1','New'],['Third-party inspection','Riverside Office','As-needed','Aug 1','Acknowledged']],
   gantt:[['Commissioning',0,60,35,'4','group'],['— Mercy Hospital',1,80,15,'1',''],['Utility mapping',0,15,20,'2','group'],['Inspections',0,30,60,'8','group'],['Survey crews',0,20,45,'3','group']]}
};
function commandPillarPage(key){const p=CPILLAR[key];const c=p.color;const sid='c-pill-'+key;
 return `<div class="page-head"><div><button class="clink" style="margin-bottom:6px" onclick="setProductMode('c-pillars','v1');nav('command','c-pillars')">${ic('chevronLeft','ic-14')} All pillar plans</button><h2>${p.name} demand plan — ops view</h2><div class="desc">Cross-project ${p.name.toLowerCase()} demand, fulfillment, and intelligence — same granular tracking as equipment.</div></div>${prodToggle(sid)}</div>
 <div class="v1-only"><div class="limit-note" style="background:var(--steel-050);border-color:#CFE0EF">${ic('layers','ic-16')}<div><b>V1 is deliberately simple for ${p.name.toLowerCase()}:</b> this per-pillar intelligence surface is a North Star concept. In V1 you'd see submitted demand and update status from the <b>Other pillar plans</b> list — switch this toggle to North Star to preview the target-state view.</div></div><div style="text-align:center;margin-top:14px"><button class="btn" onclick="setProductMode('${sid}','northstar')">${ic('sparkle','ic-14')} Preview the North Star view</button></div></div>
 <div class="ns-only">
 <div class="edp-stats" style="margin-top:14px"><div class="edp-stat"><div class="k">Active projects</div><div class="n">${8+p.intel}</div><div class="s">contributing demand</div></div><div class="edp-stat cost"><div class="k">Planned + in-flight</div><div class="n">${p.val}</div><div class="s">${p.name.toLowerCase()}, this quarter</div></div><div class="edp-stat"><div class="k">Open requests</div><div class="n">${p.open}</div><div class="s">across projects</div></div><div class="edp-stat"><div class="k">SLA on-time</div><div class="n">${p.sla}</div><div class="s">trailing 90d</div></div></div>
 <div class="card" style="margin:16px 0"><div class="ch"><span class="ci" style="background:${c}1a;color:${c}">${ic('inbox','ic-16')}</span><span class="t">${p.name} demand across projects</span><span class="sub">select a row to review &amp; fulfill</span></div>
   <div class="list"><div class="lrow lhead" style="grid-template-columns:1.8fr 1.6fr .7fr .8fr 1fr 1.1fr"><div>Item / service</div><div>Project</div><div>Qty</div><div>Need by</div><div>Status</div><div></div></div>
   ${p.rows.map((r,i)=>`<div class="lrow" style="grid-template-columns:1.8fr 1.6fr .7fr .8fr 1fr 1.1fr"><div class="pri"><span class="pdot" style="background:${c}"></span>${r[0]}</div><div style="color:var(--gray-500)">${r[1]}</div><div>${r[2]}</div><div>${r[3]}</div><div><span class="chip ${r[4]==='New'?'gray':'warn'}">${r[4]}</span></div><div style="display:flex;gap:6px;justify-content:flex-end"><button class="btn ghost sm" onclick="pillarUpdate('${r[0]}','${r[1]}')">Update</button><button class="btn primary sm" onclick="pillarFulfill('${r[0]}','${r[1]}')">Fulfill</button></div></div>`).join('')}</div>
 </div>
 <div class="card" style="margin-bottom:16px"><div class="ch"><span class="ci k2">${ic('calendar','ic-16')}</span><span class="t">Portfolio demand — projected + in-flight</span><span class="sub">by ${p.name.toLowerCase()} category / project</span></div>
   <div class="gantt2"><div class="g2-row head"><div class="g2-left"><span class="sub" style="font-weight:700;color:var(--gray-500)">Category / project</span></div><div class="g2-track">${MONTHS.map(m=>`<span>${m}</span>`).join('')}</div><div class="g2-cost" style="font-size:10px;color:var(--gray-500)">${p.unit}</div></div>
   ${p.gantt.map(r=>`<div class="g2-row ${r[5]==='group'?'group':'line'}"><div class="g2-left"><span class="nm">${r[0]}</span></div><div class="g2-track"><div class="gbar ${r[5]==='group'?'gbar-agg':''}" style="left:${r[2]}%;width:${r[3]-2}%;background:${r[5]==='group'?c:c};opacity:${r[5]==='group'?1:.6}"></div></div><div class="g2-cost">${r[4]}</div></div>`).join('')}
   </div>
 </div>
 <div class="illus-banner">${ic('flag','ic-16')}<div><b>ILLUSTRATIVE — North Star concept.</b> The intelligence below shows the kind of ${p.name.toLowerCase()} decision support 02S could generate at full depth. Fabricated to convey the idea.</div></div>
 ${cPillarIntel(p.intel)}
 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci" style="background:${c}1a;color:${c}">${ic('clipboard','ic-16')}</span><span class="t">Project teams' submitted plans</span><span class="sub">click to view</span></div>
   <div class="list" style="margin-top:10px"><div class="lrow lhead" style="grid-template-columns:1.4fr 1fr .8fr .8fr .9fr"><div>Project</div><div>Submitted</div><div>Lines</div><div>Est. value</div><div>Status</div></div>
     ${[['Hercules Solar + BESS','Jun 28','4','$31,200','Accepted'],['Project Alpha','Jun 20','2','$19,400','Accepted'],['Project Nexus','Jul 3','3','$26,800','Pending'],['Mercy Hospital','Jul 8','1','$11,600','Draft']].map(r=>`<div class="lrow click" style="grid-template-columns:1.4fr 1fr .8fr .8fr .9fr" onclick="toast('Opening ${r[0]} ${p.name.toLowerCase()} plan (demo) — full plan view coming in next build')"><div class="pri">${r[0]} ${ic('chevronRight','ic-14')}</div><div style="color:var(--gray-500)">${r[1]}</div><div>${r[2]}</div><div>${r[3]}</div><div><span class="chip ${r[4]==='Accepted'?'ok':r[4]==='Pending'?'warn':'gray'}">${r[4]}</span></div></div>`).join('')}
   </div>
 </div>
 </div>`;}
function cPillarIntel(idx){
 if(idx===0){ // Procurement — strategic supplier lists by performance
   return `<div class="grid g2">
     <div class="card"><div class="ch"><span class="ci" style="background:var(--proc-050);color:var(--proc)">${ic('cart','ic-16')}</span><span class="t">Strategic supplier scorecard</span><span class="sub">by cat class</span><span class="illus-tag">Illustrative</span></div><div class="list"><div class="lrow lhead" style="grid-template-columns:1.5fr 1.2fr .7fr .7fr .9fr"><div>Supplier</div><div>Cat class</div><div>On-time</div><div>Price idx</div><div>Tier</div></div>${[['White Cap','Consumables & tools','96%','0.98','Preferred','ok'],['Grainger','MRO & safety','94%','1.01','Preferred','ok'],['Ferguson','Mechanical & plumbing','92%','1.02','Preferred','ok'],['Fastenal','Fasteners & tools','89%','0.97','Approved','ok'],['HD Supply','Electrical & specialties','83%','1.09','Review','warn'],['Regional Steel Co','Steel & metals','71%','1.14','At risk','red']].map(r=>`<div class="lrow" style="grid-template-columns:1.5fr 1.2fr .7fr .7fr .9fr"><div class="pri">${r[0]}</div><div style="color:var(--gray-500);font-size:11.5px">${r[1]}</div><div>${r[2]}</div><div>${r[3]}</div><div><span class="chip ${r[5]}">${r[4]}</span></div></div>`).join('')}</div><div class="pintel-note">Ranked within each cat class by blended on-time, price index, and quality across all 02S jobs — steers volume to the strongest partners and flags who to renegotiate or replace.</div></div>
     <div class="card"><div class="ch"><span class="ci" style="background:var(--proc-050);color:var(--proc)">${ic('dollar','ic-16')}</span><span class="t">Consolidation & volume plays</span><span class="illus-tag">Illustrative</span></div><div class="pintel-list">${[['Consolidate consumables to White Cap across 3 regions','Est. $180K savings · 6% of spend'],['Shift electrical/specialties HD Supply → Grainger tier','Est. $95K · improve on-time 8 pts'],['National agreement with Grainger for MRO & safety','Est. $60K · 40 jobs']].map(r=>`<div class="pintel-row"><span class="pi-ico" style="background:var(--proc-050);color:var(--proc)">${ic('chart','ic-14')}</span><div><b>${r[0]}</b><div class="pi-sub">${r[1]}</div></div></div>`).join('')}</div></div>
   </div>`;
 }
 if(idx===1){ // Logistics — where to open warehouses
   return `<div class="grid g2">
     <div class="card"><div class="ch"><span class="ci" style="background:var(--logistics-050);color:var(--logistics)">${ic('map','ic-16')}</span><span class="t">Where to open a warehouse</span><span class="illus-tag">Illustrative</span></div><div class="pintel-list">${[['Phoenix, AZ','var(--logistics)','9 active jobs within 40 mi · high delivery density','Strong case'],['St. Louis, MO','var(--logistics)','5 jobs · 2 pursuits in pipeline','Emerging'],['Sacramento, CA','var(--gray-400)','3 jobs · sparse density','Hold']].map(r=>`<div class="pintel-row"><span class="pi-ico" style="background:var(--logistics-050);color:var(--logistics)">${ic('pin','ic-14')}</span><div style="flex:1"><b>${r[0]}</b><div class="pi-sub">${r[2]}</div></div><span class="chip ${r[3]==='Strong case'?'ok':r[3]==='Emerging'?'warn':'gray'}">${r[3]}</span></div>`).join('')}</div><div class="pintel-note">Clusters active jobs and pipeline by geography to size a new laydown/warehouse footprint and cut delivery miles.</div></div>
     <div class="card"><div class="ch"><span class="ci" style="background:var(--logistics-050);color:var(--logistics)">${ic('truck','ic-16')}</span><span class="t">Delivery density — Bay Area</span><span class="illus-tag">Illustrative</span></div>
       <div class="heatmap-wrap">
         <svg viewBox="0 0 320 200" width="100%" style="display:block;border-radius:10px;overflow:hidden">
           <rect width="320" height="200" fill="#EEF1F4"/>
           <!-- crude bay shape -->
           <path d="M150 0 C 140 40, 175 70, 160 110 S 130 170, 145 200 L 200 200 L 200 0 Z" fill="#D8E4EC"/>
           <!-- density blobs: hot cluster near Oakland/Hercules, cooler outward -->
           <g>
             ${[['Hercules',235,42,34,0.85],['Richmond',210,70,30,0.7],['Oakland',195,120,40,0.9],['Berkeley',205,95,24,0.6],['Concord',270,80,26,0.55],['San Ramon',285,130,22,0.4],['SF',120,150,30,0.5],['Fremont',250,175,24,0.45]].map(([nm,x,y,r,op])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="rgba(110,90,166,${op})"/>`).join('')}
           </g>
           <!-- job markers -->
           ${[['Hercules Solar',235,42],['Mercy Hospital',195,120],['Riverside Office',270,80]].map(([nm,x,y])=>`<g><circle cx="${x}" cy="${y}" r="4" fill="#fff" stroke="var(--charcoal)" stroke-width="1.5"/></g>`).join('')}
           <text x="235" y="30" font-size="8" font-weight="700" fill="var(--charcoal)" text-anchor="middle">Hercules</text>
           <text x="195" y="140" font-size="8" font-weight="700" fill="var(--charcoal)" text-anchor="middle">Oakland hub</text>
           <text x="270" y="68" font-size="8" font-weight="700" fill="var(--charcoal)" text-anchor="middle">Concord</text>
         </svg>
         <div class="heat-legend"><span>Fewer runs</span><span class="heat-scale"></span><span>More runs</span></div>
       </div>
       <div class="pintel-note" style="margin-top:10px">Concentration of 02S deliveries by zone (trailing 90 days). The <b>Oakland/Hercules corridor</b> is the densest cluster — a warehouse there would cut delivery miles across 9 active jobs. White dots are current jobsites.</div></div>
   </div>`;
 }
 if(idx===2){ // Prefab — anticipatory pre-builds by territory
   return `<div class="grid g2">
     <div class="card"><div class="ch"><span class="ci" style="background:var(--prefab-050);color:var(--prefab)">${ic('layers','ic-16')}</span><span class="t">Anticipatory pre-builds by territory</span><span class="illus-tag">Illustrative</span></div><div class="list"><div class="lrow lhead" style="grid-template-columns:1.4fr 1.4fr .8fr 1fr"><div>Assembly</div><div>Territory</div><div>Fcst qty</div><div>Signal</div></div>${[['Level-2 headwalls','Southwest (healthcare)','48','3 opps closing','ok'],['MEP racks','Mountain (data center)','120','2 pursuits','warn'],['Bathroom pods','West (multifamily)','60','pipeline-driven','warn'],['Utility vaults','Southwest (infra)','24','1 award','ok']].map(r=>`<div class="lrow" style="grid-template-columns:1.4fr 1.4fr .8fr 1fr"><div class="pri">${r[0]}</div><div style="color:var(--gray-500);font-size:12px">${r[1]}</div><div>${r[2]}</div><div><span class="chip ${r[4]}">${r[3]}</span></div></div>`).join('')}</div><div class="pintel-note">Projects prefab demand from the opportunity pipeline by territory so shops can pre-build common assemblies ahead of award and compress schedule.</div></div>
     <div class="card"><div class="ch"><span class="ci" style="background:var(--prefab-050);color:var(--prefab)">${ic('gauge','ic-16')}</span><span class="t">Shop capacity vs. anticipated load</span><span class="illus-tag">Illustrative</span></div><div style="display:flex;flex-direction:column;gap:12px;margin-top:4px">${[['Phoenix shop',72,'var(--prefab)'],['Tucson shop',94,'var(--red)'],['Las Vegas shop',48,'var(--prefab)']].map(r=>`<div><div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px"><b>${r[0]}</b><span style="color:var(--gray-500)">${r[1]}% loaded</span></div><div style="height:14px;background:var(--gray-100);border-radius:5px;overflow:hidden"><div style="width:${r[1]}%;height:100%;background:${r[2]}"></div></div></div>`).join('')}</div><div class="pintel-note" style="margin-top:12px">Tucson is over 90% — pull-forward pre-builds should route to Phoenix or Las Vegas.</div></div>
   </div>`;
 }
 // Professional services — deployment & utilization
 return `<div class="grid g2">
   <div class="card"><div class="ch"><span class="ci" style="background:var(--profsvc-050);color:var(--profsvc)">${ic('team','ic-16')}</span><span class="t">Specialist deployment plan</span><span class="illus-tag">Illustrative</span></div><div class="list"><div class="lrow lhead" style="grid-template-columns:1.6fr 1fr 1fr .9fr"><div>Discipline</div><div>Utilization</div><div>Next window</div><div>Status</div></div>${[['Subsurface utility mapping','88%','Jun · Hercules','ok'],['Commissioning (BESS/PV)','76%','Nov · Mercy','ok'],['Infrared thermography','54%','open','warn'],['Building automation','91%','booked','red']].map(r=>`<div class="lrow" style="grid-template-columns:1.6fr 1fr 1fr .9fr"><div class="pri">${r[0]}</div><div>${r[1]}</div><div style="color:var(--gray-500);font-size:12px">${r[2]}</div><div><span class="chip ${r[3]}">${r[3]==='ok'?'Available':r[3]==='warn'?'Slack':'Full'}</span></div></div>`).join('')}</div><div class="pintel-note">Matches specialized services (surveying, geospatial, commissioning, thermography) to project windows across the portfolio — surfaces under-used capacity and booking conflicts.</div></div>
   <div class="card"><div class="ch"><span class="ci" style="background:var(--profsvc-050);color:var(--profsvc)">${ic('bulb','ic-16')}</span><span class="t">Where to invest in-house</span><span class="illus-tag">Illustrative</span></div><div class="pintel-list">${[['Building automation demand > capacity','Recurring third-party spend $420K/yr → hire case'],['Geospatial/reality-capture rising','12 jobs used it this year, up from 4'],['Thermography under-used','Consider sharing across regions before adding heads']].map(r=>`<div class="pintel-row"><span class="pi-ico" style="background:var(--profsvc-050);color:var(--profsvc)">${ic('chart','ic-14')}</span><div><b>${r[0]}</b><div class="pi-sub">${r[1]}</div></div></div>`).join('')}</div></div>
 </div>`;
}
function askO2SFill(q){const inp=document.getElementById('ask02s');if(inp){inp.value=q;askO2S();inp.focus();}}
function askO2S(){const inp=document.getElementById('ask02s'),out=document.getElementById('askOut');if(!inp||!out)return;const q=(inp.value||'').toLowerCase();if(!q.trim()){out.innerHTML='';return;}
 let ans;
 if(q.includes('crane')||q.includes('shortfall')){ans={h:'3 projects are exposed to the August tower-crane shortfall.',rows:[['Mercy Hospital','needs 1 crane Aug 3 - steel + commissioning also land here','High'],['Project Alpha','2 cranes wk of May 20 - currently re-rented','Med'],['Project Nexus','3 cranes from Jun - covered if buy lands','Low']],note:'Recommended: pull the crane buy forward to Q3 (see the CAPEX plan) and re-sequence Mercy steel.',cta:['Open CAPEX plan','c-capex']};}
 else if(q.includes('save')||q.includes('money')||q.includes('cost')){ans={h:'About $72K is recoverable across the portfolio this month.',rows:[['Idle rentals','2 units billing while idle 6+ days','$14K'],['Rate over MSA','re-rent excavator +12% vs owned equivalent','$11K'],['Supplier consolidation','EV-charger buys across 3 regions','$47K']],note:'The first two are one-click from billings; the third needs a procurement play.',cta:['Open billings and invoicing','c-billing']};}
 else if(q.includes('risk')||q.includes('schedule')||q.includes('miss')){ans={h:'2 items are at real risk of missing schedule.',rows:[['Mercy Hospital sequence','crane + steel + commissioning collide in Q3','High'],['EV chargers','lead times +3 wks vs 3 job need-by dates','Med']],note:'Both trace back to cross-pillar timing - the action plan sequences the fixes.',cta:['Turn into an action plan','__action']};}
 else {ans={h:'Here is what stands out across 02S right now.',rows:[['Equipment','tower-crane gap opens in August','watch'],['Procurement','EV-charger lead times slipping','watch'],['Margin','$72K recoverable this month','act']],note:'Ask about a pillar, a project, cost, or schedule for a sharper answer.',cta:null};}
 out.innerHTML=`<div class="assist-out"><div class="ao-h">${ic('sparkle','ic-14')} ${ans.h}</div><div class="list">${ans.rows.map(r=>`<div class="lrow" style="grid-template-columns:1.4fr 2.4fr .8fr"><div class="pri">${r[0]}</div><div style="color:var(--gray-500);font-size:12px">${r[1]}</div><div style="text-align:right"><span class="chip ${r[2]==='High'?'red':r[2]==='Med'?'warn':r[2]==='act'?'ok':'gray'}">${r[2]}</span></div></div>`).join('')}</div><div style="font-size:11.5px;color:var(--charcoal-700);margin-top:10px">${ans.note}</div>${ans.cta?`<button class="btn primary sm" style="margin-top:10px" onclick="${ans.cta[1]==='__action'?'showActionPlan()':`nav('command','${ans.cta[1]}')`}">${ans.cta[0]} ${ic('chevronRight','ic-14')}</button>`:''}<div style="font-size:10.5px;color:var(--gray-500);margin-top:8px">Answered from live demand, fulfillment, and billing across all pillars - the kind of question 02S could field once every pillar streams through OMS.</div></div>`;}
function showNotifications(){const notifs=[
  ['warn','Budget alert — code 26','Electrical projected +6% over budget on Hercules Solar','12m ago'],
  ['ok','Order delivered','ORD-3042 · 2× ¾-Ton 4×4 arrived at Gate 3','1h ago'],
  ['red','SLA at risk','Tower crane request REQ-1071 unacknowledged 6h','2h ago'],
  ['steel','Bill ready for approval','BILL-9012 · $8,400 · 2 days left in window','3h ago'],
  ['ok','Opportunity won','1GPA JOC Sales moved to Won — seed a demand plan?','Yesterday']
 ];
 openModal(`<div class="modal-head"><div><h3>Notifications</h3><div class="sub">across your 02S workspaces</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="notif-list">${notifs.map(n=>`<div class="notif-row"><span class="notif-dot ${n[0]}"></span><div style="flex:1"><div class="notif-t">${n[1]}</div><div class="notif-d">${n[2]}</div></div><span class="notif-time">${n[3]}</span></div>`).join('')}</div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Close</button><button class="btn primary" onclick="closeModal();toast('All notifications marked read')">Mark all read</button></div>`,true);}
function showHelp(){openModal(`<div class="modal-head"><div><h3>Help &amp; resources</h3><div class="sub">02S Unified</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="help-grid">${[['help','Getting started guide','How 02S demand, ordering, and billing fit together'],['chat','Contact 02S support','support@ · 888.622.7278 · Mon–Fri'],['clipboard','V1 vs North Star scope','What ships Nov 1 and what follows'],['gauge','Give feedback','Tell the 02S team what would help most']].map(h=>`<button class="help-card" onclick="closeModal();toast('${h[1]} (demo)')"><span class="help-ico">${ic(h[0],'ic-16')}</span><div><b>${h[1]}</b><div class="help-sub">${h[2]}</div></div></button>`).join('')}</div></div><div class="modal-foot"><button class="btn primary" onclick="closeModal()">Done</button></div>`,true);}
function showAccount(){const roleName=(ROLE_CFG[state.role]&&ROLE_CFG[state.role].title)||'02S';openModal(`<div class="modal-head"><div><h3>Account</h3><div class="sub">signed in to 02S Unified</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="acct-head"><div class="acct-av">RM</div><div><div class="acct-n">Rian M.</div><div class="acct-r">Project Manager · Hercules Solar + BESS</div></div></div><div class="acct-rows">${[['user','Profile &amp; preferences'],['gear','Notification settings'],['team','Switch project'],['clipboard','My requests &amp; approvals']].map(a=>`<button class="acct-row" onclick="closeModal();toast('${a[1].replace(/&amp;/g,'and')} (demo)')"><span class="acct-ico">${ic(a[0],'ic-14')}</span>${a[1]}<span style="flex:1"></span>${ic('chevronRight','ic-14')}</button>`).join('')}</div></div><div class="modal-foot"><button class="btn" onclick="closeModal();goHome()">Back to workspaces</button><button class="btn primary" onclick="closeModal()">Done</button></div>`,true);}
/* Control Tower — interactive allocation flow + waterfall */
const AF_DATA=[['gauge','Regional utilization','How busy each region\u2019s crews and fleet are — the base 02S allocates against.','Bay Area 88% · Mountain 72% · Southwest 91%'],['chart','National market splits','How results split across Building, Infrastructure, and Industrial markets.','Building 46% · Infra 34% · Industrial 20%'],['team','Resource / cost allocation','Shared crews, equipment, and overhead assigned to the jobs that used them.','$42M shared cost allocated across 61 jobs'],['box','Project / opportunity','Everything lands on the project (or opportunity) it belongs to — the leaf of the flow.','634 opportunities · 226 with margin plans']];
function ctAllocPick(el,i){el.parentElement.querySelectorAll('.af-step').forEach(s=>s.classList.remove('on'));el.classList.add('on');const d=AF_DATA[i],box=document.getElementById('afDetail');if(box)box.innerHTML=`<div class="af-d-t">${ic(d[0],'ic-14')} ${d[1]}</div><div class="af-d-b">${d[2]}</div><div class="af-d-m">${d[3]}</div>`;}
const WF_DATA=[['Gross margin','$472M','Revenue less direct project cost.','var(--charcoal)'],['Less: project costs','−$132M','Field labor, equipment, materials on the job.','var(--red)'],['Less: market G&A','−$66M','Regional office & market-level overhead.','var(--red)'],['Less: national G&A','−$57M','Shared services allocated nationally.','var(--red)'],['Less: enterprise G&A','−$47M','Corporate overhead allocation.','var(--red)'],['Operating profit','$170M','What drops through to the bottom line.','var(--ok)']];
function ctWfPick(el,i){el.closest('.waterfall').querySelectorAll('.wf-row').forEach(r=>r.classList.remove('on'));el.classList.add('on');const d=WF_DATA[i],box=document.getElementById('wfDetail');if(box)box.innerHTML=`<div class="af-d-t">${d[0]} · <span style="color:${d[3]}">${d[1]}</span></div><div class="af-d-b">${d[2]}</div>`;}
/* Control Tower — FY forecast year views (FY25 vs FY26 differ) */
function ctForecastView(yr){
 const FY={
   FY25:{focus:2, bars:[['FY23A',55],['FY24A',68],['FY25F',82],['FY26F',94],['FY27F',100]], total:'$1.31B', yoy:'+21% vs FY24', win:'62%', cols:['FY23A','FY24A','FY25F','FY26F'], rows:[['Fleet & Personnel Assets','$180M','$210M','$250M','$290M'],['Procurement volume buys','$120M','$150M','$185M','$220M'],['Prefab programs','$60M','$78M','$95M','$120M'],['Logistics / GC-GR','$40M','$52M','$66M','$80M']], hi:2, note:'FY 2025 is mostly committed — 82% of the forecast is backed by won or in-execution work.'},
   FY26:{focus:3, bars:[['FY24A',68],['FY25F',82],['FY26F',94],['FY27F',100],['FY28F',108]], total:'$1.58B', yoy:'+15% vs FY25', win:'44%', cols:['FY24A','FY25F','FY26F','FY27F'], rows:[['Fleet & Personnel Assets','$210M','$250M','$290M','$330M'],['Procurement volume buys','$150M','$185M','$220M','$255M'],['Prefab programs','$78M','$95M','$120M','$150M'],['Logistics / GC-GR','$52M','$66M','$80M','$96M']], hi:2, note:'FY 2026 leans more on pipeline — only 44% is committed today, so scenario range is wider.'}
 }[yr];
 const bars=FY.bars.map((b,i)=>`<div class="ctb"><div class="ctb-stack ${i===FY.focus?'focus':''}" style="height:${b[1]}%"><div style="height:34%;background:var(--red)"></div><div style="height:33%;background:var(--charcoal)"></div><div style="height:33%;background:var(--gray-300)"></div></div><div class="ctb-l ${i===FY.focus?'focus':''}">${b[0]}</div></div>`).join('');
 return `<div class="ct-fy-summary"><div class="cfs"><div class="cfs-n">${FY.total}</div><div class="cfs-k">${yr==='FY25'?'FY25':'FY26'} forecast revenue</div></div><div class="cfs-div"></div><div class="cfs"><div class="cfs-n" style="color:var(--ok)">${FY.yoy}</div><div class="cfs-k">year-over-year</div></div><div class="cfs-div"></div><div class="cfs"><div class="cfs-n">${FY.win}</div><div class="cfs-k">committed vs pipeline</div></div></div>
 <div class="card" style="margin-top:14px"><div class="ch"><span class="t">FY forecast by pillar</span><span class="sub">$ millions · ${yr==='FY25'?'FY 2025 view':'FY 2026 view'}</span></div>
   <div class="ct-bars big">${bars}</div>
   <div class="lg" style="margin-top:10px"><span><i style="background:var(--red)"></i>Building</span><span><i style="background:var(--charcoal)"></i>Infrastructure</span><span><i style="background:var(--gray-300)"></i>Industrial</span></div>
   <div class="cfs-note">${ic('sparkle','ic-14')} ${FY.note}</div>
 </div>
 <div class="card" style="margin-top:16px"><div class="ch"><span class="t">By product line</span><span class="sub">${yr==='FY25'?'anchored on FY25F':'anchored on FY26F'}</span></div><div class="list"><div class="lrow lhead" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr"><div>Product line</div>${FY.cols.map((c,i)=>`<div>${c}</div>`).join('')}</div>${FY.rows.map(r=>`<div class="lrow" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr"><div class="pri">${r[0]}</div>${r.slice(1).map((v,i)=>`<div ${i===FY.hi?'style="font-weight:800;color:var(--red)"':''}>${v}</div>`).join('')}</div>`).join('')}</div></div>`;}
function ctForecastYear(el,yr){el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));el.classList.add('on');const c=document.getElementById('ctForecast');if(c)c.innerHTML=ctForecastView(yr);}
/* Control Tower North Star — interactive accelerators */
function ctDraftPlans(){openModal(`<div class="modal-head"><div><h3>Draft the missing margin plans</h3><div class="sub">12 opportunities · $14M without a plan</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="ai-panel" style="margin:0 0 12px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">02S can draft these from the estimates</div></div><div class="ctx" style="margin-bottom:0">Rather than defaulting to TAM, 02S drafts a margin plan for each opportunity from its estimate and pillar mix — leadership reviews and approves instead of building from scratch.</div></div><div class="list"><div class="lrow lhead" style="grid-template-columns:1.7fr 1fr 1fr"><div>Opportunity</div><div>TAM default</div><div>02S draft</div></div>${[['Mercy Hospital','9.0%','9.4%'],['Civic Center Ph.2','8.0%','7.8%'],['Baystate Med','9.0%','9.1%'],['Route 9 Widening','7.5%','7.9%']].map(r=>`<div class="lrow" style="grid-template-columns:1.7fr 1fr 1fr"><div class="pri">${r[0]}</div><div style="color:var(--gray-500)">${r[1]} <span style="font-size:10px">TAM</span></div><div><span class="chip ok">${r[2]} drafted</span></div></div>`).join('')}<div style="font-size:11px;color:var(--gray-500);padding:8px 4px">+ 8 more</div></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Not now</button><button class="btn primary" onclick="closeModal();toast('12 margin plans drafted — routed to leadership for review')">${ic('check','ic-14')} Draft all 12 for review</button></div>`,true);}
function ctMarginDrill(pillar){const D={Equipment:{plan:'8.4%',tgt:'9.0%',d:'−60 bps',drivers:[['Re-rent premium on cranes','+$1.8M cost','red'],['Idle-unit billing','+$0.3M','warn'],['Owned-fleet mix improving','−$0.4M','ok']],lever:'Pull the tower-crane buy forward — see the CAPEX plan.'},Prefab:{plan:'10.2%',tgt:'11.0%',d:'−80 bps',drivers:[['Denver shop over capacity','overtime + delay','red'],['Re-route to Phoenix','recoverable','warn'],['Standardized assemblies','helping','ok']],lever:'Move pull-forward pre-builds to Phoenix or Las Vegas.'},Procurement:{plan:'6.3%',tgt:'6.0%',d:'+30 bps',drivers:[['Consolidated supplier volume','saving','ok'],['Preferred-tier rebates','saving','ok']],lever:'Hold the line — consolidation is working.'}}[pillar]||{plan:'—',tgt:'—',d:'',drivers:[],lever:''};
 openModal(`<div class="modal-head"><div><h3>${pillar} margin</h3><div class="sub">plan ${D.plan} vs target ${D.tgt} · ${D.d}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div style="font-size:12px;color:var(--charcoal-700);font-weight:700;margin-bottom:8px">What's moving it</div><div class="list">${D.drivers.map(dr=>`<div class="lrow" style="grid-template-columns:1.8fr 1fr"><div class="pri"><span class="pdot" style="background:${dr[2]==='red'?'var(--red)':dr[2]==='warn'?'var(--warn)':'var(--ok)'}"></span>${dr[0]}</div><div style="text-align:right;color:var(--gray-500);font-size:11.5px">${dr[1]}</div></div>`).join('')}</div><div class="ai-panel" style="margin-top:12px"><div class="aih"><div class="ico">${ic('bulb','ic-16')}</div><div class="t">Recommended lever</div></div><div class="ctx" style="margin-bottom:0">${D.lever}</div></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Close</button><button class="btn primary" onclick="closeModal();toast('Added to the action plan')">${ic('send','ic-14')} Add lever to action plan</button></div>`,true);}
function scenarioCards(k){
const S={base:{rev:'$4.77B',mgn:'7.6%',op:'$362M',note:'Weighted pipeline as planned.',tone:'gray'},up:{rev:'$5.02B',mgn:'8.1%',op:'$407M',note:'Fountain Valley + 1 pursuit convert; margin lifts on mix.',tone:'ok'},down:{rev:'$4.41B',mgn:'7.0%',op:'$309M',note:'Two soft-award jobs slip a quarter; re-rent premium rises.',tone:'red'}};const s=S[k]||S.base;
 return `<div class="scn-cell"><div class="scn-k">Revenue</div><div class="scn-v">${s.rev}</div></div><div class="scn-cell"><div class="scn-k">Operating margin</div><div class="scn-v ${s.tone}">${s.mgn}</div></div><div class="scn-cell"><div class="scn-k">Operating profit</div><div class="scn-v">${s.op}</div></div><div class="scn-note">${s.note}</div>`;}
function runScenario(el,k){el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));el.classList.add('on');const g=document.getElementById('scnGrid');if(g)g.innerHTML=scenarioCards(k);}
/* V1 command: requests funneled from projects, awaiting taxonomy confirm + YardHub push */
const EQ_REQ=[
 {id:'REQ-1058',project:'Hercules Solar + BESS',desc:'2× 50-ton excavator, dual aux + GPS',tax:'Asset › Earthmoving › Excavator › 45-55T',ovr:'Use owned',mapped:true},
 {id:'REQ-2210',project:'Project Alpha',desc:'tower crane for structural steel, ~250ft',tax:'Asset › Lifting › Tower Crane › Std',ovr:'Re-rent',mapped:false},
 {id:'REQ-2244',project:'Mercy Hospital',desc:'4× scissor lift, 32ft electric',tax:'Asset › Aerial › Scissor Lift › 26-32FT',ovr:'Use owned',mapped:false},
 {id:'REQ-2251',project:'Project Nexus',desc:'wheel loader ~3cy for site prep',tax:'Asset › Earthmoving › Wheel Loader › 2.5-4CY',ovr:'Use owned',mapped:false}
];
// taxonomy options by broad type (Major › Minor › Category › Class), from the master taxonomy
const TAX_OPTS={
 excavator:['Asset › Earthmoving › Excavator › 30-40T','Asset › Earthmoving › Excavator › 45-55T','Asset › Earthmoving › Excavator › 55T+','Asset › Earthmoving › Mini Excavator › 0-10T'],
 crane:['Asset › Lifting › Tower Crane › Std','Asset › Lifting › Rough Terrain Crane › 80-100T','Asset › Lifting › Crawler Crane › 100T+'],
 scissor:['Asset › Aerial › Scissor Lift › 19-25FT','Asset › Aerial › Scissor Lift › 26-32FT','Asset › Aerial › Boom Lift › 40-60FT'],
 loader:['Asset › Earthmoving › Wheel Loader › 2.5-4CY','Asset › Earthmoving › Wheel Loader › 4CY+','Asset › Earthmoving › Skid Steer › Std']
};
// full master taxonomy (searchable) for manual override when the recommendation is wrong
const TAX_ALL=[
 'Asset › Earthmoving › Excavator › 30-40T','Asset › Earthmoving › Excavator › 45-55T','Asset › Earthmoving › Excavator › 55T+',
 'Asset › Earthmoving › Mini Excavator › 0-10T','Asset › Earthmoving › Wheel Loader › 2.5-4CY','Asset › Earthmoving › Wheel Loader › 4CY+',
 'Asset › Earthmoving › Skid Steer › Std','Asset › Earthmoving › Dozer › 0-200HP','Asset › Earthmoving › Dozer › 200HP+','Asset › Earthmoving › Backhoe › Std','Asset › Earthmoving › Scraper › 21-30CY',
 'Asset › Lifting › Tower Crane › Std','Asset › Lifting › Rough Terrain Crane › 80-100T','Asset › Lifting › Crawler Crane › 100T+','Asset › Lifting › Telehandler › 6-10K','Asset › Lifting › Telehandler › 10K+',
 'Asset › Aerial › Scissor Lift › 19-25FT','Asset › Aerial › Scissor Lift › 26-32FT','Asset › Aerial › Boom Lift › 40-60FT','Asset › Aerial › Boom Lift › 60FT+',
 'Asset › Compaction › Roller › Smooth Drum','Asset › Compaction › Roller › Padfoot','Asset › Compaction › Plate Compactor › Std',
 'Asset › Support › Water Truck › 2-4K Gal','Asset › Support › Generator › 0-100kW','Asset › Support › Generator › 100kW+','Asset › Support › Light Tower › Std','Asset › Support › Air Compressor › Std',
 'Asset › Attachments › Auger › 0-12 IN','Asset › Attachments › Auger › 13-24 IN','Asset › Attachments › Breaker › Standard','Asset › Attachments › Bucket › Standard','Asset › Attachments › Bucket › Tooth','Asset › Attachments › Grapple › Standard','Asset › Attachments › Ripper › Standard','Asset › Attachments › Trencher › 0-36 IN'
];
function taxKey(desc){const d=desc.toLowerCase();if(d.includes('excavator'))return 'excavator';if(d.includes('crane'))return 'crane';if(d.includes('scissor')||d.includes('lift'))return 'scissor';if(d.includes('loader'))return 'loader';return 'excavator';}
function taxMap(id){const r=EQ_REQ.find(x=>x.id===id);const opts=TAX_OPTS[taxKey(r.desc)];
 openModal(`<div class="modal-head"><div><h3>Confirm or change taxonomy match</h3><div class="sub">${id} · ${r.project}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body">
   <div class="field"><label>Asset description (from project)</label><input value="${r.desc.replace(/"/g,'&quot;')}" readonly></div>
   <div class="ai-panel" style="margin:0 0 12px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">AI-recommended taxonomy</div></div><div class="ctx" style="margin-bottom:10px">Best match from the description. If it's wrong, change it below — pick a close option or search the full taxonomy.</div><div class="tax-rec" id="taxRec">${r.tax}</div></div>
   <div class="field"><label>Selected taxonomy · Major › Minor › Category › Class</label><input id="taxChosen" value="${r.tax}" readonly class="tax-chosen"></div>
   <div class="field"><label>Close options for "${r.desc.split(',')[0]}"</label><div class="tax-quick">${opts.map(o=>`<button class="tax-opt ${o===r.tax?'on':''}" onclick="taxPick(this,'${o.replace(/'/g,"\\'")}')">${o}</button>`).join('')}</div></div>
   <div class="field"><label>${ic('search','ic-14')} Search the full taxonomy (manual override)</label><input id="taxSearch" placeholder="Type e.g. dozer, roller, generator, boom…" oninput="taxSearch()" autocomplete="off"><div class="tax-results" id="taxResults"></div></div>
   <div class="field"><label>Attributes (carried to YardHub for asset allocation)</label><div style="display:flex;gap:6px;flex-wrap:wrap">${['Dual auxiliaries','GPS system','Manufacturer: any'].map(a=>`<span class="chip steel">${a}</span>`).join('')}</div></div>
   <div class="route-note">On confirm, this request is taxonomy-mapped and marked ready. Promote it (with others) as one YardHub push — no re-entry.</div>
 </div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="confirmTax('${id}')">${ic('check','ic-14')} Confirm match</button></div>`,true);}
function taxPick(el,val){document.getElementById('taxChosen').value=val;document.querySelectorAll('.tax-quick .tax-opt').forEach(b=>b.classList.remove('on'));if(el&&el.classList)el.classList.add('on');const res=document.getElementById('taxResults');if(res)res.innerHTML='';}
function taxSearch(){const q=(document.getElementById('taxSearch').value||'').trim().toLowerCase(),res=document.getElementById('taxResults');if(!res)return;if(!q){res.innerHTML='';return;}
 const hits=TAX_ALL.filter(t=>t.toLowerCase().includes(q)).slice(0,7);
 res.innerHTML=hits.length?hits.map(t=>`<div class="tax-res-row" onclick="taxPickManual('${t.replace(/'/g,"\\'")}')">${ic('layers','ic-14')} ${t}</div>`).join(''):`<div class="tax-res-empty">No taxonomy node matches "${q}"</div>`;}
function taxPickManual(val){document.getElementById('taxChosen').value=val;document.querySelectorAll('.tax-quick .tax-opt').forEach(b=>b.classList.remove('on'));document.getElementById('taxResults').innerHTML='';document.getElementById('taxSearch').value='';toast('Taxonomy set manually');}
function confirmTax(id){const r=EQ_REQ.find(x=>x.id===id);const chosen=document.getElementById('taxChosen');if(chosen&&chosen.value)r.tax=chosen.value;r.mapped=true;closeModal();renderCurrent();toast(id+' taxonomy confirmed — ready for YardHub');}
function pushYardHub(){const ready=EQ_REQ.filter(r=>r.mapped).length;const pending=EQ_REQ.filter(r=>!r.mapped).length;
 if(pending>0){openModal(`<div class="modal-head"><div><h3>Map remaining requests first</h3></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="vrow bad">${ic('warning','ic-16')}<div><b>${pending} request${pending>1?'s':''} still need a confirmed taxonomy</b><div class="vh">YardHub needs a taxonomy node on every line. Confirm the flagged rows, then push.</div></div></div></div><div class="modal-foot"><button class="btn primary" onclick="closeModal()">Got it</button></div>`,true);return;}
 openModal(`<div class="modal-head"><div><h3>Push to YardHub</h3><div class="sub">${ready} requests · one batch push</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="valid-list"><div class="vrow ok">${ic('check','ic-16')}<div><b>All lines taxonomy-mapped</b><div class="vh">Major › Minor › Category › Class confirmed on every request</div></div></div><div class="vrow ok">${ic('check','ic-16')}<div><b>Owned-vs-re-rent set</b><div class="vh">EM calls captured for the fleet decision</div></div></div><div class="vrow ok">${ic('link','ic-16')}<div><b>One YardHub push</b><div class="vh">Batch promoted with embedded lines · no re-entry · correlation IDs tracked</div></div></div></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('${ready} requests pushed to YardHub — statuses will write back')">${ic('send','ic-14')} Push ${ready} to YardHub</button></div>`,true);}
function edpOvr(id){const r=EQ_REQ.find(x=>x.id===id);if(!r)return;
 openModal(`<div class="modal-head"><div><h3>Owned vs. re-rent — ${id}</h3><div class="sub">${r.project} · ${r.desc}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div>
 <div class="modal-body">
   <div class="limit-note" style="background:var(--gold-050);border-color:var(--gold-mid);margin-bottom:12px">${ic('gauge','ic-16')}<div><b>Fleet check complete.</b> Recommendation based on owned availability, transport cost, utilization targets, and near-term yard demand.</div></div>
   <div class="field" style="margin-bottom:12px"><label>Your decision</label>
     <div class="seg-toggle" style="width:100%;margin-top:6px">
       <button id="edp-own-btn" style="flex:1" class="${r.ovr==='Use owned'?'on':''}" onclick="document.getElementById('edp-own-btn').classList.add('on');document.getElementById('edp-rr-btn').classList.remove('on')">${ic('check','ic-14')} Use owned fleet</button>
       <button id="edp-rr-btn" style="flex:1" class="${r.ovr!=='Use owned'?'on':''}" onclick="document.getElementById('edp-rr-btn').classList.add('on');document.getElementById('edp-own-btn').classList.remove('on')">${ic('truck','ic-14')} Re-rent from market</button>
     </div>
   </div>
   <div class="field"><label>Reasoning <span style="color:var(--red)">*</span></label><textarea id="edpOvrReason" rows="3" placeholder="e.g. idle unit at Riverside yard — 12 mi, fully justified for this duration…"></textarea></div>
   <div style="font-size:11.5px;color:var(--gray-500);margin-top:-6px">Required. Logged and feeds the fleet optimization model.</div>
 </div>
 <div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="submitEdpOvr('${id}')">${ic('check','ic-14')} Confirm decision</button></div>`,true);}
function submitEdpOvr(id){const r=EQ_REQ.find(x=>x.id===id);if(!r)return;const reason=(document.getElementById('edpOvrReason')?.value||'').trim();if(!reason){toast('Please add reasoning before confirming.');return;}const choice=document.getElementById('edp-own-btn')?.classList.contains('on')?'Use owned':'Re-rent';r.ovr=choice;closeModal();renderCurrent();toast(id+' → OvR set to '+choice+' · reasoning logged');}
function showActionPlan(){const steps=[
  ['Mercy Hospital · sequence risk','var(--red)',[
    ['Pull the tower-crane buy forward to Q3','Equipment','var(--red)','Owner: Fleet ops','Before Aug 3'],
    ['Move headwall pre-builds Tucson → Phoenix','Prefab','var(--prefab)','Owner: Prefab shop','This week'],
    ['Hold Nov commissioning slot for Mercy','Prof. services','var(--profsvc)','Owner: Specialist desk','Confirm by Fri']
  ]],
  ['Portfolio · Bay Area yard','var(--logistics)',[
    ['Build the laydown business case','Logistics','var(--logistics)','Owner: Logistics lead','2 weeks'],
    ['Stage long-lead EV chargers at the yard','Procurement','var(--proc)','Owner: Procurement','On yard open']
  ]],
  ['Margin · recover $26K','var(--ok)',[
    ['Off-rent 2 idle units','Equipment','var(--red)','Owner: Fleet ops','Now'],
    ['Renegotiate the over-rate re-rent','Equipment','var(--red)','Owner: Fleet ops','This week']
  ]]
];
 openModal(`<div class="modal-head"><div><h3>Cross-pillar action plan</h3><div class="sub">Generated from what's connected across 02S · owners &amp; timing assigned</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body">
   <div class="ai-panel" style="margin:0 0 14px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">7 actions across 4 pillars</div></div><div class="ctx" style="margin-bottom:0">Each conclusion becomes concrete, owned, and dated work — routed to the right desk and tracked to close.</div></div>
   ${steps.map(g=>`<div class="ap-group"><div class="ap-gh"><span class="ap-dot" style="background:${g[1]}"></span>${g[0]}</div>${g[2].map(a=>`<div class="ap-row"><div class="ap-check">${ic('check','ic-14')}</div><div class="ap-body"><div class="ap-t">${a[0]}</div><div class="ap-meta"><span class="ap-pill" style="background:${a[2]}1a;color:${a[2]}"><span class="pdot" style="background:${a[2]}"></span>${a[1]}</span><span class="ap-m">${a[3]}</span><span class="ap-m">${ic('clock','ic-14')} ${a[4]}</span></div></div></div>`).join('')}</div>`).join('')}
   <div style="font-size:11px;color:var(--gray-500);margin-top:6px">Assigning routes each action to its owner's queue and starts SLA tracking. You stay the approver.</div>
 </div><div class="modal-foot"><button class="btn" onclick="closeModal()">Not now</button><button class="btn primary" onclick="closeModal();toast('Action plan assigned — 7 items routed to owners')">${ic('send','ic-14')} Assign all &amp; track</button></div>`,true);}
function seedDemandPlan(){openModal(`<div class="modal-head"><div><h3>Seed demand plan from opportunity</h3><div class="sub">1GPA – 2026 Q1 JOC Sales · Won</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="ai-panel" style="margin:0 0 12px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">What I'll seed</div></div><div class="ctx" style="margin-bottom:0">I'll create a project demand plan pre-populated from this opportunity's margin-plan pillar mix, tie each line to the schedule, and route it to the project team to confirm and submit.</div></div><div class="list"><div class="lrow lhead" style="grid-template-columns:1.3fr 2fr .8fr"><div>Pillar</div><div>Seeded lines</div><div>Est.</div></div>${[['Equipment','Fleet & personnel assets, EMP','$29K'],['Procurement','Safety & consumables bundle','$18K'],['Prefab','MEP rack (vendor-managed)','$12K']].map(r=>`<div class="lrow" style="grid-template-columns:1.3fr 2fr .8fr"><div class="pri">${r[0]}</div><div style="color:var(--gray-500);font-size:12px">${r[1]}</div><div><b>${r[2]}</b></div></div>`).join('')}</div><div class="field" style="margin-top:12px"><label>Assign to</label><select><option>Hercules Solar + BESS — project team</option><option>Riverside Office — project team</option></select></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Demand plan seeded &amp; assigned — project team notified')">${ic('send','ic-14')} Seed &amp; assign</button></div>`,true);}
function supQuick(kind){const box=document.getElementById('supBody');if(!box)return;
 const msgs={
  track:['Track an order',`I can track any active order. <b>ORD-3042</b> (2× ¾-Ton 4×4) is in transit — ETA <b>May 20, 10:40a</b>, 42 mi out. <span class="chatlink" onclick="supNav('p-orders')">Open it in Orders →</span>`],
  dispute:['Dispute a bill',`I can start a dispute. The bill in your window is <b>BILL-9012</b> (Excavator · $8,400). Want to correct a cost code or flag a rate? <span class="chatlink" onclick="supNav('p-billing')">Open Billing →</span>`],
  desk:['Reach equipment desk',`Connecting you to the <b>Equipment desk</b> (equipment@02s.mccarthy.com · SLA 4h). Priya is on now — type your question and I'll route it to her.`],
  ticket:['Open a ticket',`Opening a ticket. What's it about — delivery, billing, or an equipment issue? I'll pre-fill the order/bill reference and notify the right pillar desk.`]
 };
 const m=msgs[kind];if(!m)return;
 box.insertAdjacentHTML('beforeend',`<div class="bub me"><div class="who">You</div>${m[0]}</div>`);
 box.scrollTop=box.scrollHeight;
 setTimeout(()=>{box.insertAdjacentHTML('beforeend',`<div class="bub them"><div class="who">02S Assistant</div>${m[1]}</div>`);box.scrollTop=box.scrollHeight;},550);}
function addTeammate(){openModal(`<div class="modal-head"><h3>Add teammate</h3><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="field"><label>Name or email</label><input placeholder="name@mccarthy.com"></div><div class="field"><label>Role</label><select><option>Project Manager</option><option>Superintendent</option><option>Field Engineer</option><option>Project Accountant</option></select></div><div class="field"><label>Access level</label><select><option>Edit access (incl. billing)</option><option>Order & view</option><option>View only</option></select></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Teammate added to the project')">Add teammate</button></div>`);}
function toggleAdmin(){IS_ADMIN=!IS_ADMIN;renderCurrent();toast('Now viewing as '+(IS_ADMIN?'an admin':'a standard member'));}
function createProject(){if(!IS_ADMIN){toast('Only admins can create projects');return;}openModal(`<div class="modal-head"><div><h3>Create project</h3><div class="sub">Admin only</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="field"><label>Project name</label><input placeholder="e.g. Riverside Data Center"></div><div class="field-row"><div class="field"><label>Project number</label><input placeholder="00XXXX.000"></div><div class="field"><label>Region</label><select><option>Southwest</option><option>West</option><option>Central</option><option>East</option></select></div></div><div class="field"><label>Initial admin</label><input value="Rian M. (you)" readonly></div><div style="font-size:11.5px;color:var(--gray-500)">In production, projects sync from the system of record; manual creation is an admin fallback.</div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Project created (demo)')">${ic('plus','ic-14')} Create project</button></div>`);}

/* ================= PILLAR PLAN (simple placeholder) ================= */
function pillarPlan(id,cfg){const m=effMode(id);const pc=pillColor(cfg.name==='Prof. services'?'Professional services':cfg.name);
 if(m!=='northstar'){
   // V1 — simple planning (dynamic rows)
   if(!V1_PILLAR_ROWS[cfg.name])V1_PILLAR_ROWS[cfg.name]=cfg.rows.map(r=>r.slice());
   return `<div class="page-head"><div><h2>${cfg.name} plan</h2>${projBadge()}</div>${prodToggle(id)}</div>
   <div class="edp-toolbar" style="margin-top:14px"><button class="btn primary" onclick="pillV1AddRow('${cfg.name}','${cfg.kind}')">${ic('plus','ic-14')} Add ${cfg.kind==='service'?'service':'line'}</button><span style="flex:1"></span><button class="btn" onclick="pillarRequestValidate('${cfg.name}','${pc}',false)">${ic('send','ic-14')} Request selected</button></div>
   <div class="list"><div class="lrow lhead" style="grid-template-columns:26px 1.5fr .9fr 1fr 1fr .8fr 32px"><div></div><div>${cfg.kind==='service'?'Service':'Item'}</div><div>${cfg.kind==='service'?'Scope':'Qty'}</div><div>From</div><div>To</div><div>Status</div><div></div></div>
   <div id="pillV1Rows">${pillV1RowsHTML(cfg.name,pc,cfg.kind)}</div></div>`;
 }
 // North Star — same AI-prebuilt, editable, accept-to-lock experience as equipment
 const pkey={'Prefab':'prefab','Procurement':'procurement','Logistics':'logistics','Prof. services':'profsvc'}[cfg.name]||'prefab';
 return `<div class="page-head"><div><h2>${cfg.name} plan</h2>${projBadge()}</div>${prodToggle(id)}</div>
 <div>${nsDraftScreen(pkey,{title:'02S drafted your '+cfg.name.toLowerCase().replace('prof. services','professional services')+' plan'})}</div>`;}
let V1_PILLAR_ROWS={};let V1_PILLAR_CTX={};
function pillV1RowsHTML(name,pc,kind){const rows=V1_PILLAR_ROWS[name]||[];V1_PILLAR_CTX[name]={pc,kind};
 const enc=name.replace(/'/g,"\\'");
 return rows.map((r,i)=>`<div class="lrow" style="grid-template-columns:26px 1.5fr .9fr 1fr 1fr .8fr 32px"><div><input type="checkbox" id="pillChk${enc}${i}"></div><div class="pri" style="display:flex;align-items:center;gap:8px"><span class="pdot" style="background:${pc}"></span><input class="pill-inp" value="${String(r[0]).replace(/"/g,'&quot;')}" onchange="pillV1Edit('${enc}',${i},0,this.value)"></div><div><input class="pill-inp" value="${String(r[1]).replace(/"/g,'&quot;')}" onchange="pillV1Edit('${enc}',${i},1,this.value)"></div><div><input type="date" class="pill-inp date" value="${r[2]||''}" onchange="pillV1Edit('${enc}',${i},2,this.value)"></div><div><input type="date" class="pill-inp date" value="${r[3]||''}" onchange="pillV1Edit('${enc}',${i},3,this.value)"></div><div><span class="chip ${r[4]==='new'?'warn':'gray'}">${r[4]==='new'?'New':'Planned'}</span></div><div style="text-align:right"><button class="req-x" onclick="pillV1RemoveRow('${enc}',${i})" title="Remove">${ic('close','ic-14')}</button></div></div>`).join('');}
function pillV1Edit(name,i,field,val){if(V1_PILLAR_ROWS[name]&&V1_PILLAR_ROWS[name][i])V1_PILLAR_ROWS[name][i][field]=val;}
function pillV1Refresh(name){const el=document.getElementById('pillV1Rows');if(el){const c=V1_PILLAR_CTX[name];el.innerHTML=pillV1RowsHTML(name,c.pc,c.kind);}}
function pillV1AddRow(name,kind){if(!V1_PILLAR_ROWS[name])V1_PILLAR_ROWS[name]=[];V1_PILLAR_ROWS[name].push([kind==='service'?'New service':'New line item',kind==='service'?'Define scope':'Qty —','','','new']);pillV1Refresh(name);toast((kind==='service'?'Service':'Line')+' added — set the dates and details');}
function pillV1RemoveRow(name,i){V1_PILLAR_ROWS[name].splice(i,1);pillV1Refresh(name);toast('Line removed');}
function pillarView(el,showId){el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));el.classList.add('on');['plan-sched','plan-list'].forEach(p=>{});const wrap=el.closest('.main');const base=showId.replace('plan-sched-','').replace('plan-list-','');wrap.querySelector('#plan-sched-'+base).classList.toggle('hidden',!showId.startsWith('plan-sched'));wrap.querySelector('#plan-list-'+base).classList.toggle('hidden',!showId.startsWith('plan-list'));}
function pillarRequestValidate(name,pc,ns){
 const allRows=V1_PILLAR_ROWS[name]||[];
 const enc=name.replace(/'/g,"\\'");
 const selected=allRows.reduce((acc,r,i)=>{const cb=document.getElementById('pillChk'+enc+i);if(cb&&cb.checked)acc.push({r,i});return acc;},[]);
 if(!ns&&selected.length===0){toast('Check at least one line to request');return;}
 const rows=selected.length>0?selected:allRows.map((r,i)=>({r,i}));
 const codeSection=ns
   ? `<div class="co-note">${ic('sparkle','ic-14')} Cost codes auto-resolved per line in North Star</div>`
   : `<div class="oc-edit"><div class="oc-lbl">${ic('edit','ic-14')} Cost code per line <span class="req">required</span></div><div class="line-codes">${rows.map(({r},j)=>`<div class="lc-row"><span class="lc-nm"><span class="pdot" style="background:${pc}"></span>${r[0]}</span><input class="mono lc-input" id="pillLineCode${j}" value="010200.3005.2000" placeholder="Job.Exp.Task" oninput="pillLineCodeCheck(${j},this)"><span class="lc-st" id="pillLineSt${j}"><span class="chip ok">${ic('check','ic-14')} 16/16</span></span></div>`).join('')}</div></div>`;
 const sub=selected.length>0?`${selected.length} line${selected.length>1?'s':''} selected`:'all lines';
 const ename=name.replace(/'/g,"\\'");
 openModal(`<div class="modal-head"><div><h3>Submit ${name} request</h3><div class="sub">${sub}</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body co-body">${codeSection}<div class="field"><label>Delivery address</label><select id="pillAddr"><option>${PROJECT.shipTo.line1}, ${PROJECT.shipTo.line2}</option><option>02S yard pickup</option><option>Other (specify in notes)</option></select></div><div class="field-row"><div class="field"><label>Needed by <span class="req">*</span></label><input type="date" id="pillStart" value="2026-09-01"></div><div class="field"><label>End date</label><input type="date" id="pillEnd" value=""></div></div><div class="field"><label>Notes <span style="font-weight:400;color:var(--gray-400)">optional</span></label><textarea id="pillNote" rows="2" placeholder="Any special delivery or site requirements…"></textarea></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('${ename} request submitted — appears in 02S backlog')">${ic('send','ic-14')} Submit request</button></div>`,true);}
function pillLineCodeCheck(i,inp){const v=inp.value;const d=codeDigits(v);const st=document.getElementById('pillLineSt'+i);if(st)st.innerHTML=d===16?`<span class="chip ok">${ic('check','ic-14')} 16/16</span>`:`<span class="chip red">${d}/16</span>`;}

/* ================= DASHBOARD — NEEDS YOUR ATTENTION ================= */
const DASH_ATTENTION=[
 {id:'billing',ico:'receipt',title:'Billing needs approval',meta:'BILL-9012',due:'2 days left',dueKind:'warning',weight:40,reason:'Approval window closes soon — nothing else is waiting on it.'},
 {id:'submittal',ico:'file',title:'Prefab submittal due',meta:'L2 headwall shop drawings',due:'Due Thu',dueKind:'warning',weight:80,reason:'Submit by Thursday to hold your Aug 15 delivery slot — missing it pushes delivery out.',ctaLabel:'Review',ctaFn:"openSubmittal()"},
 {id:'safety',ico:'warning',title:'Safety bulletin — crane lift zone',meta:'Acknowledge before mob',due:'Before mob',dueKind:'warning',weight:60,reason:'Required sign-off before the tower crane can mobilize to site.',ctaLabel:'Review &amp; ack',ctaFn:"openSafetyBulletin()"},
 {id:'idle',ico:'clock',title:'2× scissor lift idle 6 days',meta:'Low usage on site',due:'Ongoing',dueKind:'warning',weight:95,reason:"Idle equipment bills whether it's used or not.",consequence:'Call off — $1.9K/wk exposure',ctaLabel:'Call off',ctaFn:"openOffRent('2× Scissor lift 32ft')"},
 {id:'crane',ico:'truck',title:'Tower crane mobilization',meta:'Structure phase · confirm ship-to',due:'In 2 weeks',dueKind:'info',weight:90,reason:'Structural steel is crane-dependent — if steel holds its start, the crane arrives 4 days ahead of need. Confirm ship-to now or shift mobilization to cut idle standby.',ctaLabel:'Add ship-to',ctaFn:"openShipTo()"}
];
function dashAttentionEmpty(ns){return `<div class="card span3 attn-wrap"><div class="ch"><span class="ci">${ic('bell','ic-16')}</span><span class="t">Needs your attention</span></div><div class="attn-empty"><span class="ico">${ic('check','ic-18')}</span><span>${ns?"You're all caught up — North Star is watching your schedule.":'Nothing needs your attention right now.'}</span></div></div>`;}
function dashAttentionV1(){
 if(!DASH_ATTENTION.length)return dashAttentionEmpty(false);
 const items=[...DASH_ATTENTION].sort((a,b)=>(a.weight<50?0:1)-(b.weight<50?0:1));
 return `<div class="card span3 attn-wrap"><div class="ch"><span class="ci">${ic('bell','ic-16')}</span><span class="t">Needs your attention</span></div><div class="attn-list">${items.map(a=>`<div class="attn-row"><span class="attn-ico">${ic(a.ico,'ic-16')}</span><div class="attn-body"><div class="attn-title">${a.title}</div><div class="attn-meta">${a.meta}</div></div><span class="attn-due"><span class="badge badge--${a.dueKind||'neutral'}">${a.due}</span></span></div>`).join('')}</div></div>`;
}
function dashAttentionNS(){
 const top=[...DASH_ATTENTION].sort((a,b)=>b.weight-a.weight).slice(0,3);
 if(!top.length)return dashAttentionEmpty(true);
 return `<div class="card span3 attn-wrap"><div class="ch"><span class="ci">${ic('bell','ic-16')}</span><span class="t">Needs your attention</span></div><div class="attn-cards">${top.map((a,i)=>`<div class="attn-card"><div class="ah"><span class="ico${a.consequence?' urgent':''}">${ic(a.ico,'ic-16')}</span><b>${a.title}</b><span class="badge badge--neutral rank">${i===0?'Top priority':'Priority '+(i+1)}</span></div><div class="reason">${a.reason}</div><div class="cta-row">${a.consequence?`<span class="badge badge--urgent">${a.consequence}</span>`:''}${a.ctaFn?`<button class="btn sm ${a.consequence?'urgent':'primary'}" onclick="${a.ctaFn}">${a.ctaLabel}</button>`:''}</div></div>`).join('')}</div></div>`;
}
function dashOrderCta(){return `<div class="dash-cta-bar" onclick="nav('portal','p-browse')"><span class="ico">${ic('cart','ic-18')}</span><div><b>Need equipment?</b><span class="sub">Browse &amp; request from the 02S catalog</span></div><span class="go">Browse &amp; request ${ic('chevronRight','ic-14')}</span></div>`;}

/* ================= SCREENS ================= */
const SCREENS={

'p-dash':(id)=>`
 <div class="page-head"><div><h2>${PROJECT.name}</h2><div class="proj-meta"><span class="proj-tag">${ic('pin','ic-14')} ${PROJECT.city}</span><span class="proj-tag">${ic('clipboard','ic-14')} <span class="mono">${PROJECT.number}</span></span><span class="proj-tag">${ic('dollar','ic-14')} <span class="mono">$180M</span> · Solar + BESS</span><span class="proj-tag v1-only">${ic('layers','ic-14')} V1 — standard</span><span class="proj-tag ns-only">${ic('sparkle','ic-14')} North Star</span></div></div></div>
 <div class="v1-only">${dashAttentionV1()}</div>
 <div class="ns-only">${dashAttentionNS()}</div>
 ${dashOrderCta()}
 <div class="v1-only">
   <div class="card span3 dash-section" style="margin-bottom:16px"><div class="ch"><span class="ci">${ic('calendar','ic-16')}</span><span class="t">3-week lookahead</span><span class="sub">02S touchpoints from your V1 data</span></div>
     <div class="look">
       <div class="wk"><h4>This week <span>May 12–18</span></h4>
         <div class="item"><div class="top">${ic('truck','ic-14')} Excavator delivery</div><div class="meta">ORD-3042 · gate 3 · Mon</div></div>
         <div class="item"><div class="top">${ic('receipt','ic-14')} Billing needs approval</div><div class="meta">BILL-9012 · 2 days left in window</div></div>
       </div>
       <div class="wk"><h4>Next week <span>May 19–25</span></h4>
         <div class="item"><div class="top">${ic('clock','ic-14')} Rental ending</div><div class="meta">Scissor lift · off-rent May 15→confirm</div></div>
         <div class="item"><div class="top"><span style="color:var(--success)">${ic('check','ic-14')}</span> Order acknowledged</div><div class="meta">SUV AWD · on-rent May 18</div></div>
       </div>
       <div class="wk"><h4>In 2 weeks <span>May 26–Jun 1</span></h4>
         <div class="item"><div class="top">${ic('truck','ic-14')} Tower crane mob</div><div class="meta">Planned · Structure phase</div></div>
       </div>
     </div>
   </div>
 </div>
 <div class="ns-only">
   <div class="card span3 dash-section" style="margin-bottom:16px"><div class="ch"><span class="ci">${ic('calendar','ic-16')}</span><span class="t">3-week 02S lookahead</span><span class="sub">tied to your schedule</span><span class="ns-badge" style="margin-left:auto">North Star</span></div>
     <!-- trades × weeks Gantt with a today marker -->
     <div class="la-gantt">
       <div class="la-head"><div class="la-name">Activity</div><div class="la-grid"><span>May 12–18</span><span>May 19–25</span><span>May 26–Jun 1</span><div class="la-today" style="left:16%"><span>Today</span></div></div></div>
       ${[
         ['Earthwork / grading','var(--gray)',0,42,'On track',''],
         ['Structural steel','var(--charcoal)',18,88,'Crane-dependent','⚠'],
         ['Mechanical rough-in','var(--proc)',52,100,'Starts Wk 2',''],
         ['Electrical rough-in','var(--logistics)',38,92,'On track',''],
         ['Prefab headwalls','var(--prefab)',60,100,'Submittal due Thu','']
       ].map(t=>`<div class="la-row"><div class="la-name">${t[0]}</div><div class="la-grid"><div class="la-bar" style="left:${t[2]}%;width:${t[3]-t[2]}%;background:${t[1]}"><span>${t[4]}</span>${t[5]?`<b class="la-flag">${t[5]}</b>`:''}</div></div></div>`).join('')}
     </div>
     <!-- 02S touchpoints ribbon under the gantt -->
     <div class="la-touch">
       <div class="lt-col"><div class="lt-h">This week</div>
         <div class="lt-item"><span class="lt-ico" style="background:var(--gray-100);color:var(--gray-600)">${ic('truck','ic-14')}</span><div><b>Excavator delivery — confirm receiving</b><span class="lt-m"><span class="mono">ORD-3042</span> · gate 3 · today 10:40a</span></div><span class="owner bic" style="background:var(--steel)">02S</span></div>
         <div class="lt-item urgent"><span class="lt-ico" style="background:var(--red-050);color:var(--red)">${ic('clock','ic-14')}</span><div><b>2× scissor lift idle 6 days</b><span class="lt-m">low usage · $1.9K/wk exposure</span></div><button class="btn sm urgent" onclick="openOffRent('2× Scissor lift 32ft')">Call off</button></div>
       </div>
       <div class="lt-col"><div class="lt-h">Next week</div>
         <div class="lt-item"><span class="lt-ico" style="background:var(--prefab-050);color:var(--prefab)">${ic('file','ic-14')}</span><div><b>Prefab submittal due</b><span class="lt-m">L2 headwall shop drawings · Thu</span></div><button class="btn sm primary" onclick="openSubmittal()">Review</button></div>
         <div class="lt-item"><span class="lt-ico" style="background:var(--proc-050);color:var(--proc)">${ic('cart','ic-14')}</span><div><b>Procurement PO ready</b><span class="lt-m">Safety bundle · 02S issuing</span></div><span class="owner bic" style="background:var(--steel)">02S</span></div>
       </div>
       <div class="lt-col"><div class="lt-h">In 2 weeks</div>
         <div class="lt-item"><span class="lt-ico" style="background:var(--gray-100);color:var(--gray-600)">${ic('truck','ic-14')}</span><div><b>Tower crane mobilization</b><span class="lt-m">Structure phase · add ship-to?</span></div><button class="btn sm primary" onclick="openShipTo()">Add ship-to</button></div>
         <div class="lt-item"><span class="lt-ico" style="background:var(--gold-050);color:var(--gold)">${ic('warning','ic-14')}</span><div><b>Safety bulletin — crane lift zone</b><span class="lt-m">acknowledge before mob</span></div><button class="btn sm primary" onclick="openSafetyBulletin()">Review &amp; ack</button></div>
       </div>
     </div>
     <div class="ai-panel neutral" style="margin-top:12px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">Lookahead insight</div></div><div class="ctx" style="margin-bottom:0">Steel is <b>crane-dependent</b> and the tower crane mobilizes Wk 3 — if the structural start holds, the crane arrives 4 days ahead of need. Consider shifting mobilization to reduce idle standby, or pull steel forward.</div></div>
   </div>
 </div>

 <div class="grid g3 kpi-strip" style="margin-bottom:16px">
   <div class="kpi-card"><div class="kpi-main"><span class="kpi-num">142</span><div><div class="kpi-lbl">Rental roll</div><div class="kpi-sub">Active rentals · 4 classes</div></div></div><button class="clink" onclick="nav('portal','p-orders')">View orders ${ic('chevronRight','ic-14')}</button></div>
   <div class="kpi-card"><div class="kpi-main"><span class="kpi-num">18</span><div><div class="kpi-lbl">Demand log</div><div class="kpi-sub">Open demands · 5 this month</div></div></div><button class="clink" onclick="nav('portal','p-edp')">Open equipment plan ${ic('chevronRight','ic-14')}</button></div>
   <div class="kpi-card"><div class="kpi-main"><span class="kpi-num">78%</span><div><div class="kpi-lbl">Budget snapshot</div><div class="kpi-sub">of forecast committed</div></div></div><button class="clink" onclick="nav('portal','p-billing')">View billing &amp; budget ${ic('chevronRight','ic-14')}</button></div>
 </div>

 <div class="card dash-section" style="max-width:640px;margin-bottom:16px"><div class="ch"><span class="ci">${ic('box','ic-16')}</span><span class="t">Latest order status</span><span class="sub"><span class="mono">ORD-3042</span> · click a step's order in Orders for detail</span></div>${trackerHTML(2)}<button class="clink" onclick="nav('portal','p-orders')">Track all orders ${ic('chevronRight','ic-14')}</button></div>

 <div class="ns-only"><div class="grid g3" style="margin-top:16px">
   <div class="card"><div class="ch"><span class="ci k3">${ic('gauge','ic-16')}</span><span class="t">Equipment on my site</span><span class="ns-badge" style="margin-left:auto">NS</span></div><p style="color:var(--gray-500);font-size:var(--text-sm);margin:0 0 var(--space-2)">Telematics utilization by asset — spot idle units before they bill another week.</p><button class="clink" onclick="toast('Opening utilization (demo)')">Drill into utilization ${ic('chevronRight','ic-14')}</button></div>
   <div class="card"><div class="ch"><span class="ci k2">${ic('upload','ic-16')}</span><span class="t">Mobile receiving</span><span class="ns-badge" style="margin-left:auto">NS</span></div><p style="color:var(--gray-500);font-size:var(--text-sm);margin:0 0 var(--space-2)">Receive 02S deliveries from the field; feeds OMS and manages ship-to addresses.</p><button class="clink" onclick="toast('Opening receiving (demo)')">Open receiving ${ic('chevronRight','ic-14')}</button></div>
   <div class="card"><div class="ch"><span class="ci k4">${ic('warning','ic-16')}</span><span class="t">Safety & quality bulletins</span><span class="ns-badge" style="margin-left:auto">NS</span></div><p style="color:var(--gray-500);font-size:var(--text-sm);margin:0 0 var(--space-2)">Acknowledge 02S bulletins relevant to equipment on this job.</p><button class="clink" onclick="toast('Opening bulletins (demo)')">View bulletins ${ic('chevronRight','ic-14')}</button></div>
 </div></div>
`,

'p-catalog':(id)=>`
 <div class="page-head"><div><h2>Product catalog</h2>${projBadge()}</div><div class="ph-actions">${cartButton()}${prodToggle(id)}</div></div>
 <div class="cov-banner" id="covBanner">${PILLARS.map(p=>{const lv=CATALOG[p].level;const ns=effMode(id)==='northstar';const tag=ns?'':(lv==='full'?'<span class="lvl-tag full">Full</span>':lv==='partial'?'<span class="lvl-tag partial">Partial</span>':'<span class="lvl-tag catl">Category</span>');return `<span class="cov ${p===CURRENT_PILLAR?'on':''}" data-p="${p}" onclick="catSetPillar('${p}')"><span class="pdot" style="background:${pillColor(p)}"></span>${p} ${tag}</span>`;}).join('')}</div>
 <div id="catContent"></div>
`,

'p-browse':(id)=>`
 <div class="page-head"><div><h2>On-demand browse &amp; checkout</h2>${projBadge()}</div><div class="ph-actions">${cartButton()}${prodToggle(id)}</div></div>
 <div class="browse-wrap">
   <div>
     <div id="browse-self">
       <div class="ns-only"><div class="ai-panel"><div class="aih"><div class="ico">${ic('bot','ic-16')}</div><div class="t">Ordering assistant</div><span class="ns-badge" style="margin-left:auto">North Star</span></div><div class="ctx">Tell me what you're planning — e.g. "starting MEP rough-in next month" — and I'll assemble a bundle mapped to your schedule.</div><div class="searchbar"><span class="si">${ic('bot','ic-16')}</span><input id="nsAssist" placeholder="Describe what you're planning…" onkeydown="if(event.key==='Enter')nsAssistRun()"><button class="btn primary sm" onclick="nsAssistRun()">Assemble</button></div><div id="nsAssistOut"></div></div></div>
       <div class="searchbar"><span class="si">${ic('search','ic-16')}</span><input id="browseSearch" placeholder="Search catalog…" oninput="browseSearch()" autocomplete="off"></div>
       <div class="browse-hint">For the demo, try: <span onclick="browseFill('crane')">crane</span> · <span onclick="browseFill('excav')">excavator</span> · <span onclick="browseFill('scissor')">scissor lift</span></div>
       <div class="typeahead" id="browseTA"></div>
       <div class="cust-bar" onclick="browsePath(null,'cust')"><div class="cb-icon">${ic('edit','ic-16')}</div><div class="cb-main"><div class="cb-t">Custom request</div><div class="cb-d">Logistics · Prof. services · anything not in the catalog</div></div>${ic('chevronRight','ic-16')}</div>
       <div id="browseCart"></div>
       ${browseCatalogHTML()}
     </div>
     <div id="browse-cust" class="hidden">
       <div style="margin-bottom:12px"><button class="linkbtn" onclick="browsePath(null,'self')">${ic('chevronLeft','ic-14')} Back to catalog</button></div>
       <div class="custom-form">
         <div class="field"><label>Pillar / category <span class="req">required</span></label><select><option>Logistics</option><option>Professional services</option><option>Prefab</option><option>Equipment</option><option>Procurement</option></select></div>
         <div class="field"><label>Describe the need</label><textarea rows="2">Warehousing — 2,000 sq ft, 3 months, climate controlled, near jobsite</textarea></div>
         <div class="field-row"><div class="field"><label>From</label><input type="date" value="2026-07-01"></div><div class="field"><label>To</label><input type="date" value="2026-09-30"></div><div class="field"><label>Qty</label><input value="1"></div></div>
         <div class="field"><label>Attach specs / drawings</label><div class="dropzone" onclick="document.getElementById('fchip').classList.remove('hidden');toast('File attached to order (demo)')">${ic('upload','ic-16')} Drop a file or click to upload — attached to this order</div><span class="filechip hidden" id="fchip">${ic('file','ic-14')} warehouse_layout.pdf</span></div>
       </div>
     </div>
   </div>
   <div class="cart">
     <div id="reqLines">${browseReqLinesHTML()}</div>
     <div class="ct"><span>Est. /mo</span><span id="reqTotal">${browseReqTotal()}</span></div>
     <button class="btn primary" style="width:100%;margin-top:14px;justify-content:center" onclick="checkoutFromCart()">${ic('send','ic-14')} Checkout</button>
   </div>
 </div>
`,

'p-orders':(id)=>`
 <div class="page-head"><div><h2>Orders</h2>${projBadge()}</div>${prodToggle(id)}</div>
 <div class="ns-only"><div class="card span3" style="margin:14px 0"><div class="ch"><span class="ci k3">${ic('map','ic-16')}</span><span class="t">Live tracking</span><span class="sub">ORD-3042 · 2× ¾-Ton 4×4 · in transit</span><span class="chip ok" style="margin-left:auto">On schedule</span></div>
   <div class="track-wrap">
     <div class="track-map">
       <svg viewBox="0 0 520 220" width="100%" style="display:block">
         <defs><pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" fill="none" stroke="var(--gray-200)" stroke-width="1"/></pattern></defs>
         <rect width="520" height="220" fill="var(--steel-050)"/><rect width="520" height="220" fill="url(#grid)"/>
         <!-- route -->
         <path id="route" d="M60 170 C 150 150, 180 80, 270 90 S 420 120, 460 50" fill="none" stroke="var(--gray-300)" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 10"/>
         <path d="M60 170 C 150 150, 180 80, 270 90" fill="none" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/>
         <!-- origin + dest -->
         <g><circle cx="60" cy="170" r="8" fill="var(--charcoal)"/><text x="60" y="196" font-size="10" fill="var(--charcoal-700)" text-anchor="middle" font-weight="700">West yard</text></g>
         <g><circle cx="460" cy="50" r="8" fill="var(--red)"/><text x="460" y="34" font-size="10" fill="var(--red)" text-anchor="middle" font-weight="700">Gate 3 · site</text></g>
         <!-- truck marker: animated along the route via SMIL -->
         <g id="truckDot"><circle r="12" fill="var(--red)"/><circle r="12" fill="none" stroke="#fff" stroke-width="2"/><animateMotion dur="6s" repeatCount="indefinite" keyPoints="0;0.52;0.52" keyTimes="0;0.7;1" calcMode="linear"><mpath href="#route"/></animateMotion></g>
       </svg>
     </div>
     <div class="track-side">
       <div class="track-eta"><div class="te-n">10:40a</div><div class="te-s">ETA · 42 mi out</div></div>
       <div class="track-steps">
         <div class="ts on"><span class="ts-dot"></span>Picked up · West yard · 8:05a</div>
         <div class="ts on"><span class="ts-dot"></span>In transit · I-80 W · now</div>
         <div class="ts"><span class="ts-dot"></span>Arriving · Gate 3</div>
       </div>
       <button class="btn sm" onclick="toast('Driver: Marcus · (510) 555-0199 (demo)')">${ic('user','ic-14')} Contact driver</button>
     </div>
   </div>
   <div class="track-photos"><div class="tp-h">Delivery photos <span class="chip steel">3</span> · tap to enlarge</div><div class="tp-grid">${[['Loaded at yard','var(--steel)'],['Secured on trailer','var(--proc)'],['BOL / paperwork','var(--charcoal)']].map((p,i)=>`<button class="tp-thumb" onclick="openPhoto(${i})">${photoThumb(i)}<span>${p[0]}</span></button>`).join('')}</div></div>
 </div></div>
 <div class="tabs" style="margin-top:14px"><button class="on" onclick="ordTab(this,'active')">Active</button><button onclick="ordTab(this,'history')">History</button></div>
 <div id="ord-active" class="list">
   <div class="lrow cols5 lhead"><div>Order</div><div>Product</div><div>Dates</div><div>Cost code</div><div>Status</div></div>
   ${ORDERS.filter(o=>o.stage<5).map((o,i)=>`<div class="lrow cols5 click" onclick="openOrderDetail(${ORDERS.indexOf(o)})"><div class="pri">${o.id} ${ic('chevronRight','ic-14')}</div><div>${o.prod}</div><div>${o.dates}</div><div class="mono">${o.code}</div><div><span class="chip ${o.status==='On-rent'?'ok':'warn'}">${o.status}</span></div></div>`).join('')}
 </div>
 <div id="ord-history" class="list hidden">
   <div class="lrow cols5 lhead"><div>Order</div><div>Product</div><div>Arrived</div><div>Cost code</div><div>Status</div></div>
   ${ORDERS.map((o,i)=>`<div class="lrow cols5 click" onclick="openOrderDetail(${i})"><div class="pri">${o.id} ${ic('chevronRight','ic-14')}</div><div>${o.prod}</div><div>${o.arrived}</div><div class="mono">${o.code}</div><div><span class="chip ${o.status==='Off-rent'?'gray':o.status==='On-rent'?'ok':'warn'}">${o.status}</span></div></div>`).join('')}
 </div>
 <div style="font-size:11.5px;color:var(--gray-500);margin-top:12px">Click-through shows what was ordered, when it arrived, dates, and status. ${'{ns}'}</div>
`.replace('{ns}',effMode(id)==='northstar'?'North Star adds live in-transit tracking, ETAs, and delivery photos.':'Equipment-only for V1; invoice generation and all-pillar tracking follow in North Star.'),

'p-billing':(id)=>`
 <div class="page-head"><div><h2>Billing &amp; budget</h2>${projBadge()}</div>${prodToggle(id)}</div>
 <div class="tabs" style="margin-top:14px"><button class="on" onclick="billTab(this,'pending')">Pending approval</button><button onclick="billTab(this,'budget')">Budget</button></div>
 <div id="bill-pending"><div class="pb-wrap">
   <div class="list">
     <div class="lrow cols5 lhead"><div>Bill</div><div>Product</div><div>Amount</div><div>Cost code</div><div>Window</div></div>
     <div class="lrow cols5" style="background:var(--red-050)"><div class="pri">BILL-9012</div><div>Excavator 45–55T</div><div>$8,400</div><div class="mono">312100…</div><div><span class="window-chip soon">2 days</span></div></div>
     <div class="lrow cols5"><div class="pri">BILL-9008</div><div>Scissor lift 32ft</div><div>$1,150</div><div class="mono">262600…</div><div><span class="window-chip mid">5 days</span></div></div>
     <div class="lrow cols5"><div class="pri">BILL-8999</div><div>Telehandler 10K</div><div>$4,300</div><div class="mono">013130…</div><div><span class="window-chip ok">8 days</span></div></div>
   </div>
   <div class="bill-detail">
     <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><h3 class="disp" style="font-size:17px;text-transform:uppercase">BILL-9012</h3><span class="window-chip soon">2 days left</span></div>
     <div style="font-size:12.5px;color:var(--gray-500);margin-bottom:14px">Excavator 45–55T · request REQ-1058 · on-rent Jun 1</div>
     <div class="field-row"><div class="field"><label>Job / Dept</label><input value="004987.01"></div><div class="field"><label>Expenditure</label><input value="3005"></div><div class="field"><label>Task code</label><input value="2000"></div></div>
     <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" onclick="approveBill()">${ic('check','ic-14')} Approve → finalize</button><button class="btn" onclick="openDispute()">${effMode(id)==='northstar'?ic('flag','ic-14')+' Dispute bill':ic('edit','ic-14')+' Correct cost code'}</button></div>
   </div>
 </div></div>
 <div id="bill-budget" class="hidden">
   <div class="v1-only">
     <div class="bud-summary">
       <div class="bud-stat"><div class="bud-k">Equipment budget</div><div class="bud-n">$1,700K</div><div class="bud-s">across cost codes below</div></div><div class="bud-div"></div>
       <div class="bud-stat"><div class="bud-k">Actual + committed</div><div class="bud-n">$1,326K</div><div class="bud-s">spent + on order</div></div><div class="bud-div"></div>
       <div class="bud-stat"><div class="bud-k">Remaining</div><div class="bud-n" style="color:var(--ok)">$374K</div><div class="bud-s">uncommitted</div></div><div class="bud-div"></div>
       <div class="bud-stat"><div class="bud-k">Committed</div><div class="bud-n">78%</div><div class="bud-bar"><div class="bud-fill" style="width:78%"></div></div></div>
     </div>
     <div class="card"><div class="ch"><span class="ci k3">${ic('chart','ic-16')}</span><span class="t">Budget variance vs plan — by cost code</span><span class="sub">the 78% broken out</span></div><table class="mini"><tr><th>Cost code</th><th>Budget</th><th>Actual + committed</th><th>% used</th><th>Variance</th></tr><tr><td>31 Earthwork</td><td>$560K</td><td>$546K</td><td>98%</td><td><span class="chip ok">−2%</span></td></tr><tr><td>26 Electrical</td><td>$540K</td><td>$424K</td><td>79%</td><td><span class="chip ok">on plan</span></td></tr><tr><td>05 Structure</td><td>$600K</td><td>$356K</td><td>59%</td><td><span class="chip ok">−7%</span></td></tr><tr class="mini-total"><td><b>Total</b></td><td><b>$1,700K</b></td><td><b>$1,326K</b></td><td><b>78%</b></td><td></td></tr></table></div>
   </div>
   <div class="ns-only">
     <div class="grid g3" style="margin-bottom:16px">
       <div class="card"><div class="ch"><span class="ci">${ic('dollar','ic-16')}</span><span class="t">02S spend to date</span></div><div class="bignum">$1.13M</div><div class="stat-sub">all pillars · 78% of forecast</div></div>
       <div class="card"><div class="ch"><span class="ci k4">${ic('chart','ic-16')}</span><span class="t">Forecast at completion</span></div><div class="bignum">$1.45M</div><div class="stat-sub">$12K under budget (proj.)</div></div>
       <div class="card"><div class="ch"><span class="ci k2">${ic('warning','ic-16')}</span><span class="t">Flags surfaced</span></div><div class="bignum">3</div><div class="stat-sub">rate & duration anomalies</div></div>
     </div>
     <!-- Cost-overrun controls -->
     <div class="card" style="margin-bottom:16px;border-left:4px solid var(--warn)"><div class="ch"><span class="ci k2">${ic('warning','ic-16')}</span><span class="t">Cost-overrun controls</span><span class="ns-badge" style="margin-left:auto">North Star</span></div>
       <div class="overrun-top">
         <div class="ov-alert"><div class="ova-ico">${ic('warning','ic-16')}</div><div><b>Electrical (code 26) projected +6% over budget by completion.</b><div class="ova-sub">At the current burn rate ($44K/mo), code 26 crosses its $540K budget in <b>early October</b> — ~$32K over. Two levers below can close most of the gap.</div></div></div>
         <div class="ov-burn"><div class="ovb-h">Burn vs budget — code 26</div><svg viewBox="0 0 300 110" width="100%"><defs></defs>
           <line x1="0" y1="18" x2="300" y2="18" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="4 4"/><text x="4" y="14" font-size="8" fill="var(--red)" font-weight="700">Budget $540K</text>
           <polyline points="6,92 55,84 104,72 153,60 202,46 251,30 295,10" fill="none" stroke="var(--charcoal)" stroke-width="2.5"/>
           <polyline points="6,92 55,84 104,72 153,60" fill="none" stroke="var(--red)" stroke-width="3"/>
           <circle cx="153" cy="60" r="4" fill="var(--red)"/><text x="150" y="76" font-size="8" fill="var(--gray-500)" text-anchor="middle">today</text>
           <text x="270" y="26" font-size="8" fill="var(--charcoal-700)">proj.</text>
         </svg></div>
       </div>
       <div class="ov-levers">${[['Off-rent 2 idle units now','Recovers ~$1.9K/wk · $14K by Oct','Apply'],['Right-size the scissor-lift order','2 of 6 unused on site — drop to 4','Apply'],['Reforecast code 26 +$32K','Rebaseline with PM sign-off','Reforecast']].map(l=>`<div class="ov-lever"><div><b>${l[0]}</b><div class="ovl-sub">${l[1]}</div></div><button class="btn sm ${l[2]==='Reforecast'?'':'primary'}" onclick="toast('${l[2]==='Reforecast'?'Reforecast submitted for PM sign-off':l[0]+' — applied'}')">${l[2]}</button></div>`).join('')}</div>
       <div class="ov-thresholds"><div class="ovt-h">Budget alert thresholds <span class="chip steel">auto-monitored</span></div><div class="ovt-row"><span>Warn at</span><span class="thresh-pill">90% committed</span><span>Escalate at</span><span class="thresh-pill">100% committed</span><span>Hard stop new orders at</span><span class="thresh-pill">105%</span><button class="btn ghost sm" style="margin-left:auto" onclick="setBudgetAlert()">${ic('gear','ic-14')} Configure</button></div></div>
     </div>
     <div class="card" style="margin-bottom:16px"><div class="ch"><span class="ci k3">${ic('chart','ic-16')}</span><span class="t">02S spend by pillar</span><span class="sub">all billing history · this project</span></div>
       <div style="display:flex;flex-direction:column;gap:9px;font-size:12.5px">
         ${[['Equipment','var(--red)',88,'$742K'],['Prefab','var(--charcoal)',52,'$210K'],['Procurement','var(--gold)',30,'$96K'],['Logistics','var(--steel)',22,'$54K'],['Professional services','var(--rose)',12,'$26K']].map(([n,c,w,v])=>`<div><div style="display:flex;justify-content:space-between;margin-bottom:3px"><span><span class="pdot" style="background:${c}"></span>${n}</span><b>${v}</b></div><div style="height:7px;background:var(--gray-200);border-radius:4px"><div style="width:${w}%;height:100%;background:${c};border-radius:4px"></div></div></div>`).join('')}
       </div>
       <div style="font-size:11px;color:var(--gray-500);margin-top:11px">North Star unifies billing history across every pillar (V1 is equipment-only, via YardHub). Click any pillar to drill into its billings.</div>
     </div>
     <div class="card"><div class="ch"><span class="ci">${ic('bulb','ic-16')}</span><span class="t">Spend intelligence</span><span class="ns-badge" style="margin-left:auto">North Star</span></div>
       <table class="mini"><tr><th>Insight</th><th>Detail</th><th></th></tr>
       <tr><td>Idle-rental spend</td><td>2 units idle 6+ days — $1.9K/wk recoverable</td><td><button class="btn sm" onclick="toast('Off-rent initiated')">Act</button></td></tr>
       <tr><td>Rate anomaly</td><td>Excavator billed above MSA on 3 invoices</td><td><button class="btn sm" onclick="openDispute()">Dispute</button></td></tr>
       <tr><td>Phase pacing</td><td>Electrical trending +3% — reforecast suggested</td><td><button class="btn sm" onclick="toast('Reforecast opened (demo)')">Review</button></td></tr></table>
       <div style="font-size:11px;color:var(--gray-500);margin-top:10px">All-pillar billing history plus lightweight intelligence — idle spend, rate anomalies, and pacing — for full cost visibility across the project.</div>
     </div>
   </div>
 </div>
`,

'p-edp':(id)=>`
 <div class="page-head"><div><h2>Equipment demand plan</h2>${projBadge()}</div>${prodToggle(id)}</div>

 <!-- ================= NORTH STAR: AI pre-built plan ================= -->
 <div class="ns-only">${nsDraftScreen('equipment',{title:'02S drafted your equipment plan'})}</div>

 <!-- ================= V1: hands-on planning tool ================= -->
 <div class="v1-only">
 <div class="edp-stats" style="margin-top:14px">
   <div class="edp-stat cost"><div class="k">Planned equipment cost</div><div class="n">$2.08M</div><div class="s">rates × time on rent</div></div>
   <div class="edp-stat"><div class="k">Peak month</div><div class="n">$228K</div><div class="s">November 2026</div></div>
   <div class="edp-stat"><div class="k">Equipment lines</div><div class="n">31</div><div class="s">across 3 phases</div></div>
   <div class="edp-stat"><div class="k">Open requests</div><div class="n">2</div><div class="s">1 acknowledged · 1 in cart</div></div>
 </div>
 <div class="edp-toolbar">
   <button class="btn primary" onclick="addEq()">${ic('plus','ic-14')} Add equipment</button>
   <select class="btn" style="font-weight:600" onchange="setEDPGroup(this.value)"><option>Group by: Controlling code</option><option>Group by: Equipment class</option><option>Group by: Scope</option></select>
   <span style="flex:1"></span>
   <div class="seg-toggle"><button class="on" onclick="edpView(this,'sched')">Schedule</button><button onclick="edpView(this,'list')">List</button></div>
 </div>
 <div class="edp-add hidden" id="edp-add"><div class="addh">Add equipment</div><div class="add-grid"><div class="field" style="margin:0"><label>Describe it</label><input value="50-ton excavator w/ dual auxiliaries + GPS"></div><div class="field" style="margin:0"><label>Qty</label><input value="2"></div><div class="field" style="margin:0"><label>On-rent</label><input value="Jun 2026"></div><div class="field" style="margin:0"><label>Off-rent</label><input value="Dec 2026"></div><div class="field" style="margin:0"><label>Phase</label><select><option>Sitework & Civil</option><option>Structure</option><option>MEP / Electrical</option></select></div></div>
   <div class="taxo-row" style="margin-top:12px"><span style="font-size:11px;color:var(--gray-500);letter-spacing:.05em;text-transform:uppercase;font-weight:700">Recommended</span><div class="reco"><b>Earthmoving › Excavators › 45–55T</b></div><span class="code-chip">31-2100</span><button class="btn sm" onclick="toast('Taxonomy confirmed')">Confirm</button><button class="btn ghost sm" onclick="toast('Pick a different class (demo)')">Override</button><span style="flex:1"></span><button class="btn primary" onclick="addEq();toast('Added to plan')">Add to plan</button></div>
 </div>
 <div class="edp-cart-bar"><div class="ecb-l">${ic('cart','ic-16')} <b><span class="edp-cart-count">1</span></b> line(s) staged for request <span class="ecb-hint">— add more with the ${ic('cart','ic-14')} button on any plan row</span></div><button class="btn primary sm" onclick="edpSendRequest()">${ic('send','ic-14')} Send request <span class="cart-badge edp-cart-count">1</span></button></div>
 <div id="edp-schedule">${buildSchedule('Controlling code')}</div>
 <div id="edp-list" class="hidden">${buildList('Controlling code')}</div>
 <div class="drag-hint">${ic('chevronLeft','ic-14')}${ic('chevronRight','ic-14')} Drag a bar to shift its rental window — dates update as you go. Counts and peak roll up per group; switch grouping with the control above.</div>
 </div>

 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci">${ic('send','ic-16')}</span><span class="t">Requests against this plan</span><span class="sub">plan is the projection · a request is the actual call-on</span><button class="btn primary sm v1-only" style="margin-left:auto" onclick="edpSendRequest()">${ic('send','ic-14')} Send request <span class="cart-badge edp-cart-count">1</span></button></div>
   <div class="list"><div class="lrow cols5 lhead"><div>Request</div><div>Lines</div><div>Type</div><div>Submitted</div><div>Status</div></div>
   <div class="lrow cols5"><div class="pri">REQ-1042</div><div>2× ¾-Ton 4×4</div><div>Call-on</div><div>May 12</div><div><span class="chip ok">Fulfilled</span></div></div>
   <div class="lrow cols5"><div class="pri">REQ-1051</div><div>1× SUV AWD</div><div>Call-on</div><div>May 14</div><div><span class="chip warn">Acknowledged</span></div></div>
   <div class="lrow cols5"><div class="pri">REQ-1058</div><div>2× excavator 45–55T</div><div>Call-on</div><div>—</div><div><span class="chip gray">New · in cart</span></div></div></div>
   <div style="display:flex;align-items:center;gap:12px;margin-top:14px;flex-wrap:wrap"><span style="font-size:11px;color:var(--gray-500);letter-spacing:.05em;text-transform:uppercase;font-weight:700">Lifecycle</span><div class="req-lifecycle"><span class="st on">New</span><span class="arr">→</span><span class="st">Acknowledged</span><span class="arr">→</span><span class="st">Fulfilled</span><span class="arr">→</span><span class="st locked">Archived</span><span style="margin-left:8px;color:var(--gray-500);font-size:11px">· also: Unable to fill · Updated</span></div></div>
 </div>

 <div class="grid g3" style="margin-top:16px">
   <div class="card"><div class="ch"><span class="ci k3">${ic('chart','ic-16')}</span><span class="t">Cost by phase</span></div><div style="display:flex;flex-direction:column;gap:10px;font-size:12.5px"><div><div style="display:flex;justify-content:space-between"><span>Structure</span><b>$556K</b></div><div style="height:6px;background:var(--gray-200);border-radius:4px;margin-top:4px"><div style="width:90%;height:100%;background:var(--charcoal);border-radius:4px"></div></div></div><div><div style="display:flex;justify-content:space-between"><span>Sitework & Civil</span><b>$156K</b></div><div style="height:6px;background:var(--gray-200);border-radius:4px;margin-top:4px"><div style="width:42%;height:100%;background:var(--red);border-radius:4px"></div></div></div><div><div style="display:flex;justify-content:space-between"><span>MEP / Electrical</span><b>$89K</b></div><div style="height:6px;background:var(--gray-200);border-radius:4px;margin-top:4px"><div style="width:28%;height:100%;background:var(--steel);border-radius:4px"></div></div></div></div></div>
   <div class="card"><div class="ch"><span class="ci k2">${ic('clock','ic-16')}</span><span class="t">Revision history</span></div><table class="mini"><tr><th>Version</th><th>Change</th><th>By</th></tr><tr><td>v4 · current</td><td>Shifted Phase 2 by 3 wks</td><td>Rian</td></tr><tr><td>v3</td><td>Added civil earthwork</td><td>Rian</td></tr></table></div>
   <div class="card"><div class="ch"><span class="ci k4">${ic('dollar','ic-16')}</span><span class="t">Budget variance</span></div><table class="mini"><tr><th>Code</th><th>Budget</th><th>Act+comm</th><th></th></tr><tr><td>31</td><td>$560K</td><td>$546K</td><td><span class="chip ok">−2%</span></td></tr><tr><td>26</td><td>$540K</td><td>$556K</td><td><span class="chip warn">+3%</span></td></tr></table></div>
 </div>
`,

'p-prefab':(id)=>pillarPlan(id,{name:'Prefab',kind:'product',total:'$210K',peak:'Sep',rows:[['Level-2 headwall','12 units','2026-08-15','2026-10-31'],['Prefab MEP rack','8 units','2026-09-01','2026-11-30'],['Bathroom pod','24 units','2026-10-10','2026-12-31']]}),
'p-proc':(id)=>pillarPlan(id,{name:'Procurement',kind:'product',total:'$96K',peak:'Jun',rows:[['Safety supplies bundle','Qty 40','2026-06-01','2027-02-28'],['Small tools kit','Qty 15','2026-06-01','2027-02-28'],['Consumables','Monthly','2026-06-01','2027-05-31']]}),
'p-log':(id)=>pillarPlan(id,{name:'Logistics',kind:'service',total:'$54K',peak:'Jul',rows:[['Warehousing','2,000 sq ft','2026-07-01','2026-09-30'],['Site delivery','Daily runs','2026-06-15','2026-12-15'],['Heavy haul','Transformer move','2026-06-09','2026-06-09']]}),
'p-profsvc':(id)=>pillarPlan(id,{name:'Prof. services',kind:'service',total:'$26K',peak:'Nov',rows:[['Surveying','Site + layout','2026-06-01','2026-07-31'],['Commissioning','BESS + PV','2026-11-01','2026-11-21'],['Third-party inspection','Structural','2026-08-01','2026-11-30']]}),

'p-profile':(id)=>{const admin=IS_ADMIN;const LEVELS=['Edit access (incl. billing)','Order &amp; view','View only'];
 return `
 <div class="page-head"><div><h2>Project profile</h2>${projBadge()}</div>${prodToggle(id)}</div>
 <div class="v1-only">
   <div class="admin-bar"><div><b>You're viewing as ${admin?'an Admin':'a standard member'}.</b> <span style="color:var(--gray-500)">${admin?'Admins can edit access, add/remove members, and create projects.':'Standard members can view the roster but cannot change access or create projects.'}</span></div><button class="btn sm" onclick="toggleAdmin()">${ic('refresh','ic-14')} View as ${admin?'standard member':'admin'}</button></div>
   <div style="display:flex;justify-content:flex-end;margin:12px 0"><button class="btn ${admin?'':'disabled'}" ${admin?'':'style="opacity:.5;pointer-events:none" title="Admin only"'} onclick="createProject()">${ic('plus','ic-14')} Create project ${admin?'':ic('lock','ic-14')}</button></div>
   <div class="grid g2">
     <div class="card"><div class="ch"><span class="ci">${ic('team','ic-16')}</span><span class="t">Team roster</span>${admin?`<button class="btn sm" style="margin-left:auto" onclick="addTeammate()">${ic('plus','ic-14')} Add teammate</button>`:`<span class="chip gray" style="margin-left:auto">${ic('lock','ic-14')} Admin edits access</span>`}</div>
       <div class="roster">
         ${[['RM','Rian M.','Project Manager','var(--red)',0,true],['JT','Jamie T.','Superintendent','var(--steel)',1,false],['LP','Lee P.','Project Accountant','var(--gold)',0,false]].map(([in_,nm,role,c,lvl,isAdm])=>`<div class="mrow"><div style="display:flex;align-items:center;gap:10px"><span class="avatar" style="background:${c}">${in_}</span><div><b>${nm}</b>${isAdm?' <span class="chip red" style="font-size:9px">Admin</span>':''}<br><span style="color:var(--gray-500);font-size:11px">${role}</span></div></div><div>${admin?`<select class="perm">${LEVELS.map((l,i)=>`<option ${i===lvl?'selected':''}>${l}</option>`).join('')}</select>`:`<span class="perm-static">${LEVELS[lvl].replace('&amp;','&')}</span>`}</div>${admin?`<button class="btn ghost sm" onclick="toast('Removed (demo)')">Remove</button>`:'<span></span>'}</div>`).join('')}
       </div>
       <div style="font-size:11px;color:var(--gray-500);margin-top:10px">Access levels: <b>Edit access (incl. billing)</b> can order, approve billing, and manage the plan · <b>Order &amp; view</b> can order and track · <b>View only</b> is read-only.</div>
     </div>
     <div class="card"><div class="ch"><span class="ci k2">${ic('bell','ic-16')}</span><span class="t">Escalation contacts</span></div><table class="mini"><tr><th>Role</th><th>Name</th><th></th></tr><tr><td>Primary PM</td><td>Rian M.</td><td>${admin?`<button class="btn ghost sm" onclick="toast('Edit (demo)')">Edit</button>`:'<span style="color:var(--gray-500);font-size:11px">—</span>'}</td></tr><tr><td>Site lead</td><td>Jamie T.</td><td>${admin?`<button class="btn ghost sm" onclick="toast('Edit (demo)')">Edit</button>`:'<span style="color:var(--gray-500);font-size:11px">—</span>'}</td></tr></table>
       <div style="margin-top:14px"><div class="ch" style="margin-bottom:8px"><span class="ci k3">${ic('map','ic-16')}</span><span class="t" style="font-size:13px">Default ship-to</span></div><div class="ship-card"><div class="ship-line"><b>${PROJECT.shipTo.line1}</b></div><div class="ship-line">${PROJECT.shipTo.line2}</div><div class="ship-line muted">${PROJECT.shipTo.contact} · ${PROJECT.shipTo.phone}</div></div><div style="font-size:11px;color:var(--gray-500);margin-top:8px">Pre-fills the delivery address on every order.</div></div>
     </div>
   </div>
 </div>
 <div class="ns-only">
   <div class="ai-panel" style="margin-bottom:14px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">Roster keeps itself current — automatically</div></div><div class="ctx" style="margin-bottom:0">Members and permissions sync from Procore / the SoR via SSO, applied through role templates. When someone rolls on or off the project in the system of record, their portal access updates on its own — no manual add/remove. Admins still override per-person when needed.</div></div>
   <div class="grid g2">
     <div class="card"><div class="ch"><span class="ci">${ic('team','ic-16')}</span><span class="t">Auto-provisioned roster</span><span class="chip ok" style="margin-left:auto">${ic('refresh','ic-14')} Synced 8:02a</span></div>
       <div class="roster">
         ${[['RM','Rian M.','Project Manager','var(--red)','Edit access','SSO'],['JT','Jamie T.','Superintendent','var(--steel)','Order & view','SSO'],['LP','Lee P.','Project Accountant','var(--gold)','Edit access','SSO'],['AV','Ana V.','Field Engineer','var(--prefab)','Order & view','auto-added Mon']].map(([in_,nm,role,c,lvl,src])=>`<div class="mrow"><div style="display:flex;align-items:center;gap:10px"><span class="avatar" style="background:${c}">${in_}</span><div><b>${nm}</b><br><span style="color:var(--gray-500);font-size:11px">${role}</span></div></div><div><span class="perm-static">${lvl}</span></div><div><span class="chip ${src==='SSO'?'steel':'ok'}" style="font-size:9px">${src}</span></div></div>`).join('')}
       </div>
       <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:10px"><span class="chip steel">SSO-driven</span><span class="chip gray">Program security inherited</span><span class="chip gold">Role templates</span></div>
     </div>
     <div class="card"><div class="ch"><span class="ci k4">${ic('link','ic-16')}</span><span class="t">Subcontractor portal (CCEP)</span></div><p style="color:var(--charcoal-700);font-size:12.5px;margin:0 0 10px">Grant scoped access to subs for their equipment and deliveries, and configure this project's portal specifics.</p><button class="btn" onclick="toast('Subcontractor invited (demo)')">${ic('plus','ic-14')} Invite subcontractor</button>
       <div style="margin-top:14px"><div class="ch" style="margin-bottom:8px"><span class="ci k3">${ic('map','ic-16')}</span><span class="t" style="font-size:13px">Ship-to addresses</span></div><p style="color:var(--charcoal-700);font-size:12.5px;margin:0">Managed centrally and pushed to OMS; field crews can add a gate/laydown via mobile receiving.</p></div>
     </div>
   </div>
 </div>
`;},

'p-support':(id)=>`
 <div class="page-head"><div><h2>Contact &amp; support</h2>${projBadge()}</div>${prodToggle(id)}</div>
 <div class="v1-only">
   <div class="chatwrap" style="margin-top:14px">
     <div class="card"><div class="ch"><span class="ci">${ic('send','ic-16')}</span><span class="t">Send a message to 02S</span></div>
       <div class="field"><label>About</label><select><option>General question</option><option>Equipment pillar</option><option>Prefab</option><option>Procurement</option><option>Logistics</option><option>Professional services</option><option>General feedback on 02S</option></select></div>
       <div class="field"><label>Link a record (optional)</label><select><option>— none —</option><option>ORD-3042 · 2× ¾-Ton 4×4</option><option>BILL-9012 · Excavator</option><option>REQ-1058 · plan item</option></select></div>
       <div class="field"><label>Message</label><textarea rows="4">Question about the delivery window on ORD-3042.</textarea></div>
       <button class="btn primary" onclick="toast('Message sent — 02S notified by email, will respond outside the portal')">${ic('send','ic-14')} Send message</button>
     </div>
     <div><div class="contact-card"><div style="font-weight:900;color:var(--charcoal);font-family:var(--disp);margin-bottom:8px">02S contacts</div>
       <div class="contact-row"><span class="ci2" style="background:var(--red-050);color:var(--red)">${ic('truck','ic-16')}</span><div><b>Equipment desk</b><br><span class="cmail">equipment@02s.mccarthy.com</span></div></div>
       <div class="contact-row"><span class="ci2" style="background:var(--prefab-050);color:var(--prefab)">${ic('layers','ic-16')}</span><div><b>Prefab</b><br><span class="cmail">prefab@02s.mccarthy.com</span></div></div>
       <div class="contact-row"><span class="ci2" style="background:var(--proc-050);color:var(--proc)">${ic('cart','ic-16')}</span><div><b>Procurement</b><br><span class="cmail">procurement@02s.mccarthy.com</span></div></div>
       <div class="contact-row"><span class="ci2" style="background:var(--logistics-050);color:var(--logistics)">${ic('map','ic-16')}</span><div><b>Logistics</b><br><span class="cmail">logistics@02s.mccarthy.com</span></div></div>
       <div class="contact-row"><span class="ci2" style="background:var(--profsvc-050);color:var(--profsvc)">${ic('team','ic-16')}</span><div><b>Professional services</b><br><span class="cmail">profservices@02s.mccarthy.com</span></div></div>
       <div class="contact-divider"></div>
       <div class="contact-row"><span class="ci2" style="background:var(--gray-200);color:var(--charcoal)">${ic('help','ic-16')}</span><div><b>General 02S</b><br><span class="cmail">support@02s.mccarthy.com</span><br><span class="cmail">${ic('phone','ic-14')} 888.622.7278</span></div></div>
       <div style="font-size:11px;color:var(--gray-500);margin-top:8px">Each pillar has a designated inbox; general 02S covers anything cross-pillar by phone or email.</div>
     </div></div>
   </div>
 </div>
 <div class="ns-only">
   <div class="chatwrap" style="margin-top:14px">
     <div class="chatbox">
       <div class="chat-head"><span class="bot">${ic('bot','ic-16')}</span><div><div class="nm">02S Assistant</div><div class="st">${ic('check','ic-14')} online · 2-way with 02S ops</div></div><span style="margin-left:auto"><span class="chip ok">SLA: 4h</span></span></div>
       <div class="chat-body" id="supBody">
         <div class="bub them"><div class="who">02S Assistant</div>Hi Rian — I can answer questions, open tickets, or connect you to a pillar desk. What do you need?</div>
         <div class="bub me"><div class="who">You</div>When is my excavator arriving?</div>
         <div class="bub them"><div class="who">02S Assistant</div>ORD-3042 (2× ¾-Ton) is in transit — ETA <b>May 20, 10:40a</b>, 42 mi out. Want me to notify you if the ETA slips?</div>
       </div>
       <div class="chat-in"><button class="ic-btn" title="Attach" onclick="toast('Attach a document (demo)')">${ic('upload','ic-16')}</button><input id="supInput" placeholder="Message 02S…" onkeydown="chatKey(event,'supInput','supBody',true)"><button class="btn primary" onclick="sendChat('supInput','supBody',true)">${ic('send','ic-14')}</button></div>
     </div>
     <div><div class="contact-card"><div style="font-weight:900;color:var(--charcoal);font-family:var(--disp);margin-bottom:8px">Open tickets</div><div class="contact-row"><span class="chip warn">Open</span><div style="font-size:12px">Delivery window · ORD-3042</div></div><div class="contact-row"><span class="chip ok">Resolved</span><div style="font-size:12px">Billing rate · BILL-8790</div></div></div>
       <div class="quick"><button onclick="supQuick('track')">${ic('truck','ic-14')} Track an order</button><button onclick="supQuick('dispute')">${ic('receipt','ic-14')} Dispute a bill</button><button onclick="supQuick('desk')">${ic('team','ic-14')} Reach equipment desk</button><button onclick="supQuick('ticket')">${ic('plus','ic-14')} Open a ticket</button></div>
     </div>
   </div>
 </div>
`,

/* ===== 02S OPPORTUNITIES (existing product, rebuilt as live HTML) ===== */
'o-list':(id)=>`
 <div class="page-head"><div><h2>02S Opportunities</h2><div class="desc">Pipeline, margin plans, and pillar breakdowns.</div></div></div>
 <div class="opp-flag" onclick="oppWireframeNote()">${ic('info','ic-16')}<div><b>Rough wireframe from the existing 02S Opportunities product.</b> Rebuilt here as live HTML to sit alongside the rest of the prototype — the real product is in production today. <span class="opp-flag-link">What's the plan? ${ic('chevronRight','ic-14')}</span></div></div>
 <div class="opp-filter">${['Name','Tier','Business Unit','State','Region','Market Sector','Stage','Stage Status','Has Margin Plan','Self Perform Scope'].map(f=>`<span class="opp-fchip">${f} ${ic('chevronDown','ic-14')}</span>`).join('')}<span style="margin-left:auto;font-size:11.5px;color:var(--steel)">Award / construction date from <b>Thu, Jan 1, 2026</b></span></div>
 <div class="opp-cards">
   <div class="opp-sum"><div class="os-k">Revenue opportunity</div><div class="os-v">$6.47B</div><div class="os-s">$3.13B awarded</div></div>
   <div class="opp-sum"><div class="os-k">Sales opportunity</div><div class="os-v">$4.77B</div><div class="os-s">$2.15B awarded</div></div>
   <div class="opp-sum"><div class="os-k">Sales margin</div><div class="os-v">$946.98M</div><div class="os-s">$451.51M awarded</div></div>
 </div>
 <div class="opp-totals"><div class="ot"><div class="ot-k">Total opportunities</div><div class="ot-v">634</div></div><div class="ot"><div class="ot-k">Margin plans</div><div class="ot-v">226</div></div></div>
 <div class="card" style="border-top:3px solid var(--red)">
   <div class="ch"><span class="t" style="color:var(--red)">All opportunities</span><span class="sub">select one to open its margin plan, or create a new one</span><button class="btn sm" style="margin-left:auto" onclick="toast('New margin plan (demo)')">${ic('plus','ic-14')} Create margin plan</button></div>
   <div class="opp-grid">
     <div class="opp-item on" onclick="nav(state.role,'o-detail')">
       <div class="oi-head"><div><b>Fountain Valley WTP Pretreatment</b><div class="oi-tags"><span class="chip warn">Medium</span> Construction Management/General Contracting · ${ic('pin','ic-14')} Colorado Springs</div></div><span class="oi-val">$40.0M</span></div>
       <div class="oi-tl"><div class="oi-tl-h">Construction timeline</div><div class="oi-tl-row"><span><i>Award</i>—</span><span><i>Start</i>12/01/2027</span><span><i>Complete</i>12/31/2029</span></div></div>
       <div class="oi-nolink">No linked margin plans</div>
     </div>
     <div class="opp-item" onclick="nav(state.role,'o-detail')">
       <div class="oi-head"><div><b>1GPA – 2026 Q1 JOC Sales</b><div class="oi-tags"><span class="chip red">High</span> Construction Management/General Contracting · ${ic('pin','ic-14')} Phoenix</div></div><span class="oi-val">$1.8M</span></div>
       <div class="oi-tl"><div class="oi-tl-h">Construction timeline</div><div class="oi-tl-row"><span><i>Award</i>—</span><span><i>Start</i>08/03/2026</span><span><i>Complete</i>03/31/2027</span></div></div>
       <div class="oi-mp"><div class="oi-mp-h">Margin plan</div><div class="oi-mp-row"><span><i>Revenue opp.</i>$214.9K</span><span><i>TAM capture</i>29.4%</span><span><i>Sales opp.</i>$63.2K</span><span><i>Sales margin</i>$15.0K</span></div></div>
     </div>
   </div>
 </div>
`,

'o-detail':(id)=>`
 <div class="page-head"><div><h2 style="font-size:22px">1GPA – 2026 Q1 JOC Sales</h2><div class="desc">Margin plan · opportunity detail</div></div><button class="btn" onclick="nav(state.role,'o-list')">${ic('chevronLeft','ic-14')} All opportunities</button></div>
 <div class="opp-flag" onclick="oppWireframeNote()">${ic('info','ic-16')}<div><b>Rough wireframe from the existing 02S Opportunities product.</b> <span class="opp-flag-link">What's the plan? ${ic('chevronRight','ic-14')}</span></div></div>
 <div class="card" style="margin-bottom:14px"><div class="opp-detail-top">
   <div><div class="odt-k">Estimated overall value</div><div class="odt-v">$1,812,212</div></div>
   <div><div class="odt-k">Market type</div><div class="odt-v">Commercial</div></div>
   <div><div class="odt-k">Region</div><div class="odt-v">Southwest</div></div>
 </div></div>
 <div class="opp-metric-row">
   <div class="omr"><div class="omr-k">Revenue opportunity</div><div class="omr-v">$214.91K</div></div>
   <div class="omr"><div class="omr-k">TAM capture %</div><div class="omr-v">29.4%</div></div>
   <div class="omr"><div class="omr-k">Sales opportunity</div><div class="omr-v">$63.24K</div></div>
   <div class="omr"><div class="omr-k">Sales margin</div><div class="omr-v">$14.97K</div></div>
 </div>
 <div class="card" style="margin:14px 0"><div class="ch"><span class="t">Risks & opportunities</span><span class="chip gray" style="margin-left:8px">Weighted impact —</span><button class="btn sm" style="margin-left:auto" onclick="toast('Add risk/opportunity (demo)')">${ic('plus','ic-14')} Create</button></div><div style="font-size:12px;color:var(--gray-500);padding:6px 2px">No risks or opportunities captured yet.</div></div>
 <div class="card"><div class="ch"><span class="t">Pillar breakdown</span><span class="sub">edit product-line detail in each pillar to inform the estimate</span></div>
   <div class="opp-tabs">${['Equipment','Logistics','Procurement','Prefabrication','Professional Services'].map((t,i)=>`<span class="opp-tab ${i===0?'on':''}" onclick="oppPillarTab(this)">${t}</span>`).join('')}</div>
   <div class="opp-pillar-sum"><span class="ops-red">${ic('chart','ic-14')} Equipment</span><span>Revenue opportunity <b>$28,995</b></span><span>Sales opportunity <b>$28,995</b></span><span>Sales margin <b>$10,058</b></span><button class="btn sm" style="margin-left:auto" onclick="toast('Add product line (demo)')">${ic('plus','ic-14')} Product lines</button></div>
   <div class="list"><div class="lrow lhead cols-opp"><div>Product line</div><div>Rev. opp.</div><div>Rev. est.</div><div>Capture %</div><div>Sales opp.</div><div>Profit %</div><div>Sales margin</div><div>Prob. %</div></div>
     ${[['Fleet & Personnel Assets','$4.5K','$4.5K','100.0%','$4.5K','60.0%','$2.7K','100.0%'],['Contractor Controller Equipment Program (CCEP)','—','—','—','—','—','—','—'],['Fuel Services','—','—','—','—','—','—','—'],['Equipment Management Program (EMP)','$24.5K','$24.5K','100.0%','$24.5K','30.0%','$7.3K','100.0%']].map((r,i)=>`<div class="lrow cols-opp"><div class="pri" style="${i===0?'color:var(--steel)':''}">${r[0]}</div><div>${r[1]}</div><div>${r[2]}</div><div>${r[3]}</div><div>${r[4]}</div><div>${r[5]}</div><div><b>${r[6]}</b></div><div>${r[7]}</div></div>`).join('')}
   </div>
 </div>
`,

/* ===== CONTROL TOWER (North Star full build — anchored on leadership's Command Tower vision) ===== */
'ct-main':(id)=>`
 <div class="page-head"><div><h2>Control Tower</h2><div class="desc">Strategic planning &amp; finance — pipeline, margin plans, and the return to enterprise FP&amp;A.</div></div></div>
 <div class="ct-banner">${ic('flag','ic-16')}<div><b>North Star · Control Tower.</b> The target-state finance surface — the margin-plan handshake, YoY forecast, allocation flow, G&amp;A waterfall, and the return to enterprise FP&amp;A. 02S Opportunities feeds this from the pipeline side.</div></div>

 <div class="ct-brief"><div class="ctb-head"><span class="ci" style="background:rgba(255,255,255,.16);color:#fff">${ic('sparkle','ic-16')}</span><div><div class="ctb-t">This week in the tower</div><div class="ctb-s">3 things moving the number — each with a next step</div></div><span class="illus-tag" style="margin-left:auto;background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">Illustrative</span></div>
   <div class="ctb-items">
     <div class="ctb-item"><span class="ctb-dot warn"></span><div class="ctb-body"><b>$14M of pipeline has no margin plan.</b> 12 opportunities are defaulting to TAM. 02S can draft plans from each estimate to close the gap.</div><button class="btn sm primary" onclick="ctDraftPlans()">${ic('sparkle','ic-14')} Draft the 12 plans</button></div>
     <div class="ctb-item"><span class="ctb-dot red"></span><div class="ctb-body"><b>Prefab margin is 80 bps under target.</b> Denver load + re-rent premium are the drivers. See the pillar breakdown and the levers.</div><button class="btn sm" onclick="ctMarginDrill('Prefab')">Look at Prefab ${ic('chevronRight','ic-14')}</button></div>
     <div class="ctb-item"><span class="ctb-dot ok"></span><div class="ctb-body"><b>Fountain Valley WTP moves to bid this week.</b> A win lifts weighted margin to 8.1% — model it before the review.</div><button class="btn sm" onclick="nav('command-tower','ct-fpa')">Model the upside ${ic('chevronRight','ic-14')}</button></div>
   </div>
 </div>

 <div class="edp-stats" style="margin-top:16px"><div class="edp-stat"><div class="k">Weighted pipeline</div><div class="n">$4.77B</div><div class="s">sales opportunity</div></div><div class="edp-stat cost"><div class="k">Target margin</div><div class="n">8.0%</div><div class="s">plan 7.6% · −40 bps</div></div><div class="edp-stat"><div class="k">Margin plans</div><div class="n">226</div><div class="s">of 634 opportunities</div></div><div class="edp-stat"><div class="k">At risk</div><div class="n">$14M</div><div class="s">missing margin plans</div></div></div>

 <div class="grid g3" style="margin:16px 0">
   <div class="card"><div class="ch"><span class="ci"><span class="ct-num">1</span></span><span class="t">Opportunity list</span></div><div class="searchbar" style="margin-bottom:10px"><span class="si">${ic('search','ic-14')}</span><input placeholder="Search opportunities…"></div><table class="mini ct-opp"><tr><th>Opportunity</th><th>Stage</th><th>Value</th></tr><tr onclick="nav('command-tower','o-detail')"><td>Fountain Valley WTP</td><td><span class="chip warn">Bid</span></td><td>$40.0M</td></tr><tr onclick="nav('command-tower','o-detail')"><td>1GPA JOC Sales</td><td><span class="chip red">Won</span></td><td>$1.8M</td></tr><tr onclick="nav('command-tower','o-detail')"><td>Mercy Hospital</td><td><span class="chip gray">Pursuit</span></td><td>$210M</td></tr></table><button class="clink" onclick="nav('command-tower','o-list')">Open 02S Opportunities ${ic('chevronRight','ic-14')}</button></div>
   <div class="card"><div class="ch"><span class="ci"><span class="ct-num">2</span></span><span class="t">Margin plan</span></div><div style="display:flex;gap:18px;margin-bottom:10px"><div><div class="stat-sub">Target margin</div><div class="bignum" style="font-size:24px">8.0%</div></div><div><div class="stat-sub">Weighted</div><div class="bignum" style="font-size:24px">7.6%</div></div></div><table class="mini ct-opp"><tr><th>Pillar / line</th><th>Target</th><th>Plan</th><th>Δ bps</th></tr><tr onclick="ctMarginDrill('Equipment')"><td>Equipment</td><td>9.0%</td><td>8.4%</td><td><span style="color:var(--red)">▼ 60</span></td></tr><tr onclick="ctMarginDrill('Procurement')"><td>Procurement</td><td>6.0%</td><td>6.3%</td><td><span style="color:var(--ok)">▲ 30</span></td></tr><tr onclick="ctMarginDrill('Prefab')"><td>Prefab</td><td>11.0%</td><td>10.2%</td><td><span style="color:var(--red)">▼ 80</span></td></tr></table></div>
   <div class="card"><div class="ch"><span class="ci"><span class="ct-num">3</span></span><span class="t">Execution plan handshake</span></div><div class="ct-handshake"><div class="hs-node"><div class="hs-ico">${ic('chart','ic-16')}</div><div class="hs-l">Pursuit &amp; estimating</div><div class="hs-s">Margin plan submittal</div></div><div class="hs-link">${ic('link','ic-20')}<span class="chip ok">In sync</span></div><div class="hs-node"><div class="hs-ico">${ic('dollar','ic-16')}</div><div class="hs-l">Finance &amp; controls</div><div class="hs-s">Validated execution plan</div></div></div><div style="text-align:center;margin-top:10px"><button class="clink" onclick="toast('Opened the handshake audit trail (demo)')">View handshake history ${ic('chevronRight','ic-14')}</button></div></div>
 </div>

 <div class="card" style="margin-bottom:16px"><div class="ch"><span class="ci"><span class="ct-num">4</span></span><span class="t">Project number handshake</span><span class="sub">opportunity ↔ McCarthy project</span></div><div class="ct-pnh"><div class="pnh-box"><div class="pnh-k">Opportunity / quote #</div><div class="pnh-v mono">OPP-0001234</div></div><div class="pnh-arrow">${ic('link','ic-20')}<span class="chip ok" style="margin-top:6px">Linked</span></div><div class="pnh-box"><div class="pnh-k">McCarthy project #</div><div class="pnh-v mono">PRJ-567890</div></div><div style="margin-left:auto;font-size:11.5px;color:var(--gray-500)">Last updated May 20, 2025</div></div></div>

 <div class="grid g2" style="margin-bottom:16px">
   <div class="card"><div class="ch"><span class="ci"><span class="ct-num">5</span></span><span class="t">YoY 02S sales forecast</span><span class="sub">by pillar</span></div>
     <div class="ct-bars">${[['FY23A',60],['FY24A',72],['FY25F',88],['FY26F',100]].map(([l,h])=>`<div class="ctb"><div class="ctb-stack" style="height:${h}%"><div style="height:34%;background:var(--red)"></div><div style="height:33%;background:var(--charcoal)"></div><div style="height:33%;background:var(--gray-300)"></div></div><div class="ctb-l">${l}</div></div>`).join('')}</div>
     <div class="lg" style="margin-top:8px"><span><i style="background:var(--red)"></i>Building</span><span><i style="background:var(--charcoal)"></i>Infrastructure</span><span><i style="background:var(--gray-300)"></i>Industrial</span></div>
   </div>
   <div class="card"><div class="ch"><span class="ci"><span class="ct-num">6</span></span><span class="t">Sales to date</span><span class="sub">FY25 · by pillar</span></div>
     <div class="ct-bars">${[['Jan',30],['Feb',44],['Mar',52],['Apr',70],['May',86]].map(([l,h])=>`<div class="ctb"><div class="ctb-stack" style="height:${h}%"><div style="height:34%;background:var(--red)"></div><div style="height:33%;background:var(--charcoal)"></div><div style="height:33%;background:var(--gray-300)"></div></div><div class="ctb-l">${l}</div></div>`).join('')}</div>
     <div style="font-size:11.5px;color:var(--gray-500);margin-top:8px">Actuals vs the margin-plan forecast, reconciled to enterprise FP&amp;A.</div>
   </div>
 </div>

 <div class="card"><div class="ch"><span class="ci"><span class="ct-num">7</span></span><span class="t">FP&amp;A / Anaplan guardrails</span><span class="sub">model 02S_FY25_Plan_v3 · on track</span></div>
   <div class="ct-guardrails">${[['Revenue','ok'],['Margin','warn'],['SG&A','ok'],['Cash','ok'],['Working capital','ok']].map(([l,s])=>`<div class="grd"><div class="grd-ico ${s}">${ic(s==='ok'?'check':'warning','ic-16')}</div><div class="grd-l">${l}</div><div class="grd-b"><div class="grd-fill ${s}"></div></div></div>`).join('')}</div>
 </div>

 <div class="grid g2" style="margin-top:16px">
   <div class="card"><div class="ch"><span class="ci"><span class="ct-num">8</span></span><span class="t">Missing margin plan exceptions</span><span class="sub">TAM defaults applied</span><button class="btn primary sm" style="margin-left:auto" onclick="ctDraftPlans()">${ic('sparkle','ic-14')} Draft all with 02S</button></div>
     <div class="list"><div class="lrow lhead" style="grid-template-columns:1.6fr .9fr 1fr .7fr"><div>Opportunity</div><div>Issue</div><div>TAM default</div><div></div></div>${[['Mercy Hospital','No plan','9.0% (Building)'],['Civic Center Ph.2','No plan','8.0% (Infra)'],['Baystate Med','Stale','9.0% (Building)'],['Route 9 Widening','No plan','7.5% (Infra)']].map(r=>`<div class="lrow" style="grid-template-columns:1.6fr .9fr 1fr .7fr"><div class="pri">${r[0]}</div><div><span class="chip warn">${r[1]}</span></div><div style="color:var(--gray-500);font-size:11.5px">${r[2]}</div><div style="text-align:right"><button class="btn ghost sm" onclick="nav('command-tower','o-list')">${ic('chevronRight','ic-14')}</button></div></div>`).join('')}</div>
     <div style="font-size:11px;color:var(--gray-500);margin-top:10px">Opportunities without a margin plan fall back to the TAM (target addressable margin) default for their market until a plan is built — so the forecast is never blank.</div>
   </div>
   <div class="card"><div class="ch"><span class="ci"><span class="ct-num">9</span></span><span class="t">Direct-to-client flag</span><span class="sub">changes how results allocate</span></div>
     <div class="d2c"><div class="d2c-row"><span class="d2c-k">Opportunity</span><span class="d2c-v">Fountain Valley WTP</span></div><div class="d2c-row"><span class="d2c-k">Client type</span><span class="d2c-toggle"><span class="d2c-opt on">Direct-to-client</span><span class="d2c-opt">Indirect</span></span></div><div class="d2c-row"><span class="d2c-k">Flag status</span><span class="chip red">ON</span></div></div>
     <div class="d2c-impacts"><div class="d2c-ih">Impacts</div>${['Market split','Allocation flow','G&A allocation'].map(i=>`<span class="chip gray">${ic('check','ic-14')} ${i}</span>`).join('')}</div>
     <div style="font-size:11px;color:var(--gray-500);margin-top:10px">Direct-to-client work allocates differently through market splits and G&amp;A — flagging it here keeps the waterfall and margin plan honest.</div>
   </div>
 </div>
`,

'ct-forecast':(id)=>`
 <div class="page-head"><div><h2>YoY forecast</h2><div class="desc">Year-over-year 02S sales forecast by pillar and product line — reconciled to enterprise FP&amp;A.</div></div></div>
 <div class="ct-banner">${ic('flag','ic-16')}<div><b>North Star.</b> Forecasting anchored on leadership's Command Tower vision — margin-plan roll-up, weighted pipeline, and scenario modeling.</div></div>
 <div class="ct-fy-toggle"><span class="ct-fy-lbl">Forecast year</span><button class="on" onclick="ctForecastYear(this,'FY25')">FY 2025</button><button onclick="ctForecastYear(this,'FY26')">FY 2026</button></div>
 <div id="ctForecast">${ctForecastView('FY25')}</div>
`,

'ct-allocation':(id)=>`
 <div class="page-head"><div><h2>Allocation &amp; G&amp;A</h2><div class="desc">Allocation flow and the G&amp;A waterfall from gross margin to operating profit.</div></div></div>
 <div class="ct-banner">${ic('flag','ic-16')}<div><b>North Star.</b> The allocation flow and G&amp;A waterfall leadership scoped — regional utilization, national market splits, and enterprise G&amp;A rolling down to project margin.</div></div>
 <div class="grid g2" style="margin-top:14px">
   <div class="card"><div class="ch"><span class="t">Allocation flow</span><span class="sub">how 02S results flow back</span></div>
     <div class="alloc-flow">${[['Regional utilization',ic('gauge','ic-16')],['National market splits',ic('chart','ic-16')],['Resource / cost allocation',ic('team','ic-16')],['Project / opportunity',ic('box','ic-16')]].map((s,i)=>`<div class="af-step"><span class="af-ico">${s[1]}</span><span class="af-l">${s[0]}</span></div>${i<3?`<div class="af-arrow">${ic('chevronDown','ic-16')}</div>`:''}`).join('')}</div>
   </div>
   <div class="card"><div class="ch"><span class="t">G&amp;A waterfall</span><span class="sub">click a line for the detail</span></div>
     <div class="waterfall">${[['Gross margin',100,'var(--charcoal)','$472M','Revenue less direct project cost'],['Less: project costs',-28,'var(--gray-300)','−$132M','Field labor, equipment, materials on the job'],['Less: market G&A',-14,'var(--gray-300)','−$66M','Regional office & market-level overhead'],['Less: national G&A',-12,'var(--gray-300)','−$57M','Shared services allocated nationally'],['Less: enterprise G&A',-10,'var(--gray-300)','−$47M','Corporate overhead allocation'],['Operating profit',36,'var(--ok)','$170M','What drops through to the bottom line']].map((r,i)=>`<div class="wf-row click" onclick="ctWfPick(this,${i})"><div class="wf-l">${r[0]}</div><div class="wf-track"><div class="wf-bar" style="width:${Math.abs(r[1])}%;background:${r[2]};margin-left:${r[1]<0?(100-Math.abs(r[1]))+'%':'0'}"></div></div><div class="wf-amt">${r[3]}</div></div>`).join('')}</div>
     <div class="af-detail" id="wfDetail"><div class="af-d-t">Gross margin · <span style="color:var(--charcoal)">$472M</span></div><div class="af-d-b">Revenue less direct project cost.</div></div>
     <div style="text-align:right;font-family:var(--disp);font-weight:900;margin-top:8px">Operating margin ~<span style="color:var(--ok)">7.6%</span></div>
   </div>
 </div>
`,

'ct-fpa':(id)=>`
 <div class="page-head"><div><h2>Enterprise FP&amp;A</h2><div class="desc">The return to enterprise FP&amp;A — consolidated plan, reporting, scenario modeling, and performance insights.</div></div></div>
 <div class="ct-banner">${ic('flag','ic-16')}<div><b>North Star.</b> The closing loop of the Command Tower — 02S consolidates into enterprise FP&amp;A (Anaplan) for one plan and one return.</div></div>
 <div style="display:flex;justify-content:center;margin:20px 0"><div class="fpa-hub"><div class="fpa-core">${ic('dollar','ic-28')}<div>Enterprise FP&amp;A</div></div></div></div>
 <div class="grid g4">${[['Consolidated plan',ic('layers','ic-16')],['Financial reporting',ic('receipt','ic-16')],['Scenario modeling',ic('chart','ic-16')],['Performance insights',ic('bulb','ic-16')]].map(c=>`<div class="card" style="text-align:center"><div class="ci k4" style="margin:0 auto 8px">${c[1]}</div><b style="font-size:12.5px;color:var(--charcoal)">${c[0]}</b></div>`).join('')}</div>
 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci k2">${ic('check','ic-16')}</span><span class="t">Guardrail status</span><span class="chip ok" style="margin-left:auto">On track</span></div><table class="mini"><tr><th>Guardrail</th><th>Plan</th><th>Actual</th><th>Status</th></tr><tr><td>Revenue</td><td>$4.77B</td><td>$4.71B</td><td><span class="chip ok">On plan</span></td></tr><tr><td>Margin</td><td>8.0%</td><td>7.6%</td><td><span class="chip warn">−40 bps</span></td></tr><tr><td>SG&A</td><td>$310M</td><td>$302M</td><td><span class="chip ok">Under</span></td></tr></table></div>
 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci k4">${ic('chart','ic-16')}</span><span class="t">Scenario modeling</span><span class="sub">flex the plan and see the return move</span><span class="illus-tag" style="margin-left:auto">Illustrative</span></div>
   <div class="scn-toggle"><button class="on" onclick="runScenario(this,'base')">Base plan</button><button onclick="runScenario(this,'up')">Upside · +2 wins</button><button onclick="runScenario(this,'down')">Downside · slippage</button></div>
   <div class="scn-grid" id="scnGrid">${scenarioCards('base')}</div>
   <div style="font-size:11px;color:var(--gray-500);margin-top:10px">Scenarios reweight the pipeline and roll the change through margin, G&amp;A, and the return — so leadership can pressure-test the plan before committing.</div>
 </div>
`,

'c-dash':(id)=>`
 <div class="page-head"><div><h2>Overview</h2><div class="desc">Orchestrate demand, capacity, and fulfillment across 02S operations.</div></div>${prodToggle(id)}</div>
 <div class="ctxbar"><span class="ctx-pill">${ic('calendar','ic-14')}<span><span class="k">Range</span><span class="v">May 12 – Jun 1</span></span></span><span class="ctx-pill">${ic('pin','ic-14')}<span><span class="k">Geography</span><span class="v">All</span></span></span><span class="ctx-pill"><span class="pdot" style="background:var(--gray)"></span><span><span class="k">Pillar</span><span class="v">All</span></span></span><span class="ctx-right">${ic('refresh','ic-14')} Data as of May 12, 8:00a</span></div>

 <div class="ns-only"><div class="opp-trigger"><div class="ot-ico">${ic('sparkle','ic-16')}</div><div class="ot-body"><b>An opportunity just closed — start a demand plan?</b><div class="ot-sub"><b>1GPA – 2026 Q1 JOC Sales</b> moved to <span class="chip red" style="vertical-align:middle">Won</span> in 02S Opportunities. I can seed a project demand plan from its margin-plan pillar mix and hand it to the project team.</div><div class="ot-chips">${[['Equipment','var(--red)','$29K'],['Procurement','var(--proc)','$18K'],['Prefab','var(--prefab)','$12K']].map(c=>`<span class="ot-chip"><span class="pdot" style="background:${c[1]}"></span>${c[0]} · ${c[2]}</span>`).join('')}</div></div><div class="ot-acts"><button class="btn primary sm" onclick="seedDemandPlan()">${ic('send','ic-14')} Seed &amp; assign to project</button><button class="btn ghost sm" onclick="toast('Dismissed — you can start it later from the opportunity')">Later</button></div></div></div>

 <div class="ns-only"><div class="mesh-card"><div class="mesh-head"><div class="mesh-title"><span class="ci" style="background:rgba(255,255,255,.15);color:#fff">${ic('gauge','ic-16')}</span><div><div class="mh-t">What's connected across 02S</div></div></div><span class="illus-tag" style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">Illustrative</span></div>
   <div class="mesh-signals">${[
     ['Equipment','var(--red)','truck','Tower-crane shortfall Aug 3','−2 units vs. demand'],
     ['Prefab','var(--prefab)','layers','Tucson shop at 94% capacity','pull-forward at risk'],
     ['Procurement','var(--proc)','cart','EV-charger lead times +3 wks','3 jobs exposed'],
     ['Logistics','var(--logistics)','map','Oakland delivery density rising','warehouse case'],
     ['Prof. services','var(--profsvc)','team','Commissioning fully booked Nov','2 jobs competing']
   ].map(s=>`<div class="mesh-sig"><div class="ms-ico" style="background:${s[1]}1a;color:${s[1]}">${ic(s[2],'ic-14')}</div><div class="ms-p" style="color:${s[1]}">${s[0]}</div><div class="ms-t">${s[3]}</div><div class="ms-d">${s[4]}</div></div>`).join('')}</div>
   <div class="mesh-synth"><div class="msy-h">${ic('bulb','ic-16')} Where it adds up</div>
     <div class="msy-list">
       <div class="msy-row"><span class="msy-tag">Mercy Hospital</span><div>Steel, crane, and commissioning all land in the same August window — high collision risk. <b>Pull crane forward, move headwalls to Phoenix shop.</b></div></div>
       <div class="msy-row"><span class="msy-tag">Portfolio</span><div>Deliveries clustering around Oakland. A Bay Area yard cuts miles and covers long-lead EV-charger staging.</div></div>
       <div class="msy-row"><span class="msy-tag">Margin</span><div><b>~$26K idle exposure this month</b> — 2 units billing while unused, 1 re-rent running 12% over owned cost.</div></div>
     </div>
     <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn primary sm" onclick="showActionPlan()">${ic('send','ic-14')} Turn into an action plan</button><button class="btn ghost sm" onclick="nav('command','c-pill-log')">Yard case ${ic('chevronRight','ic-14')}</button></div>
   </div>
 </div></div>

 <div class="ns-only"><div class="card span3" style="margin-bottom:16px"><div class="ch"><span class="ci k4">${ic('bot','ic-16')}</span><span class="t">Ask 02S</span><span class="sub">natural-language across every pillar &amp; project</span><span class="illus-tag" style="margin-left:auto">Illustrative</span></div>
   <div class="searchbar"><span class="si">${ic('bot','ic-16')}</span><input id="ask02s" placeholder="Ask anything — e.g. which projects are exposed to the crane shortfall?" onkeydown="if(event.key==='Enter')askO2S()"><button class="btn primary sm" onclick="askO2S()">Ask</button></div>
   <div class="demo-hint" style="margin-top:8px">${ic('bulb','ic-14')} <b>For the demo:</b> try <span class="dh-chip" onclick="askO2SFill('which projects are exposed to the crane shortfall?')">crane shortfall exposure</span> · <span class="dh-chip" onclick="askO2SFill('where can we save money right now?')">where can we save money</span> · <span class="dh-chip" onclick="askO2SFill('what is at risk of missing schedule?')">schedule risk</span></div>
   <div id="askOut"></div>
 </div></div>

 <div class="ns-only"><div class="card span3" style="margin-bottom:16px"><div class="ch"><span class="ci">${ic('calendar','ic-16')}</span><span class="t">3-week execution lookahead</span><span class="ns-badge" style="margin-left:auto">North Star</span></div><div class="gantt2"><div class="g2-row head"><div class="g2-left"><span class="sub" style="font-weight:700;color:var(--gray-500)">Trade</span></div><div class="g2-track"><span>Wk 1</span><span>Wk 2</span><span>Wk 3</span></div><div class="g2-cost" style="font-size:10px;color:var(--gray-500)">Owner</div></div>${[['Earthwork',0,60,'02S'],['Structural steel',20,70,'You'],['Mechanical',40,55,'02S'],['Electrical',30,65,'You']].map((t,i)=>`<div class="g2-row line"><div class="g2-left"><span class="nm">${t[0]}</span></div><div class="g2-track"><div class="gbar ${i%2?'n2':''}" style="left:${t[1]}%;width:${t[2]-2}%">${t[0]}</div></div><div class="g2-cost"><span class="owner" style="background:${t[3]==='You'?'var(--red)':'var(--steel)'}">${t[3]}</span></div></div>`).join('')}</div></div></div>

 <div class="v1-only" style="margin-bottom:16px"><div class="card"><div class="ch"><span class="ci">${ic('calendar','ic-16')}</span><span class="t">3-week execution lookahead</span></div><table class="mini"><tr><td>Earthwork</td><td><span class="chip gray">wk 1–2</span></td></tr><tr><td>Structural steel</td><td><span class="chip gray">wk 1–3</span></td></tr><tr><td>Mechanical</td><td><span class="chip gray">wk 2–3</span></td></tr></table></div></div>
 <div class="grid g2" style="margin-bottom:16px">
   <div class="card"><div class="ch"><span class="ci k4">${ic('clipboard','ic-16')}</span><span class="t">Shared demand queue</span><span class="sub">click a row</span></div><table class="mini"><tr><th>Pillar</th><th>Project</th><th>Need</th><th>Qty</th></tr><tr class="click" onclick="toggleOVR(this)"><td><span class="ptag"><span class="pdot" style="background:var(--red)"></span>Equip</span></td><td>Alpha</td><td>May 20</td><td>2 cranes ${ic('chevronRight','ic-14')}</td></tr><tr><td><span class="ptag"><span class="pdot" style="background:var(--charcoal)"></span>Prefab</span></td><td>Beta</td><td>May 22</td><td>1 hoist</td></tr><tr><td><span class="ptag"><span class="pdot" style="background:var(--steel)"></span>Logist</span></td><td>Gamma</td><td>May 27</td><td>3 manlifts</td></tr></table><button class="clink" onclick="nav('command','c-backlog')">Open order backlog ${ic('chevronRight','ic-14')}</button></div>
   <div class="card"><div class="ch"><span class="ci k2">${ic('gauge','ic-16')}</span><span class="t">Capacity constraints</span><span class="sub">owned equipment vs demand</span></div><table class="mini"><tr><td>Tower cranes<br><span style="color:var(--gray-500);font-size:11px">May 20–28</span></td><td style="text-align:right"><b style="color:var(--red);font-size:18px" class="disp">−2</b><br><span style="font-size:10px;color:var(--gray-500)">units</span></td></tr><tr><td>Scissor lifts 32ft<br><span style="color:var(--gray-500);font-size:11px">May 19–30</span></td><td style="text-align:right"><b style="color:var(--red);font-size:18px" class="disp">−5</b><br><span style="font-size:10px;color:var(--gray-500)">units</span></td></tr></table><button class="clink" onclick="nav('command','c-edp')">Open equipment demand plan ${ic('chevronRight','ic-14')}</button></div>
 </div>

 <div class="grid g2" style="margin-bottom:16px">
   <div class="card"><div class="ch"><span class="ci k3">${ic('pin','ic-16')}</span><span class="t">Owned fleet readiness</span><span class="sub">by service region</span></div><div style="display:flex;gap:22px;flex-wrap:wrap;justify-content:center;padding-top:6px">${[['West','92%'],['Central','88%'],['East','90%']].map(([r,v])=>`<div style="text-align:center"><div class="donut" style="width:74px;height:74px;background:conic-gradient(var(--red) 0 ${v},var(--gray-200) ${v} 100%)"><div class="hole" style="width:50px;height:50px"><b style="font-size:14px">${v}</b></div></div><div style="font-size:11.5px;color:var(--charcoal-700);margin-top:6px">${r}</div></div>`).join('')}</div><button class="clink" onclick="nav('command','c-edp')">Open equipment demand plan ${ic('chevronRight','ic-14')}</button></div>
   <div class="card"><div class="ch"><span class="ci k2">${ic('warning','ic-16')}</span><span class="t">Exceptions &amp; SLA risk</span><span class="sub">open items</span></div><table class="mini"><tr><th>Item</th><th>Project</th><th>Risk</th></tr><tr><td>Tower crane shortfall</td><td>Alpha</td><td><span class="chip red">High</span></td></tr><tr><td>Idle rental &gt;7 days</td><td>Beta</td><td><span class="chip warn">Med</span></td></tr><tr><td>Late equipment delivery</td><td>Gamma</td><td><span class="chip gray">Low</span></td></tr></table><div style="display:flex;gap:8px;margin-top:12px"><button class="btn primary sm" onclick="showActionPlan()">${ic('send','ic-14')} Design action plan</button><button class="clink" onclick="nav('command','c-billing')">Billings ${ic('chevronRight','ic-14')}</button></div></div>
 </div>

 <div class="grid g3">
   <div class="card"><div class="ch"><span class="ci">${ic('refresh','ic-16')}</span><span class="t">Owned vs re-rent</span><span class="sub">inside each request</span></div><div style="display:flex;align-items:center;gap:14px"><div class="donut" style="width:88px;height:88px;background:conic-gradient(var(--red) 0 67%,var(--gray-300) 67% 100%)"><div class="hole" style="width:58px;height:58px"><b style="font-size:17px">67%</b><span>own</span></div></div><table class="mini"><tr><td>Tower cranes</td><td style="color:var(--red);font-weight:700">Save $1.2M</td></tr><tr><td>Scissor lifts</td><td style="color:var(--red);font-weight:700">Save $0.6M</td></tr></table></div><button class="clink" onclick="nav('command','c-edp')">Open equipment demand plan ${ic('chevronRight','ic-14')}</button></div>
   <div class="card"><div class="ch"><span class="ci k4">${ic('dollar','ic-16')}</span><span class="t">CAPEX pipeline</span></div><table class="mini"><tr><th>Category</th><th>Action</th><th>Value</th></tr><tr><td>Tower cranes</td><td>Buy 2</td><td><b>$1.8M</b></td></tr><tr><td>Modular formwork</td><td>Buy 2 sets</td><td><b>$0.9M</b></td></tr><tr><td>Generators</td><td>Buy 4</td><td><b>$0.7M</b></td></tr></table><button class="clink" onclick="nav('command','c-capex')">Open CAPEX plan ${ic('chevronRight','ic-14')}</button></div>
   <div class="card"><div class="ch"><span class="ci">${ic('warning','ic-16')}</span><span class="t">Billing anomalies</span><span class="sub">re-rent invoices</span></div><table class="mini"><tr><th>Check</th><th>Detail</th><th>Risk</th></tr><tr><td>Rate</td><td>Above contract — 3 inv.</td><td><span class="chip red">High</span></td></tr><tr><td>Late start</td><td>Billed after on-rent</td><td><span class="chip warn">Med</span></td></tr><tr><td>PO mismatch</td><td>Over-ordered vs PO</td><td><span class="chip gray">Low</span></td></tr></table><button class="clink" onclick="nav('command','c-billing')">Open billings & invoicing ${ic('chevronRight','ic-14')}</button></div>
 </div>

 <div class="ns-only"><div class="grid g2" style="margin-top:16px"><div class="card"><div class="ch"><span class="ci k2">${ic('layers','ic-16')}</span><span class="t">Asset lifecycle & replacement</span><span class="ns-badge" style="margin-left:auto">NS</span></div><p style="color:var(--charcoal-700);font-size:12.5px;margin:0">Full TCO and usage-driven replace/retire recommendations across the owned fleet.</p></div><div class="card"><div class="ch"><span class="ci k4">${ic('chart','ic-16')}</span><span class="t">02S project margin plan</span><span class="ns-badge" style="margin-left:auto">Beta</span></div><p style="color:var(--charcoal-700);font-size:12.5px;margin:0">Cross-cutting margin view tying demand, fulfillment cost, and billing to project margin.</p></div></div></div>
`,

'c-backlog':(id)=>`
 <div class="page-head"><div><h2>Order backlog</h2><div class="desc v1-only">Every submitted order and request across all five pillars — grouped by pillar so you can see what's coming and work each queue.</div><div class="desc ns-only">Live request tracking across all pillars. Statuses sync automatically.</div></div>${prodToggle(id)}</div>
 <div class="ns-only">
   <div class="oms-bar" style="padding:10px 14px">
     <div class="oms-stats"><div class="oms"><div class="oms-n">100%</div><div class="oms-k">via OMS</div></div><div class="oms"><div class="oms-n">4.2h</div><div class="oms-k">avg to ack</div></div><div class="oms"><div class="oms-n">2</div><div class="oms-k">SLA at risk</div></div></div>
   </div>
 </div>
 <!-- pillar summary tiles -->
 <div class="back-summary">
   ${PILLARS.map(p=>{const rows=BACKLOG.filter(r=>r.pillar===p);const nNew=rows.filter(r=>r.status==='New').length;return `<div class="bs-tile" onclick="filterBacklog('${p}')"><span class="pdot" style="background:${pillColor(p)}"></span><div class="bs-n">${rows.length}</div><div class="bs-l">${p}</div>${nNew?`<div class="bs-new">${nNew} new</div>`:'<div class="bs-new none">up to date</div>'}</div>`;}).join('')}
 </div>
 <!-- filter pills -->
 <div class="filters" id="backlogFilters" style="margin:14px 0 4px"><span class="fpill on" data-f="All" onclick="filterBacklog('All')">All pillars</span>${PILLARS.map(p=>`<span class="fpill" data-f="${p}" onclick="filterBacklog('${p}')"><span class="pdot" style="background:${pillColor(p)}"></span>${p}</span>`).join('')}</div>
 <div id="backlogRows"></div>
 <div class="v1-only" style="font-size:11.5px;color:var(--gray-500);margin-top:14px">V1: equipment routes to YardHub automatically. For other pillars, the pillar lead works the queue in its existing (as-is) process, maps free-text to the taxonomy, and updates status here — every change is reflected on the project side.</div>
 <div class="ns-only" style="font-size:11.5px;color:var(--gray-500);margin-top:14px">North Star runs all fulfillment through T3 (OMS) — there's no YardHub and nothing to update by hand. Requests are triaged, coded, and worked by OMS; this dashboard just reflects live status and flags SLAs per pillar.</div>
`,

'c-edp':(id)=>`
 <div class="page-head"><div><h2>Equipment demand plan — ops view</h2><div class="desc v1-only">Map taxonomy, set owned-vs-re-rent, push to YardHub.</div><div class="desc ns-only">Consolidated portfolio demand. OMS fulfils automatically.</div></div>${prodToggle(id)}</div>
 <div class="edp-stats" style="margin-top:14px"><div class="edp-stat"><div class="k">Active projects</div><div class="n">14</div><div class="s">contributing demand</div></div><div class="edp-stat cost"><div class="k">Planned + in-flight</div><div class="n">$18.4M</div><div class="s">equipment, next 12 mo</div></div><div class="edp-stat"><div class="k v1-only">Awaiting taxonomy</div><div class="k ns-only">Peak gap</div><div class="n v1-only">3</div><div class="n ns-only">−8</div><div class="s v1-only">requests to map</div><div class="s ns-only">tower cranes · Aug</div></div><div class="edp-stat"><div class="k">Owned coverage</div><div class="n">67%</div><div class="s">of portfolio demand met by owned fleet</div></div></div>

 <!-- ============ V1: taxonomy mapping + YardHub push ============ -->
 <div class="v1-only">
   <div class="card" style="margin:16px 0"><div class="ch"><span class="ci">${ic('inbox','ic-16')}</span><span class="t">Requests from project teams — map &amp; push to YardHub</span><span class="sub">confirm taxonomy · then promote</span><span style="margin-left:auto"><button class="btn primary sm" onclick="pushYardHub()">${ic('send','ic-14')} Push selected to YardHub</button></span></div>
     <div class="list"><div class="lrow lhead" style="grid-template-columns:26px 1fr 1.3fr 1.6fr .9fr 1fr"><div></div><div>Request</div><div>Asset description</div><div>Taxonomy match</div><div>Owned vs. re-rent</div><div>Status</div></div>
       ${EQ_REQ.map(r=>`<div class="lrow" style="grid-template-columns:26px 1fr 1.3fr 1.6fr .9fr 1fr"><div><input type="checkbox" ${r.mapped?'checked':''} aria-label="select ${r.id}"></div><div class="pri">${r.id}<div class="brow-sub">${r.project}</div></div><div style="font-size:12px">${r.desc}</div><div>${r.mapped?`<button class="tax-chip ok" onclick="taxMap('${r.id}')" title="Confirmed — click to change">${ic('check','ic-14')} ${r.tax}</button>`:`<button class="tax-chip sug" onclick="taxMap('${r.id}')" title="AI-recommended — confirm or override">${ic('sparkle','ic-14')} ${r.tax} <span class="tc-need">confirm</span></button>`}</div><div><button class="tax-chip ${r.ovr==='Use owned'?'ok':'sug'}" onclick="edpOvr('${r.id}')" title="Click to update OvR decision">${r.ovr} ${ic('edit','ic-14')}</button></div><div><span class="chip ${r.mapped?'ok':'gray'}">${r.mapped?'Ready':'Needs map'}</span></div></div>`).join('')}
     </div>
   </div>
 </div>

 <!-- ============ NS: consolidated orders (OMS-handled) ============ -->
 <div class="ns-only">
   <div class="oms-bar" style="margin:16px 0"><div class="oms-l"><span class="ci" style="background:rgba(255,255,255,.15);color:#fff">${ic('sparkle','ic-16')}</span><div><div class="oms-t">OMS is fulfilling automatically</div><div class="oms-s">Requests are matched, coded, and dispatched without a YardHub hand-off — ops just watches the consolidated flow</div></div></div><div class="oms-stats"><div class="oms"><div class="oms-n">100%</div><div class="oms-k">auto-fulfilled</div></div><div class="oms"><div class="oms-n">0</div><div class="oms-k">manual pushes</div></div><div class="oms"><div class="oms-n">1</div><div class="oms-k">SLA at risk</div></div></div></div>
   <div class="card" style="margin-bottom:16px"><div class="ch"><span class="ci">${ic('box','ic-16')}</span><span class="t">Consolidated orders</span><span class="sub">across all projects · fulfilled by OMS</span></div>
     <div class="list"><div class="lrow lhead" style="grid-template-columns:1fr 1.3fr 1.4fr .9fr 1fr"><div>Order</div><div>Equipment</div><div>Project</div><div>Fulfilled from</div><div>Status</div></div>
       ${[['ORD-4471','2× excavator 45–55T','Hercules Solar + BESS','owned fleet','On-rent','ok'],['ORD-4468','2× tower crane','Project Alpha','re-rent (auto)','In transit','steel'],['ORD-4460','4× scissor lift 32ft','Mercy Hospital','owned fleet','On-rent','ok'],['ORD-4452','1× wheel loader','Project Nexus','owned fleet','Scheduled','gray']].map(r=>`<div class="lrow" style="grid-template-columns:1fr 1.3fr 1.4fr .9fr 1fr"><div class="pri">${r[0]}</div><div>${r[1]}</div><div style="color:var(--gray-500)">${r[2]}</div><div style="font-size:11.5px;color:var(--gray-500)">${r[3]}</div><div><span class="chip ${r[5]}">${r[4]}</span></div></div>`).join('')}
     </div>
   </div>
 </div>

 <!-- ============ shared: portfolio demand roll-up ============ -->
 <div class="card"><div class="ch"><span class="ci k2">${ic('calendar','ic-16')}</span><span class="t">Portfolio demand — aggregated across projects</span><span class="sub">by cat class / project</span></div>
 <div class="gantt2"><div class="g2-row head"><div class="g2-left"><span class="sub" style="font-weight:700;color:var(--gray-500)">Cat class / project</span></div><div class="g2-track">${MONTHS.map(m=>`<span>${m}</span>`).join('')}</div><div class="g2-cost" style="font-size:10px;color:var(--gray-500)">Count</div></div>
   ${[['Tower cranes',0,0,6,'14','group'],['— Project Alpha',1,10,45,'2',''],['— Project Nexus',2,25,45,'3',''],['Excavators 45–55T',0,0,88,'9','group'],['Scissor lifts',0,50,45,'22','group']].map(r=>`<div class="g2-row ${r[5]==='group'?'group':'line'}"><div class="g2-left">${r[5]==='group'?`<span class="nm">${r[0]}</span>`:`<span class="nm click" onclick="openAssetAssign('${r[0]}','${r[4]}');event.stopPropagation()">${r[0]}</span>`}</div><div class="g2-track">${r[5]==='group'?`<div class="gbar gbar-agg n2" style="left:${r[2]}%;width:${r[3]-2}%"></div>`:`<div class="gbar n2" style="left:${r[2]}%;width:${r[3]-2}%;cursor:pointer" onclick="openAssetAssign('${r[0]}','${r[4]}')"></div>`}</div><div class="g2-cost">${r[4]}</div></div>`).join('')}
 </div>
 </div>

 <!-- ============ NS-only intelligence ============ -->
 <div class="ns-only" style="margin-top:16px">
   <div class="card" style="margin-bottom:16px"><div class="ch"><span class="ci">${ic('sparkle','ic-16')}</span><span class="t">Pipeline-predicted demand</span><span class="sub">tower cranes · next 6 months</span><span class="ns-badge" style="margin-left:auto">North Star</span></div>
     <p style="color:var(--charcoal-700);font-size:12.5px;margin:0 0 12px">Demand weighted from pipeline opportunities by win %. Sustained gaps feed the CAPEX plan.</p>
     <div class="predict-chart">
       <svg viewBox="0 0 640 200" width="100%" style="display:block">
         <line x1="0" y1="120" x2="640" y2="120" stroke="var(--charcoal)" stroke-width="1.5" stroke-dasharray="5 5"/>
         <text x="6" y="114" font-size="9" fill="var(--charcoal-700)" font-weight="700">Owned capacity · 12</text>
         <path d="M40,150 L140,140 L240,120 L340,96 L440,74 L540,58 L600,50 L600,86 L540,96 L440,112 L340,128 L240,146 L140,160 L40,166 Z" fill="rgba(110,90,166,.15)"/>
         <polyline points="40,158 140,150 240,133 340,112 440,93 540,77 600,68" fill="none" stroke="var(--logistics)" stroke-width="3"/>
         <polyline points="240,133 340,104 440,84 540,67 600,59" fill="none" stroke="var(--logistics)" stroke-width="2.5" stroke-dasharray="5 4" opacity="0.7"/>
         <circle cx="340" cy="112" r="4" fill="var(--red)"/><text x="340" y="102" font-size="9" fill="var(--red)" text-anchor="middle" font-weight="700">gap opens · Aug</text>
         ${['Jun','Jul','Aug','Sep','Oct','Nov'].map((m,i)=>`<text x="${40+i*112}" y="192" font-size="9" fill="var(--gray-500)" text-anchor="middle">${m}</text>`).join('')}
       </svg>
       <div class="predict-legend"><span><i style="background:var(--logistics)"></i>Committed</span><span><i style="background:var(--logistics);opacity:.5"></i>Pipeline-predicted</span><span><i style="background:rgba(110,90,166,.2)"></i>Confidence band</span><span><i style="background:var(--charcoal)"></i>Owned capacity</span></div>
     </div>
     <div class="predict-foot"><div><b>Predicted −6 tower cranes by August</b> from 3 probable jobs (68% weighted). <span style="color:var(--gray-500)">Buy vs. re-rent evidence updates as the pipeline moves.</span></div><button class="btn primary sm" onclick="nav('command','c-capex')">${ic('chart','ic-14')} Take to CAPEX plan</button></div>
   </div>
   <div class="card"><div class="ch"><span class="ci k4">${ic('gauge','ic-16')}</span><span class="t">Fleet-wide optimization</span><span class="sub">owned utilization across all projects</span><span class="ns-badge" style="margin-left:auto">North Star</span></div>
     <div class="fleet-grid">
       ${[['Excavators 45–55T',82,'12 of 15 on rent','ok'],['Tower cranes',100,'all deployed · re-renting','hot'],['Scissor lifts 32ft',64,'redeploy 3 idle → Nexus','idle'],['Telehandlers 10K',91,'11 of 12 on rent','ok'],['Generators 100kW',48,'redeploy 5 idle','idle'],['Dozers D6',76,'on track','ok']].map(f=>`<div class="fleet-cell"><div class="fc-top"><span class="fc-nm">${f[0]}</span><span class="fc-pct ${f[3]}">${f[1]}%</span></div><div class="fc-bar"><div class="fc-fill ${f[3]}" style="width:${f[1]}%"></div></div><div class="fc-note ${f[3]==='idle'?'act':''}">${f[2]}</div></div>`).join('')}
     </div>
     <div class="fleet-opt-note">${ic('sparkle','ic-14')} <b>Optimization found $46K/mo:</b> redeploy 8 idle units (scissor lifts + generators) to cover Nexus and Alpha instead of re-renting.</div>
   </div>
 </div>
 <!-- Project plans submitted by teams -->
 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci k3">${ic('clipboard','ic-16')}</span><span class="t">Project teams' submitted plans</span><span class="sub">click a project to view their full EDP</span></div>
   <div class="list" style="margin-top:10px"><div class="lrow lhead" style="grid-template-columns:1.4fr 1fr .8fr .8fr .9fr"><div>Project</div><div>Submitted</div><div>Lines</div><div>Est. value</div><div>Plan status</div></div>
     ${[['Hercules Solar + BESS','Jun 28','9','$84,200','Accepted'],['Project Alpha','Jun 20','5','$42,600','Accepted'],['Project Nexus','Jul 3','7','$61,400','Pending'],['Mercy Hospital','Jul 8','3','$28,100','Draft']].map(r=>`<div class="lrow click" style="grid-template-columns:1.4fr 1fr .8fr .8fr .9fr" onclick="openProjectPlan('${r[0]}','${r[2]}','${r[4]}')"><div class="pri">${r[0]} ${ic('chevronRight','ic-14')}</div><div style="color:var(--gray-500)">${r[1]}</div><div>${r[2]}</div><div>${r[3]}</div><div><span class="chip ${r[4]==='Accepted'?'ok':r[4]==='Pending'?'warn':'gray'}">${r[4]}</span></div></div>`).join('')}
   </div>
 </div>
`,

'c-pillars':(id)=>`
 <div class="page-head"><div><h2>Other pillar plans — ops view</h2><div class="desc">02S-ops surface of prefab, procurement, logistics, and professional-services demand.</div></div>${prodToggle(id)}</div>
 <div class="v1-only"><div class="limit-note" style="background:var(--steel-050);border-color:#CFE0EF">${ic('layers','ic-16')}<div><b>V1 — simple ops queue.</b> See submitted demand; update status manually. Planning intelligence arrives in North Star.</div></div>
   <div class="seg-toggle" style="margin:14px 0"><button class="on" onclick="cPillV1Filter(this,'all')">All pillars</button><button onclick="cPillV1Filter(this,'Prefab')">Prefab</button><button onclick="cPillV1Filter(this,'Procurement')">Procurement</button><button onclick="cPillV1Filter(this,'Logistics')">Logistics</button><button onclick="cPillV1Filter(this,'Professional services')">Prof. services</button></div>
   <div class="card"><div class="ch"><span class="ci">${ic('inbox','ic-16')}</span><span class="t">Submitted demand — update status as you work it</span><span class="sub">manual · V1</span></div>
     <div class="list"><div class="lrow lhead" style="grid-template-columns:1.4fr 1.5fr .7fr .8fr 1.3fr"><div>Pillar</div><div>Item / service</div><div>Qty</div><div>Need by</div><div>Status</div></div>
     <div id="cPillV1Rows">${cPillV1RowsHTML('all')}</div></div>
     <div style="font-size:11px;color:var(--gray-500);margin-top:10px">Changing a status here notifies the project team. This is the whole V1 workflow for non-equipment pillars — view demand, keep status current.</div>
   </div>
 </div>
 <div class="ns-only">
   <div class="illus-banner">${ic('flag','ic-16')}<div><b>ILLUSTRATIVE — North Star concept.</b> In North Star each pillar gets its own full ops demand plan — the same depth as equipment. Open any pillar below. Command-center scoping for the other pillars isn't fully worked out yet; the data is fabricated to convey the idea.</div></div>
   <div class="pillar-open-grid">${[['prefab','Prefab','var(--prefab)','layers','Shop capacity, anticipatory pre-builds, and load balancing'],['proc','Procurement','var(--proc)','cart','Strategic supplier scorecards and consolidation plays'],['log','Logistics','var(--logistics)','truck','Warehouse siting, delivery density, and idle-asset moves'],['profsvc','Professional services','var(--profsvc)','team','Specialty-service demand and inspection scheduling']].map(p=>`<button class="pillar-open" onclick="setProductMode('c-pill-${p[0]}','northstar');nav('command','c-pill-${p[0]}')"><span class="po-ico" style="background:${p[2]}1a;color:${p[2]}">${ic(p[3],'ic-16')}</span><div class="po-body"><b>${p[1]} demand plan</b><div class="po-sub">${p[4]}</div></div><span class="po-arrow">${ic('chevronRight','ic-16')}</span></button>`).join('')}</div>
 </div>
 <div class="card" style="margin-top:16px"><div class="ch"><span class="ci k3">${ic('clipboard','ic-16')}</span><span class="t">Project teams' submitted plans</span><span class="sub">by pillar</span></div>
   <div class="list" style="margin-top:10px"><div class="lrow lhead" style="grid-template-columns:1.4fr 1fr 1fr .8fr .9fr"><div>Project</div><div>Pillar</div><div>Submitted</div><div>Lines</div><div>Status</div></div>
     ${[['Hercules Solar + BESS','Prefab','Jun 28','4','Active'],['Project Alpha','Logistics','Jun 20','2','Active'],['Project Nexus','Procurement','Jul 3','3','Pending'],['Mercy Hospital','Prof. services','Jul 8','1','Draft']].map(r=>`<div class="lrow click" style="grid-template-columns:1.4fr 1fr 1fr .8fr .9fr" onclick="toast('Opening ${r[0]} ${r[1]} plan (demo)')"><div class="pri">${r[0]} ${ic('chevronRight','ic-14')}</div><div><span class="chip gray">${r[1]}</span></div><div style="color:var(--gray-500)">${r[2]}</div><div>${r[3]}</div><div><span class="chip ${r[4]==='Active'?'ok':r[4]==='Pending'?'warn':'gray'}">${r[4]}</span></div></div>`).join('')}
   </div>
 </div>
`,

'c-pill-prefab':(id)=>commandPillarPage('prefab'),
'c-pill-proc':(id)=>commandPillarPage('proc'),
'c-pill-log':(id)=>commandPillarPage('log'),
'c-pill-profsvc':(id)=>commandPillarPage('profsvc'),

'c-capex':(id)=>`
 <div class="page-head"><div><h2>CAPEX plan</h2><div class="desc v1-only">Where owned equipment can't keep up with demand — validate the ranked buy list and it builds your CAPEX plan.</div><div class="desc ns-only">AI builds the buy case from pipeline-projected gaps across the fleet.</div></div>${prodToggle(id)}</div>
 <div class="edp-stats" style="margin-top:14px"><div class="edp-stat cost"><div class="k">Recommended CAPEX</div><div class="n">$3.4M</div><div class="s">full ranked list</div></div><div class="edp-stat"><div class="k">Peak gap</div><div class="n">−8</div><div class="s">tower cranes · Aug</div></div><div class="edp-stat"><div class="k">Re-rent spend (12mo)</div><div class="n">$4.1M</div><div class="s">buy-vs-rent evidence</div></div><div class="edp-stat"><div class="k">Payback</div><div class="n">2.3 yr</div><div class="s">blended, ranked list</div></div></div>

 <div class="card" style="margin-bottom:16px"><div class="ch"><span class="ci k2">${ic('chart','ic-16')}</span><span class="t">Demand vs. owned supply — the gap</span><span class="sub">by cat class</span></div>
   <div style="display:flex;flex-direction:column;gap:12px">
     ${[['Tower cranes',88,60,'−8 Aug'],['Excavators 45–55T',70,82,'covered'],['Scissor lifts',65,50,'−12 Jun'],['Generators 100kW',55,40,'−4 Jul']].map(([n,dem,sup,gap])=>`<div><div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px"><b>${n}</b><span class="chip ${gap==='covered'?'ok':'red'}">${gap==='covered'?'Covered':'Gap '+gap}</span></div><div style="position:relative;height:18px;background:var(--gray-100);border-radius:5px"><div style="position:absolute;height:100%;width:${dem}%;background:var(--red);opacity:.28;border-radius:5px"></div><div style="position:absolute;height:100%;width:${sup}%;background:var(--charcoal);border-radius:5px 0 0 5px"></div></div></div>`).join('')}
   </div>
   <div class="lg" style="margin-top:12px"><span><i style="background:var(--charcoal)"></i>Owned supply</span><span><i style="background:var(--red);opacity:.28"></i>Projected demand</span></div>
 </div>

 <div class="capex-wrap">
   <!-- Ranked buy list (left) -->
   <div class="card"><div class="ch"><span class="ci k4">${ic('dollar','ic-16')}</span><span class="t">Ranked buy list</span><span class="sub">validate a line to add it to the plan</span></div>
     <div class="list" id="capexBuyList"></div>
     <div style="font-size:11px;color:var(--gray-500);margin-top:10px">EMs review each line; leadership validates, capturing reasoning that feeds the model. One-off spikes are smoothed so only sustained demand drives a buy. ${effMode(id)==='northstar'?'North Star regenerates this automatically each cycle from the pipeline.':'Decline a line to exclude it (reason captured).'}</div>
   </div>
   <!-- CAPEX plan (right) — starts empty, fills as you validate -->
   <div class="card capex-plan"><div class="ch"><span class="ci k3">${ic('clipboard','ic-16')}</span><span class="t">CAPEX plan</span><span class="sub" id="capexPlanCount">empty</span><span style="margin-left:auto;font-family:var(--disp);font-weight:900;font-size:16px" id="capexPlanTotal">$0</span></div>
     <div id="capexPlanBody"></div>
     <button class="btn primary" id="capexSubmitBtn" style="width:100%;justify-content:center;margin-top:12px;display:none" onclick="capexSubmit()">${ic('send','ic-14')} <span id="capexSubmitLbl">Submit CAPEX plan</span></button>
   </div>
 </div>

 <div class="ns-only">
   <div class="illus-banner" style="margin-top:16px">${ic('flag','ic-16')}<div><b>ILLUSTRATIVE — North Star lifecycle analytics.</b> The buy case isn't just about gaps — North Star weighs the health, cost, and remaining life of what 02S already owns. Fabricated data shown to convey the idea.</div></div>
   <div class="card" style="margin-bottom:16px"><div class="ch"><span class="ci k2">${ic('layers','ic-16')}</span><span class="t">Owned fleet — lifecycle &amp; health</span><span class="illus-tag">Illustrative</span></div>
     <p style="color:var(--charcoal-700);font-size:12.5px;margin:0 0 12px">Telematics (hours, faults, maintenance spend) plus age drive a replace / hold / retire call on every owned asset class — which feeds directly into what to buy.</p>
     <div class="lc-grid">${[
       ['Tower cranes','8.2 yrs avg','high hrs · rising maint','Replace 2','replace'],
       ['Excavators 45–55T','4.1 yrs avg','healthy · low faults','Hold','hold'],
       ['Scissor lifts 32ft','6.8 yrs avg','2 past economic life','Retire 2 · buy 4','retire'],
       ['Generators 100kW','3.4 yrs avg','healthy','Hold','hold'],
       ['Telehandlers 10K','5.5 yrs avg','maint climbing','Watch','watch'],
       ['Dozers D6','9.1 yrs avg','beyond depreciation','Retire 1','retire']
     ].map(a=>`<div class="lc-cell"><div class="lc-top"><span class="lc-nm">${a[0]}</span><span class="lc-chip ${a[4]}">${a[3]}</span></div><div class="lc-age">${a[1]}</div><div class="lc-health">${a[2]}</div><div class="lc-bar"><div class="lc-fill ${a[4]}" style="width:${a[4]==='replace'?85:a[4]==='retire'?95:a[4]==='watch'?62:38}%"></div></div></div>`).join('')}</div>
   </div>
   <div class="grid g2">
     <div class="card"><div class="ch"><span class="ci k4">${ic('dollar','ic-16')}</span><span class="t">Total cost of ownership — buy vs. keep vs. re-rent</span><span class="illus-tag">Illustrative</span></div>
       <div class="tco-rows">${[
         ['Buy new tower crane','$1.8M capital · $180K/yr run','2.3 yr payback vs. re-rent','best'],
         ['Keep aging crane','$95K/yr maint &amp; downtime','faults trending up 30% YoY','warn'],
         ['Re-rent as needed','$1.8M/yr at current pace','no asset, no residual','bad']
       ].map(t=>`<div class="tco-row ${t[3]}"><div class="tco-dot"></div><div style="flex:1"><b>${t[0]}</b><div class="tco-sub">${t[1]}</div></div><div class="tco-note">${t[2]}</div></div>`).join('')}</div>
       <div class="pintel-note">Lifecycle + TCO make the buy case self-evident: the crane pays back in 2.3 years and retires a unit that's costing more each year.</div>
     </div>
     <div class="card"><div class="ch"><span class="ci k3">${ic('chart','ic-16')}</span><span class="t">Replacement runway</span><span class="sub">next 24 months</span><span class="illus-tag">Illustrative</span></div>
       <div class="runway">${[['Now','Retire 2 scissor lifts','retire'],['Q3','Buy 2 tower cranes','buy'],['Q4','Retire 1 dozer','retire'],['Q1','Buy 4 scissor lifts','buy'],['Q2','Reassess telehandlers','watch']].map((r,i)=>`<div class="rw-step"><div class="rw-dot ${r[2]}"></div><div class="rw-when">${r[0]}</div><div class="rw-what">${r[1]}</div></div>`).join('')}</div>
       <div class="fleet-opt-note" style="margin-top:12px">${ic('sparkle','ic-14')} <b>Sequenced to cash:</b> retirements fund ~$140K of the crane purchase; the rest lands in the Q3 Anaplan capital cycle.</div>
     </div>
   </div>
 </div>
`,

'c-billing':(id)=>`
 <div class="page-head"><div><h2>Billings & invoicing</h2><div class="desc v1-only">Send billings to project teams and catch vendor re-rent anomalies before they're paid.</div><div class="desc ns-only">Anomaly detection and invoice generation across every pillar.</div></div>${prodToggle(id)}</div>
 <div class="edp-stats" style="margin-top:14px" id="billStats">${billStatsHTML()}</div>

 <div class="card" style="margin-bottom:16px"><div class="ch"><span class="ci">${ic('warning','ic-16')}</span><span class="t">Anomaly detection — the 3 checks</span><span class="sub">on every re-rent vendor invoice</span></div>
   <div class="grid g3" style="gap:12px">
     <div class="anom-check"><div class="ac-h">${ic('dollar','ic-14')} Rate vs. contract</div><div class="ac-n">2</div><div class="ac-d">charges above contracted / last-known rate</div></div>
     <div class="anom-check"><div class="ac-h">${ic('clock','ic-14')} Late billing start</div><div class="ac-n">1</div><div class="ac-d">billing starts after on-rent date — lost billable days</div></div>
     <div class="anom-check"><div class="ac-h">${ic('receipt','ic-14')} PO / double-bill</div><div class="ac-n">1</div><div class="ac-d">invoice vs. PO — over-ordered or billed twice</div></div>
   </div>
 </div>

 <div class="card" style="margin-bottom:16px"><div class="ch"><span class="ci k4">${ic('receipt','ic-16')}</span><span class="t">Invoice review queue</span><span class="sub">flagged → review → regenerate → send</span></div>
   <div class="list"><div class="lrow lhead" style="grid-template-columns:1fr 1.2fr 1fr 1.1fr 1fr"><div>Vendor invoice</div><div>Equipment</div><div>Check flagged</div><div>Amount</div><div></div></div>
     <div id="invRows">${invoiceRowsHTML()}</div>
   </div>
   <div style="font-size:11px;color:var(--gray-500);margin-top:10px">Clean invoices generate a billing and send straight to the project team's <b>Pending billing approval</b>. Flagged ones are held for review and correction first. ${effMode(id)==='northstar'?'North Star auto-reconciles re-rent receipts so every paid invoice has a matching billing — no hand-keying.':'V1 covers equipment/re-rent via YardHub; other pillars follow in North Star.'}</div>
 </div>

 <div class="card"><div class="ch"><span class="ci k3">${ic('link','ic-16')}</span><span class="t">Project-side view</span><span class="sub">what the project team receives</span></div><p style="color:var(--charcoal-700);font-size:12.5px;margin:0 0 10px">Sent billings land in the project team's <b>Billing & budget → Pending approval</b>, where they review, edit cost codes, dispute, or approve within the 10-day window.</p><button class="clink" onclick="enter('portal');nav('portal','p-billing')" style="padding-top:0">Open the project-side billing view ${ic('chevronRight','ic-14')}</button></div>

 <div class="ns-only">
   <div class="illus-banner" style="margin-top:16px">${ic('flag','ic-16')}<div><b>ILLUSTRATIVE — North Star billing engine.</b> Where V1 reviews equipment/re-rent invoices one at a time, North Star runs billing as an engine across all five pillars — auto-generating, reconciling, and forecasting. Data below is fabricated to show the art of the possible.</div></div>
   <div class="grid g2" style="margin-bottom:16px">
     <div class="card"><div class="ch"><span class="ci">${ic('receipt','ic-16')}</span><span class="t">Auto-generated this cycle</span><span class="illus-tag">Illustrative</span></div>
       <div class="bill-gen">${[['Consolidated project invoice','Hercules Solar + BESS · all 5 pillars on one statement','$142,300','ready'],['Prefab progress billing','Mercy Hospital · % complete on 48 headwalls','$96,000','ready'],['Logistics recurring','Riverside · monthly warehousing + delivery','$18,200','auto-sent'],['Procurement PO reconciliation','3 vendor invoices ↔ POs matched','$61,400','auto-sent']].map(r=>`<div class="bg-row"><div class="bg-ico" style="background:var(--proc-050);color:var(--proc)">${ic('file','ic-14')}</div><div style="flex:1"><b>${r[0]}</b><div class="bg-sub">${r[1]}</div></div><div style="text-align:right"><div class="bg-amt">${r[2]}</div><span class="chip ${r[3]==='ready'?'warn':'ok'}" style="font-size:9px">${r[3]}</span></div></div>`).join('')}</div>
       <div class="pintel-note">02S drafts the invoice, matches it to POs and receipts, applies the right cost codes, and either sends it or holds it for one-click review.</div>
     </div>
     <div class="card"><div class="ch"><span class="ci k4">${ic('chart','ic-16')}</span><span class="t">Cross-pillar spend intelligence</span><span class="illus-tag">Illustrative</span></div>
       <div class="pintel-list">${[['Equipment idle vs. billed','2 units billing while idle 6+ days — pause to recover $1.9K/wk'],['Prefab vs. logistics timing','Headwalls ship wk of Aug 15 but no delivery booked — gap flagged'],['Duplicate charge across pillars','Site power billed by both Equipment (genset) and Logistics (temp power)'],['Rate drift','Re-rent excavator +12% vs. 02S-owned equivalent — buy case strengthening']].map(r=>`<div class="pintel-row"><span class="pi-ico" style="background:var(--red-050);color:var(--red)">${ic('warning','ic-14')}</span><div><b>${r[0]}</b><div class="pi-sub">${r[1]}</div></div></div>`).join('')}</div>
     </div>
   </div>
   <div class="grid g3">
     <div class="card"><div class="ch"><span class="ci k3">${ic('dollar','ic-16')}</span><span class="t">Predictive cash</span><span class="illus-tag">Illustrative</span></div><div class="bignum">$1.9M</div><div class="stat-sub">projected 02S billings next 30 days across all projects</div><div class="ct-bars" style="height:60px;margin-top:10px">${[40,62,55,78,90].map((h,i)=>`<div class="ctb"><div class="ctb-stack" style="height:${h}%"><div style="height:100%;background:var(--logistics)"></div></div><div class="ctb-l">W${i+1}</div></div>`).join('')}</div></div>
     <div class="card"><div class="ch"><span class="ci k2">${ic('refresh','ic-16')}</span><span class="t">Auto-reconciliation</span><span class="illus-tag">Illustrative</span></div><div class="bignum">98.2%</div><div class="stat-sub">of paid invoices auto-matched to a billing — no hand-keying</div><div style="margin-top:10px;font-size:11.5px;color:var(--charcoal-700)">28 of 1,540 invoices routed to exception review this month.</div></div>
     <div class="card"><div class="ch"><span class="ci">${ic('bulb','ic-16')}</span><span class="t">Margin protection</span><span class="illus-tag">Illustrative</span></div><div class="bignum" style="color:var(--ok)">$214K</div><div class="stat-sub">caught YTD before payment — rate, timing, and double-bill catches across pillars</div></div>
   </div>
 </div>
`,
};

function browsePath(el,which){document.getElementById('browse-self').classList.toggle('hidden',which!=='self');document.getElementById('browse-cust').classList.toggle('hidden',which!=='cust');}
function oppWireframeNote(){openModal(`<div class="modal-head"><div><h3>About this view</h3><div class="sub">02S Opportunities · V1 vs North Star</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><p style="margin:0 0 10px;color:var(--charcoal-700)">What you're seeing is a rough wireframe rebuilt from screenshots of the <b>existing 02S Opportunities product</b> as it stands today — pipeline, margin plans, and pillar breakdowns. It's live in production; we've recreated it here as HTML so it sits alongside the rest of the prototype.</p><p style="margin:0;color:var(--charcoal-700)">For <b>V1</b>, this existing product slots in to cover pursuit &amp; estimating. The full <b>Control Tower</b> — margin-plan handshake, YoY forecast, allocation flow, G&amp;A waterfall, and the return to enterprise FP&amp;A — anchors in <b>leadership's vision for the Command Tower</b> and builds toward North Star. Flip the Control Tower workspace to North Star to preview that target.</p></div><div class="modal-foot"><button class="btn primary" onclick="closeModal()">Got it</button></div>`,true);}
function oppPillarTab(el){el.parentElement.querySelectorAll('.opp-tab').forEach(t=>t.classList.remove('on'));el.classList.add('on');toast(el.textContent.trim()+' pillar — demo shows Equipment detail');}
function editShipTo(){openModal(`<div class="modal-head"><div><h3>Delivery address</h3><div class="sub">Pre-filled from the project profile · override for this order only</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="field"><label>Site / gate</label><input value="${PROJECT.shipTo.line1}"></div><div class="field"><label>Address</label><input value="${PROJECT.shipTo.line2}"></div><div class="field-row"><div class="field"><label>Receiving contact</label><input value="${PROJECT.shipTo.contact}"></div><div class="field"><label>Phone</label><input value="${PROJECT.shipTo.phone}"></div></div><div class="field"><label>Receiving hours</label><input value="${PROJECT.shipTo.hours}"></div><div class="field"><label>Delivery notes</label><textarea rows="2">${PROJECT.shipTo.notes}</textarea></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Delivery address updated for this order')">Save for this order</button></div>`);}
/* Validation popup before an order/request can send — surfaces required checks (feeds R-11) */
function submitOrderValidate(){const ns=effMode('p-browse')==='northstar';
 const lineCount=BROWSE_CART.length;const qtyRate=BROWSE_CART.length?`${BROWSE_CART[0].qty} × ${BROWSE_CART[0].quote?'quote':money(BROWSE_CART[0].rate)+'/mo'}${BROWSE_CART.length>1?` + ${BROWSE_CART.length-1} more`:''}`:'—';
 const checks=[
   ['Delivery address confirmed',true,`${PROJECT.shipTo.line1}, ${PROJECT.shipTo.line2}`],
   ['On-rent / off-rent dates set',true,'Jun 1 → Dec 15 (est.)'],
   ['Quantity &amp; rate present',lineCount>0,qtyRate],
   ['Routing resolved',true,'Equipment → YardHub']
 ];
 const codeLbl=ns
   ? `<div class="oc-lbl">${ic('sparkle','ic-14')} Cost code — one per line, pre-filled by North Star <span class="opt">editable</span></div>`
   : `<div class="oc-lbl">${ic('edit','ic-14')} Cost code — one per line, edit before sending <span class="req">required</span></div>`;
 const codeBlock=`<div class="oc-edit">${codeLbl}<div class="line-codes">${BROWSE_CART.map((it,i)=>`<div class="lc-row"><span class="lc-nm"><span class="cd-dot" style="background:${pillColor(it.pillar)}"></span>${it.qty}× ${it.name}</span><input class="mono lc-input" id="ordLineCode${i}" value="${it.code||''}" placeholder="Job.Exp.Task" oninput="ordLineCodeCheck(${i},this)"><span class="lc-st" id="ordLineSt${i}">${codeValid(it.code)?`<span class="chip ok">${ic('check','ic-14')} 16/16</span>`:`<span class="chip red">${codeDigits(it.code)}/16</span>`}</span></div>`).join('')}</div><div class="oc-help">${ns?'North Star resolves each line&rsquo;s 16-digit CMiC code from its taxonomy, phase, and control code — pre-filled here, and you can override any line before sending.':'Every line carries its own full 16-digit CMiC code. Give each the Job / Expenditure / Task segments it should bill to before the order sends.'}</div></div>`;
 const allCoded=allLinesCoded();
 openModal(`<div class="modal-head"><div><h3>Review &amp; submit</h3><div class="sub">${lineCount} line${lineCount!==1?'s':''} · est. ${browseReqTotal()}/mo · validated before send</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="valid-list">${checks.map(c=>`<div class="vrow ${c[1]?'ok':'bad'}">${ic(c[1]?'check':'warning','ic-16')}<div><b>${c[0]}</b><div class="vh">${c[2]}</div></div></div>`).join('')}</div>${codeBlock}<div id="ordCodeFoot" style="font-size:11.5px;font-weight:600;margin-top:10px;color:${allCoded?'var(--ok)':'var(--red)'}">${allCoded?`${ic('check','ic-14')} Every line carries a full 16-digit code — ready to send.`:`${ic('warning','ic-14')} Each line needs a full 16-digit code before the order can send.`}</div><div class="route-note" style="margin-top:12px">Equipment routes to YardHub and appears in the 02S ops backlog. Non-equipment pillars would surface as a queued request for the pillar lead.</div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Keep editing</button><button class="btn primary" id="ordSendBtn" style="${allCoded?'':'pointer-events:none;opacity:.5'}" onclick="closeModal();toast('Order submitted — ${lineCount} line${lineCount!==1?'s':''} routed to YardHub · appears in 02S backlog')">${ic('send','ic-14')} Submit order</button></div>`,true);}
function ordLineCodeCheck(i,inp){const v=inp.value;if(BROWSE_CART[i])BROWSE_CART[i].code=v;const st=document.getElementById('ordLineSt'+i);const d=codeDigits(v);if(st)st.innerHTML=d===16?`<span class="chip ok">${ic('check','ic-14')} 16/16</span>`:`<span class="chip red">${d}/16</span>`;
 const foot=document.getElementById('ordCodeFoot'),btn=document.getElementById('ordSendBtn');const ok=allLinesCoded();
 if(foot){foot.style.color=ok?'var(--ok)':'var(--red)';foot.innerHTML=ok?`${ic('check','ic-14')} Every line carries a full 16-digit code — ready to send.`:`${ic('warning','ic-14')} Each line needs a full 16-digit code before the order can send.`;}
 if(btn){btn.style.pointerEvents=ok?'':'none';btn.style.opacity=ok?'':'.5';}
 updateCartBadges();}

/* Send equipment request — V1 requires a full 16-digit CMiC cost code per line; NS auto-resolves */
function sendEqRequest(){const ns=effMode('p-edp')==='northstar';
 if(ns){
   openModal(`<div class="modal-head"><div><h3>Send equipment request</h3><div class="sub">1 line · est. $32,500 · North Star</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body"><div class="ai-panel" style="margin:0 0 12px"><div class="aih"><div class="ico">${ic('sparkle','ic-16')}</div><div class="t">Cost coding — automatic</div></div><div class="ctx" style="margin-bottom:0">North Star resolves the full 16-digit CMiC code in the background from the plan line's taxonomy, phase, and control code — no manual entry. You just confirm the call-on.</div></div><div class="list"><div class="lrow lhead" style="grid-template-columns:2fr 1.6fr .8fr"><div>Equipment</div><div>Resolved code</div><div></div></div><div class="lrow" style="grid-template-columns:2fr 1.6fr .8fr"><div class="pri">2× ¾-Ton 4×4</div><div><span class="code-chip">010200.3005.2000</span></div><div style="text-align:right"><span class="chip ok">${ic('sparkle','ic-14')} Auto</span></div></div></div></div><div class="modal-foot"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();toast('Request sent to Command Center — code resolved automatically')">${ic('send','ic-14')} Send to Command Center</button></div>`,true);
   return;
 }
 // V1: require the full 16-digit code, validated live
 openModal(`<div class="modal-head"><div><h3>Send equipment request</h3><div class="sub">1 line · est. $32,500</div></div><button class="x-btn" onclick="closeModal()">${ic('close','ic-16')}</button></div><div class="modal-body">
   <div class="list"><div class="lrow lhead" style="grid-template-columns:1.6fr 2fr 1.2fr .9fr"><div>Equipment</div><div>Full cost code — pick from this branch</div><div>Preview</div><div>Status</div></div>
     <div class="lrow" style="grid-template-columns:1.6fr 2fr 1.2fr .9fr;align-items:center"><div><div class="pri">2× ¾-Ton 4×4</div><div style="font-size:11px;color:var(--gray-500)">Preconstruction · Mar 2 – Aug 28 · $32,500</div></div><div><input id="eqCode" value="010200.3005.2000" oninput="eqCodeCheck()" class="mono" style="width:100%"><div style="font-size:10.5px;color:var(--gray-500);margin-top:3px">Scoped to <span class="mono">010200</span> — Work Activity level · <a class="linkbtn" style="display:inline" onclick="toast('Split the lane (demo)')">planned high? split the lane…</a></div></div><div><span class="code-chip" id="eqPrev">010200.3005.2000</span></div><div id="eqStatus"><span class="chip ok">${ic('check','ic-14')} 16/16</span></div></div>
   </div>
   <div id="eqFootNote" style="font-size:11.5px;color:var(--ok);font-weight:600;margin-top:10px">${ic('check','ic-14')} All lines carry a full 16-digit code — ready to send.</div>
 </div><div class="modal-foot"><button class="btn" onclick="closeModal()">Keep planning</button><button class="btn primary" id="eqSendBtn" onclick="closeModal();toast('Request sent to Command Center · appears in 02S backlog')">${ic('send','ic-14')} Send to Command Center</button></div>`,true);}
function eqCodeCheck(){const v=(document.getElementById('eqCode').value||'').replace(/[^0-9.]/g,'');const digits=v.replace(/\./g,'').length;const prev=document.getElementById('eqPrev'),st=document.getElementById('eqStatus'),foot=document.getElementById('eqFootNote'),btn=document.getElementById('eqSendBtn');
 prev.textContent=v||'—';
 if(digits===16){st.innerHTML=`<span class="chip ok">${ic('check','ic-14')} 16/16</span>`;foot.style.color='var(--ok)';foot.innerHTML=`${ic('check','ic-14')} All lines carry a full 16-digit code — ready to send.`;btn.classList.remove('disabled');btn.style.pointerEvents='';btn.style.opacity='';}
 else{st.innerHTML=`<span class="chip red">${digits}/16</span>`;foot.style.color='var(--red)';foot.innerHTML=`${ic('warning','ic-14')} Line needs a full 16-digit code (${digits}/16) before it can send.`;btn.style.pointerEvents='none';btn.style.opacity='.5';}}
buildLanding();
buildShell('portal');
buildShell('command');
buildShell('opp');
buildShell('command-tower');
setGlobalMode('v1');
