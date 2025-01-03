import React from 'react'
import { FaReact } from 'react-icons/fa'

export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'Work', hash: '#work' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Experience', hash: '#experience' },
] as const

export const workData = [
  {
    company: '신한투자증권',
    department: 'ICT본부',
    position: '인턴',
    date: '2023.10.23 - 2023.11.22',
    task: [
      'JSP, Spring으로 작성된 비대면계좌개설 서비스 소스 코드 분석 업무 수행. 사용자 유입 경로와 이벤트 유형별로 분기된 복잡한 코드를 분석하고 이를 Flow Chart로 시각화',
      '마이데이터 서비스를 위한 표준 API를 이해하고 이를 바탕으로 테스트 시나리오 작성 및 금융보안원 테스트베드를 활용한 API 테스트 수행',
      'Git, GitLab, Confluence를 활용한 협업 및 문서화 업무 수행',
    ],
    achievement: [
      '비대면계좌개설 서비스의 기존 소스 코드 중 비효율적인 코드 구성 개선으로 서비스 품질 향상에 기여',
      '사용자 유입 경로나 이벤트 유형에 따라 분기된 비대면계좌개설 서비스의 프로세스를 시각화한 Flow Chart를 사내 Wiki에 게시. 해당 자료는 타 팀원들이 참고 자료로 활용하여 업무 능률을 향상시킴',
      '마이데이터 서비스 테스트 단계에서 발견된 오류를 해결하여 실서비스 품질 개선에 기여',
    ],
  },
] as const

export const projectsData = [
  {
    id: 1,
    title: 'Bulls & Bears',
    date: '2023.10.04 - 2023.10.20',
    description:
      'Bulls & Bears는 주식 초보자들이 배당금 수익을 손쉽게 예측할 수 있도록 돕는 웹 서비스로, 안정적인 개발과 배포 환경을 목표로 구축했습니다.',
    link: 'https://github.com/bulls-and-bears',
    imageUrl: '/assets/projects/bulls-and-bears.png',
  },
  {
    id: 2,
    title: 'MusicQ!',
    date: '2023.03.06 - 2023.04.30',
    description:
      'MusicQ!는 WebRTC를 활용해 사용자들이 실시간 화상으로 소통하며 즐길 수 있는 웹 기반 음악 게임입니다. 프론트엔드, 백엔드, CI/CD 설정을 모두 담당하며 성능 최적화와 사용자 경험 개선을 목표로 구축했습니다.',
    link: 'https://github.com/Dream-Kakao',
    imageUrl: '/assets/projects/music-q.png',
  },
  {
    id: 3,
    title: '바름스픽',
    date: '2021.03.02 - 2021.10.01',
    description:
      '바름스픽은 영어 학습자가 실시간으로 발음 교정을 받을 수 있는 서비스로, 사용자의 입모양과 음성을 분석하여 피드백을 제공합니다. 딥러닝 모델과 음성 인식 기술을 활용해 교정 정확도를 높이고, 점수 형태의 피드백을 제공하였습니다.',
    link: 'https://github.com/Barum-Speak/barumLipNet',
    imageUrl: '/assets/projects/dark-saas-landing-page.png',
    // imageUrl: '/assets/projects/barum-speak.png',
  },
] as const

export const experienceData = [
  {
    title: '신한투자증권 프로 디지털 아카데미',
    location: '신한투자증권, 서울경제진흥원 청년취업사관학교(SeSAC)',
    description:
      '금융 도메인 개발자 교육을 수료했습니다. 핀테크 산업에 필요한 전반적인 ICT 능력과 증권업 실무 개발 지식을 배양하고 클라우드 환경에 기반한 풀스택 개발 과정을 학습했습니다.',
    icon: React.createElement(FaReact),
    date: '2023.07.17 - 2023.10.20',
  },
  {
    title: '카카오(Kakao) 클라우드 개발자 양성과정',
    location: '카카오, 한국전파진흥협회(RAPA)',
    description:
      '클라우드 환경 기반 웹 풀스택 개발자 교육을 수료했습니다. 프론트/백엔드, 클라우드 및 DevOps 관련 지식을 습득하고 최종 팀 프로젝트를 통해 클라우드(AWS) 기반 웹 애플리케이션을 기획부터 개발 및 배포까지 경험했습니다.',
    icon: React.createElement(FaReact),
    date: '2022.10.31 - 2023.05.03',
  },
  {
    title: '삼성전자 DX부문 하계 SW 역량강화 특강',
    location: '삼성전자 DX부문',
    description:
      'S/W 문제해결 및 알고리즘 특강을 통해 개발 역량을 향상했습니다. S/W 자료구조 및 알고리즘 이론을 학습하고 S/W 알고리즘 실전 문제를 풀이하였습니다.',
    icon: React.createElement(FaReact),
    date: '2022.07.18 - 2022.08.26',
  },
  {
    title: '숙명 WINE(Women IN Engineering) 프로그램',
    location: '숙명여자대학교, AWS',
    description:
      '4차 산업혁명 핵심기술에 대해 단계별 강좌를 개설하고, 각 과정별 개념 이해와 참여 실습을 진행함으로써 학습에 대한 동기 부여 및 진로 탐색 기회를 제공하는 비교과 프로그램입니다. 그 중 클라우드 컴퓨팅, R 기반 빅데이터 활용, 데이터 분석 심화 - 머신러닝, AWS 딥레이서 과정을 수료했습니다.',
    icon: React.createElement(FaReact),
    date: '2020.04.06 - 2020.11.28',
  },
] as const

export const footerLinks = [
  { title: 'Github', link: 'https://github.com/kkkwp' },
  { title: 'Blog', link: 'https://chxrryda.tistory.com/' },
  { title: 'Email', link: 'mailto:chxrryda@gmail.com' },
] as const
