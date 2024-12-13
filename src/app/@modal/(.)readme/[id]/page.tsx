import { Modal } from '@/components/Modal'
import BullsAndBears from '@/markdown/bulls-and-bears.mdx'
import MusicQ from '@/markdown/music-q.mdx'
import BarumSpeak from '@/markdown/barum-speak.mdx'

const mdxFiles: Record<string, React.ComponentType> = {
  '1': BullsAndBears,
  '2': MusicQ,
  '3': BarumSpeak,
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const Content = mdxFiles[id] || (() => <p>잘못된 접근입니다.</p>)

  return (
    <Modal>
      <div>
        <Content />
      </div>
    </Modal>
  )
}
