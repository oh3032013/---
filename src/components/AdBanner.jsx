import { useEffect, useRef } from 'react';

const AdBanner = ({ type, style = {} }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let scriptElements = [];

    if (type === 'banner728x90') {
      const optionsScript = document.createElement('script');
      optionsScript.innerHTML = `
        window.atOptions = {
          'key': 'e7c57c310497834d8a981acebb67cc51',
          'format': 'iframe',
          'height': 90,
          'width': 728,
          'params': {}
        };
      `;
      container.appendChild(optionsScript);
      scriptElements.push(optionsScript);

      const invokeScript = document.createElement('script');
      invokeScript.src = 'https://www.highperformanceformat.com/e7c57c310497834d8a981acebb67cc51/invoke.js';
      container.appendChild(invokeScript);
      scriptElements.push(invokeScript);
    } else if (type === 'nativeBanner') {
      const invokeScript = document.createElement('script');
      invokeScript.async = true;
      invokeScript.setAttribute('data-cfasync', 'false');
      invokeScript.src = 'https://pl29680446.effectivecpmnetwork.com/1555554897eb45fa2d216082e8acd48b/invoke.js';
      container.appendChild(invokeScript);
      scriptElements.push(invokeScript);

      const wrapper = document.createElement('div');
      wrapper.id = 'container-1555554897eb45fa2d216082e8acd48b';
      container.appendChild(wrapper);
    }

    return () => {
      scriptElements.forEach(s => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
      const nativeContainer = container.querySelector('#container-1555554897eb45fa2d216082e8acd48b');
      if (nativeContainer && nativeContainer.parentNode) {
        nativeContainer.parentNode.removeChild(nativeContainer);
      }
    };
  }, [type]);

  return (
    <div
      ref={containerRef}
      className="ad-banner-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
        background: 'rgba(12, 6, 29, 0.3)',
        overflow: 'hidden',
        ...style
      }}
    />
  );
};

export default AdBanner;
