import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import 'tailwindcss/tailwind.css';

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/inference-favico.png" />
      </Head>
      <DefaultSeo
        title={'Inference Podcast'}
        twitter={{
          handle: '@MicheleRivaCode',
          site: '@MicheleRivaCode',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://inference-podcast.com',
          site_name: 'Inference Podcast',
          images: [
            {
              url: '/imgs/inference-ogimage.png',
              width: 1920,
              height: 1080,
              alt: 'Inference Podcast',
              type: 'image/png',
            },
          ],
        }}
      />
      <div className="w-full min-h-screen bg-gray-900">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
