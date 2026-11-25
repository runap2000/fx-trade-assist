FX TRADE ASSIST v2.10.0

差し替え対象：server.js / index.html / sw.js / package.json
Railwayの既存環境変数（VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY / VAPID_SUBJECT / DATA_DIR）は維持してください。

主な変更：売買スコア条件を優勢側5点以上かつ反対側の3倍以上に変更。3時間足（5分・15分・1時間）の方向一致を維持。反対方向への転換警戒または経済指標リスク時は新規候補を見送り。
LINE FX実取引台帳を進行中・勝ち・負けの個別取引方式に変更。勝敗は手動確定。旧形式の fx28_actual_trades は削除せず旧記録として表示し、勝率集計から除外。シグナル勝敗数も表示。
自動発注は行いません。

v2.10.0: 早期検知（買い準備/売り準備）、短期時間足の候補判定緩和、利確・利益保護警告を追加。SignalRティックにより15秒間隔で分析を再評価します。
