import Link, { LinkProps } from 'next/link'

type NavLinkProps = LinkProps & React.ComponentPropsWithoutRef<'a'>

export function NavLink(props: NavLinkProps) {
  return (
    <Link
      className="inline-block rounded-lg px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      {...props}
    />
  )
}
