FX TRADE ASSIST v2.6 - 1秒表示更新・バックグラウンド監視版

重要：GitHub Pages単体ではバックグラウンド常時監視はできません。このパッケージは、GitHub Pages（画面）+ Railway等の常時稼働Node.jsサーバー（監視・プッシュ通知）で動作する構成です。サーバーを停止/スリープさせないプランが必要です。

構成
- index.html / config.js / sw.js：スマホ画面、SignalR配信受信、Web Push登録（既存のmanifest.webmanifestとicon.svgはそのまま維持）
- server/server.js：biquote SignalRでUSDJPYティック受信、30秒ごとに5m/15m/1h確定足を分析、シグナル変化時にWeb Push送信
- server/Dockerfile / railway.json：Railwayデプロイ用
- server/subscriptions.json は /data/subscriptions.json に保存。Railwayに /data の永続Volumeを必ずマウントしてください。

セットアップ
1. serverフォルダをGitHubリポジトリの server/ に追加。
2. RailwayでこのGitHubリポジトリを新規プロジェクトとして接続し、Root Directoryを /server に指定してデプロイ。
3. Railwayに /data をマウントするVolumeを追加。
4. RailwayのShellで server ディレクトリに移動し `npm run vapid` を実行。表示されたVAPID_PUBLIC_KEYとVAPID_PRIVATE_KEYをRailway Variablesに登録。
5. Railway Variablesに以下を設定：PORT=8787、DATA_DIR=/data、ALLOWED_ORIGINS=https://runap2000.github.io、APP_URL=https://runap2000.github.io/fx-trade-assist/、VAPID_SUBJECT=mailto:自分のメールアドレス、VAPID_PUBLIC_KEY、VAPID_PRIVATE_KEY。
6. Railwayの公開URLを取得し、config.js の YOUR-RAILWAY-DOMAIN をそのURLに置き換える。
7. index.html、config.js、sw.jsをGitHub Pagesのリポジトリ直下にアップロードしてコミット。manifest.webmanifest と icon.svg は既存のものを維持。
8. Railwayの https://発行URL/health を開き、ok:true と feed:connected を確認。GitHub Pagesを開いて「プッシュ通知を有効にする」を押す。

動作仕様
- USDJPY価格：biquote SignalRのReceiveTick受信ごとに即時反映。市場側からtickが来ない間は価格値は変化しません。
- 経過時間表示：画面上で1秒ごとに更新。
- テクニカル分析：サーバー側で30秒ごとに確定足を取得して計算。
- バックグラウンド：サーバー側で継続監視し、買い/売り候補への変化時にWeb Push通知。
- サーバーの常時稼働、biquote側の配信・API可用性、OS/ブラウザの通知設定に依存します。通知の到達は保証されません。

安全上の注意
これは相場判断補助であり、投資助言・利益保証・自動発注ではありません。必ず取引会社のレートと照合してください。VAPID_PRIVATE_KEYをGitHubにコミットしないでください。必ずRailway Variablesだけに保存してください。
