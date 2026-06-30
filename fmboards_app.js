/* FM BOARDS — engine v3 (2 modes + crowd stats / discrimination, vanilla, no build) */
(function(){
  const $=s=>document.querySelector(s);
  const Q=(typeof QUESTIONS!=='undefined')?QUESTIONS:(window.QUESTIONS||[]);
  const CFG=(typeof CONFIG!=='undefined')?CONFIG:(window.CONFIG||{endpoint:'',setSize:5});
  const SETSIZE=CFG.setSize||5;
  const lsGet=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
  const lsSet=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};

  /* run state */
  let run=[], idx=0, results=[], session='', logSetId='', logSetSize=0;
  let AGG=null;                       // aggregate stats from server (page-load snapshot)

  /* ---------- progress bar + scroll reveal ---------- */
  const pg=$('#pg');
  addEventListener('scroll',()=>{const h=document.body.scrollHeight-innerHeight;pg.style.width=(h>0?scrollY/h*100:0)+'%'});
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
  const obs=()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
  function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');scrollTo({top:0});setTimeout(obs,40)}

  /* ---------- crowd stats backend (Google Apps Script) ---------- */
  function loadStats(){
    if(!CFG.endpoint)return;
    const cb='fmbcb_'+Math.random().toString(36).slice(2);
    window[cb]=function(d){AGG=d;try{delete window[cb]}catch(e){}};
    const sc=document.createElement('script');
    sc.src=CFG.endpoint+'?callback='+cb+'&t='+Date.now();
    sc.onerror=function(){try{delete window[cb]}catch(e){}};
    document.head.appendChild(sc);
  }
  function logAnswer(qid,chosen,correct){
    if(!CFG.endpoint)return;
    try{fetch(CFG.endpoint,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},
      body:JSON.stringify({session:session,setId:logSetId,setSize:logSetSize,qid:qid,chosen:chosen,correct:correct?1:0})});}catch(e){}
  }
  const qidOf=gi=>'q'+(gi+1);

  /* ---------- home (2 modes) ---------- */
  function categories(){const m={};Q.forEach((q,i)=>(q.cat||[]).forEach(c=>{(m[c]=m[c]||[]).push(i)}));return m;}
  function setMeta(setId){return Q.map((q,i)=>i).filter(i=>Q[i].setId===setId);}
  function renderHome(){
    const b1=lsGet('fmb_best_set1'), b2=lsGet('fmb_best_set2');
    const s1=setMeta('set1'), s2=setMeta('set2'), cats=categories();
    const domList=gis=>gis.map(i=>`<span class="dchip">${Q[i].domEn}</span>`).join('');
    const catChips=Object.keys(cats).sort().map(c=>`<button class="catchip" data-cat="${c}">${c}<span class="cc">${cats[c].length}</span></button>`).join('');
    $('#home').innerHTML=`<div class="home">
      <div class="kicker">家庭医療専門医 · 筆記想定問題集</div>
      <h1>現場で差がつく<br><span class="g">10問</span>。</h1>
      <p class="lead">総合診療「専門医」レベル。一次文献（PubMed照合済）に基づく深い解説。解答後に<b>正答率・全選択肢の選択率・識別指数</b>が出ます。</p>
      <div class="modesec">
        <div class="modlab"><span class="mi">①</span> 5問セット <span class="ms">テスト形式・完答者平均つき</span></div>
        <div class="setcards">
          <button class="setcard s-set1" data-set="set1"><div class="sct">セット 1</div><div class="scq">Q1 – Q5</div><div class="scd">${domList(s1)}</div><div class="scb">${b1?('自己ベスト '+b1+' / 5'):'未挑戦'}</div><span class="scgo">▶</span></button>
          <button class="setcard s-set2" data-set="set2"><div class="sct">セット 2</div><div class="scq">Q6 – Q10</div><div class="scd">${domList(s2)}</div><div class="scb">${b2?('自己ベスト '+b2+' / 5'):'未挑戦'}</div><span class="scgo">▶</span></button>
        </div>
        <div class="modlab"><span class="mi">②</span> テーマ別 <span class="ms">領域で横断的に学ぶ</span></div>
        <div class="catwrap">${catChips}</div>
      </div>
    </div>`;
    document.querySelectorAll('.setcard').forEach(b=>b.onclick=()=>startSet(b.dataset.set));
    document.querySelectorAll('.catchip').forEach(b=>b.onclick=()=>startTheme(b.dataset.cat));
  }

  /* ---------- run control ---------- */
  const newSession=()=>'s'+Math.random().toString(36).slice(2)+Date.now().toString(36);
  function startRun(gis,setId,setSize){
    if(!gis.length)return;
    run=gis.map(i=>({q:Q[i],gi:i})); idx=0; results=Array(run.length).fill(null);
    session=newSession(); logSetId=setId; logSetSize=setSize;
    renderQuestion(); show('#quiz');
  }
  const startSet=setId=>startRun(setMeta(setId),setId,SETSIZE);
  const startTheme=cat=>startRun(categories()[cat]||[],'theme:'+cat,0);

  function pips(){return run.map((r,i)=>{let c='pip';if(i===idx)c+=' cur';if(results[i])c+=results[i].ok?' ok':' ng';return `<span class="${c}"></span>`}).join('')}
  function runTag(){return logSetSize>0?('SET '+logSetId.replace('set','')):('THEME · '+logSetId.replace('theme:',''));}

  function renderQuestion(){
    const r=run[idx], q=r.q, done=results[idx];
    $('#quiz').innerHTML=`
      <div class="qtop"><span class="mono">${runTag()} · ${String(idx+1).padStart(2,'0')} / ${String(run.length).padStart(2,'0')}</span><span class="pips">${pips()}</span></div>
      <div class="hero"><span class="bignum">${String(r.gi+1).padStart(2,'0')}</span><span class="eyebrow">${q.dom}</span><h1 class="qtitle">${q.title}</h1></div>
      <p class="meta">${q.meta}</p>
      <p class="stem">${q.stem}</p>
      <p class="qask">— Select your answer</p>
      <ul class="options" id="opts">${q.options.map((o,i)=>`<li class="opt" data-i="${i}"><span class="lt">${'ABCDE'[i]}</span><span class="ot">${o}</span></li>`).join('')}</ul>
      <p class="hint" id="hint">▸ クリックで採点・解説展開</p>
      <div class="explain" id="exp"></div>`;
    document.querySelectorAll('#opts .opt').forEach(o=>o.onclick=()=>choose(+o.dataset.i));
    if(done) reveal(done.chosen);
    setTimeout(obs,40);
  }

  function choose(ci){
    if(results[idx])return;
    const r=run[idx], ok=ci===r.q.answer;
    results[idx]={chosen:ci,ok};
    logAnswer(qidOf(r.gi),ci,ok);
    reveal(ci);
  }

  /* ---------- per-question crowd stats panel ---------- */
  function statPanel(gi,ci,ans){
    const s=(AGG&&AGG.questions)?AGG.questions[qidOf(gi)]:null;
    if(!s||!s.n){return `<div class="statpanel reveal"><div class="sphead">みんなの成績</div><div class="spnote">まだ十分なデータがありません（集計中）。回答が集まると、正答率・選択率・識別指数が表示されます。</div></div>`;}
    const bars=['A','B','C','D','E'].map((L,i)=>{
      const pc=(s.optPct&&s.optPct[i]!=null)?s.optPct[i]:0;
      let cls='spbar';if(i===ans)cls+=' cor';if(i===ci)cls+=' mine';
      return `<div class="${cls}"><span class="lt">${L}</span><span class="tr"><i style="width:${pc}%"></i></span><span class="pc">${pc}%</span></div>`;
    }).join('');
    const D=(s.D==null)?null:s.D;
    const need=(s.nComplete!=null&&s.nComplete<30);
    const dval=(D==null||need)?`<span class="dtag wait">集計中${s.nComplete!=null?'（完答 '+s.nComplete+'）':''}</span>`
      :`${D.toFixed(2)} <span class="dtag ${D>=0.4?'good':D>=0.2?'ok':'low'}">${D>=0.4?'良好':D>=0.2?'普通':'要改善'}</span>`;
    return `<div class="statpanel reveal">
      <div class="sphead">みんなの成績 <span class="statn mono">回答 ${s.n}件</span></div>
      <div class="sprow">
        <div class="spcell"><div class="spk">正答率</div><div class="spv">${s.correctRate}<small>%</small></div></div>
        <div class="spcell"><div class="spk">識別指数 D</div><div class="spv sd">${dval}</div></div>
      </div>
      <div class="spbars"><div class="spblab">選択率　<span class="lg cor">■</span>正解　<span class="lg mine">▢</span>あなたの選択</div>${bars}</div>
    </div>`;
  }

  /* ---------- reveal explanation ---------- */
  function reveal(ci){
    const r=run[idx], q=r.q;
    $('#opts').classList.add('answered');
    document.querySelectorAll('#opts .opt').forEach(el=>{
      const i=+el.dataset.i;
      if(i===q.answer){el.classList.add('correct'); if(!el.querySelector('.tag'))el.insertAdjacentHTML('beforeend','<span class="tag">CORRECT</span>')}
      else if(i===ci){el.classList.add('wrong'); if(!el.querySelector('.tag'))el.insertAdjacentHTML('beforeend','<span class="tag">✕</span>')}
      el.onclick=null;
    });
    const h=$('#hint'); if(h)h.style.display='none';
    const e=q.explain;
    const evRows=e.evidence.map((rr,ri)=>{
      const main=`<tr><td>${rr.src}</td><td><a class="pmid" href="https://pubmed.ncbi.nlm.nih.gov/${rr.pmid}/" target="_blank" rel="noopener">${rr.pmid}</a></td><td>${rr.point}${rr.pico?` <button class="picochip" type="button" data-t="pico-${idx}-${ri}">PICO ▾</button>`:''}</td></tr>`;
      if(!rr.pico)return main;
      const p=rr.pico;
      const det=`<tr class="picorow" id="pico-${idx}-${ri}"><td colspan="3"><div class="picobox">`+
        `<div class="picogrid"><div><span class="pk pc">P</span>${p.p}</div><div><span class="pk pc">I</span>${p.i}</div><div><span class="pk pc">C</span>${p.c}</div><div><span class="pk pc">O</span>${p.o}</div></div>`+
        `<div class="picoline"><span class="pk nn">NNT</span>${p.nnt}</div>`+
        `<div class="picoline"><span class="pk cav">批判的吟味</span>${p.caveat}</div>`+
        `</div></td></tr>`;
      return main+det;
    }).join('');
    const gl=e.guideline.map(b=>`<li>${b}</li>`).join('');
    const rf=e.refs.map((x,i)=>`<div><span class="rn">${i+1}</span><span>${x}</span></div>`).join('');
    const pts=(e.points||[]).map(b=>'<li>'+b+'</li>').join('');
    const last=idx===run.length-1;
    $('#exp').innerHTML=`
      ${statPanel(r.gi,ci,q.answer)}
      <section class="sec s1 reveal"><div class="snum"><span class="n">01</span><h2>正解根拠</h2></div>${e.core}${e.fig||''}</section>
      <section class="sec s2 reveal"><div class="snum"><span class="n">02</span><h2>主要エビデンス（PubMed照合済）</h2></div>
        ${e.evidence.length?`<table><thead><tr><th>指針 / 文献</th><th>PMID</th><th>要点</th></tr></thead><tbody>${evRows}</tbody></table>`:`<p class="evnote">本問は国内制度（介護保険法・関係告示）に基づくため、PubMed収載の主要エビデンス表はありません。参考文献を参照してください。</p>`}</section>
      <section class="sec s3 reveal"><div class="snum"><span class="n">03</span><h2>誤答の検討</h2></div>${e.distractors}</section>
      <section class="sec s4 reveal"><div class="snum"><span class="n">04</span><h2>最新ガイドライン</h2></div><ul class="bl">${gl}</ul></section>
      ${pts?`<section class="sec s5 reveal"><div class="snum"><span class="n">05</span><h2>習得すべき要点</h2></div><ul class="bl">${pts}</ul></section>`:''}
      <section class="sec s6 reveal"><div class="snum"><span class="n">${pts?'06':'05'}</span><h2>参考文献</h2></div><div class="refs">${rf}</div></section>
      <div class="navbtns"><button class="next" id="next">${last?'結果を見る':'次の問題へ'} &nbsp;→</button></div>`;
    $('#exp').classList.add('show');
    $('#next').onclick=()=>{ if(last){showResult()} else {idx++; renderQuestion()} };
    document.querySelectorAll('.picochip').forEach(b=>b.onclick=()=>{const row=document.getElementById(b.dataset.t);if(!row)return;const open=row.classList.toggle('open');b.textContent=open?'PICO ▴':'PICO ▾';});
    $('.pips')&&($('.pips').innerHTML=pips());
    setTimeout(obs,40);
    setTimeout(()=>$('#exp').scrollIntoView({behavior:'smooth',block:'start'}),240);
  }

  /* ---------- result ---------- */
  function showResult(){
    const correct=results.filter(x=>x&&x.ok).length, n=run.length;
    const pct=Math.round(correct/n*100);
    let bestLine='';
    if(logSetSize>0){const key='fmb_best_'+logSetId, prev=+(lsGet(key)||0); if(correct>prev)lsSet(key,correct); bestLine=(correct>prev&&prev>0)?' · 自己ベスト更新':'';}
    let setAvgBlock='';
    if(logSetSize>0){
      if(AGG&&AGG.sets&&AGG.sets[logSetId]){
        const ss=AGG.sets[logSetId];
        setAvgBlock=`<div class="setavg"><div class="sak">完答者の平均点<span class="sub">（5問を解ききった人のみ／途中離脱は除外）</span></div><div class="savwrap"><div class="sav">${ss.avg}<small> / ${ss.size}</small></div><div class="san mono">完答 ${ss.completers}人</div></div></div>`;
      }else{
        setAvgBlock=`<div class="setavg"><div class="sak">完答者の平均点<span class="sub">（5問を解ききった人のみ）</span></div><div class="spnote">集計中（データが集まると表示されます）</div></div>`;
      }
    }
    const cells=run.map((r,i)=>{const x=results[i];const c=x?(x.ok?'ok':'ng'):'';return `<div class="cell ${c}">${String(r.gi+1).padStart(2,'0')}</div>`}).join('');
    const byDom={};run.forEach((r,i)=>{const k=r.q.dom;(byDom[k]=byDom[k]||[]).push(results[i]&&results[i].ok)});
    const bars=Object.entries(byDom).map(([k,a])=>{const ok=a.filter(Boolean).length,p=Math.round(ok/a.length*100);return `<div class="barrow"><span class="bl2">${k}</span><span class="tr"><i style="width:${p}%"></i></span><span class="mono" style="color:var(--muted)">${ok}/${a.length}</span></div>`}).join('');
    const label=logSetSize>0?('SET '+logSetId.replace('set','')):('テーマ：'+logSetId.replace('theme:',''));
    $('#result').innerHTML=`<div class="result">
      <div class="kicker mono" style="color:var(--neon-2);letter-spacing:.16em">RESULT · ${label}</div>
      <div class="scorewrap" style="margin-top:14px"><div class="score">${pct}<small>%</small></div><div class="scoremeta">正解 ${correct} / ${n}${bestLine}</div></div>
      ${setAvgBlock}
      <div class="gridmap">${cells}</div>
      <div class="bars"><div class="domains" style="border:none;padding:0"><div class="lab">領域別</div>${bars}</div></div>
      <div class="navbtns"><button class="next" id="again">もう一度</button><button class="btn-ghost" id="home2" style="padding:15px 22px">ホームへ</button></div>
    </div>`;
    $('#again').onclick=()=>startRun(run.map(r=>r.gi),logSetId,logSetSize);
    $('#home2').onclick=()=>{renderHome();show('#home')};
    show('#result');
    loadStats();
  }

  loadStats();
  renderHome();
})();
