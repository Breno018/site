import { InstagramIcon, WhatsappIcon, YoutubeIcon } from '../components/SocialIcons'
import { Logo } from '../components/ui'
import { CONFIG, whatsappLink } from '../config'
import { NAV } from './Hero'
import { COLORS } from '../theme'


export default function Footer() {
  const socials = [
    { label: 'Instagram', href: CONFIG.instagram, icon: InstagramIcon },
    { label: 'YouTube', href: CONFIG.youtube, icon: YoutubeIcon },
    { label: 'WhatsApp', href: whatsappLink() ?? '', icon: WhatsappIcon },
  ].filter((s) => s.href)

  return (
    <footer className="bg-ink px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-12 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <a href="#inicio" aria-label="TellexApp, voltar ao início">
            <Logo />
          </a>
          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-7 gap-y-1 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center transition-colors"
                    style={{ color: COLORS.link }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.linkHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.link)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {socials.length > 0 && (
            <ul className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 text-primary hover:border-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-primary/10 pt-6 text-xs text-dim sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} TellexApp. Todos os direitos reservados.</p>
          <p>Sistema de gestão completo para lojas de celular e assistências técnicas.</p>
        </div>
      </div>
    </footer>
  )
}
