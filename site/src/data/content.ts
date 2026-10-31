export type L = { ar: string; en: string };
export const pick = (v: L, lang?: string) => (lang === 'en' ? v.en : v.ar);
export const pickList = (v: { ar: string[]; en: string[] }, lang?: string) => (lang === 'en' ? v.en : v.ar);

export const CERT_PATH = '/downloads/certificates/';

export const skills = [
  { id: 'english', icon: 'graduation', title: { ar: 'تعليم اللغة الإنجليزية', en: 'English Language Education' }, tools: [
    { icon: 'languages', name: { ar: 'تدريس اللغة الإنجليزية', en: 'English Language Teaching' } },
    { icon: 'book', name: { ar: 'تخطيط الدروس', en: 'Lesson Planning' } },
    { icon: 'sparkles', name: { ar: 'التعلّم التفاعلي', en: 'Interactive Learning' } },
    { icon: 'layers', name: { ar: 'تصميم خبرات التعلّم', en: 'Learning Experience Design' } },
    { icon: 'image', name: { ar: 'المحتوى التعليمي البصري', en: 'Visual Educational Content' } },
  ] },
  { id: 'web', icon: 'code', title: { ar: 'تطوير الويب', en: 'Web Development' }, tools: [
    { icon: 'filecode', name: { ar: 'HTML', en: 'HTML' } },
    { icon: 'pen', name: { ar: 'CSS', en: 'CSS' } },
    { icon: 'braces', name: { ar: 'JavaScript', en: 'JavaScript' } },
    { icon: 'grid', name: { ar: 'تصميم متجاوب', en: 'Responsive Web Design' } },
    { icon: 'palette', name: { ar: 'Tailwind CSS', en: 'Tailwind CSS' } },
    { icon: 'code', name: { ar: 'Git & GitHub', en: 'Git & GitHub' } },
    { icon: 'rocket', name: { ar: 'Vercel', en: 'Vercel' } },
    { icon: 'globe', name: { ar: 'GitHub Pages', en: 'GitHub Pages' } },
  ] },
  { id: 'design', icon: 'palette', title: { ar: 'التصميم الإبداعي والمعلوماتي', en: 'Creative & Information Design' }, tools: [
    { icon: 'dashboard', name: { ar: 'تصميم المعلومات', en: 'Information Design' } },
    { icon: 'image', name: { ar: 'الإنفوجرافيك', en: 'Infographics' } },
    { icon: 'layers', name: { ar: 'العروض التقديمية', en: 'Presentations' } },
    { icon: 'sparkles', name: { ar: 'التواصل البصري', en: 'Visual Communication' } },
    { icon: 'filetext', name: { ar: 'تصميم المستندات', en: 'Document Design' } },
    { icon: 'figma', name: { ar: 'Figma', en: 'Figma' } },
    { icon: 'pen', name: { ar: 'Canva', en: 'Canva' } },
  ] },
  { id: 'ai', icon: 'brain', title: { ar: 'البرمجة والذكاء الاصطناعي', en: 'Programming & AI' }, tools: [
    { icon: 'terminal', name: { ar: 'Python', en: 'Python' } },
    { icon: 'check', name: { ar: 'حل المشكلات', en: 'Problem Solving' } },
    { icon: 'rocket', name: { ar: 'أساسيات الأتمتة', en: 'Automation Fundamentals' } },
    { icon: 'braces', name: { ar: 'التفكير المنطقي', en: 'Logical Thinking' } },
    { icon: 'sparkles', name: { ar: 'أدوات AI', en: 'AI Tools' } },
    { icon: 'edit', name: { ar: 'هندسة الأوامر', en: 'Prompt Engineering' } },
    { icon: 'layers', name: { ar: 'سير عمل مدعوم بالذكاء الاصطناعي', en: 'AI-Assisted Workflows' } },
  ] },
  { id: 'tools', icon: 'laptop', title: { ar: 'الأدوات الرقمية', en: 'Digital Tools' }, tools: [
    { icon: 'terminal', name: { ar: 'Termux', en: 'Termux' } },
    { icon: 'filecode', name: { ar: 'Acode', en: 'Acode' } },
    { icon: 'book', name: { ar: 'Google Fonts', en: 'Google Fonts' } },
    { icon: 'code', name: { ar: 'بيئات تطوير الويب', en: 'Web Development Environments' } },
    { icon: 'globe', name: { ar: 'تجارب ويب تفاعلية', en: 'Interactive Web Experiences' } },
  ] },
];

export const projectCategories = ['web', 'education', 'design', 'data'] as const;

export const projects = [
  { cover: 'lumiere-restaurant-cover.svg', cat: 'web', url: 'https://lumiere-restaurant-pro.vercel.app/', tags: ['UI/UX', 'HTML/CSS', 'JS'], title: { ar: 'Lumière — تجربة مطعم فاخر', en: 'Lumière — Fine Dining' }, desc: { ar: 'واجهة رقمية لمطعم راقٍ بتجربة استخدام واضحة.', en: 'A refined restaurant web experience with a clear user experience.' } },
  { cover: 'digital-resume-cover.svg', cat: 'web', url: 'https://digital-resume-pro.vercel.app/', tags: ['HTML/CSS', 'Responsive'], title: { ar: 'السيرة الذاتية الرقمية', en: 'Digital Resume' }, desc: { ar: 'تجربة سيرة ذاتية منظمة مع تصميم متجاوب.', en: 'Structured digital résumé with responsive design.' } },
  { cover: 'sarah-portfolio-cover.svg', cat: 'web', url: 'https://sarah-portfolio-pro.vercel.app/', tags: ['Frontend', 'Web Design'], title: { ar: 'موقع سارة الشخصي', en: "Sarah's Portfolio" }, desc: { ar: 'موقع شخصي عصري يعرض الهوية المهنية والأعمال.', en: 'Modern personal website showcasing identity and work.' } },
  { cover: 'bilingual-interactive-lesson-cover.svg', cat: 'education', url: 'https://bilingual-interactive-lesson.vercel.app/', tags: ['Education', 'Interactive'], title: { ar: 'درس تفاعلي ثنائي اللغة', en: 'Bilingual Interactive Lesson' }, desc: { ar: 'تجربة تعليمية تمزج الشرح البصري بالأنشطة التفاعلية.', en: 'Interactive educational experience blending visuals and activities.' } },
  { cover: 'english-reading-cover.svg', cat: 'education', url: 'https://interactive-learning-experience.vercel.app/', tags: ['Storytelling', 'Motion'], title: { ar: 'اليوم الذي أضربت فيه الكراسي', en: 'The Day the Chairs Went on Strike' }, desc: { ar: 'قصة قراءة تفاعلية مع مؤثرات بصرية والحركة.', en: 'Interactive reading story with visual effects and motion.' } },
  { cover: 'ufuq-presentation-cover.svg', cat: 'design', url: 'https://ufuq-presentation.vercel.app/', tags: ['Presentation', 'Info Design'], title: { ar: 'أفق — عرض تقديمي', en: 'Ufuq — Presentation' }, desc: { ar: 'عرض مؤسسي يركز على تنظيم الأفكار بصريًا.', en: 'Corporate presentation focused on organized visual ideas.' } },
  { cover: 'careem-presentation-cover.svg', cat: 'design', url: 'https://careem-presentation.vercel.app/', tags: ['UX Research', 'Case Study'], title: { ar: 'كريم — دراسة حالة', en: 'Careem — Case Study' }, desc: { ar: 'دراسة حالة UX في قالب بصري منظم.', en: 'UX case study in an organized visual format.' } },
  { cover: 'executive-enterprise-dashboard-cover.svg', cat: 'data', url: 'https://business-dashboard-pro.vercel.app/', tags: ['Dashboard', 'Data Viz'], title: { ar: 'لوحة تحكم الأعمال', en: 'Business Dashboard' }, desc: { ar: 'لوحة معلومات لعرض مؤشرات الأداء بوضوح.', en: 'Dashboard presenting performance indicators clearly.' } },
  { cover: 'survey-cover.svg', cat: 'data', url: 'https://survey-super-pro.vercel.app/', tags: ['Forms', 'UX'], title: { ar: 'استبيان الخدمات الرقمية', en: 'Digital Services Survey' }, desc: { ar: 'نموذج استبيان رقمي بواجهة سهلة الاستخدام.', en: 'Digital survey with a user-friendly interface.' } },
  { cover: 'coming-soon-cover.svg', cat: 'web', url: 'https://coming-soon-page-pro.vercel.app/', tags: ['Landing', 'UI'], title: { ar: 'صفحة قيد الإنشاء', en: 'Coming Soon Page' }, desc: { ar: 'صفحة انتظار عصرية بهوية بصرية أنيقة.', en: 'Modern waiting page with elegant visual identity.' } },
];

export const experience = [
  { year: '2025', role: { ar: 'تطوير مشاريع الويب', en: 'Web Development Projects' }, company: { ar: 'مشاريع مستقلة', en: 'Independent Projects' }, items: { ar: ['تصميم وبناء مواقع وصفحات هبوط وتجارب ويب تفاعلية.', 'تنظيم المحتوى والتصميم المتجاوب.', 'تطوير الواجهات وتحسين تجربة المستخدم.'], en: ['Designing and building websites, landing pages, and interactive web experiences.', 'Content organization and responsive design.', 'Interface development and UX improvement.'] } },
  { year: '2024', role: { ar: 'الخدمات الرقمية وتصميم المعلومات', en: 'Digital Services & Information Design' }, company: { ar: 'عمل مستقل', en: 'Freelance' }, items: { ar: ['تنسيق الوثائق والتقارير والعروض التقديمية.', 'تصميم السير الذاتية والمواد البصرية.', 'إعداد المواد التعليمية والمرئية.', 'تنظيم المعلومات وتقديمها بطريقة مهنية.'], en: ['Formatting documents, reports, and presentations.', 'Résumé design and visual material creation.', 'Preparing educational and visual materials.', 'Organizing information and presenting it professionally.'] } },
  { year: '2022', role: { ar: 'معلّم لغة إنجليزية', en: 'English Language Teacher' }, company: { ar: 'التدريس والدروس الخصوصية', en: 'Teaching & Private Tutoring' }, items: { ar: ['تدريس اللغة الإنجليزية وقواعدها.', 'تبسيط المفاهيم للمتعلمين.', 'تطوير أساليب تقديم المحتوى.', 'توظيف الوسائل الرقمية في تحسين تجربة التعلّم.'], en: ['Teaching English language and grammar.', 'Simplifying concepts for learners.', 'Developing content delivery methods.', 'Using digital tools to improve the learning experience.'] } },
];

export const education = [
  { year: '2021', title: { ar: 'دبلوم متقدم في اللغة الإنجليزية', en: 'Advanced Diploma in English' }, inst: { ar: 'معهد نيو يمن تك', en: 'New Yemen Tech Institute' }, file: 'english-certificate-en-ar.pdf' },
  { year: '2016', title: { ar: 'الثانوية العامة', en: 'High School Diploma' }, inst: { ar: 'تعز، اليمن', en: 'Taiz, Yemen' }, file: 'secondary-school-cer.pdf' },
];

export const certificates = [
  { title: { ar: 'تخصص الذكاء الاصطناعي للتوظيف (إدراك)', en: 'AI for Employment Specialization (Edraak)' }, ar: 'ai-specialization-ar.pdf', en: 'ai-specialization-en.pdf', spec: true },
  { title: { ar: 'الذكاء الاصطناعي للصغار', en: 'AI for Juniors' }, ar: null, en: 'ai-for-juniors-en.pdf' },
  { title: { ar: 'أساسيات المحاسبة', en: 'Accounting Basics' }, ar: 'accounting-basics-ar.pdf', en: 'accounting-basics-en.pdf' },
  { title: { ar: 'خدمة العملاء', en: 'Customer Service' }, ar: 'customer-service-ar.pdf', en: 'customer-service-en.pdf', spec: true },
  { title: { ar: 'أساسيات الأمن السيبراني', en: 'Cyber Security Basics' }, ar: 'cyber-security-basics-ar.pdf', en: 'cyber-security-basics-en.pdf' },
  { title: { ar: 'الإعلان الرقمي', en: 'Digital Advertising' }, ar: 'digital-advertising-ar.pdf', en: 'digital-advertising-en.pdf' },
  { title: { ar: 'التسويق الرقمي', en: 'Digital Marketing' }, ar: 'digital-marketing-ar.pdf', en: 'digital-marketing-en.pdf', spec: true },
  { title: { ar: 'الذكاء العاطفي', en: 'Emotional Intelligence' }, ar: 'emotional-intelligence-ar.pdf', en: 'emotional-intelligence-en.pdf' },
  { title: { ar: 'أساسيات العمل الحر', en: 'Freelancing Basics' }, ar: 'freelancing-basics-ar.pdf', en: 'freelancing-basics-en.pdf' },
  { title: { ar: 'التعرّف إلى منصة خمسات', en: 'Getting Started on Khamsat' }, ar: 'getting-started-khamsat-ar.pdf', en: 'getting-started-khamsat-en.pdf' },
  { title: { ar: 'التعرّف إلى منصة Upwork', en: 'Getting Started on Upwork' }, ar: 'getting-started-upwork-ar.pdf', en: 'getting-started-upwork-en.pdf' },
  { title: { ar: 'إنترنت الأشياء', en: 'Internet of Things' }, ar: 'internet-of-things-ar.pdf', en: 'internet-of-things-en.pdf' },
  { title: { ar: 'مقدمة في التصميم الجرافيكي', en: 'Introduction to Graphic Design' }, ar: 'intro-to-graphic-design-ar.pdf', en: 'intro-to-graphic-design-en.pdf' },
];

export const testimonials = [
  { author: 'فارس ق.', role: { ar: 'طبيب', en: 'Doctor' }, text: { ar: 'قدّم عمرو تصاميم استثنائية للتقارير الطبية الخاصة بعيادتي، وأظهر قدرة مميزة على الجمع بين الاحترافية والدقة والإبداع. اهتمامه بالتفاصيل وفهمه لمتطلبات العمل يعكسان موهبة حقيقية.', en: 'Amr delivered exceptional medical report designs for my clinic. His ability to combine professional presentation, precision, and creativity made a remarkable difference. His attention to detail and understanding of professional requirements are truly impressive.' } },
  { author: 'داؤود م.', role: { ar: 'مستقل', en: 'Freelancer' }, text: { ar: 'أصبح عمرو من أكثر مقدمي الخدمات الذين أعتمد عليهم. من الأعمال التعليمية والسير الذاتية إلى العروض التقديمية والترجمة والتصميم وتطوير الويب، يقدم باستمرار جودة مميزة وسرعة ودقة في التنفيذ. أثق بعمله وأوصي بخدماته.', en: 'Amr has become one of my most trusted service providers. From educational materials and CVs to presentations, translation, design, and web development, he consistently delivers outstanding quality with impressive speed and accuracy. I confidently recommend his work.' } },
  { author: 'دنيا ع.', role: { ar: 'أستاذة علوم', en: 'Science Teacher' }, text: { ar: 'يمتلك عمرو قدرة استثنائية على تحويل المحتوى التعليمي التقليدي إلى تجارب تعليمية تفاعلية وجذابة. يجمع في أعماله بين الفهم التربوي والتصميم الإبداعي والمهارات التقنية، وهذا ما يجعل نتائجه مميزة.', en: 'Amr has an exceptional ability to transform traditional educational content into engaging interactive learning experiences. His combination of educational insight, creative design, and technical skills makes his work stand out.' } },
  { author: 'مفيد م.', role: { ar: 'طالب', en: 'Student' }, text: { ar: 'عمرو موهوب بحق في تصميم المعلومات. لديه قدرة مميزة على تحويل المعلومات المعقدة إلى محتوى واضح ومنظم وجذاب بصرياً. إبداعه واهتمامه بالتفاصيل يمنحان كل مشروع طابعاً احترافياً مميزاً.', en: 'Amr is exceptionally talented in information design. He transforms complex information into clear, structured, and visually compelling content. His creativity and attention to detail make every project distinctive.' } },
];
