'use client'
import { useRouter } from 'next/navigation'
import { AiOutlineClose } from 'react-icons/ai'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const handleClose = () => router.back()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        className="relative w-auto max-w-[90%] rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <AiOutlineClose className="size-5" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}
