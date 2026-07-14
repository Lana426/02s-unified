'use client';

import Script from 'next/script';

export default function Page() {
  return (
    <>
      <section id="landing"></section>
      <div className="app" id="portalApp"></div>
      <div className="app" id="commandApp"></div>
      <div className="app" id="oppApp"></div>
      <div className="app" id="towerApp"></div>
      <div
        className="modal-overlay"
        id="modalOverlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            (window as any).closeModal?.();
          }
        }}
      >
        <div className="modal" id="modalCard"></div>
      </div>
      <div id="toast"></div>
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}
