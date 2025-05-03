// components/StylesheetLoader.tsx
"use client"
export default function StylesheetLoader() {
  return (
    <link
      rel="stylesheet"
      href="/non-critical.css"
      media="print"
      onLoad={(e) => e.currentTarget.media = 'all'}
    />
  );
}