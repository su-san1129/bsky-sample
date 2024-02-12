## 概要
AT Protocolの学習
Deno を用いてatproto API からBlueSkyのデータを取得、投稿するサンプルを作成。

## 使い方
1. `.env`ファイルを作成
```env
BSKY_IDENTIFIER = <Your Identifier>
BSKY_PASSWORD = <Your Password>
```

2. 実行
```
$ deno run -A src/index.ts
```
