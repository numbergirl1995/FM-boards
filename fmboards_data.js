/* ===========================================================
   FM BOARDS — question data（第1弾）
   1問 = { dom, domEn, cat[], setId, title, meta, stem, options[5],
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

const QUESTIONS = [
  /* ===================== Q1 (set1) ===================== */
  {
    dom:"公衆衛生・EBM", domEn:"VACCINE", cat:["公衆衛生・予防","感染症","免疫・膠原病"], setId:"set1",
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
    dom:"日常病（高血圧）", domEn:"HYPERTENSION", cat:["循環器","老年医学"], setId:"set1",
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
    dom:"女性医療（HRT）", domEn:"MENOPAUSE", cat:["女性医療","内分泌・代謝"], setId:"set1",
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
    dom:"小児・思春期", domEn:"PEDIATRICS", cat:["小児","感染症","公衆衛生・予防"], setId:"set1",
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
    dom:"高齢者（多剤併用）", domEn:"POLYPHARMACY", cat:["老年医学","薬剤・中毒"], setId:"set1",
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
    dom:"メンタルヘルス", domEn:"MENTAL", cat:["精神","内分泌・代謝","薬剤・中毒"], setId:"set2",
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
    dom:"急性疾患・救急", domEn:"EMERGENCY", cat:["救急","アレルギー","循環器"], setId:"set2",
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
    dom:"整形・骨代謝", domEn:"ORTHO", cat:["整形・骨代謝","内分泌・代謝"], setId:"set2",
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
    dom:"緩和ケア", domEn:"OPIOID", cat:["緩和ケア","薬剤・中毒"], setId:"set2",
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
    dom:"医療制度（介護保険）", domEn:"LTC", cat:["医療制度","老年医学"], setId:"set2",
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
    dom:"感染症", domEn:"INFECTIOUS_DISEASE", cat:["感染症","菌血症・血流感染"], setId:"set3",
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
      core:`<p>本例はDTP（カテーテル血が末梢血より2時間以上早く陽性化）を満たし、CoNSによるCRBSIと診断できる。選択肢A（抗菌薬省略）は、Badia-CebadaらのRCT（2023）が「真に低リスク」のCoNS-CRBSIで抜去後の抗菌薬省略を示唆したため魅力的に見える。しかし「低リスク」は操作的基準で照合する必要がある。同試験は人工血管内デバイスや中等度以上の弁膜症を除外基準としており、本例は生体弁（人工弁）を有する一点で低リスクの枠組みから外れる。臨床的に決定的なのは、CoNS（特にS. epidermidis）が人工弁心内膜炎（PVE）の最多起因菌であること。ゆえに人工弁患者のCoNS菌血症は、カテーテル由来に見えてもPVEを評価しなければならない。人工弁ではTEEがクラスⅠで推奨され、TTEはアーチファクトのため感度が不十分で陰性でも除外できない。したがって、適切な静注抗菌薬（本例はMRSEゆえバンコマイシン基盤）を開始し、TEEでPVEを評価する（C）のが正しい。PVE確認時はブドウ球菌PVEの併用療法（バンコマイシン＋リファンピシン＋ゲンタマイシン、6週以上）と外科的評価を含む多職種管理へ移行する。</p>`,
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
        "ブドウ球菌によるPVE：併用療法（バンコマイシンまたはβラクタム＋リファンピシン＋ゲンタマイシン、6週以上）、外科的評価を含む多職種管理。"
      ],
      points:[
        "低リスクCoNS-CRBSIでは抜去後の抗菌薬省略が新たな選択肢だが（Badia-Cebada RCT 2023、n=27で早期中止＝仮説生成的）、「低リスク」は必ず操作的基準で照合する。人工物・免疫不全・血行動態不安定などがあれば低リスクではない。",
        "コアグラーゼ陰性ブドウ球菌（特にS. epidermidis）は人工弁心内膜炎（PVE）の最多起因菌。人工弁患者のCoNS菌血症は、カテーテル由来に見えてもPVEを必ず評価する。",
        "人工弁が存在/疑われる場合、TEEがクラスⅠ（ESC 2023）。TTEはアーチファクトで感度不十分で、陰性でも除外にならない。",
        "ブドウ球菌PVEの治療は併用療法（VCM/βラクタム＋リファンピシン＋ゲンタマイシン、6週以上）で、外科的評価を含む多職種管理を行う。",
        "カテーテル先端培養はDTP等で診断がつけば付加価値が低く、重大リスクのある病態で治療開始を遅らせない。"
      ],
      refs:[
        "Badia-Cebada L, Carmezim J, Pérez-Rodríguez MT, et al. Randomized Clinical Trial of the Need for Antibiotic Treatment for Low-Risk Catheter-Related Bloodstream Infection Caused by Coagulase-Negative Staphylococci. Antibiotics (Basel). 2023;12(5):839. PMID 37237744.",
        "Mermel LA, Allon M, Bouza E, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: 2009 update by the IDSA. Clin Infect Dis. 2009;49(1):1-45. PMID 19489710.",
        "Delgado V, Ajmone Marsan N, de Waha S, et al. 2023 ESC Guidelines for the management of endocarditis. Eur Heart J. 2023;44(39):3948-4042. doi:10.1093/eurheartj/ehad193."
      ]
    }
  }
];
