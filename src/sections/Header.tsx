import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '../components/ui'
import { systemLink } from '../config'

export const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter((el): el is Element => !!el)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-white/90 backdrop-blur-md' : 'bg-white/0'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <a href="#inicio" aria-label="TellexApp, voltar ao início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? 'true' : undefined}
                  className={`relative py-2 transition-colors hover:text-brand ${
                    active === item.href ? 'text-brand' : 'text-ink/80'
                  }`}
                >
                  {item.label}
                  {active === item.href && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-brand" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={systemLink()} className="btn-primary hidden !min-h-[44px] lg:inline-flex">
          Entrar no sistema <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="menu-movel"
        className={`fixed inset-x-0 bottom-0 top-[calc(72px+env(safe-area-inset-top))] bg-white px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-4 transition-[opacity,visibility] duration-200 sm:px-8 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-[56px] items-center border-b border-line text-xl font-semibold ${
                  active === item.href ? 'text-brand' : 'text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={systemLink()} onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">
          Entrar no sistema <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
