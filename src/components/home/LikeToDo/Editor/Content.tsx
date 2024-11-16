import { BsCart3 } from 'react-icons/bs'

interface EditorSkeletonProps {
  children?: any
  w: string | number
  h: string | number
  bg?: string
  m?: string
  className?: string
}

function EditorSkeleton({ children, w, h, bg, m, className }: EditorSkeletonProps) {
  return (
    <div
      className={`${m || 'm-0'} flex items-center justify-center rounded-lg ${bg ? `bg-${bg}` : ''} ${className ? className : ''} filter transition hover:brightness-105`}
      style={{ width: w, height: h }}>
      {children}
    </div>
  )
}

export default function EditorContent({ icon }: { icon: React.ReactNode }) {
  const currentDay = new Date().getDate().toString()
  return (
    <div className='p-6'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex items-start gap-2'>
          <div className='flex items-center justify-center rounded-full bg-white p-2 text-black'>
            <BsCart3 />
          </div>
          <div className='flex flex-col gap-2'>
            <EditorSkeleton w='70px' h='7px' bg='white' />
            <EditorSkeleton w='90px' h='7px' bg='gray-700' />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <EditorSkeleton w='40px' h='7px' bg='gray-700' />
          <EditorSkeleton w='40px' h='7px' bg='gray-700' />
          <EditorSkeleton w='40px' h='7px' bg='gray-700' />
        </div>
      </div>
      <div className='mt-8 grid grid-cols-2 gap-4'>
        <div className='flex h-[100px] items-center justify-center rounded bg-[#252525] p-2 text-white hover:bg-[#2f2f2f]'>
          {icon}
        </div>
        <div>
          <div className='flex items-start justify-between'>
            <EditorSkeleton w='90px' h='30px' bg='gray-700' />
            <EditorSkeleton w='50px' h='20px' className='bg-blue-400 p-2'>
              <span className='text-xs'>${currentDay}</span>
            </EditorSkeleton>
          </div>
          <div className='mt-4'>
            <EditorSkeleton w='100%' h='100px' bg='gray-700' />
          </div>
        </div>
      </div>
    </div>
  )
}
