'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const DownloadSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  return (
    <section
      aria-label="download-section"
      className="bg-[#2D1B69] text-white py-16 md:py-24 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Download the App
        </motion.h2>
        <motion.p
          className="text-center text-lg mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get started with DailyMood.{' '}
          {isMobile
            ? 'Download directly for your device.'
            : 'Scan the QR code or download directly for your device.'}
        </motion.p>

        {isMobile ? (
          <div className="flex flex-col items-center space-y-4">
            <DownloadButton platform="Android" />
            <DownloadButton platform="iOS" />
          </div>
        ) : (
          <div className="flex justify-center space-x-16">
            <QRCode platform="Android" />
            <QRCode platform="iOS" />
          </div>
        )}
      </div>
    </section>
  )
}

const DownloadButton = ({ platform }: { platform: 'Android' | 'iOS' }) => (
  <motion.a
    href={`#download-${platform.toLowerCase()}`}
    className="bg-[#CB3E73] hover:bg-[#EC877F] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-64 text-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label={`Download for ${platform}`}
  >
    Download for {platform}
  </motion.a>
)

const QRCode = ({ platform }: { platform: 'Android' | 'iOS' }) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    {/* Placeholder for QR code image */}
    {/* <Image
      src={`/qr-code-${platform.toLowerCase()}.png`}
      alt={`QR code for ${platform} app`}
      width={200}
      height={200}
      className="mb-4"
    /> */}
    <div
      className="w-[200px] h-[200px] bg-gray-400 mb-4 rounded-lg"
      aria-label={`QR code for ${platform} app (placeholder)`}
    />
    <p className="text-center">For {platform}</p>
  </motion.div>
)

export default DownloadSection
