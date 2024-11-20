import GlowBox, { GlowBoxProps } from './GlowBox'

type SectionTitleProps = {
  children: React.ReactNode
  glowProps: Omit<GlowBoxProps, 'children'>
  className?: string
  id?: string
}
export default function SectionTitle({
  children,
  glowProps,
  className,
  id,
}: SectionTitleProps) {
  return (
    <section className='flex items-center justify-center'>
      <GlowBox {...glowProps} width={glowProps.width || '100%'}>
        <p
          id={id}
          className={`mb-4 inline-block text-center text-4xl font-extrabold leading-relaxed transition md:text-5xl ${className}`}>
          {children}
        </p>
      </GlowBox>
    </section>
  )
}
