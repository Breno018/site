import { Globe, Mail, MessageCircle } from 'lucide-react'
import { Reveal } from '../components/ui'
import { CONFIG, whatsappLink } from '../config'

export default function Contact() {
  const wa = whatsappLink()
  const websiteLabel = CONFIG.website.replace(/^https?:\/\//, '')

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="container-x pb-20 sm:pb-28">
      <Reveal>
        <div className="rounded-[2rem] bg-ink px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 id="contato-titulo" className="text-3xl font-extrabold sm:text-4xl">
            Pronto para organizar a sua loja?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
            Agende uma rápida demonstração sem compromisso. Nosso time mostra o sistema funcionando ao vivo na prática.
          </p>

          <div className="mt-8 flex flex-col items-center gap-2">
            {wa ? (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> Falar com um consultor pelo WhatsApp
              </a>
            ) : (
              <a href={`mailto:${CONFIG.email}?subject=${encodeURIComponent('Demonstração do TellexApp')}`} className="btn-primary">
                <Mail className="h-5 w-5" aria-hidden="true" /> Agendar demonstração por e-mail
              </a>
            )}
          </div>

          <dl className="mx-auto mt-10 grid max-w-3xl gap-3 rounded-2xl bg-white/5 p-5 text-left sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl p-2">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#8EA6FF]" aria-hidden="true" />
              <div>
                <dt className="text-xs text-white/60">WhatsApp comercial</dt>
                <dd className="font-semibold">
                  {wa ? (
                    <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {CONFIG.whatsapp}
                    </a>
                  ) : (
                    <span className="text-sm font-normal text-white/70">Canal será disponibilizado em breve.</span>
                  )}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl p-2">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#8EA6FF]" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-xs text-white/60">E-mail</dt>
                <dd className="break-words font-semibold">
                  <a href={`mailto:${CONFIG.email}`} className="hover:underline">
                    {CONFIG.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl p-2">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#8EA6FF]" aria-hidden="true" />
              <div>
                <dt className="text-xs text-white/60">Website oficial</dt>
                <dd className="font-semibold">
                  <a href={CONFIG.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {websiteLabel}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  )
}
