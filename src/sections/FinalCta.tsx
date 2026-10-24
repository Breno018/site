import { motion } from 'framer-motion'
import { Globe, Mail, MessageCircle } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import { EASE_OUT, PillCta } from '../components/ui'
import { CONFIG, img, whatsappLink } from '../config'

export default function FinalCta() {
  const wa = whatsappLink()
  const websiteLabel = CONFIG.website.replace(/^https?:\/\//, '')
  const ctaHref = wa ?? `mailto:${CONFIG.email}?subject=${encodeURIComponent('Demonstração do TellexApp')}`

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="p-4 md:p-6">
      <div className="relative overflow-hidden rounded-2xl bg-card md:rounded-[2rem]">
        <img
          src={img('logo.png')}
          alt=""
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-[420px] w-[420px] rotate-12 opacity-[0.12] blur-[2px] sm:h-[560px] sm:w-[560px]"
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative px-6 py-20 text-center sm:px-10 md:py-28">
          <p className="label mb-6">Demonstração sem compromisso</p>
          <h2 id="contato-titulo" style={{ color: '#E1E0CC' }}>
            <WordsPullUpMultiStyle
              className="mx-auto max-w-4xl text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl"
              segments={[
                { text: 'Sua loja mais inteligente', className: 'font-normal' },
                { text: 'começa aqui.', className: 'italic font-serif' },
              ]}
            />
          </h2>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-sm text-primary/70 sm:text-base"
            style={{ lineHeight: 1.3 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
          >
            Agende uma rápida demonstração. Nosso time mostra o sistema funcionando ao vivo, na prática. Sem burocracia.
            Teste grátis.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT }}
          >
            <PillCta href={ctaHref} external={!!wa}>
              {wa ? 'Falar no WhatsApp' : 'Agendar por e-mail'}
            </PillCta>
          </motion.div>

          <dl className="mx-auto mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-left sm:grid-cols-3">
            <div className="flex items-start gap-3 bg-black/70 p-5">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-xs text-gray-500">WhatsApp comercial</dt>
                <dd className="mt-0.5 text-sm" style={{ color: '#E1E0CC' }}>
                  {wa ? (
                    <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {CONFIG.whatsapp}
                    </a>
                  ) : (
                    <span className="text-gray-400">Canal será disponibilizado em breve.</span>
                  )}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-black/70 p-5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-xs text-gray-500">E-mail</dt>
                <dd className="mt-0.5 break-words text-sm" style={{ color: '#E1E0CC' }}>
                  <a href={`mailto:${CONFIG.email}`} className="hover:underline">
                    {CONFIG.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-black/70 p-5">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-xs text-gray-500">Website oficial</dt>
                <dd className="mt-0.5 text-sm" style={{ color: '#E1E0CC' }}>
                  <a href={CONFIG.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {websiteLabel}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
