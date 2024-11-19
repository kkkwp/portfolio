import Readme from '@/components/Readme'
import { Modal } from '@/components/Modal'

export default async function ReadmePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params

  return (
    <Modal>
      <Readme id={resolvedParams.id} />
    </Modal>
  )
}
