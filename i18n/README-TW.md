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

 | 繁體中文 |  |  | 

<h3>可視化建置 AI/LLM 流程</h3>
<a href="https://github.com/flowise-ai/flowise">
<img width="100%" src="https://github.com/flowise-ai/flowise/blob/main/images/flowise_agentflow.gif?raw=true"></a>

## ⚡ 快速開始

下載並安裝  >= 18.15.0

1. 安裝 Flowise
    ```bash
    npm install -g flowise
    ```
2. 啟動 Flowise

    ```bash
    npx flowise start
    ```

3. 打開 

## 🐳 Docker

### Docker Compose

1. 複製 Flowise 專案
2. 進入專案根目錄的 `docker` 資料夾
3. 複製 `.env.example` 文件，貼到相同位置，並重新命名為 `.env` 文件
4. `docker compose up -d`
5. 打開 
6. 您可以透過 `docker compose stop` 停止容器

### Docker 映像

1. 本地建置映像：
    ```bash
    docker build --no-cache -t flowise .
    ```
2. 運行映像：

    ```bash
    docker run -d --name flowise -p 3000:3000 flowise
    ```

3. 停止映像：
    ```bash
    docker stop flowise
    ```

## 👨‍💻 開發者

Flowise 在單個 mono 儲存庫中有 3 個不同的模組。

-   `server`: 提供 API 邏輯的 Node 後端
-   `ui`: React 前端
-   `components`: 第三方節點集成
-   `api-documentation`: 從 express 自動生成的 swagger-ui API 文檔

### 先決條件

-   安裝 
    ```bash
    npm i -g pnpm
    ```

### 設置

1.  複製儲存庫

    ```bash
    git clone https://github.com/flowise-ai/flowise.git
    ```

2.  進入儲存庫文件夾

    ```bash
    cd Flowise
    ```

3.  安裝所有模組的所有依賴項：

    ```bash
    pnpm install
    ```

4.  建置所有程式碼：

    ```bash
    pnpm build
    ```

    <details>
    <summary>Exit code 134（JavaScript heap out of memory）</summary>  
      如果在運行上述 `build` 腳本時遇到此錯誤，請嘗試增加 Node.js 中的 Heap 記憶體大小並重新運行腳本：

        export NODE_OPTIONS="--max-old-space-size=4096"
        pnpm build

    </details>

5.  啟動應用：

    ```bash
    pnpm start
    ```

    您現在可以開啟 

6.  對於開發建置：

    -   在 `packages/ui` 中創建 `.env` 文件並指定 `VITE_PORT`（參考 `.env.example`）
    -   在 `packages/server` 中創建 `.env` 文件並指定 `PORT`（參考 `.env.example`）
    -   運行

        ```bash
        pnpm dev
        ```

    任何程式碼更改都會自動重新加載應用程式 

## 🌱 環境變數

Fl

## 📖 文檔



## 🌐 自行架設

在您現有的基礎設施中部署 Fl

-   
-   
-   
-   
-   
-   <details>
      <summary>其他</summary>

    -   

        ](http

    -   

        ](http

    -   

        <a href="https://huggingface.co/spaces/flowise-ai/flowise"><img src="https://huggingface.co/datasets/huggingface/badges/raw/main/open-in-hf-spaces-sm.svg" alt="HuggingFace Spaces"></a>

    -   

        ](http

    -   

        ](http

    -   

        ](http

      </details>

## ☁️ Flowise 雲端平台



## 🙋 支持

隨時在  中提出任何問題、提出問題和請求新功能

## 🙌 貢獻

感謝這些出色的貢獻者

<a href="https://github.com/flowise-ai/flowise/graphs/contributors">
<img src="https://contrib.rocks/image?repo=flowise-ai/flowise" />
</a>

請參閱 。如果您有任何問題或問題，請透過  與我們聯繫。
](http

## 📄 許可證

此儲存庫中的原始碼根據  授權使用。
