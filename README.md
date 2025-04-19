# GGGGAMES Socket Server

Socket.io 서버 for GGGGAMES

## 설치 방법

```bash
npm install
```

## 환경 변수 설정

`.env` 파일을 생성하고 다음 변수들을 설정하세요:

```
PORT=3000
CLIENT_URL=your_client_url
```

## 개발 서버 실행

```bash
npm run dev
```

## 프로덕션 서버 실행

```bash
npm start
```

## Render 배포 방법

1. Render.com에서 새로운 Web Service 생성
2. GitHub 저장소 연결
3. 다음 설정으로 배포:
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
4. 환경 변수 설정:
   - `PORT`: Render가 자동으로 설정
   - `CLIENT_URL`: 프론트엔드 애플리케이션 URL

## 소켓 이벤트

### 기본 이벤트
- `connection`: 클라이언트 연결
- `disconnect`: 클라이언트 연결 해제
- `message`: 메시지 브로드캐스트 