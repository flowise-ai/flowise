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

 |  | 简体中文 |  | 

<h3>可视化构建 AI/LLM 流程</h3>
<a href="https://github.com/flowise-ai/flowise">
<img width="100%" src="https://github.com/flowise-ai/flowise/blob/main/images/flowise_agentflow.gif?raw=true"></a>

## ⚡ 快速入门

下载并安装  >= 18.15.0

1. 安装 Flowise
    ```bash
    npm install -g flowise
    ```
2. 启动 Flowise

    ```bash
    npx flowise start
    ```

3. 打开 

## 🐳 Docker

### Docker Compose

1. 进入项目根目录下的 `docker` 文件夹
2. 创建 `.env` 文件并指定 `PORT`（参考 `.env.example`）
3. 运行 `docker compose up -d`
4. 打开 
5. 可以通过 `docker compose stop` 停止容器

### Docker 镜像

1. 本地构建镜像：
    ```bash
    docker build --no-cache -t flowise .
    ```
2. 运行镜像：

    ```bash
    docker run -d --name flowise -p 3000:3000 flowise
    ```

3. 停止镜像：
    ```bash
    docker stop flowise
    ```

## 👨‍💻 开发者

Flowise 在一个单一的代码库中有 3 个不同的模块。

-   `server`：用于提供 API 逻辑的 Node 后端
-   `ui`：React 前端
-   `components`：第三方节点集成

### 先决条件

-   安装 
    ```bash
    npm i -g pnpm
    ```

### 设置

1. 克隆仓库

    ```bash
    git clone https://github.com/flowise-ai/flowise.git
    ```

2. 进入仓库文件夹

    ```bash
    cd Flowise
    ```

3. 安装所有模块的依赖：

    ```bash
    pnpm install
    ```

4. 构建所有代码：

    ```bash
    pnpm build
    ```

5. 启动应用：

    ```bash
    pnpm start
    ```

    现在可以在  访问应用

6. 用于开发构建：

    - 在 `packages/ui` 中创建 `.env` 文件并指定 `VITE_PORT`（参考 `.env.example`）
    - 在 `packages/server` 中创建 `.env` 文件并指定 `PORT`（参考 `.env.example`）
    - 运行

        ```bash
        pnpm dev
        ```

    任何代码更改都会自动重新加载应用程序，访问 

## 🌱 环境变量

Fl

## 📖 文档



## 🌐 自托管

在您现有的基础设施中部署自托管的 Fl

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

## ☁️ 云托管



## 🙋 支持

在中随时提问、提出问题和请求新功能

## 🙌 贡献

感谢这些了不起的贡献者

<a href="https://github.com/flowise-ai/flowise/graphs/contributors">
<img src="https://contrib.rocks/image?repo=flowise-ai/flowise" />
</a>

参见。如果您有任何问题或问题，请在上与我们联系。

## 📄 许可证

此代码库中的源代码在下提供。
