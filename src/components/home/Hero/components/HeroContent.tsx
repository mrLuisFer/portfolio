import GlowBox from '@/components/common/GlowBox'
import JavaScriptIcon from '@/components/common/Icons/Javascript'
import NodejsIcon from '@/components/common/Icons/NodeJs'
import ReactJsIcon from '@/components/common/Icons/React'
import TypeScriptIcon from '@/components/common/Icons/Typescript'
import { useTranslation } from '@/hooks/useTranslation'

export default function HeroContent() {
  const { t } = useTranslation()

  return (
    <div>
      <section>
        <p className='hidden text-4xl opacity-50 hover:opacity-70 sm:text-3xl md:inline-block md:text-4xl'>
          {t('hello')}!
        </p>
        <div className='flex items-center justify-center gap-2 text-4xl font-bold sm:text-3xl md:justify-start md:gap-6 md:text-4xl lg:gap-1'>
          {t('heroIam')}{' '}
          <GlowBox
            color='rgba(0, 123, 255, 0.5)'
            borderColor='#131313'
            backgroundColor='#000'>
            <p
              id='titleName'
              className='bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-5xl font-bold text-transparent'>
              <a href='https://github.com/mrLuisFer'>Luis Alvarez</a>
            </p>
          </GlowBox>
        </div>
      </section>
      <section className='flex flex-col gap-4'>
        <GlowBox color='#c24a86ae' size={70} padding={10} defaultBorder='#3d3d3d'>
          <p
            id='seniority'
            className='inline-block bg-gradient-to-tr from-purple-500 to-pink-600 bg-clip-text font-bold text-transparent'>
            {t('heroJob')}
          </p>
        </GlowBox>
        <article className='flex max-w-[410px] flex-col gap-3'>
          <p className='flex flex-wrap gap-2 text-justify'>
            {t('specializedIn')}{' '}
            <span className='flex w-fit items-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text font-bold text-transparent transition hover:bg-gradient-to-l'>
              <JavaScriptIcon />
              Javascript
            </span>
            ,{' '}
            <span className='flex w-fit items-center gap-1 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text font-bold text-transparent transition hover:bg-gradient-to-l'>
              <TypeScriptIcon />
              Typescript
            </span>{' '}
            and{' '}
            <span className='flex w-fit items-center gap-1 bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text font-bold text-transparent transition hover:bg-gradient-to-l'>
              {' '}
              <ReactJsIcon />
              React.js{' '}
            </span>{' '}
            {t('for')}{' '}
            <span className='font-semibold hover:text-orange-300'>{t('Ui')}</span>{' '}
            {t('and')}{' '}
            <span className='font-semibold hover:text-cyan-200'>
              {t('webAplications')}
            </span>
          </p>
          <p className='flex flex-wrap gap-2 text-justify'>
            {t('Also')}{' '}
            <span className='flex items-center gap-1 bg-gradient-to-r from-green-400 to-green-200 bg-clip-text font-bold text-transparent'>
              <NodejsIcon />
              Node.js
            </span>{' '}
            {t('for Backend Development')}
          </p>
        </article>
      </section>
    </div>
  )
}
