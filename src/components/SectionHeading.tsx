type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex justify-center">
      <h2 className="mb-8 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center text-3xl font-medium uppercase tracking-widest text-transparent">
        {children}
      </h2>
    </div>
  )
}
