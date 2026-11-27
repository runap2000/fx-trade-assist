FX TRADE ASSIST v3.1.0

新設計版。新規エントリー指標表示、EMA/ATR価格ゾーン、保有ポジション入力（方向・数量・約定価格・任意SL/TP1/TP2）、登録ポジションの監視判断と利益保護価格候補を追加。

Railwayで既存プロジェクトに差し替える場合は server.js / index.html / sw.js / package.json を更新してください。既存の環境変数（VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY / VAPID_SUBJECT / DATA_DIR）を保持してください。

ポジション登録はサーバーのDATA_DIR/position.jsonに保存されます。自動発注はありません。判断支援ツールであり、リアル市場での戦略検証・利益保証はありません。
