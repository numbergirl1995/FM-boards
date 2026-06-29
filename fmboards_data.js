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
  /* ===================== Q6 ===================== */
  {
    dom:"⑦ メンタルヘルス", domEn:"⑦ MENTAL", cat:["精神","内分泌・代謝","薬剤・中毒"], setId:"set2",
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
    dom:"⑧ 急性疾患・救急", domEn:"⑧ EMERGENCY", cat:["救急","アレルギー","循環器"], setId:"set2",
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
    dom:"⑨ 整形・骨代謝", domEn:"⑨ ORTHO", cat:["整形・骨代謝","内分泌・代謝"], setId:"set2",
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
  }
];
