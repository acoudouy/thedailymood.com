import { Metadata } from 'next'
import { domain, projectName, shortDescription, tagline } from '../env'
import HeroLandingPage from '../components/hero/index'
import { Footer } from '../components/Footer'
import BannerAppLandingPage from '../components/bannerAppLandingPage'
import StepsToCreateVideoBanner from '../components/stepsToCreateVideoBanner'
import CustomerFeedbackSliderLanding from '../components/customerFeedbackSlider'
import VideoShowcaseBannerLandingPage from '../components/videoShowcaseLanding'
import BannerCtaEndLandingPage from '../components/bannerCtaEndLandingPage'
import PricingBannerLandingPage from '../components/pricingBanner'

//  https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots
export const metadata: Metadata = {
  title: `${projectName} | ${tagline}`,
  description: shortDescription,
  // generator: 'Next.js',
  // applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // creator: 'Jiachi Liu',
  // publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${projectName} | ${tagline}`,
    description: shortDescription,
    url: domain,
    siteName: projectName,
    images: [
      {
        url: 'https://minty.so/screenshots/metaimage.png', // Must be an absolute URL
        width: 1169,
        height: 673,
        alt: 'Minty.so hero image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/android-chrome-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Next.js',
  //   description: 'The React Framework for the Web',
  //   siteId: '1467726470533754880',
  //   creator: '@nextjs',
  //   creatorId: '1467726470533754880',
  //   images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  // },
}

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen max-w-[100vw] overflow-hidden flex-col items-center justify-between bg-m-black ">
        <HeroLandingPage />
        <BannerAppLandingPage />
        <StepsToCreateVideoBanner />
        <CustomerFeedbackSliderLanding />
        <VideoShowcaseBannerLandingPage />
        <PricingBannerLandingPage />
        <BannerCtaEndLandingPage />
      </div>
      <Footer isBgBlack={true} />
    </>
  )
}