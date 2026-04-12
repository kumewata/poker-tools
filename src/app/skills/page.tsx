"use client";

import Link from "next/link";

/* ── tiny helpers ── */

function Section({
  num,
  title,
  accent = "bg-slate-800",
  children,
}: {
  num: number;
  title: string;
  accent?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <h2 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
        <span
          className={`${accent} text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]`}
        >
          {num}
        </span>
        {title}
      </h2>
      <div className="bg-white rounded-xl shadow-md p-4 text-sm text-slate-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-slate-500 mt-3 border-l-2 border-slate-300 pl-2">
      {children}
    </p>
  );
}

/* ── page ── */

export default function SkillsPage() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 to-slate-100 px-3 py-4 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-slate-800 font-bold"
        >
          &larr; レンジ表
        </Link>
        <h1 className="text-base font-extrabold text-slate-800">
          ポストフロップスキル
        </h1>
        <div className="w-16" />
      </div>

      {/* Intro */}
      <div className="max-w-lg mx-auto mb-4">
        <div className="bg-slate-800 rounded-xl px-4 py-3 text-center">
          <div className="text-white font-extrabold text-sm">
            スキル3: ハンドの持つ価値を評価する
          </div>
          <p className="text-white/70 text-xs mt-1">
            フロップ以降で利益を最大化するための判断基準
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
        {/* ── 1. 基本 ── */}
        <Section num={1} title="ハンドの価値評価の基本">
          <p className="mb-3">
            ポストフロップでの利益は「相手をフォールドさせる」だけでなく、
            <strong>自分より弱いハンドにコールしてもらう</strong>
            ことで生まれる。これがバリューベットの本質。
          </p>
          <div className="bg-slate-50 rounded-lg p-3 text-xs space-y-2 mb-3">
            <div>
              <span className="font-bold text-slate-800">例:</span>{" "}
              ポットが$10。相手が$10をコール → 自分のハンドが強ければ+$10の利益
            </div>
            <div>
              <span className="text-red-500 font-bold">よくある間違い:</span>{" "}
              フォールドさせることばかり考え、バリューを逃す
            </div>
          </div>
          <Tip>
            「レイズされたらどうする？」より
            「コールしてもらえるか？」を先に考える
          </Tip>
        </Section>

        {/* ── 2. コールするハンド ── */}
        <Section num={2} title="どういった弱いハンドがコールしてくれるのか">
          <p className="mb-3">相手がコールするハンドは主に4タイプ:</p>
          <div className="space-y-2 mb-3">
            {[
              {
                type: "弱いペア",
                ex: "ボトムペア、ミドルペア、小さいポケットペア",
                why: "負けているかもだが降りられない",
              },
              {
                type: "ドローハンド",
                ex: "フラッシュドロー、ストレートドロー",
                why: "完成すれば逆転できる",
              },
              {
                type: "Aハイ / Kハイ",
                ex: "A♥5♣ など",
                why: "ペアがないが「当たるかも」で降りられない",
              },
              {
                type: "フロート",
                ex: "任意のハンド",
                why: "後のストリートでブラフする意図",
              },
            ].map((item) => (
              <div
                key={item.type}
                className="bg-slate-50 rounded-lg px-3 py-2 text-xs"
              >
                <span className="font-bold text-slate-800">{item.type}</span>
                <span className="text-slate-400 mx-1">|</span>
                <span>{item.ex}</span>
                <div className="text-slate-500 mt-0.5">{item.why}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 3. バリューストリート ── */}
        <Section num={3} title="バリューを取れるストリート" accent="bg-green-600">
          <p className="mb-3">
            ハンドの強さに応じて「何回ベットして利益を得られるか」を判断する:
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-2 py-1.5 text-left font-bold rounded-tl-lg">
                    回数
                  </th>
                  <th className="px-2 py-1.5 text-left font-bold">強さ</th>
                  <th className="px-2 py-1.5 text-left font-bold rounded-tr-lg">
                    例
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    n: "3ストリート",
                    str: "非常に強い",
                    ex: "セット、ツーペア、オーバーペア",
                  },
                  {
                    n: "2ストリート",
                    str: "強い",
                    ex: "トップペア強キッカー（AK on Kボード）",
                  },
                  {
                    n: "1ストリート",
                    str: "そこそこ",
                    ex: "トップペア弱キッカー、セカンドペア",
                  },
                  {
                    n: "0（チェック）",
                    str: "マージナル",
                    ex: "弱いペア → 安くショーダウン",
                  },
                ].map((row) => (
                  <tr key={row.n}>
                    <td className="px-2 py-1.5 font-bold text-slate-800 whitespace-nowrap">
                      {row.n}
                    </td>
                    <td className="px-2 py-1.5">{row.str}</td>
                    <td className="px-2 py-1.5 text-slate-500">{row.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Tip>
            ストリートが進むほど相手のレンジは強くなる（弱いハンドはフォールド済み）。
            最初に「何ストリート分のバリューがあるか」を判定する
          </Tip>
        </Section>

        {/* ── 4. どのストリートで ── */}
        <Section num={4} title="どのストリートでベットすべきか" accent="bg-blue-600">
          <p className="mb-3">3つの要因で判断する:</p>
          <div className="space-y-2 mb-3">
            {[
              {
                factor: "ドローの存在",
                desc: "ボードにドローが多い → 早いストリートでベット。フリーカードを与えない",
              },
              {
                factor: "ボードの変化",
                desc: "ターン・リバーでスケアカードが落ちると相手がフォールドしやすい → 先にベット",
              },
              {
                factor: "ポジション",
                desc: "ポジションがあればチェックバックして後のストリートに回す選択肢がある",
              },
            ].map((item) => (
              <div
                key={item.factor}
                className="bg-blue-50 rounded-lg px-3 py-2 text-xs"
              >
                <span className="font-bold text-blue-800">{item.factor}</span>
                <div className="text-slate-600 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
          <Tip>
            2ストリートバリューの場合、フロップ+ターンのベットが最も一般的
          </Tip>
        </Section>

        {/* ── 5. スロープレイ ── */}
        <Section num={5} title="スロープレイ">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-green-50 rounded-lg p-2.5 text-xs">
              <div className="font-bold text-green-800 mb-1">使うべき場面</div>
              <ul className="space-y-1 text-slate-600">
                <li>モンスターハンド（セット、フルハウス等）</li>
                <li>ドライボード（ドローが少ない）</li>
                <li>相手がアグレッシブ（チェック→相手がベット）</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-2.5 text-xs">
              <div className="font-bold text-red-800 mb-1">
                使うべきでない場面
              </div>
              <ul className="space-y-1 text-slate-600">
                <li>ウェットボード（ドローが多い）</li>
                <li>相手がパッシブ（チェック→チェック返し）</li>
                <li>マルチウェイポット（アウトドローされやすい）</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ── 6. プロテクト ── */}
        <Section num={6} title={'ハンドを「プロテクト」するな'} accent="bg-red-600">
          <p className="mb-3">
            「ドローに引かれたくない」からオーバーベットするのは間違い。
          </p>
          <div className="bg-red-50 rounded-lg p-3 text-xs mb-3 space-y-2">
            <div>
              <span className="text-red-700 font-bold">問題:</span>{" "}
              ドローをフォールドさせると、本来コールしてくれる弱いハンドもフォールドさせてしまう
            </div>
            <div>
              <span className="text-green-700 font-bold">正解:</span>{" "}
              適正サイズでベットすれば、ドローにコールされても長期的には利益（相手のオッズが合わない）
            </div>
          </div>
          <p className="text-xs font-bold text-slate-800 mb-2">2つの原則:</p>
          <div className="space-y-1.5 text-xs">
            <div className="flex items-start gap-2">
              <span className="bg-slate-200 text-slate-600 rounded-full w-4 h-4 flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">
                1
              </span>
              <span>
                ビッグハンドではビッグベットし、リバーで無駄なオールインにならないようにする
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="bg-slate-200 text-slate-600 rounded-full w-4 h-4 flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">
                2
              </span>
              <span>
                ベット額をそろえて、リスキーなカードが落ちても対応しやすくする
              </span>
            </div>
          </div>
        </Section>

        {/* ── 7. ベットサイジング ── */}
        <Section num={7} title="ベットサイジング — 5つのルール" accent="bg-orange-500">
          <div className="space-y-2">
            {[
              {
                rule: "ポットの1/2〜3/4が基準",
                desc: "通常はポットの50%〜75%をベット",
              },
              {
                rule: "3ストリートなら均等に分配",
                desc: "リスキーなカードが落ちても対応できるよう各ストリートで均等にベット",
              },
              {
                rule: "接続されやすいボードでは大きく",
                desc: "相手のアウツが多いボード（フラッシュ+ストレートドロー等）ではサイズを上げる",
              },
              {
                rule: "弱いプレイヤーはどんなサイズでもコール",
                desc: "コールしすぎる相手にはバリューベットを大きくする",
              },
              {
                rule: "ポットが小さいときは控えめに",
                desc: "ポットの成長に合わせてサイズを調整する",
              },
            ].map((item, i) => (
              <div
                key={item.rule}
                className="bg-orange-50 rounded-lg px-3 py-2 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-bold text-slate-800">{item.rule}</span>
                </div>
                <div className="text-slate-600 mt-0.5 ml-6">{item.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 8. マルチウェイ ── */}
        <Section
          num={8}
          title="マルチウェイポットでバリューを得る"
          accent="bg-purple-600"
        >
          <div className="space-y-2 text-xs mb-3">
            {[
              "ルースゲームではバリューベットの機会が増える",
              "複数人がコールする → ベットサイズを大きくしても全員コール",
              "ブラフは減らす（ルースプレイヤーはフォールドしない）",
              "ドロー付きハンドの価値が上がる（インプライドオッズが良い）",
              "相手がコールしすぎるなら、それに合わせてバリューベットを増やす",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5 flex-shrink-0">
                  ▸
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
          <Tip>
            タイトにプレイする必要はないが、ブラフより
            バリューベットで利益を得ることに集中する
          </Tip>
        </Section>

        {/* ── まとめ ── */}
        <section className="w-full">
          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <div className="text-white font-extrabold text-sm mb-2">
              常に自問する
            </div>
            <div className="text-white/80 text-xs leading-relaxed">
              「このハンドで何ストリート分のバリューがあるか？」
              <br />
              この問いがポストフロップの判断の基礎になる
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-2 pb-4 flex-wrap justify-center">
          <Link
            href="/tips"
            className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-all"
          >
            覚え方のコツ
          </Link>
          <Link
            href="/quiz"
            className="px-5 py-2.5 rounded-lg bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 transition-all"
          >
            ハンドクイズへ
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-all"
          >
            レンジ表へ
          </Link>
        </div>
      </div>
    </div>
  );
}
