# موقع عمرو المكردي الشخصي | Amr AL-Mukardi Portfolio

موقع شخصي ثنائي اللغة (العربية افتراضيًا `/` والإنجليزية `/en/`) مبني بـ Astro وTailwind CSS.

## التشغيل

```bash
npm install
npm run dev      # للتطوير
npm run build    # للبناء (المخرجات في dist/)
```

## أين أعدّل؟

| ما تريد تعديله | الملف |
|---|---|
| الاسم والبريد والواتساب والروابط | `src/utils/me.ts` |
| نصوص الواجهة (عربي / إنجليزي) | `src/i18n/ar.json` و `src/i18n/en.json` |
| المهارات والمشاريع والخبرات والشهادات | `src/data/content.ts` |
| عنوان الموقع (`site`) | `astro.config.mjs` و `public/robots.txt` |

## الملفات والصور

- `public/downloads/certificates/` ← ملفات الشهادات (PDF)
- `src/assets/projects/` ← أغلفة المشاريع (اسم الملف = حقل `cover` في `content.ts`)
- `src/assets/resume.pdf` ← السيرة الذاتية (زر "حمّل السيرة الذاتية")
- `src/assets/am_logo_black.svg` / `am_logo_white.svg` ← الشعار (فاتح / داكن)
- `public/og/og-ar.png` و `og-en.png` ← صور المشاركة على السوشيال ميديا (1200×630)
- `public/favicon.ico` و `favicon-48.png` و `apple-touch-icon.png` ← الأيقونات

## النشر

الموقع منشور على Vercel، وإعدادات الترويسات في `vercel.json`.

## الترخيص

مبني على قالب [astro-multilingual-portfolio-template](https://github.com/nicremo/astro-multilingual-portfolio-template) بترخيص MIT (انظر `LICENSE.md`).
