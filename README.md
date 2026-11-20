# REED Model Secondary School website (React)

Stack: Vite, React 18, React Router 6, Tailwind CSS 3, Lucide icons.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # output in dist/

## Edit content
- All school text, nav, notices, FAQs: `src/data.js`
- Logo: put the official file at `public/logo.png` (unaltered)
- Photos: replace `<Placeholder />` in the pages with `<img loading="lazy" alt="..." />`
- Forms: connect in `src/components/EnquiryForm.jsx` (marked INTEGRATION POINT)
- Map: set `mapEmbedUrl` in `src/data.js`
- Notices are SAMPLES. Replace with real ones.

For hosting on a static server, configure a fallback to index.html (needed by BrowserRouter).
