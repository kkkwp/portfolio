'use client'
import React from 'react'
import Image from 'next/image'
import { BsArrowDown } from 'react-icons/bs'

export default function Intro() {
  return (
    <section id="home" className="relative z-0 py-32 md:py-48 lg:py-60">
      <div className="hero-ring size-[620px]" />
      <div className="hero-ring size-[820px]" />
      <div className="hero-ring size-[1020px]" />
      <div className="hero-ring size-[1220px]" />

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/profile.png"
            alt="my profile"
            width={200}
            height={200}
          />
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="size-2.5 rounded-full bg-green-500"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center text-3xl tracking-wide">
            끊임없이 탐구하는 개발자 정채윤입니다.
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            개인 시간에 다양한 표준 및 새로운 기술을 익히는 것을 즐깁니다.
            <br />
            공부한 내용들에 대하여 꾸준히 기록을 남기고 실습하면서 체화해오고
            있습니다.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href="#projects"
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6"
          >
            <span className="font-semibold">Explore My Work</span>
            <BsArrowDown className="size-4" />
          </a>
          <a
            href="/assets/CV.pdf"
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900"
            download
          >
            <span className="font-semibold">Download CV</span>
          </a>
        </div>
      </div>
    </section>
  )
}
