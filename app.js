'use strict';

// Lógica do site: navegação, perguntas, gabarito, desempenho e notas.

const SLIDES = [
 {name:'Cabeça • anatomia geral',file:'Componentes anatômicos da cabeça (1).pdf', key:'cabeça'},
 {name:'Cabeça • couro cabeludo, meninges e encéfalo',file:'Componentes anatômicos da cabeça - couro cabeludo, meninges, vascularização e encefálo (1).pdf',key:'cabeça'},
 {name:'Cabeça • crânio',file:'Componentes anatômicos da cabeça -crânio (1).pdf',key:'cabeça'},
 {name:'Pescoço',file:'Componentes anatômicos da pescoço (2).pdf',key:'pescoço'},
 {name:'Tórax',file:'Componentes anatômicos do tórax_completa (1).pdf',key:'tórax'},
 {name:'Abdome',file:'Componentes anatômicos do abdome (1).pdf',key:'abdome'},
 {name:'Membros superiores',file:'Componentes anatômicos dos MMSS (2).pdf',key:'mmss'},
 {name:'Membros inferiores',file:'Componentes anatômicos dos MMII (1).pdf',key:'mmii'}
];
const REGIONS=['Cabeça','Pescoço','Tórax','Abdome','Membros superiores','Membros inferiores'];
const COLORS={'Cabeça':['#fff8e8','#bb8d25'],'Pescoço':['#fff8e8','#bb8d25'],'Tórax':['#fff0f2','#c76475'],'Abdome':['#eaf8ef','#4c966a'],'Membros superiores':['#edf4ff','#5686d0'],'Membros inferiores':['#f3efff','#8a69c3']};
const LABELS={inicio:'Painel inicial',casos:'Casos clínicos',biblioteca:'Biblioteca',desempenho:'Meu desempenho',fontes:'Fontes e cuidados'};
const KEY='anatomia_quem_sou_eu_site_v1';
// Versão de apresentação sem cadastro: todos os dados ficam exclusivamente no navegador.
let store={answers:{},notes:{},book:''};try{const raw=localStorage.getItem(KEY);if(raw){const parsed=JSON.parse(raw);if(parsed&&typeof parsed==='object')store={...store,...parsed};}}catch(e){console.warn('Armazenamento local indisponível');}
let page='inicio', currentId=1, selected=null, region='Todas', search='', libraryStatus='todos';
const root=document.querySelector('#root');
function save(){try{localStorage.setItem(KEY,JSON.stringify(store));return true}catch(e){console.warn('Não foi possível salvar neste navegador',e);return false}}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function getCase(id){return CASES.find(x=>x.id===Number(id));}
function correct(id){return store.answers[id]?.correct===true;}
function answered(id){return Object.prototype.hasOwnProperty.call(store.answers,id);}
function stats(list=CASES){let items=list.filter(c=>answered(c.id));return {done:items.length,good:items.filter(c=>correct(c.id)).length,total:list.length,errors:items.filter(c=>!correct(c.id)).length,accuracy:items.length?Math.round(items.filter(c=>correct(c.id)).length/items.length*100):0};}
function pct(x,y){return y?Math.round(x/y*100):0}
function regionStyle(name){const c=COLORS[name]||['#eef0ff','#7973bc'];return `--rbg:${c[0]};--rcolor:${c[1]};`}
function badge(c){return `<span class="region-badge" style="${regionStyle(c.region)}">${esc(c.region)}</span>`}
function statCard(symbol,value,label){return `<article class="stat"><div class="stat-icon">${symbol}</div><div class="stat-val">${value}</div><div class="stat-name">${esc(label)}</div></article>`}
function nav(dest){page=dest;document.querySelectorAll('.nav button').forEach(b=>{const isActive=b.dataset.go===dest;b.classList.toggle('active',isActive);if(isActive)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});document.querySelector('#pageName').textContent=LABELS[dest];render();window.scrollTo({top:0,behavior:'instant'});}
function openCase(id){currentId=Number(id);selected=answered(currentId)?store.answers[currentId].choice:null;nav('casos');}
function randomCase(){const open=CASES.filter(c=>!answered(c.id));const p=open.length?open:CASES;openCase(p[Math.floor(Math.random()*p.length)].id);}
function regionBars(){return REGIONS.map(r=>{const list=CASES.filter(c=>c.region===r),s=stats(list);return `<div class="progress-row"><div class="rowtop"><span>${esc(r)}</span><span>${s.done}/${list.length} concluídos · ${s.good} acertos</span></div><div class="track"><b style="width:${pct(s.done,list.length)}%;background:${COLORS[r][1]}"></b></div></div>`}).join('')}
function filtered(){return CASES.filter(c=>(region==='Todas'||region===c.region)&&(!search||`${c.title} ${c.region} ${c.scenario} ${c.tag}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')))&&(libraryStatus==='todos'||libraryStatus==='nao'&&!answered(c.id)||libraryStatus==='erros'&&answered(c.id)&&!correct(c.id)||libraryStatus==='acertos'&&correct(c.id)));}
function tile(c){let state=answered(c.id)?correct(c.id)?'<span class="mini-status good">✓ Acertou</span>':'<span class="mini-status bad">↺ Para revisar</span>':'<span class="mini-status">○ Não respondido</span>';return `<article class="case-tile"><div class="tile-top"><span class="case-number">CARTA ${String(c.id).padStart(2,'0')}</span>${badge(c)}</div><h3>${esc(c.title)}</h3><p>${esc(c.scenario.slice(0,154))}${c.scenario.length>154?'…':''}</p><div class="tile-bottom">${state}<button class="text-link" data-open="${c.id}">${answered(c.id)?'Revisar →':'Resolver →'}</button></div></article>`}
function renderHome(){const s=stats();let pending=CASES.find(c=>!answered(c.id));root.innerHTML=`
<div class="hero"><div class="hero-copy"><div class="eyebrow">✦ DESAFIO DE ANATOMIA TOPOGRÁFICA</div><h1>Da anatomia à prática<br>de Enfermagem.</h1><p>Explore situações clínicas inspiradas nas 30 cartas do “Quem sou eu?”. Entenda as estruturas, exercite seu raciocínio e descubra onde precisa revisar.</p><button class="btn btn-light" id="startBtn">${s.done?'Continuar os estudos':'Começar a estudar'} <span>→</span></button><button class="btn" style="background:#ffffff1b;color:#fff;border:1px solid #ffffff40" data-go="biblioteca">Ver as 30 cartas</button></div><img class="hero-art" alt="Marca do jogo Quem sou eu?" src="logo.webp"/></div>
<div class="stats">${statCard('▤',30,'Casos disponíveis')}${statCard('✓',s.done,'Casos respondidos')}${statCard('◎',s.accuracy+'%','Taxa de acertos')}${statCard('↺',s.errors,'Tópicos para revisar')}</div>
<div class="section-head"><div><span class="eyebrow">SEU RITMO DE ESTUDO</span><h2>Acompanhe por região anatômica</h2><p>Progresso local, calculado a partir das suas respostas e salvo neste navegador.</p></div><button data-go="desempenho" class="btn btn-outline">Meu desempenho →</button></div>
<div class="split"><section class="panel"><h3>Mapa de revisão</h3><p class="panel-sub">São cinco estruturas por região. Os indicadores mostram conteúdo já respondido.</p><div class="progress-list">${regionBars()}</div></section><section class="panel"><h3>Como funciona?</h3><p class="panel-sub">Casos curtos com respostas comentadas e dicas clínicas.</p><div class="method" style="grid-template-columns:1fr"><div><div class="method-icon">🩺</div><h4>1. Leia a situação</h4><p>Considere o contexto assistencial descrito.</p></div><div><div class="method-icon">◉</div><h4>2. Escolha uma resposta</h4><p>Relacione sinais, estruturas e referências topográficas.</p></div><div><div class="method-icon">✦</div><h4>3. Revise a dica</h4><p>Receba a explicação e registre suas anotações.</p></div></div></section></div>
<div class="section-head"><div><span class="eyebrow">PARA COMEÇAR</span><h2>Casos em destaque</h2></div><button data-go="biblioteca" class="btn btn-ghost">Explorar todos →</button></div><div class="case-grid">${[11,23,25].map(i=>tile(getCase(i))).join('')}</div>
<div class="footer">Projeto educativo de estudantes de Enfermagem • Universidade do Estado de Minas Gerais — Unidade Passos</div>`;
 document.querySelector('#startBtn').addEventListener('click',()=>pending?openCase(pending.id):randomCase());}
function renderQuiz(){const c=getCase(currentId)||CASES[0];const a=store.answers[c.id];if(a)selected=a.choice;root.innerHTML=`
<div class="section-head" style="margin-top:0"><div><span class="eyebrow">TREINAMENTO • 30 CASOS</span><h1 class="page-title">Casos clínicos</h1><p class="page-intro">Escolha uma alternativa e descubra a relação da estrutura com a assistência de Enfermagem.</p></div><div class="two-button"><button class="btn btn-outline" data-go="biblioteca">▤ Ver lista</button><button class="btn btn-soft" id="randomBtn">⇄ Caso aleatório</button></div></div>
<div class="quiz-layout"><article class="panel quiz-body"><div class="quiz-head"><div><span class="case-number">CARTA ${String(c.id).padStart(2,'0')} / 30 · ${esc(c.level)}</span><h2>${esc(c.title)}</h2><p>Um caso clínico fictício para revisão anatômica.</p></div>${badge(c)}</div>
<div class="scenario"><strong>🩺 Situação clínica</strong><p>${esc(c.scenario)}</p></div><div class="question">${esc(c.question)}</div>
<div class="options">${c.choices.map((choice,i)=>`<button type="button" class="option ${a?(i===c.correct?'correct':i===a.choice&&!a.correct?'wrong':''):selected===i?'selected':''}" data-choice="${i}" ${a?'disabled':''}><span class="letter">${'ABCD'[i]}</span><span>${esc(choice)}</span></button>`).join('')}</div>
<div class="quiz-actions"><button id="checkBtn" class="btn btn-primary" ${a||selected===null?'disabled':''}>Conferir resposta →</button><div class="two-button"><button id="retryBtn" class="btn btn-outline" ${a?'':'disabled'}>↺ Refazer</button><button id="nextBtn" class="btn btn-soft">Próximo caso →</button></div></div><p class="save-status" id="caseSaveStatus" role="status" aria-live="polite"></p>
${a?`<section class="feedback ${a.correct?'':'is-wrong'}"><h4>${a.correct?'✓ Resposta correta!':'↺ Boa oportunidade para revisar'}</h4><p class="answer-name"><strong>Resposta: ${esc(c.choices[c.correct])}</strong></p><p>${esc(c.explanation)}</p></section><section class="clinical-tip"><h4>✦ Dica clínica para Enfermagem</h4><p>${esc(c.tip)}</p></section>`:''}</article>
<aside class="panel side-study"><h3>Guia da carta</h3><p class="panel-sub">Informações e espaço para suas anotações.</p><div class="details"><div class="detail"><span>Região anatômica</span><strong>${esc(c.region)}</strong></div><div class="detail"><span>Complexidade</span><strong>${esc(c.level)}</strong></div><div class="detail"><span>Origem</span><strong>Cartinha ${String(c.id).padStart(2,'0')}</strong></div><div class="detail"><span>Material de apoio</span><strong>Slides: ${esc(c.tag)}</strong></div></div><button class="btn btn-outline" style="width:100%" data-go="fontes">Consultar fontes →</button><h4>✎ Minhas anotações</h4><textarea class="note-area" maxlength="4000" id="note" placeholder="Anote o que deseja revisar sobre esta estrutura...">${esc(store.notes[c.id]||'')}</textarea><p class="note-hint">As anotações ficam salvas somente neste navegador.</p><p class="save-status" id="noteSaveStatus" aria-live="polite"></p><div class="callout"><b>Atenção à prática</b><p>Casos fictícios para ensino. Não substituem avaliação, supervisão profissional ou protocolos clínicos.</p></div></aside></div>
<div class="footer">O desempenho é apenas um indicador de revisão acadêmica, não uma avaliação de competência profissional.</div>`;
 document.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>{selected=Number(b.dataset.choice);document.querySelectorAll('[data-choice]').forEach(q=>q.classList.toggle('selected',Number(q.dataset.choice)===selected));document.querySelector('#checkBtn').disabled=false}));
 document.querySelector('#checkBtn').addEventListener('click',()=>{
   if(selected===null||a)return;
   const choice=selected;
   store.answers[c.id]={choice,correct:choice===c.correct,date:new Date().toISOString()};
   const ok=save();
   renderQuiz();
   if(!ok){const status=document.querySelector('#caseSaveStatus');if(status){status.textContent='⚠ O navegador não permitiu salvar a resposta. Confira as configurações de armazenamento.';status.dataset.state='error';}}
 });
 document.querySelector('#retryBtn').addEventListener('click',()=>{delete store.answers[c.id];save();selected=null;renderQuiz();});
 document.querySelector('#nextBtn').addEventListener('click',()=>{const n=c.id===30?1:c.id+1;openCase(n)});
 document.querySelector('#randomBtn').addEventListener('click',randomCase);
 document.querySelector('#note').addEventListener('input',e=>{
   store.notes[c.id]=e.target.value;
   const ok=save();
   const status=document.querySelector('#noteSaveStatus');
   if(status){status.textContent=ok?'✓ Anotação salva neste navegador':'⚠ Não foi possível salvar a anotação.';status.dataset.state=ok?'saved':'error';}
 });
}
function renderLibrary(){const matches=filtered();root.innerHTML=`<div style="display:flex;align-items:start;justify-content:space-between;gap:14px;flex-wrap:wrap"><div><span class="eyebrow">BIBLIOTECA DA DISCIPLINA</span><h1 class="page-title">Todas as estruturas</h1><p class="page-intro">30 cartas, seis regiões anatômicas. Filtre, pesquise e escolha seu próximo desafio.</p></div><button class="btn btn-primary" id="randomBtn">⇄ Sortear um caso</button></div><div class="section-head" style="margin-top:25px"><div class="topic-chips">${['Todas',...REGIONS].map(r=>`<button data-region="${esc(r)}" class="topic-chip ${region===r?'active':''}" ${r==='Todas'?'':`data-region="${esc(r)}"`}>${r==='Todas'?'Todas as regiões':esc(r)}</button>`).join('')}</div></div><div class="filter-tools"><div class="searchwrap"><input class="search" id="searchCases" type="search" value="${esc(search)}" placeholder="Pesquisar estrutura ou tema..." aria-label="Pesquisar estruturas"/></div><select class="select" id="statusSelect" aria-label="Filtrar por resultado"><option value="todos" ${libraryStatus==='todos'?'selected':''}>Todos os resultados</option><option value="nao" ${libraryStatus==='nao'?'selected':''}>Ainda não respondidos</option><option value="erros" ${libraryStatus==='erros'?'selected':''}>Para revisar (erros)</option><option value="acertos" ${libraryStatus==='acertos'?'selected':''}>Respondidos corretamente</option></select><span class="small-line" id="countLabel">${matches.length} casos encontrados</span></div><div class="case-grid top-gap" id="cardsWrap">${matches.length?matches.map(tile).join(''):`<div class="empty" style="grid-column:1/-1"><strong>Nenhum caso encontrado</strong><p>Tente outra região, termo ou filtro.</p><button class="btn btn-soft" id="clearFilters">Limpar filtros</button></div>`}</div><div class="footer">As 30 cartas permanecem com a mesma numeração do jogo físico.</div>`;
 document.querySelectorAll('[data-region]').forEach(el=>el.addEventListener('click',()=>{region=el.dataset.region;renderLibrary()}));document.querySelector('#searchCases').addEventListener('input',e=>{search=e.target.value;updateList()});document.querySelector('#statusSelect').addEventListener('change',e=>{libraryStatus=e.target.value;updateList()});document.querySelector('#randomBtn').addEventListener('click',randomCase); if(document.querySelector('#clearFilters'))document.querySelector('#clearFilters').addEventListener('click',()=>{search='';region='Todas';libraryStatus='todos';renderLibrary()});}
function updateList(){const list=filtered();document.querySelector('#countLabel').textContent=`${list.length} casos encontrados`;document.querySelector('#cardsWrap').innerHTML=list.length?list.map(tile).join(''):`<div class="empty" style="grid-column:1/-1"><strong>Nenhum caso encontrado</strong><p>Tente outro filtro ou termo.</p></div>`}
function renderPerformance(){const s=stats();let weakest=REGIONS.map(r=>({r,s:stats(CASES.filter(c=>c.region===r))})).filter(x=>x.s.done>0).sort((a,b)=>(a.s.good/a.s.done)-(b.s.good/b.s.done));root.innerHTML=`<span class="eyebrow">AUTOAVALIAÇÃO</span><h1 class="page-title">Meu desempenho</h1><p class="page-intro">Veja seu progresso e identifique os assuntos que mais merecem revisão. Não é uma avaliação clínica ou acadêmica formal.</p><div class="stats">${statCard('✓',s.done+'/30','Casos realizados')}${statCard('★',s.good,'Respostas corretas')}${statCard('◎',s.accuracy+'%','Taxa de acertos')}${statCard('↺',s.errors,'Erros para revisar')}</div><div class="section-head"><div><h2>Por região anatômica</h2><p>Progresso e quantidade de acertos em cada grupo.</p></div></div><div class="split"><section class="panel"><div class="progress-list">${regionBars()}</div></section><section class="panel"><h3>O que revisar primeiro?</h3><p class="panel-sub">Sugestões calculadas com base nas questões já respondidas.</p>${s.done===0?`<div class="empty"><strong>Seu diagnóstico começa na primeira resposta</strong><p>Resolva alguns casos para gerar recomendações.</p><button class="btn btn-primary" id="first">Iniciar agora</button></div>`:weakest.slice(0,3).map(x=>`<div style="padding:12px 0;border-bottom:1px solid #eef0f6"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><strong style="font-size:13px">${esc(x.r)}</strong><span class="status-tag">${x.s.accuracy}% de acertos</span></div><p style="font-size:12px;color:#808aa0;margin:6px 0 0">${x.s.errors?`${x.s.errors} erro(s) para revisar.`:'Continue praticando para consolidar.'}</p></div>`).join('')+`<div class="callout"><b>Plano simples de revisão</b><p>Comece pelas estruturas com erro. Releia a dica e a explicação, consulte o slide correspondente e tente o caso novamente.</p></div>`}</section></div><div class="section-head"><div><h2>Revisão dirigida</h2><p>Você pode reabrir e refazer qualquer caso.</p></div><div class="two-button"><button id="csvBtn" class="btn btn-outline">↓ Exportar resultados (.csv)</button><button id="resetBtn" class="btn btn-ghost">Zerar meu progresso</button></div></div><div class="case-grid">${CASES.filter(c=>answered(c.id)&&!correct(c.id)).length?CASES.filter(c=>answered(c.id)&&!correct(c.id)).map(tile).join(''):`<div class="empty" style="grid-column:1/-1"><strong>Sem erros registrados.</strong><p>${s.done?'Excelente! Revise também os casos já concluídos.':'Quando você responder, os casos errados aparecerão aqui.'}</p><button data-go="biblioteca" class="btn btn-soft">Explorar biblioteca</button></div>`}</div>`;
 const recent=Object.entries(store.answers).map(([id,a])=>({c:getCase(Number(id)),choice:a.choice,date:a.date})).sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,10);
 root.insertAdjacentHTML('beforeend',`<section class="panel recent-history"><div class="section-head" style="margin-top:0"><div><h2>Histórico de tentativas</h2><p>Registros salvos neste navegador; exporte seus resultados para guardar uma cópia.</p></div></div>${recent.length?recent.map(h=>{if(!h.c)return '';const ok=h.choice===h.c.correct;return `<div class="history-row"><div><strong>${esc(h.c.title)}</strong><small>${esc(h.c.region)} · ${h.date?new Date(h.date).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'}):'Data indisponível'}</small></div><span class="mini-status ${ok?'good':'bad'}">${ok?'✓ Acerto':'↺ Revisar'}</span><button class="text-link" data-open="${h.c.id}">Abrir →</button></div>`}).join(''):`<div class="empty"><p>Seu histórico aparecerá depois que você responder ao primeiro caso.</p></div>`}</section>`);
 if(document.querySelector('#first'))document.querySelector('#first').addEventListener('click',()=>openCase(1));document.querySelector('#resetBtn').addEventListener('click',()=>{if(confirm('Apagar todas as respostas e anotações salvas neste navegador?')){store.answers={};store.notes={};save();renderPerformance()}});document.querySelector('#csvBtn').addEventListener('click',exportCSV);}
function exportCSV(){const header=['Carta','Estrutura','Região','Alternativa marcada','Resultado','Data'];const lines=[header,...CASES.map(c=>{const a=store.answers[c.id];return [c.id,c.title,c.region,a?a.choice+1:'',a?(a.correct?'Acerto':'Erro'):'Não respondido',a?.date||'']})];const csv='\uFEFF'+lines.map(row=>row.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(';')).join('\r\n');const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='anatomia_quem_sou_eu_desempenho.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),500)}
function renderSources(){root.innerHTML=`<span class="eyebrow">TRANSPARÊNCIA ACADÊMICA</span><h1 class="page-title">Fontes e cuidados</h1><p class="page-intro">As situações são fictícias e foram redigidas como exercícios de revisão. Elas se inspiram nas cartinhas e nos slides da disciplina, com algumas orientações assistenciais complementares.</p><div class="summary-banner top-gap"><div><strong>Base principal: 30 cartas + 8 conjuntos de slides</strong><p>Prof.ª Dr.ª Nathálya Gardênia de Holanda Marinho Nogueira • Anatomia Humana II, UEMG — Unidade Passos.</p></div><span class="status-tag">Referências por tema</span></div><div class="section-head"><div><h2>Materiais da disciplina</h2><p>Arquivos usados como referência anatômica, enviados para o projeto.</p></div></div><section class="panel">${SLIDES.map(s=>`<div class="source-item"><div class="source-icon">▤</div><div><strong>${esc(s.name)}</strong><p>${esc(s.file)}</p><p>Material didático da disciplina, 2026.</p></div></div>`).join('')}</section><div class="section-head"><div><h2>Referências complementares verificadas</h2><p>Para algumas dicas de práticas assistenciais e segurança.</p></div></div><section class="panel"><div class="source-item"><div class="source-icon">♥</div><div><strong>American Heart Association — Diretrizes 2025 para suporte básico de vida</strong><p>Posicionamento das mãos nas compressões torácicas em adultos.</p><a href="https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support/" target="_blank" rel="noopener noreferrer">Abrir diretrizes →</a></div></div><div class="source-item"><div class="source-icon">✚</div><div><strong>CDC — Administração de vacinas e marcos anatômicos</strong><p>Cuidados com o local de aplicação intramuscular no deltoide.</p><a href="https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-6-vaccine-administration.html" target="_blank" rel="noopener noreferrer">Abrir orientação →</a></div></div><div class="source-item"><div class="source-icon">◉</div><div><strong>Organização Mundial da Saúde — Best practices in phlebotomy</strong><p>Avaliação de vasos e cuidados na venopunção.</p><a href="https://www.ncbi.nlm.nih.gov/books/NBK138665/" target="_blank" rel="noopener noreferrer">Abrir guia →</a></div></div></section><div class="section-head"><div><h2>Livro de procedimentos citado em aula</h2></div></div><section class="panel"><p class="panel-sub">Não foi possível confirmar o título exato do livro nos materiais acessíveis. Por isso, nenhuma orientação deste site é atribuída a uma obra não identificada. Você pode registrar o título para consultar depois.</p><label for="book" style="font-size:12px;font-weight:900">Título / edição para conferência</label><input id="book" class="search" style="margin-top:8px;padding-left:14px;width:100%;max-width:600px" value="${esc(store.book)}" placeholder="Ex.: título completo, autor e edição..."/><div class="note-hint">Registro salvo somente neste navegador. Não muda automaticamente as referências dos casos.</div></section><div class="callout" style="background:#fffaf0;border-color:#f1e5be"><b>Importante: material educacional, não protocolo clínico</b><p>Os casos são simplificados para aprendizagem e não devem orientar atendimento real, diagnósticos ou procedimentos invasivos. Confira sempre a literatura, o protocolo da instituição e a supervisão docente.</p></div>`;document.querySelector('#book').addEventListener('input',e=>{store.book=e.target.value;save()});}
function renderSobre() {
  root.innerHTML = `
    <span class="eyebrow">CONHEÇA O PROJETO</span>
    <h1 class="page-title">Sobre o AnatoLab</h1>
    <p class="page-intro">
      Uma plataforma educacional criada para tornar
      o aprendizado em Enfermagem mais interativo,
      acessível e conectado à prática clínica.
    </p>

    <section class="panel" style="margin-top:24px">
      <h2>Nossa proposta</h2>
      <p>
        O AnatoLab nasceu a partir de um jogo educativo
        de Anatomia Topográfica chamado "Quem sou eu?".
        Seu objetivo é evoluir para uma plataforma de
        estudos com casos clínicos, materiais acadêmicos,
        exercícios interativos e ferramentas de revisão.
      </p>
    </section>

    <section class="panel" style="margin-top:20px">
      <span class="eyebrow">IDEALIZADORA E DESENVOLVEDORA</span>
      <h2>Victória Aparecida Santos Borges</h2>
      <p>
        Graduanda em Enfermagem pela Universidade do
        Estado de Minas Gerais (UEMG), Unidade Passos.
      </p>
      <p>
        Responsável pela idealização e pelo desenvolvimento
        inicial da plataforma AnatoLab.
      </p>
    </section>

    <section class="panel" style="margin-top:20px">
      <h2>O futuro do AnatoLab</h2>
      <p>
        O projeto pretende ampliar sua biblioteca acadêmica,
        desenvolver novos casos clínicos e incorporar
        recursos de organização e acompanhamento dos estudos.
      </p>
      <p>
        Futuramente, a plataforma poderá receber
        colaboradores e novos módulos educacionais.
      </p>
    </section>

    <div class="footer">
      AnatoLab • Plataforma educacional em desenvolvimento • 2026
    </div>
  `;
}
function render(){
 if(page==='inicio')renderHome();
 else if(page==='casos')renderQuiz();
 else if(page==='biblioteca')renderLibrary();
 else if(page==='desempenho')renderPerformance();
 else if(page==='sobre')renderSobre();
 else renderSources();
 root.insertAdjacentHTML('afterbegin',`<div class="cloud-banner"><div><strong>✦ Acesso livre</strong><p>Use sem cadastro. Respostas e anotações ficam somente neste navegador. Exporte os resultados se quiser guardá-los.</p></div></div>`);
}
document.addEventListener('click',e=>{
 const go=e.target.closest('[data-go]');
 if(go){const dest=go.dataset.go;if(LABELS[dest])nav(dest);return;}
 const open=e.target.closest('[data-open]');
 if(open)openCase(open.dataset.open);
});
render();
