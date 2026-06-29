/* FM BOARDS — engine (vanilla, no build) */
(function(){
  const $=s=>document.querySelector(s);
  const Q=(typeof QUESTIONS!=='undefined')?QUESTIONS:(window.QUESTIONS||[]);
  const N=Q.length;
  let idx=0, results=[];           // results[i] = {chosen, ok}
  const lsGet=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
  const lsSet=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};

  /* ---------- progress + reveal ---------- */
  const pg=$('#pg');
  addEventListener('scroll',()=>{const h=document.body.scrollHeight-innerHeight;pg.style.width=(h>0?scrollY/h*100:0)+'%'});
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
  const obs=()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));

  function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');scrollTo({top:0});setTimeout(obs,40)}
  const esc=s=>s;

  /* ---------- home ---------- */
  function renderHome(){
    const best=lsGet('fmb_best');
    const rows=Q.map((q,i)=>`<li class="qrow" data-i="${i}">
        <span class="n">${String(i+1).padStart(2,'0')}</span>
        <span class="dom mono">${q.domEn}</span>
        <span class="t">${q.title}</span>
        <span class="chev">→</span></li>`).join('');
    $('#home').innerHTML=`<div class="home">
      <div class="kicker">家庭医療専門医 · 筆記想定問題集</div>
      <h1>現場で差がつく<br><span class="g">10問</span>。</h1>
      <p class="lead">総合診療「専門医」レベル。一次文献（PubMed照合済）に基づく深い解説つき。クリックで採点、章ごとに色分けされた解説が開きます。</p>
      <div class="stats">
        <div class="stat"><div class="v">${N}</div><div class="k">Questions</div></div>
        <div class="stat"><div class="v">12</div><div class="k">Domains</div></div>
        <div class="stat"><div class="v">${best?best+'%':'—'}</div><div class="k">Your best</div></div>
      </div>
      <button class="cta" id="start">はじめる &nbsp;→</button>
      <div class="domains"><div class="lab">Question list</div><ul class="qlist">${rows}</ul></div>
    </div>`;
    $('#start').onclick=()=>startQuiz(0);
    document.querySelectorAll('.qrow').forEach(r=>r.onclick=()=>startQuiz(+r.dataset.i));
  }

  /* ---------- quiz ---------- */
  function startQuiz(start){idx=start; if(!results.length)results=Array(N).fill(null); renderQuestion(); show('#quiz')}

  function pips(){return Q.map((q,i)=>{let c='pip';if(i===idx)c+=' cur';if(results[i])c+=results[i].ok?' ok':' ng';return `<span class="${c}"></span>`}).join('')}

  function renderQuestion(){
    const q=Q[idx], done=results[idx];
    $('#quiz').innerHTML=`
      <div class="qtop"><span class="mono">QUESTION ${String(idx+1).padStart(2,'0')} / ${String(N).padStart(2,'0')}</span><span class="pips">${pips()}</span></div>
      <div class="hero">
        <span class="bignum">${String(idx+1).padStart(2,'0')}</span>
        <span class="eyebrow">${q.dom}</span>
        <h1 class="qtitle">${q.title}</h1>
      </div>
      <p class="meta">${q.meta}</p>
      <p class="stem">${q.stem}</p>
      <p class="qask">— Select your answer</p>
      <ul class="options" id="opts">${q.options.map((o,i)=>`<li class="opt" data-i="${i}"><span class="lt">${'ABCDE'[i]}</span><span class="ot">${o}</span></li>`).join('')}</ul>
      <p class="hint" id="hint">▸ クリックで採点・解説展開</p>
      <div class="explain" id="exp"></div>`;
    document.querySelectorAll('#opts .opt').forEach(o=>o.onclick=()=>choose(+o.dataset.i));
    if(done) reveal(done.chosen);   // if revisiting an answered question
    setTimeout(obs,40);
  }

  function choose(ci){
    if(results[idx])return;
    const q=Q[idx], ok=ci===q.answer;
    results[idx]={chosen:ci,ok};
    reveal(ci);
  }

  function reveal(ci){
    const q=Q[idx];
    $('#opts').classList.add('answered');
    document.querySelectorAll('#opts .opt').forEach(el=>{
      const i=+el.dataset.i;
      if(i===q.answer){el.classList.add('correct'); if(!el.querySelector('.tag'))el.insertAdjacentHTML('beforeend','<span class="tag">CORRECT</span>')}
      else if(i===ci){el.classList.add('wrong'); if(!el.querySelector('.tag'))el.insertAdjacentHTML('beforeend','<span class="tag">✕</span>')}
      el.onclick=null;
    });
    const h=$('#hint'); if(h)h.style.display='none';
    const e=q.explain;
    const evRows=e.evidence.map(r=>`<tr><td>${r.src}</td><td><a class="pmid" href="https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/" target="_blank" rel="noopener">${r.pmid}</a></td><td>${r.point}</td></tr>`).join('');
    const gl=e.guideline.map(b=>`<li>${b}</li>`).join('');
    const rf=e.refs.map((r,i)=>`<div><span class="rn">${i+1}</span><span>${r}</span></div>`).join('');
    const pts=(e.points||[]).map(b=>'<li>'+b+'</li>').join('');
    const last=idx===N-1;
    $('#exp').innerHTML=`
      <section class="sec s1 reveal"><div class="snum"><span class="n">01</span><h2>正解根拠</h2></div>${e.core}${e.fig||''}</section>
      <section class="sec s2 reveal"><div class="snum"><span class="n">02</span><h2>主要エビデンス（PubMed照合済）</h2></div>
        <table><thead><tr><th>指針 / 文献</th><th>PMID</th><th>要点</th></tr></thead><tbody>${evRows}</tbody></table></section>
      <section class="sec s3 reveal"><div class="snum"><span class="n">03</span><h2>誤答の検討</h2></div>${e.distractors}</section>
      <section class="sec s4 reveal"><div class="snum"><span class="n">04</span><h2>最新ガイドライン</h2></div><ul class="bl">${gl}</ul></section>
      ${pts?`<section class="sec s5 reveal"><div class="snum"><span class="n">05</span><h2>習得すべき要点</h2></div><ul class="bl">${pts}</ul></section>`:''}
      <section class="sec s6 reveal"><div class="snum"><span class="n">${pts?'06':'05'}</span><h2>参考文献</h2></div><div class="refs">${rf}</div></section>
      <div class="navbtns"><button class="next" id="next">${last?'結果を見る':'次の問題へ'} &nbsp;→</button></div>`;
    $('#exp').classList.add('show');
    $('#next').onclick=()=>{ if(last){showResult()} else {idx++; renderQuestion()} };
    $('.pips')&&($('.pips').innerHTML=pips());
    setTimeout(obs,40);
    setTimeout(()=>$('#exp').scrollIntoView({behavior:'smooth',block:'start'}),240);
  }

  /* ---------- result ---------- */
  function showResult(){
    const correct=results.filter(r=>r&&r.ok).length;
    const pct=Math.round(correct/N*100);
    const prevBest=+(lsGet('fmb_best')||0);
    if(pct>prevBest)lsSet('fmb_best',pct);
    const cells=Q.map((q,i)=>{const r=results[i];const c=r?(r.ok?'ok':'ng'):'';return `<div class="cell ${c}">${String(i+1).padStart(2,'0')}</div>`}).join('');
    // per-domain correctness bars
    const byDom={};Q.forEach((q,i)=>{const k=q.dom;(byDom[k]=byDom[k]||[]).push(results[i]&&results[i].ok)});
    const bars=Object.entries(byDom).map(([k,a])=>{const ok=a.filter(Boolean).length;const p=Math.round(ok/a.length*100);return `<div class="barrow"><span class="bl2">${k}</span><span class="tr"><i style="width:${p}%"></i></span><span class="mono" style="color:var(--muted)">${ok}/${a.length}</span></div>`}).join('');
    $('#result').innerHTML=`<div class="result">
      <div class="kicker mono" style="color:var(--neon-2);letter-spacing:.16em">RESULT</div>
      <div class="scorewrap" style="margin-top:14px"><div class="score">${pct}<small>%</small></div><div class="scoremeta">正解 ${correct} / ${N}${pct>prevBest&&prevBest>0?' · 自己ベスト更新':''}</div></div>
      <div class="gridmap">${cells}</div>
      <div class="bars"><div class="domains" style="border:none;padding:0"><div class="lab">領域別</div>${bars}</div></div>
      <div class="navbtns"><button class="next" id="again">もう一度</button><button class="btn-ghost" id="home2" style="padding:15px 22px">ホームへ</button></div>
    </div>`;
    $('#again').onclick=()=>{results=Array(N).fill(null);startQuiz(0)};
    $('#home2').onclick=()=>{renderHome();show('#home')};
    show('#result');
  }

  renderHome();
})();
