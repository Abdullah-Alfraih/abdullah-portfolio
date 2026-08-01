/*
  EDIT ONLY THIS FILE to update the portfolio.
  - Add future work inside projects.
  - Add completed courses/certificates inside certificates.
  - Leave any link as "" to hide its button automatically.
*/
window.PORTFOLIO_DATA = {
  name: { en: "Abdullah AlFraih", ar: "عبدالله الفريح" },
  role: { en: "Junior Data Analyst", ar: "محلل بيانات مبتدئ" },
  location: { en: "Dammam & Riyadh, Saudi Arabia", ar: "الدمام والرياض، المملكة العربية السعودية" },
  availability: { en: "Open to junior data & reporting opportunities", ar: "متاح لفرص تحليل البيانات والتقارير للمبتدئين" },
  email: "abdullahalfrih8@gmail.com",
  phone: "+966565529163",
  linkedin: "",
  github: "https://github.com/Abdullah-Alfraih",
  resume: "resume.html",
  hero: {
    en: { eyebrow: "MIS GRADUATE · DATA ANALYTICS", title: "Turning structured data into clear business decisions.", summary: "MIS graduate with practical document-control experience, building a focused path in SQL, Excel, Power BI and business intelligence." },
    ar: { eyebrow: "خريج نظم معلومات إدارية · تحليل البيانات", title: "أحوّل البيانات المنظمة إلى قرارات أعمال واضحة.", summary: "خريج نظم معلومات إدارية بخبرة عملية في ضبط الوثائق، أبني مسارًا متخصصًا في SQL وExcel وPower BI وذكاء الأعمال." }
  },
  about: {
    en: "I combine a business-information-systems background with hands-on experience in document tracking, records accuracy and reporting. My current focus is strengthening SQL and advanced Excel, then expanding through Power Query, Power BI, data modeling and DAX. I value clear analysis, reliable data and practical solutions.",
    ar: "أجمع بين خلفية نظم معلومات الأعمال والخبرة العملية في تتبع الوثائق ودقة السجلات وإعداد التقارير. أركز حاليًا على تطوير SQL وExcel المتقدم، ثم Power Query وPower BI ونمذجة البيانات وDAX. أهتم بالتحليل الواضح والبيانات الموثوقة والحلول العملية."
  },
  facts: [
    { value: "MIS", label: { en: "Academic background", ar: "الخلفية الأكاديمية" } },
    { value: "SQL", label: { en: "Current focus", ar: "التركيز الحالي" } },
    { value: "BI", label: { en: "Career direction", ar: "المسار المهني" } },
    { value: "Dammam / Riyadh", label: { en: "Based in", ar: "مقر الإقامة" } }
  ],
  skills: [
    { icon: "01", title: { en: "Data querying", ar: "استعلام البيانات" }, items: ["SQL", "Joins", "Aggregation", "CASE WHEN"] },
    { icon: "02", title: { en: "Analysis & reporting", ar: "التحليل والتقارير" }, items: ["Microsoft Excel", "PivotTables", "KPI Reporting", "Data Tracking"] },
    { icon: "03", title: { en: "Business intelligence", ar: "ذكاء الأعمال" }, items: ["Power BI", "Power Query", "Data Modeling", "DAX · Learning"] },
    { icon: "04", title: { en: "Professional strengths", ar: "المهارات المهنية" }, items: ["Analytical Thinking", "Problem Solving", "Communication", "Time Management"] }
  ],
  experience: [
    { role: { en: "Document Controller", ar: "مراقب وثائق" }, company: { en: "Professional Experience", ar: "خبرة مهنية" }, period: { en: "Current", ar: "حاليًا" }, bullets: {
      en: ["Maintain accurate document registers and controlled records.", "Track training records, certificates and vendor documentation.", "Support recurring reporting and data follow-up using Excel.", "Coordinate documentation across internal and external stakeholders."],
      ar: ["الحفاظ على سجلات الوثائق والملفات الخاضعة للرقابة بدقة.", "متابعة سجلات التدريب والشهادات ووثائق الموردين.", "دعم التقارير الدورية ومتابعة البيانات باستخدام Excel.", "تنسيق الوثائق مع الأطراف الداخلية والخارجية."]
    }},
    { role: { en: "Human Resources Trainee", ar: "متدرب موارد بشرية" }, company: { en: "Internship Experience", ar: "خبرة تدريبية" }, period: { en: "Training", ar: "تدريب" }, bullets: {
      en: ["Supported employee records and administrative workflows.", "Assisted with data entry, file organization and routine HR reporting."],
      ar: ["دعم سجلات الموظفين والإجراءات الإدارية.", "المساعدة في إدخال البيانات وتنظيم الملفات وتقارير الموارد البشرية الدورية."]
    }}
  ],
  education: [
    { degree: { en: "Bachelor's Degree in Management Information Systems", ar: "بكالوريوس نظم المعلومات الإدارية" }, school: { en: "University education", ar: "التعليم الجامعي" }, note: { en: "Business systems, databases, analysis and technology management.", ar: "أنظمة الأعمال وقواعد البيانات والتحليل وإدارة التقنية." } }
  ],
  projects: [
    { status: { en: "Academic", ar: "أكاديمي" }, title: { en: "Graduation Project", ar: "مشروع التخرج" }, description: { en: "An MIS graduation project applying systems analysis and business-technology concepts. Full case details can be added here from data.js.", ar: "مشروع تخرج في نظم المعلومات الإدارية يطبق مفاهيم تحليل الأنظمة وتقنية الأعمال. يمكن إضافة تفاصيل الحالة كاملة هنا من ملف data.js." }, tools: ["MIS", "Systems Analysis"], link: "" },
    { status: { en: "In progress", ar: "قيد التطوير" }, title: { en: "SQL Analytics Practice", ar: "تطبيقات تحليلية باستخدام SQL" }, description: { en: "A growing collection of practical SQL exercises covering filtering, joins, aggregations and analytical problem-solving.", ar: "مجموعة متنامية من تمارين SQL العملية تشمل التصفية والربط والتجميع وحل المسائل التحليلية." }, tools: ["SQL", "Data Analysis"], link: "" }
  ],
  certificates: [
    { title: { en: "SQL — Intermediate Learning Track", ar: "SQL — مسار المستوى المتوسط" }, issuer: { en: "Currently learning", ar: "قيد التعلم حاليًا" }, year: "", link: "" },
    { title: { en: "Advanced Excel & Power BI", ar: "Excel المتقدم وPower BI" }, issuer: { en: "Planned learning track", ar: "مسار تعلم مخطط" }, year: "", link: "" }
  ]
};
