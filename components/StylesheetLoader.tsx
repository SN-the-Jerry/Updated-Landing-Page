// components/StylesheetLoader.tsx
"use client"

export default function StylesheetLoader() {
  return (
    <>
      <link
        rel="preload"
        href="/critical.css"
        as="style"
      />
      <link
        rel="stylesheet"
        href="/critical.css"
      />
      <link
        rel="stylesheet"
        href="/non-critical.css"
        media="print"
        onLoad={(e) => {
          // Mark as already viewed to prevent repainting
          if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('css-loaded', 'true');
          }
          e.currentTarget.media = 'all'
        }}
      />
    </>
  );
}