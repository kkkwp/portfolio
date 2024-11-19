export default function Readme({ id }: { id: string }) {
  const contentById: Record<string, { title: string; description: string }> = {
    '1': {
      title: 'Bulls & Bears',
      description: 'Bulls & Bears 상세 내용',
    },
    '2': {
      title: 'MusicQ!',
      description: 'MusicQ! 상세 내용',
    },
    '3': {
      title: '바름스픽',
      description: '바름스픽 상세 내용',
    },
  }

  const content = contentById[id] || {
    title: '404',
    description: '잘못된 접근입니다.',
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-gray-500">{content.title}</h1>
      <p className="mb-4 text-gray-700">{content.description}</p>
    </div>
  )
}
