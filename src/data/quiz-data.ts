export interface QuizQuestion {
  id: number;
  situation: string;
  hand: string;
  position: string;
  options: string[];
  correctIndex: number;
  explanation: string;
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
  },
  {
    id: 5,
    situation:
      "5人がリンプし、あなたはボタンの次の位置（SB）にいる。",
    hand: "K\u26609\u2663",
    position: "スモールブラインド (SB)",
    options: ["フォールド", "コール（リンプ）", "レイズ"],
    correctIndex: 2,
    explanation:
      "K9sはスーテッドでそこそこの強さがあり、5人のリンパーに対してはレイズが正しい。SBからのレイズはスクイーズとして機能し、多くのリンパーをフォールドさせることができる。リンプでの参加はポジション最悪のSBで6人ポットを作ることになり、不利。",
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
  },
];
