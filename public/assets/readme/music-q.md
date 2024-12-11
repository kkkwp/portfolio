# Music Q!

- 기간: 2023.03.06 - 2023.04.30
- 개요: WebRTC(OpenVidu)를 이용한 실시간 화상 웹 게임
- [Github & Wiki](https://github.com/Dream-Kakao)
- [Video](https://drive.google.com/file/d/1Yg92E40OKb_3rquHGY3qQZ1hlV09Dn9X/view?usp=sharing)

### 📌 프로젝트 개요

`Music Q!`는 WebRTC 기술(OpenVidu)을 활용한 **실시간 화상 웹 게임 플랫폼**입니다. 
사용자들이 서로 실시간으로 소통하며 음악을 주제로 게임을 즐길 수 있는 공간을 제공합니다.

### 🛠 기술 스택

- **실시간 통신**: WebRTC(OpenVidu)
- **백엔드**: Spring Boot, JPA, Spring Security, OAuth 2.0
- **프론트엔드**: React, Redux, Styled Components
- **데이터베이스**: MySQL, Redis
- **CI/CD 및 배포**: Docker, GitHub Actions, Nginx, Jenkins
- **클라우드 인프라**: AWS (S3, EKS)

### 🖍 주요 역할 및 성과

✅ 주요 기능 구현

1. **방 생성 및 관리**
    - OpenVidu와 WebRTC를 사용하여 방 세션의 생성, 수정, 삭제(CRUD) 기능을 구현했습니다.
    - 비디오 및 마이크 스트림 제어 기능을 통해 안정적인 사용자 경험을 제공했습니다.

2. **음악 기능**
    - Youtube API를 연동하여 다양한 음악 데이터를 제공하고, 사용자가 쉽게 접근할 수 있는 UI를 설계했습니다.

3. **UI 디자인**
    - MUI(Material-UI)를 기반으로 Material Design 원칙을 적용하여 일관되고 직관적인 화면을 구현했습니다.

✅ 배포 환경 설정 및 성능 최적화

1. **하이브리드 클라우드 아키텍처 적용**
    - 서비스 계층과 클라이언트 애플리케이션은 클라우드 환경에 배포하고, 데이터 영속화 계층은 온프레미스 환경에 배치하여 안정성과 성능을 최적화했습니다.

2. **성능 최적화**
    - Nginx 리버스 프록시와 로드 밸런싱을 통해 응답 시간을 약 3배 단축하여 사용자 경험을 대폭 개선했습니다.