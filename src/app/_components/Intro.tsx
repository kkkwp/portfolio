'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsArrowDown } from 'react-icons/bs'

export default function Intro() {
  return (
    <section className="py-32 md:py-48 lg:py-60">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
          className="flex flex-col items-center"
        >
          <Image
            src="/assets/profile.png"
            alt="my profile"
            width={200}
            height={200}
          />
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="size-2.5 rounded-full bg-green-500"></div>
            <div className="text-sm font-medium text-white">
              Available for new projects
            </div>
          </div>
        </motion.div>

        <div className="mx-auto max-w-lg">
          <motion.h1
            className="mt-8 text-center text-3xl tracking-wide"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            끊임없이 탐구하는 개발자 정채윤입니다.
          </motion.h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">123</p>
        </div>

        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
            <span className="font-semibold">Explore My Work</span>
            <BsArrowDown className="size-4" />
          </button>
          <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900">
            <span className="font-semibold">Download CV</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
