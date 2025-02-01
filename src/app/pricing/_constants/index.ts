import { Boxes, Globe, RefreshCcw, Shield } from "lucide-react";

export const ENTERPRISE_FEATURES = [
  {
    icon: Globe,
    label: "글로벌 인프라",
    desc: "전 세계 엣지 노드를 통한 번개처럼 빠른 실행"
},
{
    icon: Shield,
    label: "기업 보안",
    desc: "은행 수준의 암호화 및 보안 프로토콜"
},
{
    icon: RefreshCcw,
    label: "실시간 동기화",
    desc: "모든 장치에서 즉시 동기화"
},
{
    icon: Boxes,
    label: "무제한 저장소",
    desc: "무제한 스니펫 및 프로젝트 저장"
}

];

export const FEATURES = {
  development: [
    "고급 AI",
    "다국어 지원",
    "통합 디버깅 도구",
    "맞춤형 테마 빌더",
  ],
  collaboration: [
    "코드 리뷰 도구",
    "버전 관리 통합",
    "팀 작업 공간",
    "실시간 페어 프로그래밍",
  ],
  deployment: [
    "원클릭 배포",
    "CI/CD 통합",
    "컨테이너 지원",
    "맞춤형 도메인 매핑",
  ],
};
