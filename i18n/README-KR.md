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

 |  |  |  | 한국어

<h3>AI 에이전트를 시각적으로 구축하세요</h3>
<a href="https://github.com/flowise-ai/flowise">
<img width="100%" src="https://github.com/flowise-ai/flowise/blob/main/images/flowise_agentflow.gif?raw=true"></a>

## ⚡빠른 시작 가이드

18.15.0 버전 이상의  다운로드 및 설치

1. Flowise 설치
    ```bash
    npm install -g flowise
    ```
2. Flowise 시작하기

    ```bash
    npx flowise start
    ```

3.  URL 열기

## 🐳 도커(를 활용하여 시작하기

### 도커 컴포즈 활용

1. 프로젝트의 최상위( 디렉토리에 있는 `docker` 폴더로 이동하세요.
2. `.env.example` 파일을 복사한 후, 같은 경로에 붙여넣기 한 다음, `.env`로 이름을 변경합니다.
3. `docker compose up -d` 실행
4.  URL 열기
5. `docker compose stop` 명령어를 통해 컨테이너를 종료시킬 수 있습니다.

### 도커 이미지 활용

1. 로컬에서 이미지 빌드하기:
    ```bash
    docker build --no-cache -t flowise .
    ```
2. 이미지 실행하기:

    ```bash
    docker run -d --name flowise -p 3000:3000 flowise
    ```

3. 이미지 종료하기:
    ```bash
    docker stop flowise
    ```

## 👨‍💻 개발자들을 위한 가이드

Flowise는 단일 리포지토리에 3개의 서로 다른 모듈이 있습니다.

-   `server`: API 로직을 제공하는 노드 백엔드
-   `ui`: 리액트 프론트엔드
-   `components`: 서드파티 노드 통합을 위한 컴포넌트

### 사전 설치 요건

-    설치하기
    ```bash
    npm i -g pnpm
    ```

### 설치 및 설정

1. 리포지토리 복제

    ```bash
    git clone https://github.com/flowise-ai/flowise.git
    ```

2. 리포지토리 폴더로 이동

    ```bash
    cd Flowise
    ```

3. 모든 모듈의 종속성 설치:

    ```bash
    pnpm install
    ```

4. 모든 코드 빌드하기:

    ```bash
    pnpm build
    ```

5. 애플리케이션 시작:

    ```bash
    pnpm start
    ```

    이제 에서 애플리케이션에 접속할 수 있습니다.

6. 개발 환경에서 빌드할 경우:

    - `pa를 지정합니다.
    - `pa를 지정합니다.
    - 실행하기

        ```bash
        pnpm dev
        ```

    코드가 변경되면 에서 자동으로 애플리케이션을 새로고침 합니다.

## 🌱 환경 변수

Fl

## 📖 공식 문서



## 🌐 자체 호스팅 하기

기존 인프라 환경에서 Fl 방법을 지원합니다.

-   
-   
-   
-   
-   <details>
      <summary>그 외</summary>

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

## ☁️ 클라우드 호스팅 서비스



## 🙋 기술 지원

질문, 버그 리포팅, 새로운 기능 요청 등은  섹션에서 자유롭게 이야기 해주세요.

## 🙌 오픈소스 활동에 기여하기

다음과 같은 멋진 기여자들(에게 감사드립니다.

<a href="https://github.com/flowise-ai/flowise/graphs/contributors">
<img src="https://contrib.rocks/image?repo=flowise-ai/flowise" />
</a>

를 살펴보세요. 디스코드  채널에서도 이슈나 질의응답을 진행하실 수 있습니다.
](http

## 📄 라이센스

본 리포지토리의 소스코드는  라이센스가 적용됩니다.
