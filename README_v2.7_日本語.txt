FX TRADE ASSIST v2.7 — 全機能統合版

このZIPはRailway単体で画面と監視サーバーを動かす構成です。既存のv2.6（GitHub Pages画面＋Railway API）と異なり、同一Railwayサービスから画面・WebSocket・SignalR監視・Web Pushを配信します。

【GitHubへ手動アップロード】
1. ZIPを展開します。
2. GitHubの runap2000/fx-trade-assist を開きます。
3. リポジトリ直下にある既存ファイルをバックアップしてから、このZIP内のファイルをリポジトリ直下へアップロードします。
4. index.html / server.js / package.json / generate-vapid.js / manifest.webmanifest / icon.svg / sw.js / Dockerfile / railway.json を配置し、コミットします。
5. RailwayがGitHub連携で自動デプロイする場合は、デプロイ成功を待ちます。

【Railway設定】
- Node.js 22以上。Dockerfileを使用します。
- Variables: PORT=8080、DATA_DIR=/data、VAPID_SUBJECT=mailto:あなたのメールアドレス、VAPID_PUBLIC_KEY、VAPID_PRIVATE_KEY。
- Volumeを追加し、Mount Pathを /data に設定してください（通知登録情報の保存用）。
- VAPIDキーはGitHubにアップロードしないでください。
- キー生成：RailwayのShellで npm run vapid を実行し、表示された2つの値をVariablesに登録して再デプロイします。
- 公開ドメインの /health を開き、ok:true を確認します。feedがconnectedになるまでbiquote SignalR接続を待ちます。

【追加機能】
- 5分・15分・1時間足、EMA20/50、Wilder RSI 7/14/42、ストキャス9,3,3。
- ATR14（15分足）によるエントリー参考値、SL=1.5ATR、TP1=2ATR、TP2=3ATR。
- 複数時間足の方向変化によるトレンド転換検知。
- 買い・売り・転換ごとのWeb Push通知設定。
- シグナル履歴、手動の勝ち/負け/未判定登録、勝率表示、CSV出力。
- 売買注文は行いません。

【重要な制約】
- Web Push通知にはHTTPS、VAPIDキー、ブラウザの通知許可、Railwayサーバーの継続稼働が必要です。通知到達は保証されません。
- シグナル履歴はブラウザ端末内（localStorage）に保存されます。ブラウザデータ消去や端末変更で失われます。CSVで定期保存してください。
- ATR水準は参考値であり、利益を保証しません。必ず取引会社のレートと照合してください。
- APIの市場状態・鮮度チェックにより、休場やデータ遅延時は判定停止します。
