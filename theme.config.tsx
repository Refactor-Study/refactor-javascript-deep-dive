import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { Thumbnail, Author, Comments } from './components';

const config: DocsThemeConfig = {
  toc: {
    title: '목차',
  },
  editLink: { text: 'GitHub에서 수정하기' },
  feedback: {
    content: <span>문서에 대한 피드백을 남겨주세요.</span>,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div className='flex items-center gap-2 text-neutral-400 dark:text-neutral-500 font-normal'>
            {title}
            <div className='h-0 flex-1 border-t-[0.5px] border-neutral-500' />
          </div>
        );
      }
      return <>{title}</>;
    },
  },
  search: {
    placeholder: '검색...',
  },
  logo: (
    <div className='flex items-center gap-2'>
      <img
        src='/icons/logo_black.png'
        alt='프로필 이미지'
        className='h-5 object-cover dark:hidden'
      />
      <img
        src='/icons/logo_white.png'
        alt='프로필 이미지'
        className='hidden h-5 object-cover dark:block'
      />
      <h2 className='font-bold text-xl'>스터디 그룹</h2>
    </div>
  ),
  project: {
    link: 'https://github.com/refactor-study',
  },

  docsRepositoryBase:
    'https://github.com/Refactor-Study/refactor-javascript-deep-dive/tree/main',
  footer: {
    text: '2024 © 이호연 All rights reserved.',
  },
  main: ({ children }) => {
    const { frontMatter } = useConfig();
    return (
      <>
        {frontMatter?.title && (
          <h1 className='nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100'>
            {frontMatter.title}
          </h1>
        )}
        {frontMatter?.date && (
          <Author date={frontMatter.date} author={frontMatter.author} />
        )}
        {frontMatter?.image && <Thumbnail src={frontMatter.image} />}
        {children}
        <Comments />
      </>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Refactor; 스터디 그룹',
    };
  },
  head: () => {
    const { route } = useRouter();
    const { frontMatter, title } = useConfig();
    const imageUrl = new URL('https://ho991217.vercel.app');

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set('title', title || frontMatter.title);
    }

    const ogTitle = title
      ? `${title} – Refactor; 스터디 그룹`
      : `Refactor; 스터디 그룹`;
    const ogDescription =
      frontMatter.description || 'Refactor; 스터디 그룹입니다.';
    const ogImage = frontMatter.image || '/images/og.png';

    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={ogDescription} />
        <meta name='og:type' content='website' />
        <meta name='twitter:image' content={ogImage} />
        <meta property='og:title' content={ogTitle} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:image' content={ogImage} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
      </>
    );
  },
};

export default config;
