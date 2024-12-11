# Bulls & Bears

- 기간: 2023.10.04 - 2023.10.20
- 개요: 주식 초보자들을 위한 배당금 수익 예측 서비스
- [Github & Wiki](https://github.com/bulls-and-bears)

### 📌 프로젝트 개요

`Bulls & Bears`는 주식 초보자들이 배당금 수익을 손쉽게 예측할 수 있도록 돕는 웹 서비스로, 효율적이고 안정적인 개발과 배포 환경을 목표로 구축했습니다.

### 🛠 기술 스택

- **백엔드**: Spring Data JPA, Spring Security, OAuth 2.0
- **프론트엔드**: React, Redux, ㄴStyled Components
- **데이터베이스**: MySQL, Redis
- **CI/CD 및 배포**: Docker, GitHub Actions, ArgoCD
- **클라우드 인프라**: AWS (RDS, S3, ECR, EKS, Route53)

### 🖍 주요 역할

✅ 협업 관리

- **팀 리더 역할**: 팀 목표와 프로젝트의 전반적 방향을 설정하고, 작업 우선순위에 따라 과업을 체계적으로 분배하여 팀의 생산성을 높였습니다.
- **협업 도구 활용**: Jira로 작업 우선순위를 관리하고, Notion과 Slack을 활용한 문서화 및 데일리 스크럼으로 팀원 간 원활한 소통과 협업을 유지했습니다.

✅ 핵심 기능 구현

1. **공통 모듈**
    - 인증/인가 및 에러 처리 모듈을 구성하여 프로젝트의 일관성과 안정성을 확보했습니다.

2. **회원가입 및 로그인**
    - Spring Security, OAuth2, JWT로 소셜 로그인 기능을 구현하고, 중복 검증 로직을 추가해 데이터 무결성을 보장했습니다.

3. **회원 정보 관리**
    - 프로필 이미지를 S3에 저장하고 Soft Delete 방식으로 회원 탈퇴를 구현하여 데이터 보존이 가능하도록 처리했습니다.

4. **API 문서화 및 테스트 자동화**
    - Swagger로 API 문서를 자동 생성하고 테스트 기능을 추가하여 개발 효율성을 향상했습니다.

✅ 배포 환경 및 CI/CD 파이프라인 설정

1. **배포 환경 구성**
    - AWS EKS, ECR, Route 53을 활용하여 Kubernetes 기반의 안정적인 배포 환경을 구축했습니다.

2. **CI/CD 설정**
    - Github Actions로 Docker 이미지를 자동 빌드하여 ECR에 업로드하고, ArgoCD를 통해 EKS에 자동 배포하여 빠르고 효율적인 배포 프로세스를 완성했습니다.