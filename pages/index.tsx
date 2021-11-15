import { GetStaticProps } from 'next';
import Image from 'next/image';
import { InferenceIcon } from 'components/svg/inference-logo';
import graphcms from 'lib/graphql';
import {
  GET_ALL_GUESTS,
  AllGuests,
} from 'lib/graphql/query/guests/get-all-guests';
import clx from 'classnames';
import BgImage from '../public/imgs/hero-bg.jpg';
import SerokellLogo from '../public/imgs/serokell-logo.svg';
import GraphCMSLogo from '../public/imgs/graphcms-logo.svg';
import SHLogo from '../public/imgs/sh-logo.svg';
import TDLogo from '../public/imgs/td-logo.svg';

export const getStaticProps: GetStaticProps = async () => {
  const { guests } = await graphcms.request<AllGuests>(GET_ALL_GUESTS);
  return {
    props: {
      guests,
    },
  };
};

export default function Home(props: { guests: AllGuests['guests'] }) {
  const guests = props.guests.sort((a, b) => {
    const aEpisode = a.episodes[0];
    const bEpisode = b.episodes[0];

    return bEpisode.season < aEpisode.season ? -1 : 1;
  });

  return (
    <div className="relative min-h-screen">
      <div className="relative w-full min-h-screen">
        <Image
          src={BgImage}
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'center'}
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className={'text-center'}>
            <div className={'flex justify-center items-center'}>
              <InferenceIcon width={450} height={100} />
            </div>
            <p className="text-white mt-4"> made possible by </p>
            <div className="grid grid-cols-1 gap-8 mt-12">
              <a
                href={'https://serokell.io'}
                target={'_blank'}
                className={'flex justify-center items-center'}
              >
                <img src={SerokellLogo.src} alt="Serokell" className="h-12" />
              </a>
              <a
                href={'https://graphcms.com'}
                target={'_blank'}
                className={'flex justify-center items-center'}
              >
                <img src={GraphCMSLogo.src} alt="GraphCMS" className="h-12" />
              </a>
              <a
                href={'https://www.schrodinger-hat.it'}
                target={'_blank'}
                className={'flex justify-center items-center'}
              >
                <img src={SHLogo.src} alt="Schrödinger Hat" className="h-8" />
              </a>
              <a
                href={'https://tomorrowdevs.com/'}
                target={'_blank'}
                className={'flex justify-center items-center'}
              >
                <img src={TDLogo.src} alt="TomorrowDevs" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className={'my-24 text-white text-4xl text-center'}> Guests </h1>

      <div
        className={
          'w-full pb-10 max-w-screen-xl m-auto xl:px-0 md:px-10 sm:px-10'
        }
      >
        <div
          className={'grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10'}
        >
          {guests.map((guest) => (
            <div
              key={guest.id}
              className={'bg-gray-50 rounded-lg text-center shadow-2xl'}
            >
              <div className={'relative w-full h-64'}>
                <Image
                  src={guest.profileImage.url}
                  alt={guest.name}
                  layout={'fill'}
                  objectFit={'cover'}
                  objectPosition={'center'}
                  className={'rounded-t-lg'}
                />
              </div>
              <div
                className={clx('bg-gradient-to-r text-white py-2', {
                  'from-yellow-500 to-pink-500': guest.episodes[0].season === 2,
                  'from-pink-800 to-blue-500': guest.episodes[0].season === 1,
                })}
              >
                Season {guest.episodes[0].season} - Episode{' '}
                {guest.episodes[0].episodeNumber}
              </div>
              <div className={'py-5 px-2'}>
                <p
                  className={clx(
                    'font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r',
                    {
                      'from-yellow-500 to-pink-500':
                        guest.episodes[0].season === 2,
                      'from-pink-800 to-blue-500':
                        guest.episodes[0].season === 1,
                    },
                  )}
                >
                  {guest.name}
                </p>
                <p className={'text-gray-600'}>{guest.jobTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
