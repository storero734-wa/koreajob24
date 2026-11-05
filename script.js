// Language Translation Dictionaries
const translations = {
  ko: {
    // Navigation & Common
    nav_home: "홈",
    nav_seekers: "해외취업",
    nav_services: "비즈니스 솔루션",
    nav_logistics: "해외 물류/풀필먼트",
    nav_marketing: "글로벌 마케팅",
    nav_countries: "국가별 법인설립",
    nav_media: "언론보도",
    nav_contact: "문의하기",

    // Hero Section
    hero_pill: "✦ Since 2015 · Asia-Wide Global Business & Logistics Gateway",
    hero_title: "글로벌 비즈니스 설립 및<br/><span>해외 우수 인재 매칭 솔루션</span>",
    hero_subtitle: "KOREAJOB24는 해외 법인 설립, 가상오피스, 글로벌 마케팅 대행부터 현장 기능직 및 IT 전문 인재 매칭까지 원스톱 기업 지원 서비스를 제공합니다.",
    hero_btn_services: "서비스 둘러보기",
    hero_btn_employers: "업무 제휴 및 문의",

    // Hero Stats
    stat_years_label: "Founded & Operating",
    stat_countries_label: "APAC Hub Networks",
    stat_ops_label: "Logistics & Operations",
    stat_compliance_label: "Licensed & Compliant",

    // Section Tags & Headers
    section_tag_career: "Global Career Pathway",
    section_tag_services: "Enterprise Services",
    section_tag_apac: "APAC Coverage",
    section_tag_story: "Track Record & Trust",
    section_tag_media: "Media Coverage",
    section_tag_contact: "Contact & Partnerships",

    // Seekers Section
    seekers_title: "해외 취업 <span>지원하기</span>",
    seekers_subtitle: "합법 비자 취득부터 근무지 배정까지, 신뢰할 수 있는 글로벌 일자리를 연결합니다.",
    card1_title: "한국 취업 (Korea)",
    card1_desc: "제조 공장 생산직, 물류창고 포장/지게차 운전, 건설현장(토목/비계), 농가 농작물 수확 등 합법 비자(E-7, E-9, E-8) 기반의 안전하고 확실한 일자리를 매칭합니다.",
    card2_title: "일본 취업 (Japan)",
    card2_desc: "일본 내 대형 물류창고 하역 적재, 식품가공 공장 라인, 도로/건축 건설현장 노무, 비닐하우스 영농 등 특정기능 비자 취득을 통한 고수익 일자리를 연결합니다.",
    card3_title: "러시아 취업 (Russia)",
    card3_desc: "목재 벌목/수송 가공, 건설 현장 인부, 대규모 제조업 포장 라인, 농작물 수확 가공 등 러시아 주요 산업 단지와 아그로 기업의 신뢰할 수 있는 일자리를 매칭해 드립니다.",
    card_btn_apply: "구글 폼으로 지원하기",

    // Services Section
    services_title: "글로벌 <span>비즈니스 솔루션</span>",
    services_subtitle: "현지 진출 초기 설립부터 마케팅, 물류 유통까지 종합 원스톱 인프라를 제공합니다.",
    service1_title: "해외법인 설립 & 가상오피스",
    service1_desc: "홍콩, 싱가포르, 베트남 등 글로벌 법인 설립 및 은행 계좌 개설, 주재원 비자 수속 대행 서비스를 원스톱으로 지원합니다.",
    service_btn_countries: "설립 가이드 보기",

    service2_title_mkt: "글로벌 마케팅 & 인플루언서",
    service2_desc_mkt: "베트남 및 아시아 전역 현지 유명 인플루언서(KOL/KOC) 매칭 바이럴 홍보 및 Meta, Google 기반의 현지 퍼포먼스 마케팅 대행 서비스를 제공합니다.",
    service_btn_mkt: "마케팅 솔루션 보기",

    service3_title_logi: "해외 물류 & 풀필먼트",
    service3_desc_logi: "아시아 전역 박스풀(Boxful) 자사 물류 창고 네트워크 기반의 보관, 포장, 글로벌 크로스보더(직판) 배송 대행 서비스를 제공합니다.",
    service_btn_logi: "해외물류 솔루션 보기",

    // Countries Section
    countries_title: "국가별 <span>법인설립 가이드</span>",
    countries_subtitle: "국가별 세율 혜택, 법정 소요 기간, 비자 조건을 한눈에 비교하고 신청하세요.",
    btn_view_details: "상세 보기",
    country_hk_title: "홍콩 법인설립",
    country_hk_desc: "세율: 8.25% ~ 16.5%<br>소요기간: 1~2일<br>아시아 금융 비즈니스 허브",
    country_sg_title: "싱가포르 법인설립",
    country_sg_desc: "세율: 17% (신규 감면)<br>소요기간: 1~2일<br>글로벌 테크/무역 중심지",
    country_vn_title: "베트남 법인설립",
    country_vn_desc: "세율: 20% (제조업 우대)<br>소요기간: 3~4주<br>제조 및 신흥 소비 시장",
    country_uz_title: "우즈베키스탄 설립",
    country_uz_desc: "세율: 15% (IT 파크 면세)<br>소요기간: 2주<br>중앙아시아 거점 신흥 시장",
    country_tw_title: "대만 법인설립",
    country_tw_desc: "세율: 20%<br>소요기간: 2~3주<br>동아시아 정밀 IT 기술 거점",
    country_my_title: "말레이시아 설립",
    country_my_desc: "세율: 17% ~ 24%<br>소요기간: 1~2주<br>동남아 이커머스/물류 관문",
    country_ko_title: "한국 법인설립",
    country_ko_desc: "세율: 9% ~ 24%<br>소요기간: 1~2주<br>외투기업 D-8 투자 연동",
    country_ru_title: "러시아 법인설립",
    country_ru_desc: "세율: 20%<br>소요기간: 2주<br>유라시아 제조/유통 시장",

    // Brand Story & Media
    brand_story_title: "Since 2015: 이커머스에서 글로벌 비즈니스 솔루션으로",
    brand_story_p1: "박스풀(Boxful)은 2015년부터 한국, 홍콩, 대만에서 이커머스 셀러들의 보관 및 3PL 풀필먼트 물류를 선도하며 성장해왔습니다. 그 과정에서 수많은 온라인 판매자들이 현지 법인 설립 규정, 언어 장벽, 마케팅 노하우 부족, 그리고 현지 물류 및 신뢰할 수 있는 아웃소싱 인력 수배의 한계 때문에 아시아 시장 확장을 주저하고 좌절하는 것을 목격했습니다.",
    brand_story_p2: "이에 KOREAJOB24는 고객사들의 해외 진출 장벽을 허물고자 사업 모델을 대폭 확장했습니다. 단순히 물류에만 그치지 않고 해외 현지 법인 설립, 회계/세무 감사 대행, 글로벌 디지털/인플루언서 마케팅, 그리고 신뢰할 수 있는 기능직/IT 인력 수급까지 완벽하게 원스톱으로 지원함으로써 성공적인 아시아 무역의 든든한 동반자가 되어 드립니다.",
    news_section_title: "언론 보도 및 공인 신뢰성",
    news1_title: "박스풀, 크로스보더 풀필먼트 서비스 전격 확장",
    news1_desc: "아시아 전역의 자체 물류망을 기반으로 수출입 기업용 3PL 서비스를 다각화하고 나섰습니다...",
    news2_title: "스마트 보관 업계 선두 박스풀, 물류 센터 자동화 확대",
    news2_desc: "박스풀은 로봇공학 및 소프트웨어 연동 풀필먼트 솔루션 고도화를 발표하며 글로벌 경쟁력을 증명했습니다...",
    news_link_search: "네이버 기사 검색 &rarr;",
    news_link_search_google: "구글 물류 기사 검색 &rarr;",

    // Employers Form
    employers_title: "글로벌 비즈니스 <span>도입 및 상담 신청</span>",
    employers_subtitle: "해외법인 설립, 오피스 주소지 대행, 글로벌 마케팅 컨설팅, 혹은 물류 및 아웃소싱 도입이 필요하신 기업 담당자분께서는 양식을 작성해 주세요.",
    emp_point1: "글로벌 회사 설립 및 비즈니스 법률 규정 준수 대행",
    emp_point2: "해외 인플루언서(KOL) 마케팅 대행 및 현지 매체 바잉",
    emp_point3: "크로스보더 3PL 풀필먼트 연동 및 통합 물류 관리",
    form_label_company: "회사명 / 기관명 (Company Name) *",
    form_label_workers: "도입 희망 사항 (법인 설립 지역 또는 인력 인원수) *",
    form_label_contact: "담당자 성함 & 직함 (Contact Person) *",
    form_label_phone: "연락처 / 전화번호 (Phone Number) *",
    form_label_email: "이메일 주소 (Email Address) *",
    form_label_details: "상세 문의 내용 (Inquiry / Job Details) *",
    form_btn_submit: "문의 및 서비스 신청하기 (Submit)",
    submit_loading: "전송 중...",
    submit_success: "신청이 완료되었습니다! 담당자가 신속히 연락드리겠습니다.",
    submit_error: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",

    // Marketing Page
    marketing_title: "글로벌 디지털 마케팅 & 인플루언서 솔루션",
    marketing_subtitle: "KOREAJOB24는 베트남 및 동남아시아, 홍콩, 대만 시장에 특화된 디지털 마케팅 캠페인을 제공하여 수출 기업의 현지 매출을 극대화합니다.",
    mkt_strength_title: "성공적인 글로벌 현지 마케팅",
    mkt_point1_title: "1. 해외 현지 인플루언서 마케팅 (KOL / KOC)",
    mkt_point1_desc: "베트남, 홍콩, 대만, 태국 등 국가별 최적화된 TikTok, YouTube 메가/마이크로 크리에이터를 섭외하고 로컬 트렌드에 맞는 바이럴 홍보를 대행합니다.",
    mkt_point2_title: "2. 글로벌 퍼포먼스 마케팅 (Meta & Google & TikTok)",
    mkt_point2_desc: "광고 어카운트 세팅부터 유입 당 단가 최적화, 전환 광고 바잉, 대시보드 리포팅을 통해 광고비 대비 매출액(ROAS)을 효율적으로 개선합니다.",
    mkt_point3_title: "3. 현지 로컬라이징 & 이커머스 입점 운영 대행",
    mkt_point3_desc: "동남아 주요 채널인 Shopee, Lazada 및 틱톡숍(TikTok Shop) 등록, 상세페이지 로컬 번역/디자인, CS 대행까지 종합 운영 솔루션을 제공합니다.",
    mkt_form_title: "해외 마케팅 견적 & 상담 신청",
    mkt_label_country: "진출 희망 국가 (Target Country) *",
    mkt_label_type: "희망 대행 서비스 (Service Required) *",
    mkt_label_budget: "월 예상 마케팅 예산 (Monthly Budget) *",
    mkt_label_contact: "회사명 및 담당자 연락처 (Contact Info) *",
    mkt_label_details: "회사 제품군 및 마케팅 목표 설명 (Goals) *",
    mkt_btn_submit: "해외 마케팅 컨설팅 신청 (Request Consulting)",

    // Logistics Page
    logistics_title: "박스풀 <span>해외 물류 & 풀필먼트</span>",
    logistics_subtitle: "KOREAJOB24는 아시아 전역(한국, 홍콩, 싱가포르, 대만 등)에 걸친 박스풀(Boxful)의 탄탄한 자사 물류 네트워크 및 크로스보더 풀필먼트 인프라를 활용하여 수출입 물류 비용 절감과 맞춤 보관 서비스를 약속합니다.",
    logistics_strength_title: "탄탄하게 구축된 아시아 물류 허브",
    logistics_strength_desc: "박스풀의 최첨단 스마트 보관 및 자동 입출고 모니터링 시스템을 통해, 국내외 쇼핑몰의 크로스보더(해외 직판) 배송부터 보관 및 패킹까지 전 과정을 완벽히 관리합니다.",
    quote_form_title: "해외 물류 견적 & 단가 문의",
    logi_label_origin: "출발지 (Origin) *",
    logi_label_dest: "도착지 (Destination) *",
    logi_label_volume: "예상 월간 물량 (Monthly Volume) *",
    logi_label_contact: "회사명 및 담당자 연락처 (Contact Info) *",
    logi_label_details: "요청 서비스 및 화물의 종류 (Cargo Type) *",
    logi_btn_submit: "해외 물류 견적 신청하기 (Request Quote)",

    // Country Details Page Sub-headers
    guide_title: "법인설립 <span>상세 정보</span>",
    btn_back: "&larr; 메인으로 돌아가기",
    th_category: "항목",
    th_value: "상세 정보",
    td_tax_rate: "법인세율 (Tax Rate)",
    td_timeline: "설립 소요 기간 (Timeline)",
    td_directors: "이사/주주 요건 (Directors/Shareholders)",
    td_capital: "최저 자본금 (Min Capital)",
    td_visa: "대표 비자 종류 (Visa Options)",
    visa_desc_title: "취업 및 투자 비자 프로그램",

    // Country values
    uz_desc_p: "우즈베키스탄은 IT Park 경제특구 혜택과 풍부한 인적자원을 갖춘 중앙아시아 비즈니스 요충지입니다.",
    uz_tax_val: "15% (IT Park 입주 시 법인세, 소득세, 부가세 전액 면세 혜택)",
    uz_time_val: "7 ~ 14 영업일",
    uz_dir_val: "최소 이사 1인, 주주 1인 (현지 거주자 요건 없음)",
    uz_cap_val: "제한 없음 (통상 1,000,000 UZS 이상 권장)",
    uz_visa_val: "IT Visa, 투자자 비자 (DT), 일반 취업 비자",
    uz_visa_desc: "IT 특구 스폰서십을 받아 IT Visa 취득 시 가족 동반 및 비자 갱신 행정 혜택을 누릴 수 있습니다.",

    tw_desc_p: "대만은 반도체 등 하이테크 제조 벨트와 동아시아 무역 관문을 연결하는 중요 시장입니다.",
    tw_tax_val: "20% (과세 소득 12만 TWD 이하는 면세)",
    tw_time_val: "2 ~ 3주 (투자심의위원회 승인서 필요)",
    tw_dir_val: "최소 이사 1인, 주주 1인 (외국 개인/법인 100% 소유 가능)",
    tw_cap_val: "제한은 없으나 사업자등록 및 투자 인증을 위해 최소 500,000 TWD 권장",
    tw_visa_val: "대만 골드카드 (Gold Card), 투자 주재원 비자",
    tw_visa_desc: "전문 지식을 갖춘 글로벌 인재 대상의 골드카드 제도를 통해 비자 및 체류 편의를 제공합니다.",

    my_desc_p: "말레이시아는 동남아의 이커머스 핵심이자 안정된 법률 체계를 갖춘 다국적 기업의 기지입니다.",
    my_tax_val: "17% ~ 24% (신규 중소기업 우대 세율 적용 가능)",
    my_time_val: "5 ~ 10 영업일 (SSM 온라인 등록)",
    my_dir_val: "최소 이사 1인 (말레이시아 거주자 필수), 주주 1인",
    my_cap_val: "1 MYR 이상 (단, 외국인 고용 비자 스폰 시 업종별 최소 자본금 차등 적용)",
    my_visa_val: "Employment Pass (EP Categories I, II, III), DE Rantau",
    my_visa_desc: "디지털 노마드를 위한 DE Rantau 패스 및 기업 고용 임직원용 EP 취득을 원스톱 지원합니다.",

    hk_desc_p: "홍콩은 간단한 세율 구조와 역외 면세 혜택을 갖춘 아시아 금융 허브입니다.",
    hk_tax_val: "8.25% ~ 16.5% (역외 원천 소득 면세 가능)",
    hk_time_val: "1 ~ 2 영업일",
    hk_dir_val: "최소 이사 1인, 주주 1인 (국적 무관), 현지 법인 비서 필수",
    hk_cap_val: "제한 없음 (통상 HKD 10,000으로 등록)",
    hk_visa_val: "홍콩 취업 비자 (Employment Visa), 투자 주재원 비자",
    hk_visa_desc: "홍콩 법인 설립 후 정식 고용 계약을 통해 취업 비자를 스폰서받거나, 투자 비자를 통해 정착할 수 있습니다.",

    sg_desc_p: "싱가포르는 투명한 규제와 스타트업 세제 혜택을 자랑하는 세계 최적의 기업 설립지입니다.",
    sg_tax_val: "17% (신규 설립 시 과세 소득 최대 75% 감면 혜택)",
    sg_time_val: "1 ~ 2 영업일",
    sg_dir_val: "최소 이사 1인 (싱가포르 현지 거주 이사 필수), 주주 1인",
    sg_cap_val: "SGD 1 이상 (자유롭게 설정 가능)",
    sg_visa_val: "Employment Pass (EP), S Pass, EntrePass",
    sg_visa_desc: "고연봉 전문직과 경영진 대상의 EP 발급 및 스타트업 창업자를 위한 EntrePass 제도가 활성화되어 있습니다.",

    vn_desc_p: "베트남은 인건비가 저렴하고 풍부한 노동력을 갖춘 동남아시아 제조 벨트의 중심입니다.",
    vn_tax_val: "20% (특정 공단 및 우대 업종의 경우 면세 및 감면 혜택)",
    vn_time_val: "3 ~ 4주 (투자 승인서 IRC 및 기업 등록증 ERC 발급)",
    vn_dir_val: "현지 대표자 1인 상주 필수, 주주는 외국 개인/법인 100% 가능",
    vn_cap_val: "최저 제한은 없으나 통상 USD 10,000 이상 권장",
    vn_visa_val: "노동 비자 (LD Visa), 투자자 비자 (DT Visa), Work Permit",
    vn_visa_desc: "2년 만기의 노동 비자를 취득하기 위해 노동 보훈 사회부로부터 Work Permit 사전 승인이 필요합니다.",

    ko_desc_p: "대한민국은 고도화된 기술 기반 인프라와 매력적인 투자 인센티브를 제공하는 시장입니다.",
    ko_tax_val: "9% ~ 24% (누진세율 구조)",
    ko_time_val: "7 ~ 10 영업일",
    ko_dir_val: "최소 이사 1인, 감사 1인 (자본금 10억 미만 시 1인 이사 가능)",
    ko_cap_val: "100원 이상 (단, 외국인 투자비자 D-8 취득 시 최소 1억 원)",
    ko_visa_val: "외국인 투자 비자 (D-8), 특정 활동 취업 비자 (E-7)",
    ko_visa_desc: "최소 1억 원 이상 투자한 외국인 경영자에게 D-8 비자가 발급되며, 전문 외국 기술자 매칭 시 E-7 비자가 사용됩니다.",

    ru_desc_p: "러시아는 거대한 유라시아 내륙 시장과 풍부한 자원 가공 인프라를 갖춘 제조/유통 허브입니다.",
    ru_tax_val: "20% (일부 지역 및 농업/IT 업종 특별 우대 세율 존재)",
    ru_time_val: "10 ~ 14 영업일",
    ru_dir_val: "최소 이사 1인 (러시아인 또는 적합 비자 소지자), 주주 1인",
    ru_cap_val: "10,000 RUB (최소 법정 자본금)",
    ru_visa_val: "러시아 취업 비자 (Work Visa), 주재원 비자",
    ru_visa_desc: "현지 법인이 쿼터를 배정받아 근로 계약 체결 후 러시아 내무부를 통해 비자 초청장을 발급받습니다.",

    footer_desc: "글로벌 인력 매칭 및 비즈니스 설립 대행 파트너 KOREAJOB24입니다. 정직과 신뢰를 바탕으로 고수익 일자리 매칭 및 법인 컨설팅을 수행합니다.",
    footer_contact_title: "공식 이메일 문의 (Inquiry Email)"
  },

  en: {
    // Navigation & Common
    nav_home: "Home",
    nav_seekers: "Job Seekers",
    nav_services: "Enterprise Services",
    nav_logistics: "Global Logistics",
    nav_marketing: "Global Marketing",
    nav_countries: "Incorporation",
    nav_media: "Media",
    nav_contact: "Contact Us",

    // Hero Section
    hero_pill: "✦ Since 2015 · Asia-Wide Global Business & Logistics Gateway",
    hero_title: "Global Business Formation &<br/><span>International Talent Matching Solutions</span>",
    hero_subtitle: "KOREAJOB24 provides one-stop corporate support, from overseas incorporation, virtual offices, marketing consulting, to skilled manual workers and IT tech talent matching.",
    hero_btn_services: "Explore Services",
    hero_btn_employers: "Business Inquiry",

    // Hero Stats
    stat_years_label: "Founded & Operating",
    stat_countries_label: "APAC Hub Networks",
    stat_ops_label: "Logistics & Operations",
    stat_compliance_label: "Licensed & Compliant",

    // Section Tags & Headers
    section_tag_career: "Global Career Pathway",
    section_tag_services: "Enterprise Services",
    section_tag_apac: "APAC Coverage",
    section_tag_story: "Track Record & Trust",
    section_tag_media: "Media Coverage",
    section_tag_contact: "Contact & Partnerships",

    // Seekers Section
    seekers_title: "Job Seeker <span>Opportunities</span>",
    seekers_subtitle: "Connecting international workers with verified employers, legal visa sponsorship, and relocation support.",
    card1_title: "Work in Korea",
    card1_desc: "Match with secure, legal working visa (E-7, E-9, E-8) jobs including Factory production, Logistics warehousing & packaging, Forklift operations, Construction labor, and Agricultural greenhouse harvesting.",
    card2_title: "Work in Japan",
    card2_desc: "Connect with high-paying manual and skilled labor jobs in Japan, such as Warehouse packaging, Food factory lines, Construction trades, and Smart farm harvesting under Specified Skilled Worker (SSW) visas.",
    card3_title: "Work in Russia",
    card3_desc: "Placement for Factory packaging, Timber logging/transportation, Construction site labor, and Crop harvesting inside Russian industrial zones and major agricultural corporations.",
    card_btn_apply: "Apply via Google Form",

    // Services Section
    services_title: "Global <span>Business Solutions</span>",
    services_subtitle: "Comprehensive infrastructure for overseas company formation, local marketing, and 3PL fulfillment.",
    service1_title: "Company Formation & Virtual Office",
    service1_desc: "One-stop assistance for global incorporation, bank accounts, and work visa administration in Hong Kong, Singapore, Vietnam, etc.",
    service_btn_countries: "View Incorporation Guide",

    service2_title_mkt: "Global Marketing & Influencers",
    service2_desc_mkt: "Viral marketing campaigns matching local key opinion leaders (KOLs) and performance marketing agency services across Vietnam and APAC.",
    service_btn_mkt: "View Marketing Solutions",

    service3_title_logi: "Global Logistics & Fulfillment",
    service3_desc_logi: "Warehousing, pick-pack, and cross-border delivery services using Boxful's extensive Asian logistics network.",
    service_btn_logi: "View Logistics Solutions",

    // Countries Section
    countries_title: "Country <span>Incorporation Guide</span>",
    countries_subtitle: "Compare corporate tax rates, setup timelines, and investor visa requirements across Asian economies.",
    btn_view_details: "View Details",
    country_hk_title: "Hong Kong Setup",
    country_hk_desc: "Tax Rate: 8.25% ~ 16.5%<br>Timeline: 1-2 days<br>Asian Financial Business Hub",
    country_sg_title: "Singapore Setup",
    country_sg_desc: "Tax Rate: 17% (New startup cuts)<br>Timeline: 1-2 days<br>Global Tech & Trade Core",
    country_vn_title: "Vietnam Setup",
    country_vn_desc: "Tax Rate: 20% (Mfg incentives)<br>Timeline: 3-4 weeks<br>Emerging S.E.A Consumer Market",
    country_uz_title: "Uzbekistan Setup",
    country_uz_desc: "Tax Rate: 15% (IT Park free)<br>Timeline: 2 weeks<br>Central Asia Growth Gateway",
    country_tw_title: "Taiwan Setup",
    country_tw_desc: "Tax Rate: 20%<br>Timeline: 2-3 weeks<br>East Asian Precision Tech Core",
    country_my_title: "Malaysia Setup",
    country_my_desc: "Tax Rate: 17% ~ 24%<br>Timeline: 1-2 weeks<br>S.E.A eCommerce Gateway",
    country_ko_title: "South Korea Setup",
    country_ko_desc: "Tax Rate: 9% ~ 24%<br>Timeline: 1-2 weeks<br>Foreign Investment D-8 linked",
    country_ru_title: "Russia Setup",
    country_ru_desc: "Tax Rate: 20%<br>Timeline: 2 weeks<br>Eurasian logistics & trade hub",

    // Brand Story & Media
    brand_story_title: "Since 2015: From eCommerce to Global Business Solutions",
    brand_story_p1: "Boxful has been leading storage and 3PL fulfillment logistics for ecommerce sellers in South Korea, Hong Kong, and Taiwan since 2015. During this journey, we witnessed countless online sellers hesitate or fail their global expansions due to complex incorporation rules, language barriers, marketing skill gaps, and local logistics limitations.",
    brand_story_p2: "To remove these barriers, KOREAJOB24 has significantly expanded its business model. Beyond shipping, we now offer local company formation, virtual office setup, accounting audit agency, influencer marketing, and professional placement. We serve as a unified, one-stop gateway for your successful APAC entry.",
    news_section_title: "Media Coverage & Global Trust",
    news1_title: "Boxful Expands Cross-Border Fulfillment Services",
    news1_desc: "Aims to support import-export businesses through advanced third-party logistics network in Asia...",
    news2_title: "Boxful Enhances Logistics Automation for Smart Warehousing",
    news2_desc: "Announces automated robots and software upgrades to drive smart storage capabilities across regional hubs...",
    news_link_search: "Naver News Search &rarr;",
    news_link_search_google: "Google News Search &rarr;",

    // Employers Form
    employers_title: "Global Business <span>Inquiry & Registration</span>",
    employers_subtitle: "Please fill out the form if you require overseas company formation, virtual office setup, accounting bookkeeping, or marketing campaigns.",
    emp_point1: "Licensed corporate setup and business compliance management",
    emp_point2: "Overseas influencer (KOL) marketing and performance ad buying",
    emp_point3: "Cross-border 3PL fulfillment matching and integrated logistics",
    form_label_company: "Company Name *",
    form_label_workers: "Desired Scope (Incorporation Country or Worker Count) *",
    form_label_contact: "Contact Person Name & Title *",
    form_label_phone: "Phone Number *",
    form_label_email: "Email Address *",
    form_label_details: "Inquiry / Job Details *",
    form_btn_submit: "Submit Request",
    submit_loading: "Submitting...",
    submit_success: "Your request has been submitted successfully! We will contact you soon.",
    submit_error: "An error occurred. Please try again in a few moments.",

    // Marketing Page
    marketing_title: "Global Digital Marketing & Influencer Solutions",
    marketing_subtitle: "KOREAJOB24 drives overseas commercial growth through local influencer collaborations and data-driven performance ads in Vietnam, HK, and Taiwan.",
    mkt_strength_title: "Empowering Local Market Entries",
    mkt_point1_title: "1. Influencer / KOL Campaigns",
    mkt_point1_desc: "Recruiting local TikTok, YouTube, and Instagram creators matching localized buyer trends for viral video reach.",
    mkt_point2_title: "2. Performance Advertising (Meta & Google & TikTok)",
    mkt_point2_desc: "Comprehensive ad accounts administration, cost-per-click optimization, conversion retargeting, and performance reports.",
    mkt_point3_title: "3. eCommerce Operations & Localization",
    mkt_point3_desc: "Listing on Shopee, Lazada, and TikTok Shop, product descriptions translation, and customer service operations.",
    mkt_form_title: "Marketing Registration & Quote",
    mkt_label_country: "Target Country *",
    mkt_label_type: "Service Required *",
    mkt_label_budget: "Monthly Budget *",
    mkt_label_contact: "Company & Contact Info *",
    mkt_label_details: "Product Details & Goals *",
    mkt_btn_submit: "Request Marketing Consulting",

    // Logistics Page
    logistics_title: "Boxful <span>Global Logistics & Fulfillment</span>",
    logistics_subtitle: "KOREAJOB24 partners with Boxful's extensive logistics network across Asia (Korea, Hong Kong, Singapore, Taiwan). We guarantee cost reduction and customized warehousing for international shipping.",
    logistics_strength_title: "Robust Asian Logistics Hubs",
    logistics_strength_desc: "Using Boxful's smart storage and real-time inventory systems, we handle cross-border shipping, warehousing, and parcel packaging for global businesses.",
    quote_form_title: "Logistics Inquiry & Quote",
    logi_label_origin: "Origin *",
    logi_label_dest: "Destination *",
    logi_label_volume: "Est. Monthly Volume *",
    logi_label_contact: "Company & Contact Info *",
    logi_label_details: "Request details & Cargo Type *",
    logi_btn_submit: "Request Logistics Quote",

    // Country Details Page Sub-headers
    guide_title: "Incorporation <span>Detailed Guide</span>",
    btn_back: "&larr; Back to Home",
    th_category: "Category",
    th_value: "Details",
    td_tax_rate: "Corporate Tax Rate",
    td_timeline: "Setup Timeline",
    td_directors: "Directors/Shareholders Requirement",
    td_capital: "Minimum Capital",
    td_visa: "Expatriate Visa Options",
    visa_desc_title: "Employment & Investor Visa Programs",

    // Country values
    uz_desc_p: "Uzbekistan is a prime gateway in Central Asia offering strong human capital and tax-free IT Park incentives.",
    uz_tax_val: "15% (Fully exempt from corporate, income, and VAT inside IT Park)",
    uz_time_val: "7 ~ 14 business days",
    uz_dir_val: "Min 1 Director, 1 Shareholder (No local resident requirement)",
    uz_cap_val: "No minimum (Usually UZS 1,000,000+ recommended)",
    uz_visa_val: "IT Visa, Investor Visa (DT), Employment Visa",
    uz_visa_desc: "IT Park sponsors a specialized IT Visa offering family relocation benefits.",

    tw_desc_p: "Taiwan is a critical global technology corridor connecting high-tech assembly and trade networks.",
    tw_tax_val: "20% (Income under 120,000 TWD is tax-exempt)",
    tw_time_val: "2 ~ 3 weeks (Requires Investment Commission approval)",
    tw_dir_val: "Min 1 Director, 1 Shareholder (100% foreign ownership allowed)",
    tw_cap_val: "No min limit, but TWD 500,000 recommended for smooth registration",
    tw_visa_val: "Taiwan Gold Card, Expatriate/Investor Visa",
    tw_visa_desc: "The Taiwan Employment Gold Card provides flexible residency and work options for skilled talent.",

    my_desc_p: "Malaysia is a regional logistics gate offering stable common-law system for multi-national corporations.",
    my_tax_val: "17% ~ 24% (Concessional rates for qualified SME startups)",
    my_time_val: "5 ~ 10 business days (SSM portal)",
    my_dir_val: "Min 1 Resident Director, 1 Shareholder",
    my_cap_val: "From 1 MYR (Min capital applies for sponsoring foreign work visas)",
    my_visa_val: "Employment Pass (EP Categories I, II, III), DE Rantau Pass",
    my_visa_desc: "One-stop administration for Employment Pass (EP) and DE Rantau pass (digital nomad).",

    hk_desc_p: "Hong Kong is a leading global financial center offering simple taxes and offshore tax exemptions.",
    hk_tax_val: "8.25% ~ 16.5% (Offshore income exempt)",
    hk_time_val: "1 ~ 2 business days",
    hk_dir_val: "Min 1 Director, 1 Shareholder (any nationality), local secretary required",
    hk_cap_val: "No limit (Usually HKD 10,000 registered)",
    hk_visa_val: "Hong Kong Employment Visa, Investment/Expat Visa",
    hk_visa_desc: "Gain employment visa sponsorship through the local corporate entity post-setup.",

    sg_desc_p: "Singapore offers transparent rules and major tax holidays for new technology startups.",
    sg_tax_val: "17% (Up to 75% tax deduction for new corporations)",
    sg_time_val: "1 ~ 2 business days",
    sg_dir_val: "Min 1 Director (Must have 1 resident Director), 1 Shareholder",
    sg_cap_val: "SGD 1 or more",
    sg_visa_val: "Employment Pass (EP), S Pass, EntrePass",
    sg_visa_desc: "EP visa for managers and specialists, and EntrePass for startup founders.",

    vn_desc_p: "Vietnam is a prime manufacturing corridor in South East Asia with abundant young labour.",
    vn_tax_val: "20% (Tax holidays available in designated industrial zones)",
    vn_time_val: "3 ~ 4 weeks (Requires IRC & ERC certificates)",
    vn_dir_val: "Min 1 Resident Representative, 100% foreign ownership allowed",
    vn_cap_val: "No official limit, USD 10,000 recommended",
    vn_visa_val: "Labor Visa (LD), Investment Visa (DT), Work Permit",
    vn_visa_desc: "2-year Labor Visa requires pre-approved Work Permit from labor authorities.",

    ko_desc_p: "South Korea is a tech-driven industrial powerhouse offering attractive investment packages.",
    ko_tax_val: "9% ~ 24% (Progressive structure)",
    ko_time_val: "7 ~ 10 business days",
    ko_dir_val: "Min 1 Director, 1 Auditor (1 Director allowed if capital < 1B KRW)",
    ko_cap_val: "100 KRW (Min 100M KRW required for D-8 foreign investment visa)",
    ko_visa_val: "Foreign Investment Visa (D-8), Professional Visa (E-7)",
    ko_visa_desc: "D-8 Visa for investors putting in at least 100M KRW, and E-7 visa for skilled engineers.",

    ru_desc_p: "Russia is a vast Eurasian trade hub with abundant raw materials and industrial complexes.",
    ru_tax_val: "20% (Regional and sector-specific concessions available)",
    ru_time_val: "10 ~ 14 business days",
    ru_dir_val: "Min 1 Director (Russian citizen or visa holder), 1 Shareholder",
    ru_cap_val: "10,000 RUB",
    ru_visa_val: "Russian Work Visa, Corporate Expatriate Visa",
    ru_visa_desc: "Work visa issued through local corporate invitation letters vetted by Ministry of Interior.",

    footer_desc: "KOREAJOB24 is your global placement and business advisory partner. We bridge premium employment opportunities and corporate setups with trust.",
    footer_contact_title: "Official Inquiry Email"
  },

  ru: {
    // Navigation & Common
    nav_home: "Главная",
    nav_seekers: "Трудоустройство",
    nav_services: "Услуги для бизнеса",
    nav_logistics: "Логистика и фулфилмент",
    nav_marketing: "Маркетинг в Азии",
    nav_countries: "Регистрация компаний",
    nav_media: "СМИ о нас",
    nav_contact: "Контакты",

    // Hero Section
    hero_pill: "✦ С 2015 года · Надежный мост для бизнеса и логистики в Азии",
    hero_title: "Регистрация международного бизнеса и<br/><span>Подбор квалифицированных кадров</span>",
    hero_subtitle: "KOREAJOB24 предоставляет комплексные корпоративные решения: открытие зарубежных компаний, виртуальные офисы, цифровой маркетинг и подбор специалистов.",
    hero_btn_services: "Наши услуги",
    hero_btn_employers: "Связаться с нами",

    // Hero Stats
    stat_years_label: "Опыт работы",
    stat_countries_label: "Сеть хабов в Азии",
    stat_ops_label: "Операций и доставок",
    stat_compliance_label: "Легальность и визы",

    // Section Tags & Headers
    section_tag_career: "Карьера за рубежом",
    section_tag_services: "Корпоративные решения",
    section_tag_apac: "География в Азии",
    section_tag_story: "История и доверие",
    section_tag_media: "СМИ и публикации",
    section_tag_contact: "Партнерство и консультация",

    // Seekers Section
    seekers_title: "Работа <span>за рубежом</span>",
    seekers_subtitle: "Легальное трудоустройство, проверенные работодатели и полная визовая поддержка.",
    card1_title: "Работа в Корее (Korea)",
    card1_desc: "Производственные заводы, складская логистика, сборка, погрузчики, строительные работы, агрофермы (официальные визы E-7, E-9, E-8).",
    card2_title: "Работа в Японии (Japan)",
    card2_desc: "Склады, пищевые фабрики, строительство, сельское хозяйство и теплицы по визам квалифицированных рабочих (SSW).",
    card3_title: "Работа в России (Russia)",
    card3_desc: "Лесозаготовка, строительные объекты, промышленные заводы и агрокомплексы в РФ с надежным трудоустройством.",
    card_btn_apply: "Подать заявку через форму",

    // Services Section
    services_title: "Глобальные <span>бизнес-решения</span>",
    services_subtitle: "Открытие зарубежных филиалов, местный маркетинг и международная логистика 3PL.",
    service1_title: "Открытие компаний & Виртуальный офис",
    service1_desc: "Регистрация юридических лиц в Гонконге, Сингапуре, Вьетнаме, открытие счетов и оформление рабочих виз под ключ.",
    service_btn_countries: "Справочник по странам",

    service2_title_mkt: "Глобальный маркетинг & Инфлюенсеры",
    service2_desc_mkt: "Инфлюенс-маркетинг (KOL/KOC) в TikTok и YouTube, перформанс-реклама в Meta и Google по всей Азии.",
    service_btn_mkt: "Маркетинговые услуги",

    service3_title_logi: "Международная логистика & Фулфилмент",
    service3_desc_logi: "Собственная складская сеть Boxful в Азии: надежное хранение, комплектация и трансграничная доставка товаров.",
    service_btn_logi: "Логистические услуги",

    // Countries Section
    countries_title: "Руководство по <span>регистрации бизнеса</span>",
    countries_subtitle: "Сравните налоговые ставки, сроки открытия и визовые требования в странах Азии.",
    btn_view_details: "Подробнее",
    country_hk_title: "Бизнес в Гонконге",
    country_hk_desc: "Налог: 8.25% ~ 16.5%<br>Срок: 1-2 дня<br>Финансовый хаб Азии",
    country_sg_title: "Бизнес в Сингапуре",
    country_sg_desc: "Налог: 17% (льготы стартапам)<br>Срок: 1-2 дня<br>Центр технологий и торговли",
    country_vn_title: "Бизнес во Вьетнаме",
    country_vn_desc: "Налог: 20% (льготы производству)<br>Срок: 3-4 недели<br>Быстрорастущий рынок",
    country_uz_title: "Бизнес в Узбекистане",
    country_uz_desc: "Налог: 15% (0% в IT Park)<br>Срок: 2 недели<br>Центральноазиатский хаб",
    country_tw_title: "Бизнес на Тайване",
    country_tw_desc: "Налог: 20%<br>Срок: 2-3 недели<br>Мировой центр высоких технологий",
    country_my_title: "Бизнес в Малайзии",
    country_my_desc: "Налог: 17% ~ 24%<br>Срок: 1-2 недели<br>Логистические ворота ЮВА",
    country_ko_title: "Бизнес в Южной Корее",
    country_ko_desc: "Налог: 9% ~ 24%<br>Срок: 1-2 недели<br>Инвестиционная виза D-8",
    country_ru_title: "Бизнес в России",
    country_ru_desc: "Налог: 20%<br>Срок: 2 недели<br>Евразийский торговый рынок",

    // Brand Story & Media
    brand_story_title: "С 2015 года: От фулфилмента к глобальным бизнес-решениям",
    brand_story_p1: "С 2015 года компания Boxful является лидером в сфере хранения и 3PL-фулфилмента для селлеров в Южной Корее, Гонконге и на Тайване. За годы работы мы увидели, с какими барьерами сталкиваются экспортеры: незнание местных законов, языковой барьер, сложности таргетированного маркетинга и нехватка надежных кадров.",
    brand_story_p2: "Чтобы устранить эти препятствия, мы расширили спектр услуг в рамках KOREAJOB24. Мы предлагаем комплексную экосистему: открытие юрлиц за рубежом, бухгалтерское сопровождение, продвижение через лидеров мнений и мощную трансграничную логистику.",
    news_section_title: "Публикации в СМИ и доверие партнеров",
    news1_title: "Boxful расширяет трансграничные логистические сервисы",
    news1_desc: "Развитие собственной инфраструктуры 3PL в странах Азии для поддержки импортеров и экспортеров...",
    news2_title: "Лидер смарт-складов Boxful внедряет автоматизацию логистики",
    news2_desc: "Внедрение автоматизированных решений и программного обеспечения для складских хабов...",
    news_link_search: "Поиск новостей на Naver &rarr;",
    news_link_search_google: "Поиск новостей в Google &rarr;",

    // Employers Form
    employers_title: "Заявка на <span>корпоративные услуги</span>",
    employers_subtitle: "Оставьте заявку на открытие компании, маркетинговую кампанию или логистическое обслуживание.",
    emp_point1: "Официальная регистрация бизнеса и соблюдение местного законодательства",
    emp_point2: "Продвижение через локальных инфлюенсеров и контекстная реклама",
    emp_point3: "Интеграция со складской сетью Boxful 3PL и управление цепочками поставок",
    form_label_company: "Название компании / организации *",
    form_label_workers: "Интересующая услуга (страна / кол-во персонала) *",
    form_label_contact: "Контактное лицо (ФИО и должность) *",
    form_label_phone: "Номер телефона *",
    form_label_email: "Электронная почта *",
    form_label_details: "Детали запроса / Требования к персоналу *",
    form_btn_submit: "Отправить заявку",
    submit_loading: "Отправка...",
    submit_success: "Заявка успешно отправлена! Наш специалист свяжется с вами в ближайшее время.",
    submit_error: "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.",

    // Marketing Page
    marketing_title: "Маркетинг в Азии & Инфлюенс-кампании",
    marketing_subtitle: "KOREAJOB24 помогает масштабировать продажи во Вьетнаме, Гонконге, Тайване и ЮВА с помощью лидеров мнений и перформанс-рекламы.",
    mkt_strength_title: "Эффективный маркетинг на рынках Азии",
    mkt_point1_title: "1. Инфлюенсеры и блогеры (KOL / KOC)",
    mkt_point1_desc: "Подбор топовых и микро-инфлюенсеров в TikTok, YouTube и Instagram во Вьетнаме, Таиланде, Тайване для вирусного охвата.",
    mkt_point2_title: "2. Перформанс-реклама (Meta, Google, TikTok)",
    mkt_point2_desc: "Настройка рекламных кабинетов, оптимизация стоимости клика и конверсий, увеличение окупаемости инвестиций (ROAS).",
    mkt_point3_title: "3. Локализация и выход на маркетплейсы",
    mkt_point3_desc: "Регистрация и ведение магазинов на Shopee, Lazada, TikTok Shop, перевод карточек товаров и поддержка клиентов.",
    mkt_form_title: "Заявка на маркетинговую консультацию",
    mkt_label_country: "Целевая страна *",
    mkt_label_type: "Необходимые услуги *",
    mkt_label_budget: "Ежемесячный бюджет *",
    mkt_label_contact: "Компания и контактное лицо *",
    mkt_label_details: "Описание продукта и цели кампании *",
    mkt_btn_submit: "Запросить маркетинговую стратегию",

    // Logistics Page
    logistics_title: "Boxful <span>Международная логистика & Фулфилмент</span>",
    logistics_subtitle: "KOREAJOB24 использует логистическую сеть Boxful в Корее, Гонконге, Сингапуре и Тайване для оптимизации расходов на доставку и хранение.",
    logistics_strength_title: "Надежные логистические хабы в Азии",
    logistics_strength_desc: "Современные смарт-склады, автоматизированный учет остатков, трансграничная доставка и надежная упаковка для селлеров.",
    quote_form_title: "Запрос тарифов на логистику",
    logi_label_origin: "Пункт отправления *",
    logi_label_dest: "Пункт назначения *",
    logi_label_volume: "Примерный объем в месяц *",
    logi_label_contact: "Компания и контактные данные *",
    logi_label_details: "Тип груза и требуемые услуги *",
    logi_btn_submit: "Получить расчет стоимости",

    // Country Details Page Sub-headers
    guide_title: "Руководство по <span>регистрации бизнеса</span>",
    btn_back: "&larr; Вернуться на главную",
    th_category: "Категория",
    th_value: "Описание",
    td_tax_rate: "Ставка налога на прибыль",
    td_timeline: "Срок регистрации",
    td_directors: "Требования к директорам/акционерам",
    td_capital: "Минимальный капитал",
    td_visa: "Типы рабочих и инвесторских виз",
    visa_desc_title: "Программы рабочих и инвесторских виз",

    // Country values
    uz_desc_p: "Узбекистан — ключевой центр в Центральной Азии с налоговыми льготами в IT Park и квалифицированными кадрами.",
    uz_tax_val: "15% (0% налога на прибыль, НДС и НДФЛ для резидентов IT Park)",
    uz_time_val: "7 ~ 14 рабочих дней",
    uz_dir_val: "Мин. 1 директор, 1 акционер (без требований к резидентству)",
    uz_cap_val: "Без ограничений (обычно от 1 000 000 UZS)",
    uz_visa_val: "IT Visa, Инвесторская виза (DT), Рабочая виза",
    uz_visa_desc: "Специальная IT Visa дает право на релокацию с семьей и упрощенное продление.",

    tw_desc_p: "Тайвань — мировой технологический хаб и ключевой торговый коридор в Восточной Азии.",
    tw_tax_val: "20% (доход до 120 000 TWD не облагается налогом)",
    tw_time_val: "2 ~ 3 недели (требуется одобрение Инвесткомиссии)",
    tw_dir_val: "Мин. 1 директор, 1 акционер (100% иностранное владение)",
    tw_cap_val: "Без мин. лимита (рекомендуется от 500 000 TWD)",
    tw_visa_val: "Золотая карта Тайваня (Gold Card), Инвесторская виза",
    tw_visa_desc: "Taiwan Employment Gold Card дает гибкое право на проживание и работу для специалистов.",

    my_desc_p: "Малайзия — логистические ворота ЮВА со стабильной правовой системой общего права.",
    my_tax_val: "17% ~ 24% (льготы для квалифицированных стартапов и МСП)",
    my_time_val: "5 ~ 10 рабочих дней (портал SSM)",
    my_dir_val: "Мин. 1 местный директор-резидент, 1 акционер",
    my_cap_val: "От 1 MYR (для визового спонсорства действуют отраслевые минимумы)",
    my_visa_val: "Employment Pass (EP I, II, III), виза номада DE Rantau",
    my_visa_desc: "Полная поддержка в получении Employment Pass и визы цифрового кочевника DE Rantau.",

    hk_desc_p: "Гонконг — ведущий мировой финансовый центр с простой налоговой системой и оффшорным безналоговым статусом.",
    hk_tax_val: "8.25% ~ 16.5% (доходы из зарубежных источников освобождены)",
    hk_time_val: "1 ~ 2 рабочих дня",
    hk_dir_val: "Мин. 1 директор, 1 акционер (любое гражданство), местный секретарь",
    hk_cap_val: "Без лимита (стандартно 10 000 HKD)",
    hk_visa_val: "Гонконгская рабочая виза (Employment Visa), виза инвестора",
    hk_visa_desc: "Возможность получения рабочей визы через зарегистрированную местную компанию.",

    sg_desc_p: "Сингапур — прозрачное регулирование и масштабные налоговые каникулы для инновационных стартапов.",
    sg_tax_val: "17% (налоговый вычет до 75% для новых компаний)",
    sg_time_val: "1 ~ 2 рабочих дня",
    sg_dir_val: "Мин. 1 директор-резидент Сингапура, 1 акционер",
    sg_cap_val: "От 1 SGD",
    sg_visa_val: "Employment Pass (EP), S Pass, EntrePass",
    sg_visa_desc: "Визы EP для руководителей и специалистов, а также EntrePass для основателей стартапов.",

    vn_desc_p: "Вьетнам — крупный производственный центр Юго-Восточной Азии с растущим потребительским рынком.",
    vn_tax_val: "20% (налоговые каникулы в промышленных зонах)",
    vn_time_val: "3 ~ 4 недели (сертификаты IRC и ERC)",
    vn_dir_val: "Мин. 1 законный представитель-резидент, 100% иностранный капитал",
    vn_cap_val: "Официального минимума нет (рекомендуется от 10 000 USD)",
    vn_visa_val: "Рабочая виза (LD), виза инвестора (DT), Work Permit",
    vn_visa_desc: "Рабочая виза на 2 года оформляется после одобрения разрешения на работу (Work Permit).",

    ko_desc_p: "Южная Корея — высокотехнологичный промышленный лидер с привлекательными инвестиционными программами.",
    ko_tax_val: "9% ~ 24% (прогрессивная шкала)",
    ko_time_val: "7 ~ 10 рабочих дней",
    ko_dir_val: "Мин. 1 директор, 1 аудитор (при капитале до 1 млрд вон — 1 директор)",
    ko_cap_val: "От 100 вон (от 100 млн вон для инвесторской визы D-8)",
    ko_visa_val: "Инвестиционная виза (D-8), профессиональная виза (E-7)",
    ko_visa_desc: "Виза D-8 для иностранных инвесторов, виза E-7 для квалифицированных инженеров и специалистов.",

    ru_desc_p: "Россия — обширный евразийский рынок с богатыми ресурсами и развитой логистикой.",
    ru_tax_val: "20% (региональные и отраслевые льготы)",
    ru_time_val: "10 ~ 14 рабочих дней",
    ru_dir_val: "Мин. 1 директор (гражданин РФ или обладатель визы), 1 акционер",
    ru_cap_val: "10 000 RUB",
    ru_visa_val: "Российская рабочая виза, корпоративная виза",
    ru_visa_desc: "Оформление рабочих виз через официальные приглашения МВД РФ.",

    footer_desc: "KOREAJOB24 — ваш надежный партнер по международному найму и развитию бизнеса в Азии. Гарантируем прозрачность и соблюдение законов.",
    footer_contact_title: "Официальный email для запросов"
  },

  vi: {
    // Navigation & Common
    nav_home: "Trang chủ",
    nav_seekers: "Tìm việc làm",
    nav_services: "Dịch vụ Doanh nghiệp",
    nav_logistics: "Logistics & Kho vận",
    nav_marketing: "Tiếp thị Châu Á",
    nav_countries: "Thành lập Công ty",
    nav_media: "Báo chí & Truyền thông",
    nav_contact: "Liên hệ",

    // Hero Section
    hero_pill: "✦ Từ năm 2015 · Cầu nối Doanh nghiệp & Logistics Toàn diện tại Châu Á",
    hero_title: "Thành lập doanh nghiệp quốc tế &<br/><span>Giải pháp cung ứng nhân lực chất lượng cao</span>",
    hero_subtitle: "KOREAJOB24 cung cấp dịch vụ doanh nghiệp trọn gói: mở công ty tại nước ngoài, văn phòng ảo, tiếp thị số địa phương và tuyển dụng nhân sự chuyên nghiệp.",
    hero_btn_services: "Khám phá dịch vụ",
    hero_btn_employers: "Hợp tác & Liên hệ",

    // Hero Stats
    stat_years_label: "Kinh nghiệm vận hành",
    stat_countries_label: "Mạng lưới đối tác Châu Á",
    stat_ops_label: "Đơn hàng & Vận hành",
    stat_compliance_label: "Tuân thủ pháp lý & Visa",

    // Section Tags & Headers
    section_tag_career: "Cơ hội việc làm quốc tế",
    section_tag_services: "Giải pháp doanh nghiệp",
    section_tag_apac: "Thị trường Châu Á",
    section_tag_story: "Hành trình & Uy tín",
    section_tag_media: "Báo chí & Truyền thông",
    section_tag_contact: "Liên hệ & Tư vấn",

    // Seekers Section
    seekers_title: "Cơ hội việc làm <span>nước ngoài</span>",
    seekers_subtitle: "Kết nối việc làm uy tín, visa hợp pháp và hỗ trợ ổn định cuộc sống tại nước ngoài.",
    card1_title: "Việc làm tại Hàn Quốc (Korea)",
    card1_desc: "Nhà máy sản xuất, kho vận đóng gói/lái xe nâng, xây dựng, thu hoạch nông nghiệp kỹ thuật cao (Visa hợp pháp E-7, E-9, E-8).",
    card2_title: "Việc làm tại Nhật Bản (Japan)",
    card2_desc: "Đóng gói bốc xếp kho bãi, chế biến thực phẩm, xây dựng hạ tầng, nông nghiệp nhà kính theo diện Kỹ năng đặc định (SSW).",
    card3_title: "Việc làm tại Nga (Russia)",
    card3_desc: "Khai thác chế biến gỗ, xây dựng công trình, nhà máy sản xuất và trang trại nông nghiệp tại các vùng trọng điểm của Nga.",
    card_btn_apply: "Ứng tuyển qua Google Form",

    // Services Section
    services_title: "Giải pháp <span>Doanh nghiệp Toàn cầu</span>",
    services_subtitle: "Hỗ trợ toàn diện từ thành lập pháp nhân, xúc tiến tiếp thị đến kho vận logistics 3PL.",
    service1_title: "Thành lập công ty & Văn phòng ảo",
    service1_desc: "Thành lập pháp nhân tại Hồng Kông, Singapore, Việt Nam, mở tài khoản ngân hàng và bảo lãnh visa nhân sự trọn gói.",
    service_btn_countries: "Xem cẩm nang quốc gia",

    service2_title_mkt: "Tiếp thị số & KOLs Quốc tế",
    service2_desc_mkt: "Kết nối Influencer/KOL TikTok, YouTube tại bản địa và chạy quảng cáo hiệu suất Meta, Google trên toàn Châu Á.",
    service_btn_mkt: "Xem dịch vụ Marketing",

    service3_title_logi: "Logistics & Fulfillment Quốc tế",
    service3_desc_logi: "Mạng lưới kho bãi Boxful tại Châu Á: lưu kho thông minh, đóng gói chuyên nghiệp và vận chuyển xuyên biên giới.",
    service_btn_logi: "Xem dịch vụ Logistics",

    // Countries Section
    countries_title: "Cẩm nang <span>Thành lập Doanh nghiệp</span>",
    countries_subtitle: "So sánh thuế suất, thời gian hoàn thành và thủ tục visa đầu tư tại các nước Châu Á.",
    btn_view_details: "Xem chi tiết",
    country_hk_title: "Mở công ty tại Hồng Kông",
    country_hk_desc: "Thuế: 8.25% ~ 16.5%<br>Thời gian: 1-2 ngày<br>Trung tâm tài chính Châu Á",
    country_sg_title: "Mở công ty tại Singapore",
    country_sg_desc: "Thuế: 17% (ưu đãi startup)<br>Thời gian: 1-2 ngày<br>Trung tâm công nghệ & thương mại",
    country_vn_title: "Mở công ty tại Việt Nam",
    country_vn_desc: "Thuế: 20% (ưu đãi sản xuất)<br>Thời gian: 3-4 tuần<br>Thị trường tiêu dùng năng động",
    country_uz_title: "Mở công ty tại Uzbekistan",
    country_uz_desc: "Thuế: 15% (0% tại IT Park)<br>Thời gian: 2 tuần<br>Cửa ngõ Trung Á",
    country_tw_title: "Mở công ty tại Đài Loan",
    country_tw_desc: "Thuế: 20%<br>Thời gian: 2-3 tuần<br>Trung tâm công nghệ cao",
    country_my_title: "Mở công ty tại Malaysia",
    country_my_desc: "Thuế: 17% ~ 24%<br>Thời gian: 1-2 tuần<br>Cửa ngõ TMĐT Đông Nam Á",
    country_ko_title: "Mở công ty tại Hàn Quốc",
    country_ko_desc: "Thuế: 9% ~ 24%<br>Thời gian: 1-2 tuần<br>Hỗ trợ visa đầu tư D-8",
    country_ru_title: "Mở công ty tại Nga",
    country_ru_desc: "Thuế: 20%<br>Thời gian: 2 tuần<br>Thị trường Á-Âu rộng lớn",

    // Brand Story & Media
    brand_story_title: "Từ năm 2015: Từ Fulfillment đến Giải pháp Doanh nghiệp Toàn cầu",
    brand_story_p1: "Từ năm 2015, Boxful đã tiên phong cung cấp dịch vụ lưu kho và fulfillment 3PL cho các nhà bán hàng thương mại điện tử tại Hàn Quốc, Hồng Kông và Đài Loan. Chúng tôi thấu hiểu những rào cản lớn mà doanh nghiệp gặp phải khi mở rộng ra nước ngoài: quy định pháp lý phức tạp, rào cản ngôn ngữ, tiếp thị thiếu hiệu quả và khó khăn trong tìm kiếm nhân sự đáng tin cậy.",
    brand_story_p2: "Để giải quyết triệt để vấn đề này, KOREAJOB24 đã mở rộng mô hình: không chỉ dừng lại ở kho vận, mà còn hỗ trợ thành lập công ty, kế toán thuế, marketing người nổi tiếng và cung ứng nhân lực chất lượng cao, trở thành đối tác tin cậy hàng đầu tại Châu Á.",
    news_section_title: "Báo chí đưa tin & Uy tín quốc tế",
    news1_title: "Boxful mở rộng mạnh mẽ dịch vụ Fulfillment xuyên biên giới",
    news1_desc: "Phát triển mạng lưới logistics 3PL chuyên nghiệp phục vụ các doanh nghiệp xuất nhập khẩu tại Châu Á...",
    news2_title: "Boxful tăng cường tự động hóa hệ thống kho bãi thông minh",
    news2_desc: "Ứng dụng robot và phần mềm quản lý kho hiện đại, nâng cao năng lực cạnh tranh quốc tế...",
    news_link_search: "Tìm kiếm trên Naver &rarr;",
    news_link_search_google: "Tìm kiếm trên Google &rarr;",

    // Employers Form
    employers_title: "Đăng ký tư vấn & <span>Dịch vụ Doanh nghiệp</span>",
    employers_subtitle: "Vui lòng điền thông tin để được hỗ trợ thành lập công ty, chiến dịch marketing hoặc vận hành logistics.",
    emp_point1: "Thành lập công ty hợp pháp và tuân thủ tuyệt đối quy định sở tại",
    emp_point2: "Booking KOL/KOC bản địa và tối ưu hóa chi phí quảng cáo",
    emp_point3: "Kết nối hệ thống kho vận 3PL Boxful và quản lý chuỗi cung ứng",
    form_label_company: "Tên công ty / Doanh nghiệp *",
    form_label_workers: "Nhu cầu (Quốc gia thành lập hoặc Số lượng nhân sự) *",
    form_label_contact: "Họ tên & Chức vụ người liên hệ *",
    form_label_phone: "Số điện thoại liên hệ *",
    form_label_email: "Địa chỉ Email *",
    form_label_details: "Chi tiết yêu cầu / Yêu cầu nhân lực *",
    form_btn_submit: "Gửi yêu cầu tư vấn",
    submit_loading: "Đang gửi...",
    submit_success: "Gửi yêu cầu thành công! Chuyên viên của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    submit_error: "Đã xảy ra lỗi khi gửi. Vui lòng thử lại sau ít phút.",

    // Marketing Page
    marketing_title: "Giải pháp Tiếp thị Số & KOLs Quốc tế",
    marketing_subtitle: "KOREAJOB24 thúc đẩy doanh số xuất khẩu tại Việt Nam, Đông Nam Á, Hồng Kông và Đài Loan thông qua mạng lưới KOL bản địa và quảng cáo hiệu suất.",
    mkt_strength_title: "Chiến lược Bản địa hóa Hiệu quả",
    mkt_point1_title: "1. Tiếp thị qua KOL / KOC bản địa",
    mkt_point1_desc: "Tuyển chọn và kết nối nhà sáng tạo nội dung TikTok, YouTube, Instagram tại Việt Nam, Thái Lan, Đài Loan phù hợp thị hiếu địa phương.",
    mkt_point2_title: "2. Quảng cáo Hiệu suất (Meta, Google, TikTok)",
    mkt_point2_desc: "Tối ưu hóa chi phí trên mỗi lượt nhấp và chuyển đổi, thiết lập chiến dịch bài bản giúp tối đa hóa doanh thu trên chi phí (ROAS).",
    mkt_point3_title: "3. Vận hành Sàn TMĐT & Bản địa hóa",
    mkt_point3_desc: "Đăng ký và vận hành gian hàng Shopee, Lazada, TikTok Shop, dịch thuật chi tiết sản phẩm và chăm sóc khách hàng bản địa.",
    mkt_form_title: "Đăng ký tư vấn Marketing Quốc tế",
    mkt_label_country: "Thị trường mục tiêu *",
    mkt_label_type: "Dịch vụ yêu cầu *",
    mkt_label_budget: "Ngân sách dự kiến hàng tháng *",
    mkt_label_contact: "Tên công ty & Thông tin liên hệ *",
    mkt_label_details: "Mô tả sản phẩm & Mục tiêu chiến dịch *",
    mkt_btn_submit: "Yêu cầu tư vấn chiến lược",

    // Logistics Page
    logistics_title: "Boxful <span>Logistics & Fulfillment Quốc tế</span>",
    logistics_subtitle: "KOREAJOB24 hợp tác cùng mạng lưới kho vận rộng khắp của Boxful tại Hàn Quốc, Hồng Kông, Singapore và Đài Loan giúp tối ưu chi phí và thời gian giao hàng.",
    logistics_strength_title: "Trung tâm Kho vận Hiện đại tại Châu Á",
    logistics_strength_desc: "Hệ thống quản lý kho thông minh, kiểm soát tồn kho thời gian thực, xử lý đơn hàng và đóng gói chuẩn quốc tế cho doanh nghiệp xuất khẩu.",
    quote_form_title: "Yêu cầu Báo giá Dịch vụ Kho vận",
    logi_label_origin: "Điểm xuất phát *",
    logi_label_dest: "Điểm đến *",
    logi_label_volume: "Sản lượng ước tính hàng tháng *",
    logi_label_contact: "Tên công ty & Người liên hệ *",
    logi_label_details: "Yêu cầu chi tiết & Loại hàng hóa *",
    logi_btn_submit: "Nhận báo giá ngay",

    // Country Details Page Sub-headers
    guide_title: "Cẩm nang <span>Thành lập Doanh nghiệp</span>",
    btn_back: "&larr; Quay lại Trang chủ",
    th_category: "Danh mục",
    th_value: "Chi tiết",
    td_tax_rate: "Thuế suất TNDN",
    td_timeline: "Thời gian hoàn thành",
    td_directors: "Yêu cầu Giám đốc / Cổ đông",
    td_capital: "Vốn điều lệ tối thiểu",
    td_visa: "Các loại Visa định cư & Làm việc",
    visa_desc_title: "Chương trình Visa Làm việc & Đầu tư",

    // Country values
    uz_desc_p: "Uzbekistan là cửa ngõ chiến lược tại Trung Á với nhiều ưu đãi thuế tại IT Park và nguồn nhân lực dồi dào.",
    uz_tax_val: "15% (Miễn 100% thuế TNDN, TNCN và VAT cho doanh nghiệp IT Park)",
    uz_time_val: "7 ~ 14 ngày làm việc",
    uz_dir_val: "Tối thiểu 1 giám đốc, 1 cổ đông (không yêu cầu thường trú)",
    uz_cap_val: "Không quy định (khuyến nghị từ 1.000.000 UZS)",
    uz_visa_val: "IT Visa, Visa Đầu tư (DT), Visa Lao động",
    uz_visa_desc: "Doanh nghiệp IT Park bảo lãnh IT Visa với nhiều quyền lợi bảo lãnh gia đình.",

    tw_desc_p: "Đài Loan là trung tâm công nghệ bán dẫn hàng đầu và cửa ngõ giao thương chiến lược tại Đông Á.",
    tw_tax_val: "20% (Thu nhập dưới 120.000 TWD được miễn thuế)",
    tw_time_val: "2 ~ 3 tuần (Cần phê duyệt của Ủy ban Đầu tư)",
    tw_dir_val: "Tối thiểu 1 giám đốc, 1 cổ đông (100% sở hữu nước ngoài)",
    tw_cap_val: "Không giới hạn tối thiểu (khuyến nghị từ 500.000 TWD)",
    tw_visa_val: "Thẻ Vàng Đài Loan (Gold Card), Visa Đầu tư",
    tw_visa_desc: "Thẻ Vàng Việc làm Đài Loan mang lại quyền cư trú và làm việc linh hoạt cho chuyên gia.",

    my_desc_p: "Malaysia là trung tâm logistics và thương mại điện tử với hệ thống pháp luật minh bạch tại Đông Nam Á.",
    my_tax_val: "17% ~ 24% (Ưu đãi đặc biệt cho doanh nghiệp vừa và nhỏ mới thành lập)",
    my_time_val: "5 ~ 10 ngày làm việc (Đăng ký qua cổng SSM)",
    my_dir_val: "Tối thiểu 1 giám đốc thường trú tại Malaysia, 1 cổ đông",
    my_cap_val: "Từ 1 MYR (Áp dụng mức vốn tối thiểu riêng khi bảo lãnh visa lao động)",
    my_visa_val: "Employment Pass (EP I, II, III), DE Rantau Pass",
    my_visa_desc: "Hỗ trợ trọn gói xin Employment Pass cho nhân sự và DE Rantau cho chuyên gia làm việc từ xa.",

    hk_desc_p: "Hồng Kông là trung tâm tài chính hàng đầu thế giới với chính sách thuế đơn giản và miễn thuế ngoài lãnh thổ.",
    hk_tax_val: "8.25% ~ 16.5% (Miễn thuế cho thu nhập phát sinh ngoài Hồng Kông)",
    hk_time_val: "1 ~ 2 ngày làm việc",
    hk_dir_val: "Tối thiểu 1 giám đốc, 1 cổ đông (mọi quốc tịch), cần thư ký bản địa",
    hk_cap_val: "Không giới hạn (thường đăng ký 10.000 HKD)",
    hk_visa_val: "Visa Làm việc Hồng Kông (Employment Visa), Visa Đầu tư",
    hk_visa_desc: "Được bảo lãnh visa lao động hoặc định cư thông qua pháp nhân đã thành lập.",

    sg_desc_p: "Singapore có môi trường kinh doanh minh bạch và nhiều chính sách ưu đãi thuế vượt trội cho startup.",
    sg_tax_val: "17% (Miễn giảm thuế lên tới 75% cho doanh nghiệp mới)",
    sg_time_val: "1 ~ 2 ngày làm việc",
    sg_dir_val: "Tối thiểu 1 giám đốc thường trú tại Singapore, 1 cổ đông",
    sg_cap_val: "Từ 1 SGD",
    sg_visa_val: "Employment Pass (EP), S Pass, EntrePass",
    sg_visa_desc: "Cấp EP cho quản lý cấp cao và chuyên gia, EntrePass cho nhà sáng lập startup.",

    vn_desc_p: "Việt Nam là trung tâm sản xuất năng động tại Đông Nam Á với nguồn lao động trẻ và dồi dào.",
    vn_tax_val: "20% (Ưu đãi miễn giảm thuế tại các khu công nghiệp trọng điểm)",
    vn_time_val: "3 ~ 4 tuần (Cấp Giấy chứng nhận Đăng ký Đầu tư IRC và ERC)",
    vn_dir_val: "Tối thiểu 1 người đại diện pháp luật thường trú, 100% vốn nước ngoài",
    vn_cap_val: "Không quy định mức tối thiểu (khuyến nghị từ 10.000 USD)",
    vn_visa_val: "Visa Lao động (LĐ), Visa Đầu tư (ĐT), Giấy phép lao động (Work Permit)",
    vn_visa_desc: "Visa Lao động 2 năm yêu cầu phê duyệt Giấy phép lao động từ cơ quan quản lý.",

    ko_desc_p: "Hàn Quốc sở hữu nền công nghiệp kỹ thuật cao và nhiều gói hỗ trợ đầu tư nước ngoài hấp dẫn.",
    ko_tax_val: "9% ~ 24% (Thuế suất lũy tiến)",
    ko_time_val: "7 ~ 10 ngày làm việc",
    ko_dir_val: "Tối thiểu 1 giám đốc, 1 kiểm soát viên (vốn dưới 1 tỷ KRW chỉ cần 1 giám đốc)",
    ko_cap_val: "Từ 100 KRW (Tối thiểu 100 triệu KRW để xin Visa Đầu tư D-8)",
    ko_visa_val: "Visa Đầu tư (D-8), Visa Chuyên gia Kỹ thuật (E-7)",
    ko_visa_desc: "Visa D-8 cho nhà đầu tư nước ngoài, Visa E-7 cho kỹ sư và chuyên gia có tay nghề.",

    ru_desc_p: "Nga là thị trường liên lục địa Á-Âu rộng lớn với nguồn tài nguyên dồi dào và mạng lưới sản xuất quy mô.",
    ru_tax_val: "20% (Nhiều chính sách ưu đãi theo vùng và ngành công nghiệp)",
    ru_time_val: "10 ~ 14 ngày làm việc",
    ru_dir_val: "Tối thiểu 1 giám đốc (công dân Nga hoặc có visa hợp lệ), 1 cổ đông",
    ru_cap_val: "10.000 RUB",
    ru_visa_val: "Visa Lao động Nga (Work Visa), Visa Doanh nghiệp",
    ru_visa_desc: "Cấp thư mời visa chính thức thông qua sự phê duyệt của Bộ Nội vụ Nga.",

    footer_desc: "KOREAJOB24 là đối tác cung ứng nhân lực và tư vấn thành lập doanh nghiệp quốc tế hàng đầu. Chúng tôi cam kết uy tín và pháp lý vững chắc.",
    footer_contact_title: "Email liên hệ chính thức"
  }
};

let currentLang = 'ko';

// Page Title & Meta SEO mapping per language
const seoTitles = {
  ko: "KOREAJOB24 - 글로벌 비즈니스 설립, 해외 취업 및 마케팅·물류 솔루션",
  en: "KOREAJOB24 - Global Incorporation, International Placement, Marketing & Logistics Solutions",
  ru: "KOREAJOB24 - Регистрация бизнеса за рубежом, трудоустройство, маркетинг и логистика",
  vi: "KOREAJOB24 - Thành lập công ty quốc tế, việc làm nước ngoài, tiếp thị & logistics"
};

const seoDescriptions = {
  ko: "KOREAJOB24는 해외 법인 설립, 비즈니스 비자 발급, 아시아 현지 인플루언서 마케팅, 박스풀 3PL 풀필먼트 물류 및 기능직/IT 해외 취업 매칭을 원스톱으로 제공합니다.",
  en: "KOREAJOB24 provides one-stop solutions for global company incorporation, work visa assistance, Asian influencer marketing, Boxful 3PL logistics, and international recruitment.",
  ru: "KOREAJOB24 — открытие зарубежных компаний, визовая поддержка, инфлюенс-маркетинг в Азии, 3PL-фулфилмент Boxful и международное трудоустройство под ключ.",
  vi: "KOREAJOB24 cung cấp dịch vụ thành lập doanh nghiệp quốc tế, visa lao động, tiếp thị KOL bản địa, kho vận 3PL Boxful và cung ứng nhân lực chuyên nghiệp."
};

// Switch language function
window.switchLanguage = function(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  
  // Set html lang attribute
  document.documentElement.lang = lang;

  // Dynamic SEO meta update
  if (seoTitles[lang]) {
    document.title = seoTitles[lang];
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && seoDescriptions[lang]) {
    metaDesc.setAttribute("content", seoDescriptions[lang]);
  }
  
  // Update active button state
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('onclick').includes(lang)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Translate elements with data-lang-key attribute
  const elements = document.querySelectorAll('[data-lang-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Translate form input placeholders
  const placeholders = {
    companyName: {
      ko: '회사명 / 기관명 입력',
      en: 'Enter Company Name',
      ru: 'Название компании / организации',
      vi: 'Nhập tên công ty / doanh nghiệp'
    },
    workersCount: {
      ko: '베트남 법인 설립 / 10명 등 기재',
      en: 'Vietnam Corp / 10 Workers etc.',
      ru: 'Регистрация во Вьетнаме / 10 сотрудников',
      vi: 'Mở công ty tại VN / Tuyển 10 nhân sự...'
    },
    contactPerson: {
      ko: '홍길동 팀장',
      en: 'John Doe, Manager',
      ru: 'Иван Иванов, директор',
      vi: 'Nguyễn Văn A, Trưởng phòng'
    },
    contactPhone: {
      ko: '+82-10-1234-5678',
      en: '+82-10-1234-5678',
      ru: '+7-999-123-4567',
      vi: '+84-90-123-4567'
    },
    contactEmail: {
      ko: 'employer@koreajob24.com',
      en: 'employer@koreajob24.com',
      ru: 'employer@koreajob24.com',
      vi: 'employer@koreajob24.com'
    },
    jobDescription: {
      ko: '공장 생산직, 물류창고 포장/적재 기사, 건설노무, 농가 수확 등 직무 요구 상세 내용...',
      en: 'Factory workers, warehouse pack/loaders, forklift drivers, construction labor, farm harvest details...',
      ru: 'Заводские рабочие, упаковщики на складах, строители, сбор урожая на фермах и т.д.',
      vi: 'Công nhân nhà máy, bốc xếp kho vận, thợ công trường, thu hoạch nông sản...'
    },
    
    // Logistics placeholders
    logiOrigin: {
      ko: '예: 한국 서울 (Seoul, Korea)',
      en: 'e.g. Seoul, Korea',
      ru: 'напр.: Сеул, Южная Корея',
      vi: 'Ví dụ: Seoul, Hàn Quốc'
    },
    logiDest: {
      ko: '예: 미국 LA, 베트남 하노이',
      en: 'e.g. Los Angeles, Hanoi',
      ru: 'напр.: Лос-Анджелес, Ханой',
      vi: 'Ví dụ: Los Angeles, Hà Nội'
    },
    logiVolume: {
      ko: '예: 500건 / 2 CBM',
      en: 'e.g. 500 orders / 2 CBM',
      ru: 'напр.: 500 заказов / 2 CBM',
      vi: 'Ví dụ: 500 đơn / 2 CBM'
    },
    logiContact: {
      ko: '예: 박스풀 상사 / 010-1234-5678',
      en: 'e.g. Boxful Trade / +82-10-1234-5678',
      ru: 'напр.: Боксфул Трейд / +82-10-1234-5678',
      vi: 'Ví dụ: Boxful Trade / +84-90-123-4567'
    },
    logiDetails: {
      ko: '예: 화장품 소형 포장 및 수출 풀필먼트 대행...',
      en: 'e.g. Cosmetics packaging and cross-border fulfillment...',
      ru: 'напр.: Упаковка косметики и трансграничный фулфилмент...',
      vi: 'Ví dụ: Đóng gói mỹ phẩm và hoàn tất đơn hàng xuất khẩu...'
    },

    // Marketing placeholders
    mktTargetCountry: {
      ko: '예: 베트남, 태국, 대만',
      en: 'e.g. Vietnam, Thailand, Taiwan',
      ru: 'напр.: Вьетнам, Таиланд, Тайвань',
      vi: 'Ví dụ: Việt Nam, Thái Lan, Đài Loan'
    },
    mktServiceType: {
      ko: '예: 틱톡 KOL 홍보 + 구글 전환광고',
      en: 'e.g. TikTok KOLs + Google Conversion Ads',
      ru: 'напр.: Инфлюенсеры TikTok + реклама в Google',
      vi: 'Ví dụ: KOLs TikTok + Quảng cáo chuyển đổi Google'
    },
    mktBudget: {
      ko: '예: 월 500만원 내외',
      en: 'e.g. $5,000 USD / Month',
      ru: 'напр.: $5,000 в месяц',
      vi: 'Ví dụ: 100.000.000 VNĐ / Tháng'
    },
    mktContact: {
      ko: '예: 박스풀 테크 / 010-1234-5678',
      en: 'e.g. Boxful Tech / +82-10-1234-5678',
      ru: 'напр.: Боксфул Тех / +82-10-1234-5678',
      vi: 'Ví dụ: Boxful Tech / +84-90-123-4567'
    },
    mktDetails: {
      ko: '예: K-뷰티 스킨케어 화장품 브랜딩 및 현지 입점 대행...',
      en: 'e.g. K-Beauty skincare branding and local marketplace launch...',
      ru: 'напр.: Брендинг корейской косметики и запуск на маркетплейсах...',
      vi: 'Ví dụ: Xây dựng thương hiệu mỹ phẩm K-Beauty và đăng sàn TMĐT...'
    }
  };

  for (const id in placeholders) {
    const el = document.getElementById(id);
    if (el && placeholders[id][lang]) {
      el.setAttribute('placeholder', placeholders[id][lang]);
    }
  }
};

// Form submission to Google Sheets via Google Apps Script URL
window.handleFormSubmit = async function(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById('submitBtn');
  const notification = document.getElementById('formNotification');
  
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvq48K9f4epfKwPkpWG2ddgbZIYwWnZq1dwh98p9gbChq2ucWCFn6pxdBUA2lXpRTj/exec';
  
  submitBtn.disabled = true;
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = translations[currentLang]['submit_loading'];
  
  notification.className = 'form-notification';
  notification.style.display = 'none';

  const payload = {
    companyName: document.getElementById('companyName').value,
    workersCount: document.getElementById('workersCount').value,
    contactPerson: document.getElementById('contactPerson').value,
    contactPhone: document.getElementById('contactPhone').value,
    contactEmail: document.getElementById('contactEmail').value,
    jobDescription: document.getElementById('jobDescription').value,
    submittedAt: new Date().toLocaleString(),
    type: 'General Business Consultation'
  };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload)
    });
    
    notification.className = 'form-notification success';
    notification.innerHTML = translations[currentLang]['submit_success'];
    document.getElementById('employerForm').reset();
    
  } catch (error) {
    console.error('Submission error:', error);
    notification.className = 'form-notification error';
    notification.innerHTML = translations[currentLang]['submit_error'];
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
};

// Logistics Quote Form Submission to Google Sheet
window.handleLogisticsFormSubmit = async function(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById('logiSubmitBtn');
  const notification = document.getElementById('logiNotification');
  
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx0q6oPzD5d6HwA92Q99J3g7yT-9z_lXb8c7v_YOUR_ID/exec'; 
  
  submitBtn.disabled = true;
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = translations[currentLang]['submit_loading'];
  
  notification.className = 'form-notification';
  notification.style.display = 'none';

  const payload = {
    logiOrigin: document.getElementById('logiOrigin').value,
    logiDest: document.getElementById('logiDest').value,
    logiVolume: document.getElementById('logiVolume').value,
    logiContact: document.getElementById('logiContact').value,
    logiDetails: document.getElementById('logiDetails').value,
    submittedAt: new Date().toLocaleString(),
    type: 'Logistics Quote Request'
  };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    notification.className = 'form-notification success';
    notification.innerHTML = translations[currentLang]['submit_success'];
    document.getElementById('logisticsForm').reset();
    
  } catch (error) {
    console.error('Submission error:', error);
    notification.className = 'form-notification error';
    notification.innerHTML = translations[currentLang]['submit_error'];
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
};

// Marketing Quote Form Submission to Google Sheet
window.handleMarketingFormSubmit = async function(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById('mktSubmitBtn');
  const notification = document.getElementById('mktNotification');
  
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx0q6oPzD5d6HwA92Q99J3g7yT-9z_lXb8c7v_YOUR_ID/exec'; 
  
  submitBtn.disabled = true;
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = translations[currentLang]['submit_loading'];
  
  notification.className = 'form-notification';
  notification.style.display = 'none';

  const payload = {
    mktTargetCountry: document.getElementById('mktTargetCountry').value,
    mktServiceType: document.getElementById('mktServiceType').value,
    mktBudget: document.getElementById('mktBudget').value,
    mktContact: document.getElementById('mktContact').value,
    mktDetails: document.getElementById('mktDetails').value,
    submittedAt: new Date().toLocaleString(),
    type: 'Marketing Consulting Request'
  };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    notification.className = 'form-notification success';
    notification.innerHTML = translations[currentLang]['submit_success'];
    document.getElementById('marketingForm').reset();
    
  } catch (error) {
    console.error('Submission error:', error);
    notification.className = 'form-notification error';
    notification.innerHTML = translations[currentLang]['submit_error'];
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
};

// Initialize language switcher on DOM load
document.addEventListener("DOMContentLoaded", () => {
  // Check URL query parameters for ?lang=en / ?lang=ru / ?lang=vi
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');

  if (paramLang && translations[paramLang]) {
    switchLanguage(paramLang);
    return;
  }

  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith('vi')) {
    switchLanguage('vi');
  } else if (userLang.startsWith('ru') || userLang.startsWith('uz')) {
    switchLanguage('ru');
  } else if (userLang.startsWith('en')) {
    switchLanguage('en');
  } else {
    switchLanguage('ko');
  }
});
