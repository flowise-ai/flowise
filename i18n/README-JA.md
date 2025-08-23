<!-- markdownlint-disable MD030 -->

<p align="center">
<img src="https://github.com/flowise-ai/flowise/blob/main/images/flowise_white.svg#gh-light-mode-only">
<img src="https://github.com/flowise-ai/flowise/blob/main/images/flowise_dark.svg#gh-dark-mode-only">
</p>

](http
]()
](http
](http
](http

 |  |  | 日本語 | 

<h3>AIエージェントをビジュアルに構築</h3>
<a href="https://github.com/flowise-ai/flowise">
<img width="100%" src="https://github.com/flowise-ai/flowise/blob/main/images/flowise_agentflow.gif?raw=true"></a>

## ⚡ クイックスタート

 >= 18.15.0 をダウンロードしてインストール

1. Flowise のインストール
    ```bash
    npm install -g flowise
    ```
2. Flowise の実行

    ```bash
    npx flowise start
    ```

3.  を開く

## 🐳 Docker

### Docker Compose

1. プロジェクトのルートにある `docker` フォルダに移動する
2. `.env.example` ファイルをコピーして同じ場所に貼り付け、名前を `.env` に変更する
3. `docker compose up -d`
4.  を開く
5. コンテナを停止するには、`docker compose stop` を使用します

### Docker Image

1. ローカルにイメージを構築する:
    ```bash
    docker build --no-cache -t flowise .
    ```
2. image を実行:

    ```bash
    docker run -d --name flowise -p 3000:3000 flowise
    ```

3. image を停止:
    ```bash
    docker stop flowise
    ```

## 👨‍💻 開発者向け

Flowise には、3 つの異なるモジュールが 1 つの mono リポジトリにあります。

-   `server`: API ロジックを提供する Node バックエンド
-   `ui`: React フロントエンド
-   `components`: サードパーティノードとの統合

### 必須条件

-    をインストール
    ```bash
    npm i -g pnpm
    ```

### セットアップ

1. リポジトリをクローン

    ```bash
    git clone https://github.com/flowise-ai/flowise.git
    ```

2. リポジトリフォルダに移動

    ```bash
    cd Flowise
    ```

3. すべてのモジュールの依存関係をインストール:

    ```bash
    pnpm install
    ```

4. すべてのコードをビルド:

    ```bash
    pnpm build
    ```

5. アプリを起動:

    ```bash
    pnpm start
    ```

     でアプリにアクセスできるようになりました

6. 開発用ビルド:

    - `.env` ファイルを作成し、`packages/ui` に `VITE_PORT` を指定する（`.env.example` を参照）
    - `.env` ファイルを作成し、`packages/server` に `PORT` を指定する（`.env.example` を参照）
    - 実行

        ```bash
        pnpm dev
        ```

    コードの変更は  に自動的にアプリをリロードします

## 🌱 環境変数

Flを読む

## 📖 ドキュメント



## 🌐 セルフホスト

お客様の既存インフラに Flをサポートします

-   
-   
-   
-   
-   <details>
      <summary>その他</summary>

    -   

        ](http

    -   

        ](http

    -   

        <a href="https://huggingface.co/spaces/flowise-ai/flowise"><img src="https://huggingface.co/datasets/huggingface/badges/raw/main/open-in-hf-spaces-sm.svg" alt="Hugging Face Spaces"></a>

    -   

        ](http

    -   

        ](http

    -   

        ](http

      </details>

## ☁️ クラウドホスト



## 🙋 サポート

ご質問、問題提起、新機能のご要望は、までお気軽にどうぞ

## 🙌 コントリビュート

これらの素晴らしい貢献者に感謝します

<a href="https://github.com/flowise-ai/flowise/graphs/contributors">
<img src="https://contrib.rocks/image?repo=flowise-ai/flowise" />
</a>

を参照してください。質問や問題があれば、 までご連絡ください。
](http

## 📄 ライセンス

このリポジトリのソースコードは、の下で利用可能です。
