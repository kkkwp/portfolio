import Readme from '@/components/Readme'
import { Modal } from '@/components/Modal'

export default function ReadmePage({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <Readme id={params.id} />
    </Modal>
  )
}
