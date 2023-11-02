# react_boilerplate

React を用いた SPA 開発を迅速に開始するためのテンプレートです。

## Installation

### Node.js のインストール

Node.js および npm のバージョン管理ツールとして Volta を使用しています。公式ドキュメントを確認の上インストールしてください。

[Volta documents](https://docs.volta.sh/guide/)

- Node.js v18.18.2 (2023/10/15 時点 LTS)
- npm (上記 Node.js 付属バージョン)

### 開発サーバー起動

```bash
npm install # package install
npm run dev # start dev server
```

### 本番ビルド、サーバー起動

以下コマンドで静的アセットを出力。また、production モードでアプリケーション起動。

```bash
npm run build # build
npm run start # start production server
```

## Custom theme

Chakra UI のカスタムテーマ機能を使用し、独自の設定を行なっています。

対象のソースコードは`/src/theme`を参照してください。

[Chakra UI](https://chakra-ui.com/)

### colors

アプリケーション全体における color を管理します。

[Customizing theme tokens](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-theme-tokens)

### components

グローバルな components のスタイルを管理します。

[Customizing global styles](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-single-components)

### styles

グローバルな style を管理します。

[Customizing global styles](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-global-styles)

### storybook

StoryBook 上にて Chakra UI の component を確認することができます。

[Chakra UI + Storybook](https://chakra-ui.com/getting-started/with-storybook)

## Features ディレクトリ

このテンプレートでは`src/features` で機能(feature)ごとにディレクトリを分割する構成を取っています。

必要に応じて構成を変えてください。

## Plop

Plop.js で CLI からのファイル群作成が可能です。

設定詳細は以下のファイルを確認してください。

- `plop-templates` テンプレートファイル
- `plopfile.js` 設定ファイル

[Plop.js](https://plopjs.com/)
