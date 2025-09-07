
# 백석예대 영상학부 졸업준비위원회 (영화콘탠츠, 영상미디어)

멀티페이지(정적 HTML) 버전입니다. 좌측바의 4개 섹션은 각각 다른 페이지로 이동합니다.

## 페이지 구성
- `/index.html` : `movie.html`로 리다이렉트
- `/movie.html` : **영화콘탠츠** (Google Form 임베드)
- `/media.html` : **영상미디어** (Google Form 임베드)
- `/schedule.html` : **전체일정** (Google Calendar 임베드)
- `/notices.html` : **공지사항 모음** (정적 리스트; 추후 스프레드시트/노션 연동 가능)

## 링크 교체 (중요)
- `movie.html`의 iframe `src`와 버튼 `href`를 실제 **영화콘탠츠 구글 폼** 링크로 교체
- `media.html`의 iframe `src`와 버튼 `href`를 실제 **영상미디어 구글 폼** 링크로 교체
- `schedule.html`의 iframe `src`를 실제 **공유용 Google Calendar 임베드 src**로 교체

## GitHub Pages 배포
1. 새 리포지토리 생성 (예: `bua-grad-committee`)
2. 이 폴더의 모든 파일 업로드/커밋
3. GitHub 리포지토리 → **Settings** → **Pages**
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (또는 `master`) / 폴더: `/root` 선택
4. 저장 후 상단에 표시되는 주소(`https://<아이디>.github.io/<리포지토리>/`)로 접속
   - 첫 진입은 `index.html`이 자동으로 로드되고 `movie.html`로 이동합니다.

## 커스텀 도메인(선택)
- **Settings → Pages**에서 `Custom domain`에 도메인 입력 (예: `grad.bau-media.kr`) 후 저장
- 도메인 DNS에서 `CNAME`을 GitHub Pages 주소로 설정
- 루트에 `CNAME` 파일을 두면 고정됨 (파일 내용: 커스텀 도메인)

## 스타일 변경
- 공통 스타일: `css/style.css`
- 간단한 동작/하이라이트: `js/app.js`

---
제작: 백석예대 영상학부 졸업준비위원회
