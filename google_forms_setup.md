# KOREAJOB24 구글 폼(Google Forms) 제작 및 연동 가이드

본 문서는 홈페이지의 구직자(지원자) 및 구인기업(고용주) 신청 버튼에 연결할 **구글 폼(Google Forms)의 표준 설문 항목 템플릿**과 스프레드시트 연동 방법입니다.

---

## 1. 구직자용 구글 폼 항목 (Job Seeker Application Template)
구직자에게 꼭 필요한 핵심 이력과 평가 데이터(여권, 학력, 경력, 어학 및 희망 조건)를 받기 위한 설계 항목입니다.

### [기본 인적사항 및 필수 서류]
1. **성명 (English Full Name)** `[단답형 / 필수]`
2. **생년월일 (Date of Birth)** `[날짜 / 필수]`
3. **국적 (Nationality)** `[객관식 질문: 네팔, 베트남, 우즈베키스탄, 기타 / 필수]`
4. **연락처 (Phone Number)** `[단답형 / 필수]`
5. **현주소 (Current Address)** `[장문형 / 필수]`
6. **여권 사본 (Passport Copy Upload)** `[파일 업로드 / 필수]`
7. **증명사진 (Applicant Photo Upload)** `[파일 업로드 / 필수]`

### [학력 및 어학 능력]
8. **최종 학력 (Education Level)** `[객관식 질문: 고등학교 졸업, 전문대 졸, 대학교 졸업, 대학원 이상 / 필수]`
9. **졸업증명서/학위증 (Diploma Upload)** `[파일 업로드 / 선택(E-7 필수)]`
10. **한국어 능력 수준 (Korean Language Level)** `[객관식 질문: 입문, 기초(EPS-TOPIK 합격), 중급(TOPIK 3~4급), 고급(TOPIK 5~6급) / 필수]`
11. **영어 능력 수준 (English Language Level)** `[객관식 질문: Basic, Intermediate, Fluent / 필수]`

### [경력 사항 및 희망 조건]
12. **이력서/CV 파일 (Resume/CV Upload)** `[파일 업로드 / IT전문직 필수, 일반직 선택]`
13. **희망 직종 (Desired Industry)** `[복수 선택형 / 필수]`
    - [ ] 제조업 공장 생산직 (Factory Manufacturing)
    - [ ] 물류창고 포장/적재 (Warehouse Logistics & Packaging)
    - [ ] 건설현장 토목/노무/비계 (Construction Site Labor)
    - [ ] 농축산업 재배/수확 (Agriculture & Farm Harvesting)
    - [ ] IT/소프트웨어 개발 (E-7 IT Professionals)
14. **보유 기술/경력상세 (Skills & Experience Details)** `[장문형 / 필수]`
    - *상세 가이드 기재: (예: 용접 3년, CNC 조작 2년, 지게차 면허 있음, 농작물 수확 경험 있음, Java/React 개발 등)*
15. **비상 연락처 (Emergency Contact)** `[단답형 / 필수]`
16. **과거 한국 비자 거절 및 출입국 전과 여부 (Immigration History Check)** `[예/아니오 / 필수]`
    - *주의: 허위 기재 시 비자 발급이 제한됩니다.*
17. **개인정보 수집 및 이용 동의 (Privacy Consent)** `[객관식 질문: 동의함 / 필수]`

---

## 2. 구인기업용 구글 폼 항목 (Employer Request Template)
구인기업(고용주)이 필요한 외국인력 요건과 기업 신용 서류를 수집하기 위한 설계 항목입니다.
*(※ 홈페이지 내 간이 폼 외에, 상세 계약용 구글 폼을 별도로 운영할 때 사용합니다).*

1. **회사명 / 기관명 (Company Name)** `[단답형 / 필수]`
2. **사업자등록번호 (Business Registration Number)** `[단답형 / 필수]`
3. **사업자등록증 사본 (Business License Upload)** `[파일 업로드 / 필수]`
4. **상시 근로자 수 (Number of Employees)** `[단답형 / 필수]`
5. **희망 고용 비자 종류** `[객관식 질문: E-9(일반노무), E-7(전문기술/IT), E-8(계절농업) / 필수]`
6. **희망 도입 외국인 인원수 (Number of Workers Needed)** `[단답형 / 필수]`
7. **담당자 성함 & 직함 (Contact Person)** `[단답형 / 필수]`
8. **연락처 (Phone Number)** `[단답형 / 필수]`
9. **이메일 주소 (Email Address)** `[단답형 / 필수]`
10. **주요 직무 및 근로 계약 조건 (Job details & Wages)** `[장문형 / 필수]`
    - *예시: 주 40시간 근무, 교대근무 여부, 기본급 제공 금액, 기숙사 제공 여부, 식사 제공 여부 등 기재*

---

## 3. 구글 폼 및 스프레드시트 연동 방법

### 1단계: 구글 폼 만들기
1. [구글 폼](https://forms.google.com)에 접속하여 위 항목으로 폼을 생성합니다.
2. 우측 상단 **'보내기'** 버튼을 클릭하고 **'링크(URL)'**를 복사합니다.

### 2단계: 홈페이지에 구글 폼 링크 매칭하기
1. 바탕화면의 [index.html](file:///Users/a1710/Desktop/koreajob24/index.html) 파일을 텍스트 에디터로 엽니다.
2. 아래 구직자 카드 버튼 부분 (`a` 태그)을 찾습니다.
   ```html
   <a href="https://forms.google.com" target="_blank" ...>구글 폼으로 지원하기</a>
   ```
3. `href` 속성에 방금 복사한 구직자용 구글 폼 URL을 붙여넣고 저장합니다.

### 3단계: 구글 스프레드시트로 실시간 문의 받기
1. 구글 폼 편집 화면 상단에서 **'응답(Responses)'** 탭을 선택합니다.
2. 초록색 **'스프레드시트에 연결(Link to Sheets)'** 아이콘을 클릭합니다.
3. '새 스프레드시트 만들기'를 선택하면, 폼으로 신청이 들어올 때마다 자동으로 실시간으로 정리된 엑셀 데이터가 구글 드라이브 시트에 누적됩니다.
