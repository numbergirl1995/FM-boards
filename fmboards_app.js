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
  let scope='gp';                     // 出題スコープ：'gp'=総合診療（全カテゴリー）/ 'im'=総合内科（imCore のみ）

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
    window[cb]=function(d){AGG=d;try{delete window[cb]}catch(e){};refreshStatPanel();};
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
  /* live-refresh the visible crowd-stats panel without page reload */
  function refreshStatPanel(){
    const host=document.querySelector('#exp .statpanel'); if(!host)return;
    const done=results[idx]; if(!done||!run[idx])return;
    const t=document.createElement('div'); t.innerHTML=statPanel(run[idx].gi,done.chosen,run[idx].q.answer);
    const fresh=t.firstElementChild; if(fresh){fresh.classList.add('in');host.replaceWith(fresh);}
  }
  /* resume-on-reload (localStorage) */
  function saveState(){try{lsSet('fmb_state',JSON.stringify({g:run.map(r=>r.gi),i:idx,r:results,s:session,sid:logSetId,ss:logSetSize,t:Date.now()}))}catch(e){}}
  function clearState(){try{localStorage.removeItem('fmb_state')}catch(e){}}
  function loadState(){try{const s=JSON.parse(lsGet('fmb_state')||'null');if(!s||!s.g||!s.g.length)return null;if(Date.now()-(s.t||0)>6*3600*1000)return null;if(s.g.some(i=>i<0||i>=Q.length))return null;if((s.i||0)>=s.g.length)return null;return s;}catch(e){return null}}
  function resumeState(){const s=loadState();if(!s)return;run=s.g.map(i=>({q:Q[i],gi:i}));idx=s.i||0;results=(s.r||[]).slice(0,run.length);while(results.length<run.length)results.push(null);session=s.s||newSession();logSetId=s.sid||'';logSetSize=s.ss||0;renderQuestion();show('#quiz');}

  /* ---------- home (2 modes) ---------- */
  function categories(){const m={};Q.forEach((q,i)=>{const c=q.category;if(c)(m[c]=m[c]||[]).push(i)});return m;}
  function setMeta(setId){return Q.map((q,i)=>i).filter(i=>Q[i].setId===setId);}

  /* ---------- scope (総合診療 ⇄ 総合内科) ---------- */
  const CATS=(typeof CATEGORIES!=='undefined')?CATEGORIES:(window.CATEGORIES||[]);
  /* 現在のスコープで表示するカテゴリー定義（表示順を保持）。im は imCore のみ。*/
  function scopeCats(){return scope==='im'?CATS.filter(c=>c.imCore):CATS.slice();}
  /* 現在のスコープに属する問題index配列（＝絞り込み済み出題プール）。Stage 3 でランダム出題に結線する。*/
  function scopedPool(){const allow=new Set(scopeCats().map(c=>c.name));return Q.map((q,i)=>i).filter(i=>allow.has(Q[i].category));}
  /* 現在のスコープで表示するテーマchip：{name,count}。実データで数え直し、0件は除外。*/
  function themeChips(){const m=categories();return scopeCats().map(c=>({name:c.name,count:(m[c.name]||[]).length})).filter(t=>t.count>0);}
  /* Stage 1: 見た目の移植のみ。スコープ絞り込み・ランダム中身・実データ配線は後段。
     数値（128問 / 71% / 連続6日 / 47%）はプレースホルダのハードコード。
     reveal は使わない（renderHome はトグルで再実行されるため、observer初回限定だと再描画後に消える）。*/
  function renderHome(){
    $('#home').innerHTML=`
      <section class="hero">
        <h1 class="h1">「わかったつもり」を、<span class="accent">潰す。</span></h1>
        <p class="lede">読むだけでは、“わかったつもり”で終わる。解いて、間違えて、なぜを潰す——PubMedの一次文献にもとづく解説を、<b>すべての選択肢</b>に。試験のためではなく、<b>明日の診療を変える</b>ために。</p>
      </section>

      <div class="scopewrap">
        <div class="seg" role="tablist" aria-label="出題範囲">
          <button role="tab" aria-selected="true" data-scope="gp">総合診療・家庭医療 <span class="k">BASE</span></button>
          <button role="tab" aria-selected="false" data-scope="im">総合内科 <span class="k">FOCUS</span></button>
        </div>
        <div class="scopenote" id="scopenote"><b>幅広い総合診療の範囲</b>から出題します。</div>
      </div>

      <section class="section">
        <div class="sec-h"><h2>解きはじめる</h2><span class="sub">まずはここから</span></div>
        <div class="primary-card">
          <div class="txt">
            <div class="tag mono">おすすめ</div>
            <h3>ランダムに解く</h3>
            <p>全範囲から、毎回ちがう一問を。番号順に縛られず、すきま時間の一問が、深さになって積み上がる。</p>
          </div>
          <span class="cta">はじめる →</span>
        </div>
        <div class="mode-strip">
          <div class="scard" id="setcard">
            <div class="tag mono">本番形式</div>
            <h4>5問セット <span class="pill">テスト</span></h4>
            <p>5問を通しで。採点と解説は、解き終えたあとにまとめて。<br><b>全範囲から固定の5問</b>（総合診療／総合内科の切替とは独立）。</p>
            <span class="go">→</span>
          </div>
          <div class="scard soon" id="weakcard">
            <div class="tag mono">これから</div>
            <h4>弱点を解く <span class="pill">近日</span></h4>
            <p>正答率の低い問題だけを、あなたの記録から自動で。復習を最短ルートに。</p>
          </div>
        </div>
      </section>

      <section class="section" style="padding-top:12px">
        <div class="sec-h"><h2>テーマ別で解く</h2><span class="sub" id="themesub">全領域</span></div>
        <div class="chips" id="chips"></div>
      </section>

      <section class="section" style="padding-top:12px">
        <div class="record">
          <div>
            <div class="lbl mono">あなたの記録</div>
            <div class="stats">
              <div class="stat"><div class="v" id="rec-answered">–<em>問</em></div><div class="c">解答した問題</div></div>
              <div class="stat"><div class="v" id="rec-rate">–<em>%</em></div><div class="c">通算正答率</div></div>
              <div class="stat"><div class="v" id="rec-streak">–<em>日</em></div><div class="c">連続学習</div></div>
            </div>
            <div class="bar-mini"><i id="rec-bar"></i></div>
          </div>
          <div class="msg" id="rec-msg">記録を読み込み中…</div>
        </div>
      </section>

      <div class="home-foot">
        <span>GIM Boards ・ 総合診療 × 総合内科 ・ 一次文献ベースの臨床問題</span>
      </div>`;

    /* スコープトグル：scope を更新し、chip一覧・件数・注記をスコープに追随させる（renderHome 全体は呼び直さない）。*/
    const segBtns=document.querySelectorAll('#home .seg button');
    const note=$('#scopenote');
    segBtns.forEach(b=>b.addEventListener('click',()=>{
      scope=b.dataset.scope==='im'?'im':'gp';
      segBtns.forEach(x=>x.setAttribute('aria-selected', x===b));
      const excluded=CATS.filter(c=>!c.imCore).map(c=>c.name).join('／');
      note.innerHTML = scope==='im'
        ? `総合内科の基盤固めモード。<b>${excluded}を除外</b>して出題します。`
        : '<b>幅広い総合診療の範囲</b>から出題します。';
      renderChips();
    }));

    /* (A) ランダムカード／(C) 5問セットカードの配線（chip は renderChips 内で配線）。*/
    const rc=$('#home .primary-card'); if(rc)rc.onclick=startRandom;
    const sc=$('#setcard'); if(sc)sc.onclick=startRandomSet;

    renderChips();
    updateRecordPanel();
  }

  /* テーマchip を現在のスコープの実データから動的生成する。0件カテゴリーは表示しない。*/
  function renderChips(){
    const host=$('#chips'); if(!host)return;
    const chips=themeChips();
    host.innerHTML=chips.map(t=>`<button class="chip" data-cat="${t.name}">${t.name} <span class="n">${t.count}</span></button>`).join('');
    const sub=$('#themesub'); if(sub)sub.textContent=chips.length+'領域・'+scopedPool().length+'問';
    /* (B) 各 chip を startTheme に結線（data-cat から取得）。表示中の chip は必ず現在スコープ内。*/
    host.querySelectorAll('.chip').forEach(b=>b.onclick=()=>startTheme(b.dataset.cat));
  }

  /* ---------- 記録パネル（実データ） ---------- */
  const dayKey=d=>d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();   // 端末ローカル日付キー
  /* 履歴 h から 4値＋バー＋メッセージを算出して流し込む。要素が無ければ何もしない。*/
  function paintRecord(h){
    const A=$('#rec-answered'), R=$('#rec-rate'), S=$('#rec-streak'), B=$('#rec-bar'), M=$('#rec-msg');
    if(!A||!R||!S||!B||!M)return;
    const n=h.length, ok=h.filter(x=>x.correct).length;
    const rate=n?Math.round(ok/n*100):0;                                  // ①延べ解答数 ②正答率（ゼロ除算ガード）
    /* ④カバレッジ：現存Q(q1..qN)に限定した一意ID数 ÷ Q.length を 0〜100 にクランプ */
    const valid=new Set(Q.map((q,i)=>qidOf(i)));
    const uniq=new Set(h.map(x=>x.question_id).filter(id=>valid.has(id))).size;
    const cov=Q.length?Math.max(0,Math.min(100,Math.round(uniq/Q.length*100))):0;
    /* ③連続学習日数：ローカル日付キー集合から、今日（無ければ昨日猶予）を起点に連続数を遡ってカウント */
    const days=new Set(h.map(x=>dayKey(new Date(x.answered_at))));
    let streak=0; const cur=new Date(); cur.setHours(0,0,0,0);
    if(!days.has(dayKey(cur))) cur.setDate(cur.getDate()-1);               // 昨日猶予
    while(days.has(dayKey(cur))){ streak++; cur.setDate(cur.getDate()-1); }
    A.innerHTML=n+'<em>問</em>';
    R.innerHTML=rate+'<em>%</em>';
    S.innerHTML=streak+'<em>日</em>';
    B.style.width=cov+'%';
    const guest=(window.FMBStore&&FMBStore.getUser&&FMBStore.getUser())?'':' <span style="color:var(--faint)">※この端末のみ（未ログイン）</span>';
    M.innerHTML = n
      ? ('全問題の<b>'+cov+'%</b>を制覇。<br>まだ見ぬ問いが、あなたを待っている。'+guest)
      : ('まだ記録がありません。最初の一問を。'+guest);
  }
  /* getHistory は Promise。取得できなければゼロ状態で描画する。*/
  function updateRecordPanel(){
    if(window.FMBStore&&FMBStore.getHistory){
      FMBStore.getHistory().then(paintRecord).catch(()=>paintRecord([]));
    }else{ paintRecord([]); }
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

  /* Stage 3: ホームの各アクションを実出題に結線 */
  const shuffle=a=>{const r=a.slice();for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;};
  /* (A) ランダム：現在スコープのプール全問を Fisher-Yates でシャッフルして通し出題（setSize=0）。*/
  const startRandom=()=>startRun(shuffle(scopedPool()),'random',0);
  /* (C) 5問セット：完成している set1/set2 からランダムに1つ選ぶ（set3 は1問のみで除外）。スコープ非依存の固定パッケージ。*/
  const COMPLETE_SETS=['set1','set2'];
  const startRandomSet=()=>startSet(COMPLETE_SETS[Math.floor(Math.random()*COMPLETE_SETS.length)]);

  function pips(){return run.map((r,i)=>{let c='pip';if(i===idx)c+=' cur';if(results[i])c+=results[i].ok?' ok':' ng';return `<span class="${c}"></span>`}).join('')}
  function runTag(){if(logSetId==='random')return 'ランダム';return logSetSize>0?('SET '+logSetId.replace('set','')):('THEME · '+logSetId.replace('theme:',''));}

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
    saveState();
  }

  function choose(ci){
    if(results[idx])return;
    const r=run[idx], ok=ci===r.q.answer;
    results[idx]={chosen:ci,ok};
    if(window.FMBStore) FMBStore.recordAttempt(r.q.id || qidOf(r.gi), ci, ok);
    logAnswer(qidOf(r.gi),ci,ok);
    reveal(ci);
    saveState();
    setTimeout(loadStats,1500);
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
    clearState();
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
    const label=logSetId==='random'?'ランダム':(logSetSize>0?('SET '+logSetId.replace('set','')):('テーマ：'+logSetId.replace('theme:','')));
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
  if(window.FMBStore) FMBStore.onChange(function(){ if($('#home').classList.contains('active')) renderHome(); });

  /* 認証メニュー「進捗をみる」用フック（store.js から疎結合に呼ばれる）：ホームを表示し記録パネルへスクロール。*/
  window.FMBShowProgress=function(){ renderHome(); show('#home'); const rec=document.querySelector('#home .record'); if(rec)setTimeout(()=>rec.scrollIntoView({behavior:'smooth',block:'center'}),60); };
})();
