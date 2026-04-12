export interface QuizQuestion {
  id: number;
  situation: string;
  hand: string;
  position: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** 関連するレンジ表のポジションID */
  rangePositionId: string;
  /** 関連するレンジ表のシナリオID */
  rangeScenarioId: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    situation:
      "9人テーブルで、5人のプレイヤーがリンプしてきた。",
    hand: "A\u26604\u2660",
    position: "ボタン (BTN)",
    options: ["フォールド", "コール", "レイズ"],
    correctIndex: 2,
    explanation:
      "ポットには既に10〜15BBのデッドマネーがある。A4sはスーテッドエースでポストフロップでも十分プレイできるハンド。ボタンという最良ポジションを活かし、レイズしてポットを獲りにいくべき。リンパーの多くはフォールドするか、コールしても不利なポジションでプレイすることになる。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-open",
  },
  {
    id: 2,
    situation:
      "UTGのプレイヤーが$15にレイズし、3人がコールした。",
    hand: "A\u26608\u2666",
    position: "ボタン (BTN)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 0,
    explanation:
      "A8oはオフスートで、レイズに対してコールするには弱すぎる。マルチウェイポットではドミネートされるリスクが高い（AK、AQ、AJなどに負けている）。ポジションの優位性があっても、このハンドではフォールドが正しい。スーテッドであればコールも検討できる。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-vs-loose",
  },
  {
    id: 3,
    situation:
      "タイトなプレイヤーがUTGから$12にレイズした。他の全員がフォールドした。",
    hand: "A\u2660A\u2665",
    position: "ボタン (BTN)",
    options: ["コール", "リレイズ (3-Bet)"],
    correctIndex: 1,
    explanation:
      "AAはプリフロップ最強のハンド。タイトなプレイヤーのレイズに対しても、必ずリレイズ（3-Bet）すべき。スロープレイ（コール）はマルチウェイになるリスクを生み、AAの価値を下げる。ヘッズアップに持ち込み、ポストフロップでもポジションを活かしてプレイする。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-vs-tight",
  },
  {
    id: 4,
    situation:
      "3人のプレイヤーがリンプし、SBが$15にレイズした。BBとリンパーは全員フォールドした。あなたはリンパーの1人だった。",
    hand: "A\u2660J\u2660",
    position: "ハイジャック (HJ)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 1,
    explanation:
      "AJsは強いハンドだが、SBのレイズサイズが大きく、ポジションが不利。リレイズするにはやや弱く、フォールドするには強すぎる。コールしてフロップを見るのが最も期待値が高い。ただしSBが非常にタイトなプレイヤーであれば、フォールドも選択肢になる。AA、AK、KQなどにはドミネートされている可能性がある。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-vs-loose",
  },
  {
    id: 5,
    situation:
      "5人がリンプし、あなたはボタンの次の位置（SB）にいる。",
    hand: "K♠9♠",
    position: "スモールブラインド (SB)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 2,
    explanation:
      "K9sはスーテッドでそこそこの強さがあり、5人のリンパーに対してはレイズが正しい。SBからのレイズはスクイーズとして機能し、多くのリンパーをフォールドさせることができる。リンプでの参加はポジション最悪のSBで6人ポットを作ることになり、不利。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-limp",
  },
  {
    id: 6,
    situation:
      "UTGがレイズし、MPがコールした。COが3-Betした。",
    hand: "Q\u2660Q\u2665",
    position: "ボタン (BTN)",
    options: ["フォールド", "コール", "4-Bet（リレイズ）"],
    correctIndex: 2,
    explanation:
      "QQはプレミアムハンド。COの3-Betに対して、ボタンから4-Betすることで相手のレンジを絞り込む。コールするとマルチウェイになりやすく、QQの勝率が大幅に下がる。4-Betに対してオールインで返されたら、相手のレンジ次第でコール/フォールドを判断する。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-vs-loose",
  },
  // ── EP Open (4問) ────────────────────────────────────────
  {
    id: 7,
    situation:
      "全員フォールドしてあなたの番が来た。",
    hand: "A♠K♥",
    position: "アーリーポジション (EP)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 2,
    explanation:
      "AKoはEPからのオープンレイズレンジに含まれるプレミアムハンド。オフスートでもAKは十分に強く、ファーストインではレイズ一択。リンプはハンドの価値を活かせず、ポジション不利を悪化させるだけ。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-open",
  },
  {
    id: 8,
    situation:
      "UTGであなたの番だ。前のプレイヤーはいない。",
    hand: "7♦6♦",
    position: "アーリーポジション (EP)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 2,
    explanation:
      "76sはEPのオープンレイズレンジのボーダーラインにあるが、レンジに含まれている。スーテッドコネクターはストレートやフラッシュを作れるポテンシャルがあり、レイズしてプリフロップでポットを獲りにいく。リンプは避けるべき。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-open",
  },
  {
    id: 9,
    situation:
      "あなたはUTG。まだ誰もアクションしていない。",
    hand: "K♠J♥",
    position: "アーリーポジション (EP)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 0,
    explanation:
      "KJoはEPのオープンレイズレンジに含まれない。KJsならレイズできるが、オフスートではフラッシュドローの可能性がなく、ドミネートされるリスクも高い。EPからはフォールドが正しい判断。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-open",
  },
  {
    id: 10,
    situation:
      "UTGであなたの番。全員がまだアクションしていない。",
    hand: "J♣9♠",
    position: "アーリーポジション (EP)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 0,
    explanation:
      "J9oはEPのオープンレイズレンジに含まれない。JTs、T9sといったスーテッドコネクターはレンジに入るが、J9oはコネクターですらなくオフスート。EPというポジション不利を考えると、フォールドが正解。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-open",
  },
  // ── EP vs Tight (3問) ────────────────────────────────────
  {
    id: 11,
    situation:
      "タイトなプレイヤーが$12にレイズした。普段はリンプばかりのプレイヤーだ。",
    hand: "K♠K♥",
    position: "アーリーポジション (EP)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "KKはプレミアムハンドであり、タイトなプレイヤーのレイズに対してもリレイズ（3-Bet）すべき。相手がAAを持っている可能性はあるが、KKでフラットコールするのは価値を逃しすぎる。ポットを大きくして優位に立つ。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-vs-tight",
  },
  {
    id: 12,
    situation:
      "普段はほとんどレイズしないタイトなプレイヤーが$15にレイズしてきた。",
    hand: "9♠8♠",
    position: "アーリーポジション (EP)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 1,
    explanation:
      "98sはフラットコールレンジに含まれる。タイトなプレイヤーのレイズに対してリレイズするには弱すぎるが、スーテッドコネクターとしてインプライドオッズが高い。コールしてフロップを見て、ストレートやフラッシュドローを狙う。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-vs-tight",
  },
  {
    id: 13,
    situation:
      "非常にタイトなプレイヤーがレイズした。このプレイヤーは1時間に1回しかレイズしない。",
    hand: "K♥9♣",
    position: "アーリーポジション (EP)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 0,
    explanation:
      "K9oはタイトプレイヤーのレイズに対して、リレイズレンジにもフラットコールレンジにも含まれない。相手のレンジはAA〜TTやAK〜AQなど非常に強いハンドに限られており、K9oではドミネートされる可能性が高い。フォールドが正解。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-vs-tight",
  },
  // ── EP vs Loose (2問) ────────────────────────────────────
  {
    id: 14,
    situation:
      "ルースなプレイヤーが$10にレイズした。このプレイヤーはほぼ毎ハンドレイズしている。",
    hand: "T♥9♥",
    position: "アーリーポジション (EP)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "T9sはルースプレイヤーに対するリレイズレンジに含まれる。相手のレンジが広いため、スーテッドコネクターでの3-Betはブラフとしても機能する。コールされてもフロップでストレートやフラッシュドローを作れるポテンシャルがあり、攻撃的にプレイすべき。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-vs-loose",
  },
  {
    id: 15,
    situation:
      "アグレッシブなプレイヤーが$12にレイズした。このプレイヤーは広いレンジでレイズすることで知られている。",
    hand: "A♠Q♥",
    position: "アーリーポジション (EP)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 1,
    explanation:
      "AQoはルースプレイヤーに対するフラットコールレンジに含まれる。AQsならリレイズレンジに近いが、オフスートではコールが推奨。相手のレンジが広いのでドミネートしている場面も多いが、3-Betするとリレイズされた際に難しい判断を迫られる。",
    rangePositionId: "ep",
    rangeScenarioId: "ep-vs-loose",
  },
  // ── CO: オープンレイズ判断 (co-open) 4問 ─────────────────
  {
    id: 16,
    situation:
      "EPとMPがフォールドし、あなた（CO）の番が来た。",
    hand: "A♠T♥",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 2,
    explanation:
      "AToはCOのオープンレイズレンジに含まれる。COはBTNの次に有利なポジションであり、約22%のハンドでオープンできる。AToはそのレンジの中ではやや弱い部類だが、十分にレイズできるハンド。",
    rangePositionId: "co",
    rangeScenarioId: "co-open",
  },
  {
    id: 17,
    situation:
      "前のプレイヤーが全員フォールドし、COのあなたにアクションが回ってきた。",
    hand: "4♦3♦",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 2,
    explanation:
      "43sは意外かもしれないが、COのオープンレイズレンジに含まれている。スーテッドコネクターとしてストレートやフラッシュのポテンシャルがあり、ポジションの優位性も活かせる。リンプではなくレイズで参加すべき。",
    rangePositionId: "co",
    rangeScenarioId: "co-open",
  },
  {
    id: 18,
    situation:
      "UTG、MP、HJがフォールドし、あなた（CO）の番が来た。",
    hand: "Q♠4♥",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 0,
    explanation:
      "Q4oはCOのオープンレイズレンジに含まれていない。Qハイのオフスートはポストフロップでドミネートされやすく、フラッシュの可能性もない。COでも22%のレンジには入らない弱いハンドなので、フォールドが正しい。",
    rangePositionId: "co",
    rangeScenarioId: "co-open",
  },
  {
    id: 19,
    situation:
      "EPとMPがフォールドし、COのあなたにアクションが回った。",
    hand: "K♥8♥",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 2,
    explanation:
      "K8sはCOのオープンレイズレンジに含まれる。スーテッドのKxハンドはフラッシュドローの可能性があり、COのポジションならK9s、K8s、K7sまでオープンできる。なおK8oであればレンジ外となりフォールドが正しい。",
    rangePositionId: "co",
    rangeScenarioId: "co-open",
  },
  // ── CO: 対タイト (co-vs-tight) 3問 ───────────────────────
  {
    id: 20,
    situation:
      "タイトなプレイヤーがUTGから$12にレイズした。あなたはCOにいる。",
    hand: "A♠A♥",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "AAはプリフロップ最強のハンド。たとえ相手がタイトでも、AAでは必ず3-Betすべき。スロープレイはマルチウェイのリスクを高め、AAの価値を下げる。相手のレンジが狭いからこそ、バリューを最大化するためにリレイズする。",
    rangePositionId: "co",
    rangeScenarioId: "co-vs-tight",
  },
  {
    id: 21,
    situation:
      "タイトなプレイヤーがUTGから$12にレイズした。他のプレイヤーは全員フォールドしている。",
    hand: "A♦T♦",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 0,
    explanation:
      "ATsは通常なら強いハンドだが、タイトなプレイヤーのUTGレイズに対してはフォールドが推奨される。相手のレンジにはAK、AQ、AJが多く含まれ、ドミネートされるリスクが高い。COからの3-Betも相手がフォールドしにくいため効果が薄い。",
    rangePositionId: "co",
    rangeScenarioId: "co-vs-tight",
  },
  {
    id: 22,
    situation:
      "非常にタイトなプレイヤーが$15にレイズした。フォールドが回ってあなた（CO）の番だ。",
    hand: "J♠J♥",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "対タイトでは基本的にフォールドだが、JJはレンジバランスを保つためのブラフ3-Betとして使えるハンド。フォールドエクイティも期待でき、コールされてもオーバーカードが出なければ強い。ノートにもJJでの3-Betが推奨されている。",
    rangePositionId: "co",
    rangeScenarioId: "co-vs-tight",
  },
  // ── CO: 対ルース (co-vs-loose) 4問 ───────────────────────
  {
    id: 23,
    situation:
      "ルースなプレイヤーがEPから$10にレイズした。あなたはCOにいる。",
    hand: "A♠K♠",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "AKsはプレミアムハンドであり、ルースなレイザーに対してはリレイズ（3-Bet）レンジに含まれる。相手のレンジが広いためバリュー3-Betとして最適。コールでは相手のポジショナルアドバンテージを許し、マルチウェイになるリスクもある。",
    rangePositionId: "co",
    rangeScenarioId: "co-vs-loose",
  },
  {
    id: 24,
    situation:
      "ルースなプレイヤーがMPから$8にレイズした。COのあなたにアクションが回った。",
    hand: "T♥T♦",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 1,
    explanation:
      "TTはルースなレイザーに対してフラットコールレンジに含まれる。3-Betするには少し弱く、フォールドするには強すぎる。コールしてポジションを活かし、セットマイニングやオーバーペアとしてポストフロップでバリューを得る戦略が最適。",
    rangePositionId: "co",
    rangeScenarioId: "co-vs-loose",
  },
  {
    id: 25,
    situation:
      "ルースなプレイヤーが$10にレイズし、全員がフォールドした。あなたはCOにいる。",
    hand: "Q♣5♥",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 0,
    explanation:
      "Q5oはリレイズレンジにもフラットコールレンジにも含まれない。オフスートで連続性もなく、ポストフロップでのプレイアビリティが低い。たとえ相手がルースでも、このハンドで参加するのは期待値がマイナスになる。フォールドが正しい。",
    rangePositionId: "co",
    rangeScenarioId: "co-vs-loose",
  },
  {
    id: 26,
    situation:
      "ルースなプレイヤーがEPから$12にレイズした。あなたはCOで次のアクション。",
    hand: "5♦4♦",
    position: "カットオフ (CO)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "54sは意外にもリレイズ（3-Bet）レンジに含まれている。スーテッドコネクターとしてストレートやフラッシュのポテンシャルがあり、ブラフ3-Betとして最適なハンド。相手がフォールドすればそのまま獲得でき、コールされてもボードによっては大きなハンドを作れる。",
    rangePositionId: "co",
    rangeScenarioId: "co-vs-loose",
  },
  // ── BTN: オープンレイズ判断 (btn-open) 2問 ───────────────────
  {
    id: 27,
    situation:
      "全員がフォールドし、あなたの番が回ってきた。",
    hand: "K♠8♣",
    position: "ボタン (BTN)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 0,
    explanation:
      "K8oはBTNオープンレンジに含まれない。K8sであればレイズできるが、オフスートではポストフロップの価値が低く、フォールドが正しい。スーテッドとオフスートの差を意識することが重要。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-open",
  },
  {
    id: 28,
    situation:
      "全員がフォールドし、あなたの番が回ってきた。",
    hand: "Q♥6♥",
    position: "ボタン (BTN)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 2,
    explanation:
      "Q6sはBTNオープンレンジのボーダーラインだが、レンジに含まれている。ボタンからは広いレンジでオープンレイズでき、スーテッドのフラッシュポテンシャルもある。リンプではなくレイズしてイニシアチブを取る。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-open",
  },
  // ── BTN: 対タイト (btn-vs-tight) 2問 ────────────────────────
  {
    id: 29,
    situation:
      "タイトなプレイヤーがMPから$12にレイズした。他の全員がフォールドした。",
    hand: "K♠K♥",
    position: "ボタン (BTN)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "KKはAAに次ぐ2番目に強いハンド。タイトなプレイヤーのレイズに対しても、3-Betが必須。コールしてしまうとブラインドの参加を許し、マルチウェイになるリスクがある。ヘッズアップに持ち込んでポットを膨らませるべき。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-vs-tight",
  },
  {
    id: 30,
    situation:
      "タイトなプレイヤーがEPから$10にレイズした。全員がフォールドした。",
    hand: "J♠T♠",
    position: "ボタン (BTN)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 0,
    explanation:
      "JTsは通常なら強いハンドだが、タイトなプレイヤーのレイズに対してはフォールドが推奨される。タイトなプレイヤーのオープンレンジはAA〜JJやAK等のプレミアムハンドが中心であり、JTsではドミネートされやすい。ポジションがあっても、無理にプレイする必要はない。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-vs-tight",
  },
  // ── BTN: 対ルース (btn-vs-loose) 2問 ────────────────────────
  {
    id: 31,
    situation:
      "ルーズなプレイヤーがCOから$8にレイズした。全員がフォールドした。",
    hand: "A♥5♥",
    position: "ボタン (BTN)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "A5sはルーズなレイザーに対する3-Betレンジ（BTN_L_RR）に含まれる。Aのブロッカー効果があり、相手のAKやAQを持つ確率を下げる。スーテッドでナッツフラッシュの可能性もあるため、コールよりリレイズが正しい。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-vs-loose",
  },
  {
    id: 32,
    situation:
      "ルーズなプレイヤーがHJから$10にレイズした。全員がフォールドした。",
    hand: "7♠6♠",
    position: "ボタン (BTN)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 1,
    explanation:
      "76sはルーズなレイザーに対するフラットコールレンジ（BTN_L_FLAT）に含まれる。ストレートやフラッシュのポテンシャルがあり、ポジションを活かしてポストフロップでプレイできる。3-Betするにはハンドの強さが足りないが、フォールドするには十分な価値がある。",
    rangePositionId: "btn",
    rangeScenarioId: "btn-vs-loose",
  },
  // ── Blinds: リンパー対応 (blinds-limp) 3問 ──────────────────
  {
    id: 33,
    situation:
      "4人がリンプし、あなた（SB）の番だ。",
    hand: "A♠J♠",
    position: "スモールブラインド (SB)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 2,
    explanation:
      "AJsはリンプレイズレンジに含まれるプレミアムハンド。複数リンパーに対してレイズすることで、デッドマネーを獲りにいける。SBからのスクイーズは多くのリンパーをフォールドさせ、ポットをコントロールできる。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-limp",
  },
  {
    id: 34,
    situation:
      "5人がリンプし、SBのあなたの番が来た。",
    hand: "8♥7♥",
    position: "スモールブラインド (SB)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 1,
    explanation:
      "87sはスーテッドコネクターでポストフロップのポテンシャルがあるが、リンプレイズレンジ（99+、ATs+、KJs+、AQo+）には含まれない。マルチウェイポットでインプライドオッズが期待できるため、コール（リンプ）で安く参加するのが正しい。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-limp",
  },
  {
    id: 35,
    situation:
      "3人のプレイヤーがリンプした。SBのあなたの番だ。",
    hand: "T♣4♥",
    position: "スモールブラインド (SB)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 0,
    explanation:
      "T4oはオフスートでコネクティビティもなく、非常に弱いハンド。レイズレンジに入らないのはもちろん、コールしてもポストフロップで利益的にプレイするのは難しい。SBという最悪のポジションではフォールドが正解。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-limp",
  },
  // ── Blinds: 対タイト (blinds-vs-tight) 3問 ────────────────
  {
    id: 36,
    situation:
      "普段はリンプばかりのタイトなプレイヤーが$15にレイズした。あなたはBBにいる。",
    hand: "A♠5♠",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "A5sは対タイトのリレイズレンジに含まれる。一見意外だが、スーテッドエースはブロッカー効果（相手のAAの組み合わせを減らす）があり、フォールドエクイティも期待できる。レンジバランスを保つためのブラフ3-Betとして最適なハンド。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-vs-tight",
  },
  {
    id: 37,
    situation:
      "タイトなプレイヤーが$12にレイズした。全員フォールドし、BBのあなたの番だ。",
    hand: "7♦6♦",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 1,
    explanation:
      "76sはフラットコールレンジに含まれる。タイトなレイザーに対して3-Betするには弱すぎるが、スーテッドコネクターとしてストレートやフラッシュのインプライドオッズが高い。BBからのコールでポットオッズも良好。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-vs-tight",
  },
  {
    id: 38,
    situation:
      "タイトなプレイヤーが$15にレイズした。BBのあなたにアクションが回った。",
    hand: "Q♥8♣",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 0,
    explanation:
      "Q8oはリレイズレンジにもフラットコールレンジにも含まれない。タイトなプレイヤーのレンジにはAQ、KQ、QQなどが含まれており、Qが当たってもキッカー負けのリスクが高い。オフスートでフラッシュドローの可能性もなく、フォールドが正解。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-vs-tight",
  },
  // ── Blinds: 対ルースEP (blinds-vs-loose) 3問 ──────────────
  {
    id: 39,
    situation:
      "ルースなプレイヤーがEPから$10にレイズした。全員フォールドし、BBのあなたの番だ。",
    hand: "A♦3♦",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "A3sは対ルースのリレイズレンジに含まれる。相手のレンジが広いため、スーテッドエースでの3-Betはブラフとしてもバリューとしても機能する。Aのブロッカー効果で相手のプレミアムハンドの組み合わせを減らし、フォールドエクイティを高められる。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-vs-loose",
  },
  {
    id: 40,
    situation:
      "ルースなプレイヤーがEPから$8にレイズした。BBのあなたにアクションが回った。",
    hand: "K♠J♠",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 1,
    explanation:
      "KJsはフラットコールレンジに含まれる。強いハンドだが、対ルースのリレイズレンジ（AA〜QQ、AKs、A5s〜A2s、T9s、87s、AKo）には含まれていない。コールしてフロップを見て、トップペアやフラッシュドローでバリューを得る戦略が最適。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-vs-loose",
  },
  {
    id: 41,
    situation:
      "ルースなプレイヤーがEPから$12にレイズした。BBのあなたの番だ。",
    hand: "J♥5♣",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 0,
    explanation:
      "J5oはリレイズレンジにもフラットコールレンジにも含まれない。オフスートで連続性もなく、ポストフロップでのプレイアビリティが非常に低い。ルースな相手でもこのハンドで参加する期待値はマイナス。フォールドが正しい。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-vs-loose",
  },
  // ── Blinds: スティールレイズ対応 (blinds-steal) 4問 ────────
  {
    id: 42,
    situation:
      "BTNのプレイヤーがスティールレイズで$10にレイズした。SBがフォールドし、BBのあなたの番だ。",
    hand: "2♠2♥",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "22は意外にもスティール対応の3-Betレンジに含まれている。BTNのスティールレンジは広いため、小さいペアでも3-Betでフォールドエクイティを期待できる。コールしてセットマイニングするよりも、アグレッシブに攻めてポットを獲りにいくのが推奨される。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-steal",
  },
  {
    id: 43,
    situation:
      "COからスティールレイズが入った。SBはフォールド。BBのあなたの番だ。",
    hand: "A♦2♦",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 2,
    explanation:
      "A2sはスティール対応の3-Betレンジに含まれる。スティールレンジに対してはA2s〜A9sの全てのスーテッドエースで3-Betできる。Aのブロッカー効果があり、コールされてもバックドアフラッシュやホイールストレートの可能性がある。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-steal",
  },
  {
    id: 44,
    situation:
      "BTNがスティールレイズで$12にレイズした。SBはフォールドし、BBのあなたにアクションが回った。",
    hand: "8♠8♥",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 1,
    explanation:
      "88はスティール対応の3-Betレンジ（99+と44-22）には含まれていない。しかし十分な強さがあり、フォールドするには惜しい。コールしてポストフロップでセットやオーバーペアとしてプレイするのが正しい。55〜88は3-Betレンジの隙間にあるコールハンド。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-steal",
  },
  {
    id: 45,
    situation:
      "BTNがスティールレイズで$10にレイズした。SBはフォールドし、BBのあなたの番だ。",
    hand: "9♣3♥",
    position: "ビッグブラインド (BB)",
    options: ["フォールド", "コール", "リレイズ (3-Bet)"],
    correctIndex: 0,
    explanation:
      "93oは3-Betレンジにもコールレンジにも含まれない明確に弱いハンド。オフスートで連続性もなく、ポストフロップで利益的にプレイする方法がない。スティールレイズに対しても、このハンドではフォールドが唯一の正しい選択。",
    rangePositionId: "blinds",
    rangeScenarioId: "blinds-steal",
  },
];
