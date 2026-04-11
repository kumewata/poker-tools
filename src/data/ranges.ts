export type ActionType = "raise" | "reraise" | "flat" | "fold";

export interface ActionRange {
  action: ActionType;
  hands: string[];
  color: string;
  label: string;
  footer: string;
}

export interface Scenario {
  id: string;
  name: string;
  description?: string;
  ranges: ActionRange[];
  notes?: string[];
}

export interface PositionData {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  badgeColor: string;
  scenarios: Scenario[];
}

const G = "#16a34a"; // Raise (green)
const R = "#e53935"; // Re-raise (red)
const B = "#1565c0"; // Flat call (blue)

// ── Early Position ──────────────────────────────────────────

const EP_RAISE = [
  "AA","KK","QQ","JJ","TT","99","88","77","66","55","44","33","22",
  "AKs","AQs","AJs","ATs","A9s","A8s","A7s","A6s","A5s","A4s","A3s","A2s",
  "KQs","KJs","KTs","QJs","QTs",
  "JTs","T9s","98s","87s","76s",
  "AKo","AQo",
];

const EP_T_RR = ["AA","KK","A5s"];

const EP_T_FLAT = [
  "QQ","JJ","TT","99","88","77","66","55","44","33","22",
  "AKs","AQs","AJs","ATs",
  "KQs","KJs","KTs","QJs","QTs",
  "JTs","T9s","98s","87s","76s",
  "AKo",
];

const EP_L_RR = [
  "AA","KK","QQ",
  "AKs","A5s","A4s","A3s","A2s",
  "T9s","87s",
  "AKo",
];

const EP_L_FLAT = [
  "JJ","TT","99","88","77","66","55","44","33","22",
  "AQs","AJs","ATs","A9s","A8s","A7s","A6s",
  "KQs","KJs","KTs","QJs","QTs",
  "JTs","98s","76s",
  "AQo",
];

// ── Cutoff ──────────────────────────────────────────────────

const CO_OPEN = [
  "AA","KK","QQ","JJ","TT","99","88","77","66","55","44","33","22",
  "AKs","AQs","AJs","ATs","A9s","A8s","A7s","A6s","A5s","A4s","A3s","A2s",
  "KQs","KJs","KTs","K9s","K8s","K7s",
  "QJs","QTs","Q9s",
  "JTs","T9s","98s","87s","76s","65s","54s","43s",
  "J9s","T8s","97s","86s","75s","64s","53s",
  "AKo","AQo","AJo","ATo",
  "KQo","KJo",
];

const CO_L_RR = [
  "AA","KK","QQ","JJ",
  "AKs",
  "A7s",
  "A5s","A4s","A3s","A2s",
  "T9s","87s","54s",
  "AKo",
];

const CO_L_FLAT = [
  "TT","99","88","77","66","55","44","33","22",
  "AQs","AJs","ATs","A9s","A8s",
  "A6s",
  "KQs","KJs","KTs","K9s",
  "QJs","QTs","Q9s",
  "JTs","98s",
  "76s","65s",
  "J9s","T8s","97s","86s",
  "64s","53s",
  "J8s","T7s",
  "AQo","AJo",
  "KQo","KJo",
];

// ── Button ──────────────────────────────────────────────────

const BTN_OPEN = [
  "AA","KK","QQ","JJ","TT","99","88","77","66","55","44","33","22",
  "AKs","AQs","AJs","ATs","A9s","A8s","A7s","A6s","A5s","A4s","A3s","A2s",
  "KQs","KJs","KTs","K9s","K8s","K7s","K6s","K5s","K4s","K3s","K2s",
  "QJs","QTs","Q9s","Q8s","Q7s","Q6s","Q5s",
  "JTs","J9s","J8s","J7s",
  "T9s","98s","87s","76s","65s","54s","43s",
  "T8s","97s","86s","75s","64s","53s",
  "T7s","96s",
  "AKo","AQo","AJo","ATo","A9o","A8o","A7o",
  "KQo","KJo","KTo","K9o",
  "QJo","QTo",
  "JTo",
];

const BTN_L_RR = [
  "AA","KK","QQ","JJ","TT","99",
  "AKs","AQs","AJs","ATs",
  "A5s","A4s","A3s","A2s",
  "KQs","KJs",
  "QJs","JTs","97s","75s",
  "AKo","AQo",
];

const BTN_L_FLAT = [
  "88","77","66","55","44","33","22",
  "A9s","A8s","A7s","A6s",
  "KTs","K9s",
  "QTs","Q9s",
  "T9s","98s","87s","76s","65s","54s","43s",
  "J9s","T8s",
  "86s",
  "64s","53s",
  "J8s","T7s",
  "AJo","ATo",
  "KQo","KJo",
];

// ── Blinds (SB / BB) ───────────────────────────────────────

const BLINDS_LIMP_RAISE = [
  "AA","KK","QQ","JJ","TT","99",
  "AKs","AQs","AJs","ATs",
  "KQs","KJs",
  "AKo","AQo",
];

const BLINDS_T_RR = ["AA","KK","A5s"];

const BLINDS_T_FLAT = [
  "QQ","JJ","TT","99","88","77","66","55","44","33","22",
  "AKs","AQs","AJs","ATs",
  "KQs","KJs","KTs",
  "QJs","QTs",
  "JTs","T9s","98s","87s","76s",
  "AKo",
];

const BLINDS_L_RR = [
  "AA","KK","QQ",
  "AKs","A5s","A4s","A3s","A2s",
  "T9s","87s",
  "AKo",
];

const BLINDS_L_FLAT = [
  "JJ","TT","99","88","77","66","55","44","33","22",
  "AQs","AJs","ATs","A9s","A8s","A7s","A6s",
  "KQs","KJs","KTs",
  "QJs","QTs",
  "JTs","98s","76s",
  "AQo",
];

const BLINDS_STEAL_RR = [
  "AA","KK","QQ","JJ","TT","99",
  "44","33","22",
  "AKs","AQs","AJs","ATs","A9s","A8s","A7s","A6s","A5s","A4s","A3s","A2s",
  "KQs","KJs",
  "K7s","K6s","K5s",
  "Q9s",
  "98s","87s","76s","65s","54s",
  "J9s","T8s","97s","86s",
  "AKo","AQo","AJo",
  "KQo",
];

// ── Position definitions ────────────────────────────────────

export const positions: PositionData[] = [
  {
    id: "ep",
    name: "アーリーポジション",
    shortName: "EP",
    badge: "最もタイト — 堅実なハンドのみ",
    badgeColor: "#37474f",
    scenarios: [
      {
        id: "ep-open",
        name: "誰もレイズなし",
        description: "オープンレイズ",
        ranges: [
          { action: "raise", hands: EP_RAISE, color: G, label: "レイズ (Raise)", footer: "レイズ推奨レンジ" },
        ],
      },
      {
        id: "ep-vs-tight",
        name: "対タイト",
        description: "強ハンドでレイズ（普段はリンプ）",
        ranges: [
          { action: "reraise", hands: EP_T_RR, color: R, label: "リレイズ (3-Bet)", footer: "AA~KK, A5s" },
          { action: "flat", hands: EP_T_FLAT, color: B, label: "フラットコール", footer: "QQ~22, ATs+, KTs+, JTs~76s, AKo" },
        ],
      },
      {
        id: "ep-vs-loose",
        name: "対ルース",
        description: "または絶対にリンプしない",
        ranges: [
          { action: "reraise", hands: EP_L_RR, color: R, label: "リレイズ (3-Bet)", footer: "AA~QQ, AKs, A5s~A2s, AKo" },
          { action: "flat", hands: EP_L_FLAT, color: B, label: "フラットコール", footer: "JJ~22, AQs~A6s, KTs+, QTs+, AQo" },
        ],
      },
    ],
  },
  {
    id: "co",
    name: "カットオフ",
    shortName: "CO",
    badge: "第2良ポジション — 約22%オープン",
    badgeColor: "#00838f",
    scenarios: [
      {
        id: "co-open",
        name: "誰もレイズなし",
        description: "オープンレイズ",
        ranges: [
          { action: "raise", hands: CO_OPEN, color: G, label: "レイズ (Raise)", footer: "オープンレイズ推奨レンジ (22%)" },
        ],
      },
      {
        id: "co-vs-tight",
        name: "対タイト",
        description: "強ハンドでレイズ（普段はリンプ）",
        ranges: [],
        notes: [
          "フォールド推奨",
          "アーリーポジションと同様の対応",
          "JJや54s、A7sのようなブラフハンドでの3-betも可。レンジのバランスを保つため。",
        ],
      },
      {
        id: "co-vs-loose",
        name: "対ルース",
        description: "全ハンドレイズ or ルースなレイズ",
        ranges: [
          { action: "reraise", hands: CO_L_RR, color: R, label: "リレイズ (3-Bet)", footer: "リレイズ推奨レンジ" },
          { action: "flat", hands: CO_L_FLAT, color: B, label: "フラットコール", footer: "フラットコール推奨レンジ" },
        ],
      },
    ],
  },
  {
    id: "btn",
    name: "ボタン",
    shortName: "BTN",
    badge: "最良ポジション — 33%オープン",
    badgeColor: "#e65100",
    scenarios: [
      {
        id: "btn-open",
        name: "誰もレイズなし",
        description: "オープンレイズ",
        ranges: [
          { action: "raise", hands: BTN_OPEN, color: G, label: "レイズ (Raise)", footer: "オープンレイズ推奨レンジ (33%)" },
        ],
      },
      {
        id: "btn-vs-tight",
        name: "対タイト",
        description: "プリフロップレイズは強さのシグナル",
        ranges: [],
        notes: [
          "フォールド推奨",
          "「強いものを避ける」タイトなレイズは強さを示す",
        ],
      },
      {
        id: "btn-vs-loose",
        name: "対ルース",
        description: "または絶対にリンプしない",
        ranges: [
          { action: "reraise", hands: BTN_L_RR, color: R, label: "リレイズ (3-Bet)", footer: "リレイズ推奨レンジ" },
          { action: "flat", hands: BTN_L_FLAT, color: B, label: "フラットコール", footer: "フラットコール推奨レンジ" },
        ],
      },
    ],
  },
  {
    id: "blinds",
    name: "ブラインド (SB/BB)",
    shortName: "SB/BB",
    badge: "フロップ以降は最悪のポジション",
    badgeColor: "#37474f",
    scenarios: [
      {
        id: "blinds-limp",
        name: "全員リンプ",
        description: "複数コーラー想定",
        ranges: [
          { action: "raise", hands: BLINDS_LIMP_RAISE, color: G, label: "レイズ (Raise)", footer: "99+, ATs+, KJs+, AQo+" },
        ],
        notes: [
          "全員フォールド見込みならA5s~A2s、K8s、76sなど追加可",
        ],
      },
      {
        id: "blinds-vs-tight",
        name: "対タイト",
        description: "強ハンドでレイズ（普段はリンプ）",
        ranges: [
          { action: "reraise", hands: BLINDS_T_RR, color: R, label: "リレイズ (3-Bet)", footer: "AA~KK, A5s" },
          { action: "flat", hands: BLINDS_T_FLAT, color: B, label: "フラットコール", footer: "QQ~22, ATs+, KTs+, JTs~76s, AKo" },
        ],
      },
      {
        id: "blinds-vs-loose",
        name: "対ルース (EP)",
        description: "EPからのルースなレイズ",
        ranges: [
          { action: "reraise", hands: BLINDS_L_RR, color: R, label: "リレイズ (3-Bet)", footer: "AA~QQ, AKs, A5s~A2s, AKo" },
          { action: "flat", hands: BLINDS_L_FLAT, color: B, label: "フラットコール", footer: "JJ~22, AQs~A6s, KTs+, QTs+, AQo" },
        ],
      },
      {
        id: "blinds-steal",
        name: "スチールレイズ",
        description: "BTN/COからのポジション目的レイズ",
        ranges: [
          { action: "reraise", hands: BLINDS_STEAL_RR, color: R, label: "リレイズ (3-Bet) — 約16%", footer: "99+, 44-22, A2s+, KJs+, K7s-K5s, Q9s, 98s-54s, J9s-86s, AJo+, KQo" },
        ],
        notes: [
          "ハンド強さと無関係な広いレンジ → 積極的に3-betで攻める",
          "リスト上の残りのハンドはコール。境界線上のハンド（例：ATo、KJo、K8s~K7s、43s、75s~53s）はフォールドしても構わない。",
        ],
      },
    ],
  },
];

// ── Helpers ─────────────────────────────────────────────────

export const RANKS = ["A","K","Q","J","T","9","8","7","6","5","4","3","2"] as const;

export function getHandName(r: number, c: number): string {
  if (r === c) return RANKS[r] + RANKS[r];
  if (r < c) return RANKS[r] + RANKS[c] + "s";
  return RANKS[c] + RANKS[r] + "o";
}

export const LEGEND = [
  { color: G, label: "Raise (レイズ)" },
  { color: R, label: "Re-raise (リレイズ)" },
  { color: B, label: "Flat Call (フラット)" },
  { color: "#94a3b8", label: "対象外 / フォールド" },
] as const;
