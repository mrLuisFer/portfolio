import { Input } from '@/components/ui/input'
import { Dispatch, FormEvent, SetStateAction } from 'react'
import { VscDebugRestart } from 'react-icons/vsc'

function IconCircle({ color }: { color: string }) {
  return (
    <svg className={`h-4 w-4 ${color}`} viewBox='0 0 200 200'>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </svg>
  )
}

type EditorHeaderProps = {
  editorUrl: string
  setEditorUrl: Dispatch<SetStateAction<string>>
  handleClickIcon: () => void
}
export default function EditorHeader({
  editorUrl,
  setEditorUrl,
  handleClickIcon,
}: EditorHeaderProps) {
  return (
    <div className='flex items-center justify-between border-b border-gray-600 p-2.5'>
      <div className='mb-4 flex items-center gap-1'>
        <button>
          <IconCircle color='text-red-500' />
        </button>
        <IconCircle color='text-yellow-400' />
        <IconCircle color='text-green-300' />
      </div>
      <Input
        value={editorUrl}
        placeholder='https://mrluisfer.vercel.app'
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setEditorUrl((e.target as HTMLInputElement).value)
        }
        className='w-52 transition focus-within:bg-gray-900 hover:bg-gray-900 active:bg-gray-800'
      />
      <button
        onClick={handleClickIcon}
        className='rounded-full border-2 p-2 opacity-50 hover:opacity-100'>
        <VscDebugRestart size={15} />
      </button>
    </div>
  )
}
