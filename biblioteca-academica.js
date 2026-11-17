'use strict';
// Biblioteca acadêmica AnatoLab — módulo independente.
// Não contém slides da professora. Cadastre apenas materiais com autorização de compartilhamento.
(function () {
  const MATERIAIS = [
    {id:'ana-cabeca',disciplina:'Anatomia Humana',assunto:'Cabeça e crânio',regiao:'Cabeça',descricao:'Ossos cranianos, suturas, meninges e vascularização.',tipo:'Roteiro de estudo'},
    {id:'ana-pescoco',disciplina:'Anatomia Humana',assunto:'Pescoço',regiao:'Pescoço',descricao:'Músculos, trígonos cervicais, vasos e glândulas.',tipo:'Roteiro de estudo'},
    {id:'ana-torax',disciplina:'Anatomia Humana',assunto:'Tórax',regiao:'Tórax',descricao:'Parede torácica, pleuras, mediastino e referências anatômicas.',tipo:'Roteiro de estudo'},
    {id:'ana-abdome',disciplina:'Anatomia Humana',assunto:'Abdome',regiao:'Abdome',descricao:'Planos, quadrantes, órgãos e musculatura.',tipo:'Roteiro de estudo'},
    {id:'ana-mmss',disciplina:'Anatomia Humana',assunto:'Membros superiores',regiao:'Membros superiores',descricao:'Ossos, articulações, músculos, nervos e vasos.',tipo:'Roteiro de estudo'},
    {id:'ana-mmii',disciplina:'Anatomia Humana',assunto:'Membros inferiores',regiao:'Membros inferiores',descricao:'Região glútea, coxa, perna e circulação superficial.',tipo:'Roteiro de estudo'},
    {id:'fis-sensorial',disciplina:'Fisiologia Humana',assunto:'Sistemas sensoriais',regiao:'Sistemas',descricao:'Receptores e processamento sensorial.',tipo:'Espaço reservado'},
    {id:'fis-endocrino',disciplina:'Fisiologia Humana',assunto:'Sistema endócrino',regiao:'Sistemas',descricao:'Regulação hormonal e glândulas.',tipo:'Espaço reservado'},
    {id:'fis-muscular',disciplina:'Fisiologia Humana',assunto:'Sistema muscular',regiao:'Sistemas',descricao:'Contração muscular e controle do movimento.',tipo:'Espaço reservado'},
    {id:'enf-avaliacao',disciplina:'Fundamentos de Enfermagem',assunto:'Avaliação e exame físico',regiao:'Assistência',descricao:'Observação clínica e referências anatômicas.',tipo:'Espaço reservado'},
    {id:'enf-seguranca',disciplina:'Fundamentos de Enfermagem',assunto:'Segurança do paciente',regiao:'Assistência',descricao:'Cuidados para reduzir riscos na assistência.',tipo:'Espaço reservado'},
    {id:'enf-procedimentos',disciplina:'Fundamentos de Enfermagem',assunto:'Procedimentos clínicos',regiao:'Assistência',descricao:'Área futura para protocolos e materiais devidamente referenciados.',tipo:'Espaço reservado'}
  ];
  const STORAGE='anatolab_biblioteca_academica_v1';
  let state={done:{}, notes:{}};
  try {const saved=JSON.parse(localStorage.getItem(STORAGE)||'null'); if(saved&&typeof saved==='object'){state.done=saved.done||{};state.notes=saved.notes||{};}} catch(e){}
  let disciplina='Todas', search='';
  const escapeHTML = value => String(value??'').replace(/[&<>"']/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function persist(){try{localStorage.setItem(STORAGE,JSON.stringify(state));return true;}catch(e){return false;}}
  const allDisc=['Todas','Anatomia Humana','Fisiologia Humana','Fundamentos de Enfermagem'];
  function matches(x){return (disciplina==='Todas'||x.disciplina===disciplina) && (x.assunto+' '+x.disciplina+' '+x.descricao).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(search.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase());}
  function update(){
    const results=MATERIAIS.filter(matches), finished=MATERIAIS.filter(x=>state.done[x.id]).length;
    const list=document.getElementById('bibList'); if(!list)return;
    document.getElementById('bibCount').textContent=`${results.length} assuntos encontrados • ${finished}/${MATERIAIS.length} revisados`;
    list.innerHTML=results.length ? results.map(x=>`<article class="bib-card">
      <div class="bib-card-top"><span class="bib-chip">${escapeHTML(x.disciplina)}</span><span class="bib-tag">${escapeHTML(x.tipo)}</span></div>
      <h3>${escapeHTML(x.assunto)}</h3><p>${escapeHTML(x.descricao)}</p>
      <div class="bib-actions"><label><input type="checkbox" data-bib-check="${x.id}" ${state.done[x.id]?'checked':''}/> Revisado</label><button type="button" class="bib-note-button" data-bib-note="${x.id}">Minhas anotações</button></div>
      <div class="bib-note-area" id="bib-note-${x.id}" hidden><label for="bib-text-${x.id}">Anotações pessoais (salvas apenas neste navegador)</label><textarea id="bib-text-${x.id}" data-bib-text="${x.id}" rows="4" placeholder="O que revisar? O que ficou difícil?">${escapeHTML(state.notes[x.id]||'')}</textarea><small id="bib-save-${x.id}" role="status"></small></div>
    </article>`).join('') : '<p class="bib-empty">Nenhum assunto corresponde à sua busca.</p>';
    list.querySelectorAll('[data-bib-check]').forEach(input=>input.addEventListener('change',e=>{state.done[e.target.dataset.bibCheck]=e.target.checked;persist();update();}));
    list.querySelectorAll('[data-bib-note]').forEach(btn=>btn.addEventListener('click',()=>{const area=document.getElementById('bib-note-'+btn.dataset.bibNote);area.hidden=!area.hidden;}));
    list.querySelectorAll('[data-bib-text]').forEach(area=>area.addEventListener('input',e=>{const id=e.target.dataset.bibText;state.notes[id]=e.target.value;document.getElementById('bib-save-'+id).textContent=persist()?'Anotação salva neste navegador.':'Não foi possível salvar a anotação.';}));
  }
  window.renderBibliotecaAcademica = function renderBibliotecaAcademica(){
    const root=document.getElementById('root');
    root.innerHTML=`<section class="bib-page"><div class="bib-hero"><span class="eyebrow">ANATOLAB • BIBLIOTECA ACADÊMICA</span><h1>Uma biblioteca que cresce com seus estudos.</h1><p>Explore disciplinas e assuntos. Marque o que já revisou e registre o que deseja estudar novamente.</p><span class="bib-disclaimer">Os materiais da professora não estão publicados aqui. Novos slides e livros deverão ser adicionados somente com autorização.</span></div>
      <div class="bib-tools"><label for="bibSearch">Buscar assunto<input type="search" id="bibSearch" placeholder="Ex.: tórax, músculos, nervos…" value="${escapeHTML(search)}"/></label><label for="bibDisc">Disciplina<select id="bibDisc">${allDisc.map(d=>`<option value="${escapeHTML(d)}" ${disciplina===d?'selected':''}>${escapeHTML(d)}</option>`).join('')}</select></label></div>
      <div class="bib-meta" id="bibCount" aria-live="polite"></div><div class="bib-grid" id="bibList"></div><p class="bib-footer">Em desenvolvimento: materiais autorizados, leituras por tema e relações com os casos clínicos. O progresso desta biblioteca é local e não sincroniza com contas.</p></section>`;
    document.getElementById('bibSearch').addEventListener('input',e=>{search=e.target.value;update();});
    document.getElementById('bibDisc').addEventListener('change',e=>{disciplina=e.target.value;update();});
    update();
  };
})();
