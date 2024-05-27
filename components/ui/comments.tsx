'use client';

import React, { useEffect, useRef } from 'react';

export default function Comments() {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'Refactor-Study/refactor-javascript-deep-dive'); //자신의 repo
    script.setAttribute('issue-term', 'title');
    script.setAttribute('theme', 'preferred-color-scheme');
    script.setAttribute('label', '✨💬✨ Comment');
    script.setAttribute('crossorigin', 'anonymous');
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
