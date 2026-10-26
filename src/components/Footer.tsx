import Link from 'next/link'
import { Container } from '@/components/Container'
import { buyNowLink, changelogLink, demoLink } from '@/constant'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6 text-sm">
            {[
              { name: 'Live demo', href: demoLink },
              { name: 'Changelog', href: changelogLink },
              { name: 'Buy on ThemeForest', href: buyNowLink },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="text-slate-500 hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500 sm:mt-0 sm:text-left">
            Copyright &copy; {new Date().getFullYear()} BooliiTheme. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
