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
        className="relative size-auto max-h-[90%] min-h-[200px] min-w-[300px] max-w-3xl overflow-auto rounded-lg bg-white p-10 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-6 top-6 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <AiOutlineClose className="size-5" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}
