import { Skeleton } from '@/components/ui/skeleton'
import { BsCart3 } from 'react-icons/bs'

export default function EditorContent({
  icon,
  editorUrl,
}: {
  icon: React.ReactNode
  editorUrl: string
}) {
  const currentDay = new Date().getDate().toString()
  return (
    <div className='p-4 md:p-6'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex items-start gap-2'>
          <div className='flex animate-pulse items-center justify-center rounded-full bg-zinc-300 p-2 text-black transition hover:bg-white'>
            <BsCart3 />
          </div>
          <div className='flex flex-col gap-2'>
            <Skeleton className='h-2 w-16' />
            <Skeleton className='h-2 w-16' />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Skeleton className='h-2 w-10' />
          <Skeleton className='h-2 w-10' />
        </div>
      </div>
      <div className='mt-8 grid grid-cols-2 gap-4'>
        <section>
          <div className='flex h-[100px] animate-pulse items-center justify-center rounded bg-[#252525] p-2 text-white hover:bg-[#2f2f2f]'>
            {icon}
          </div>
          <div className='flex flex-col gap-2 pt-3'>
            <p className='text-xs opacity-45 hover:opacity-70'>{editorUrl}</p>
            <Skeleton className='h-2 w-12' />
          </div>
        </section>
        <div>
          <div className='flex items-start justify-between gap-2'>
            <Skeleton className='h-8 w-24' />
            <Skeleton className='h-8 w-24' />
            <span className='animate-pulse rounded-md bg-[hsl(0_0%_98%_/0.1)] px-2 py-1 text-xs'>
              ${currentDay}
            </span>
          </div>
          <div className='mt-4'>
            <Skeleton className='h-24 w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
