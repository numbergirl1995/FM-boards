/* ===========================================================
   FM BOARDS — question data（第1弾）
   1問 = { dom, domEn, category, setId, title, meta, stem, options[5],
           answer(0-4),
           explain:{ core(HTML), fig(HTML/任意), evidence[{src,pmid,point}],
                     distractors(HTML), guideline[HTML], points[HTML], refs[] } }
   深い解説（図・要点・全エビデンス・参考文献）を削らず収録。
   =========================================================== */
const CONFIG = {
  // 集計バックエンド（Google Apps Script /exec）。空なら統計は非表示。
  endpoint: "https://script.google.com/macros/s/AKfycby-dWp6PW0qcVv7ObCxlHchu-8wcKI8RW-BmsItePDx1IVnpMdjB-GwnG_Bt5H46Bw/exec",
  setSize: 5
};

/* カテゴリーのマスター定義（正準・全20）。
   name は問題の category と一字一句一致させる。順序＝表示順。
   imCore:true = 総合内科モードでも表示 / false = 総合内科モードで非表示。 */
const CATEGORIES = [
  { name:"総合内科・臨床推論", imCore:true },
  { name:"循環器", imCore:true },
  { name:"呼吸器", imCore:true },
  { name:"消化器・肝胆膵", imCore:true },
  { name:"腎臓・電解質", imCore:true },
  { name:"内分泌・代謝", imCore:true },
  { name:"血液", imCore:true },
  { name:"神経", imCore:true },
  { name:"膠原病・アレルギー", imCore:true },
  { name:"感染症", imCore:true },
  { name:"救急・集中治療", imCore:true },
  { name:"老年医学", imCore:true },
  { name:"緩和ケア", imCore:true },
  { name:"EBM・臨床研究", imCore:true },
  { name:"運動器・整形外科", imCore:true },
  { name:"精神・行動医学", imCore:true },
  { name:"小児・思春期", imCore:false },
  { name:"女性・男性医療（周産期含む）", imCore:false },
  { name:"予防医療・公衆衛生", imCore:false },
  { name:"地域医療・医療制度・在宅", imCore:false },
  { name:"皮膚科", imCore:false },
  { name:"眼科", imCore:false },
  { name:"耳鼻咽喉科", imCore:false },
  { name:"泌尿器科", imCore:false }
];

const QUESTIONS = [
  /* ===================== Q1 (set1) ===================== */
  {
    dom:"公衆衛生・EBM", domEn:"VACCINE", category:"感染症", setId:"set1",
    title:"リツキシマブ治療中のワクチン接種計画",
    meta:"外来 · 68 F · ANCA関連血管炎リツキシマブ維持中の予防接種計画",
    stem:`あなたは総合病院の総合診療科で外来を担当している。68歳女性。1年前にMPO-ANCA陽性の顕微鏡的多発血管炎（ANCA関連血管炎）と診断され、リツキシマブ（リツキサン®）とステロイドで寛解導入された。現在はプレドニゾロン5mg/日で病勢が安定し、リツキシマブによる維持療法を受けている。前回のリツキシマブ投与から約5か月が経過し、4週間後に次回の定期投与を予定している。これまで肺炎球菌・帯状疱疹・季節性インフルエンザ・新型コロナのワクチンはいずれも接種していない。既往は高血圧でアムロジピンを内服中、薬物アレルギーや喫煙歴はない。体温36.6℃、血圧132/80mmHg、皮疹・関節腫脹はない。血液検査でCre 1.0mg/dL、Hb 12.0g/dL、CRP陰性。新型コロナワクチンに加えて、次回のリツキシマブ投与の前に行うワクチン接種計画として最も適切なのはどれか。`,
    options:[
      "PCV20（プレベナー20®）・組換え帯状疱疹ワクチン（シングリックス®）・不活化インフルエンザ",
      "PPSV23（ニューモバックスNP®）・組換え帯状疱疹ワクチン（シングリックス®）・不活化インフルエンザ",
      "PCV20（プレベナー20®）・生帯状疱疹ワクチン・不活化インフルエンザ",
      "PCV20（プレベナー20®）・組換え帯状疱疹ワクチン（シングリックス®）・経鼻弱毒生インフルエンザ",
      "PPSV23（ニューモバックスNP®）・生帯状疱疹ワクチン・経鼻弱毒生インフルエンザ"
    ],
    answer:0,
    explain:{
      core:`<p>本例は<b>リツキシマブ（抗CD20抗体）による維持療法中</b>で、前回投与から約5か月が経ちB細胞が回復しつつあり、4週間後に次回投与を控える。この<b>「次回投与の前」が、治療を遅らせずに接種できる最良の窓</b>である。原則は5点。</p>
<ol type="1">
<li><b>不活化・組換え・結合型ワクチンは免疫抑制下でも安全だが応答が減弱する</b>。リツキシマブ使用例では<b>次回投与の前（B細胞回復期）に接種し、接種後は次回投与を≥2週間あける</b>（ACR2022）。</li>
<li><b>リツキシマブはB細胞を枯渇させ液性応答を著しく損なう</b>。投与<b>直後</b>の接種は応答が乏しく、最良の応答は<b>最終投与から約6か月後かつ次回投与前</b>（ACR2022; Bingham RCT）。</li>
<li><b>生ワクチンはB細胞枯渇・ステロイド下で禁忌</b>。帯状疱疹は<b>生でなく組換え（シングリックス®）</b>を選ぶ。</li>
<li><b>新型コロナワクチンも推奨される</b>（ACR2022）。これから免疫抑制を始めるなら<b>開始≥4週前</b>、すでにリツキシマブ中なら<b>最終投与後約6か月・次回投与前</b>に。インフルエンザは予定どおり接種する。</li>
<li><b>緊急の寛解導入はワクチンのために遅らせない</b>。新規発症の重症血管炎では治療を優先し、ワクチンは投与前または投与後の適切な時期に行う（疾患コントロール優先）。</li>
</ol>
<p>→ 新型コロナワクチンに加え、3成分すべてを正しく選ぶのは<b>A</b>のみ（PCV20・組換えRZV・不活化インフルを次回投与の前に）。</p>
<table>
<thead>
<tr class="header">
<th>ワクチン（商品名）</th>
<th>種別</th>
<th>免疫抑制下</th>
<th>最適タイミング</th>
<th>本例</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>PCV20（プレベナー20®）<br>※またはPCV15（バクニュバンス®）→PPSV23</td>
<td>結合型（非生）</td>
<td>可（応答減弱しうる）</td>
<td>次回RTX投与の前</td>
<td>接種</td>
</tr>
<tr class="even">
<td>組換え帯状疱疹（シングリックス®）</td>
<td>組換え（非生・AS01）</td>
<td>可（免疫不全に推奨）</td>
<td>次回RTX投与の前・2回</td>
<td>接種</td>
</tr>
<tr class="odd">
<td>不活化インフルエンザ</td>
<td>不活化（非生）</td>
<td>可</td>
<td>流行期（予定どおり）</td>
<td>接種</td>
</tr>
<tr class="even">
<td>新型コロナ（mRNA等）</td>
<td>非生</td>
<td>可（推奨）</td>
<td>最終投与後≈6か月・次回投与前</td>
<td>接種</td>
</tr>
<tr class="odd">
<td>帯状疱疹“生”・水痘・MMR・BCG</td>
<td>弱毒生</td>
<td><b>禁忌</b></td>
<td>—</td>
<td>不可</td>
</tr>
</tbody>
</table>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="300" fill="#0d0f12"/>
<text x="450" y="32" text-anchor="middle" font-size="20" font-weight="700" fill="#e9eaee">リツキシマブ周期とワクチン接種の最適な窓</text>
<rect x="20" y="60" width="185" height="68" rx="10" fill="#13161b" stroke="#2a2e38" stroke-width="1.5"/><text x="112" y="90" text-anchor="middle" font-size="14" fill="#c8cad3">最終リツキシマブ</text><text x="112" y="110" text-anchor="middle" font-size="14" fill="#c8cad3">投与</text>
<text x="218" y="99" text-anchor="middle" font-size="20" fill="#5a5f6d">→</text>
<rect x="232" y="60" width="195" height="68" rx="10" fill="#15132a" stroke="#7c6cff" stroke-width="1.5"/><text x="329" y="90" text-anchor="middle" font-size="14" fill="#b1a6ff">約6か月後</text><text x="329" y="110" text-anchor="middle" font-size="13.5" fill="#c8cad3">B細胞が回復</text>
<text x="440" y="99" text-anchor="middle" font-size="20" fill="#5a5f6d">→</text>
<rect x="454" y="60" width="200" height="68" rx="10" fill="#0f231c" stroke="#34d399" stroke-width="2"/><text x="554" y="88" text-anchor="middle" font-size="14.5" font-weight="700" fill="#34d399">ワクチン接種</text><text x="554" y="110" text-anchor="middle" font-size="13" fill="#c8cad3">＝次回投与の前</text>
<text x="666" y="86" text-anchor="middle" font-size="12" fill="#8a8e99">≥2週</text><text x="666" y="108" text-anchor="middle" font-size="20" fill="#5a5f6d">→</text>
<rect x="682" y="60" width="198" height="68" rx="10" fill="#13161b" stroke="#2a2e38" stroke-width="1.5"/><text x="781" y="99" text-anchor="middle" font-size="14" fill="#c8cad3">次回リツキシマブ</text>
<rect x="20" y="156" width="425" height="120" rx="10" fill="#0f231c" stroke="#34d399" stroke-width="1.5"/><text x="40" y="184" font-size="15" font-weight="700" fill="#34d399">◯ 非生ワクチン（接種可）</text><text x="40" y="210" font-size="13.5" fill="#c8cad3">結合型PCV20・組換え帯状疱疹（シングリックス）</text><text x="40" y="232" font-size="13.5" fill="#c8cad3">不活化インフルエンザ・mRNA新型コロナ</text><text x="40" y="258" font-size="12.5" fill="#8a8e99">免疫抑制下でも安全（応答は減弱しうる）</text>
<rect x="455" y="156" width="425" height="120" rx="10" fill="#241318" stroke="#fb7185" stroke-width="1.5"/><text x="475" y="184" font-size="15" font-weight="700" fill="#fb7185">✗ 生ワクチン（禁忌）</text><text x="475" y="210" font-size="13.5" fill="#c8cad3">生帯状疱疹・水痘・MMR・BCG</text><text x="475" y="232" font-size="13.5" fill="#c8cad3">経鼻弱毒生インフルエンザ（フルミスト）</text><text x="475" y="258" font-size="12.5" fill="#8a8e99">B細胞枯渇・ステロイド下では不可</text>
</svg><figcaption>図. リツキシマブは最終投与後約6か月でB細胞が回復した時期（＝次回投与の前）に非生ワクチンを接種し、接種後は次回投与を2週以上あける。生ワクチンは禁忌。</figcaption></figure>`,
      evidence:[
        {src:"ACR 2022 ワクチンGL（Bass）",pmid:"36597810",point:"休薬・接種前倒しで免疫原性を最大化"},
        {src:"EULAR 2019更新（Furer）",pmid:"31413005",point:"非生は治療下でも安全。<b>可能なら免疫抑制開始前</b>に"},
        {src:"EULAR SLR 感染（Furer）",pmid:"31673420",point:"帯状疱疹 <b>IRR 2.9（2.4–3.3）</b> 対一般"},
        {src:"IDSA 2013 免疫不全宿主（Rubin）",pmid:"24311479",point:"不活化可・<b>生は高度免疫抑制下で禁忌</b>"},
        {src:"ZOE-50（Lal, NEJM 2015）",pmid:"25916341",rct:true,pico:{p:"50歳以上の成人 15411例（ワクチン7698・プラセボ7713）",i:"組換え帯状疱疹ワクチンHZ/su（gE＋AS01B）筋注2回・2か月間隔",c:"プラセボ2回",o:"帯状疱疹 6例 vs 210例（0.3 vs 9.1/1000人年）、有効率97.2%（95%CI 93.7–99.0）、平均追跡3.2年",nnt:"帯状疱疹 約38（3.2年・ARR約2.65%）",caveat:"全年齢層で高い有効性だが企業資金（GSK）、グレード3反応原性17.0%対3.2%と局所/全身反応が多く忍容性に留意。"},point:"組換え帯状疱疹 有効率 <b>97.2%（93.7–99.0）</b>"},
        {src:"ZOE-70（Cunningham, 2016）",pmid:"27626517",rct:true,pico:{p:"70歳以上の成人 13900例（平均75.6歳、各6950）",i:"組換え帯状疱疹ワクチンHZ/su（gE＋AS01B）筋注2回・2か月間隔",c:"プラセボ2回",o:"帯状疱疹 23例 vs 223例（0.9 vs 9.2/1000人年）、有効率89.8%（95%CI 84.2–93.7）、プール解析で帯状疱疹後神経痛88.8%、平均追跡3.7年",nnt:"帯状疱疹 約35（3.7年・ARR約2.88%）",caveat:"高齢者でも有効だがGSK資金で反応原性が高く（局所/全身反応79.0%対29.5%）、効果持続性は追跡期間内に限定。"},point:"有効率 <b>89.8%（84.2–93.7）</b>"},
        {src:"RZV 血液腫瘍（Dagnew, 2019）",pmid:"31399377",rct:true,pico:{p:"免疫抑制治療中/後の血液腫瘍患者 569例（ワクチン286・プラセボ283）",i:"組換え帯状疱疹ワクチン（Shingrix）筋注2回・1〜2か月間隔",c:"プラセボ2回",o:"主要は免疫原性：液性ワクチン応答80.4% vs 0.8%、抗gE GMC補正比29.75（21.09–41.96, p&lt;0.0001）。B細胞リンパ腫・CLLは除外",nnt:"該当なし（主要評価は免疫原性・安全性で臨床的帯状疱疹発症をエンドポイントとしない代替指標）",caveat:"GSK資金、主要評価は免疫原性のみで臨床的発症予防は限定的。B細胞リンパ腫/CLLを除外した集団での応答であり外的妥当性に注意。"},point:"液性応答 <b>80.4%</b> 対プラセボ0.8%"},
        {src:"RTX×ワクチンRCT（Bingham, 2010）",pmid:"20039397",rct:true,pico:{p:"MTX安定投与下の活動性RA患者 103例",i:"リツキシマブ＋MTX（破傷風トキソイド・肺炎球菌多糖・KLH・カンジダ皮膚反応で評価）",c:"MTX単独",o:"破傷風IgG≧4倍上昇率はリツキシマブ39.1% vs MTX42.3%で同等。肺炎球菌（57% vs 82%）・KLH（47% vs 93%）応答は低下、DTHは保持",nnt:"該当なし（主要は免疫原性の代替指標で群間に有意差なし／多糖・新規抗原応答はむしろ低下）",caveat:"企業関与。主要アウトカムは抗体応答率で臨床的感染予防を評価せず、リツキシマブ投与前への接種前倒しを支持する仮説生成的知見。"},point:"肺炎球菌多糖体応答 <b>57%</b> 対MTX単独<b>82%</b>、新規抗原47%対93%"},
        {src:"メタ解析（Hua, 2014）",pmid:"24339395",point:"RTXでインフルH3N2応答 <b>OR 0.11（0.04–0.31）</b>"},
        {src:"MTX休薬×インフル（Park, 2018）",pmid:"29572291",rct:true,pico:{p:"MTX安定投与下のRA患者 316例（継続156・休薬160）",i:"ワクチン接種後2週間MTX一時休薬（四価季節性インフルワクチン）",c:"MTX継続",o:"4株中≧2株で≧4倍上昇の良好応答率 休薬75.5% vs 継続54.5%（p&lt;0.001）。血清防御率も全4抗原で休薬群が高い。疾患活動性変化は同等",nnt:"該当なし（主要は免疫原性の代替指標。参考：良好応答のARD約21%だが臨床的インフル発症は未評価）",caveat:"単盲検・代替アウトカム（HI抗体応答）で実際のインフルエンザ罹患減少は未検証。韓国単一シーズン・特定ワクチンでの結果。"},point:"接種後2週休薬で <b>75.5%</b> 対継続<b>54.5%</b>（p&lt;0.001）"},
        {src:"ACIP 成人肺炎球菌 2022",pmid:"35085226",point:"<b>PCV20単独 または PCV15→PPSV23</b>"},
        {src:"ACIP 免疫不全RZV 2022",pmid:"35051134",point:"<b>RZV 2回を推奨</b>"}
      ],
      distractors:`<p><b>B. 肺炎球菌をPPSV23単独にした</b> — 誤り。成人肺炎球菌の現行推奨は<b>PCV20単独、またはPCV15→PPSV23</b>で、PPSV23単独は推奨外（ACIP2022）。多糖体はT細胞非依存性で記憶に乏しく、<b>リツキシマブ下で応答が最も低下</b>する（多糖体57%対82%）。帯状疱疹・インフルは適切で、肺炎球菌の一点のみ誤り。<span class="bias">古い推奨の踏襲</span><span class="bias">premature closure</span></p>
<p><b>C. 帯状疱疹を「生ワクチン（ZVL）」にした</b> — 誤り。生帯状疱疹ワクチンは弱毒生で、<b>B細胞枯渇・ステロイド下では禁忌</b>。帯状疱疹は<b>組換え（RZV／シングリックス®）</b>を選ぶ。Cは「生か組換えか」の一点のみ誤り。<span class="bias">既知ワクチン名へのアンカリング</span><span class="bias">生/不活化の混同</span></p>
<p><b>D. インフルを「経鼻弱毒生（LAIV）」にした</b> — 誤り。経鼻インフルエンザワクチン（フルミスト）は<b>弱毒生で免疫抑制者に禁忌</b>。インフルは<b>不活化</b>を選ぶ。Dは「インフルの剤型」の一点のみ誤り。<span class="bias">“インフルエンザワクチン”の一括り（剤型の見落とし）</span></p>
<p><b>E. 3成分すべてを誤った</b> — 誤り。PPSV23単独（肺炎球菌）＋生帯状疱疹（ZVL）＋経鼻弱毒生インフル（LAIV）の組み合わせで、製剤選択の誤りに加え<b>生ワクチン2種が禁忌</b>。最も不適切な組み合わせ。<span class="bias">生/不活化の系統的混同</span></p>`,
      guideline:[
        "<b>全体方針（EULAR2019／ACR2022）</b>：毎年の接種状況評価・共同意思決定。非生ワクチンは治療下でも安全。<b>緊急の免疫抑制導入はワクチンのために遅らせない</b>（疾患コントロール優先）。",
        "<b>リツキシマブのタイミング</b>：これから始めるなら<b>開始≥4週前</b>。すでに投与中なら<b>次回投与の前（最終投与後≈6か月でB細胞が回復した時期）に接種し、接種後は次回投与を≥2週間あける</b>。インフルエンザは予定どおり接種し、後続のリツキシマブを2週間あける（ACR2022）。",
        "<b>なぜ投与前か</b>：Bingham RCTで多糖体57%対82%・新規抗原47%対93%と応答低下。B細胞枯渇下では応答が乏しい。",
        "<b>成人肺炎球菌</b>：<b>PCV20（プレベナー20®）単独</b>、または<b>PCV15（バクニュバンス®）→PPSV23（ニューモバックスNP®）</b>。結合型はT細胞依存性で免疫記憶を誘導。",
        "<b>帯状疱疹</b>：組換え（シングリックス®）は非生で免疫抑制下も使用可（ZOE有効率97.2%/89.8%、血液腫瘍でも免疫原性確認）。日本でも<b>令和7年度（2025年度）から65歳等を対象に定期接種化</b>（年度内に70・75・80・85・90・95・100歳となる方への5年間の経過措置あり。厚労省リーフレット）。",
        "<b>新型コロナ</b>：ACR2022は免疫抑制患者への接種を推奨。可能なら免疫抑制開始前、リツキシマブ中は次回投与前（最終投与後≈6か月）が最良の応答。",
        "<b>抗体モニタリング</b>：標準化された防御抗体閾値が未確立で、接種前抗体スクリーニングで対象を絞る運用は推奨されない（選択肢Eの否定根拠）。"
      ],
      points:[],
      refs:[
        "Bass AR, et al. 2022 ACR Guideline for Vaccinations in RMD. Arthritis Rheumatol. 2023;75(3):333-348. PMID 36597810",
        "Furer V, et al. 2019 update of EULAR recommendations for vaccination in AIIRD. Ann Rheum Dis. 2020;79(1):39-52. PMID 31413005",
        "Furer V, et al. Vaccine-preventable infections in AIIRD (SLR). RMD Open. 2019;5(2):e001041. PMID 31673420",
        "Rubin LG, et al. 2013 IDSA guideline for vaccination of the immunocompromised host. Clin Infect Dis. 2014;58(3):e44-100. PMID 24311479",
        "Lal H, et al. Adjuvanted herpes zoster subunit vaccine in older adults (ZOE-50). N Engl J Med. 2015;372(22):2087-2096. PMID 25916341",
        "Cunningham AL, et al. Herpes zoster subunit vaccine in adults ≥70y (ZOE-70). N Engl J Med. 2016;375(11):1019-1032. PMID 27626517",
        "Dagnew AF, et al. RZV in haematological malignancies. Lancet Infect Dis. 2019;19(9):988-1000. PMID 31399377",
        "Bingham CO 3rd, et al. Immunization responses in RA treated with rituximab. Arthritis Rheum. 2010;62(1):64-74. PMID 20039397",
        "Hua C, et al. MTX/anti-TNF/rituximab and vaccine responses in RA. Arthritis Care Res. 2014;66(7):1016-1026. PMID 24339395",
        "Park JK, et al. MTX discontinuation and influenza vaccination in RA. Ann Rheum Dis. 2018;77(6):898-904. PMID 29572291",
        "Kobayashi M, et al. PCV15/PCV20 among US adults: ACIP 2022. MMWR. 2022;71(4):109-117. PMID 35085226",
        "Anderson TC, et al. RZV in immunocompromised adults: ACIP 2022. MMWR. 2022;71(3):80-84. PMID 35051134",
        "日本小児科学会 予防接種・感染症対策委員会「小児における肺炎球菌結合型ワクチンの定期接種に関する考え方」2024年10月27日。",
        "厚生労働省「帯状疱疹ワクチンの定期接種」令和7年度（2025年度）開始リーフレット（対象：年度内に65歳を迎える方／60〜64歳でHIVによる免疫障害がある方ほか、5年間の経過措置）。"
      ]
    }
  },
  /* ===================== Q2 (set1) ===================== */
  {
    dom:"日常病（高血圧）", domEn:"HYPERTENSION", category:"循環器", setId:"set1",
    title:"高齢者高血圧と症候性起立性低血圧",
    meta:"在宅 · 85 F · 反復転倒・起立時失神を伴う高血圧",
    stem:`あなたは在宅医療を行う診療所に勤務している。85歳女性。要介護1で独居し、週2回の訪問介護を利用している。この半年で2回転倒し、1回は朝にトイレへ立った際、意識を失って倒れ数秒で回復した。高血圧で5年前からアムロジピン5mgとテルミサルタン40mgを内服している。糖尿病・脳卒中・心疾患の既往はなく、認知機能は保たれている。喫煙・飲酒はしない。臥位血圧148/80mmHg・脈拍72/分（整）、起立3分後の血圧は110/68mmHgで立ちくらみを訴える。心雑音・頸静脈怒張・下腿浮腫はない。心電図は洞調律でST-T変化はなく、血算・電解質・腎機能・血糖に異常を認めない。まず行う対応として最も適切なのはどれか。`,
    options:[
      "経過観察",
      "降圧薬の減量",
      "ミドドリンの追加",
      "弾性ストッキングの着用",
      "サイアザイド系利尿薬の追加"
    ],
    answer:1,
    explain:{
      core:`<p>本症例は「<b>85歳・要介護1・反復転倒・起立時失神</b>」のフレイル像で、<b>症候性の起立性低血圧（OH）</b>を呈する。まず行うべきは<b>原因となりうる降圧薬の減量（脱処方）</b>。</p>
<p>OHの定義（Freeman 2011）＝<b>起立後3分以内にSBP↓≥20 または DBP↓≥10mmHg</b>。本例はSBP −38mmHg＋立ちくらみ・失神既往＝<b>症候性OH</b>（無症候性OHとは管理が決定的に異なる）。</p>
<p><b>降圧薬減量が第一選択である理由</b>：(1) 高齢者OHの最も是正可能な原因は薬剤性で、Ca拮抗薬（アムロジピン）・ARB（テルミサルタン）はOHを助長。OH/転倒管理は「<b>まず原因薬の見直し</b>」から（STOPPFall）。(2) <b>糖尿病・脳心血管疾患がなく</b>臥位148/80と著明高値でない＝厳格降圧の積極的適応がない。厳格降圧の利益（SPRINT, STEP）は<b>自立・非フレイル</b>例のもので、反復転倒・失神の要介護例に外挿できない。(3) フレイル＋低SBP＋多剤は死亡と関連（PARTAGE：SBP&lt;130＋≥2剤で2年死亡 <b>adj HR 1.78</b>）。(4) 減薬は安全（OPTIMISE：80歳以上で1剤減でも12週の血圧管理が<b>非劣性</b>、SBP差+3.4mmHg）。</p>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 340" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="340" fill="#0d0f12"/>
<text x="450" y="30" text-anchor="middle" font-size="19" font-weight="700" fill="#e9eaee">起立性低血圧の管理順序と「厳格降圧が及ぶ／及ばない」集団</text>
<rect x="20" y="50" width="270" height="74" rx="10" fill="#15132a" stroke="#7c6cff" stroke-width="2"/><text x="155" y="78" text-anchor="middle" font-size="14.5" font-weight="700" fill="#b1a6ff">① 原因薬の見直し（最優先）</text><text x="155" y="104" text-anchor="middle" font-size="13" fill="#c8cad3">Ca拮抗薬・ARBを減量／脱処方</text>
<text x="300" y="92" text-anchor="middle" font-size="20" fill="#5a5f6d">→</text>
<rect x="315" y="50" width="270" height="74" rx="10" fill="#13161b" stroke="#2a2e38" stroke-width="1.5"/><text x="450" y="78" text-anchor="middle" font-size="14.5" font-weight="700" fill="#e9eaee">② 非薬物</text><text x="450" y="104" text-anchor="middle" font-size="12.5" fill="#c8cad3">ゆっくり起立・弾性ストッキング・水分/塩分</text>
<text x="595" y="92" text-anchor="middle" font-size="20" fill="#5a5f6d">→</text>
<rect x="610" y="50" width="270" height="74" rx="10" fill="#231c10" stroke="#fbbf24" stroke-width="1.5"/><text x="745" y="78" text-anchor="middle" font-size="14.5" font-weight="700" fill="#fbbf24">③ 難治例に薬物</text><text x="745" y="104" text-anchor="middle" font-size="13" fill="#c8cad3">ミドドリン／フルドロコルチゾン</text>
<text x="450" y="164" text-anchor="middle" font-size="14.5" font-weight="700" fill="#e9eaee">厳格降圧の利益は「自立度・フレイル」で変わる</text>
<rect x="20" y="182" width="425" height="140" rx="10" fill="#0f231c" stroke="#34d399" stroke-width="1.5"/><text x="40" y="210" font-size="15" font-weight="700" fill="#34d399">◯ 利益が及ぶ</text><text x="40" y="236" font-size="13.5" fill="#c8cad3">自立・非フレイルの高齢者</text><text x="40" y="260" font-size="13.5" fill="#c8cad3">SPRINT≥75：心血管 HR 0.66</text><text x="40" y="284" font-size="13.5" fill="#c8cad3">外傷性転倒は増えず</text><text x="40" y="308" font-size="12.5" fill="#8a8e99">→ 厳格降圧を目指す</text>
<rect x="455" y="182" width="425" height="140" rx="10" fill="#241318" stroke="#fb7185" stroke-width="1.5"/><text x="475" y="210" font-size="15" font-weight="700" fill="#fb7185">✗ 及ばない（本例）</text><text x="475" y="236" font-size="13.5" fill="#c8cad3">要介護・反復転倒・症候性OH・多剤</text><text x="475" y="260" font-size="13" fill="#c8cad3">PARTAGE：SBP&lt;130＋≥2剤で死亡 HR 1.78</text><text x="475" y="284" font-size="13.5" fill="#c8cad3">85歳・要介護1・起立時失神</text><text x="475" y="308" font-size="12.5" fill="#8a8e99">→ まず降圧薬を減量</text>
</svg><figcaption>図. 起立性低血圧はまず原因薬の見直しから。厳格降圧の利益は自立・非フレイル例のもので、要介護・反復転倒・症候性OHの本例には外挿できない。</figcaption></figure>`,
      evidence:[
        {src:"OPTIMISE（Sheppard, 2020）",pmid:"32453368",rct:true,pico:{p:"80歳以上・SBP150未満で降圧薬2剤以上の高齢者 569例（英国69施設、平均84.8歳）",i:"降圧薬1剤を中止する減薬戦略（282例）",c:"通常ケア＝薬剤変更なし（287例）",o:"12週でSBP150未満達成 介入86.4% vs 対照87.7%（調整RR0.98、片側97.5%CI 0.92〜∞）で非劣性。平均SBPは介入群が3.4mmHg高い。重篤有害事象 4.3% vs 2.4%（有意差なし）",nnt:"該当なし（非劣性デザインで主要評価はSBP管理達成というプロセス指標、対照に対する有益性ではない）",caveat:"追跡わずか12週で長期の心血管・転倒・死亡への影響は不明。減薬適応は主治医判断で選択バイアスを含む。"},point:"1剤減薬は12週で<b>非劣性</b>（調整RR 0.98）、SBP+3.4 ／脱処方は短期的に安全"},
        {src:"PARTAGE（Benetos, 2015）",pmid:"25685919",point:"低SBP&lt;130＋<b>≥2剤</b>で2年死亡 <b>adj HR 1.78（1.34–2.37）</b> ／過降圧＋多剤は死亡リスク"},
        {src:"Juraschek（SPRINT OH, 2020）",pmid:"31983312",point:"<b>無症候性</b>OHはCVD/失神/転倒と非関連 ／裏返せば<b>症候性</b>OHは介入対象"},
        {src:"SPRINT（2015）",pmid:"26551272",rct:true,pico:{p:"SBP130以上・心血管リスク高値だが糖尿病なしの成人 9361例",i:"強化降圧 目標SBP120未満（1年平均121.4mmHg）",c:"標準降圧 目標SBP140未満（1年平均136.2mmHg）",o:"主要複合（MI・ACS・脳卒中・心不全・心血管死）年率1.65% vs 2.19%（HR0.75、95%CI0.64〜0.89）。総死亡 HR0.73。低血圧・失神・電解質異常・急性腎障害は強化群で増加",nnt:"概算 約185/年（ARR約0.54%/年）、中央値3.26年で累積おおむね 約60前後",caveat:"自動オシロメトリック血圧で診察室値より低く出るため目標値の外挿に注意。糖尿病・脳卒中既往・施設入所者は除外で外的妥当性に限界。"},point:"厳格降圧 primary <b>HR 0.75（0.64–0.89）</b> ／利益集団＝自立例"},
        {src:"SPRINT ≥75歳（2016）",pmid:"27195814",rct:true,pico:{p:"SPRINTの75歳以上・糖尿病なしの高齢者 2636例（平均79.9歳）",i:"強化降圧 目標SBP120未満（1317例）",c:"標準降圧 目標SBP140未満（1319例）",o:"主要複合 102件 vs 148件（HR0.66、95%CI0.51〜0.85）、総死亡 73 vs 107（HR0.67）。重篤有害事象全体は両群差なし（48.4% vs 48.3%）",nnt:"概算 約28（ARR約3.5%、中央値3.14年）",caveat:"フレイル高齢者も含むが施設入所・重度認知症・顕著なOH例は除外。自動血圧測定値に基づく目標で手動測定への適用に留意。"},point:"primary <b>HR 0.66</b>、injurious falls <b>HR 0.91（NS）</b> ／<b>自立</b>高齢者で有益"},
        {src:"STEP（2021）",pmid:"34491661",rct:true,pico:{p:"中国・60〜80歳の高血圧患者 8511例",i:"強化降圧 目標SBP110〜130未満（4243例、1年平均127.5mmHg）",c:"標準降圧 目標SBP130〜150未満（4268例、1年平均135.3mmHg）",o:"主要複合（脳卒中・ACS・急性心不全・冠血行再建・心房細動・心血管死）3.5% vs 4.6%（HR0.74、95%CI0.60〜0.92）。脳卒中HR0.67・ACS HR0.67。低血圧のみ強化群で増加",nnt:"概算 約91（ARR1.1%、中央値3.34年）",caveat:"中国人集団で下限110mmHgを設定するも平均到達127.5mmHgと標準群との差が小さく、東アジア以外や下限の妥当性への一般化に注意。"},point:"強化 primary <b>HR 0.74</b> ／上限80歳・自立例"},
        {src:"HYVET（2008）",pmid:"18378519",rct:true,pico:{p:"80歳以上・座位SBP160以上の高血圧患者 3845例（平均83.6歳）",i:"インダパミド徐放1.5mg±ペリンドプリル 目標150/80（1933例）",c:"プラセボ（1912例）",o:"主要評価の致死的/非致死的脳卒中は30%減だが有意差なし（95%CI−1〜51、P＝0.06）。総死亡21%減（P＝0.02）・心不全64%減（P＜0.001）・重篤有害事象も実薬群で少ない",nnt:"該当なし（主要評価の脳卒中はP＝0.06で有意差未達。総死亡・心不全など副次項目は有意）",caveat:"中央値追跡1.8年と短く、SBP160以上の比較的健康な超高齢者が対象でフレイル・多併存例への外挿は限定的。"},point:"全死亡 −21%・心不全 −64% ／地域在住・非フレイル"},
        {src:"ACCORD-BP（2010）",pmid:"20228401",rct:true,pico:{p:"心血管高リスクの2型糖尿病患者 4733例（平均追跡4.7年）",i:"強化降圧 目標SBP120未満（2362例、1年平均119.3mmHg）",c:"標準降圧 目標SBP140未満（2371例、1年平均133.5mmHg）",o:"主要複合（非致死MI・非致死脳卒中・心血管死）年率1.87% vs 2.09%（HR0.88、95%CI0.73〜1.06、P＝0.20）で有意差なし。脳卒中のみ0.32% vs 0.53%（HR0.59）。降圧関連重篤有害事象は強化群3.3% vs 1.3%",nnt:"該当なし（主要複合は陰性／非有意。脳卒中のみ副次項目で有意）",caveat:"陰性結果かつ2×2要因デザインで血糖強化療法と交絡し検出力も限定的。強化降圧は有害事象を増やし糖尿病例への一律適用は支持されない。"},point:"&lt;120は無効 <b>HR 0.88（P=0.20）</b> ／過度の降圧で純益乏しい"},
        {src:"STOPPFall（2021）",pmid:"33349863",point:"FRIDsと脱処方手順 ／まず原因薬の見直し"},
        {src:"OH定義（Freeman, 2011）",pmid:"21431947",point:"起立3分で SBP↓≥20 / DBP↓≥10 ／判定根拠"},
        {src:"JSH2019（Umemura, 2019）",pmid:"31375757",point:"後期高齢者・フレイルは<b>個別化</b>・有害事象時の緩和 ／日本の標準"}
      ],
      distractors:`<p><b>A. 経過観察</b> — 半年で2回転倒・1回起立時失神という重大有害事象が顕在化。是正可能な原因がある状況で「待つ」のは次の骨折リスクに曝す。<span class="bias">omission bias</span><span class="bias">現状維持バイアス</span></p>
<p><b>C. ミドドリンの追加</b> — α1刺激薬はOHの薬物療法だが<b>非薬物でも不十分な難治例の後段</b>。降圧薬という原因を残したまま昇圧薬を足すのは非合理（臥位高血圧も増悪）。<span class="bias">commission bias（“do something”）</span></p>
<p><b>D. 弾性ストッキングの着用</b> — 非薬物療法の一つだが「最初の最も適切な対応」ではない。原因薬の是正という上流介入を差し置く順序違反。要介護では着脱困難等の制約も。<span class="bias">アンカリング</span></p>
<p><b>E. サイアザイド系利尿薬の追加</b> — <b>最悪</b>。血管内容量を減らしOHを増悪、転倒・失神・低Na/低K/AKIリスク。降圧を減らすべき局面で増やすのは病態と真逆。<span class="bias">フレーミング効果／ガイドライン誤適用</span></p>`,
      guideline:[
        "<b>(1) 「年齢」でなく「自立度・フレイル」で層別化</b>：自立・非フレイルには厳格降圧が有益（SPRINT≥75, STEP）／要介護・反復転倒・症候性OHでは害が上回る（PARTAGE）。<b>2024 ESC（§9.3「≥85歳・フレイル・多併存」、症候性起立性低血圧の章を独立)・2025 AHA/ACC（目標130/80未満だが施設入所・余命限定等は個別化）も高齢・フレイルの個別化を明記</b>。日本のJSH2025は全年齢で130/80未満を目標とするが、フレイル例の許容は併存条件で調整。",
        "<b>(2) 利益が「及ぶ／及ばない」集団</b>：及ぶ＝自立・歩行可能（SPRINT≥75：primary 0.66、injurious falls 非増加）。及ばない＝施設入所・フレイル多剤（PARTAGE 死亡 adj HR 1.78）、DMで&lt;120（ACCORD 無効）、本症例。",
        "<b>(3) OH管理の順序</b>：①原因薬の見直し（最優先）→②非薬物→③難治例にフルドロコルチゾン/ミドドリン（図）。",
        "<b>(4) 脱処方</b>：全処方の棚卸し→害&gt;益を同定（OHなら降圧薬・利尿薬）→<b>1剤ずつ</b>減量（OPTIMISE非劣性）→家庭血圧・起立時血圧・症状をモニタ→必要なら再開。",
        "<b>(5) 家庭血圧・起立時血圧</b>：高齢者では起立時血圧の系統的測定がOH検出と安全な降圧調整の弁になる。減薬後の追跡指標。"
      ],
      points:[],
      refs:[
        "Freeman R, et al. Consensus on orthostatic hypotension. Clin Auton Res. 2011;21(2):69-72. PMID 21431947",
        "Sheppard JP, et al. Antihypertensive medication reduction (OPTIMISE). JAMA. 2020;323(20):2039-2051. PMID 32453368",
        "Benetos A, et al. Multiple BP medications and mortality in nursing home residents (PARTAGE). JAMA Intern Med. 2015;175(6):989-995. PMID 25685919",
        "Juraschek SP, et al. Orthostatic hypotension and outcomes: SPRINT. Hypertension. 2020;75(3):660-667. PMID 31983312",
        "SPRINT Research Group. Intensive vs standard BP control. N Engl J Med. 2015;373(22):2103-2116. PMID 26551272",
        "Williamson JD, et al. Intensive vs standard BP control ≥75y. JAMA. 2016;315(24):2673-2682. PMID 27195814",
        "Zhang W, et al. Intensive BP control in older patients (STEP). N Engl J Med. 2021;385(14):1268-1279. PMID 34491661",
        "Beckett NS, et al. Treatment of hypertension ≥80y (HYVET). N Engl J Med. 2008;358(18):1887-1898. PMID 18378519",
        "Cushman WC, et al. Intensive BP control in type 2 diabetes (ACCORD-BP). N Engl J Med. 2010;362(17):1575-1585. PMID 20228401",
        "Seppala LJ, et al. STOPPFall. Age Ageing. 2021;50(4):1189-1199. PMID 33349863",
        "Umemura S, et al. JSH 2019 guidelines. Hypertens Res. 2019;42(9):1235-1481. PMID 31375757",
        "日本高血圧学会「高血圧管理・治療ガイドライン2025（JSH2025）」2025年8月（全年齢で130/80mmHg未満を目標）。",
        "日本老年医学会「高齢者の安全な薬物療法ガイドライン2025」（2015年版の改訂。高齢者医薬品適正使用検討会 2025年）。",
        "McEvoy JW, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J. 2024;45(38):3912-4018. (PMID 39210715)",
        "Jones DW, et al. 2025 AHA/ACC Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. Hypertension. 2025. (DOI 10.1161/HYP.0000000000000249)"
      ]
    }
  },
  /* ===================== Q3 (set1) ===================== */
  {
    dom:"女性医療（HRT）", domEn:"MENOPAUSE", category:"女性・男性医療（周産期含む）", setId:"set1",
    title:"血管運動症状への最適な治療",
    meta:"52 F · 女性外来 · 自然閉経後VMS · 特発性DVT既往",
    stem:`あなたは女性外来のある診療所に勤務している。52歳女性。1年前に自然閉経した。半年前から1日に数回の顔のほてり・発汗と寝汗による中途覚醒があり、日中の倦怠感で家事に支障が出ている。月経は12か月以上なく、不正性器出血はない。子宮全摘の既往はなく、子宮筋腫の指摘もない。5年前に長期臥床などの誘因なく左下肢深部静脈血栓症を発症し、抗凝固薬を6か月内服して中止した。乳癌・冠動脈疾患・肝疾患の既往はなく、家族歴に乳癌はない。喫煙はせず、BMIは24。血圧124/76mmHg。乳房・内診に異常はなく、直近の子宮頸部細胞診とマンモグラフィも異常を認めない。血管運動症状に対する治療として最も適切なのはどれか。`,
    options:[
      "SSRIの投与",
      "経腟エストロゲン",
      "経皮エストロゲン",
      "経口結合型エストロゲン",
      "経皮エストラジオールとプロゲスチンの併用"
    ],
    answer:0,
    explain:{
      core:`<p>「<b>VMSを治療したいが全身HRTが禁忌</b>」という、HRTの禁忌と適応を同時に問う構造。</p>
      <ul>
      <li><b>ゲート1 ── 特発性VTE既往は全身HRTの禁忌</b>。5年前の「誘因のない」DVTは再発リスクが高く、エストロゲンは経路を問わず凝固系を活性化しうる。本邦・国際GL（NICE/NAMS）ともVTE既往を禁忌/最上位の慎重投与。→ C・D・E（全身E）は不可。</li>
      <li><b>ゲート2 ── 子宮を有する女性にE単独は不可</b>（子宮内膜増殖症・癌＝unopposed estrogen）。→ D を否定。</li>
      <li><b>ゲート3 ── 経腟エストロゲンはGSM（局所）用で全身VMSに無効</b>。→ B を否定。</li>
      <li><b>ゲート4 ── 全身HRTが使えないVMSの非ホルモン第一選択＝SSRI/SNRI</b>（NAMS 2023 Level I）。</li>
      </ul>
      <p>→ 4ゲートすべて通過するのは <b>A のみ</b>。</p>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="320" fill="#0d0f12"/>
<text x="450" y="32" text-anchor="middle" font-size="20" font-weight="700" fill="#e9eaee">全身HRTが使えないVMS：4つの論理ゲート</text>
<rect x="20" y="56" width="270" height="124" rx="10" fill="#241318" stroke="#fb7185" stroke-width="1.5"/><text x="155" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="#fb7185">ゲート1</text><text x="155" y="110" text-anchor="middle" font-size="13.5" fill="#c8cad3">特発性VTE既往</text><text x="155" y="134" text-anchor="middle" font-size="13.5" fill="#c8cad3">＝全身HRTは禁忌</text><text x="155" y="162" text-anchor="middle" font-size="12.5" fill="#fb7185">経口も経皮も不可（C・D・E除外）</text>
<rect x="315" y="56" width="270" height="124" rx="10" fill="#241318" stroke="#fb7185" stroke-width="1.5"/><text x="450" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="#fb7185">ゲート2</text><text x="450" y="110" text-anchor="middle" font-size="13.5" fill="#c8cad3">子宮あり</text><text x="450" y="134" text-anchor="middle" font-size="13.5" fill="#c8cad3">＝エストロゲン単独不可</text><text x="450" y="162" text-anchor="middle" font-size="12.5" fill="#fb7185">子宮内膜癌リスク（D除外）</text>
<rect x="610" y="56" width="270" height="124" rx="10" fill="#231c10" stroke="#fbbf24" stroke-width="1.5"/><text x="745" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="#fbbf24">ゲート3</text><text x="745" y="110" text-anchor="middle" font-size="13.5" fill="#c8cad3">経腟E＝GSM局所用</text><text x="745" y="134" text-anchor="middle" font-size="13.5" fill="#c8cad3">＝全身VMSに無効</text><text x="745" y="162" text-anchor="middle" font-size="12.5" fill="#fbbf24">（B除外）</text>
<text x="450" y="206" text-anchor="middle" font-size="20" fill="#5a5f6d">↓</text>
<rect x="20" y="220" width="860" height="82" rx="10" fill="#0f231c" stroke="#34d399" stroke-width="2"/><text x="450" y="252" text-anchor="middle" font-size="16" font-weight="700" fill="#34d399">ゲート4 → 残るのは A：非ホルモン第一選択（SSRI／SNRI）</text><text x="450" y="280" text-anchor="middle" font-size="13" fill="#c8cad3">NAMS 2023 Level I：CBT・SSRI/SNRI・ガバペンチン・フェゾリネタント</text>
</svg><figcaption>図. VTE既往→子宮あり→経腟は局所用、という3ゲートで全身HRTの各選択肢が除外され、残る非ホルモン（SSRI）が第一選択となる。</figcaption></figure>`,
      evidence:[
        {src:"WHI E+P（Rossouw, 2002）",pmid:"12117397",rct:true,pico:{p:"子宮を有する健常閉経後女性 16608例（50−79歳、平均約63歳）",i:"結合型エストロゲン0.625mg/日＋酢酸MPA2.5mg/日",c:"プラセボ",o:"主要評価は冠動脈疾患。平均5.2年で乳癌の停止境界超過により早期中止。CHD HR1.29（1.02−1.63）・乳癌1.26（1.00−1.59）・脳卒中1.41（1.07−1.85）・PE2.13（1.39−3.25）、大腸癌0.63・股関節骨折0.66、global index1.15（1.03−1.28）",nnt:"NNH 約1250（乳癌、1万人年あたり8件超過≒1年で害1名に約1250人、平均5.2年）",caveat:"一次予防が目的だが平均約63歳・閉経後十数年でtiming仮説の好機を外れており、若年早期開始集団への外挿は不可。"},point:"RCT・子宮あり16,608例。<b>肺塞栓 HR 2.13（1.39–3.25）</b>、脳卒中1.41、乳癌1.26"},
        {src:"WHI E単独（Anderson, 2004）",pmid:"15082697",rct:true,pico:{p:"子宮摘出後の閉経後女性 10739例（50−79歳、平均約63歳）",i:"結合型エストロゲン単独0.625mg/日",c:"プラセボ",o:"主要評価はCHD。平均6.8年で早期終了。CHD HR0.91（0.75−1.12、有意差なし）・乳癌0.77（0.59−1.01）・脳卒中1.39（1.10−1.77）・PE1.34（0.87−2.06）・股関節骨折0.61（0.41−0.91）。1万人年あたり脳卒中12件超過・股関節骨折6件減少",nnt:"NNH 約833（脳卒中、1万人年あたり12件超過≒1年で害1名に約833人、平均6.8年）",caveat:"害（脳卒中）が主眼でCHDは有意差なし。平均年齢が高くtiming仮説の若年開始と乖離し、子宮摘出後集団のため一般化に限界。"},point:"RCT・子宮摘出後。脳卒中 <b>HR 1.39（1.10–1.77）</b>、乳癌0.77。子宮摘出者限定"},
        {src:"ESTHER（Canonico, 2007）",pmid:"17309934",point:"症例対照・特発性VTE初発。経口E <b>OR 4.2（1.5–11.6）</b>／<b>経皮E OR 0.9（0.4–2.1）＝非有意</b>"},
        {src:"HRT/VTE 大規模（Vinogradova, 2019）",pmid:"30626577",point:"症例対照（VTE 80,396例）。経口全体 aOR 1.58／CEE+MPA 2.10／<b>経皮 aOR 0.93（0.87–1.01）</b>"},
        {src:"メタ解析（Rovinski, 2018）",pmid:"29936403",point:"SR/MA。経口 OR 1.72／<b>非経口 OR 0.97（0.90–1.06）</b>"},
        {src:"ELITE（Hodis, 2016）",pmid:"27028912",rct:true,pico:{p:"健常閉経後女性 643例（閉経後6年未満＝早期 と 10年以上＝後期 に層別）",i:"経口17βエストラジオール1mg/日（子宮ありは黄体期プロゲステロン膣ゲル併用）",c:"プラセボ（子宮ありは膣ゲルプラセボ）",o:"主要評価は頸動脈内膜中膜厚（CIMT）進展速度。中央値5年・早期×後期で交互作用P=0.007。早期群はCIMT年間増加 プラセボ0.0078 vs E2 0.0044mm（P=0.008）、後期群は差なし。心臓CT指標は両層で有意差なし",nnt:"該当なし（主要アウトカムが連続値の代替指標CIMTで二値臨床イベントでない）",caveat:"代替アウトカム（CIMT）で臨床イベント減少は未証明。timing仮説を支持するが心臓CT指標では差がなく効果は早期層・サブクリニカル所見に限局。"},point:"RCT・閉経&lt;6年 vs ≥10年。早期開始でCIMT抑制（交互作用 P=0.007）＝<b>timing仮説</b>"},
        {src:"低用量パロキセチン7.5mg（Simon, 2013）",pmid:"24045678",rct:true,pico:{p:"閉経後女性 1184例（12週試験と24週試験の2RCT統合、1:1割付）",i:"パロキセチン7.5mg 1日1回",c:"プラセボ",o:"主要評価は中等度〜重度VMSの頻度・重症度の平均変化。週あたりVMS頻度を有意に低減（4週 P&lt;0.0001、12週 P=0.0090/0.0001）。重症度も一部時点で有意改善、24週まで効果持続。有害事象は大半が軽〜中等度",nnt:"該当なし（主要アウトカムがVMS頻度・重症度の連続値で二値イベントでない）",caveat:"連続アウトカムで効果量は中等度、追跡は最長24週と短期。抄録は頻度減少の実数を示さずP値中心で臨床的意義の評価に限界。"},point:"2本の第3相RCT。VMS頻度を有意に減少。<b>米国唯一のVMS適応承認</b>"},
        {src:"SKYLIGHT 1（Lederman, 2023）",pmid:"36924778",rct:true,pico:{p:"40−65歳の閉経関連 中等度〜重度VMS（1日平均7回以上）女性。無作為化 placebo175・30mg176・45mg176（1:1:1）",i:"フェゾリネタント30mg または 45mg 1日1回",c:"プラセボ（外観一致）",o:"共主要評価はVMS頻度・重症度の4・12週変化。頻度：12週 LSM差 −2.39（30mg）/−2.55（45mg）（P&lt;0.001）。重症度も有意。1週で効果発現し52週まで維持。肝酵素上昇は低頻度",nnt:"該当なし（主要アウトカムがVMS頻度・重症度の連続値で二値イベントでない）",caveat:"連続アウトカムで頻度の絶対差は1日約2回程度と中等度、プラセボ対照のみで実薬比較なし。肝酵素上昇の長期安全性は12週超の評価が必要。"},point:"第3相RCT・フェゾリネタント。45mgで12週VMS頻度 LSM差 <b>−2.55（P&lt;0.001）</b>"},
        {src:"NAMS 非ホルモン療法 2023",pmid:"37252752",point:"ステートメント。<b>Level I：CBT・SSRI/SNRI・ガバペンチン・フェゾリネタント</b>"}
      ],
      distractors:`<p><b>B. 経腟エストロゲン</b> — <b>GSM（腟乾燥・性交痛・反復尿路症状）の局所治療</b>で全身吸収が低く、全身性VMSには無効。本例の主訴はGSMでない。<span class="bias">適応の取り違え／カテゴリーエラー</span></p>
      <p><b>C. 経皮エストロゲン（最重要の誤答）</b> — 経皮は一次予防集団でVTEをほぼ上げない（OR 0.9–0.97）。だがそれは<b>「既往のない集団」のデータ</b>で、<b>特発性VTE既往例で経皮なら安全とする質の高いRCTは存在しない</b>。GLはVTE既往を経路を問わず禁忌/慎重投与。子宮温存例ではE単独で内膜保護もない。<span class="bias">「経皮なら安全」アンカリング／一般集団データの不当外挿</span></p>
      <p><b>D. 経口結合型エストロゲン（CEE単独）</b> — ①子宮ありにE単独は子宮内膜癌リスク、②経口CEEはVTE・脳卒中が最も高い経路の一つ（Vinogradova CEE+MPA 2.10）。<span class="bias">二重の見落とし（子宮＋VTE）</span></p>
      <p><b>E. 経皮E＋プロゲスチン併用（最も巧妙な誤答）</b> — 内膜保護と経路（経皮＝中立）を一見クリアするが、<b>特発性VTE既往の禁忌は解除されない</b>。プロゲスチン選択でVTEが上がる場合も（ESTHER：ノルプレグナン系 OR 3.9）。<span class="bias">合成バイアス（対策の積み上げで禁忌を回避できるという誤った安心）</span></p>`,
      guideline:[
        "<b>(1) 適応と禁忌</b>：適応＝中等度〜重度のVMS・GSM・早発卵巣不全・骨粗鬆症予防（他剤不適時）。禁忌＝<b>VTE/肺塞栓の既往・活動性、エストロゲン依存性腫瘍（乳癌・子宮内膜癌）、原因不明の性器出血、活動性肝疾患、冠動脈疾患/脳卒中既往、妊娠</b>。本例は特発性VTE既往に該当。",
        "<b>(2) 投与経路とVTEリスク（図）</b>：経口CEE+MPAが最高（aOR 2.10）、経皮は中立（aOR 0.93）。だが<b>既往例では中立性が禁忌を解除しない</b>。",
        "<b>(3) timing仮説</b>：ELITEは経口エストラジオールが閉経&lt;6年で開始するとCIMT（頸動脈内膜中膜厚）の進展を抑制（≥10年で無効）。WHI 18年（Manson 2017, PMID 28898378）も50–59歳開始で死亡良好。<b>ただし禁忌のない患者に限る</b>。本例はtiming条件を満たすがVTE既往が優先。",
        "<b>(4) 子宮の有無とプロゲスチン</b>：子宮あり→エストロゲン＋プロゲスチン併用が必須（子宮内膜癌の予防）。子宮摘出後→エストロゲン単独可。",
        "<b>(5) 非ホルモン薬（NAMS 2023 Level I）</b>：SSRI（パロキセチン7.5mgは米国唯一のVMS適応薬）・SNRI（ベンラファキシン）・ガバペンチン（夜間・睡眠）・NK3拮抗薬フェゾリネタント（SKYLIGHTで12週VMS頻度 約−2.5、肝機能モニタ）。",
        "<b>(6) 乳癌サバイバーとSSRIの選び方 ─ タモキシフェンとの相互作用（重要）</b>：<b>タモキシフェン</b>はエストロゲン受容体（ER）陽性乳癌の術後補助療法・予防に使う抗エストロゲン薬で、それ自体は効果の弱い<b>プロドラッグ</b>。肝の酵素<b>CYP2D6</b>で活性代謝物<b>エンドキシフェン</b>に変換されてはじめて十分に効く。<b>パロキセチン（およびフルオキセチン）は強力なCYP2D6阻害薬</b>で、併用するとエンドキシフェンが低下し<b>タモキシフェンの抗腫瘍効果が弱まる</b>おそれがある（パロキセチン併用が乳癌死の増加と関連した観察研究：Kelly 2010 BMJ／エンドキシフェン低下の機序：Stearns 2003）。乳癌サバイバーはHRTが使えずVMSにSSRI/SNRIを用いることが多いため、<b>タモキシフェン服用者では強いCYP2D6阻害薬（パロキセチン・フルオキセチン）を避け、CYP2D6阻害の弱いSSRI（エスシタロプラム・シタロプラム）やSNRI（ベンラファキシン）を選ぶ</b>。※本症例は乳癌もタモキシフェンもなく該当しないが、VMSにSSRIを使う際の基本的な注意点。"
      ],
      points:[
        "<b>特発性VTE既往は全身HRTの禁忌</b>。経口・経皮を問わずVMS目的の全身HRT開始を正当化しない。",
        "<b>「経皮＝VTE中立」のエビデンスは“既往のない集団”由来</b>。リスク中立≠禁忌の解除。",
        "<b>子宮ありにE単独は禁忌（子宮内膜癌）</b>→プロゲスチン併用必須（子宮摘出後はE単独可）。",
        "<b>経腟（局所）エストロゲンはGSM専用で全身VMSには無効</b>。",
        "<b>HRT禁忌・忌避患者のVMS第一選択は非ホルモン療法（SSRI/SNRI）</b>（NAMS Level I）。",
        "<b>timing仮説</b>はHRTを正当化しうるが<b>禁忌がない患者に限る</b>。",
        "<b>タモキシフェン（ER陽性乳癌の抗エストロゲン薬）はCYP2D6で活性体エンドキシフェンに変換される</b>プロドラッグ。パロキセチン等の強いCYP2D6阻害薬は効果を減弱させうるため、タモキシフェン服用者のVMSには<b>弱いCYP2D6阻害のSSRI（エスシタロプラム）やSNRI（ベンラファキシン）</b>を選ぶ。"
      ],
      refs:[
        "Rossouw JE, et al. Estrogen plus progestin in healthy postmenopausal women (WHI). JAMA. 2002;288(3):321-333. (PMID 12117397)",
        "Anderson GL, et al. CEE in postmenopausal women with hysterectomy (WHI). JAMA. 2004;291(14):1701-1712. (PMID 15082697)",
        "Manson JE, et al. MHT and long-term mortality (WHI). JAMA. 2017;318(10):927-938. (PMID 28898378)",
        "Canonico M, et al. Route of estrogen and VTE (ESTHER). Circulation. 2007;115(7):840-845. (PMID 17309934)",
        "Vinogradova Y, et al. HRT and VTE: nested case-control. BMJ. 2019;364:k4810. (PMID 30626577)",
        "Rovinski D, et al. Oral vs non-oral HRT and VTE: SR/MA. Thromb Res. 2018;168:83-95. (PMID 29936403)",
        "Hodis HN, et al. Early vs late postmenopausal estradiol (ELITE). N Engl J Med. 2016;374(13):1221-1231. (PMID 27028912)",
        "Simon JA, et al. Low-dose paroxetine 7.5 mg for VMS. Menopause. 2013;20(10):1027-1035. (PMID 24045678)",
        "Lederman S, et al. Fezolinetant for VMS (SKYLIGHT 1). Lancet. 2023;401(10382):1091-1102. (PMID 36924778)",
        "The 2023 nonhormone therapy position statement of NAMS. Menopause. 2023;30(6):573-590. (PMID 37252752)",
        "Kelly CM, et al. Selective serotonin reuptake inhibitors and breast cancer mortality in women receiving tamoxifen: population based cohort study. BMJ. 2010;340:c693. (PMID 20142325)",
        "Stearns V, et al. Active tamoxifen metabolite plasma concentrations after coadministration of tamoxifen and paroxetine. J Natl Cancer Inst. 2003;95(23):1758-1764. (PMID 14652237)"
      ]
    }
  },
  /* ===================== Q4 (set1) ===================== */
  {
    dom:"小児・思春期", domEn:"PEDIATRICS", category:"小児・思春期", setId:"set1",
    title:"脾摘後の肺炎球菌予防に最適なワクチン",
    meta:"4 F · 診療所 · 遺伝性球状赤血球症で1年前に脾摘 · 脾摘後の肺炎球菌予防",
    stem:`あなたは小児も診療する診療所に勤務している。4歳女児。乳児期から遺伝性球状赤血球症による貧血と黄疸を繰り返し、1年前（3歳時）に待機的脾摘術を受けた。術後は溶血が改善し、元気に保育園へ通っている。定期予防接種は月齢どおりに完了し、13価肺炎球菌結合型ワクチン（PCV13、プレベナー13®）も計4回接種済みである。発熱時の抗菌薬について指導は受けているが、脾摘後に追加すべきワクチンの説明は受けていない。体温36.7℃、活気良好で、咽頭発赤や皮疹はなく、腹部に手術瘢痕を認めるが脾は触知しない。脾摘後の重症肺炎球菌感染の予防として最も適切なのはどれか。`,
    options:[
      "接種を行わない",
      "PCV13（プレベナー13®）の再接種",
      "PPSV23（ニューモバックスNP®）の接種",
      "PCV13（プレベナー13®）の毎年接種",
      "PCV13（プレベナー13®）とPPSV23（ニューモバックスNP®）の同時接種"
    ],
    answer:2,
    explain:{
      core:`<p><b>無脾症＝莢膜形成菌（肺炎球菌・髄膜炎菌・Hib）による電撃的敗血症（OPSI）の最高リスク群</b>。脾臓は莢膜多糖体への抗体産生・IgM記憶B細胞・補体/オプソニン・血流中細菌の濾過を担い、これを失うと肺炎球菌を筆頭にOPSIの生涯リスクを負う（数時間で敗血症・DICへ進展、致死率が高い）。</p>
      <p><b>なぜPPSV23の「上乗せ」が正答か</b>：結合型（PCV）はT細胞<b>依存性</b>で免疫記憶・ブースターを作り2歳未満でも有効、多糖体（PPSV23）はT細胞<b>非依存性</b>で記憶に乏しいが<b>PCV非含有の血清型を広くカバー</b>。戦略は「<b>まず結合型で記憶を作り、≥2歳でPPSV23を上乗せ</b>」。本児はPCV13完了済→必要なのは“再接種”でなく<b>未接種のPPSV23を≥8週あけて追加</b>（ACIP）。よって <b>C が正答</b>。</p>
      <table>
      <thead>
      <tr class="header">
      <th>特性</th>
      <th>PCV13（結合型・プレベナー13®）</th>
      <th>PPSV23（多糖体・ニューモバックスNP®）</th>
      </tr>
      </thead>
      <tbody>
      <tr class="odd">
      <td>免疫の型</td>
      <td>T細胞<b>依存性</b>（記憶・ブースター）</td>
      <td>T細胞<b>非依存性</b>（記憶に乏しい）</td>
      </tr>
      <tr class="even">
      <td>2歳未満の有効性</td>
      <td>あり</td>
      <td>乏しい</td>
      </tr>
      <tr class="odd">
      <td>カバー血清型</td>
      <td>13</td>
      <td>23（PCV非含有の重要型を追加）</td>
      </tr>
      <tr class="even">
      <td>反復接種</td>
      <td>ブースター可</td>
      <td>反復で低応答の懸念</td>
      </tr>
      </tbody>
      </table>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="320" fill="#0d0f12"/>
<text x="450" y="30" text-anchor="middle" font-size="20" font-weight="700" fill="#e9eaee">脾摘後（無脾症）OPSI予防の包括戦略</text>
<rect x="40" y="48" width="300" height="66" rx="10" fill="#15132a" stroke="#7c6cff" stroke-width="1.5"/><text x="190" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#b1a6ff">結合型 PCV（記憶・ブースター）</text><text x="190" y="98" text-anchor="middle" font-size="12.5" fill="#8a8e99">本児は接種済</text>
<text x="430" y="74" text-anchor="middle" font-size="13" fill="#c8cad3">≥8週</text><text x="430" y="96" text-anchor="middle" font-size="20" fill="#5a5f6d">→</text>
<rect x="520" y="48" width="340" height="66" rx="10" fill="#0f231c" stroke="#34d399" stroke-width="2"/><text x="690" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#34d399">多糖体 PPSV23（血清型を拡大）</text><text x="690" y="98" text-anchor="middle" font-size="12.5" fill="#c8cad3">本児はここを追加（正答C）</text>
<text x="450" y="150" text-anchor="middle" font-size="14.5" font-weight="700" fill="#e9eaee">OPSI予防の3本柱</text>
<rect x="20" y="166" width="278" height="134" rx="10" fill="#15132a" stroke="#7c6cff" stroke-width="1.5"/><text x="159" y="194" text-anchor="middle" font-size="14" font-weight="700" fill="#b1a6ff">① ワクチン束</text><text x="36" y="220" font-size="12.5" fill="#c8cad3">肺炎球菌（PCV→PPSV23）</text><text x="36" y="242" font-size="12.5" fill="#c8cad3">髄膜炎菌ACWY/B・Hib</text><text x="36" y="264" font-size="12.5" fill="#c8cad3">年次インフルエンザ</text>
<rect x="311" y="166" width="278" height="134" rx="10" fill="#231c10" stroke="#fbbf24" stroke-width="1.5"/><text x="450" y="194" text-anchor="middle" font-size="14" font-weight="700" fill="#fbbf24">② 予防的抗菌薬</text><text x="327" y="220" font-size="12.5" fill="#c8cad3">ペニシリン系</text><text x="327" y="242" font-size="12.5" fill="#c8cad3">（小児はアモキシシリン）</text><text x="327" y="264" font-size="12.5" fill="#c8cad3">5歳未満・術後早期で特に</text>
<rect x="602" y="166" width="278" height="134" rx="10" fill="#241318" stroke="#fb7185" stroke-width="1.5"/><text x="741" y="194" text-anchor="middle" font-size="14" font-weight="700" fill="#fb7185">③ 発熱時＋教育</text><text x="618" y="220" font-size="12.5" fill="#c8cad3">stand-by抗菌薬を即内服し受診</text><text x="618" y="242" font-size="12.5" fill="#c8cad3">メディカルアラート携行</text><text x="618" y="264" font-size="12.5" fill="#c8cad3">動物咬傷・渡航の注意</text>
</svg><figcaption>図. 無脾症ではPCV（記憶）→≥8週→PPSV23（血清型拡大）の逐次接種に加え、ワクチン束・予防的抗菌薬・発熱時の早期対応＋教育の3本柱でOPSIを防ぐ。</figcaption></figure>`,
      evidence:[
        {src:"ACIP小児（中核）：Nuorti & Whitney, MMWR 2010",pmid:"21150868",point:"基礎疾患児に<b>全PCV完了後にPPSV23</b>。無脾症は高リスク"},
        {src:"ACIP接種間隔：Kobayashi, MMWR 2015",pmid:"26334788",point:"PCVとPPSV23の<b>間隔≥8週</b>・順序。同時接種は非推奨"},
        {src:"IDSA免疫不全宿主：Rubin, CID 2014",pmid:"24311479",point:"無脾に肺炎球菌(PCV→PPSV23)・髄膜炎菌・Hib・年次インフル"},
        {src:"英国無脾症GL（BCSH）：Davies, 2011",pmid:"21988145",point:"ワクチン束＋<b>予防内服</b>＋発熱時early antibiotics＋教育"},
        {src:"OPSI疫学：Bisharat, 2001",pmid:"11798256",point:"脾摘後 感染 <b>3.2%</b>・死亡 <b>1.4%</b>、小児で高い"},
        {src:"OPSI致死率：Goede, 2013",pmid:"23454566",point:"発症OPSIの<b>致死率30〜60%</b>"},
        {src:"多糖体の低応答：Bröker, 2010",pmid:"20188306",point:"多糖体反復の <b>hyporesponsiveness</b>。結合型を優先"},
        {src:"結合型が部分補償：Al-Mazrou, 2012",pmid:"22552602",point:"逐次戦略・間隔の理論的支持"}
      ],
      distractors:`<p><b>A. 接種しない</b> — 無脾症はOPSI最高リスク。PCV13完了だけではPCV非含有血清型に無防備。致死的だが低頻度のイベントを過小評価。<span class="bias">正常性バイアス</span><span class="bias">確率無視</span></p>
      <p><b>B. PCV13再接種</b> — 同一結合型の再接種では追加血清型カバーが得られない。不足は<b>多糖体による血清型拡大</b>。<span class="bias">アンカリング</span></p>
      <p><b>D. PCV13毎年接種</b> — PCVは毎年接種するワクチンでない（年次はインフル）。結合型は記憶を作りルーチン反復不要。<span class="bias">誤った類推</span></p>
      <p><b>E. PCV13とPPSV23の同時接種</b> — 高リスク小児はPCV→PPSV23を<b>≥8週あけて逐次</b>。同時/近接は多糖体側の応答が減弱しうる。<span class="bias">premature closure</span></p>`,
      guideline:[
        "<b>(1) 包括的予防（図）</b>：OPSI予防は<b>(A) ワクチン束（肺炎球菌＋髄膜炎菌ACWY/B＋Hib＋年次インフル）、(B) 予防的抗菌薬、(C) 発熱時の早期対応・患者教育</b>の総合戦略。",
        "<b>(2) 予防的抗菌薬</b>：ペニシリン系（小児はアモキシシリン／ペニシリンV）。術後早期・5歳未満でリスクが高い。本児（4歳・術後1年）は<b>継続が強く支持</b>される。",
        "<b>(3) 発熱時early antibiotics＋教育</b>：無脾の発熱は緊急。<b>携行の経口抗菌薬（stand-by）を直ちに内服し受診</b>。メディカルアラート携行、動物咬傷（Capnocytophaga）・渡航マラリア/バベシアの説明。",
        "<b>(4) 脾摘の時期とワクチン</b>：待機的脾摘は手術<b>≥2週前</b>に接種する。本児は術後1年経過＝現在の課題は未完のPPSV23（ニューモバックスNP®）を適切な間隔で追加すること。",
        "<b>(5) 日本の実情</b>：PPSV23（ニューモバックスNP®）は電子添文で<b>「脾摘した人における肺炎球菌による感染症の発症予防」</b>が効能・効果に明記され、再接種は前回接種から<b>5年以上</b>あける（5年以内の再接種は副反応が強く出やすい）。なお日本感染症学会「6〜64歳ハイリスク者への肺炎球菌ワクチン接種の考え方」も無脾症等を高リスクとする。自治体助成の細目は地域差あり。"
      ],
      points:[],
      refs:[
        "Nuorti JP, Whitney CG. Prevention of pneumococcal disease among infants and children — PCV13/PPSV23: ACIP. MMWR Recomm Rep. 2010;59(RR-11):1-18. (PMID 21150868)",
        "Kobayashi M, et al. Intervals between PCV13 and PPSV23: ACIP. MMWR. 2015;64(34):944-947. (PMID 26334788)",
        "Rubin LG, et al. 2013 IDSA guideline for vaccination of the immunocompromised host. Clin Infect Dis. 2014;58(3):e44-100. (PMID 24311479)",
        "Davies JM, et al. Prevention and treatment of infection in patients with an absent/dysfunctional spleen. Br J Haematol. 2011;155(3):308-317. (PMID 21988145)",
        "Bisharat N, et al. Risk of infection and death among post-splenectomy patients. J Infect. 2001;43(3):182-186. (PMID 11798256)",
        "Goede JS, Siciliano DR. Splenectomised patients. Ther Umsch. 2013;70(3):185-188. (PMID 23454566)",
        "Bröker M, Veitch K. Meningococcal vaccines: hyporesponsiveness. Travel Med Infect Dis. 2010;8(1):47-50. (PMID 20188306)",
        "Al-Mazrou Y, et al. Immunogenicity after polysaccharide priming. Clin Vaccine Immunol. 2012;19(7):999-1004. (PMID 22552602)"
      ]
    }
  },
  /* ===================== Q5 (set1) ===================== */
  {
    dom:"高齢者（多剤併用）", domEn:"POLYPHARMACY", category:"老年医学", setId:"set1",
    title:"まず中止すべき薬剤はどれか",
    meta:"84 F · 在宅 · 夜間徘徊・つじつま合わず・1か月で2回転倒 · 多剤併用",
    stem:`あなたは在宅医療を行う診療所に勤務している。84歳女性。独居で、最近『夜間に家の中を歩き回り、つじつまの合わないことを言う』と娘が心配して連れて来た。この1か月で2回転倒している。高血圧でアムロジピン、不眠で数年来ロラゼパムとゾルピデム、過活動膀胱でオキシブチニン、胃部不快感で開始されたオメプラゾールを長期に内服している。新たな発熱・脱水や感染徴候はない。体温36.5℃、血圧134/78mmHg、起立性低血圧はなく、口腔内の乾燥を認める。改訂長谷川式スケール22点。神経学的な局所所見はない。血算・電解質・腎機能・血糖・甲状腺機能・尿検査に異常はなく、せん妄の身体的原因は乏しい。まず中止すべき薬剤はどれか。`,
    options:[
      "アムロジピン",
      "オキシブチニン",
      "オメプラゾール",
      "ゾルピデム",
      "ロラゼパム"
    ],
    answer:1,
    explain:{
      core:`<p>「<b>抗コリン薬の毒性＋ポリファーマシー＋処方カスケード</b>」の典型。過活動膀胱への<b>オキシブチニン</b>（中枢移行性の高い第3級アミン抗コリン薬）が、せん妄様言動・認知機能低下・転倒の最も是正可能な原因。</p>
      <p>「まず中止すべき」＝<b>〈害への寄与の大きさ〉×〈直ちに・安全に（離脱なく）中止できるか〉</b>の積を最大化する薬剤。 - <b>害</b>：オキシブチニンは中枢移行が高く、せん妄・認知低下・口渇・便秘・尿閉。膀胱抗ムスカリン薬は用量依存的に認知症リスクを上げるクラス（Gray 2015、Coupland 2019）。Beers 2023・STOPP/START v3・国内STOPP-Jいずれも、認知機能障害・せん妄・転倒で抗コリン薬を回避。 - <b>中止の安全性</b>：オキシブチニンは<b>身体依存・離脱を作らない</b>＝即時に安全中止可。過活動膀胱は致死的緊急でなく、代替（β3作動薬ミラベグロン・膀胱訓練）がある。 - <b>対照的に</b>：<b>ロラゼパム（E）</b>＝長期連用ベンゾの急中止は離脱（痙攣・せん妄）を誘発→<b>漸減</b>で「即中止」でない。<b>ゾルピデム（D）</b>もZ薬で依存・離脱があり漸減。<b>アムロジピン（A）</b>＝OHなくせん妄/転倒の主因でない。<b>オメプラゾール（C）</b>＝緊急原因でなく漫然投与の見直し対象。</p>
      <p>→ 「害が大きく、かつ離脱なく今すぐ安全に止められる」唯一が <b>B. オキシブチニン</b>（図）。</p>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="360" fill="#0d0f12"/>
<text x="450" y="30" text-anchor="middle" font-size="18" font-weight="700" fill="#e9eaee">「まず中止すべき薬剤」＝ 害の大きさ × 今すぐ安全に止められるか</text>
<line x1="140" y1="320" x2="860" y2="320" stroke="#2a2e38" stroke-width="1.5"/>
<line x1="140" y1="62" x2="140" y2="320" stroke="#2a2e38" stroke-width="1.5"/>
<text x="500" y="346" text-anchor="middle" font-size="12.5" fill="#8a8e99">中止の安全性・即時性（離脱なく今すぐ止められる）→</text>
<text x="150" y="56" font-size="12.5" fill="#8a8e99">↑ 害への寄与（せん妄・転倒）</text>
<line x1="500" y1="64" x2="500" y2="320" stroke="#1c1f26" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="140" y1="195" x2="860" y2="195" stroke="#1c1f26" stroke-width="1" stroke-dasharray="4 4"/>
<circle cx="775" cy="112" r="11" fill="none" stroke="#34d399" stroke-width="2"/><circle cx="775" cy="112" r="6" fill="#34d399"/><text x="755" y="106" text-anchor="end" font-size="13.5" font-weight="700" fill="#34d399">B オキシブチニン</text><text x="755" y="124" text-anchor="end" font-size="11.5" fill="#34d399">→ 第一に中止（害大・即時安全）</text>
<circle cx="250" cy="118" r="8" fill="#fb7185"/><text x="266" y="114" font-size="13" fill="#e7b4bd">E ロラゼパム</text><text x="266" y="132" font-size="11.5" fill="#8a8e99">害大／急中止は離脱→漸減</text>
<circle cx="330" cy="168" r="8" fill="#fb7185"/><text x="346" y="172" font-size="13" fill="#e7b4bd">D ゾルピデム（漸減）</text>
<circle cx="760" cy="268" r="8" fill="#7c6cff"/><text x="760" y="252" text-anchor="middle" font-size="13" fill="#c8cad3">A アムロジピン</text>
<circle cx="455" cy="280" r="8" fill="#7c6cff"/><text x="455" y="264" text-anchor="middle" font-size="13" fill="#c8cad3">C オメプラゾール</text>
</svg><figcaption>図. 「まず中止」は〈害の大きさ〉×〈離脱なく今すぐ安全に止められるか〉で決まる。Bオキシブチニンは害が大きく即時中止が安全＝第一手。E・Dは害が大きくても漸減が必要。</figcaption></figure>`,
      evidence:[
        {src:"AGS Beers Criteria 2023",pmid:"37139824",point:"抗コリン薬・ベンゾ・Z薬を<b>回避すべきPIM</b>（せん妄・認知・転倒で特に）"},
        {src:"STOPP/START v3（O'Mahony, 2023）",pmid:"37256475",point:"190項目。抗コリン負荷・ベンゾ/Z薬・転倒リスク薬を体系的にPIM化"},
        {src:"STOPP-J/日本老年医学会GL2015（Kojima, 2016）",pmid:"27594406",point:"抗コリン薬・三環系・第1世代抗ヒ薬・ベンゾ/Z薬・過活動膀胱抗コリン薬を収載"},
        {src:"Gray 2015",pmid:"25621434",point:"抗コリン累積曝露と認知症の用量反応。最高曝露で <b>HR 1.54（1.21–1.96）</b>"},
        {src:"Coupland 2019",pmid:"31233095",point:"強抗コリン薬で認知症 <b>OR 1.49（1.44–1.54）</b>、<b>膀胱抗ムスカリン薬 AOR 1.65</b>"},
        {src:"EMPOWER（Tannenbaum, 2014）",pmid:"24733354",rct:true,pico:{p:"地域在住の長期ベンゾ使用高齢者 303例（65〜95歳、30薬局のクラスタRCT）",i:"患者向け脱処方教育（危険性説明＋段階的減量プロトコルの直接配布）",c:"通常ケア（待機リスト対照）",o:"6か月のベンゾ中止率 介入27% vs 対照5%（リスク差23%、95%CI 14〜32%）。加えて11%が減量達成",nnt:"中止 約4〜5（6か月・リスク差23%。抄録もNNT＝4と明記）",caveat:"中止判定は薬局調剤記録ベース、薬局単位のクラスタ割付で追跡6か月と短く、長期の再開や転帰は不明。"},point:"患者教育で6か月<b>ベンゾ中止 27% vs 5%</b>、NNT=4"},
        {src:"BZRA脱処方GL（Pottie, 2018）",pmid:"29760253",point:"<b>65歳以上はベンゾ/Z薬を「ゆっくり漸減」</b>して脱処方"},
        {src:"Z薬と骨折（Richardson, 2021）",pmid:"33410736",point:"認知症高齢者でZ薬→骨折 <b>HR 1.40（1.01–1.94）</b>"},
        {src:"STOPPFall（Seppala, 2021）",pmid:"33349863",point:"ロラゼパム・ゾルピデム・オキシブチニンは全て転倒リスク薬（FRIDs）"},
        {src:"PPI脱処方GL（Farrell, 2017）",pmid:"28500192",point:"軽症GERD奏効例はPPIを減量/中止/オンデマンド化"},
        {src:"OAB ミラベグロン vs 抗ムスカリン（Vecchioli, 2016）",pmid:"27092789",rct:true,pico:{p:"過活動膀胱の女性 80例（各40、単盲検RCT）",i:"ミラベグロン50mg 1日1回 12週",c:"ソリフェナシン5mg 1日1回 12週",o:"両薬ともOABSSと蓄尿機能を改善。ミラベグロンは忍容性良好で中止例が少ない。ソリフェナシンは排尿筋圧を低下させ残尿が増加",nnt:"該当なし（連続値の症状・尿流動態指標で、抄録に二値の絶対リスク差の記載がなく概算不能）",caveat:"小規模（80例）・単盲検・12週と短期。症状スコアの群間差の具体数値が抄録になく効果量の評価が困難。"},point:"有効性同等・ミラベグロンは忍容性良好"}
      ],
      distractors:`<p><b>A. アムロジピン</b> — OHなくCa拮抗薬はせん妄/転倒の主因でない。降圧の便益が大きく中止優先度は低い。<span class="bias">アンカリング</span></p>
      <p><b>C. オメプラゾール</b> — 急性せん妄/転倒の原因でない。長期PPIは計画的脱処方対象だが緊急性なし。<span class="bias">可用性ヒューリスティック</span></p>
      <p><b>D. ゾルピデム</b> — Z薬は常用量依存・離脱・骨折リスク薬。最終的に中止対象だが<b>漸減が原則</b>で「即時中止の第一手」でない。<span class="bias">代理/置換の誤り</span></p>
      <p><b>E. ロラゼパム</b> — 害は大きいが、<b>長期連用ベンゾの急中止は離脱（痙攣・せん妄）を惹起</b>。正しくは<b>slow taper</b>。「主犯だから即全止」は誤り。<span class="bias">アクションバイアス</span></p>
      <p><b>設問の罠はE</b>。「最も害が大きいから即中止」と選ばせる引力が強いが、臨床的に正しいのは「Eは即中止せず漸減開始、いま安全に即止められて害是正効果が大きいBを第一手で中止」。「害の大きさ」と「中止の安全性・即時性」を分けて評価できるかを問う。</p>`,
      guideline:[
        "<b>(1) PIMsの三本柱＋日本版</b>：AGS Beers 2023（米）、STOPP/START v3（欧、190項目）、<b>日本老年医学会GL2015＝STOPP-J</b>。本症例のB・D・Eはいずれも国内GL上の「特に慎重投与」対象。",
        "<b>(2) 抗コリン負荷</b>：累積曝露と認知症の用量反応（Gray HR 1.54／Coupland OR 1.49、膀胱抗ムスカリン薬 AOR 1.65）。総抗コリン負荷を下げる＝オキシブチニン除去が最大の一手。",
        "<b>(3) 転倒リスク薬（FRIDs）</b>：本症例のロラゼパム・ゾルピデム・オキシブチニンは全てFRIDs（STOPPFall）。",
        "<b>(4) ベンゾ/Z薬の脱処方と離脱</b>：漸減で中止率改善・重大有害事象なし（EMPOWER NNT=4）。<b>急中止は離脱（痙攣・せん妄）</b>＝「即中止」してはならない理由（Pottie 2018）。Z薬は骨折リスク（Richardson 2021）。",
        "<b>(5) 代替治療を準備</b>：不眠＝CBT-I/オレキシン受容体拮抗薬（レンボレキサント/スボレキサント）、OAB＝ミラベグロン/膀胱訓練。出口戦略があると漸減が成功しやすい。"
      ],
      points:[],
      refs:[
        "2023 AGS Beers Criteria Update Expert Panel. AGS 2023 updated Beers Criteria. J Am Geriatr Soc. 2023;71(7):2052-2081. (PMID 37139824)",
        "O'Mahony D, et al. STOPP/START criteria version 3. Eur Geriatr Med. 2023;14(4):625-632. (PMID 37256475)",
        "Kojima T, et al. STOPP-J / Japanese guideline. Geriatr Gerontol Int. 2016;16(9):983-1001. (PMID 27594406)",
        "Gray SL, et al. Cumulative anticholinergics and incident dementia. JAMA Intern Med. 2015;175(3):401-407. (PMID 25621434)",
        "Coupland CAC, et al. Anticholinergic exposure and dementia. JAMA Intern Med. 2019;179(8):1084-1093. (PMID 31233095)",
        "Tannenbaum C, et al. Reduction of inappropriate benzodiazepines (EMPOWER). JAMA Intern Med. 2014;174(6):890-898. (PMID 24733354)",
        "Pottie K, et al. Deprescribing benzodiazepine receptor agonists: guideline. Can Fam Physician. 2018;64(5):339-351. (PMID 29760253)",
        "Richardson K, et al. Z-drug use in people with dementia and fracture. Health Technol Assess. 2021;25(1):1-202. (PMID 33410736)",
        "Seppala LJ, et al. STOPPFall. Age Ageing. 2021;50(4):1189-1199. (PMID 33349863)",
        "Farrell B, et al. Deprescribing proton pump inhibitors: guideline. Can Fam Physician. 2017;63(5):354-364. (PMID 28500192)",
        "Vecchioli Scaldazza C, Morosetti C. Solifenacin vs mirabegron in OAB. Urol Int. 2016;97(3):325-329. (PMID 27092789)"
      ]
    }
  },
  /* ===================== Q6 ===================== */
  {
    dom:"メンタルヘルス", domEn:"MENTAL", category:"精神・行動医学", setId:"set2",
    title:"最も適切な対応はどれか",
    meta:"62 F · 外来 · 双極I型でリチウム長期 · 偶発的高Ca",
    stem:`あなたは診療所で外来を担当している。62歳女性。数か月前からの倦怠感・口渇・多尿で受診。健診の血液検査で高カルシウム血症を指摘された。食欲は保たれ、体重減少・骨痛・便秘はない。既往に双極I型障害（14年前発症）・脂質異常症・高血圧・2型糖尿病があり、炭酸リチウム・アトルバスタチン・アムロジピン・メトホルミンを長年内服している。気分は安定している。血圧132/78mmHg、脈拍72/分。頸部腫瘤は触知せず、身体所見に明らかな異常はない。血液検査で補正Ca 11.4mg/dL（6か月前は10.2）、P 2.4mg/dL、25(OH)D充足、eGFR 52mL/分/1.73m²（5年前78）、TSH 7.4μU/mL（FT4正常下限）、intact PTH 78pg/mL、リチウム血中濃度0.8mEq/L（治療域内）。`,
    options:[
      "リチウムを中止する",
      "悪性腫瘍を検索する",
      "補液して経過観察する",
      "副甲状腺を摘出する",
      "ビスホスホネートを投与する"
    ],
    answer:0,
    explain:{
      core:`<p>本例の鍵は「<b>高Caに対してintact PTHが抑制されていない（78pg/mL）＝PTH依存性高Ca血症</b>」。これは<b>副甲状腺機能亢進症</b>を意味し、悪性腫瘍に伴う高Ca血症（PTHrP介在性でPTHは抑制）ではない。リチウムはカルシウム感知受容体（CaSR）のセットポイントを上げ、高Caでもなお副甲状腺ホルモン分泌が抑制されにくくなるため、<b>リチウム関連副甲状腺機能亢進症</b>を生じる（治療中の有病率は約4%で一般集団0.5%より高い）。</p>
      <p>本例は副甲状腺だけでなく、<b>eGFRの緩徐低下（CKD）・多尿/希釈尿（腎性尿崩症）・TSH上昇（甲状腺機能低下）</b>も呈し、長期リチウムの<b>腎・甲状腺・副甲状腺の3系統</b>に及ぶ毒性を示す。したがって最も適切な対応は、<b>原因であるリチウムを中止（精神科と連携して他の気分安定薬へ変更）</b>すること。自己中断はさせず計画的に行い、リチウム関連は<b>多腺性が約半数</b>のため内分泌評価・シナカルセト等も並行する（中止そのもののCa改善効果は不確実）。</p>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 384" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="384" fill="#0d0f12"/>
<text x="450" y="34" text-anchor="middle" font-size="20" font-weight="700" fill="#e9eaee">長期リチウムの3つの臓器影響と定期モニタリング</text>
<rect x="20" y="54" width="280" height="140" rx="10" fill="#15132a" stroke="#7c6cff" stroke-width="1.5"/>
<text x="160" y="86" text-anchor="middle" font-size="17" font-weight="700" fill="#b1a6ff">腎</text>
<text x="40" y="114" font-size="14" fill="#c8cad3">・慢性腎臓病（HR 1.93）</text>
<text x="40" y="140" font-size="14" fill="#c8cad3">・eGFR 緩徐低下</text>
<text x="40" y="166" font-size="14" fill="#c8cad3">・腎性尿崩症 → 多尿・口渇</text>
<text x="40" y="187" font-size="13" fill="#8b7bff">監視：eGFR</text>
<rect x="310" y="54" width="280" height="140" rx="10" fill="#231c10" stroke="#fbbf24" stroke-width="1.5"/>
<text x="450" y="86" text-anchor="middle" font-size="17" font-weight="700" fill="#fbbf24">甲状腺</text>
<text x="330" y="114" font-size="14" fill="#c8cad3">・機能低下（HR 2.31）</text>
<text x="330" y="140" font-size="14" fill="#c8cad3">・TSH 上昇</text>
<text x="330" y="166" font-size="14" fill="#c8cad3">（亢進は増えない）</text>
<text x="330" y="187" font-size="13" fill="#fbbf24">監視：TSH</text>
<rect x="600" y="54" width="280" height="140" rx="10" fill="#241318" stroke="#fb7185" stroke-width="1.5"/>
<text x="740" y="86" text-anchor="middle" font-size="17" font-weight="700" fill="#fb7185">副甲状腺</text>
<text x="620" y="114" font-size="14" fill="#c8cad3">・高Ca／機能亢進</text>
<text x="620" y="140" font-size="14" fill="#c8cad3">・PTH が高Caでも非抑制</text>
<text x="620" y="166" font-size="14" fill="#c8cad3">・多腺性が約半数</text>
<text x="620" y="187" font-size="13" fill="#fb7185">監視：補正Ca→高ければPTH</text>
<rect x="20" y="208" width="860" height="62" rx="10" fill="#0f231c" stroke="#34d399" stroke-width="1.5"/>
<text x="450" y="234" text-anchor="middle" font-size="15" font-weight="700" fill="#34d399">定期モニタリング：ベースライン＋6〜12か月毎に eGFR・TSH・補正Ca（高Ca時は intact PTH 追加）</text>
<text x="450" y="257" text-anchor="middle" font-size="13.5" fill="#c8cad3">リスク：60歳未満女性・中央値超の濃度・長期使用。ただし早期にも出現しうる（Shine 2015）</text>
<rect x="20" y="284" width="860" height="92" rx="10" fill="#13161b" stroke="#2a2e38" stroke-width="1.5"/>
<text x="450" y="310" text-anchor="middle" font-size="15.5" font-weight="700" fill="#e9eaee">高Ca血症の解釈：まず PTH を見る</text>
<text x="40" y="335" font-size="13.5" fill="#34d399">PTH が高Caでも非抑制 ＝ PTH依存性 → 副甲状腺機能亢進症（リチウム関連／原発性）</text>
<text x="40" y="357" font-size="13.5" fill="#fb7185">PTH が抑制（低値）＝ PTH非依存性 → 悪性腫瘍（PTHrP）・ビタミンD中毒などを検索</text>
<text x="40" y="374" font-size="12.8" fill="#8a8e99">本例：Ca 11.4 で PTH 78（非抑制）＝ PTH依存性。腫瘍検索を最優先する状況ではない</text>
</svg><figcaption>図. 長期リチウムは腎（CKD・腎性尿崩症）・甲状腺（機能低下）・副甲状腺（高Ca/機能亢進）に影響。高Caはまず intact PTH で層別化する。</figcaption></figure>`,
      evidence:[
        {src:"Shine 2015 (Lancet)",pmid:"26003379",point:"長期リチウムで CKD <b>HR 1.93（1.76–2.12）</b>／甲状腺機能低下 <b>HR 2.31（2.05–2.60）</b>／総Ca上昇 <b>HR 1.43（1.21–1.69）</b>。ベースライン＋定期モニタリングを推奨"},
        {src:"Vandermeulen 2024 (SR/MA)",pmid:"39192574",point:"リチウム関連高Ca 約3〜4%、副甲状腺機能亢進症 約<b>4%（対 健常0.5%）</b>、<b>多腺性51%</b>。手術・シナカルセトが有効、中止の効果は不確実"},
        {src:"McKnight 2012 (Lancet)",pmid:"22265699",point:"慢性曝露は腎・甲状腺・副甲状腺（高Ca）に影響。腎/甲状腺/Caの定期評価を支持"}
      ],
      distractors:`<p><b>悪性腫瘍を検索する</b> — 誤り。悪性腫瘍性高Caは PTHrP介在性で<b>PTHは抑制</b>される。本例はPTH非抑制（78）＝PTH依存性で、体重減少もなく最優先にはならない。<span class="bias">availability（高Ca＝悪性腫瘍）</span></p>
      <p><b>補液して経過観察する</b> — 誤り。6か月で10.2→11.4と持続・進行し、PTHも非抑制で、脱水だけでは説明できない。多尿・希釈尿はむしろリチウムの腎性尿崩症を示唆。<span class="bias">アンカリング</span></p>
      <p><b>副甲状腺を摘出する</b> — 誤り。診断の方向は正しいが、リチウム関連は<b>多腺性が約半数</b>で単腺摘出を前提にできず、内分泌評価・リチウム継続の是非・シナカルセトが先。手術を急ぐのは早計。<span class="bias">早期閉鎖／単腺病変の思い込み</span></p>
      <p><b>ビスホスホネートを投与する</b> — 誤り。原因を評価せず数値だけ下げる対症で、副甲状腺機能亢進症の診断・管理を遅らせる。重度・症候性高Caの急性是正とは状況が異なる。<span class="bias">band-aid bias</span></p>`,
      guideline:[
        "<b>定期モニタリング（Shine 2015）</b>：開始時ベースライン＋6〜12か月毎に 腎機能（eGFR）・甲状腺（TSH）・補正Ca。高Ca時はintact PTHを追加。Ca・PTHは実臨床で測定不足になりやすい。",
        "<b>3系統の臓器影響</b>：腎（CKD・腎性尿崩症による多尿/口渇）、甲状腺（機能低下・TSH上昇）、副甲状腺（高Ca/機能亢進）。",
        "<b>高Ca血症はまずPTHで層別化</b>：高Caで<b>PTH非抑制＝PTH依存性</b>（リチウム関連/原発性）、<b>PTH抑制＝PTH非依存性</b>（悪性腫瘍・ビタミンD中毒など）。",
        "<b>リチウム関連副甲状腺機能亢進症（Vandermeulen 2024）</b>：有病率約4%、<b>多腺性が約半数</b>。内分泌評価のうえシナカルセトや（適応があれば）手術。中止のCa改善効果は不確実で、双極性障害の再発リスクを踏まえ精神科と共同決定。",
        "<b>リチウムの自己中断は避ける</b>：多臓器の毒性があれば精神科と連携して中止/他剤変更を検討するが、計画的に行う。"
      ],
      points:[
        "<b>長期リチウムは腎（eGFR）・甲状腺（TSH）・副甲状腺（Ca）を定期モニタリング</b>（ベースライン＋6〜12か月毎、高Ca時はPTH追加）。",
        "<b>偶発的高Ca＋PTH非抑制＝PTH依存性</b>。まずリチウム関連／原発性副甲状腺機能亢進症を考え、悪性腫瘍（PTH抑制）と短絡しない。",
        "<b>リチウム関連副甲状腺機能亢進症は多腺性が約半数</b>。単腺摘出を前提にせず内分泌評価・シナカルセトを検討。",
        "<b>多臓器毒性があれば精神科と連携してリチウム中止/変更を検討</b>。自己中断はさせない。",
        "腎では<b>CKDの緩徐進行と腎性尿崩症</b>、甲状腺では<b>機能低下</b>に注意。"
      ],
      refs:[
        "Shine B, et al. Long-term effects of lithium on renal, thyroid, and parathyroid function. Lancet. 2015;386(9992):461-468. (PMID 26003379)",
        "Vandermeulen L, et al. Lithium-associated hypercalcemia and hyperparathyroidism: SR/MA. World J Biol Psychiatry. 2024;25(8):417-429. (PMID 39192574)",
        "McKnight RF, et al. Lithium toxicity profile: SR/MA. Lancet. 2012;379(9817):721-728. (PMID 22265699)"
      ]
    }
  },

  /* ===================== Q7 ===================== */
  {
    dom:"急性疾患・救急", domEn:"EMERGENCY", category:"救急・集中治療", setId:"set2",
    title:"次に行う最も適切な対応はどれか",
    meta:"68 M · 救急 · カルベジロール内服 · 筋注×2＋持続静注に不応",
    stem:`あなたは救急外来を担当している。68歳男性。庭仕事中にハチに刺された数分後から全身蕁麻疹・喘鳴・呼吸困難・ふらつきで搬入。慢性心不全でカルベジロールとACE阻害薬を内服。来院後、あなたの指示でアドレナリン0.3〜0.5mg筋注を5分間隔で2回、高流量酸素、仰臥位＋下肢挙上、等張晶質液1,000mLを急速静注2回、さらにアドレナリン持続静注を開始・増量。にもかかわらず BP72/40、心拍122/分、SpO₂90%（リザーバー10L）、意識もうろう、両肺に呼気性喘鳴が持続。咽頭浮腫・吸気性喘鳴はなく気道閉塞の進行なし。`,
    options:[
      "高用量の副腎皮質ステロイドを静注する",
      "アドレナリン1mgを静脈内ボーラスで投与する",
      "グルカゴンを静脈内投与する",
      "抗ヒスタミン薬（H1・H2）を追加する",
      "グルコン酸カルシウムを静注する"
    ],
    answer:2,
    explain:{
      core:`<p>適切な筋注アドレナリンの反復＋十分な輸液に反応しない<b>難治性アナフィラキシー</b>。標準的なエスカレーションであるアドレナリン持続静注は既に開始・増量済みで、なおショックが遷延する点が核心。</p>
      <p>本例は<b>カルベジロール（非選択的β遮断＋α1遮断）</b>を内服し、β受容体が遮断されているためアドレナリンのβ作用（強心・気管支拡張）が発揮されにくく<b>アドレナリン抵抗性</b>となる。<b>グルカゴン</b>はカテコラミンβ受容体を介さずアデニル酸シクラーゼを直接活性化してcAMPを上げるため、β遮断を迂回して陽性変力・変時作用と気管支拡張をもたらす ＝ この状況の<b>次の一手</b>。</p>
      <p>成人では<b>グルカゴン1〜5mgを約5分かけて静注</b>し、必要に応じ5〜15µg/分で持続。嘔吐による誤嚥に注意する。誘因（ハチの針）除去・輸液追加は並行する。</p>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="360" fill="#0d0f12"/>
<text x="450" y="32" text-anchor="middle" font-size="20" font-weight="700" fill="#e9eaee">アナフィラキシー治療のエスカレーション階段</text>
<rect x="30" y="282" width="210" height="52" rx="8" fill="#15132a" stroke="#7c6cff" stroke-width="1.5"/><text x="135" y="306" text-anchor="middle" font-size="15" fill="#e9eaee">①アドレナリン筋注</text><text x="135" y="325" text-anchor="middle" font-size="13" fill="#a9adb8">0.3〜0.5mg 大腿外側</text>
<rect x="230" y="224" width="210" height="52" rx="8" fill="#15132a" stroke="#7c6cff" stroke-width="1.5"/><text x="335" y="248" text-anchor="middle" font-size="15" fill="#e9eaee">②体位・O₂・輸液</text><text x="335" y="267" text-anchor="middle" font-size="13" fill="#a9adb8">下肢挙上／晶質液急速静注</text>
<rect x="430" y="166" width="210" height="52" rx="8" fill="#15132a" stroke="#7c6cff" stroke-width="1.5"/><text x="535" y="190" text-anchor="middle" font-size="15" fill="#e9eaee">③筋注を反復（5分毎）</text><text x="535" y="209" text-anchor="middle" font-size="13" fill="#a9adb8">反応不良なら次へ</text>
<rect x="600" y="108" width="220" height="52" rx="8" fill="#0f231c" stroke="#34d399" stroke-width="1.5"/><text x="710" y="132" text-anchor="middle" font-size="15" fill="#e9eaee">④アドレナリン持続静注</text><text x="710" y="151" text-anchor="middle" font-size="13" fill="#a9adb8">モニタ下で titrate</text>
<rect x="610" y="44" width="260" height="56" rx="8" fill="#241318" stroke="#fb7185" stroke-width="2.5"/><text x="740" y="68" text-anchor="middle" font-size="15" font-weight="700" fill="#fb7185">⑤β遮断薬内服例で難治</text><text x="740" y="89" text-anchor="middle" font-size="15" font-weight="700" fill="#fb7185">→ グルカゴン静注</text>
</svg><figcaption>図A. 標準的段階を踏んでも反応せず、かつβ遮断薬内服例ではグルカゴンが「次の一手」。</figcaption></figure>
<figure class="qfig"><svg viewBox="0 0 900 250" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="250" fill="#0d0f12"/>
<text x="450" y="32" text-anchor="middle" font-size="19" font-weight="700" fill="#e9eaee">アドレナリンの用量・経路と禁忌的用法</text>
<rect x="30" y="56" width="260" height="160" rx="10" fill="#0f231c" stroke="#34d399" stroke-width="2"/><text x="160" y="88" text-anchor="middle" font-size="16" font-weight="700" fill="#34d399">筋注（第一選択）</text><text x="160" y="118" text-anchor="middle" font-size="14" fill="#e9eaee">0.3〜0.5mg 大腿前外側</text><text x="160" y="144" text-anchor="middle" font-size="13.5" fill="#a9adb8">5分毎に反復可</text><text x="160" y="188" text-anchor="middle" font-size="14" fill="#34d399">◯ 全例で最初に</text>
<rect x="320" y="56" width="260" height="160" rx="10" fill="#15132a" stroke="#7c6cff" stroke-width="2"/><text x="450" y="88" text-anchor="middle" font-size="16" font-weight="700" fill="#b1a6ff">持続静注（難治例）</text><text x="450" y="118" text-anchor="middle" font-size="14" fill="#e9eaee">少量から titrate</text><text x="450" y="144" text-anchor="middle" font-size="13.5" fill="#a9adb8">心電図・血圧モニタ下</text><text x="450" y="188" text-anchor="middle" font-size="14" fill="#8b7bff">◯ 筋注無効時</text>
<rect x="610" y="56" width="260" height="160" rx="10" fill="#241318" stroke="#fb7185" stroke-width="2.5"/><text x="740" y="88" text-anchor="middle" font-size="16" font-weight="700" fill="#fb7185">1mg 静注ボーラス</text><text x="740" y="118" text-anchor="middle" font-size="14" fill="#e9eaee">＝心停止時の用量</text><text x="740" y="144" text-anchor="middle" font-size="12.5" fill="#a9adb8">脈のある患者で重症高血圧・不整脈・心筋虚血</text><text x="740" y="190" text-anchor="middle" font-size="14.5" font-weight="700" fill="#fb7185">✗ 灌流例では禁忌的</text>
</svg><figcaption>図B. 脈拍のある（灌流のある）患者への1mg静注ボーラスは心停止用量であり危険。</figcaption></figure>`,
      evidence:[
        {src:"WAO Anaphylaxis Guidance 2020",pmid:"33204386",point:"アドレナリン筋注が第一選択。難治例は静注へ。<b>β遮断薬内服例にグルカゴンを考慮</b>"},
        {src:"Anaphylaxis 2020 Practice Parameter",pmid:"32001253",point:"抗ヒスタミン薬・副腎皮質ステロイドは第一選択でなく、二相性反応を予防しない"},
        {src:"EAACI 2021 update",pmid:"34343358",point:"アドレナリン筋注が第一選択。反応不良例では段階的にエスカレーション"},
        {src:"Thomas & Crawford 2005",pmid:"15788828",point:"β遮断薬内服の難治性アナフィラキシーにグルカゴンが有益と報告"}
      ],
      distractors:`<p><b>高用量の副腎皮質ステロイドを静注する</b> — 誤り。効果発現に数時間を要し、急性循環不全・気道症状の即時改善に寄与しない。二相性反応の予防効果も乏しい。<span class="bias">アンカリング</span><span class="bias">利用可能性</span></p>
      <p><b>アドレナリン1mgを静脈内ボーラス</b> — 誤り。薬剤は正しいが用量・経路が誤り。<b>1mg静注は心停止時（心肺蘇生）の用量</b>で、脈・灌流のある患者では重症高血圧・致死的不整脈・心筋虚血を招く。灌流例は持続静注か少量（50µg）titration。<span class="bias">正しい薬・誤った用量</span><span class="bias">action bias</span></p>
      <p><b>抗ヒスタミン薬（H1・H2）を追加</b> — 誤り。皮膚粘膜症状を緩和するにすぎず、気道・循環の救命処置ではない。見えやすい皮膚症状に注意が向く誤り。<span class="bias">省略バイアス</span></p>
      <p><b>グルコン酸カルシウムを静注</b> — 誤り。アナフィラキシーやβ遮断薬抵抗性ショックにルーチンの適応がない（高K血症・Ca拮抗薬中毒等の治療薬）。<span class="bias">早期閉鎖</span></p>`,
      guideline:[
        "<b>初期対応の順序</b>：アドレナリン筋注（0.3〜0.5mg、大腿前外側）→ 体位（仰臥位＋下肢挙上）→ 高流量酸素 → 等張晶質液急速静注 → 5分毎に反復 → モニタ下でアドレナリン持続静注へエスカレーション。",
        "<b>β遮断薬抵抗性とグルカゴン</b>：グルカゴン成人1〜5mgを約5分で静注、必要なら5〜15µg/分。β受容体を介さずcAMPを上げてβ遮断を迂回。嘔吐に注意。",
        "<b>1mg静注ボーラスは心停止用量</b>。灌流例では用いず、持続静注または少量titrationを用いる。",
        "<b>二相性反応</b>：抗ヒスタミン薬・ステロイドは第一選択でなく確実には予防しない。重症・遷延例は十分な観察時間を確保。",
        "<b>退院時</b>：アドレナリン自己注射器（エピペン®）処方と実技指導、アレルギー専門医紹介、ハチ毒はアレルゲン免疫療法（VIT）を検討。"
      ],
      points:[
        "難治性アナフィラキシーは適切な筋注反復＋輸液に反応しない病態で、標準エスカレーションはモニタ下のアドレナリン持続静注。",
        "<b>β遮断薬内服例はアドレナリン抵抗性</b>。次の一手はグルカゴン（β受容体を介さずcAMPを上げる）。",
        "<b>アドレナリン1mg静注ボーラスは心停止時の用量</b>。脈・灌流のある患者には禁忌的。",
        "ステロイド・抗ヒスタミン薬は二次補助で発現が遅く、難治性ショックの治療でも二相性予防でもない。カルシウムは適応外。",
        "退院時はエピペン®処方・専門医紹介、ハチ毒はVITで再発予防。"
      ],
      refs:[
        "Cardona V, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472. (PMID 33204386)",
        "Shaker MS, et al. Anaphylaxis—a 2020 practice parameter update. J Allergy Clin Immunol. 2020;145(4):1082-1123. (PMID 32001253)",
        "Muraro A, et al. EAACI guidelines: Anaphylaxis (2021 update). Allergy. 2021;77(2):357-377. (PMID 34343358)",
        "Thomas M, Crawford I. Glucagon infusion in refractory anaphylactic shock on beta-blockers. Emerg Med J. 2005;22(4):272-3. (PMID 15788828)"
      ]
    }
  },

  /* ===================== Q8 ===================== */
  {
    dom:"整形・骨代謝", domEn:"ORTHO", category:"内分泌・代謝", setId:"set2",
    title:"最も適切な初期治療はどれか",
    meta:"74 F · 外来 · 直近椎体骨折＋既存大腿骨頸部骨折 · 二次性は陰性",
    stem:`74歳女性。腰背部痛で受診。3か月前に軽微な外力で第12胸椎圧迫骨折、1年前に右大腿骨頸部骨折（人工骨頭挿入術）。身長は数年で約4cm低下。DXA 腰椎 Tスコア −3.4、大腿骨頸部 −3.2。二次性骨粗鬆症の検索（血算・補正Ca・P・ALP・Cr/eGFR・25(OH)D〔補充後充足〕・intact PTH・TSH・血清/尿蛋白電気泳動・遊離軽鎖）はいずれも正常で、クッシング・甲状腺機能亢進・性腺機能低下・骨軟化症も否定的。過去1年以内に心筋梗塞・脳卒中なし、活動性悪性腫瘍なし、ステロイド長期使用なし。`,
    options:[
      "経口ビスホスホネート（アレンドロネート）を第一選択として開始する",
      "ビスホスホネートで2〜3年治療した後にテリパラチドへ切り替える",
      "デノスマブを開始し、2年後に投与を終了する",
      "骨形成促進薬を先行し、その後に骨吸収抑制薬へ移行する",
      "天然型ビタミンDとカルシウムのみで経過観察する"
    ],
    answer:3,
    explain:{
      core:`<p>本例は<b>超高リスク（very high risk）骨粗鬆症</b>：(1) 直近の椎体（第12胸椎）圧迫骨折、(2) 既存の大腿骨近位部骨折、(3) 腰椎 −3.4／大腿骨頸部 −3.2 の極めて低いTスコアを併せ持つ。</p>
      <p>超高リスクでは経口ビスホスホネートを漫然と先行させず、<b>骨形成促進薬（テリパラチド／アバロパラチド／ロモソズマブ）を先行し、その後に骨吸収抑制薬で獲得骨量を維持する「anabolic-first」</b>が推奨される（Endocrine Society 2020 等）。短期に骨密度・骨強度を大きく高め、椎体・非椎体骨折を有意に減らせる（VERO・ARCH・FRAME）。</p>
      <p><b>順序が臨床的に重要</b>：骨吸収抑制薬を先に用いると後続のテリパラチドの骨密度上昇反応が減弱する（DATA-Switchでデノスマブ→テリパラチド切替で一過性/進行性の骨量減少）。よって「BP先行→テリパラチド」（選択肢B）は不利。</p>
      <p>本例は1年以内のMI/脳卒中がなくロモソズマブの心血管禁忌に該当せず、テリパラチドの禁忌（骨悪性腫瘍・骨転移・原因不明ALP高値・骨への放射線歴）もないため、<b>選択肢Dが最も適切</b>。</p>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="240" fill="#0d0f12"/>
<text x="450" y="32" text-anchor="middle" font-size="19" font-weight="700" fill="#e9eaee">超高リスク骨粗鬆症の逐次治療（anabolic-first）</text>
<rect x="40" y="72" width="370" height="76" rx="12" fill="#15132a" stroke="#7c6cff" stroke-width="2"/><text x="225" y="104" text-anchor="middle" font-size="17" font-weight="700" fill="#b1a6ff">① 骨形成促進薬を先行</text><text x="225" y="130" text-anchor="middle" font-size="13.5" fill="#c8cad3">テリパラチド24か月／ロモソズマブ12か月</text>
<line x1="415" y1="110" x2="487" y2="110" stroke="#5a5f6d" stroke-width="3"/><polygon points="487,110 471,102 471,118" fill="#5a5f6d"/>
<rect x="490" y="72" width="370" height="76" rx="12" fill="#0f231c" stroke="#34d399" stroke-width="2"/><text x="675" y="104" text-anchor="middle" font-size="17" font-weight="700" fill="#34d399">② 骨吸収抑制薬へ移行</text><text x="675" y="130" text-anchor="middle" font-size="13.5" fill="#c8cad3">デノスマブ／ビスホスホネートで維持</text>
<rect x="40" y="176" width="820" height="44" rx="10" fill="#231c10" stroke="#fbbf24" stroke-width="1.5"/><text x="450" y="203" text-anchor="middle" font-size="14" fill="#e7d6a8">骨形成薬で「攻め」て骨量を増やし、抗骨吸収薬で「守って」維持する（順序が重要）</text>
</svg><figcaption>図. 超高リスクでは骨形成促進薬を先行し、その後に骨吸収抑制薬で獲得骨量を維持する。</figcaption></figure>`,
      evidence:[
        {src:"VERO 2018 (Lancet)",pmid:"29129436",point:"重症骨粗鬆症で新規椎体骨折 <b>5.4% vs 12.0%（RR 0.44, 0.29–0.68）</b>；臨床骨折 4.8% vs 9.8%（テリパラチド vs リセドロネート）",rct:true,pico:{p:"≥2中等度 or 1高度の椎体骨折があり BMD T≤−1.5 の重症閉経後骨粗鬆症（各群680例）",i:"テリパラチド20µg/日 皮下注（24か月）",c:"リセドロネート35mg/週 経口",o:"新規椎体骨折 5.4% vs 12.0%（RR 0.44, 95%CI 0.29–0.68）。臨床骨折 4.8% vs 9.8%（HR 0.48）。非椎体は有意差なし（HR 0.66, p=0.10）",nnt:"椎体 約15（24か月・ARR 6.6%）／臨床骨折 約20（ARR 5.0%）",caveat:"実薬対照（プラセボでなくリセドロネート）で『リセドロネート超え』を示した点が価値。重症例限定で軽症には外挿不可。非椎体骨折は検出力不足の可能性。Lilly資金。"}},
        {src:"ARCH 2017 (NEJM)",pmid:"28892457",point:"ロモソズマブ→アレンドロネートで新規椎体 <b>6.2% vs 11.9%（−48%）</b>・股関節 −38%。<b>重篤心血管事象 2.5% vs 1.9%</b>（1年目）",rct:true,pico:{p:"脆弱性骨折既往のある高リスク閉経後骨粗鬆症（4093例）",i:"ロモソズマブ210mg/月 皮下注 12か月 → アレンドロネート",c:"アレンドロネート70mg/週 → アレンドロネート",o:"24か月で新規椎体骨折 6.2% vs 11.9%（−48%）、股関節 2.0% vs 3.2%（−38%）。1年目の重篤心血管イベント 2.5% vs 1.9%でロモ群に多い",nnt:"椎体 約18（24か月・ARR 5.7%）／股関節 約83（ARR 1.2%）",caveat:"心血管シグナルが安全性の鍵＝1年以内のMI/脳卒中既往は禁忌（本症例で除外を明記した理由）。実薬対照でアレンドロネート超えを証明。Amgen/UCB/Astellas資金。"}},
        {src:"FRAME 2016 (NEJM)",pmid:"27641143",point:"ロモソズマブ vs プラセボで12か月の新規椎体骨折を有意に減少",rct:true,pico:{p:"股関節/大腿骨頸部 T −2.5〜−3.5 の閉経後骨粗鬆症（7180例）",i:"ロモソズマブ210mg/月 皮下注 12か月 → デノスマブ",c:"プラセボ 12か月 → デノスマブ",o:"12か月で新規椎体骨折 0.5% vs 1.8%（−73%）。臨床骨折 1.6% vs 2.5%（−36%）。非椎体は有意差なし（p=0.10）",nnt:"椎体 約77（12か月・ARR 1.3%）",caveat:"椎体は明快だが非椎体で有意差つかず（ベースライン非椎体リスクが低いラテンアメリカ中心集団の影響が議論）。プラセボ対照のため実薬超えは別途ARCHで検証。低リスク集団ゆえNNTは大きめ。Amgen/UCB資金。"}},
        {src:"DATA-Switch 2015 (Lancet)",pmid:"26144908",point:"デノスマブ→テリパラチドで一過性/進行性骨量減少（橈骨 −1.8%）。順序が重要",rct:true,pico:{p:"閉経後骨粗鬆症（94例、解析77例。DATA試験の延長）",i:"テリパラチド→デノスマブ（治療順序を比較）",c:"デノスマブ→テリパラチド／併用→デノスマブ",o:"48か月の腰椎BMD +18.3% vs +14.0% vs +16.0%（群間有意差なし）。デノスマブ→テリパラチドへ切替で股関節・橈骨BMDが一過性〜進行性に低下",nnt:"該当なし（代替アウトカム＝BMDで骨折エンドポイントでないため）",caveat:"n小・single-blind・BMD代替指標。ただし骨吸収抑制薬の後に骨形成薬を置くとBMDが下がる＝骨形成薬を先行させる根拠の一つ。Amgen/Lilly/NIH資金。"}},
        {src:"FREEDOM中止解析 2018 (JBMR)",pmid:"29105841",point:"デノスマブ中止で椎体骨折率 1.2→7.1/100人年、椎体骨折者の<b>60.7%が多発</b>"},
        {src:"Endocrine Society 2020",pmid:"32068863",point:"超高リスクは骨形成促進薬を考慮し、その後に骨吸収抑制薬へ"}
      ],
      distractors:`<p><b>経口ビスホスホネート先行</b> — 骨粗鬆症一般の標準治療だが、超高リスクには効果が不十分で、先行使用は後続の骨形成促進薬の反応を減弱させる。<span class="bias">既定値バイアス</span><span class="bias">知識のアップデート遅延</span></p>
      <p><b>BPで2〜3年→テリパラチドへ切替</b> — 順序が逆。抗骨吸収薬を先行させるとテリパラチドの反応が減弱（DATA-Switch）。超高リスクではまず骨形成薬を先行。<span class="bias">順序の誤り</span></p>
      <p><b>デノスマブを2年で終了</b> — 開始は妥当だが「2年で終了」して後続治療を欠くとリバウンド多発椎体骨折（Cummings 2018）。中止時は必ずBP等へ移行。<span class="bias">omission（移行の欠落）</span></p>
      <p><b>天然型ビタミンD＋カルシウムのみ</b> — 補助であり、2回の脆弱性骨折＋T −3.4の超高リスクの初期治療として明らかに不十分。<span class="bias">過小治療</span></p>`,
      guideline:[
        "<b>超高リスクの定義</b>：直近の椎体骨折・多発骨折・大腿骨近位部骨折・極めて低いBMD・治療中の骨折のいずれか。",
        "<b>anabolic-first</b>：骨形成促進薬（テリパラチド／アバロパラチド／ロモソズマブ）を先行→抗骨吸収薬で維持する逐次治療。",
        "<b>ロモソズマブとテリパラチドの使い分け</b>：ロモソズマブは二重作用・月1回・12か月で股関節を含む高リスクに向くが<b>1年以内のMI/脳卒中で禁忌</b>。テリパラチドは連日・24か月、心血管リスクが高くロモソズマブを避けたい例に向き、骨悪性腫瘍・骨転移・原因不明ALP高値・骨への放射線歴で禁忌。",
        "<b>投与期間の上限</b>：テリパラチド24か月、ロモソズマブ12か月。終了後は必ず骨吸収抑制薬へ移行。",
        "<b>デノスマブは自己中断禁物</b>：中止でリバウンド多発椎体骨折。やむを得ず中止時はビスホスホネート等へ移行。",
        "<b>drug holiday</b>はビスホスホネートの低〜中リスク概念で、超高リスクには適用しない。"
      ],
      points:[
        "「直近の椎体骨折＋既存の大腿骨近位部骨折＋極低Tスコア」を見たら<b>超高リスク</b>と判断し anabolic-first を想起。",
        "骨形成促進薬を先行→抗骨吸収薬で維持。<b>順序が重要</b>（抗骨吸収薬先行は反応減弱）。",
        "ロモソズマブは1年以内のMI・脳卒中で禁忌、テリパラチドは骨悪性腫瘍等で禁忌。本例はいずれも該当せず使用可。",
        "デノスマブは「2年で終了」してはならず、中止時はBP等へ移行してリバウンド骨折を防ぐ。",
        "骨形成促進薬は投与期間に上限があり、<b>終了後の逐次治療を最初から計画</b>。ビタミンD・カルシウムは補助。"
      ],
      refs:[
        "Kendler DL, et al. Teriparatide vs risedronate in severe osteoporosis (VERO). Lancet. 2018;391(10117):230-240. (PMID 29129436)",
        "Saag KG, et al. Romosozumab or Alendronate (ARCH). N Engl J Med. 2017;377(15):1417-1427. (PMID 28892457)",
        "Cosman F, et al. Romosozumab in postmenopausal osteoporosis (FRAME). N Engl J Med. 2016;375(16):1532-1543. (PMID 27641143)",
        "Leder BZ, et al. Denosumab and teriparatide transitions (DATA-Switch). Lancet. 2015;386(9999):1147-1155. (PMID 26144908)",
        "Cummings SR, et al. Vertebral fractures after discontinuation of denosumab. J Bone Miner Res. 2018;33(2):190-198. (PMID 29105841)",
        "Eastell R, et al. Pharmacological Management of Osteoporosis: Endocrine Society Guideline Update. J Clin Endocrinol Metab. 2020;105(3):dgaa048. (PMID 32068863)"
      ]
    }
  },
  /* ===================== Q9 (set2) ===================== */
  {
    dom:"緩和ケア", domEn:"OPIOID", category:"緩和ケア", setId:"set2",
    title:"最も適切なオピオイドはどれか",
    meta:"68 M · 在宅 · 進行肺癌骨転移痛 · eGFR22（非透析）",
    stem:`あなたは緩和ケアも行う診療所で在宅医療を担当している。68歳男性。進行非小細胞肺癌の多発骨転移（胸椎・骨盤）による持続的な腰背部痛があり、アセトアミノフェンとNSAIDではコントロールが不十分でオピオイドの導入を予定している。糖尿病性腎症による慢性腎臓病があり、eGFRは22mL/min/1.73m²で、血液透析は受けていない。せん妄や呼吸抑制の既往はなく、現在の意識は清明。便秘がある。痛みはNRS 7/10で骨転移痛が主体、安静時にも持続する。体温36.5℃、血圧126/74mmHg。最も適切なオピオイドはどれか。`,
    options:[
      "モルヒネ",
      "コデイン",
      "オキシコドン",
      "フェンタニル",
      "トラマドール"
    ],
    answer:3,
    explain:{
      core:`<p>本症例の核心は「eGFR 22（CKD G4・非透析）で、活性代謝物が腎排泄されないオピオイドを選ぶ」点。フェンタニルは肝CYP3A4で<b>ほぼ不活性な代謝物（ノルフェンタニル）</b>に代謝され、活性代謝物の腎蓄積が乏しいため腎不全で相対的に最も安全。</p>
      <table>
      <thead>
      <tr class="header">
      <th>オピオイド</th>
      <th>主要代謝物（活性/不活性）</th>
      <th>腎での蓄積</th>
      <th>腎不全での評価</th>
      </tr>
      </thead>
      <tbody>
      <tr class="odd">
      <td><b>モルヒネ</b></td>
      <td><b>M6G（活性・強力）</b>、M3G（神経興奮性）</td>
      <td>強く依存・著明に蓄積</td>
      <td><b>避ける</b>（傾眠・呼吸抑制・ミオクローヌス・せん妄）</td>
      </tr>
      <tr class="even">
      <td><b>コデイン</b></td>
      <td>→モルヒネ→M6G/M3G</td>
      <td>蓄積（＋CYP2D6多型で予測不能）</td>
      <td><b>避ける</b></td>
      </tr>
      <tr class="odd">
      <td><b>オキシコドン</b></td>
      <td>ノルオキシコドン、オキシモルフォン（活性）</td>
      <td>蓄積しうる</td>
      <td><b>要注意</b>（減量・延長で第二選択）</td>
      </tr>
      <tr class="even">
      <td><b>トラマドール</b></td>
      <td>M1（活性）</td>
      <td>蓄積</td>
      <td><b>避ける</b>（痙攣・セロトニン作用）</td>
      </tr>
      <tr class="odd">
      <td><b>フェンタニル</b></td>
      <td>ノルフェンタニル（実質不活性）</td>
      <td>乏しい</td>
      <td><b>第一選択</b>（少量から）</td>
      </tr>
      <tr class="even">
      <td>ヒドロモルフォン</td>
      <td>H3G（神経興奮性）</td>
      <td>蓄積</td>
      <td>要注意（第二選択）</td>
      </tr>
      <tr class="odd">
      <td>メサドン/ブプレノルフィン</td>
      <td>活性代謝物に乏しい/限定的</td>
      <td>腎依存小（糞便・胆汁排泄）</td>
      <td>比較的安全</td>
      </tr>
      </tbody>
      </table>
      <p><b>まとめ</b>：避ける＝モルヒネ・コデイン・トラマドール／減量で許容＝オキシコドン・ヒドロモルフォン／望ましい＝<b>フェンタニル</b>・ブプレノルフィン・メサドン。<b>透析の有無で変わる</b>：血液透析患者ではフェンタニルは不適とされブプレノルフィンが第一選択候補（Coluzzi 2020）。本症例は<b>非透析</b>なのでフェンタニルで矛盾しない。</p>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 322" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="322" fill="#0d0f12"/>
<text x="450" y="30" text-anchor="middle" font-size="19" font-weight="700" fill="#e9eaee">腎障害（CKD）でのオピオイド選択 ─ 活性代謝物の腎蓄積で決まる</text>
<rect x="20" y="50" width="278" height="166" rx="10" fill="#241318" stroke="#fb7185" stroke-width="1.5"/><text x="159" y="78" text-anchor="middle" font-size="15" font-weight="700" fill="#fb7185">✗ 避ける</text><text x="38" y="106" font-size="13" fill="#c8cad3">モルヒネ（M6G・M3Gが蓄積）</text><text x="38" y="132" font-size="13" fill="#c8cad3">コデイン（→モルヒネに代謝）</text><text x="38" y="158" font-size="13" fill="#c8cad3">トラマドール（M1・痙攣/5-HT）</text><text x="38" y="192" font-size="12" fill="#8a8e99">活性代謝物が腎排泄で蓄積</text>
<rect x="311" y="50" width="278" height="166" rx="10" fill="#231c10" stroke="#fbbf24" stroke-width="1.5"/><text x="450" y="78" text-anchor="middle" font-size="15" font-weight="700" fill="#fbbf24">△ 減量で許容</text><text x="329" y="106" font-size="13" fill="#c8cad3">オキシコドン</text><text x="329" y="132" font-size="13" fill="#c8cad3">ヒドロモルフォン（H3G）</text><text x="329" y="192" font-size="12" fill="#8a8e99">活性代謝物あり→減量・間隔延長</text>
<rect x="602" y="50" width="278" height="166" rx="10" fill="#0f231c" stroke="#34d399" stroke-width="2"/><text x="741" y="78" text-anchor="middle" font-size="15" font-weight="700" fill="#34d399">◯ 望ましい</text><text x="620" y="106" font-size="12.5" fill="#c8cad3">フェンタニル（代謝物＝不活性）</text><text x="620" y="132" font-size="13" fill="#c8cad3">ブプレノルフィン</text><text x="620" y="158" font-size="13" fill="#c8cad3">メサドン</text><text x="620" y="192" font-size="12" fill="#8a8e99">活性代謝物が乏しく蓄積しにくい</text>
<rect x="20" y="232" width="860" height="72" rx="10" fill="#13161b" stroke="#2a2e38" stroke-width="1.5"/><text x="450" y="260" text-anchor="middle" font-size="14" font-weight="700" fill="#e9eaee">透析の有無で第一選択が変わる</text><text x="450" y="285" text-anchor="middle" font-size="12.5" fill="#c8cad3">非透析 eGFR22 → フェンタニル（本例）　／　血液透析 → ブプレノルフィン（フェンタニルは不適）</text>
</svg><figcaption>図. 腎障害では活性代謝物が腎に蓄積するモルヒネ・コデイン・トラマドールを避け、代謝物の乏しいフェンタニル等を選ぶ。非透析の本例はフェンタニルが第一選択。</figcaption></figure>`,
      evidence:[
        {src:"EAPC オピオイドGL（Caraceni 2012）",pmid:"22300860",point:"GRADEベースの中核GL。腎障害・スイッチング・神経障害性疼痛・便秘/悪心を体系化"},
        {src:"腎障害×オピオイド SR（King 2011）",pmid:"21708859",point:"RCTは皆無・エビデンスはvery low。代謝物の活性/蓄積でリスク層別。<b>フェンタニル・アルフェンタニル・メサドンが最も害が少ない／モルヒネは毒性</b>"},
        {src:"CKD/HDのオピオイド総説（Coluzzi 2020）",pmid:"32982255",point:"<b>モルヒネ・コデインは非推奨</b>、オキシコドン/ヒドロモルフォンは要減量、<b>CKDではフェンタニル/ブプレノルフィンが第一選択候補（透析中はフェンタニル不可）</b>。ナルデメジンはCKD/HDで用量調整不要"},
        {src:"非透析CKDの症状管理（Murtagh 2006）",pmid:"16898102",point:"WHOラダーにパラセタモール/トラマドール/<b>フェンタニル</b>が最適、<b>モルヒネは代謝物蓄積で非推奨</b>"},
        {src:"M6Gの薬理（Frances 1992）",pmid:"1320685",point:"<b>M6Gはモルヒネより強力なμ作動</b>（動物 i.c.v.）。蓄積時の毒性の薬理学的裏付け"},
        {src:"M3Gの神経興奮（Doyle 2017）",pmid:"29199028",point:"<b>M3GはTLR4を介し神経炎症</b>を惹起し鎮痛に拮抗"},
        {src:"JSPMがん疼痛GL（英文記載, Mawatari 2022）",pmid:"35363057",point:"日本緩和医療学会GLの英文サマリ（35推奨）"},
        {src:"換算比のスコーピングレビュー（Davis 2024）",pmid:"39046534",point:"<b>換算比はエビデンスの質が低くばらつく</b>＝スイッチングは保守的換算＋再評価"}
      ],
      distractors:`<p><b>モルヒネ</b> — 活性代謝物 <b>M6G（強力なμ作動）・M3G（神経興奮性）が腎排泄依存</b>でeGFR22では著明に蓄積し、傾眠・呼吸抑制・ミオクローヌス・せん妄。明確に非推奨。<span class="bias">availability bias（「がん疼痛＝まずモルヒネ」）</span><span class="bias">default bias</span></p>
      <p><b>コデイン</b> — CYP2D6で<b>モルヒネへ代謝</b>＝同じ問題。多型で効果・毒性が予測不能。中等度〜高度痛に力価不足。<span class="bias">代表性ヒューリスティック（「弱オピオイド＝安全」）</span></p>
      <p><b>オキシコドン</b> — 活性代謝物（オキシモルフォン）・親化合物が腎で蓄積しうる。減量・間隔延長で使える第二選択だが、活性代謝物を持つ点でフェンタニルに劣る。<span class="bias">anchoring</span><span class="bias">確証バイアス</span></p>
      <p><b>トラマドール</b> — 親化合物・M1が腎排泄で蓄積。<b>痙攣閾値低下＋セロトニン作用</b>（SSRI/SNRI併用で症候群リスク）。高度痛に力価不足。<span class="bias">availability bias</span><span class="bias">commission bias</span></p>`,
      guideline:[
        "<b>がん疼痛の基本</b>：WHO三段階（非オピオイド→弱→強）、by the clock（定時）。本例は中等度〜高度痛で<b>強オピオイドから開始</b>。EAPC 2012の一般則（経口モルヒネ/オキシコドン/ヒドロモルフォン）を<b>腎障害で上書き</b>し代謝物の少ないオピオイドを選ぶ。",
        "<b>腎機能別選択</b>：非透析eGFR22＝フェンタニル第一選択（ブプレノルフィン・メサドンも可）／血液透析＝ブプレノルフィン第一選択（フェンタニル不適）。",
        "<b>導入・調整</b>：少量から漸増（start low, go slow）、<b>レスキュー＝定時1日量の約1/6</b>、貼付剤は発現が緩徐なので速放性レスキュー併用。毒性（傾眠・ミオクローヌス・呼吸抑制・せん妄・痛覚過敏）出現時は減量/間隔延長/<b>スイッチング</b>。換算比はエビデンスが弱く（Davis 2024）保守的に減量し再評価。",
        "<b>有害事象対策</b>：便秘は予防的緩下薬＋難治例にPAMORA（<b>ナルデメジンはCKD/HDで用量調整不要</b>）、悪心は短期制吐薬、神経障害性疼痛にガバペンチノイド（<b>腎機能に応じ大幅減量</b>）。骨転移痛には<b>放射線治療・骨修飾薬</b>も併用。"
      ],
      points:[],
      refs:[
        "Caraceni A, et al. Use of opioid analgesics in cancer pain: EAPC recommendations. Lancet Oncol. 2012;13(2):e58-68. (PMID 22300860)",
        "King S, et al. Opioids for cancer pain with renal impairment: SR (EAPC). Palliat Med. 2011;25(5):525-52. (PMID 21708859)",
        "Coluzzi F, et al. Safe Use of Opioids in CKD and Hemodialysis Patients. Ther Clin Risk Manag. 2020;16:821-837. (PMID 32982255)",
        "Murtagh FEM, et al. Symptom management in established renal failure managed without dialysis. EDTNA ERCA J. 2006;32(2):93-8. (PMID 16898102)",
        "Frances B, et al. Morphine-6β-glucuronide is a more potent opioid agonist than morphine. J Pharmacol Exp Ther. 1992;262(1):25-31. (PMID 1320685)",
        "Doyle HH, Murphy AZ. Influences of morphine metabolites on pain sensitivity. Physiol Behav. 2017;187:32-41. (PMID 29199028)",
        "Mawatari H, et al. JSPM cancer pain pharmacotherapy guidelines (revision). J Palliat Med. 2022;25(7):1095-1114. (PMID 35363057)",
        "Davis MP, et al. Opioid dose/route conversion ratio studies: scoping review. Support Care Cancer. 2024;32(8):542. (PMID 39046534)"
      ]
    }
  },
  /* ===================== Q10 (set2) ===================== */
  {
    dom:"医療制度（介護保険）", domEn:"LTC", category:"地域医療・医療制度・在宅", setId:"set2",
    title:"介護保険の利用可否（特定疾病）",
    meta:"58 M · 在宅 · 膵癌多発肝転移（末期）· ADL低下で在宅療養希望",
    stem:`あなたは在宅療養支援診療所で外来・訪問診療を担当している。58歳男性。会社員。膵癌の多発肝転移と診断され、化学療法を行ったが効果なく、主治医から積極的抗がん治療の適応はないと説明された。全身倦怠感と食思不振で日常生活動作が低下し、入浴や移動に介助を要するようになったため、自宅での療養を希望している。妻と二人暮らしで、被用者保険（健康保険）に加入している。身体障害者手帳は未取得で、生活保護は受けていない。在宅サービス導入のため、介護保険の利用について相談された。最も適切なのはどれか。`,
    options:[
      "65歳未満のため利用できない",
      "特定疾病に該当し申請できる",
      "身体障害者手帳が必要である",
      "生活保護の受給が条件である",
      "要介護認定は不要である"
    ],
    answer:1,
    explain:{
      core:`<p>58歳＝介護保険の<b>第2号被保険者</b>（40〜64歳の医療保険加入者）。第2号は<b>要介護・要支援の原因が「特定疾病」による場合に限り</b>給付を受けられる（介護保険法第7条、施行令第2条）。膵癌の多発肝転移で抗がん治療の適応がない状態は、特定疾病の第1号「<b>がん（医師が一般に認められている医学的知見に基づき回復の見込みがない状態に至ったと判断したものに限る）</b>」＝末期がんに該当。したがって<b>65歳未満でも要介護認定を申請でき、介護サービスを利用できる</b>（正答B）。</p>
      <table>
      <thead>
      <tr class="header">
      <th>項目</th>
      <th>第1号被保険者</th>
      <th>第2号被保険者</th>
      </tr>
      </thead>
      <tbody>
      <tr class="odd">
      <td>年齢</td>
      <td>65歳以上</td>
      <td>40歳以上65歳未満</td>
      </tr>
      <tr class="even">
      <td>要件</td>
      <td>当該市町村の住民</td>
      <td><b>医療保険加入者</b>であること</td>
      </tr>
      <tr class="odd">
      <td>給付の条件</td>
      <td>原因を問わず要支援・要介護なら可</td>
      <td><b>特定疾病（16種）が原因</b>の場合に限る</td>
      </tr>
      <tr class="even">
      <td>本症例(58歳・末期がん)</td>
      <td>該当しない</td>
      <td><b>該当（特定疾病=がん末期）→申請可</b></td>
      </tr>
      </tbody>
      </table>
      <p><b>16特定疾病（施行令第2条）</b>：①がん（末期）②関節リウマチ ③ALS ④後縦靱帯骨化症 ⑤骨折を伴う骨粗鬆症 ⑥初老期認知症 ⑦パーキンソン病関連疾患 ⑧脊髄小脳変性症 ⑨脊柱管狭窄症 ⑩早老症 ⑪多系統萎縮症 ⑫糖尿病性神経障害・腎症・網膜症 ⑬脳血管疾患 ⑭閉塞性動脈硬化症 ⑮COPD ⑯両側の膝/股関節の著しい変形性関節症。「がん（末期）」は<b>平成18（2006）年4月</b>に追加。</p>`,
      fig:`<figure class="qfig"><svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter, 'Noto Sans JP', sans-serif">
<rect x="0" y="0" width="900" height="280" fill="#0d0f12"/>
<text x="450" y="30" text-anchor="middle" font-size="19" font-weight="700" fill="#e9eaee">介護保険の利用判定（第2号被保険者・特定疾病）</text>
<rect x="20" y="52" width="262" height="86" rx="10" fill="#15132a" stroke="#7c6cff" stroke-width="1.5"/><text x="151" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#b1a6ff">第2号被保険者</text><text x="151" y="110" text-anchor="middle" font-size="12.5" fill="#c8cad3">58歳・医療保険加入（40〜64歳）</text>
<text x="294" y="100" text-anchor="middle" font-size="20" fill="#5a5f6d">→</text>
<rect x="318" y="52" width="262" height="86" rx="10" fill="#231c10" stroke="#fbbf24" stroke-width="1.5"/><text x="449" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="#fbbf24">特定疾病が原因か？</text><text x="449" y="104" text-anchor="middle" font-size="12.5" fill="#c8cad3">末期がん＝特定疾病①に該当 ◯</text><text x="449" y="125" text-anchor="middle" font-size="11.5" fill="#8a8e99">第2号は特定疾病16種が要件</text>
<text x="592" y="100" text-anchor="middle" font-size="20" fill="#5a5f6d">→</text>
<rect x="616" y="52" width="264" height="86" rx="10" fill="#0f231c" stroke="#34d399" stroke-width="2"/><text x="748" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="#34d399">要介護認定を申請</text><text x="748" y="104" text-anchor="middle" font-size="12.5" fill="#c8cad3">（必須）→ 介護サービス利用可</text><text x="748" y="125" text-anchor="middle" font-size="11.5" fill="#34d399">正答B</text>
<rect x="20" y="158" width="860" height="104" rx="10" fill="#13161b" stroke="#2a2e38" stroke-width="1.5"/><text x="40" y="184" font-size="13.5" font-weight="700" fill="#e9eaee">よくある誤り</text><text x="40" y="208" font-size="12.5" fill="#c8cad3">✗ 65歳未満でも「利用できない」わけではない（A）　✗ 身体障害者手帳は不要（C）</text><text x="40" y="230" font-size="12.5" fill="#c8cad3">✗ 生活保護の受給は条件でない（D）　✗ 要介護認定は省略できない（E／急ぐ時は暫定ケアプラン）</text><text x="40" y="252" font-size="12" fill="#8a8e99">末期がんの訪問看護は「別表第7」該当で医療保険が優先（介護保険の限度額を消費しない）</text>
</svg><figcaption>図. 40〜64歳（第2号）は要介護の原因が特定疾病（末期がん＝①）なら、要介護認定の申請を経て介護保険を利用できる。手帳・生活保護は要件でない。</figcaption></figure>`,
      evidence:[],
      distractors:`<p><b>A. 65歳未満のため利用できない</b> — ×。40〜64歳でも第2号被保険者として特定疾病が原因なら利用可。本例は末期がんに該当。「介護保険＝65歳以上」のイメージが誤解の背景（<b>対象外は39歳以下</b>）。</p>
      <p><b>C. 身体障害者手帳が必要</b> — ×。介護保険利用に手帳は<b>不要</b>。手帳は身体障害者福祉法の別制度。入口は「要介護認定＋（第2号なら）特定疾病該当」。</p>
      <p><b>D. 生活保護の受給が条件</b> — ×。所得・生活保護の有無を問わない社会保険。むしろ40〜64歳で医療保険未加入だと第2号にならず、介護は生活保護の「介護扶助」で給付。</p>
      <p><b>E. 要介護認定は不要</b> — ×。給付には<b>要介護（要支援）認定が必須</b>。末期がんで急を要する場合は暫定ケアプランで<b>認定前から開始可</b>だが、認定が不要になるわけではない。</p>`,
      guideline:[
        "<b>関連知識（家庭医に必須の制度横断）</b>：末期がんの在宅療養は、介護保険・医療保険・麻薬・福祉制度を組み合わせる。介護保険（訪問介護・福祉用具・ショートステイ等）＝介護ベッド・車椅子、身体介護、レスパイト（第2号は特定疾病該当が前提、区分支給限度額あり）。",
        "<b>訪問看護</b>：末期がんは<b>「厚労大臣が定める疾病等（別表第7）」に該当→医療保険の訪問看護</b>が適用、頻回・複数回訪問が可能。<b>がん末期では訪問看護は医療保険優先</b>で介護保険限度額を消費しない（重要）。",
        "<b>訪問診療・往診</b>：在宅での定期診療・急変時往診・看取り（医療保険から給付）。<b>医療用麻薬</b>：がん疼痛コントロール（麻薬施用者免許・保管/廃棄ルール）。",
        "<b>身体障害者手帳・障害福祉</b>：該当機能障害があれば取得可だが<b>介護保険利用の条件ではない</b>（重複時は介護保険優先）。<b>高額療養費／高額医療・高額介護合算</b>：自己負担を所得区分の上限まで軽減（限度額適用認定証の事前取得）。<b>生活保護（介護扶助・医療扶助）</b>：困窮し他制度で賄えない場合（<b>受給は介護保険利用の条件ではない</b>）。",
        "<b>家庭医の実務</b>：早期に<b>要介護認定を申請</b>／主治医意見書に<b>特定疾病名（末期がん）と急変見込み</b>を記載／<b>訪問看護は医療保険を活用</b>（別表第7該当で介護保険の区分支給限度額を消費しない）／福祉用具・身体介護は<b>介護保険</b>を利用／<b>高額療養費・高額医療/高額介護合算</b>で経済的負担を軽減／状態悪化時は<b>区分変更申請</b>を行う。"
      ],
      points:[],
      refs:[
        "介護保険法施行令 第2条（第2号被保険者の16特定疾病。第1号＝がん〔回復見込みのない末期〕）。厚生労働省「特定疾病の選定基準の考え方」。",
        "診療報酬「特掲診療料の施設基準等」別表第七「厚生労働大臣が定める疾病等」（末期の悪性腫瘍を含む→訪問看護は医療保険給付となり週4日以上・1日複数回が可能）。",
        "高額医療・高額介護合算療養費制度（平成20年4月施行。毎年8月1日〜翌7月31日の医療保険と介護保険の自己負担を世帯合算し、所得区分の上限超過分を支給）。自己負担割合・支給限度額は最新の告示で確認。",
        "要確認：自治体ごとの運用（暫定ケアプランの取扱い・助成）は各保険者で確認。"
      ]
    }
  },
  /* ===================== Q11 (set3) ===================== */
  {
    dom:"感染症", domEn:"INFECTIOUS_DISEASE", category:"感染症", setId:"set3",
    title:"低リスクCoNS-CRBSIの境界（人工弁）",
    meta:"一般内科病棟·72歳男性·PICC抜去後のCoNS菌血症·生体弁あり",
    stem:`72歳男性。3日前から38℃台の発熱と悪寒が出現した。10日前に誤嚥性肺炎の治療のため入院し、抗菌薬点滴と補液の目的で右上腕にPICC（末梢挿入型中心静脈カテーテル）が留置された。肺炎は軽快して一度解熱したが、再度発熱した。呼吸器症状の悪化や新たな局所症状はない。既往に高血圧、2型糖尿病（HbA1c 6.8%、内服のみ）、3年前に大動脈弁狭窄症に対する生体弁置換術、変形性膝関節症がある。悪性腫瘍・免疫抑制薬の使用・好中球減少の既往はない。内服はアムロジピン、メトホルミン。血圧126/74mmHg、脈拍90/分・整、呼吸数18/分、SpO2 97%（室内気）、体温38.3℃。意識清明で全身状態は保たれ、血行動態は安定している。PICC刺入部に発赤・排膿はない。以前から聴取される大動脈弁領域の収縮期駆出性雑音を認めるが、新規の心雑音や心不全徴候はない。新規の皮疹・末梢塞栓徴候はない。WBC 9,600/μL、CRP 4.4mg/dL、Cr 0.9mg/dL、Hb 12.4g/dL、血小板20万/μL。末梢静脈2セットとPICCから血液培養を採取したうえでPICCを抜去した。血液培養2セットからメチシリン耐性のコアグラーゼ陰性ブドウ球菌（Staphylococcus epidermidis）が検出された。カテーテルから採取した血液は末梢血より2時間以上早く陽性化した。最も適切な対応はどれか。`,
    options:[
      "追加の抗菌薬を投与せず、経過観察する",
      "バンコマイシンを5〜7日間静注して終了する",
      "静注抗菌薬を開始し、経食道心エコーを施行する",
      "経胸壁心エコーで疣贅を認めなければ抗菌薬を投与しない",
      "カテーテル先端培養の結果を待ってから治療を開始する"
    ],
    answer:2,
    explain:{
      core:`<p>本例はDTP（カテーテル血が末梢血より2時間以上早く陽性化）を満たし、CoNSによるCRBSIと診断できる。選択肢A（抗菌薬省略）は、Badia-CebadaらのRCT（2023）が「真に低リスク」のCoNS-CRBSIで抜去後の抗菌薬省略を示唆したため魅力的に見える。しかし「低リスク」は操作的基準で照合する必要がある。同試験は人工血管内デバイスや中等度以上の弁膜症を除外基準としており、本例は生体弁（人工弁）を有する一点で低リスクの枠組みから外れる。臨床的に決定的なのは、CoNS（特にS. epidermidis）が人工弁心内膜炎（PVE）の最多起因菌であること。ゆえに人工弁患者のCoNS菌血症は、カテーテル由来に見えてもPVEを評価しなければならない。人工弁ではTEEがクラスⅠで推奨され、TTEはアーチファクトのため感度が不十分で陰性でも除外できない。したがって、適切な静注抗菌薬（本例はMRSEゆえバンコマイシン基盤）を開始し、TEEでPVEを評価する（C）のが正しい。PVE確認時はブドウ球菌PVEの併用療法（抗ブドウ球菌薬〔バンコマイシンまたはβラクタム〕＋リファンピシンを6週以上、ゲンタマイシンは初期2週間に限定）と外科的評価を含む多職種管理へ移行する。</p>`,
      fig:``,
      evidence:[
        {src:"Badia-Cebada, Antibiotics 2023",pmid:"37237744",point:"低リスクCoNS-CRBSIで抜去後の抗菌薬省略を検討した多施設非劣性RCT。ただしn=27で早期中止＝仮説生成的。人工弁など人工物は除外基準。"},
        {src:"Mermel, IDSA 2009",pmid:"19489710",point:"血管内カテーテル関連感染の診断・管理GL。CoNS-CRBSIは抜去＋5-7日が基本だが、血管内人工物保有例は合併症リスクを考慮する。"}
      ],
      distractors:`<p><b>A（抗菌薬省略）</b>：通常の低リスクCoNSには妥当だが、人工弁が除外基準である点を見落としRCTを過剰適用している。代表性ヒューリスティック＋アンカリング。</p>
<p><b>B（VCM 5-7日で終了）</b>：通常のカテーテル関連CoNSとして処理し、PVE評価を欠く。PVEなら期間も不足。アンカリング＋早期閉鎖。</p>
<p><b>D（TTEで陰性なら投与しない）</b>：心内膜炎を疑う姿勢は正しいが、人工弁でTTEは感度不十分（ESC 2023はTEEを要求）。不完全な検査による誤った安心。</p>
<p><b>E（先端培養待ち）</b>：DTPで既に診断がつき、先端培養は付加価値が低い。重大リスクのある病態で治療開始を遅らせる不作為バイアス。</p>`,
      guideline:[
        "Badia-Cebada RCTの低リスク操作的基準：血行動態安定・免疫正常・人工物（弁/デバイス/関節）なし・短期カテーテル抜去済み・化膿性血栓性静脈炎/転移巣なし・S. lugdunensis除外。",
        "2023 ESC 感染性心内膜炎ガイドライン（Eur Heart J 2023;44(39):3948-4042）：人工弁ではTEEがクラスⅠ。TTEは人工弁で感度不十分。早期PVEの最多起因菌はCoNS・S. aureus。",
        "ブドウ球菌によるPVE：抗ブドウ球菌薬（バンコマイシンまたはβラクタム）＋リファンピシンを6週以上、ゲンタマイシンは初期2週間のみ（アミノグリコシドの毒性を考慮）。外科的評価を含む多職種管理。"
      ],
      points:[
        "低リスクCoNS-CRBSIでは抜去後の抗菌薬省略が新たな選択肢だが（Badia-Cebada RCT 2023、n=27で早期中止＝仮説生成的）、「低リスク」は必ず操作的基準で照合する。人工物・免疫不全・血行動態不安定などがあれば低リスクではない。",
        "コアグラーゼ陰性ブドウ球菌（特にS. epidermidis）は人工弁心内膜炎（PVE）の最多起因菌。人工弁患者のCoNS菌血症は、カテーテル由来に見えてもPVEを必ず評価する。",
        "人工弁が存在/疑われる場合、TEEがクラスⅠ（ESC 2023）。TTEはアーチファクトで感度不十分で、陰性でも除外にならない。",
        "ブドウ球菌PVEの治療は併用療法（抗ブドウ球菌薬＋リファンピシンを6週以上、ゲンタマイシンは初期2週間に限定）で、外科的評価を含む多職種管理を行う。",
        "カテーテル先端培養はDTP等で診断がつけば付加価値が低く、重大リスクのある病態で治療開始を遅らせない。",
        "DTP（陽性化時間差）の評価は、カテーテル血と末梢血の採血量が同等（各ボトル同量）であることが前提となる。採血量が異なると陽性化時間にバイアスが生じる。"
      ],
      refs:[
        "Badia-Cebada L, Carmezim J, Pérez-Rodríguez MT, et al. Randomized Clinical Trial of the Need for Antibiotic Treatment for Low-Risk Catheter-Related Bloodstream Infection Caused by Coagulase-Negative Staphylococci. Antibiotics (Basel). 2023;12(5):839. PMID 37237744.",
        "Mermel LA, Allon M, Bouza E, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: 2009 update by the IDSA. Clin Infect Dis. 2009;49(1):1-45. PMID 19489710.",
        "Delgado V, Ajmone Marsan N, de Waha S, et al. 2023 ESC Guidelines for the management of endocarditis. Eur Heart J. 2023;44(39):3948-4042. doi:10.1093/eurheartj/ehad193."
      ]
    }
  }
,
  /* ===================== Q12 (set3) ===================== */
  {
    dom:"呼吸器", domEn:"RESPIRATORY", category:"呼吸器", setId:"set3",
    title:"COPD：最適化した3剤併用下でも増悪を反復する好酸球高値例への上乗せ",
    meta:"外来·68歳男性·3剤併用最適化後も増悪反復、血中好酸球380/μL",
    stem:`68歳男性。労作時呼吸困難と慢性の湿性咳嗽で通院中のCOPD（GOLD 3相当）。喫煙は40パック年で5年前に禁煙した。過去1年間に中等度の増悪を2回起こし、うち1回は入院を要する重度の増悪であった。現在はフルチカゾンフランカルボン酸エステル／ウメクリジニウム／ビランテロール配合剤（テリルジー®、LABA/LAMA/ICSの3剤併用）を1日1回吸入しており、吸入手技とアドヒアランスは外来で繰り返し確認され良好で、インフルエンザ・肺炎球菌・帯状疱疹ワクチンも接種済みである。既往に高血圧があり、アムロジピン（ノルバスク®）5mgを内服している。安定期の現在、増悪予防のための追加治療を検討している。

来院時：意識清明、血圧128/78mmHg、脈拍78/分・整、呼吸数16/分、SpO₂ 95%（室内気）、体温36.4℃。胸部は両側で呼吸音が減弱し、軽度の連続性ラ音を聴取する。下腿浮腫なし。

検査：スパイロメトリーで気管支拡張薬吸入後のFEV₁ 45%predicted、FEV₁/FVC 0.52。胸部X線で肺の過膨張。心電図は洞調律でQTc 465ms。血液検査でWBC 7,600/μL（好中球60%、リンパ球30%、好酸球5%、単球5%）、Hb 14.2g/dL、血小板22万/μL、AST 22、ALT 19、Cr 0.9mg/dL、血中好酸球数 380/μL。

増悪予防のために追加する治療として、最も適切なものはどれか。`,
    options:[
      "アジスロマイシン（ジスロマック®）の少量長期療法を追加する",
      "吸入ステロイドを高用量の製剤へ変更する",
      "ロフルミラスト（経口PDE4阻害薬）を追加する",
      "デュピルマブ（デュピクセント®）を追加する",
      "プレドニゾロン（プレドニン®）の少量経口維持投与を開始する"
    ],
    answer:3,
    explain:{
      core:`<p><b>症例所見 → 該当する枝 → 正解の導出：</b>本例は最大用量のLABA/LAMA/ICS（3剤配合吸入）に良好なアドヒアランス・吸入手技のもとでも過去1年に増悪を2回（うち入院1回）反復し、<b>血中好酸球380/μL（≥300/μL）</b>という<b>type-2炎症の表現型</b>を示す。GOLD 2026および本邦の適応（2025年3月にCOPDへ適応追加）に照らすと、「好酸球高値＋3剤併用下で増悪継続」という枝に該当する上乗せは<b>好酸球ガイドの生物学的製剤＝デュピルマブ（抗IL-4Rα）</b>であり、正答はD。第3相のBOREAS・NOTUSは、いずれも本例と同じ「eos≥300＋3剤併用下」の集団で中等度〜重度増悪をそれぞれ30%（率比0.70）・34%（率比0.66）抑制し、FEV₁も改善した。抗好酸球（抗IL-5）のメポリズマブもMATINEE（2025）に基づく選択肢だが、本邦のCOPD適応は要確認。</p>
<p>要は、<b>3剤併用の基盤を最適化してもなお増悪する例では「次の一手」を表現型（まず血中好酸球）で選ぶ</b>。本例は好酸球高値ゆえ、旧来の上乗せ（マクロライド長期・ロフルミラスト）より、type-2炎症を直接標的とするLevel Aの生物学的製剤が最も適切となる。</p>
<h3>表現型による上乗せの条件照合</h3>
<table>
<tr><th>表現型（枝）</th><th>該当する上乗せ</th><th>本例の当てはめ</th></tr>
<tr><td>血中好酸球 ≥300/μL＋3剤併用下で増悪継続</td><td><b>生物学的製剤</b>（デュピルマブ／メポリズマブ）</td><td><b>該当</b>（eos 380）→ デュピルマブ＝正解</td></tr>
<tr><td>慢性気管支炎＋FEV₁&lt;50%＋増悪</td><td>ロフルミラスト（経口PDE4阻害薬）</td><td>表現型は合致するが、好酸球高値では生物学的製剤（Level A）が優先／REACTの一次評価は有意水準未達で効果は控えめ／<b>本邦COPD未承認</b></td></tr>
<tr><td>頻回増悪・元喫煙者</td><td>アジスロマイシン少量長期</td><td>QTc 465msでマクロライド長期は不利／耐性誘導・聴力障害の懸念</td></tr>
<tr><td>すでにICSを使用中</td><td>ICS増量は増悪抑制の上乗せに乏しい</td><td>該当（肺炎リスク増）</td></tr>
</table>`,
      fig:``,
      evidence:[
        {src:"BOREAS（NEJM 2023）",pmid:"37272521",point:"eos≥300＋3剤併用下のCOPDでデュピルマブが中等度〜重度増悪を抑制。",rct:true,
         pico:{p:"eos≥300かつ増悪リスク高い3剤併用下のCOPD 939例",
               i:"デュピルマブ300mg 2週毎皮下",
               c:"プラセボ",
               o:"年間中等度〜重度増悪率 0.78 vs 1.10、率比0.70（95%CI 0.58–0.86）、FEV₁ 差+83mL",
               nnt:"約3.1（年間増悪 約0.32回/人の差より概算）",
               caveat:"eos≥300に限定した効果"}},
        {src:"NOTUS（NEJM 2024・確認試験）",pmid:"38767614",point:"BOREASを再現。",rct:true,
         pico:{p:"eos≥300のCOPD 935例",
               i:"デュピルマブ300mg 2週毎",
               c:"プラセボ",
               o:"年間増悪率 0.86 vs 1.30、率比0.66（95%CI 0.54–0.82）、FEV₁ 差+82mL（12週）",
               nnt:"約2.3（増悪 約0.44回/人差より概算）",
               caveat:"SGRQは有意差なし"}},
        {src:"MATINEE（NEJM 2025・メポリズマブ）",pmid:"40305712",point:"eosinophilic COPDでメポリズマブが増悪を抑制（慢性気管支炎の有無を問わず）。",rct:true,
         pico:{p:"eos≥300＋増悪歴の3剤併用下COPD 804例",
               i:"メポリズマブ100mg 4週毎皮下",
               c:"プラセボ",
               o:"年間増悪率 0.80 vs 1.01、率比0.79（95%CI 0.66–0.94）、初回増悪までHR 0.77",
               nnt:"—",
               caveat:"本邦COPD適応は要確認"}},
        {src:"抗体薬メタ解析（Ann ATS 2025）",pmid:"39589286",point:"好酸球性COPDの8RCT・4512例で、モノクローナル抗体が年間増悪を抑制（<b>率比0.79、95%CI 0.73–0.86</b>）。デュピルマブが最良傾向、benralizumab等は不発＝「抗好酸球なら一律有効」ではない。",rct:false},
        {src:"Albert（NEJM 2011・アジスロマイシン）",pmid:"21864166",point:"増悪リスクの高いCOPDでアジスロマイシン250mg/日×1年が増悪を抑制。",rct:true,
         pico:{p:"増悪高リスクCOPD（難聴・安静時頻脈・QT延長リスク例は除外）1142例",
               i:"アジスロマイシン250mg/日",
               c:"プラセボ",
               o:"増悪HR 0.73（95%CI 0.63–0.84）、初回増悪まで266 vs 174日",
               nnt:"—",
               caveat:"聴力低下25%対20%・耐性菌増加"}},
        {src:"REACT（Lancet 2015・ロフルミラスト）",pmid:"25684586",point:"重症COPD＋慢性気管支炎＋増悪でICS/LABA下でもロフルミラストが増悪を抑制。",rct:true,
         pico:{p:"FEV₁<50%＋慢性気管支炎＋≥2増悪・ICS/LABA下 1945例",
               i:"ロフルミラスト500μg/日",
               c:"プラセボ",
               o:"年間中等度〜重度増悪率比0.868（95%CI 0.753–1.002、負の二項回帰0.858、0.740–0.995）",
               nnt:"—",
               caveat:"有害事象・中止が多い（体重減少・下痢）"}}
      ],
      distractors:`<p><b>A. アジスロマイシンの少量長期療法</b>：頻回増悪、とくに元喫煙者では増悪抑制の選択肢（Albert 2011：増悪HR 0.73）だが、<b>好酸球高値ではtype-2を標的とする生物学的製剤が優先</b>される。加えて本例は<b>QTc 465ms</b>（男性の正常上限は概ね450msで、本例は延長域）で、Albert試験自体がQT延長・安静時頻脈・難聴の高リスク例を除外しており、長期マクロライドの安全性が劣る（聴力低下25%対20%）。マクロライド耐性の誘導も懸念。<span class="bias">アンカリング／慣習（既存の第一選択への固執）</span></p>
<p><b>B. 吸入ステロイドを高用量へ変更</b>：本例はすでにICSを含む3剤併用中で、ICS増量による増悪抑制の上乗せは乏しく、<b>肺炎リスクが増える</b>。好酸球高値はICS継続を支持するが「増量」は別問題。<span class="bias">天井効果の無視／アンカリング</span></p>
<p><b>C. ロフルミラスト</b>：慢性気管支炎＋FEV₁&lt;50%＋増悪という表現型には合致する（REACT）。しかし一次評価は有意水準未達（率比0.868、95%CI 0.753–1.002、p=0.0529）で効果は控えめ、消化器系有害事象・体重減少による中止も多く、<b>好酸球高値では生物学的製剤（Level A）が優先</b>される。さらに<b>本邦では経口ロフルミラストはCOPD未承認</b>。<span class="bias">代表性ヒューリスティック（表現型合致への飛びつき）</span></p>
<p><b>E. プレドニゾロンの少量経口維持</b>：安定期COPDに対する全身ステロイドの<b>維持投与は増悪予防のエビデンスがなく</b>、感染・骨粗鬆症・高血糖・筋障害などの害が上回る。急性増悪の短期投与（最大5日）とは全く異なる。<span class="bias">短期効果からの誤外挿／作為バイアス（commission）</span></p>`,
      guideline:[
        "<b>GOLD 2026 Report</b>：LABA+LAMA+ICS下で<b>血中好酸球≥300/μLかつ増悪継続</b>の患者に、デュピルマブ（第一）またはメポリズマブの追加を考慮（生物学的製剤の新項目 Figure 3.11、いずれも<b>Level A</b>）。",
        "<b>本邦</b>：デュピルマブ（デュピクセント®）は2025年3月に「慢性閉塞性肺疾患（既存治療で効果不十分な患者に限る）」へ適応追加。血中好酸球≥300/μL＋増悪歴が想定対象（用法用量・詳細は添付文書を要確認）。",
        "メポリズマブの本邦COPD適応、経口ロフルミラストの本邦承認は<b>要確認</b>（現時点で経口ロフルミラストはCOPD未承認）。アジスロマイシン少量長期は本邦COPDでは適応外使用。",
        "3剤併用でも増悪する場合は、まず<b>アドヒアランス・吸入手技・併存症（心血管・気管支拡張症・GERD等）・喫煙</b>を最適化したうえで表現型別に上乗せを選ぶ（GOLD 2026はexacerbation章と構造化フォローを重視）。"
      ],
      points:[
        "3剤併用（LABA/LAMA/ICS）を最適化（アドヒアランス・吸入手技・ワクチン・併存症）してもなお増悪する例は、次の一手を<b>表現型</b>で選ぶ。最初に見るのは<b>血中好酸球</b>。",
        "血中好酸球<b>≥300/μL＋増悪継続</b>はtype-2炎症の表現型。<b>デュピルマブ（抗IL-4Rα）</b>がGOLD 2026でLevel A、本邦でも2025年にCOPD適応追加。BOREAS/NOTUSで増悪を30–34%抑制（率比0.70／0.66）。",
        "メポリズマブ（抗IL-5、MATINEE 2025・率比0.79）も好酸球≥300の選択肢だが本邦COPD適応は要確認。benralizumab等は増悪抑制を示せず、<b>「抗好酸球＝一律有効」ではない</b>。",
        "好酸球が低い/慢性気管支炎＋FEV₁<50%＋増悪ではロフルミラスト、頻回増悪の元喫煙者ではアジスロマイシン少量長期が枝。ただし効果は控えめで、QT延長・難聴・耐性・国内未承認等の制約があり、<b>好酸球高値なら生物学的製剤が優先</b>。",
        "すでにICS使用中のICS増量や、安定期の全身ステロイド維持は増悪予防の上乗せ益に乏しく<b>害（肺炎・全身性副作用）</b>が上回る。急性増悪の短期ステロイド（最大5日）と混同しない。"
      ],
      refs:[
        "Bhatt SP, Rabe KF, Hanania NA, et al. Dupilumab for COPD with Type 2 Inflammation Indicated by Eosinophil Counts. N Engl J Med. 2023;389(3):205-214. PMID 37272521. doi:10.1056/NEJMoa2303951",
        "Bhatt SP, Rabe KF, Hanania NA, et al. Dupilumab for COPD with Blood Eosinophil Evidence of Type 2 Inflammation. N Engl J Med. 2024;390(24):2274-2283. PMID 38767614. doi:10.1056/NEJMoa2401304",
        "Sciurba FC, Criner GJ, Christenson SA, et al. Mepolizumab to Prevent Exacerbations of COPD with an Eosinophilic Phenotype. N Engl J Med. 2025;392(17):1710-1720. PMID 40305712. doi:10.1056/NEJMoa2413181",
        "Mohamed MMG, Sharma S, Guddeti RR, et al. Role of Monoclonal Antibodies in the Management of Eosinophilic COPD: A Meta-analysis of Randomized Controlled Trials. Ann Am Thorac Soc. 2025;22(5):768-775. PMID 39589286. doi:10.1513/AnnalsATS.202406-597OC",
        "Albert RK, Connett J, Bailey WC, et al. Azithromycin for Prevention of Exacerbations of COPD. N Engl J Med. 2011;365(8):689-698. PMID 21864166. doi:10.1056/NEJMoa1104623",
        "Martinez FJ, Calverley PMA, Goehring UM, et al. Effect of roflumilast on exacerbations in patients with severe COPD uncontrolled by combination therapy (REACT). Lancet. 2015;385(9971):857-866. PMID 25684586. doi:10.1016/S0140-6736(14)62410-7",
        "Global Initiative for Chronic Obstructive Lung Disease. Global Strategy for the Diagnosis, Management, and Prevention of COPD: 2026 Report. 2025.（生物学的製剤 Figure 3.11、増悪管理章。章・図番号は要確認）"
      ]
    }
  },
  /* ===================== Q13 (set3) ===================== */
  {
    dom:"循環器", domEn:"CARDIOLOGY", category:"循環器", setId:"set3",
    title:"反射性失神：難治・心抑制型の治療を「表現型と年齢」で選ぶ",
    meta:"外来·70歳男性·外傷を伴う難治の反射性失神、チルトで8秒の洞停止",
    stem:`70歳男性。過去1年間に前触れのない失神を4回繰り返し、うち2回は転倒による顔面挫創・右手関節骨折を来した。発作は状況を選ばず突然生じ、明らかな誘因や前駆症状に乏しい。数か月にわたり生活指導（十分な水分・塩分摂取、失神前兆時の身体的カウンタープレッシャー法、誘因回避）を続けたが、再発が続いている。既往に高血圧（アムロジピン内服）、脂質異常症。器質的心疾患や突然死の家族歴はない。

評価：安静時心電図は洞調律でPQ・QT正常、脚ブロックはない。経胸壁心エコーで弁膜症・左室機能低下・心肥大はない。24時間ホルター心電図で有意な徐脈や心停止はなく、運動負荷試験でも異常はない。ヘッドアップ・チルト試験で失神が誘発され、その際に8秒間の洞停止を伴う血圧低下を認めた。

最も適切な治療はどれか。`,
    options:[
      "デュアルチャンバー（DDD）ペースメーカを植え込む",
      "ミドドリンを開始する",
      "フルドロコルチゾンを開始する",
      "β遮断薬（メトプロロール）を開始する",
      "水分・塩分の十分な摂取と身体的カウンタープレッシャー法の指導を継続する"
    ],
    answer:0,
    explain:{
      core:`<p><b>症例所見 → 該当枝 → 正解の導出：</b>本例は<b>70歳（＞40歳）</b>で、過去1年に外傷を伴う<b>予測不能な反射性失神を反復</b>し、教育・誘因回避・補液・カウンタープレッシャーという<b>一次治療に抵抗性</b>、器質的心疾患はなく、チルトで<b>8秒の洞停止（心抑制型）</b>を記録した。ESC 2018は、自然発生の記録された心停止にはペーシングをClass IIa、本例のような<b>チルト誘発の心抑制</b>（＞40歳・代替治療失敗後）にはClass IIbで推奨し、RCTの<b>BIOSync CLS</b>はチルト誘発asystoleを伴う難治反射性失神でCLSペーシングが失神を著減（16%対53%、HR 0.23）した。したがって正答はA。反射性失神＝「安心と補液だけ」で止めない——<b>年齢と機序（血管抑制か心抑制か）で治療を選ぶ</b>のが要点で、薬物（ミドドリン・フルドロコルチゾン）は低血圧（血管抑制）表現型・若年向けのClass IIb、β遮断薬はClass III（非推奨）である。</p>
<h3>反射性失神の治療を「表現型と年齢」で選ぶ（ESC 2018）</h3>
<table>
<tr><th>患者像（枝）</th><th>エビデンスに基づく治療</th><th>本例の当てはめ</th></tr>
<tr><td>全例の土台（一次治療）</td><td>教育・誘因回避・補液・身体的カウンタープレッシャー</td><td>既に数か月施行 → 難治</td></tr>
<tr><td>若年・高頻度・低血圧（血管抑制）表現型</td><td>ミドドリン（IIb・POST4でRR 0.69）</td><td>非該当（高齢・心抑制型）</td></tr>
<tr><td>低血圧表現型（非高齢・非高血圧）</td><td>フルドロコルチゾン（IIb・POST2）</td><td><b>高齢・高血圧で禁忌</b></td></tr>
<tr><td>反射性失神一般</td><td>β遮断薬は Class III（非推奨）</td><td>誤り</td></tr>
<tr><td><b>＞40歳＋心抑制型＋難治</b>（自然の心停止=IIa／チルト誘発=IIb）</td><td><b>デュアルチャンバー・ペーシング（BIOSync CLSで裏づけ）</b></td><td><b>本例はチルト誘発→IIb＋RCT根拠 → 正答A</b></td></tr>
</table>
<p>新規治療として<b>cardioneuroablation（CNA）</b>（神経節叢の焼灼）が心抑制型VVSに有望で、RCTのROMANでは失神再発 8%対54%（P=0.0004）。ただし小規模・単施設で対象は主に60歳未満であり、高齢・血管抑制優位では現時点で研究段階。本例（70歳）では第一選択にならない。</p>`,
      fig:``,
      evidence:[
        {src:"BIOSync CLS（Eur Heart J 2021）",pmid:"33279955",point:"≥40歳・難治反射性失神＋チルト誘発asystoleでCLSペーシングが失神を著減。",rct:true,
         pico:{p:"≥40歳・過去1年に≥2回の重症で予測不能な反射性失神＋チルト誘発の3秒超asystole 127例",
               i:"デュアルチャンバーPM（CLS）ON",
               c:"PM OFF",
               o:"失神再発 10(16%) vs 34(53%)、HR 0.23（P=0.00005）、1年再発19% vs 53%",
               nnt:"約3（率差37%より概算）",
               caveat:"チルトasystoleで選択。血管抑制成分が残ると効果減"}},
        {src:"ESC 2018 失神ガイドライン",pmid:"29562304",point:"反射性失神の土台は教育・誘因回避・補液・カウンタープレッシャー。低血圧表現型にミドドリン/フルドロコルチゾン（IIb）。β遮断薬は III（非推奨）。＞40歳＋心抑制型＋記録された心停止＋難治にデュアルチャンバー・ペーシング（IIa）。",rct:false},
        {src:"POST4 ミドドリン（Ann Intern Med 2021）",pmid:"34339231",point:"再発性VVSでミドドリンが失神を抑制。",rct:true,
         pico:{p:"器質的心疾患のない再発性VVS 133例（年齢中央値32、73%女性）",
               i:"ミドドリン",
               c:"プラセボ",
               o:"≥1回失神 42% vs 61%、RR 0.69（95%CI 0.49–0.97）、ARR 19%、NNT 5.3",
               nnt:"—",
               caveat:"若年・高頻度・小規模・短期"}},
        {src:"POST2 フルドロコルチゾン（JACC 2016）",pmid:"27364043",point:"フルドロコルチゾンのVVS抑制。",rct:true,
         pico:{p:"再発性VVS 210例（年齢中央値30）",
               i:"フルドロコルチゾン0.05–0.2mg",
               c:"プラセボ",
               o:"失神再発 HR 0.69（0.46–1.03, p=0.069）で一次評価未達、用量安定2週後はHR 0.51（0.28–0.89）",
               nnt:"—",
               caveat:"高用量要・高齢/高血圧に禁忌"}},
        {src:"ROMAN cardioneuroablation（JACC EP 2023）",pmid:"36114133",point:"心抑制型VVSへのCNAの初のRCT。",rct:true,
         pico:{p:"心抑制型/混合型VVS＋アトロピン陽性 48例（平均38歳）",
               i:"cardioneuroablation",
               c:"最適非薬物療法",
               o:"失神再発 8% vs 54%（P=0.0004）、QOL改善",
               nnt:"—",
               caveat:"単施設・小規模・主に60歳未満・長期/高齢データ乏しく新興"}}
      ],
      distractors:`<p><b>B. ミドドリン</b>：低血圧（血管抑制）表現型・若年でRCT支持がある（POST4：RR 0.69、NNT 5.3）が、本例は高齢で機序が<b>心抑制型（asystole）</b>であり、昇圧薬では心停止に対応できずペーシングが優先。高齢者では臥位高血圧にも注意。<span class="bias">「まず薬」への固執／表現型の無視</span></p>
<p><b>C. フルドロコルチゾン</b>：低血圧表現型のIIb薬だが、POST2では一次評価を満たさず（HR 0.69, p=0.069）、かつ<b>高齢・高血圧には禁忌</b>（本例は70歳・高血圧）。<span class="bias">禁忌・エビデンスの見落とし</span></p>
<p><b>D. β遮断薬（メトプロロール）</b>：反射性失神に対して<b>Class III（非推奨）</b>（POST試験は陰性）。<span class="bias">古い慣習／推奨クラスの無視</span></p>
<p><b>E. 一次治療の継続</b>：教育・補液・カウンタープレッシャーは全例の土台だが、本例は数か月施行しても外傷を伴う失神を反復する難治例で、継続のみは<b>過小治療</b>。<span class="bias">現状維持バイアス／不作為</span></p>`,
      guideline:[
        "<b>ESC 2018</b>：反射性失神の土台は教育・安心・誘因回避・補液・身体的カウンタープレッシャー（一次治療）。低血圧表現型にミドドリンまたはフルドロコルチゾン（IIb）。<b>β遮断薬は Class III（非推奨）</b>。ペーシングは<b>自然発生の記録された心停止</b>にClass IIa、<b>チルト誘発の心抑制</b>（＞40歳・代替治療失敗後）にClass IIb。",
        "<b>BIOSync CLS（2021）</b>：≥40歳・重症難治の反射性失神＋チルト誘発asystoleにCLSペーシングが再発を著減（HR 0.23）。チルト試験を候補選択に活用。",
        "<b>cardioneuroablation（ROMAN 2023）</b>：心抑制型VVSに有望（8%対54%）だが小規模・<60歳中心で新興。高齢・血管抑制優位では研究段階。",
        "<b>本邦</b>：日本循環器学会の単独「失神の診断・治療ガイドライン」は2012年版が最新で、近年は「不整脈の診断とリスク評価に関するガイドライン」等で部分的に扱われる。本問はより新しいエビデンス（ESC 2018・BIOSync CLS等）に基づく。"
      ],
      points:[
        "反射性（血管迷走神経性）失神の治療は「表現型（血管抑制 vs 心抑制）と年齢」で選ぶ。土台は教育・誘因回避・補液・身体的カウンタープレッシャー（全例）。「安心と補液だけ」で止めない。",
        "若年・高頻度・低血圧表現型ではミドドリンがRCT支持（POST4：RR 0.69、NNT 5.3）。フルドロコルチゾンはIIbで限定的（POST2で一次評価未達）、<b>高齢・高血圧に禁忌</b>。",
        "<b>β遮断薬は反射性失神にClass III（非推奨）</b>。「とりあえずβ遮断」は誤り。",
        "<b>＞40歳・心抑制型・難治の反射性失神</b>にはペーシングを検討する枝がある。自然発生の記録された心停止はESC IIa、<b>チルト誘発の心抑制はIIb</b>だが、RCTのBIOSync CLS（HR 0.23）がチルト誘発asystole例での有効性を示す。",
        "cardioneuroablation（ROMAN：8%対54%）は心抑制型VVSに有望だが小規模・<60歳中心で新興。高齢・血管抑制優位では現時点で研究段階。"
      ],
      refs:[
        "Brignole M, Russo V, Arabia F, et al. Cardiac pacing in severe recurrent reflex syncope and tilt-induced asystole (BIOSync CLS). Eur Heart J. 2021;42(5):508-516. PMID 33279955. doi:10.1093/eurheartj/ehaa936",
        "Brignole M, Moya A, de Lange FJ, et al. 2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J. 2018;39(21):1883-1948. PMID 29562304. doi:10.1093/eurheartj/ehy037",
        "Sheldon R, Faris P, Tang A, et al. Midodrine for the Prevention of Vasovagal Syncope (POST4): A Randomized Clinical Trial. Ann Intern Med. 2021;174(10):1349-1356. PMID 34339231. doi:10.7326/M20-5415",
        "Sheldon R, Raj SR, Rose MS, et al. Fludrocortisone for the Prevention of Vasovagal Syncope (POST2): A Randomized, Placebo-Controlled Trial. J Am Coll Cardiol. 2016;68(1):1-9. PMID 27364043. doi:10.1016/j.jacc.2016.04.030",
        "Piotrowski R, Baran J, Sikorska A, et al. Cardioneuroablation for Reflex Syncope (ROMAN): Efficacy and Effects on Autonomic Cardiac Regulation—A Prospective Randomized Trial. JACC Clin Electrophysiol. 2023;9(1):85-95. PMID 36114133. doi:10.1016/j.jacep.2022.08.011"
      ]
    }
  },
  /* ===================== Q14 (set3) ===================== */
  {
    dom:"神経", domEn:"NEUROLOGY", category:"神経", setId:"set3",
    title:"片頭痛：反復性・難治例の予防治療を\"アップデート\"で選ぶ",
    meta:"外来·38歳女性·月10〜12日の反復性片頭痛、従来予防薬2剤が無効/不耐",
    stem:`38歳女性。10年来の前兆のない片頭痛。ここ半年で頻度が増し、現在は月に10〜12日の片頭痛発作があり、寝込んで仕事を休むことも多い。発作時はスマトリプタン（イミグラン®）が有効だが、月に10日ほど使用している。予防目的でこれまでにプロプラノロール（インデラル®）を試みたが徐脈と強い倦怠感で中止し、トピラマート（トピナ®）も認知機能の低下と感覚異常で中止した。現在妊娠はしておらず妊娠の予定もないが、妊娠可能年齢である。既往に虚血性心疾患や脳血管障害はなく、血圧・心電図は正常で、神経学的異常もない。

今後の治療方針として最も適切なものはどれか。`,
    options:[
      "A型ボツリヌス毒素（ボトックス®）の注射を開始する",
      "ガルカネズマブ（エムガルティ®）を開始する",
      "バルプロ酸（デパケン®）を開始する",
      "頭痛時にオピオイドを頓用する",
      "別のβ遮断薬（メトプロロール、セロケン®）を開始する"
    ],
    answer:1,
    explain:{
      core:`<p><b>症例所見 → 該当枝 → 正解の導出：</b>本例は前兆のない<b>反復性片頭痛</b>で、月10〜12日（＝月15日未満であり<b>慢性片頭痛ではない</b>）と高頻度かつ高度な生活障害があり、急性期トリプタンは月10日と<b>薬物乱用域に近い</b>。予防のプロプラノロール・トピラマートは無効/不耐で中止済み。ここで「従来予防薬が無効/不耐」という枝に該当し、<b>AHS 2024</b>（CGRP関連薬を第一選択に格上げ）および本邦（抗CGRP抗体は2021年承認、日本頭痛学会 暫定GLは従来薬の無効/不耐/禁忌を要件）に照らすと、次の一手は<b>抗CGRPモノクローナル抗体（ガルカネズマブ等）</b>で、正答はB。抗CGRP抗体はSTRIVE等で片頭痛日数・急性期薬使用・障害を有意に減らす。要は、<b>反復性か慢性か</b>／<b>従来薬の無効・不耐・禁忌</b>／<b>患者背景（妊娠可能性・薬物乱用）</b>を読み、治療を選ぶ。</p>
<h3>片頭痛予防を"患者像"で選ぶ</h3>
<table>
<tr><th>患者像（枝）</th><th>適切な治療</th><th>本例の当てはめ</th></tr>
<tr><td>反復性（月15日未満）＋従来予防薬が無効/不耐＋障害大</td><td><b>抗CGRP関連薬</b>（抗体薬／ゲパント。AHS2024第一選択・本邦承認）</td><td><b>該当 → 正答B</b></td></tr>
<tr><td>慢性片頭痛（月15日以上、うち片頭痛8日以上）</td><td>A型ボツリヌス毒素（PREEMPT）</td><td>非該当（反復性）→ A不適</td></tr>
<tr><td>妊娠可能年齢の女性</td><td>バルプロ酸・トピラマートは催奇形性で回避</td><td>該当 → C不適</td></tr>
<tr><td>従来予防薬をクラス効果（徐脈等）で不耐中止</td><td>同一クラスの再挑戦は避け、抗CGRP関連薬へ</td><td>本例はβ遮断薬で徐脈 → E不適</td></tr>
<tr><td>急性期薬の使用過多・オピオイド</td><td>薬物乱用頭痛（MOH）／片頭痛にオピオイドは非推奨</td><td>Dは不適</td></tr>
</table>`,
      fig:``,
      evidence:[
        {src:"AHS 2024 ポジションステートメント（Headache 2024）",pmid:"38466028",point:"CGRP関連薬（抗体薬 erenumab/fremanezumab/galcanezumab/eptinezumab、ゲパント rimegepant/atogepant）は、<b>他剤の失敗を要さず片頭痛予防の第一選択</b>とすべき。効果・忍容性は従来薬と同等以上、重篤有害事象はまれ。",rct:false},
        {src:"STRIVE（エレヌマブ・NEJM 2017）",pmid:"29171821",point:"反復性片頭痛でのCGRP受容体抗体の予防効果。",rct:true,
         pico:{p:"反復性片頭痛（ベースライン平均8.3片頭痛日/月）955例",
               i:"エレヌマブ70/140mg 月1回皮下",
               c:"プラセボ",
               o:"片頭痛日/月 −3.2/−3.7 vs −1.8（P<0.001）、≥50%減少 43.3%/50.0% vs 26.6%、急性期薬使用も減少",
               nnt:"—",
               caveat:"反復性が対象、長期安全性は要追跡"}},
        {src:"ADVANCE（アトゲパント・NEJM 2021）",pmid:"34407343",point:"経口ゲパントの予防効果。",rct:true,
         pico:{p:"月4〜14片頭痛日の成人 873例",
               i:"アトゲパント10/30/60mg 経口1日1回",
               c:"プラセボ",
               o:"片頭痛日/月 −3.7/−3.9/−4.2 vs −2.5（プラセボとの差 −1.2〔95%CI −1.8〜−0.6〕/−1.4〔−1.9〜−0.8〕/−1.7〔−2.3〜−1.2〕、P<0.001）",
               nnt:"—",
               caveat:"12週の比較的短期。便秘・悪心"}},
        {src:"PREEMPT（A型ボツリヌス毒素・Headache 2010）",pmid:"20487038",point:"<b>慢性片頭痛</b>でのボツリヌス毒素の予防効果（＝適応は慢性に限る）。",rct:true,
         pico:{p:"慢性片頭痛の成人 1384例",
               i:"A型ボツリヌス毒素155–195U 12週毎",
               c:"プラセボ",
               o:"頭痛日/月 −8.4 vs −6.6（P<0.001）",
               nnt:"—",
               caveat:"対象は慢性片頭痛。反復性には適応外"}}
      ],
      distractors:`<p><b>A. A型ボツリヌス毒素</b>：<b>慢性片頭痛（月15日以上）にのみ</b>有効性・適応が確立（PREEMPT）。本例は反復性（月10〜12日）で適応外。<span class="bias">適応疾患の取り違え（episodic/chronicの混同）</span></p>
<p><b>C. バルプロ酸</b>：片頭痛予防効果はあるが、<b>妊娠可能年齢の女性では催奇形性・児の神経発達影響のため原則回避</b>（PMDA/EMA警告）。<span class="bias">禁忌・患者背景の無視</span></p>
<p><b>D. オピオイド頓用</b>：片頭痛にオピオイドは推奨されず、<b>依存・薬物乱用頭痛</b>を招く。予防にもならない。<span class="bias">不適切な急性期薬の選択</span></p>
<p><b>E. 別のβ遮断薬（メトプロロール）</b>：本例はプロプラノロール（β遮断薬）で<b>徐脈というクラス効果</b>と倦怠感を来して中止しており、同じβ遮断薬への切り替えは同様の有害事象を招きやすく不適。従来薬2剤に無効/不耐となった時点で抗CGRP関連薬が妥当（本例は既にトリプタンが月10日と乱用域で、急性期薬の適正化も要する）。<span class="bias">同一クラスへの切り替え（クラス効果の無視）</span></p>`,
      guideline:[
        "<b>AHS 2024</b>：CGRP関連薬（抗体薬・ゲパント）は<b>他剤の失敗を要さず第一選択</b>。従来の第一選択薬（プロプラノロール／メトプロロール、アミトリプチリン、トピラマート、バルプロ酸、カンデサルタン）と並ぶ選択肢。",
        "<b>本邦</b>：抗CGRP抗体（ガルカネズマブ・フレマネズマブ・エレヌマブ）2021年承認、経口ゲパント<b>リメゲパント（予防＋急性期）2025年承認</b>。日本頭痛学会の暫定GLは、頻度（月4日以上等）に加え<b>従来予防薬の無効/不耐/禁忌</b>を要件とする（AHS 2024の\"第一選択化\"とは差、細目は要確認）。なお抗CGRP抗体は半減期が長く、妊娠可能年齢では避妊の相談を要する（短半減期のゲパントも選択肢）。",
        "<b>A型ボツリヌス毒素は（欧米では）慢性片頭痛にのみ適応</b>（PREEMPT）。反復性には用いず、<b>本邦では片頭痛に未承認</b>。",
        "急性期薬の使用過多（トリプタン月10日以上、複合鎮痛薬・オピオイド・エルゴタミン）は<b>薬物乱用頭痛（MOH）</b>を招く。オピオイド・バルビツールは片頭痛に非推奨。"
      ],
      points:[
        "片頭痛予防の適応は頻度（月4日以上等）＋生活障害。従来予防薬（β遮断薬・アミトリプチリン・トピラマート・バルプロ酸・カンデサルタン）を土台に、<b>無効/不耐/禁忌なら抗CGRP関連薬へ</b>。",
        "AHS 2024で抗CGRP関連薬（抗体薬・ゲパント）は<b>\"他剤失敗を要さず第一選択\"</b>に格上げ。本邦も抗CGRP抗体2021・リメゲパント2025承認（頭痛学会暫定GLは従来薬の無効/不耐/禁忌を要件）。",
        "<b>A型ボツリヌス毒素は慢性片頭痛（月15日以上）にのみ適応</b>（PREEMPT）。反復性（episodic）には使わない——episodic/chronicの区別が鍵。",
        "妊娠可能年齢の女性では<b>バルプロ酸・トピラマートの催奇形性</b>に注意（バルプロ酸は原則回避）。",
        "急性期薬の使用過多（トリプタン月10日以上、オピオイド・バルビツール・複合鎮痛薬）は<b>薬物乱用頭痛</b>を招く。オピオイドは片頭痛に非推奨。予防導入と急性期薬の適正化を同時に行う。"
      ],
      refs:[
        "Charles AC, Digre KB, Goadsby PJ, et al. Calcitonin gene-related peptide-targeting therapies are a first-line option for the prevention of migraine: An American Headache Society position statement update. Headache. 2024;64(4):333-341. PMID 38466028. doi:10.1111/head.14692",
        "Goadsby PJ, Reuter U, Hallström Y, et al. A Controlled Trial of Erenumab for Episodic Migraine (STRIVE). N Engl J Med. 2017;377(22):2123-2132. PMID 29171821. doi:10.1056/NEJMoa1705848",
        "Ailani J, Lipton RB, Goadsby PJ, et al. Atogepant for the Preventive Treatment of Migraine (ADVANCE). N Engl J Med. 2021;385(8):695-706. PMID 34407343. doi:10.1056/NEJMoa2035908",
        "Dodick DW, Turkel CC, DeGryse RE, et al. OnabotulinumtoxinA for treatment of chronic migraine: pooled results from the PREEMPT clinical program. Headache. 2010;50(6):921-936. PMID 20487038. doi:10.1111/j.1526-4610.2010.01678.x"
      ]
    }
  },
  /* ===================== Q15 (set3) ===================== */
  {
    dom:"内分泌・代謝", domEn:"ENDOCRINE", category:"内分泌・代謝", setId:"set3",
    title:"無症候性原発性副甲状腺機能亢進症の手術適応判定",
    meta:"外来·62歳女性·無症候性PHPT、腰椎・大腿は保たれるが橈骨遠位1/3でBMD基準に該当",
    stem:`62歳女性。健康診断で高カルシウム血症を指摘され受診した。倦怠感・多飲多尿・骨痛・腹痛はなく、尿路結石の既往もない。50歳で閉経。既往に高血圧があり、アムロジピンを内服。カルシウム製剤・ビタミンD製剤・サイアザイド・リチウムの内服はない。母に高カルシウム血症や尿路結石の指摘歴はない。血圧128/76mmHg、脈拍68/分、BMI22。身体所見に異常を認めない。血液検査:アルブミン補正血清カルシウム10.8mg/dL(基準8.8〜10.2)、リン2.5mg/dL(基準2.5〜4.5)、intact PTH 90pg/mL(基準15〜65)、25-ヒドロキシビタミンD 34ng/mL、クレアチニン0.72mg/dL、eGFR 68mL/分/1.73m²。24時間蓄尿:尿中カルシウム210mg/日、カルシウム/クレアチニンクリアランス比0.025。腎超音波:結石・石灰化を認めない。胸腰椎X線:椎体骨折を認めない。DXA:腰椎L1-4 Tスコア−1.9、大腿骨頸部Tスコア−2.2、橈骨遠位1/3 Tスコア−2.7。最も適切な対応はどれか。`,
    options:[
      "経過観察を継続する",
      "アレンドロネートを投与する",
      "副甲状腺摘出術を行う",
      "シナカルセトを投与する",
      "デノスマブを投与する"
    ],
    answer:2,
    explain:{
      core:`<p>本症例はアルブミン補正カルシウム高値かつintact PTH高値で、二次性の原因(CKD stage3以上・ビタミンD欠乏)がなく、原発性副甲状腺機能亢進症(PHPT)と診断できる。カルシウム/クレアチニンクリアランス比0.025(&gt;0.02)と家族歴陰性から家族性低カルシウム尿性高カルシウム血症(FHH)は否定的である。無症候性PHPTの手術適応は第5回国際ワークショップ(2022)の6項目のいずれか<b>1つ</b>を満たせば成立する。本症例を各基準に照合すると次のとおり。</p><table><thead><tr><th>適応基準(第5回2022)</th><th>閾値</th><th>本症例</th><th>該当</th></tr></thead><tbody><tr><td>血清カルシウム</td><td>上限+1.0mg/dL超</td><td>+0.6mg/dL</td><td>×</td></tr><tr><td>椎体骨折</td><td>X線/CT/MRI/VFA</td><td>なし</td><td>×</td></tr><tr><td>骨密度(BMD)</td><td>Tスコア≤−2.5(腰椎/大腿/<b>橈骨33%</b>)</td><td><b>橈骨遠位1/3 −2.7</b></td><td><b>○</b></td></tr><tr><td>腎機能</td><td>eGFR/CrCl&lt;60</td><td>68</td><td>×</td></tr><tr><td>腎結石/腎石灰化</td><td>画像で陽性</td><td>なし</td><td>×</td></tr><tr><td>高カルシウム尿</td><td>♀&gt;250 / ♂&gt;300mg/日</td><td>210mg/日</td><td>×</td></tr><tr><td>年齢</td><td>&lt;50歳</td><td>62歳</td><td>×</td></tr></tbody></table><p><b>導出:</b>血清カルシウム(+0.6)・eGFR(68)・尿中カルシウム(210,女性閾値250未満)・椎体骨折なし・腎結石なし・年齢62歳と、6項目のうち5項目は非該当である。しかし<b>橈骨遠位1/3のTスコア−2.7が骨格基準(≤−2.5)に該当</b>する。PHPTでは副甲状腺ホルモンの持続作用で皮質骨優位に骨量が減少するため、腰椎(−1.9)・大腿骨頸部(−2.2)が保たれていても皮質骨に富む橈骨遠位1/3で基準を満たすことがある。ゆえに橈骨遠位1/3のDXA測定が必須であり、この1項目の該当をもって手術適応となる。無症候であっても根治的な副甲状腺摘出術が最も適切な対応である。</p>`,
      fig:``,
      evidence:[
        {src:"第5回国際ワークショップ Summary,JBMR2022",pmid:"36245251",point:"無症候性PHPTの手術適応6項目(いずれか1つで手術)。第5回で腎基準を改訂し高カルシウム尿を性別特異的閾値(♀>250・♂>300mg/日)で評価。DXAは腰椎・大腿に加え橈骨遠位1/3を測定。",rct:false},
        {src:"SIPH study,JBMR2017",pmid:"28543873",point:"軽症無症候性PHPTで、観察群は5年でBMDが有意に低下し、手術群は観察群より有意に良好(群間治療効果)。ベースラインからの有意増加は手術群でも腰椎のみ。長期観察は骨の健康上の懸念。",rct:true,
         pico:{p:"軽症無症候性PHPT 191例(5年追跡、145例解析・DXA有効110例)",
               i:"副甲状腺摘出術(PTX)",
               c:"経過観察(OBS)",
               o:"手術群 vs 観察群の群間治療効果が有意(腰椎p=0.011、大腿骨頸部p<0.001、超遠位橈骨p=0.042、全身p<0.001)。観察群は腰椎を除く全部位で有意低下。ベースラインからの有意増加は手術群でも腰椎のみ。",
               nnt:"該当なし(BMDは連続変数)",
               caveat:"橈骨33%は手術群でも低下。骨折・尿路結石は検出力不足で有意差を示せていない。"}},
        {src:"第5回SR/メタ解析(Ye),JBMR2022",pmid:"36053960",point:"副甲状腺摘出術で生化学的治癒96.1%(高い質のエビデンス)、BMD増加。非手術例では抗吸収薬・エストロゲン・ビタミンDでBMD増加、シナカルセトで血清カルシウム・PTH低下。",rct:false}
      ],
      distractors:`<ul><li><b>経過観察を継続する(最強のディストラクター):</b>腰椎(−1.9)・大腿骨頸部(−2.2)のTスコアと軽度の高カルシウム血症・無症候に引きずられ「適応なし」と判断する誤り。皮質骨に富む橈骨遠位1/3(−2.7)の該当を見落としている。<b>アンカリング/部分情報による早期閉鎖(premature closure)</b>。無症候=手術不要という思い込みも背景にある。</li><li><b>アレンドロネートを投与する:</b>低BMDに反応して抗吸叮薬を選ぶが、高カルシウム血症・PTH過剰の根治にならない。手術適応を満たす例では次善であり、代理アウトカム(BMD)への<b>置換バイアス(substitution)</b>。</li><li><b>シナカルセトを投与する:</b>高カルシウムの是正を狙うが、本例のカルシウム上昇は+0.6mg/dLで薬物治療の目安(上限+1.0mg/dL超)に達さず、BMDも改善しない。手術適応例で対症療法に逃げる<b>治療目標の取り違え</b>。</li><li><b>デノスマブを投与する:</b>BMDは改善しうるが根治でなく、中止時にリバウンド椎体骨折のリスクを負う。手術適応の見落としと代理アウトカムへの固執。</li></ul>`,
      guideline:[
        "無症候性PHPTの手術適応は第5回国際ワークショップ(2022)の6カテゴリーのいずれか1つ該当で成立:血清カルシウム上限+1.0mg/dL超/椎体骨折/BMD Tスコア≤−2.5(腰椎・大腿・橈骨33%)/eGFR・CrCl<60/腎結石・腎石灰化/高カルシウム尿(♀>250・♂>300mg/日)/年齢<50歳。",
        "第5回改訂で腎基準を更新:高カルシウム尿は性別特異的閾値で評価し、24時間尿中カルシウムと結石リスク評価を含める。",
        "DXAは腰椎・大腿骨に加え橈骨遠位1/3(33%)を必須測定(PHPTは皮質骨優位に骨量減少)。閉経前女性・50歳未満男性ではTスコアでなくZスコアを用いる。",
        "局在検査(超音波・sestamibiシンチ・4D-CT)は診断・手術適応判断とは独立で、手術決定後にのみ実施する。",
        "非手術例は年1回の血清カルシウム・25(OH)D・eGFRと1〜2年ごとのBMD測定で監視し、経過中に手術適応化しうる。手術前にFHHを除外する。"
      ],
      points:[
        "無症候性PHPTの手術適応は第5回国際ワークショップ2022の6項目のいずれか1つ該当で成立する。1項目でも満たせば根治的な副甲状腺摘出術が推奨される。",
        "PHPTは皮質骨優位に骨量が減少するため、DXAは腰椎・大腿骨に加え橈骨遠位1/3(33%)を必ず測定する。腰椎・大腿が保たれても橈骨で基準を満たすことがあり、測定・評価漏れが手術適応の見落としに直結する。",
        "第5回改訂で腎基準が更新され、高カルシウム尿は性別特異的閾値(女性>250、男性>300mg/日)で評価する。24時間尿中カルシウムと結石リスク評価を含める。",
        "閉経前女性・50歳未満男性ではTスコアでなくZスコアを用いる。局在検査(超音波・sestamibi・4D-CT)は診断・適応判断とは独立で、手術決定後にのみ行う。",
        "手術前にFHHを除外する。カルシウム/クレアチニンクリアランス比(CCCR)<0.01付近(最適閾値0.0115)がFHHを示唆するが、閾値<0.02ではPHPT患者の約35%も含まれるなどオーバーラップがあり単独では確定できず、家族歴・持続する低尿中カルシウム・必要に応じCaSR遺伝子解析と併せて評価する。RCT(SIPH)では観察群が5年でBMDが有意に低下し、手術は観寞に比しBMDを保持した。"
      ],
      refs:[
        "Bilezikian JP, Khan AA, Silverberg SJ, et al. Evaluation and Management of Primary Hyperparathyroidism: Summary Statement and Guidelines from the Fifth International Workshop. J Bone Miner Res. 2022;37(11):2293-2314. PMID 36245251. doi:10.1002/jbmr.4677.",
        "Bilezikian JP, Silverberg SJ, Bandeira F, et al. Management of Primary Hyperparathyroidism. J Bone Miner Res. 2022;37(11):2391-2403. PMID 36054638. doi:10.1002/jbmr.4682.",
        "Ye Z, Silverberg SJ, Sreekanta A, et al. The Efficacy and Safety of Medical and Surgical Therapy in Patients With Primary Hyperparathyroidism: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. J Bone Miner Res. 2022;37(11):2351-2372. PMID 36053960. doi:10.1002/jbmr.4685.",
        "Lundstam K, Heck A, Godang K, et al. Effect of Surgery Versus Observation: Skeletal 5-Year Outcomes in a Randomized Trial of Patients With Primary HPT (the SIPH Study). J Bone Miner Res. 2017;32(9):1907-1914. PMID 28543873. doi:10.1002/jbmr.3177.",
        "Minisola S, Arnold A, Belaya Z, et al. Epidemiology, Pathophysiology, and Genetics of Primary Hyperparathyroidism. J Bone Miner Res. 2022;37(11):2315-2329. PMID 36245271. doi:10.1002/jbmr.4665.",
        "Christensen SE, Nissen PH, Vestergaard P, et al. Discriminative power of three indices of renal calcium excretion for the distinction between familial hypocalciuric hypercalcaemia and primary hyperparathyroidism: a follow-up study on methods. Clin Endocrinol (Oxf). 2008;69(5):713-720. PMID 18410554. doi:10.1111/j.1365-2265.2008.03259.x."
      ]
    }
  },
  /* ===================== Q16 (set4) ===================== */
  {
    dom:"血液", domEn:"HEMATOLOGY", category:"血液", setId:"set4",
    title:"がん関連VTE：活動性消化管出血リスク下の「急性期」抗凝固を本邦の実装で選ぶ",
    meta:"外来·68歳男性·切除不能未切除胃がんの急性DVT/PE、活動性消化管出血リスク下の急性期抗凝固",
    stem:`68歳男性。切除不能な進行胃がん（原発巣は未切除、化学療法中）で通院している。3日前からの右下肢の腫脹と疼痛で受診した。呼吸困難や胸痛はない。血圧126/78mmHg、脈拍82/分、SpO2 97%（室内気）。造影CTで右膝窩静脈から大腿静脈にかけての急性深部静脈血栓症と、右下葉区域枝の肺塞栓症を認める。上部消化管内視鏡では胃原発巣が易出血性で、接触でにじむような出血を認めるが、明らかな下血や吐血、血行動態の破綻はない。血液検査：Hb 10.8g/dL、血小板21万/μL、クレアチニン0.8mg/dL、eGFR 78mL/分/1.73m²、AST/ALT・総ビリルビン正常。抗凝固療法の絶対的禁忌はなく、DOACと強く相互作用する薬剤の併用や消化管吸収障害もない。

急性期の抗凝固療法として最も適切なものはどれか。`,
    options:[
      "エドキサバン（リクシアナ®）を投与する",
      "リバーロキサバン（イグザレルト®）を投与する",
      "アピキサバン（エリキュース®）を投与する",
      "フォンダパリヌクス（アリクストラ®）を皮下投与する",
      "未分画ヘパリンを持続静注する"
    ],
    answer:4,
    explain:{
      core:`<p><b>症例所見 → 該当枝 → 正解の導出：</b>活動性がんに伴う急性の近位型DVT＋肺塞栓症であり、血行動態は安定・血小板も正常で<b>抗凝固療法の適応がある</b>。一方、原発巣が<b>未切除・易出血性で接触出血を認める管腔内の上部消化管がん</b>であり、<b>消化管出血高リスク</b>かつ<b>DOACの主要RCTが除外してきた「活動性に出血している病変」</b>に相当する。したがって急性期は、<b>短半減期でプロタミンにより拮抗可能・用量調節性に優れる非経口抗凝固＝未分画ヘパリンの持続静注</b>を選ぶ（出血が顕在化すれば直ちに中断・拮抗でき、内視鏡的止血や手技にも対応しやすい）。ITAC 2022は高消化管出血リスクではDOACを避けLMWHを優先するが、<b>本邦はLMWH治療用量がVTEに保険適用外</b>（JCS2025）であり、非経口の実装はUFHかフォンダパリヌクスに限られる。両者のうち活動性出血の急性期では、拮抗困難で半減期の長いフォンダパリヌクスより<b>調節性のUFH</b>が優れる。よって正答はE。要は、<b>抗凝固の適応の有無</b>／<b>消化管出血リスクと病変の活動性</b>／<b>本邦で実行可能な非経口薬の薬物動態（半減期・拮抗性）</b>を読んで選ぶ。</p>
<table>
<tr><th>選択肢（行為）</th><th>消化管出血・急性期管理の観点</th><th>本例での適否</th></tr>
<tr><td>エドキサバン</td><td>Hokusai：大出血6.9 vs 4.0%、消化管がんで増加。経口で急性の中断・拮抗に不利</td><td>不適</td></tr>
<tr><td>リバーロキサバン</td><td>SELECT-D：食道・胃食道で大出血36 vs 11%、CRNMB HR3.76</td><td>不適（上部消化管で最悪）</td></tr>
<tr><td>アピキサバン</td><td>Caravaggio：消化管がんでも大出血非増加（3.8 vs 4.0%）。ただし活動性出血病変は除外され外挿不可</td><td>不適（本例では時期尚早）</td></tr>
<tr><td>フォンダパリヌクス</td><td>非経口だが半減期約17〜21時間・腎排泄・拮抗困難</td><td>不適（活動性出血で調節不良）</td></tr>
<tr><td><b>未分画ヘパリン持続静注</b></td><td>短半減期・プロタミン拮抗可・用量調節性</td><td><b>適（正答）</b></td></tr>
</table>
<div><b>本邦での実装の注記：</b>国際標準はLMWHだが、本邦ではLMWH治療用量がVTEに未承認のため、同じ「調節可能な非経口抗凝固」の枠をUFH持続静注が担う。出血リスクが低下・安定化した後に、DOAC（消化管がんでは大出血非増加のアピキサバン等）やフォンダパリヌクスへ移行する二段構えが実際的。</div>
<p><b>エビデンス（PubMed非収載の一次資料）</b></p>
<p><b>JCS 2025改訂版VTEガイドライン（解説：山下, 血栓止血誌 2025;36(6):744-753）　〔ガイドライン〕</b>：本邦の急性期・非経口抗凝固は未分画ヘパリンとフォンダパリヌクスのみで、低分子ヘパリン（LMWH）はVTE治療に保険適用がない。よって国際標準のLMWH枠は、本邦では調節性・拮抗可能なUFH持続静注が実装として担う（高出血リスクの急性期に有利）。</p>`,
      fig:``,
      evidence:[
        {src:"ITAC 2022（Lancet Oncol 2022）",pmid:"35772465",point:"がんVTEの初期・維持にLMWH（CrCl≥30で1A）またはDOAC。DOACは「消化管・泌尿器出血が高リスクでない」「強い薬物相互作用がない」「消化管吸収障害がない」場合に限る。高リスクならLMWHを優先し、UFHはLMWHが使えない場合の代替。",rct:false},
        {src:"Hokusai-VTE Cancer（エドキサバン, NEJM 2018）",pmid:"29231094",point:"大出血6.9 vs 4.0%、消化管がんで増加。経口で急性の中断・拮抗に不利",rct:true,
         pico:{p:"がん関連VTE 1046例（修正ITT）",
               i:"エドキサバン60mg/日（先行LMWH5日以上）",
               c:"ダルテパリン200→150IU/kg/日",
               o:"複合（再発VTE+大出血）12.8%対13.5%（HR0.97, 95%CI0.70-1.36, 非劣性P=0.006）。再発VTE 7.9%対11.3%。大出血6.9%対4.0%（差2.9%, 95%CI0.1-5.6）",
               nnt:"該当なし（非劣性；大出血はNNH側。ARR=−2.9%＝大出血リスク増加分）",
               caveat:"大出血増加は主に消化管がん症例に由来。経口薬で急性の中断・拮抗が困難。"}},
        {src:"SELECT-D（リバーロキサバン, JCO 2018）",pmid:"29746227",point:"食道・胃食道で大出血36 vs 11%、CRNMB HR3.76",rct:true,
         pico:{p:"活動性がんのVTE 406例（パイロット）",
               i:"リバーロキサバン15mg×2/日×3週→20mg/日",
               c:"ダルテパリン200→150IU/kg/日",
               o:"6か月累積VTE再発11%（ダルテパリン）対4%（リバーロキサバン）（HR0.43, 95%CI0.19-0.99）。大出血4%対6%。CRNMB 4%対13%（HR3.76, 95%CI1.63-8.69）。食道/胃食道がんで大出血36%対11%",
               nnt:"該当なし（再発ARR≈7%＝NNT約14だが、上部消化管がんでは出血増で相殺）",
               caveat:"食道・胃食道がんは高出血のため組入れが制限された（本例＝易出血性胃がんはこの高リスク像）。"}},
        {src:"Caravaggio（アピキサバン, NEJM 2020）",pmid:"32223112",point:"消化管がんでも大出血非増加（3.8 vs 4.0%）。ただし活動性出血病変は除外され外挿不可",rct:true,
         pico:{p:"がん関連VTE 1155例（消化管がんを含む）",
               i:"アピキサバン10mg×2/日×7日→5mg×2/日",
               c:"ダルテパリン200→150IU/kg/日",
               o:"再発VTE 5.6%対7.9%（HR0.63, 95%CI0.37-1.07, 非劣性P<0.001）。大出血3.8%対4.0%（HR0.82, 95%CI0.40-1.69）。大出血消化管出血1.9%対1.7%",
               nnt:"該当なし（非劣性）",
               caveat:"活動性・易出血性の管腔内病変は試験除外。安心データを「今まさに出血している病変」に外挿しない。"}}
      ],
      distractors:`<p><b>A. エドキサバン（リクシアナ®）</b>：Hokusai-VTE Cancerで大出血がダルテパリンより高く（6.9対4.0%）、増加は主に消化管がん症例に由来。本邦ではONCO DVT（Circulation 2023）以降がんVTEに広く使われ「がんVTE＝エドキサバンでよい」となりやすいが、活動性出血の管腔内病変の急性期では不適で、経口薬ゆえ急速な中断・拮抗もできない。<span class="bias">近年の潮流の過度な一般化／利用可能性・親近性ヒューリスティック</span></p>
<p><b>B. リバーロキサバン（イグザレルト®）</b>：SELECT-Dで食道・胃食道がんの大出血が36対11%と高く、CRNMBも全体で高い（HR3.76）。上部消化管がんで最も避けるべきDOAC。<span class="bias">サブグループの基準リスクを軽視した一般化バイアス</span></p>
<p><b>C. アピキサバン（エリキュース®）</b>：Caravaggioで消化管がんでも大出血非増加（3.8対4.0%）であり平時のGI癌では有力だが、同試験は活動性出血・易出血性の管腔内病変を除外している。今まさに接触出血している未切除胃がんへ安心データを外挿することはできず、経口薬は急性期の中断・拮抗にも不利。出血が安定化した後の移行先としては妥当。<span class="bias">エビデンスの過剰一般化（除外基準の無視）</span></p>
<p><b>D. フォンダパリヌクス（アリクストラ®）</b>：本邦で急性VTEに使える非経口薬だが、半減期が約17〜21時間と長く腎排泄で、プロタミンで拮抗できない。活動性出血が顕在化した際に急速な中断・拮抗ができず、調節性でUFHに劣る。<span class="bias">「非経口なら等価」という粗い同一視</span></p>`,
      guideline:[
        "ITAC 2022：がんVTEの初期・維持にLMWH（CrCl≥30で1A）またはDOAC。DOACは消化管・泌尿器出血が高リスクでない場合に限り、該当すればLMWHを優先。UFHはLMWHが使えない場合の代替。",
        "JCS 2025（日本循環器学会／日本肺高血圧・肺循環学会 2025年改訂版）：本邦の急性期・非経口抗凝固は未分画ヘパリンとフォンダパリヌクス。LMWHはVTE治療に保険適用なし。→ 活動性出血の急性期は、調節性・拮抗可能なUFH持続静注が実際的。",
        "未切除で活動性に出血する管腔内上部消化管がんは消化管出血高リスク。エドキサバン（Hokusai）・リバーロキサバン（SELECT-D）は消化管がんで大出血が増える。",
        "血小板<5万/μLや活動性大出血では抗凝固の減量・保留を個別化。本例は血小板正常・軽微な滲む出血・血行動態安定で抗凝固の適応があり、抗凝固可能例へのIVCフィルター単独留置は非推奨。"
      ],
      points:[
        "がん関連VTEはLMWHまたはDOACが基本（ITAC2022）。DOACは「消化管・泌尿器出血が高リスクでない」場合に限り、高リスクならLMWHを優先する。",
        "本邦はLMWH治療用量がVTEに保険適用外（JCS2025）。非経口はUFHとフォンダパリヌクスのみで、活動性出血の急性期は短半減期・プロタミン拮抗可能・調節性のUFH持続静注が優れる。",
        "上部消化管がんの消化管出血シグナル：リバーロキサバン（SELECT-D 食道胃36対11%）＞エドキサバン（Hokusai 大出血6.9対4.0%）。両者は活動性出血例で避ける。",
        "アピキサバンはCaravaggioで消化管がんでも大出血非増加だが、試験は活動性出血病変を除外。『今まさに出血している管腔内病変』へは外挿しない（安定後の移行先としては妥当）。",
        "血小板<5万・活動性大出血では減量/保留を個別化。抗凝固が可能な患者へのIVCフィルター単独留置は非推奨（commission bias）。"
      ],
      refs:[
        "Farge D, Frere C, Connors JM, et al. 2022 international clinical practice guidelines for the treatment and prophylaxis of venous thromboembolism in patients with cancer, including patients with COVID-19. Lancet Oncol. 2022;23(7):e334-e347. PMID 35772465.",
        "Raskob GE, van Es N, Verhamme P, et al. Edoxaban for the Treatment of Cancer-Associated Venous Thromboembolism (Hokusai-VTE Cancer). N Engl J Med. 2018;378(7):615-624. PMID 29231094.",
        "Young AM, Marshall A, Thirlwall J, et al. Comparison of an Oral Factor Xa Inhibitor With Low Molecular Weight Heparin in Patients With Cancer With Venous Thromboembolism (SELECT-D). J Clin Oncol. 2018;36(20):2017-2023. PMID 29746227.",
        "Agnelli G, Becattini C, Meyer G, et al. Apixaban for the Treatment of Venous Thromboembolism Associated with Cancer (Caravaggio). N Engl J Med. 2020;382(17):1599-1607. PMID 32223112.",
        "Yamashita Y. 日本循環器学会ガイドライン2025年改訂版での静脈血栓塞栓症の治療推奨の変更のポイント. 血栓止血誌. 2025;36(6):744-753. doi:10.2491/jjsth.36.744.（和文総説）",
        "Yamashita Y, Morimoto T, Muraoka N, et al. Edoxaban for 12 Months Versus 3 Months in Patients With Cancer With Isolated Distal Deep Vein Thrombosis (ONCO DVT Study). Circulation. 2023;148(20):1665-1676. PMID 37638968."
      ]
    }
  },
  /* ===================== Q17 (set4) ===================== */
  {
    dom:"地域医療・医療制度・在宅", domEn:"HOMECARE", category:"地域医療・医療制度・在宅", setId:"set4",
    title:"訪問看護における医療保険と介護保険の適用（別表7）",
    meta:"在宅·78歳男性·パーキンソン病の進行（H-Y3・生活機能障害度II度）と訪問看護の保険種別",
    stem:`78歳男性。パーキンソン病で在宅療養中。要介護3の認定を受け、介護保険により週2回の訪問看護を利用している。半年前はHoehn-Yahr重症度分類ステージ2・生活機能障害度I度であったが、この間に病状が進行し、現在はステージ3・生活機能障害度II度である。嚥下障害と易転倒性があり訪問看護の継続を要する。内服はレボドパ・カルビドパ配合錠（メネシット®）、ドロキシドパ（ドプス®）、酸化マグネシウム（マグミット®）。発熱や急性増悪はない。褥瘡・気管カニューレ・人工呼吸器・中心静脈栄養はない。同居は妻のみ。

訪問看護の医療保険・介護保険の適用について最も適切な対応はどれか。`,
    options:[
      "介護保険による訪問看護を継続する",
      "要介護区分の変更を申請する",
      "通常の訪問看護指示書を再交付する",
      "医療保険による訪問看護に変更する",
      "特別訪問看護指示書を交付する"
    ],
    answer:3,
    explain:{
      core:`<p>訪問看護は、要介護・要支援認定者では<b>原則として介護保険が優先</b>される。しかし<b>別表第7（厚生労働大臣が定める疾病等）に該当する場合は、要介護認定の有無・年齢にかかわらず医療保険</b>の訪問看護となる。パーキンソン病は別表7の「パーキンソン病関連疾患」に含まれるが、該当には告示で<b>Hoehn-Yahr重症度分類ステージ3以上かつ生活機能障害度II度又はIII度</b>という条件がある。</p>
<p><b>導出：</b>本例は半年前はステージ2・生活機能障害度I度で<b>別表7の基準を満たさず介護保険</b>が正しかったが、現在はステージ3・生活機能障害度II度に進行し<b>別表7の基準を満たした</b>。したがって訪問看護は<b>介護保険から医療保険へ切り替わる</b>。急性増悪はなく褥瘡・気管カニューレもないため特別訪問看護指示書や別表8の要件には当たらず、<b>保険種別の変更</b>が論点である。なお主治医は訪問看護指示書にHoehn-Yahr重症度分類と生活機能障害度を記載する必要がある。</p>
<p><b>図表：訪問看護の保険種別の判定</b></p>
<table>
<thead><tr><th>状況</th><th>適用保険</th></tr></thead>
<tbody>
<tr><td>要介護・要支援認定あり（原則）</td><td>介護保険</td></tr>
<tr><td><b>別表7該当</b>（末期の悪性腫瘍・ALS・多発性硬化症・<b>パーキンソン病関連疾患〔ステージ3以上かつ生活機能障害度II度又はIII度〕</b>等）</td><td><b>医療保険</b></td></tr>
<tr><td>特別訪問看護指示書の期間（1回14日・原則月1回、例外で月2回）</td><td>医療保険</td></tr>
<tr><td>精神科訪問看護（認知症主傷病を除く）</td><td>医療保険</td></tr>
<tr><td>40歳未満・要介護認定なし</td><td>医療保険</td></tr>
</tbody>
</table>
<p>※別表7に該当すると、週4回以上・1日複数回訪問・複数事業所からの訪問等の特例も算定しうる。</p>
<p><b>エビデンス（制度上の一次資料）（PubMed非収載の一次資料）</b></p>
<p><b>別表第7　厚生労働大臣が定める疾病等（訪問看護療養費）〔告示〕</b>：別表7の疾病等（20疾病等）に該当すると、要介護認定の有無・年齢によらず医療保険の訪問看護となる。<b>パーキンソン病関連疾患はHoehn-Yahrステージ3以上かつ生活機能障害度II度又はIII度で該当</b>。週4回以上・1日複数回訪問・複数事業所からの訪問等の特例も算定しうる。</p>
<p><b>訪問看護の医療保険・介護保険の優先関係〔通知〕</b>：要介護・要支援認定者は原則介護保険。別表7該当・特別訪問看護指示書の交付期間・精神科訪問看護（認知症主傷病を除く）は医療保険となる。</p>
<p><b>特別訪問看護指示書（診療報酬）〔通知〕</b>：急性増悪・退院直後・終末期等で頻回訪問が必要なときに主治医が交付。<b>1回14日・原則月1回</b>（気管カニューレ使用者・真皮を越える褥瘡は月2回）。期間中は医療保険で頻回訪問が可能。</p>
<p><b>2026年度（令和8年度）診療報酬改定（訪問看護療養費）〔厚労省保険局医療課・令和8年3月10日版〕</b>：2026年度改定で<b>包括型訪問看護療養費</b>が新設（訪問1回ごとの出来高でなく1日の総訪問時間で評価）。対象は事前登録した<b>同一建物居住の高ニーズ者</b>（別表7・別表8該当や特別訪問看護指示書による訪問等）で、24時間対応の併設ステーション等が要件。<b>別表7→医療保険という判断枠組み自体は不変</b>であり、自宅・妻と同居の本例は包括型の対象外。点数の細目は最新の告示・通知で確認する。</p>`,
      fig:``,
      evidence:[

      ],
      distractors:`<p><b>A. 介護保険による訪問看護を継続する（最強のディストラクター）：</b>要介護認定を受けている点にアンカリングし、別表7該当を見落とす誤り。パーキンソン病がHoehn-Yahrステージ3・生活機能障害度II度に至った時点で医療保険へ移行する。<span class="bias">原則（介護保険優先）への固執と例外の見落とし</span></p>
<p><b>B. 要介護区分の変更を申請する：</b>病状進行に対し要介護度の見直しはありうるが、それは<b>介護保険内の手続き</b>であり、医療/介護の別を決めない。本問の論点（保険種別）のすり替え。<span class="bias">論点のすり替え</span></p>
<p><b>C. 通常の訪問看護指示書を再交付する：</b>指示書の更新自体は保険種別を変えない（医療保険適用の要件は別表7該当）。別表7該当による医療保険への移行を捉えていない。<span class="bias">手段と論点の混同</span></p>
<p><b>E. 特別訪問看護指示書を交付する：</b>急性増悪・退院直後・終末期等で頻回訪問が必要な場合の手段。本例は慢性進行で急性増悪はなく該当しない。<span class="bias">急性と慢性の取り違え</span></p>`,
      guideline:[
        "訪問看護は要介護・要支援認定者では原則として介護保険が優先される。",
        "別表7（厚生労働大臣が定める疾病等・20疾病等：末期の悪性腫瘍、ALS、多発性硬化症、パーキンソン病関連疾患〔Hoehn-Yahrステージ3以上かつ生活機能障害度II度又はIII度〕等）に該当すれば、要介護認定・年齢によらず医療保険となり、週4回以上・複数回訪問等の特例も算定しうる。",
        "特別訪問看護指示書の交付期間（1回14日・原則月1回、気管カニューレ使用者・真皮を越える褥瘡は月2回）は医療保険で頻回訪問が可能。",
        "精神科訪問看護（精神科訪問看護指示書）は医療保険。ただし認知症を主傷病とする場合は介護保険となる。",
        "2026年度（令和8年度）改定で包括型訪問看護療養費が新設（同一建物の高ニーズ者向け・1日の総訪問時間で評価）。別表7・別表8・特別訪問看護指示書の枠組みは維持され、自宅療養の本例では別表7→医療保険の判断は不変。点数細目は最新の告示・通知で確認する。"
      ],
      points:[
        "訪問看護は要介護・要支援認定者では<b>原則介護保険が優先</b>されるが、<b>別表7該当・特別訪問看護指示書の期間・精神科訪問看護（認知症主傷病を除く）は医療保険</b>となる。",
        "別表7の「パーキンソン病関連疾患」該当には、告示で<b>Hoehn-Yahr重症度分類ステージ3以上かつ生活機能障害度II度又はIII度</b>という条件がある。<b>基準未満は介護保険のまま</b>である。",
        "別表7に該当すると、要介護認定の有無・年齢によらず医療保険の訪問看護となり、<b>週4回以上・1日複数回訪問・複数事業所からの訪問等の特例</b>も算定しうる。主治医は指示書に<b>Hoehn-Yahr重症度分類と生活機能障害度を記載</b>する。",
        "特別訪問看護指示書は<b>急性増悪・退院直後・終末期等</b>で頻回訪問が必要なときに主治医が交付し、1回14日・原則月1回（気管カニューレ・真皮を越える褥瘡は月2回）医療保険で頻回訪問可能。<b>慢性・安定期の保険種別変更とは別の制度</b>である。",
        "制度・点数の細目は診療報酬（2026年度改定で同一建物の高ニーズ者向けに包括型訪問看護療養費を新設）・介護報酬改定で変わりうるが、<b>別表7→医療保険の判断枠組みは不変</b>。自宅療養の本例は包括型の対象外。最新の告示・通知で確認する。"
      ],
      refs:[
        "厚生労働省保険局医療課. 令和8年度診療報酬改定について【訪問看護ステーション向け】（令和8年3月10日版）. https://www.mhlw.go.jp/content/12400000/001671099.pdf （包括型訪問看護療養費の新設・対象要件。別表7/別表8/特別指示書の枠組みは維持）.",
        "一般社団法人日本訪問看護財団. 「厚生労働大臣が定める疾病等」について. https://jvnf.or.jp/shippei100420.pdf （別表7告示の逐語：パーキンソン病関連疾患はHoehn-Yahr3以上かつ生活機能障害度II/III）.",
        "診療報酬点数表・訪問看護療養費 別表第7（厚生労働大臣が定める疾病等）・別表第8（特別な管理を要する状態等）. 厚生労働省告示（最新告示を確認）.",
        "特別訪問看護指示書の交付要件（在宅患者訪問看護・指導料/訪問看護療養費）. 厚生労働省通知（1回14日・原則月1回、気管カニューレ・真皮を越える褥瘡は月2回）.",
        "厚生労働省近畿厚生局. 訪問看護療養費の取扱いの理解のために. https://kouseikyoku.mhlw.go.jp/kinki/ （介護保険優先・別表7・特別指示書の要件。最新年度版を確認）."
      ]
    }
  },
  /* ===================== Q18 (set4) ===================== */
  {
    dom:"腎臓・電解質", domEn:"NEPHROLOGY", category:"腎臓・電解質", setId:"set4",
    title:"腎性貧血：造血刺激薬を始める前に鉄を是正する（iron-restricted erythropoiesis）",
    meta:"外来·72歳男性·CKD G4の腎性貧血（フェリチン180・TSAT18%）、経口鉄は不耐",
    stem:`72歳男性。2型糖尿病による糖尿病性腎症で通院中。慢性腎臓病ステージG4（eGFR 24mL/分/1.73m²）で、血清クレアチニンは過去1年間ほぼ横ばいである。2か月前から全身倦怠感と労作時の息切れを自覚する。血圧132/78mmHg、脈拍78/分、体温36.4℃。眼瞼結膜は蒼白。浮腫、出血斑、リンパ節腫脹はない。血液検査：Hb 9.4g/dL、MCV 88fL、白血球・血小板は正常、網赤血球数は正常範囲、フェリチン180ng/mL、トランスフェリン飽和度（TSAT）18%、CRP 0.1mg/dL、ビタミンB12・葉酸・TSHは正常。悪性腫瘍を示唆する所見はない。便潜血反応は2回とも陰性で、上部・下部消化管内視鏡でも出血源を認めない。3か月前から経口鉄剤を開始したが、悪心と便秘のため継続できず中止している。

次に行う対応として最も適切なものはどれか。`,
    options:[
      "経過観察し3か月後に再評価する",
      "ダルベポエチン アルファ（ネスプ®）を開始する",
      "ダプロデュスタット（ダーブロック®）を開始する",
      "赤血球輸血を行う",
      "静注鉄剤（含糖酸化鉄、フェジン®）を投与する"
    ],
    answer:4,
    explain:{
      core:`<p><b>正答Eを直接支持する2つの条文（KDIGO 2026 原文）</b></p>
<div><b>Practice Point 3.1.2</b>：「<b>ESAまたはHIF-PH阻害薬による治療の開始前に、鉄欠乏を含むすべての是正可能な貧血の原因に対処する</b>」<br/><span>→ B（ESA）・C（HIF-PH）は鉄を是正する前には選べない。</span></div>
<div><b>Practice Point 2.7</b>：「<b>最適な経口鉄レジメンで1〜3か月後に効果が不十分な場合、または忍容性が不良な場合は、経口鉄から静注鉄へ切り替える</b>」<br/><span>→ 本例は経口鉄を悪心・便秘で不耐・中止。この条文にそのまま該当する。</span></div>
<p><b>図表：腎性貧血の判断のものさし（KDIGO 2026・推奨番号とグレード付き）</b></p>
<table>
<tr><th>場面</th><th>判断基準（KDIGO 2026 原文）</th><th>本例への当てはめ</th></tr>
<tr><td><b>鉄の状態の定義</b></td><td><b>systemic iron deficiency</b>＝TSAT&lt;20% かつ フェリチン&lt;100ng/mL（非透析）／&lt;200ng/mL（血液透析）<br/><b>iron-restricted erythropoiesis</b>＝貯蔵鉄は足りているのに循環鉄が不足し赤血球産生が制限される状態。おおむね<b>フェリチン&gt;100〜200ng/mL かつ TSAT&lt;20%</b><br/><span>CKDのヘプシジン上昇は炎症（主にIL-6）だけでなく<b>腎クリアランスの低下</b>にもよる</span></td><td>フェリチン180・TSAT 18%<br/>→ <b>iron-restricted erythropoiesis そのもの</b><br/><span>CRP正常でも成立する</span></td></tr>
<tr><td><b>重度鉄欠乏</b></td><td>フェリチン&lt;45ng/mL なら出血源（消化管・泌尿器・婦人科）の検索を考慮</td><td>フェリチン180 → 非該当（内視鏡も陰性）</td></tr>
<tr><td><b>鉄を開始するか<br/>（非透析CKD<br/>・腹膜透析）</b></td><td><b>推奨2.3（2D）</b>：フェリチン&lt;100 かつ TSAT&lt;40%、<b>または フェリチン≥100かつ&lt;300 かつ TSAT&lt;25%</b></td><td><b>該当</b>（180／18%）→ <b>鉄を開始する</b></td></tr>
<tr><td><b>鉄を開始するか<br/>（血液透析）</b></td><td><b>推奨2.1（2D）</b>：フェリチン≤500 かつ TSAT≤30%<br/><b>推奨2.2（2D）</b>：経口より<b>静注</b>を用いる</td><td>—（本例は非透析）</td></tr>
<tr><td><b>経口か静注か<br/>（非血液透析）</b></td><td><b>推奨2.4（2D）</b>：価値観・選好、貧血/鉄欠乏の程度、有効性・忍容性・入手性・費用で選ぶ<br/><b>PP2.7：最適な経口鉄で1〜3か月後に効果不十分、または忍容性が不良なら、経口鉄から静注鉄へ切り替える</b></td><td>経口鉄が悪心・便秘で不耐・中止<br/>→ <b>PP2.7にそのまま該当 → 静注鉄（正答E）</b></td></tr>
<tr><td><b>鉄の休薬</b></td><td><b>PP2.2</b>：フェリチン&gt;700ng/mL または TSAT≥40% では定期投与を控える。活動性感染中は休止</td><td>補充後もフェリチン・TSATを再評価</td></tr>
<tr><td><b>造血刺激薬の前提</b></td><td><b>PP3.1.2</b>：「ESAまたはHIF-PH阻害薬による治療の<b>開始前に、鉄欠乏を含むすべての是正可能な貧血の原因に対処する</b>」<br/><b>推奨3.1.1（2D）</b>の条文も「<b>是正可能な貧血の原因が対処された人において</b>、HIF-PH阻害薬よりESAを第一選択とする」と始まる</td><td>鉄が未補正<br/>→ <b>ESA・HIF-PHは時期尚早（B・C不適）</b></td></tr>
<tr><td><b>ESAを始めるHb</b></td><td><b>推奨3.2.1（2D）</b> 透析：Hb ≤9.0〜10.0g/dL<br/><b>推奨3.2.2（2D）</b> 非透析：症状・高Hbの利益・輸血/ESAの害で個別化（多くは8.5〜10.0g/dL）</td><td>鉄を是正したうえで改めて判断</td></tr>
<tr><td><b>維持するHb</b></td><td><b>推奨3.3.1（1D＝強い推奨）</b>：<b>11.5g/dL 未満</b>（通常10〜11.5g/dL）</td><td>—</td></tr>
<tr><td><b>HIF-PHの立ち位置</b></td><td>ESAに<b>忍容できない／十分反応しない</b>例が主。アルゴリズムでは「経口薬を希望／ESA不耐／冷蔵保存ができない」。<br/><b>PP3.1.3＋Table 6</b>：有害事象リスクが高い人では<b>避ける</b>（活動性がん・がん既往、多発性嚢胞腎、増殖性網膜症、肺動脈性肺高血圧、妊娠＝禁忌／心血管・血栓イベント既往、バスキュラーアクセス血栓、肝障害）<br/><b>PP3.5.1</b>：ESAとの併用は推奨しない　<b>PP3.6.3</b>：3〜4か月で反応不十分なら中止</td><td>—</td></tr>
</table>
<p>※本邦（日本透析医学会）の鉄補充基準はKDIGOより保守的だが、本例はCRP正常・悪性腫瘍なし・TSAT&lt;20%であり本邦基準にも該当するため、いずれで判断しても結論は変わらない。</p>
<p><b>症例所見 → 該当枝 → 正解の導出：</b>CKD G4に伴う正球性貧血（Hb 9.4g/dL）で症状があり、治療対象である。ここで<b>フェリチン180ng/mLは一見「鉄は足りている」と誤読させる</b>が、<b>TSAT 18%は低値</b>である。KDIGO 2026本文は「CKDでのヘプシジン上昇は<b>炎症状態（主にIL-6）だけでなく、腎クリアランスの低下</b>、およびEPO・エリスロフェロンの低下による」と述べる。すなわち<b>CRPが正常でも、CKDそのものによるヘプシジン蓄積で鉄は貯蔵に閉じ込められ、造血に使えない</b>——これがKDIGO 2026の<b>iron-restricted erythropoiesis</b>（旧「機能的鉄欠乏」）であり、原文は「貯蔵鉄は足りているのに循環鉄が不足し赤血球産生が制限される状態。おおむね<b>フェリチン&gt;100〜200ng/mL かつ TSAT&lt;20%</b>」と定義する。<b>本例（フェリチン180・TSAT 18%）はこの定義そのもの</b>である。フェリチンは急性期蛋白であり、単独では鉄充足の指標にならない。必ずTSATを併せて読む。</p>
<p><b>鉄補充の適応：</b>KDIGO 2026の<b>推奨2.3（2D。非透析CKDおよび腹膜透析が対象）</b>は、<b>「フェリチン&lt;100ng/mL かつ TSAT&lt;40%」または「フェリチン≥100かつ&lt;300ng/mL、かつ TSAT&lt;25%」</b>で鉄を開始するとしており、本例（フェリチン180／TSAT 18%）は<b>まさにこの枠に該当する</b>。（血液透析はフェリチン≤500かつTSAT≤30%＝推奨2.1で、基準が異なる点に注意。）なお本例はCRP正常・悪性腫瘍なし・TSAT&lt;20%であり、本邦・日本透析医学会の鉄補充開始基準にも該当するため、国際・本邦のいずれで判断しても結論は変わらない。</p>
<p><b>そして順序——ここが本問の背骨：</b>KDIGO 2026は<b>Practice Point 3.1.2</b>で「<b>ESAまたはHIF-PH阻害薬による治療の開始前に、鉄欠乏を含むすべての是正可能な貧血の原因に対処する</b>」と明記する。さらに<b>推奨3.1.1（2D）</b>の条文自体が「<b>是正可能な貧血の原因が対処された人において</b>、HIF-PH阻害薬よりESAを第一選択とする」と始まる。つまり<b>ESAかHIF-PHかという選択そのものが、鉄などの是正が済んで初めて成立する</b>（是正可能な原因に対処すればESA治療が不要になる患者もいる——FIND-CKDが実証）。そして経路については<b>Practice Point 2.7</b>が決定的で、「<b>最適な経口鉄レジメンで1〜3か月後に効果が不十分な場合、または忍容性が不良な場合は、経口鉄から静注鉄へ切り替える</b>」とある。本例は<b>経口鉄を悪心・便秘で不耐・中止</b>しており、<b>この条文にそのまま該当する</b>。よって次の一手は<b>静注鉄剤</b>で、正答はE。要は、<b>フェリチン単独で鉄充足と判断しない（TSATを見る）</b>／<b>造血刺激薬の前に鉄を是正する</b>／<b>経口が不耐なら静注へ</b>。</p>
<div><b>ただし静注鉄を無条件に選んではならない：</b>非透析CKDを対象としたREVOKEでは、静注鉄が重篤な心血管イベント（調整発生率比2.51、95%CI 1.56–4.04）と感染による入院（同2.12、1.24–3.64）を増やし、独立データ安全性監視委員会の勧告で試験が早期中止された。KDIGO 2026も非血液透析では経口/静注を<b>共同意思決定</b>とする（推奨2.4）。<b>本例が静注鉄の適応となるのは「経口鉄が不耐で継続できなかった」から（PP2.7）である</b>。この条件がなければ静注鉄は自動的な第一選択にならない——ここが本問の分岐の要である。</div>
<p><b>エビデンス（PubMed非収載の一次資料）</b></p>
<p><b>日本腎臓学会「HIF-PH阻害薬適正使用に関するrecommendation」（日腎会誌 2020;62(7):711-716）　〔ガイドライン〕</b>：増殖糖尿病網膜症等の網膜出血高リスク例は慎重投与。ADPKDでは年1回以上の画像フォロー。血栓塞栓症・悪性腫瘍への懸念。KDIGO 2026のPP3.1.3＋Table 6ともほぼ一致する。</p>`,
      fig:``,
      evidence:[
        {src:"KDIGO 2026 Anemia in CKD Guideline（Kidney Int 2026;109(Suppl 1S):S1–S99）",pmid:"41485812",point:"上記「図表」と「2つの条文」がそのまま原文。中核は<b>PP3.1.2</b>（ESA/HIF-PH開始前に是正可能原因＝鉄欠乏を含む＝に対処）と<b>PP2.7</b>（経口鉄が無効または忍容性不良なら静注へ切り替え）。",rct:false},
        {src:"FIND-CKD（静注カルボキシマルトース第二鉄 vs 経口鉄, NDT 2014）",pmid:"24891437",point:"<span>＝「鉄を最適化すればESA等の開始そのものを遅らせ／減らせる」の直接的根拠。</span>",rct:true,
         pico:{p:"非透析CKD＋鉄欠乏性貧血でESA未使用の成人 626例（56週）",
               i:"静注カルボキシマルトース第二鉄（高フェリチン目標400〜600µg/L または 低フェリチン目標100〜200µg/L）",
               c:"経口鉄",
               o:"主要評価（他の貧血治療＝ESA/他の鉄剤/輸血の開始、またはHb<10g/dLが連続2回）：<b>高フェリチン目標</b>の静注鉄 36例(23.5%) 対 経口鉄 98例(31.8%)、HR 0.65（95%CI 0.44–0.95、P=0.026）。Hb≥1g/dL上昇の達成 HR 2.04（95%CI 1.52–2.72、P<0.001）。有害事象は各群同等。<br/><b>★ただし低フェリチン目標の静注鉄群は 49例(32.2%) で、経口鉄(31.8%)と差がない</b>",
               nnt:"約12（高フェリチン目標群 23.5%対経口31.8%＝ARR 8.3%、56週）",
               caveat:"<b>経口鉄に優ったのは「高フェリチン目標の静注鉄群」のみ</b>で、低フェリチン目標群は経口鉄と同等。<b>「静注鉄そのものが常に優る」と読むのは誤り。</b>ESA未使用の非透析CKDが対象、オープンラベルで代替指標中心。"}},
        {src:"PIVOTAL（血液透析での先制的静注鉄, NEJM 2019）",pmid:"30365356",point:"本問の正答を直接支持する試験ではなく、「鉄の最適化が造血刺激薬の必要量を減らす」という文脈の補強として引用している。",rct:true,
         pico:{p:"維持血液透析を開始した成人 2141例（高用量1093／低用量1048、追跡中央値2.1年）",
               i:"先制的高用量静注鉄スクロース（月400mg。フェリチン>700µg/L またはTSAT≥40%では休薬）",
               c:"反応的低用量（フェリチン<200µg/L またはTSAT<20%を引き金とする0〜400mg/月）",
               o:"主要複合（非致死性心筋梗塞・非致死性脳卒中・心不全入院・死亡）320例(29.3%) 対 338例(32.3%)、HR 0.85（95%CI 0.73–1.00、非劣性P<0.001、優越性P=0.04）。ESA月間中央値 29,757IU 対 38,805IU（差 −7,539IU、95%CI −9,485〜−5,582）",
               nnt:"約33（29.3%対32.3%＝ARR 3.0%、中央値2.1年）",
               caveat:"<b>★これは「静注鉄 vs 静注鉄」（先制的高用量 vs 反応的低用量）の比較で、静注 vs 経口の試験ではない。</b>対象も維持血液透析であり非透析CKDではない。本問の正答を直接支持する試験ではなく、「<b>鉄の最適化が造血刺激薬の必要量を減らす</b>」という文脈の補強として引用している。"}},
        {src:"REVOKE（非透析CKDでの静注 vs 経口鉄, Kidney Int 2015）",pmid:"26083656",point:"<span>＝非透析では静注鉄を反射的に選ばない根拠（＝本問の分岐の要）。</span>",rct:true,
         pico:{p:"CKDステージ3〜4＋鉄欠乏性貧血 136例（経口69／静注67）",
               i:"静注鉄スクロース 200mg 2週ごと（総1g）",
               c:"経口硫酸鉄 325mg 1日3回×8週",
               o:"主要（2年間の実測GFR低下勾配）は差なし（経口 −3.6 対 静注 −4.0mL/分/1.73m²、群間差 −0.35、95%CI −2.9〜2.3）。重篤心血管イベントは経口19例に36件 対 静注17例に55件（調整発生率比 2.51、95%CI 1.56–4.04）、感染による入院（同 2.12、95%CI 1.24–3.64）。<b>独立DSMBの勧告で早期中止</b>",
               nnt:"該当なし（有害側＝NNH）",
               caveat:"小規模・早期中止。"}}
      ],
      distractors:`<p><b>A. 経過観察し3か月後に再評価する</b>：Hb 9.4g/dLで倦怠感・労作時息切れという症状があり、しかも<b>是正可能な鉄欠乏（iron-restricted erythropoiesis）が現に存在する</b>。KDIGO 2026の推奨2.3（2D）が鉄開始の適応と定める枠にちょうど入っている。<span class="bias">治療慣性（therapeutic inertia）／フェリチン180を「鉄充足」と誤認</span></p>
<p><b>B. ダルベポエチン アルファ（ネスプ®）を開始する</b>：KDIGO 2026の推奨3.1.1（2D）は確かに<b>ESAをHIF-PH阻害薬より優先する第一選択</b>とした。しかもESA開始の目安（非透析で概ねHb 8.5〜10g/dL）に本例のHb 9.4は入る。<b>だが条文は「是正可能な貧血の原因が対処された人において」という前提節で始まり、PP3.1.2は「開始前に鉄欠乏を含むすべての是正可能な原因に対処する」と明記する。</b>鉄が不足したままESAを始めれば低反応となり、ESA低反応性はそれ自体が心血管リスク2〜3倍の予後不良マーカーである。<b>「ESA第一選択」「Hb 9.4なら開始域」という知識は正しいのに、順序を誤って落ちる——最強の誤答。</b><span class="bias">正しい知識の適用順序の誤り（前提節の読み落とし）</span></p>
<p><b>C. ダプロデュスタット（ダーブロック®）を開始する</b>：本邦はHIF-PH阻害薬を5剤承認し世界で最も使用する国で、反射的に選ばれやすい。「HIF-PHはヘプシジンを下げて鉄利用を改善するのだから鉄欠乏でも効くはず」という機序論も誘惑になる。しかしPP3.1.2の前提はESAとHIF-PHの<b>いずれにも等しくかかる</b>うえ、HIF-PHはKDIGO 2026では<b>第一選択ではなく代替</b>（ESAに忍容できない／十分反応しない、経口薬を希望、冷蔵保存ができない等）である。造血刺激により貯蔵鉄はさらに消費され、鉄未補正での開始は反応不良を招く。<span class="bias">機序からの過度な外挿／利用可能性・親近性ヒューリスティック</span></p>
<p><b>D. 赤血球輸血を行う</b>：Hb 9.4g/dLで血行動態は安定し、活動性出血もない。KDIGO 2026は輸血を<b>症状主導</b>に限定し、数値反射での輸血を戒める。同種免疫は将来の腎移植の機会を損ないうる。<span class="bias">過剰治療／数値反射</span></p>`,
      guideline:[
        "本問のガイドライン要点（KDIGO 2026の推奨条文・Practice Point・グレード）は、正解根拠内の図表「腎性貧血の判断のものさし」に整理してある。"
      ],
      points:[
        "CKDの貧血をフェリチン単独で判断しない。フェリチンは急性期蛋白であり、しかも<b>CKDのヘプシジン上昇は炎症だけでなく腎クリアランス低下による</b>ため、<b>CRPが正常でも鉄は貯蔵に閉じ込められる</b>。必ずTSATを併せて読む。",
        "KDIGO 2026の定義：<b>systemic iron deficiency</b>＝TSAT<20%かつフェリチン<100（非透析）/<200（血液透析）。<b>iron-restricted erythropoiesis</b>＝貯蔵鉄は足りているのに循環鉄が不足する状態で、おおむね<b>フェリチン&gt;100〜200ng/mLかつTSAT&lt;20%</b>。",
        "<b>PP3.1.2：「ESAまたはHIF-PH阻害薬の開始前に、鉄欠乏を含むすべての是正可能な原因に対処する」</b>——ESAかHIF-PHかという選択は、鉄の是正が済んで初めて成立する（推奨3.1.1の条文も同じ前提節で始まる）。鉄未補正での開始は低反応を招き、ESA低反応性は心血管リスク2〜3倍の予後不良マーカーである。",
        "鉄開始の閾値：<b>推奨2.3（2D、非透析CKD・腹膜透析）</b>＝フェリチン<100かつTSAT<40%、またはフェリチン≥100かつ<300かつTSAT<25%。<b>推奨2.1（2D、血液透析）</b>＝フェリチン≤500かつTSAT≤30%。休薬はフェリチン>700またはTSAT≥40%。<b>血液透析と非透析で基準が違う（腹膜透析は非透析側）。</b>",
        "<b>PP2.7：経口鉄が1〜3か月で効果不十分、または忍容性が不良なら静注鉄へ切り替える。</b>ただし非透析では静注鉄を反射的に選ばない——REVOKEでは静注鉄で重篤心血管イベント（調整発生率比2.51）と感染入院（2.12）が増え早期中止された。"
      ],
      refs:[
        "KDIGO Anemia Work Group. KDIGO 2026 Clinical Practice Guideline for the Management of Anemia in Chronic Kidney Disease (CKD). Kidney Int. 2026;109(Suppl 1S):S1-S99. PMID 41485812. doi:10.1016/j.kint.2025.06.006.",
        "Macdougall IC, Bock AH, Carrera F, et al. FIND-CKD. Nephrol Dial Transplant. 2014;29(11):2075-2084. PMID 24891437. doi:10.1093/ndt/gfu201.",
        "Macdougall IC, White C, Anker SD, et al. Intravenous Iron in Patients Undergoing Maintenance Hemodialysis (PIVOTAL). N Engl J Med. 2019;380(5):447-458. PMID 30365356. doi:10.1056/NEJMoa1810742.",
        "Agarwal R, Kusek JW, Pappas MK. A randomized trial of intravenous and oral iron in chronic kidney disease (REVOKE). Kidney Int. 2015;88(4):905-914. PMID 26083656. doi:10.1038/ki.2015.163.",
        "日本腎臓学会. HIF-PH阻害薬適正使用に関するrecommendation（2020年9月29日版）. 日腎会誌. 2020;62(7):711-716."
      ]
    }
  },
  /* ===================== Q19 (set4) ===================== */
  {
    dom:"消化器・肝胆膵", domEn:"HEPATOLOGY", category:"消化器・肝胆膵", setId:"set4",
    title:"MASLD：ALTが正常な脂肪肝で、線維化リスクを層別して専門医へつなぐ",
    meta:"かかりつけ医外来·58歳男性·健診の脂肪肝、ALT正常でFIB-4 1.92",
    stem:`58歳男性。健診で脂肪肝を指摘され、かかりつけ医を受診した。2型糖尿病（HbA1c 7.2%）、高血圧、脂質異常症で通院中である。身長170cm、体重84kg（BMI 29.1）。飲酒は機会飲酒でエタノール換算1日10g未満。自覚症状はない。

血液検査：AST 26U/L、ALT 24U/L、γ-GTP 45U/L、血小板 16万/μL、アルブミン 4.2g/dL、総ビリルビン 0.8mg/dL、PT-INR 1.0。HBs抗原陰性、HCV抗体陰性、抗核抗体陰性、血清フェリチン・セルロプラスミン正常。腹部超音波で肝は高輝度で肝腎コントラストの上昇を認めるが、脾腫・腹水・側副血行路はない。

次に行う対応として最も適切なものはどれか。`,
    options:[
      "生活習慣指導のみ行い、1年後に肝機能検査を再検する",
      "セマグルチド（ウゴービ®）を開始する",
      "ウルソデオキシコール酸（ウルソ®）を投与する",
      "肝生検を行う",
      "肝臓専門医に紹介する"
    ],
    answer:4,
    explain:{
      core:`<p><b>正答Eを直接支持する条文（MASLD診療ガイドライン2026 原文）</b></p>
<div><b>紹介基準</b>：「これらのアルゴリズムはいずれもFIB-4指数を一次リスク層別ツールとして用い、<b>FIB-4が2.67超のとき、またはFIB-4が1.3〜2.67（66歳以上では2.0以上）のときに、消化器・肝臓専門医への紹介を推奨する</b>」<br/>
「血小板数は補完的なリスク層別を提供する（<b>低リスク：20万/µL超／中間リスク：15万〜20万/µL／高リスク：15万/µL未満</b>）」<br/>
「紹介は次の<b>いずれか</b>を満たす患者に推奨される：①線維化マーカーの高値または進行を示唆する所見、②<b>FIB-4指数および/または低血小板数による中間リスク</b>、③AST/ALTの持続高値」</div>
<p><b>→ 本例は FIB-4 1.92（1.3〜2.67）かつ 血小板16万/µL（15万〜20万）で <b>②に該当</b>。<b>ALTが正常で③を満たさなくても、②だけで紹介基準を満たす</b>——ここが本問の核心。</b></p>
<p><b>図表：健診で脂肪肝を指摘されたときの線維化リスク層別</b></p>
<table>
<tr><th>段階</th><th>判断基準</th><th>本例への当てはめ</th></tr>
<tr><td><b>MASLDか</b></td><td>肝細胞の5%以上の脂肪化＋<b>心血管代謝リスク因子1つ以上</b>。飲酒は女性&lt;20g/日・男性&lt;30g/日。他の成因を除外<br/><span>（2023年にNAFLD→MASLD、NASH→MASHへ改称。日本語名は2024年8月決定）</span></td><td>2型糖尿病・肥満・高血圧・脂質異常症＝該当。飲酒10g/日未満。他疾患は否定的<br/>→ <b>MASLD</b></td></tr>
<tr><td><b>第1段階<br/>FIB-4</b></td><td>FIB-4＝（年齢×AST）÷（血小板〔10⁹/L〕×√ALT）</td><td>（58×26）÷（160×√24）＝<b>1.92</b></td></tr>
<tr><td><b>専門医紹介の基準</b><br/><span>MASLD診療GL2026</span></td><td><b>FIB-4&gt;2.67、またはFIB-4 1.3〜2.67（66歳以上は2.0以上）で紹介を推奨</b>。血小板は補完的層別（低&gt;20万／<b>中間15万〜20万</b>／高&lt;15万）<br/>紹介は<b>いずれか</b>で推奨：①線維化マーカー高値/進行所見　②<b>FIB-4および/または血小板数による中間リスク</b>　③AST/ALTの持続高値</td><td><b>FIB-4 1.92＋血小板16万＝②に該当</b><br/>→ <b>肝臓専門医に紹介（正答E）</b></td></tr>
<tr><td><b>F0/F1として<br/>除外できる基準</b><br/><span>厚労省・最適使用推進GL</span></td><td><b>VCTE 8kPa未満・FIB-4 1.3未満（66歳以上は2.0未満）・血小板20万/µL以上</b>の<b>全てを満たす</b>症例</td><td>FIB-4 1.92／血小板16万 → <b>全ては満たさない＝低リスクとして切れない</b></td></tr>
<tr><td><b>F4（肝硬変）の目安</b></td><td>VCTE 15kPa以上 ないし 血小板15万/µL未満</td><td>血小板16万・脾腫/腹水なし・Alb/T-Bil/PT正常 → F4は考えにくい</td></tr>
<tr><td><b>肝生検</b></td><td><b>MASLDの診断に日常的には不要</b>。<b>非侵襲的検査が結論を出せない場合</b>、または治療方針決定に確定診断を要する場合に留保</td><td>かかりつけ医の第一手ではない（誤答D）</td></tr>
<tr><td><b>薬物療法の対象</b></td><td><b>at-risk MASH＝NAFLD activity score ≥4 かつ 線維化 ≥F2</b></td><td>線維化未評価・MASHすら未確定（誤答B）</td></tr>
<tr><td><b>実務上の注意</b></td><td><b>支払基金統一事例270</b>：「<b>脂肪肝に対する</b>肝硬度測定（D215-2）・超音波エラストグラフィー（D215-3）の算定は、原則として認められない」（対象は「肝硬変の患者〈疑いを含む〉」）<br/><span>※これは<b>かかりつけ医が「脂肪肝」の病名のまま算定する場合</b>を指し、<b>専門医が線維化評価として実施することを否定しない</b>。GLは専門医のもとでのVCTE/2D-SWE/p-SWE/MREを推奨</span></td><td>かかりつけ医の一手は「自分でFibroScanをオーダーする」ことではなく<b>「専門医につなぐ」こと</b></td></tr>
<tr><td><b>ALTの読み方</b></td><td><b>ALTが正常でもMASLDの線維化は進行しうる</b>。紹介基準③（AST/ALT持続高値）を満たさなくても②で紹介対象になる</td><td>AST 26／ALT 24でもFIB-4 1.92</td></tr>
</table>
<p><b>症例所見 → 該当枝 → 正解の導出：</b>肝脂肪化があり、2型糖尿病・肥満・高血圧・脂質異常症という<b>心血管代謝リスク因子</b>を複数もち、過剰飲酒（男性30g/日以上）・ウイルス性・自己免疫性・代謝性肝疾患はいずれも否定的。すなわち<b>MASLD</b>である。アルブミン・ビリルビン・PT-INRは正常で脾腫・腹水・側副血行路もなく、非代償性肝硬変は否定的。</p>
<p><b>ここで最大の罠：</b><b>AST 26・ALT 24はいずれも基準内</b>である。しかし<b>ALTが正常でもMASLDの線維化は進行しうる。ALT正常を「安全」と読んではならない。</b></p>
<p><b>第1段階＝FIB-4で層別する：</b>FIB-4＝（年齢×AST）÷（血小板〔10⁹/L〕×√ALT）＝（58×26）÷（160×√24）＝<b>1.92</b>。MASLD診療ガイドライン2026は、<b>FIB-4が1.3〜2.67（66歳以上は2.0以上）で消化器・肝臓専門医への紹介を推奨</b>し、血小板は補完的層別因子として<b>15万〜20万/µLを中間リスク</b>とする。紹介基準は「①線維化マーカー高値/進行所見、②<b>FIB-4および/または血小板数による中間リスク</b>、③AST/ALTの持続高値」のいずれかを満たせば推奨——本例は<b>FIB-4 1.92・血小板16万で②に該当し、ALTが正常で③を満たさなくても紹介基準を満たす</b>。よって正答はE。</p>
<p>厚労省の最適使用推進ガイドラインも、<b>F0/F1として除外できる基準</b>を「VCTE 8kPa未満・FIB-4 1.3未満（66歳以上は2.0未満）・血小板20万/µL以上の<b>全てを満たす</b>症例」としており、本例は<b>この除外基準を満たさない＝低リスクとして切り捨てられない</b>。一方でF4（VCTE 15kPa以上ないし血小板15万未満）にも当たらない。</p>
<div><b>実務上の補足（ここを誤読しないこと）：</b>肝硬度測定（D215-2）・超音波エラストグラフィー（D215-3）は、厚労省通知で対象が「肝硬変の患者（肝硬変が疑われる患者を含む。）」とされ、<b>支払基金統一事例270</b>は「<b>脂肪肝に対する</b>これらの算定は、原則として認められない」としている。これは<b>「かかりつけ医が"脂肪肝"の病名のまま算定する」ことを指す</b>のであって、<b>専門医が線維化評価（肝硬変の疑いを含む）として実施することを否定するものではない</b>。実際ガイドラインは専門医のもとでのVCTE・2D-SWE・p-SWE・MREを推奨している。つまり<b>かかりつけ医の正しい一手は「自分でFibroScanをオーダーする」ことではなく、「専門医につなぐ」こと</b>である。</div>
<p><b>セマグルチドに飛びついてはならない（誤答B）：</b>ウゴービ®は<b>2026年6月に本邦初のMASH治療薬</b>として承認された。しかし適応は「<b>肝硬変を伴わないMASH。ただし中等度又は高度の線維化（F2/F3）を有する場合に限る</b>」であり、最適使用推進ガイドラインは<b>原則として生検でF2/F3を確認すること</b>（生検不適ならNITに基づき肝臓専門医・消化器病専門医が総合判断）を求める。ガイドライン2026も薬物療法の対象を<b>at-risk MASH（NAS≥4 かつ 線維化≥F2）</b>と定義する。本例は<b>線維化を一度も評価しておらず、MASHであることすら未確定</b>。さらにBMI原則23以上、厳格な施設要件・医師要件（肝臓専門医または消化器病専門医＋内分泌/糖尿病/循環器の専門医、学会認定の教育研修施設、常勤管理栄養士）が課され、<b>かかりつけ医が単独で開始できる薬ではない</b>。<b>「新薬を知っている」ことと「診断のステップを踏む」ことは別である。</b></p>
<p>※興味深い時間差：MASLD診療ガイドライン2026の本文は「2025年時点で本邦にMASLDの承認薬はない」と記しているが、その後2026年6月にウゴービが承認された。<b>ガイドラインより承認が後</b>である。</p>
<p><b>エビデンス（PubMed非収載の一次資料）</b></p>
<p><b>厚生労働省 最適使用推進ガイドライン（ウゴービ皮下注・MASH）令和8年6月　〔一次資料・逐語取得〕</b>：効能効果は「肝硬変を伴わないMASH、ただし中等度又は高度の線維化を有する場合に限る」。F2/F3は<b>原則として生検で確認</b>（生検不適ならNITで肝臓専門医・消化器病専門医が総合判断）。F0/F1除外基準（参考値）＝「VCTE 8kPa未満、FIB-4 1.3〔66歳以上では2.0〕未満、血小板20万/µL以上の全てを満たす」。F4＝「VCTE 15kPa以上ないし血小板15万/µL未満」。BMI原則23以上。施設・医師要件あり。3〜4か月で改善なければ中止を検討、12か月を目安に生検/NITで再評価。</p>
<p><b>支払基金統一事例270「脂肪肝に対する肝硬度測定等の算定について」令和6年8月30日　〔一次資料・逐語取得〕</b>：「脂肪肝に対する次の検査の算定は、原則として認められない。⑴ D215-2 肝硬度測定 ⑵ D215-3 超音波エラストグラフィー」。根拠は厚労省通知の対象が「肝硬変の患者（肝硬変が疑われる患者を含む。）」であり、脂肪肝が該当しないこと。</p>`,
      fig:``,
      evidence:[
        {src:"MASLD診療ガイドライン2026（日本消化器病学会・日本肝臓学会 改訂第3版／英語版 J Gastroenterol 2026;61(6):693-710）",pmid:"42120590",point:"紹介基準・肝生検の位置づけ・薬物療法の対象・肝庇護薬の推奨・生活習慣の位置づけは上記「図表」のとおり原文。<b>ウルソデオキシコール酸</b>については「一貫した組織学的・生化学的な有益性を示しておらず、<b>現行のガイドラインでは推奨されない</b>」と明記。",rct:false},
        {src:"ESSENCE（semaglutide in MASH, NEJM 2025）",pmid:"40305708",point:"生検でF2/F3が確認された集団が対象で、肝関連アウトカムはまだ示されていない。",rct:true,
         pico:{p:"生検でMASHかつ線維化ステージF2またはF3と確認された成人 1197例（2:1割付、240週継続中。72週の中間解析は最初の800例＝本剤534例／プラセボ266例。日本人は本剤95例／プラセボ46例、BMI中央値33.6）",
               i:"セマグルチド2.4mg 週1回皮下注（0.25mgから4週ごとに漸増）",
               c:"プラセボ",
               o:"72週：肝線維化の悪化を伴わないMASHの消失 <b>62.9%対34.3%</b>（群間差28.7ポイント、95%CI 21.1〜36.2、P<0.001）。MASHの悪化を伴わない肝線維化の改善 <b>36.8%対22.4%</b>（群間差14.4ポイント、95%CI 7.5〜21.3、P<0.001）。複合達成 32.7%対16.1%（群間差16.5、95%CI 10.2〜22.8）。体重変化 −10.5%対−2.0%",
               nnt:"MASH消失で約4（ARR 28.7%）、線維化改善で約7（ARR 14.4%）",
               caveat:"組入れは<b>生検でF2/F3が確認された</b>MASHに限られ、線維化未評価の脂肪肝には外挿できない。240週まで継続中で、<b>肝硬変・肝細胞癌・死亡といった肝関連アウトカムはまだ示されていない</b>（組織学的代替指標のみ）。消化器系有害事象が多い（悪心34.1%、下痢20.3%等）。"}}
      ],
      distractors:`<p><b>A. 生活習慣指導のみ行い、1年後に肝機能検査を再検する</b>：最も多い実地の誤り。<b>誤りは「生活習慣指導」ではない</b>——GL2026は「生活習慣の改善はMASLD管理の基盤であり、薬物療法中も継続すべき」と明記する。誤りは<b>「のみ」</b>と<b>「1年後に"肝機能検査"を再検する（＝線維化評価を一切しない）」</b>点にある。GLが「プライマリケアで年1回程度の再評価を継続してよい」とするのは<b>低リスク（軽度線維化）の患者</b>であり、本例（FIB-4中間リスク＋血小板中間リスク）はそこに入らない。<span class="bias">正常値による誤った安心（false reassurance）／治療慣性</span></p>
<p><b>B. セマグルチド（ウゴービ®）を開始する</b>：2026年6月に本邦初のMASH治療薬として承認された最新薬で、飛びつきたくなる。しかし適応はF2/F3の線維化を有するMASHに限られ、<b>原則として生検でF2/F3を確認</b>することが求められる。GL2026も薬物療法の対象を<b>at-risk MASH（NAS≥4かつF≥2）</b>と定義する。本例は<b>線維化を一度も評価しておらず、MASHであることすら未確定</b>。施設・医師要件も厳格で、かかりつけ医が単独で開始できる薬ではない。<b>「新薬を知っている」ことと「診断のステップを踏む」ことは別。</b><span class="bias">最新知識への飛びつき／診断ステップの飛び越し</span></p>
<p><b>C. ウルソデオキシコール酸（ウルソ®）を投与する</b>：本邦では「慢性肝疾患における肝機能の改善」の適応をもち、肝酵素異常に反射的に処方されがち。しかし<b>GL2026は「ウルソデオキシコール酸やグリチルリチン製剤などの肝庇護薬は、一貫した組織学的・生化学的な有益性を示しておらず、現行のガイドラインでは推奨されない」と明記</b>している。そして本問の本質的な誤りは薬理学的な是非以前に、<b>線維化リスクの層別化をしないまま投薬し、病期が分からないまま時間を浪費すること</b>である。<span class="bias">反射的処方／評価の先送り</span></p>
<p><b>D. 肝生検を行う</b>：線維化ステージ判定の基準検査で、最適使用推進GLもセマグルチド処方時にはF2/F3の生検確認を原則とする。しかし<b>その要求は「本剤の処方を検討する際」という条件つき</b>であり、本例はその段階に至っていない。GL2026は肝生検を<b>「MASLDの診断に日常的には必要でなく、非侵襲的検査が結論を出せない場合等に留保される」</b>と位置づける。非侵襲的評価を一度も行わずに侵襲的検査をかかりつけ医の外来で選ぶのは順序が逆。<span class="bias">侵襲度の順序を誤る／「確定診断＝生検」という古い型</span></p>`,
      guideline:[
        "本問のガイドライン要点（MASLD診療ガイドライン2026の紹介基準、厚労省 最適使用推進ガイドライン、支払基金統一事例270）は、正解根拠内の条文引用と図表「健診で脂肪肝を指摘されたときの線維化リスク層別」に整理してある。"
      ],
      points:[
        "健診の脂肪肝＋心血管代謝リスク因子＝MASLD。<b>ALTが正常でも線維化は進行しうる。ALT正常を「安全」と読まない</b>——最大の落とし穴。",
        "第1段階はFIB-4＝（年齢×AST）÷（血小板〔10⁹/L〕×√ALT）。<b>FIB-4 1.3〜2.67（66歳以上は2.0以上）で専門医紹介を推奨</b>。血小板は補完的層別（低>20万／中間15万〜20万／高<15万）。",
        "GL2026の紹介基準は「①線維化マーカー高値/進行所見、②<b>FIB-4および/または血小板数による中間リスク</b>、③AST/ALTの持続高値」の<b>いずれか</b>。<b>ALT正常でも②だけで紹介基準を満たす</b>。",
        "「脂肪肝」の病名のままでは肝硬度測定・超音波エラストグラフィーは<b>原則算定できない</b>（支払基金統一事例270）。ただしこれは<b>かかりつけ医が自院で算定する場合</b>の話で、専門医が線維化評価として実施することを否定しない。<b>かかりつけ医の一手は「つなぐ」こと</b>。",
        "セマグルチド（ウゴービ®）は2026年6月に本邦初のMASH治療薬として承認。対象は<b>F2/F3のMASH</b>で<b>原則生検確認</b>、BMI原則23以上、施設・医師要件あり。薬物療法の対象は<b>at-risk MASH（NAS≥4かつF≥2）</b>。ESSENCEも<b>生検でF2/F3が確認された</b>集団が対象で、肝関連アウトカムはまだ示されていない。<b>線維化を評価する前には始められない。</b>"
      ],
      refs:[
        "Akuta N, Kogiso T, Ikejima K, et al.（日本消化器病学会・日本肝臓学会）. Evidence-based clinical practice guidelines for metabolic dysfunction-associated steatotic liver disease (MASLD) 2026. J Gastroenterol. 2026;61(6):693-710. PMID 42120590. doi:10.1007/s00535-026-02408-2.（MASLD診療ガイドライン2026・改訂第3版の英語版。PMC全文）",
        "厚生労働省. 最適使用推進ガイドライン セマグルチド（遺伝子組換え）（販売名：ウゴービ皮下注）〜代謝機能障害関連脂肪肝炎〜. 令和8年6月.",
        "社会保険診療報酬支払基金. 支払基金・国保統一事例【検査】270 脂肪肝に対する肝硬度測定等の算定について. 令和6年8月30日.",
        "Sanyal AJ, Newsome PN, Kliers I, et al. Phase 3 Trial of Semaglutide in Metabolic Dysfunction-Associated Steatohepatitis (ESSENCE). N Engl J Med. 2025;392(21):2089-2099. PMID 40305708. doi:10.1056/NEJMoa2413258.",
        "日本肝臓学会 編. 肝生検ガイダンス. 南江堂; 2024."
      ]
    }
  },
  /* ===================== Q20 (set4) ===================== */
  {
    dom:"皮膚科", domEn:"DERMATOLOGY", category:"皮膚科", setId:"set4",
    title:"メラノーマを疑ったかかりつけ医の一手（中央を機械的にパンチ生検しない）",
    meta:"診療所·72歳男性·半年で急速に変化する背部の色素斑（径11mm）",
    stem:`72歳男性。3年前から背部に色素斑があったが、この半年で急速に拡大し、色調が不均一に濃くなったため、かかりつけの診療所を受診した。全身状態は良好で日常生活は自立しており、既往は高血圧のみで抗凝固薬の内服はない。

背部に径11mm、非対称で辺縁が不整、褐色から黒色まで色調が不均一な色素斑を認める。潰瘍・出血・硬結はない。背部には他にも数個の色素斑があるが、いずれも径4mm以下で境界明瞭・色調均一であり、本病変とは外観が明らかに異なる。所属リンパ節は触知しない。

次に行う対応として最も適切なものはどれか。`,
    options:[
      "3か月後に再診し、大きさの変化を観察する",
      "液体窒素による凍結療法を行う",
      "血清LDHとS-100を測定する",
      "病変の中央を4mmパンチ生検し、病理検査に提出する",
      "皮膚科に紹介する"
    ],
    answer:4,
    explain:{
      core:`<p><b>症例所見 → 該当枝 → 正解の導出：</b>非対称（Asymmetry）・辺縁不整（Border irregularity）・色調不均一（Color variegation）・径11mm（Diameter&gt;6mm）・半年で急速に拡大（Evolution）と<b>複数のABCDE所見を有し</b>、さらに<b>他の色素斑と外観が明らかに異なる</b>（醜いアヒルの子サイン）。すなわち<b>メラノーマを疑うべき病変</b>であり、かかりつけ医が下すべき判断は<b>この病変をどう専門医へ渡すか</b>である。答えはE。</p>
<p><b>まず、古い教えを解体する：</b><b>「メラノーマは生検すると播種するので触ってはいけない」——これは誤りである。</b>メラノーマ診療ガイドライン2025は総論「2.3 生検」で<b>「肉眼およびダーモスコピー所見等からメラノーマが疑われる病変に対しては、躊躇せず生検を実施して病理組織学的検討を行う」</b>とし、<b>「生検の種類（全切除生検または部分生検）が、メラノーマ患者の予後に明らかな悪影響を及ぼすことは知られていない」「先行する生検が、SLNB（センチネルリンパ節生検）の同定に影響を及ぼさないことも報告されている」</b>と播種説を明確に否定する。1086例の追跡でも「<b>incisional biopsyは局所再発・死亡という点で予後に悪影響を及ぼさなかった。予後は腫瘍厚・年齢・性で決まり、生検手技では決まらない</b>」（Lees &amp; Briggs, Br J Surg 1991）。<b>Aの経過観察は、播種を恐れるという誤った理由で診断を遅らせるだけである。</b></p>
<p><b>では「躊躇せず生検」なら、自分でパンチ生検すればよいのか（誤答D）——ここが本問の核心である。</b>同ガイドラインが望ましいとするのは<b>「側方は病巣辺縁より1〜3mm、深部は取り残しが生じない程度のマージンを確保し、全切除生検するのが最も望ましい」</b>であって、<b>部分生検ではない</b>。部分生検については<b>「病変全体を評価することができないため<b>メラノーマの偽陰性率が高くなること、TT（腫瘍厚）の評価が不正確になる可能性がある</b>ことをあらかじめ念頭に置く」</b>と警告する。実証データでも、切除生検と比べ<b>パンチ生検は組織学的誤診のオッズ16.6倍（95%CI 10–27）、「有害転帰を伴う誤診」のオッズ20倍（95%CI 10–41）</b>（Ng, Arch Dermatol 2010。ただし三次紹介施設の症例集積であり、一般診療の絶対リスクではない）。</p>
<p><b>さらに選択肢Dは、部分生検としてもガイドラインの作法に反している。</b>同ガイドラインは部分生検を行う場合の採取部位を明示する——<b>「検体の採取部位は、<b>最もメラノーマが疑わしく、腫瘍厚（TT）が厚いと思われる部分を選ぶ</b>」</b>。<b>Dは「病変の中央」を機械的に採取しており、この原則を満たさない。</b>非対称・辺縁不整・色調不均一な病変では、最も厚い部分が中央にあるとは限らない。<b>Dは「全切除生検でない」だけでなく「部分生検としても不適切」なのである。</b></p>
<p><b>その帰結：</b>TTの評価が不正確になると、<b>SLNBの適応</b>と<b>拡大切除の側方マージン</b>が<b>決められない事態を招きうる</b>（下の図表2）。<b>ただし、これは回復不能な損害ではない。</b>ガイドラインは続けて対応策を明記している——<b>「部分生検で診断が確定しない、あるいはメラノーマの診断はできてもTTの評価が困難なためSLNBの適用や拡大切除の側方マージンが決められない場合には、<b>病変内の別箇所を再生検するか、エコー検査などでTTを計測する</b>」</b>。<b>つまり部分生検の害は「治療設計が不可能になる」ことではなく、「不要な追加生検・追加評価と、その分の遅延を患者に負わせる」ことである。</b></p>
<p><b>したがって、かかりつけ医の最も適切な対応は「皮膚科に紹介する」（E）である。</b>本例は背部の径11mm・全身状態良好であり、ガイドラインが最も望ましいとする<b>側方1〜3mmの全切除生検</b>が素直に行える病変である。その病理で確定した腫瘍厚をもとに、拡大切除の範囲とSLNBの要否までを<b>一貫して設計する</b>必要がある。<b>本例において選ぶべきは、中央を機械的に採る部分生検ではなく、それらを一貫して担える皮膚科への紹介である。</b><br/>
<span>※なお、訓練と設備を備えた医師が適切な狭いマージンで全切除生検を行うことを、ガイドラインは否定していない。本問がDを退けるのは「かかりつけ医が生検してはならないから」ではなく、<b>提示されている行為が「中央を機械的に採る部分生検」だから</b>である。</span></p>
<p><b>図表1：メラノーマを疑った色素斑に対して、かかりつけ医が取りうる行為の評価</b></p>
<table>
<tr><th>行為</th><th>評価</th><th>一次資料（メラノーマ診療ガイドライン2025）</th></tr>
<tr><td><b>A. 経過観察</b></td><td><b>不可</b></td><td>「疑われる病変に対しては、<b>躊躇せず生検を実施して</b>病理組織学的検討を行う」。播種説はGL自身が否定（下記）</td></tr>
<tr><td><b>B. 凍結療法</b></td><td><b>不可</b></td><td>病変を破壊し<b>適切な病理診断の機会を失うおそれ</b>。※GL本文に凍結療法・液体窒素の記載はなく、<b>第一原理による否定</b>である（GLの明文を根拠にしていない）</td></tr>
<tr><td><b>C. 血清LDH・S-100</b></td><td><b>不可</b></td><td><b>血清マーカーとしてのLDH・S-100は、GLでは主に「遠隔転移例の病期分類（M分類）」と「術後の再発監視」で論じられる</b>。GL自身が「<b>LDHに関しては感度、特異度の点で正確性に欠ける</b>」「<b>S-100に関しては感度が低い</b>が特異度は高いという報告はあるものの、測定時の肝機能、腎機能、心機能などに測定値が左右される」と限界を明記＝<b>局所の疑わしい色素斑を診断・除外する検査ではない</b></td></tr>
<tr><td><b>D. 中央を4mmパンチ生検</b>（部分生検）</td><td><b>不可</b><br/><span>※本問の主戦場</span></td><td><b>①全切除生検でない</b>：「部分生検では病変全体を評価することができないため<b>偽陰性率が高くなること、TTの評価が不正確になる可能性がある</b>」（Ng 2010：誤診OR 16.6／有害転帰を伴う誤診OR 20）。<br/><b>②部分生検としても作法に反する</b>：GLは「検体の採取部位は、<b>最もメラノーマが疑わしく、TTが厚いと思われる部分を選ぶ</b>」とする。<b>「中央」を機械的に採るのはこれを満たさない</b></td></tr>
<tr><td><b>E. 皮膚科に紹介</b></td><td><b>最も適切</b></td><td>GLが望ましいとするのは<b>側方1〜3mmの全切除生検</b>。そこで確定した腫瘍厚をもとに、拡大切除の範囲とSLNBの要否までを一貫して設計する必要がある</td></tr>
</table>
<p><b>図表2：腫瘍厚（TT）が「その後の2つの決定」を規定する</b></p>
<table>
<tr><th>腫瘍厚（TT）</th><th>in situ</th><th>TT ≤1mm</th><th>1&lt;TT≤2mm</th><th>2&lt;TT≤4mm</th><th>TT&gt;4mm</th></tr>
<tr><td><b>①拡大切除の側方マージン</b><br/><span>（GL表10）</span></td><td>0.5〜1cm</td><td>1cm</td><td>1〜2cm</td><td><b>2cm</b></td><td><b>2cm</b></td></tr>
</table>
<table>
<tr><th>病期</th><th>T1a（TT&lt;0.8mm・潰瘍なし）</th><th>T1b（TT&lt;0.8mmで潰瘍あり／TT 0.8〜1.0mm）</th><th>T2a・病期II（TT&gt;1mm）</th></tr>
<tr><td><b>②SLNBの適応</b><br/><span>（GL・NCCN準拠）</span></td><td>基本的に推奨されない<br/><span>（SLN転移率5%以下）</span></td><td>話し合いの中で<b>考慮する</b></td><td>話し合いの中で<b>提案する</b></td></tr>
</table>
<div><b>【重要・過剰断定を避ける】部分生検でTT評価が不正確になっても、治療設計が「不可能」になるわけではない。</b>GLは対応策を明記している——<b>「部分生検で診断が確定しない、あるいはメラノーマの診断はできてもTTの評価が困難なためSLNBの適用や拡大切除の側方マージンが決められない場合には、病変内の別箇所を再生検するか、エコー検査などでTTを計測する」</b>。<b>すなわち部分生検の害は「回復不能」ではなく、「不要な追加生検・追加評価と、その分の遅延を患者に負わせる」ことにある。</b></div>
<div><b>「生検で播種する」はガイドライン自身が否定している：</b>GL「<b>生検の種類（全切除生検または部分生検）が、メラノーマ患者の予後に明らかな悪影響を及ぼすことは知られていない</b>」「先行する生検が、SLNBの同定に影響を及ぼさないことも報告されている」。Lees &amp; Briggs（1086例）「incisional biopsyは局所再発・死亡の点で予後に悪影響を及ぼさなかった。予後は<b>腫瘍厚</b>・年齢・性で決まり、<b>生検手技では決まらない</b>」。<b>恐れるべきは生検そのものではなく、部分生検による診断精度と病期評価の劣化である。</b></div>
<p><b>拾い上げの道具（GL）：</b>ABCD(E)ルール（Asymmetry／Border irregularity／Color variegation／Diameter&gt;6mm／Evolution）。他の色素性病変と非類似な<b>「醜いアヒルの子サイン」</b>も活用する。<b>ダーモスコピーは色素性腫瘍の臨床診断に必須の検査</b>である。</p>
<p><b>エビデンス（PubMed非収載の一次資料）</b></p>
<p><b>メラノーマ診療ガイドライン2025（皮膚がん診療ガイドライン第4版）日皮会誌 2024;134(13):3149-3265　〔ガイドライン・全文逐語照合済〕</b>：上記の逐語引用がそのまま原文。※「2.3 生検」はCQではなく総論の記述であり、推奨度・エビデンスレベルは付与されていない。なお同GLは「現実的には、本邦では臨床所見やダーモスコピー所見でメラノーマであることが明らかである場合、生検を行わずに拡大切除を行うことが多い」とも記すが、これは推奨ではなく実態の記述であり、本例のように「疑わしいが診断が明らかでない」段階には適用されない。</p>`,
      fig:``,
      evidence:[
        {src:"Ng JC, et al. 部分生検が組織病理診断に及ぼす影響（Arch Dermatol 2010）",pmid:"20231492",point:"<span>【補強エビデンスであり、本GLが当該箇所で引用している文献ではない】</span>",rct:true,
         pico:{p:"オーストラリアの三次紹介施設で1995〜2006年に連続して扱われたメラノーマ症例（前向き症例集積）",
               i:"部分生検（パンチ生検・シェーブ生検）",
               c:"全切除生検",
               o:"組織学的誤診のオッズ：パンチ生検 16.6倍（95%CI 10–27、P<0.001）、シェーブ生検 2.6倍（95%CI 1.2–5.7、P=0.02）。『有害転帰を伴う誤診』のオッズ：パンチ生検 20倍（95%CI 10–41、P<0.001）。microstaging不正確のオッズ：パンチ 5.1倍（3.4–7.6）、シェーブ 2.3倍（1.5–3.6）。誤診オッズが高い病型：末端黒子型 5.1倍（2–13）、desmoplastic 3.8倍、nevoid 28.4倍。腫瘍厚1mm増ごとにmicrostaging不正確のオッズ1.8倍（1.4–2.4）",
               nnt:"該当なし（診断精度の比較。オッズ比で表現）",
               caveat:"三次紹介施設の症例集積であり選択バイアスの可能性。RCTではない。<b>オッズ比は一般診療の絶対リスクではない</b>。末端黒子型のOR 5.1は「病型」の効果であり、人種・民族による交互作用を検討した解析ではない。"}},
        {src:"Lees VC, Briggs JC. 初回生検手技と予後（Br J Surg 1991）",pmid:"1933198",point:"<span>【補強エビデンス。「生検で播種する／予後が悪化する」を否定する古典】</span>",rct:true,
         pico:{p:"臨床病期I（浸潤性皮膚メラノーマ）1086例、初回手術から最低5年追跡",
               i:"incisional biopsy 96例（8.8%）／narrow margin excision biopsy 292例（26.9%）",
               c:"wide margin excision 698例（64.3%）",
               o:"「Incisional biopsy did not adversely affect prognosis in terms of local recurrence and mortality. Prognosis was related to tumour thickness, age and sex of the patient, and not to biopsy technique」。一方、incisional biopsyは96例中38例（40%）で当時の組織学的基準では完全に評価不能（他の生検手技より有意に高率、P<0.0001）。結論：「We recommend that all suspicious lesions should be submitted to excisional rather than incisional biopsy to avoid compromising the histological assessment」",
               nnt:"該当なし（予後への影響なしを示す観察研究）",
               caveat:"1991年の後ろ向き解析。ただし『生検手技は予後を決めない／部分生検は組織評価を損なう』という2つの結論は、その後のガイドライン・研究とも一致している。"}},
        {src:"Ahmadi O, et al. シェーブ生検の影響（Ann Surg Oncol 2021）",pmid:"33782802",point:"<span>【補強エビデンス】</span>",rct:true,
         pico:{p:"2010〜2020年の14研究、シェーブ生検でメラノーマと診断された3713例",
               i:"シェーブ生検",
               c:"他の生検法（切除生検等）",
               o:"深部断端陽性 42.9%。拡大切除後の病期変更 7.7%。追加治療（追加拡大切除および/またはSLNB）の推奨 2.3%。生存を報告した4研究のいずれも、シェーブ生検と他の生検法との間に無病生存・全生存の<b>有意差を検出しなかった</b>",
               nnt:"該当なし",
               caveat:"研究間の異質性が高い。観察研究のメタ解析。<b>生存差の非検出は検出力不足の可能性を含み、無影響の証明ではない。</b>"}}
      ],
      distractors:`<p><b>A. 3か月後に再診し、大きさの変化を観察する：</b><b>「メラノーマは生検すると播種するから触らない方がよい」という古い通説に依拠すると選ばれる。</b>しかしGL2025は「疑われる病変に対しては、躊躇せず生検を実施して病理組織学的検討を行う」と明記し、「生検の種類が、メラノーマ患者の予後に明らかな悪影響を及ぼすことは知られていない」と播種説そのものを否定している。本例はすでに半年で急速な変化を示し、複数のABCDE所見を有する。ここで経過観察を挟むことは<b>診断の遅延にほかならない</b>。<span class="bias">古い教え・通説への固着／不作為バイアス（何もしない方が安全という錯覚）</span></p>
<p><b>B. 液体窒素による凍結療法を行う：</b>病変を破壊してしまうため<b>適切な病理診断の機会を失うおそれがある</b>。診断が確定していない色素性病変に対する破壊的治療（凍結・レーザー・電気焼灼）は行わない。※GL本文に凍結療法の記載はなく、この否定は第一原理（組織が得られなければ病理診断ができない）による。<span class="bias">診断より先に治療してしまう（診断ステップの飛ばし）／良性という思い込み</span></p>
<p><b>C. 血清LDHとS-100を測定する：</b><b>「採血で悪性かどうか確かめられないか」という発想。</b>しかし血清マーカーとしてのLDH・S-100は、GLでは主に<b>遠隔転移例の病期分類（M分類）</b>と<b>術後の再発監視</b>の文脈で論じられるものであり、<b>局所の疑わしい色素斑を診断・除外する検査ではない</b>。GL自身が「LDHに関しては感度、特異度の点で正確性に欠ける」「S-100に関しては感度が低い…測定時の肝機能、腎機能、心機能などに測定値が左右される」と限界を明記している。<b>腫瘍量に比例して上昇するマーカーを、腫瘍量が最も少ない早期の局所病変の除外に使うことはできない。</b>仮に正常でもメラノーマは否定できず、<b>結果を待つ分だけ紹介が遅れる</b>。<span class="bias">血液検査への過信／除外に使えない検査で除外しようとする（検査特性の誤用）</span></p>
<p><b>D. 病変の中央を4mmパンチ生検し、病理検査に提出する：</b><b>本問の主戦場。「疑ったら組織診断」という原則を正しく知っている医師ほど、この誠実な一手を選びたくなる。</b>否定の根拠は<b>2段構え</b>である。<b>①GLが望ましいとするのは全切除生検であって部分生検ではない</b>（偽陰性率上昇・TT評価の不正確化。Ng 2010で誤診OR 16.6・有害転帰を伴う誤診OR 20）。<b>②Dは部分生検としてもGLの作法に反する</b>——「検体の採取部位は、最もメラノーマが疑わしく、TTが厚いと思われる部分を選ぶ」。「中央」を機械的に採るのはこれを満たさない。その帰結としてSLNBの適応と拡大切除マージンが決められない事態を<b>招きうる</b>が、GLは再生検・エコーによるTT計測という対応策も示しており、害の本質は<b>「患者に不要な追加生検・追加評価と遅延を負わせる」</b>ことにある。本例は全切除生検が素直に行える病変であり、<b>最初からそれを一貫して担える皮膚科へ渡すのが最も適切</b>である。<span class="bias">「生検＝どの手技でも同じ」という粗い同一視／自施設完結バイアス（紹介前に確定させたい）</span></p>`,
      guideline:[
        "GL総論「2.3 生検」：「疑われる病変に対しては、躊躇せず生検を実施して病理組織学的検討を行う。側方は病巣辺縁より1〜3mm、深部は取り残しが生じない程度のマージンを確保し、<b>全切除生検するのが最も望ましい</b>」。※CQではなく総論の記述。",
        "播種説の否定：「生検の種類（全切除生検または部分生検）が、メラノーマ患者の予後に明らかな悪影響を及ぼすことは知られていない」「先行する生検が、SLNBの同定に影響を及ぼさないことも報告されている」。",
        "部分生検の限界と作法：「部分生検では病変全体を評価することができないため偽陰性率が高くなること、TTの評価が不正確になる可能性がある」。行う場合は「検体の採取部位は、<b>最もメラノーマが疑わしく、TTが厚いと思われる部分を選ぶ</b>」。例外（大きな病変／顔面・掌蹠・指趾・耳／患者側の要因＝合併症・年齢・美容的希望）でも「考慮してもよい」（許容）であって「最も望ましい」（最適）ではない。",
        "TT評価が困難になった場合の対応：「病変内の別箇所を再生検するか、エコー検査などでTTを計測する」→ <b>部分生検の害は「回復不能」ではなく「不要な追加生検・追加評価と遅延」である。</b>",
        "腫瘍厚が規定する2つの決定：①拡大切除の側方マージン（表10：in situ 0.5〜1cm／TT≤1mm 1cm／1〜2mm 1〜2cm／2mm超 2cm）、②SLNBの適応（T1a＝基本的に推奨せず／T1b＝考慮／TT>1mm＝提案）。",
        "血清LDH・S-100：M分類（M1a(0)/(1)）と術後の再発監視で用いられ、GL自身が感度・特異度の限界を明記。局所の疑わしい色素斑を診断・除外する検査ではない。"
      ],
      points:[
        "<b>「メラノーマは生検すると播種する」は誤りである。</b>本邦GL2025は「疑われる病変に対しては<b>躊躇せず生検を実施</b>」とし、「<b>生検の種類が、メラノーマ患者の予後に明らかな悪影響を及ぼすことは知られていない</b>」と播種説を否定する。予後を決めるのは<b>腫瘍厚</b>であって生検手技ではない（Lees & Briggs, 1086例）。<b>播種を恐れて経過観察するのは、誤った理由で診断を遅らせる行為である。</b>",
        "<b>しかし「躊躇せず生検」＝「どの生検法でもよい」ではない。</b>GLが望ましいとするのは<b>側方1〜3mm・深部は取り残しのないマージンでの全切除生検</b>であり、<b>部分生検では偽陰性率が高くなり、腫瘍厚の評価が不正確になりうる</b>（Ng 2010：パンチ生検は誤診オッズ16.6倍・有害転帰を伴う誤診オッズ20倍。三次紹介施設のデータであり一般診療の絶対リスクではない）。",
        "<b>やむを得ず部分生検を行う場合でも、採取部位は「最もメラノーマが疑わしく、腫瘍厚が厚いと思われる部分」を選ぶ。</b>非対称・色調不均一な病変の<b>「中央」を機械的に採るのは、部分生検としても不適切である。</b>",
        "<b>腫瘍厚は「拡大切除の側方マージン」と「SLNBの適応」を規定する。</b>ただし<b>部分生検でTT評価が損なわれても、治療設計が不可能になるわけではない</b>——GLは「病変内の<b>別箇所を再生検</b>するか、<b>エコー検査などでTTを計測する</b>」と対応策を示している。<b>害は「回復不能」ではなく、「患者に不要な追加生検・追加評価と遅延を負わせる」ことである。</b>",
        "<b>血液検査でメラノーマは除外できない。</b>血清LDH・S-100は<b>遠隔転移例の病期分類（M分類）</b>と<b>術後の再発監視</b>の文脈で用いられるものであり、GL自身が「LDHは<b>感度、特異度の点で正確性に欠ける</b>」「S-100は<b>感度が低い</b>」と限界を明記している。<b>腫瘍量に比例して上昇するマーカーを、腫瘍量が最も少ない早期の局所病変の除外に使うことはできない。</b>また<b>診断が確定していない色素性病変に凍結療法・レーザー・電気焼灼を行わない</b>。ABCD(E)ルールと「醜いアヒルの子サイン」で拾い上げ、疑ったら<b>全切除生検から治療計画までを一貫して担える皮膚科へ紹介する。</b>"
      ],
      refs:[
        "公益社団法人日本皮膚科学会, 一般社団法人日本皮膚悪性腫瘍学会, 皮膚がん診療ガイドライン策定委員会（メラノーマ診療ガイドライングループ）. 皮膚がん診療ガイドライン第4版 メラノーマ診療ガイドライン2025. 日皮会誌. 2024;134(13):3149-3265. doi:10.14924/dermatol.134.3149.（J-STAGEで全文無料）",
        "Ng JC, Swain S, Dowling JP, Wolfe R, Simpson P, Kelly JW. The impact of partial biopsy on histopathologic diagnosis of cutaneous melanoma: experience of an Australian tertiary referral service. Arch Dermatol. 2010;146(3):234-239. PMID 20231492. doi:10.1001/archdermatol.2010.14.",
        "Lees VC, Briggs JC. Effect of initial biopsy procedure on prognosis in Stage 1 invasive cutaneous malignant melanoma: review of 1086 patients. Br J Surg. 1991;78(9):1108-1110. PMID 1933198. doi:10.1002/bjs.1800780923.",
        "Ahmadi O, Das M, Hajarizadeh B, Mathy JA. Impact of Shave Biopsy on Diagnosis and Management of Cutaneous Melanoma: A Systematic Review and Meta-Analysis. Ann Surg Oncol. 2021;28(11):6168-6176. PMID 33782802. doi:10.1245/s10434-021-09866-3.",
        "※上記のNg 2010・Lees 1991・Ahmadi 2021は本問の補強エビデンスであり、メラノーマ診療ガイドライン2025が当該箇所で引用している文献（Martin RCG, Am J Surg 2005 ／ Pflugfelder A, Clin Dermatol 2010 ／ Bong JL, J Am Acad Dermatol 2002 ／ Gannon CJ, Cancer 2006）とは別である。"
      ]
    }
  }
];
