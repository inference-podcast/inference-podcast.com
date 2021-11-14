import Image from 'next/image';
import { InferenceIcon } from 'components/svg/inference-logo';
import BgImage from '../public/imgs/hero-bg.jpg';
import SerokellLogo from '../public/imgs/serokell-logo.svg';
import GraphCMSLogo from '../public/imgs/graphcms-logo.svg';
import SHLogo from '../public/imgs/sh-logo.svg';
import TDLogo from '../public/imgs/td-logo.svg';

export default function Home() {
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
    </div>
  );
}
