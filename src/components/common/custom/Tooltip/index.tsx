export default function Tooltip({
  label,
  children,
  placement = 'bottom',
}: {
  label: string
  children: any
  placement?: string
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
