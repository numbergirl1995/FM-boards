/* ===========================================================
   FM BOARDS — question data (第1弾)
   このファイルを編集すれば問題を追加・更新できます。
   1問 = { dom, domEn, title, meta, stem, options[5], answer(0-4), explain }
   explain = { core(HTML), evidence[{src,pmid,point}], distractors(HTML),
               guideline[文字列(HTML可)], refs[文字列] }
   ※ まずQ6〜Q8をライブ投入。残り7問は確定HTMLから順次移植。
   =========================================================== */
const QUESTIONS = [
  {
    dom:"⑦ メンタルヘルス", domEn:"⑦ MENTAL",
    title:"最も適切な対応はどれか",
    meta:"62 F · 外来 · 双極I型でリチウム長期 · 偶発的高Ca",
    stem:`数か月前からの倦怠感・口渇・多尿で受診。健診で高カルシウム血症を指摘。既往に<b>双極I型障害（14年前発症）</b>・脂質異常症・高血圧・2型糖尿病があり、<b>炭酸リチウム</b>・アトルバスタチン・アムロジピン・メトホルミンを長年内服。補正Ca 11.4mg/dL（6か月前10.2）、P 2.4、25(OH)D充足、eGFR 52（5年前78）、TSH 7.4、<b>intact PTH 78pg/mL</b>、リチウム血中濃度0.8mEq/L（治療域内）。`,
    options:[
      "リチウムを中止する",
      "悪性腫瘍を検索する",
      "補液して経過観察する",
      "副甲状腺を摘出する",
      "ビスホスホネートを投与する"
    ],
    answer:0,
    explain:{
      core:`<p>鍵は<b>高Caに対しintact PTHが抑制されていない（78）＝PTH依存性高Ca血症</b>。これは副甲状腺機能亢進症を意味し、悪性腫瘍性（PTHrP介在性でPTHは抑制）ではない。リチウムはCaSRのセットポイントを上げ<b>リチウム関連副甲状腺機能亢進症</b>を生じる（有病率約4%、対 健常0.5%）。</p>
      <p>本例は副甲状腺だけでなく<b>腎（CKD・腎性尿崩症）・甲状腺（機能低下）</b>にも及ぶ多臓器のリチウム毒性。最も適切なのは<b>原因であるリチウムを中止（精神科と連携し他剤へ変更）</b>。自己中断はさせず計画的に行い、リチウム関連は<b>多腺性が約半数</b>のため内分泌評価・シナカルセト等も並行（中止のCa改善効果自体は不確実）。`,
      evidence:[
        {src:"Shine 2015 (Lancet)",pmid:"26003379",point:"長期リチウムで CKD <b>HR 1.93</b>／甲状腺機能低下 <b>HR 2.31</b>／高Ca <b>HR 1.43</b>。定期モニタリングを推奨"},
        {src:"Vandermeulen 2024 (SR/MA)",pmid:"39192574",point:"副甲状腺機能亢進症 約<b>4%</b>（対 健常0.5%）、<b>多腺性51%</b>。手術・シナカルセトが有効"},
        {src:"McKnight 2012 (Lancet)",pmid:"22265699",point:"慢性曝露は腎・甲状腺・副甲状腺に影響。腎/甲状腺/Caの定期評価を支持"}
      ],
      distractors:`<p><b>悪性腫瘍を検索</b> — PTHrP介在性ではPTHは抑制。本例はPTH非抑制でPTH依存性、体重減少もなく不適。<span class="bias">availability</span></p>
      <p><b>補液して経過観察</b> — 6か月で持続・進行し脱水だけでは説明できない。<span class="bias">アンカリング</span> <b>副甲状腺を摘出</b> — リチウム関連は多腺性が多く単腺摘出を前提にできず早計。<span class="bias">早期閉鎖</span> <b>ビスホスホネート</b> — 原因を評価せず数値だけ下げる対症。<span class="bias">band-aid</span></p>`,
      guideline:[
        "<b>定期モニタリング</b>：ベースライン＋6〜12か月毎に eGFR・TSH・補正Ca。高Ca時はintact PTHを追加。",
        "<b>高CaはまずPTHで層別化</b>：非抑制＝PTH依存性（リチウム関連/原発性）、抑制＝PTH非依存性（悪性腫瘍等）。",
        "<b>リチウム関連副甲状腺機能亢進症</b>：多腺性が約半数。内分泌評価のうえシナカルセトや手術、リチウムは精神科と共同決定。",
        "<b>3系統の臓器影響</b>：腎（CKD・腎性尿崩症）・甲状腺（機能低下）・副甲状腺（高Ca）。"
      ],
      refs:[
        "Shine B, et al. Long-term effects of lithium on renal, thyroid, and parathyroid function. Lancet. 2015;386(9992):461-468.",
        "Vandermeulen L, et al. Lithium-associated hypercalcemia and hyperparathyroidism: SR/MA. World J Biol Psychiatry. 2024;25(8):417-429.",
        "McKnight RF, et al. Lithium toxicity profile: SR/MA. Lancet. 2012;379(9817):721-728."
      ]
    }
  },
  {
    dom:"⑧ 急性疾患・救急", domEn:"⑧ EMERGENCY",
    title:"次に行う最も適切な対応はどれか",
    meta:"68 M · 救急 · カルベジロール内服 · 筋注×2＋持続静注に不応",
    stem:`ハチ刺傷数分後に全身蕁麻疹・喘鳴・呼吸困難で搬入。慢性心不全で<b>カルベジロール</b>内服。<b>アドレナリン0.3〜0.5mg筋注×2回</b>、高流量酸素、下肢挙上、等張晶質液1,000mL急速静注×2、さらに<b>アドレナリン持続静注を開始・増量</b>。それでも BP72/40、SpO₂90%、両肺に呼気性喘鳴が持続。`,
    options:[
      "高用量の副腎皮質ステロイドを静注する",
      "アドレナリン1mgを静脈内ボーラスで投与する",
      "グルカゴンを静脈内投与する",
      "抗ヒスタミン薬（H1・H2）を追加する",
      "グルコン酸カルシウムを静注する"
    ],
    answer:2,
    explain:{
      core:`<p>適切な筋注アドレナリンの反復＋十分な輸液に反応しない<b>難治性アナフィラキシー</b>。標準のアドレナリン持続静注は施行済みで、なお遷延する点が核心。</p>
      <p>本例は<b>カルベジロール</b>でβ受容体が遮断され、アドレナリンのβ作用が出にくい。<b>グルカゴン</b>はβ受容体を介さずcAMPを直接上げ、β遮断を迂回する＝<b>次の一手</b>。成人1〜5mgを約5分で静注、必要なら5〜15µg/分。`,
      evidence:[
        {src:"WAO Guidance 2020",pmid:"33204386",point:"筋注が第一選択。難治例は静注へ。<b>β遮断薬例にグルカゴン</b>"},
        {src:"Practice Parameter 2020",pmid:"32001253",point:"抗ヒスタミン薬・ステロイドは第一選択でなく二相性を予防しない"},
        {src:"EAACI 2021 update",pmid:"34343358",point:"段階的エスカレーション"},
        {src:"Thomas & Crawford 2005",pmid:"15788828",point:"β遮断下の難治例にグルカゴンが有益"}
      ],
      distractors:`<p><b>アドレナリン1mg静注</b> — 心停止時の用量。脈・灌流のある患者では重症高血圧・致死的不整脈・心筋虚血。灌流例は持続静注か少量（50µg）titration。<span class="bias">正しい薬・誤った用量</span></p>
      <p><b>ステロイド／抗ヒスタミン</b> — 二次補助で発現が遅く、難治性ショックの治療でも二相性予防でもない。<b>カルシウム</b> — 適応外。<span class="bias">アンカリング</span></p>`,
      guideline:[
        "<b>順序</b>：筋注 → 体位 → O₂ → 輸液 → 反復 → 持続静注へエスカレーション。",
        "<b>β遮断薬抵抗性</b>：グルカゴン1〜5mg静注、必要なら5〜15µg/分持続。嘔吐に注意。",
        "<b>1mg静注ボーラスは心停止用量</b>。灌流例では用いない。",
        "<b>退院時</b>：エピペン®処方＋専門医紹介、ハチ毒はアレルゲン免疫療法（VIT）。"
      ],
      refs:[
        "Cardona V, et al. WAO Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.",
        "Shaker MS, et al. Anaphylaxis—a 2020 practice parameter update. J Allergy Clin Immunol. 2020;145(4):1082-1123.",
        "Muraro A, et al. EAACI guidelines: Anaphylaxis (2021 update). Allergy. 2021;77(2):357-377.",
        "Thomas M, Crawford I. Glucagon infusion in refractory anaphylactic shock on beta-blockers. Emerg Med J. 2005;22(4):272-3."
      ]
    }
  },
  {
    dom:"⑨ 整形・骨代謝", domEn:"⑨ ORTHO",
    title:"最も適切な初期治療はどれか",
    meta:"74 F · 外来 · 直近椎体骨折＋既存大腿骨頸部骨折 · 二次性は陰性",
    stem:`3か月前に軽微な外力で<b>第12胸椎圧迫骨折</b>、1年前に<b>右大腿骨頸部骨折</b>（手術歴）。DXA 腰椎 <b>Tスコア −3.4</b>、大腿骨頸部 −3.2。二次性骨粗鬆症の検索（Ca・P・ALP・eGFR・25(OH)D・PTH・TSH・蛋白電気泳動・遊離軽鎖）はすべて正常で、クッシング・甲状腺亢進・性腺低下・骨軟化症も否定的。<b>過去1年以内に心筋梗塞・脳卒中なし</b>、活動性悪性腫瘍なし。`,
    options:[
      "経口ビスホスホネート（アレンドロネート）を第一選択として開始する",
      "ビスホスホネートで2〜3年治療した後にテリパラチドへ切り替える",
      "デノスマブを開始し、2年後に投与を終了する",
      "骨形成促進薬を先行し、その後に骨吸収抑制薬へ移行する",
      "天然型ビタミンDとカルシウムのみで経過観察する"
    ],
    answer:3,
    explain:{
      core:`<p>直近の椎体骨折＋既存の大腿骨近位部骨折＋極めて低いTスコア＝<b>超高リスク（very high risk）</b>。この層では経口ビスホスホネートを漫然と先行させず、<b>骨形成促進薬（テリパラチド／ロモソズマブ）を先行し、その後に骨吸収抑制薬で維持する anabolic-first</b>が推奨（Endocrine Society 2020 等）。</p>
      <p><b>順序が重要</b>：抗骨吸収薬を先行するとテリパラチドの反応が減弱（DATA-Switch）。本例は1年以内のMI/脳卒中がなくロモソズマブの心血管禁忌に該当せず、テリパラチドも禁忌事項なし＝<b>選択肢Dが最適</b>。`,
      evidence:[
        {src:"VERO 2018 (Lancet)",pmid:"29129436",point:"重症骨粗鬆症で新規椎体骨折 <b>5.4% vs 12.0%（RR 0.44）</b>（テリパラチド vs リセドロネート）"},
        {src:"ARCH 2017 (NEJM)",pmid:"28892457",point:"ロモソズマブ→アレンドロネートで椎体 <b>−48%</b>・股関節 −38%。<b>重篤心血管事象 2.5% vs 1.9%</b>"},
        {src:"DATA-Switch 2015 (Lancet)",pmid:"26144908",point:"デノスマブ→テリパラチドで一過性/進行性骨量減少。順序が重要"},
        {src:"Cummings 2018 (JBMR)",pmid:"29105841",point:"デノスマブ中止で椎体骨折率 1.2→7.1/100人年、<b>60.7%が多発椎体骨折</b>"},
        {src:"Endocrine Society 2020",pmid:"32068863",point:"超高リスクは骨形成促進薬を先行→抗骨吸収薬へ"}
      ],
      distractors:`<p><b>経口BP先行</b> — 標準だが超高リスクには不十分で、後続の骨形成薬の反応を減弱させる。<span class="bias">既定値バイアス</span> <b>BP→テリパラチド</b> — 順序が逆（反応減弱）。<span class="bias">順序の誤り</span></p>
      <p><b>デノスマブを2年で終了</b> — 中止でリバウンド多発椎体骨折。中止時は必ずBPへ移行。<span class="bias">中止リバウンドの軽視</span> <b>VitD＋Caのみ</b> — 補助で、超高リスクの治療として不十分。<span class="bias">過小治療</span></p>`,
      guideline:[
        "<b>超高リスクの定義</b>：直近の椎体骨折・多発骨折・大腿骨近位部骨折・極低BMD・治療中骨折のいずれか。",
        "<b>anabolic-first</b>：骨形成促進薬（テリパラチド/アバロパラチド/ロモソズマブ）→抗骨吸収薬で維持。",
        "<b>ロモソズマブ</b>は1年以内のMI・脳卒中で禁忌（ARCHの心血管シグナル）。投与期間12か月。",
        "<b>テリパラチド</b>24か月。骨悪性腫瘍・骨転移・原因不明のALP高値・骨への放射線歴で禁忌。",
        "<b>デノスマブ</b>は自己中断禁物（リバウンド多発椎体骨折）、中止時はBPへ移行。"
      ],
      refs:[
        "Kendler DL, et al. Teriparatide vs risedronate in severe osteoporosis (VERO). Lancet. 2018;391(10117):230-240.",
        "Saag KG, et al. Romosozumab or Alendronate (ARCH). N Engl J Med. 2017;377(15):1417-1427.",
        "Leder BZ, et al. Denosumab and teriparatide transitions (DATA-Switch). Lancet. 2015;386:1147-1155.",
        "Cummings SR, et al. Vertebral fractures after discontinuation of denosumab. J Bone Miner Res. 2018;33(2):190-198.",
        "Eastell R, et al. Pharmacological Management of Osteoporosis: Endocrine Society Guideline Update. J Clin Endocrinol Metab. 2020;105(3):dgaa048."
      ]
    }
  }
];
