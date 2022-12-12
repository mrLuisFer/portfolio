import Hero from 'src/components/pages/home/Hero'
import AboutResume from 'src/components/pages/home/AboutResume'
import LikeToDo from 'src/components/pages/home/LikeToDo/LikeToDo'
import { NextPage } from 'next/types'
import TechSkills from 'src/components/pages/home/TechSkills'
import SEO from 'src/components/common/SEO'
import { useTranslation } from 'next-i18next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO
        title='Portfolio | mrLuisFer'
        description='Portfolio created using react & typescript, and using styled components for the css and much more'
      />
      <p>{t('welcome')}</p>
      <Hero />
      <AboutResume />
      <LikeToDo />
      <TechSkills />
    </>
  )
}

export default Home
