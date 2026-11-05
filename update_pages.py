import os

countries = {
    "hongkong.html": {
        "title": "홍콩 법인설립 가이드 - KOREAJOB24",
        "desc": "홍콩 법인설립 1~2일 소요, 8.25% 저세율 및 역외 면세 혜택, 주재원 취업 비자 발급 수속 원스톱 대행.",
        "h1_key": "country_hk_title",
        "h1_default": "홍콩 법인설립",
        "desc_key": "hk_desc_p",
        "desc_default": "홍콩은 간단한 세율 구조와 역외 면세 혜택을 갖춘 아시아 금융 허브입니다.",
        "tax_key": "hk_tax_val", "tax_val": "8.25% ~ 16.5% (역외 원천 소득 면세 가능)",
        "time_key": "hk_time_val", "time_val": "1 ~ 2 영업일",
        "dir_key": "hk_dir_val", "dir_val": "최소 이사 1인, 주주 1인 (국적 무관), 현지 법인 비서 필수",
        "cap_key": "hk_cap_val", "cap_val": "제한 없음 (통상 HKD 10,000으로 등록)",
        "visa_key": "hk_visa_val", "visa_val": "홍콩 취업 비자 (Employment Visa), 투자 주재원 비자",
        "visa_desc_key": "hk_visa_desc", "visa_desc": "홍콩 법인 설립 후 정식 고용 계약을 통해 취업 비자를 스폰서받거나, 투자 비자를 통해 정착할 수 있습니다."
    },
    "singapore.html": {
        "title": "싱가포르 법인설립 가이드 - KOREAJOB24",
        "desc": "싱가포르 법인설립 1~2일 완료, 신규 스타트업 세제 감면 혜택, EP 및 EntrePass 비자 발급 지원.",
        "h1_key": "country_sg_title",
        "h1_default": "싱가포르 법인설립",
        "desc_key": "sg_desc_p",
        "desc_default": "싱가포르는 투명한 규제와 스타트업 세제 혜택을 자랑하는 세계 최적의 기업 설립지입니다.",
        "tax_key": "sg_tax_val", "tax_val": "17% (신규 설립 시 과세 소득 최대 75% 감면 혜택)",
        "time_key": "sg_time_val", "time_val": "1 ~ 2 영업일",
        "dir_key": "sg_dir_val", "dir_val": "최소 이사 1인 (싱가포르 현지 거주 이사 필수), 주주 1인",
        "cap_key": "sg_cap_val", "cap_val": "SGD 1 이상 (자유롭게 설정 가능)",
        "visa_key": "sg_visa_val", "visa_val": "Employment Pass (EP), S Pass, EntrePass",
        "visa_desc_key": "sg_visa_desc", "visa_desc": "고연봉 전문직과 경영진 대상의 EP 발급 및 스타트업 창업자를 위한 EntrePass 제도가 활성화되어 있습니다."
    },
    "vietnam.html": {
        "title": "베트남 법인설립 가이드 - KOREAJOB24",
        "desc": "베트남 외국인 100% 단독법인 설립, IRC/ERC 라이센스 취득, 노동비자(LD) 및 Work Permit 발급 대행.",
        "h1_key": "country_vn_title",
        "h1_default": "베트남 법인설립",
        "desc_key": "vn_desc_p",
        "desc_default": "베트남은 인건비가 저렴하고 풍부한 노동력을 갖춘 동남아시아 제조 벨트의 중심입니다.",
        "tax_key": "vn_tax_val", "tax_val": "20% (특정 공단 및 우대 업종의 경우 면세 및 감면 혜택)",
        "time_key": "vn_time_val", "time_val": "3 ~ 4주 (투자 승인서 IRC 및 기업 등록증 ERC 발급)",
        "dir_key": "vn_dir_val", "dir_val": "현지 대표자 1인 상주 필수, 주주는 외국 개인/법인 100% 가능",
        "cap_key": "vn_cap_val", "cap_val": "최저 제한은 없으나 통상 USD 10,000 이상 권장",
        "visa_key": "vn_visa_val", "visa_val": "노동 비자 (LD Visa), 투자자 비자 (DT Visa), Work Permit",
        "visa_desc_key": "vn_visa_desc", "visa_desc": "2년 만기의 노동 비자를 취득하기 위해 노동 보훈 사회부로부터 Work Permit 사전 승인이 필요합니다."
    },
    "uzbekistan.html": {
        "title": "우즈베키스탄 법인설립 가이드 - KOREAJOB24",
        "desc": "우즈베키스탄 IT Park 경제특구 0% 세제 혜택, IT Visa 스폰서십 및 중앙아시아 비즈니스 진출 지원.",
        "h1_key": "country_uz_title",
        "h1_default": "우즈베키스탄 법인설립",
        "desc_key": "uz_desc_p",
        "desc_default": "우즈베키스탄은 IT Park 경제특구 혜택과 풍부한 인적자원을 갖춘 중앙아시아 비즈니스 요충지입니다.",
        "tax_key": "uz_tax_val", "tax_val": "15% (IT Park 입주 시 법인세, 소득세, 부가세 전액 면세 혜택)",
        "time_key": "uz_time_val", "time_val": "7 ~ 14 영업일",
        "dir_key": "uz_dir_val", "dir_val": "최소 이사 1인, 주주 1인 (현지 거주자 요건 없음)",
        "cap_key": "uz_cap_val", "cap_val": "제한 없음 (통상 1,000,000 UZS 이상 권장)",
        "visa_key": "uz_visa_val", "visa_val": "IT Visa, 투자자 비자 (DT), 일반 취업 비자",
        "visa_desc_key": "uz_visa_desc", "visa_desc": "IT 특구 스폰서십을 받아 IT Visa 취득 시 가족 동반 및 비자 갱신 행정 혜택을 누릴 수 있습니다."
    },
    "taiwan.html": {
        "title": "대만 법인설립 가이드 - KOREAJOB24",
        "desc": "대만 법인설립 및 외국인 투자 승인, 12만 TWD 이하 면세, 대만 골드카드 비자 취득 원스톱 지원.",
        "h1_key": "country_tw_title",
        "h1_default": "대만 법인설립",
        "desc_key": "tw_desc_p",
        "desc_default": "대만은 반도체 등 하이테크 제조 벨트와 동아시아 무역 관문을 연결하는 중요 시장입니다.",
        "tax_key": "tw_tax_val", "tax_val": "20% (과세 소득 12만 TWD 이하는 면세)",
        "time_key": "tw_time_val", "time_val": "2 ~ 3주 (투자심의위원회 승인서 필요)",
        "dir_key": "tw_dir_val", "dir_val": "최소 이사 1인, 주주 1인 (외국 개인/법인 100% 소유 가능)",
        "cap_key": "tw_cap_val", "cap_val": "제한은 없으나 사업자등록 및 투자 인증을 위해 최소 500,000 TWD 권장",
        "visa_key": "tw_visa_val", "visa_val": "대만 골드카드 (Gold Card), 투자 주재원 비자",
        "visa_desc_key": "tw_visa_desc", "visa_desc": "전문 지식을 갖춘 글로벌 인재 대상의 골드카드 제도를 통해 비자 및 체류 편의를 제공합니다."
    },
    "malaysia.html": {
        "title": "말레이시아 법인설립 가이드 - KOREAJOB24",
        "desc": "말레이시아 SSM 온라인 법인등록 1~2주, 신규 중소기업 우대세율, Employment Pass 및 DE Rantau 노마드 비자.",
        "h1_key": "country_my_title",
        "h1_default": "말레이시아 법인설립",
        "desc_key": "my_desc_p",
        "desc_default": "말레이시아는 동남아의 이커머스 핵심이자 안정된 법률 체계를 갖춘 다국적 기업의 기지입니다.",
        "tax_key": "my_tax_val", "tax_val": "17% ~ 24% (신규 중소기업 우대 세율 적용 가능)",
        "time_key": "my_time_val", "time_val": "5 ~ 10 영업일 (SSM 온라인 등록)",
        "dir_key": "my_dir_val", "dir_val": "최소 이사 1인 (말레이시아 거주자 필수), 주주 1인",
        "cap_key": "my_cap_val", "cap_val": "1 MYR 이상 (단, 외국인 고용 비자 스폰 시 업종별 최소 자본금 차등 적용)",
        "visa_key": "my_visa_val", "visa_val": "Employment Pass (EP Categories I, II, III), DE Rantau",
        "visa_desc_key": "my_visa_desc", "visa_desc": "디지털 노마드를 위한 DE Rantau 패스 및 기업 고용 임직원용 EP 취득을 원스톱 지원합니다."
    },
    "korea.html": {
        "title": "한국 법인설립 가이드 - KOREAJOB24",
        "desc": "대한민국 외국인 투자법인 설립, 외투기업 D-8 투자비자 및 E-7 전문직 취업비자 발급 대행.",
        "h1_key": "country_ko_title",
        "h1_default": "한국 법인설립",
        "desc_key": "ko_desc_p",
        "desc_default": "대한민국은 고도화된 기술 기반 인프라와 매력적인 투자 인센티브를 제공하는 시장입니다.",
        "tax_key": "ko_tax_val", "tax_val": "9% ~ 24% (누진세율 구조)",
        "time_key": "ko_time_val", "time_val": "7 ~ 10 영업일",
        "dir_key": "ko_dir_val", "dir_val": "최소 이사 1인, 감사 1인 (자본금 10억 미만 시 1인 이사 가능)",
        "cap_key": "ko_cap_val", "cap_val": "100원 이상 (단, 외국인 투자비자 D-8 취득 시 최소 1억 원)",
        "visa_key": "ko_visa_val", "visa_val": "외국인 투자 비자 (D-8), 특정 활동 취업 비자 (E-7)",
        "visa_desc_key": "ko_visa_desc", "visa_desc": "최소 1억 원 이상 투자한 외국인 경영자에게 D-8 비자가 발급되며, 전문 외국 기술자 매칭 시 E-7 비자가 사용됩니다."
    },
    "russia.html": {
        "title": "러시아 법인설립 가이드 - KOREAJOB24",
        "desc": "러시아 유라시아 시장 진출 법인설립, 쿼터 배정 및 노동비자 초청장 발급, 현지 회계세무 대행.",
        "h1_key": "country_ru_title",
        "h1_default": "러시아 법인설립",
        "desc_key": "ru_desc_p",
        "desc_default": "러시아는 거대한 유라시아 내륙 시장과 풍부한 자원 가공 인프라를 갖춘 제조/유통 허브입니다.",
        "tax_key": "ru_tax_val", "tax_val": "20% (일부 지역 및 농업/IT 업종 특별 우대 세율 존재)",
        "time_key": "ru_time_val", "time_val": "10 ~ 14 영업일",
        "dir_key": "ru_dir_val", "dir_val": "최소 이사 1인 (러시아인 또는 적합 비자 소지자), 주주 1인",
        "cap_key": "ru_cap_val", "cap_val": "10,000 RUB (최소 법정 자본금)",
        "visa_key": "ru_visa_val", "visa_val": "러시아 취업 비자 (Work Visa), 주재원 비자",
        "visa_desc_key": "ru_visa_desc", "visa_desc": "현지 법인이 쿼터를 배정받아 근로 계약 체결 후 러시아 내무부를 통해 비자 초청장을 발급받습니다."
    }
}

base_dir = "/Users/a1710/.gemini/antigravity/scratch/koreajob24/"

for fname, data in countries.items():
    title_str = data['title']
    desc_str = data['desc']
    h1_default = data['h1_default']
    h1_key = data['h1_key']
    desc_key = data['desc_key']
    desc_default = data['desc_default']
    tax_key = data['tax_key']
    tax_val = data['tax_val']
    time_key = data['time_key']
    time_val = data['time_val']
    dir_key = data['dir_key']
    dir_val = data['dir_val']
    cap_key = data['cap_key']
    cap_val = data['cap_val']
    visa_key = data['visa_key']
    visa_val = data['visa_val']
    visa_desc_key = data['visa_desc_key']
    visa_desc = data['visa_desc']

    html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>{title_str}</title>
  
  <!-- Primary SEO Meta Tags -->
  <meta name="description" content="{desc_str}">
  <meta name="keywords" content="법인설립, 해외법인, {h1_default}, 투자비자, 취업비자, 가상오피스, 세무기장, KOREAJOB24">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://koreajob24.com/{fname}">

  <!-- Hreflang Multi-language SEO -->
  <link rel="alternate" hreflang="ko" href="https://koreajob24.com/{fname}" />
  <link rel="alternate" hreflang="en" href="https://koreajob24.com/{fname}?lang=en" />
  <link rel="alternate" hreflang="ru" href="https://koreajob24.com/{fname}?lang=ru" />
  <link rel="alternate" hreflang="vi" href="https://koreajob24.com/{fname}?lang=vi" />
  <link rel="alternate" hreflang="x-default" href="https://koreajob24.com/{fname}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://koreajob24.com/{fname}">
  <meta property="og:title" content="{title_str}">
  <meta property="og:description" content="{desc_str}">
  <meta property="og:image" content="mascot_yellow.png">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title_str}">
  <meta name="twitter:description" content="{desc_str}">
  <meta name="twitter:image" content="mascot_yellow.png">

  <link rel="stylesheet" href="style.css">

  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{title_str}",
    "description": "{desc_str}",
    "publisher": {{
      "@type": "Organization",
      "name": "KOREAJOB24"
    }}
  }}
  </script>
</head>
<body>
  
  <!-- Header -->
  <header>
    <div class="container">
      <a href="index.html" class="logo">KOREAJOB<span>24</span></a>
      <div class="lang-switch">
        <button class="lang-btn active" onclick="switchLanguage('ko')"><span class="lang-full">한국어</span><span class="lang-short">KO</span></button>
        <button class="lang-btn" onclick="switchLanguage('en')"><span class="lang-full">English</span><span class="lang-short">EN</span></button>
        <button class="lang-btn" onclick="switchLanguage('ru')"><span class="lang-full">Русский</span><span class="lang-short">RU</span></button>
        <button class="lang-btn" onclick="switchLanguage('vi')"><span class="lang-full">Tiếng Việt</span><span class="lang-short">VI</span></button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero" style="padding: 5.5rem 0 4.5rem 0;">
    <div class="container" style="text-align: center;">
      <div class="hero-pill">✦ Official Business Incorporation Guide</div>
      <h1 data-lang-key="{h1_key}">{h1_default}</h1>
      <p data-lang-key="{desc_key}" style="max-width: 760px; margin: 1rem auto 0 auto;">{desc_default}</p>
    </div>
  </section>

  <!-- Country Content -->
  <section class="section" style="background-color: var(--bg-white);">
    <div class="container">
      <div class="country-grid">
        
        <!-- Left Facts -->
        <div>
          <span class="section-tag" style="text-align: left;">Key Legal Requirements</span>
          <h3 style="font-size: 1.6rem; font-weight: 800; color: var(--primary); margin-bottom: 1.25rem; letter-spacing: -0.02rem;" data-lang-key="guide_title">법인설립 <span>상세 정보</span></h3>
          <table class="fact-table">
            <tr>
              <td data-lang-key="td_tax_rate">법인세율 (Tax Rate)</td>
              <td data-lang-key="{tax_key}">{tax_val}</td>
            </tr>
            <tr>
              <td data-lang-key="td_timeline">설립 소요 기간 (Timeline)</td>
              <td data-lang-key="{time_key}">{time_val}</td>
            </tr>
            <tr>
              <td data-lang-key="td_directors">이사/주주 요건 (Directors/Shareholders)</td>
              <td data-lang-key="{dir_key}">{dir_val}</td>
            </tr>
            <tr>
              <td data-lang-key="td_capital">최저 자본금 (Min Capital)</td>
              <td data-lang-key="{cap_key}">{cap_val}</td>
            </tr>
            <tr>
              <td data-lang-key="td_visa">대표 비자 종류 (Visa Options)</td>
              <td data-lang-key="{visa_key}">{visa_val}</td>
            </tr>
          </table>
          <a href="index.html" class="btn btn-secondary" style="color: var(--primary); border-color: var(--border); background: var(--bg-subtle);" data-lang-key="btn_back">&larr; 메인으로 돌아가기</a>
        </div>

        <!-- Right Visual & Visa Guide -->
        <div style="background-color: var(--bg-main); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: 2.25rem; text-align: center; box-shadow: var(--shadow-sm);">
          <div class="mascot-container" style="background: var(--bg-white); border: 1px solid var(--border);">
            <img src="mascot_yellow.png" alt="Mascot Yellow Rabbit" class="mascot-img">
          </div>
          <h4 data-lang-key="visa_desc_title" style="font-size: 1.25rem; font-weight: 800; color: var(--primary); margin-bottom: 0.75rem; margin-top: 1rem;">취업 및 투자 비자 프로그램</h4>
          <p data-lang-key="{visa_desc_key}" style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.7;">{visa_desc}</p>
        </div>

      </div>
    </div>
  </section>

  <!-- Employers Section -->
  <section class="section employer-section" id="employers">
    <div class="container">
      <div class="form-layout">
        <div class="form-info">
          <span class="section-tag" style="text-align: left;">Inquiry & Setup</span>
          <h2 data-lang-key="employers_title">글로벌 비즈니스 <span>도입 및 상담 신청</span></h2>
          <p data-lang-key="employers_subtitle">해외법인 설립, 오피스 주소지 대행, 현지 회계세무 기장, 혹은 우수 인력 도입이 필요하신 기업 담당자분께서는 양식을 작성해 주세요.</p>
          <ul class="info-points">
            <li data-lang-key="emp_point1">글로벌 회사 설립 및 비즈니스 법률 규정 준수 대행</li>
            <li data-lang-key="emp_point2">경력직 기능공 및 글로벌 IT 소프트웨어 엔지니어 매칭</li>
            <li data-lang-key="emp_point3">도입 후 사후 정착 케어 및 지속적인 통번역 지원 서비스</li>
          </ul>
        </div>
        
        <div class="form-card">
          <form id="employerForm" onsubmit="handleFormSubmit(event)">
            
            <div class="form-group">
              <label for="companyName" data-lang-key="form_label_company">회사명 / 기관명 (Company Name) *</label>
              <input type="text" id="companyName" class="form-control" placeholder="koreajob24" required>
            </div>
            
            <div class="form-group">
              <label for="workersCount" data-lang-key="form_label_workers">도입 희망 사항 (법인 설립 지역 또는 인력 인원수) *</label>
              <input type="text" id="workersCount" class="form-control" placeholder="{h1_default} / 10명 등" required>
            </div>
            
            <div class="form-group">
              <label for="contactPerson" data-lang-key="form_label_contact">담당자 성함 & 직함 (Contact Person) *</label>
              <input type="text" id="contactPerson" class="form-control" placeholder="John Doe" required>
            </div>

            <div class="form-group">
              <label for="contactPhone" data-lang-key="form_label_phone">연락처 / 전화번호 (Phone Number) *</label>
              <input type="tel" id="contactPhone" class="form-control" placeholder="+82-10-1234-5678" required>
            </div>
            
            <div class="form-group">
              <label for="contactEmail" data-lang-key="form_label_email">이메일 주소 (Email Address) *</label>
              <input type="email" id="contactEmail" class="form-control" placeholder="employer@koreajob24.com" required>
            </div>

            <div class="form-group">
              <label for="jobDescription" data-lang-key="form_label_details">상세 문의 내용 (Inquiry / Job Details) *</label>
              <textarea id="jobDescription" class="form-control" placeholder="Inquiry details for {h1_default}..." required></textarea>
            </div>
            
            <button type="submit" id="submitBtn" class="form-submit-btn" data-lang-key="form_btn_submit">문의 및 서비스 신청하기 (Submit)</button>
          </form>
          
          <div id="formNotification" class="form-notification"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-layout">
        <div class="footer-brand">
          <a href="index.html" class="logo">KOREAJOB<span>24</span></a>
          <p data-lang-key="footer_desc">글로벌 인력 매칭 및 비즈니스 설립 대행 파트너 KOREAJOB24입니다. 정직과 신뢰를 바탕으로 고수익 일자리 매칭 및 법인 컨설팅을 수행합니다.</p>
        </div>
        <div class="footer-contact">
          <h4 data-lang-key="footer_contact_title">공식 이메일 문의 (Inquiry Email)</h4>
          <a href="mailto:sunbow3288@gmail.com">sunbow3288@gmail.com</a>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2026 KOREAJOB24. All rights reserved. | <a href="mailto:sunbow3288@gmail.com" style="color: var(--accent); text-decoration: none;">Contact Us</a>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>"""

    with open(base_dir + fname, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated SEO-enhanced {fname}")
