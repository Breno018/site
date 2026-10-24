import { Plus } from 'lucide-react'
import { Reveal, SectionIntro } from '../components/ui'
import { COLORS } from '../theme'

const FAQ = [
  {
    q: 'Para quem é o TellexApp?',
    a: 'Para lojas que vendem e consertam celulares: lojas de aparelhos novos e seminovos, acessórios e assistências técnicas, com uma ou mais unidades.',
  },
  {
    q: 'Como funciona o controle por IMEI?',
    a: 'Cada aparelho é cadastrado com marca, modelo, capacidade e número de IMEI. Assim você sabe exatamente qual celular foi vendido, para quem e qual a garantia associada. Acessórios usam SKU.',
  },
  {
    q: 'O que é o Checklist 8P?',
    a: 'É a vistoria de entrada da ordem de serviço: o atendente testa 8 itens principais (Wi-Fi e Bluetooth, câmeras, Touch ID/Face ID, conector de carga, alto-falante, botões, tela e bateria) junto com o cliente, e a OS é impressa e assinada.',
  },
  {
    q: 'Posso receber em mais de uma forma de pagamento no mesmo pedido?',
    a: 'Sim. No PDV você combina PIX, cartão, dinheiro e boleto no mesmo pedido, e o fechamento de caixa aponta se houve qualquer divergência.',
  },
  {
    q: 'Tenho mais de uma loja. O sistema atende?',
    a: 'Sim. Você alterna entre as lojas com um clique, consulta o estoque de outras unidades e tem relatórios consolidados. Cada funcionário acessa só o que o perfil dele permite.',
  },
  {
    q: 'Existe fidelidade ou taxa escondida?',
    a: 'Não. Não há contratos engessados nem taxas escondidas: você pode cancelar ou mudar de plano quando quiser.',
  },
]

export default function Faq() {
  return (
    <section id="duvidas" aria-label="Dúvidas" className="bg-ink px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl rounded-2xl bg-card px-6 py-16 sm:px-10 md:rounded-[2rem] md:py-24">
        <SectionIntro
          label="Dúvidas"
          lines={[[{ text: 'Perguntas' }, { text: 'frequentes.', className: 'italic font-serif text-brand-soft' }]]}
        />

        <div className="mx-auto mt-12 max-w-3xl border-t border-primary/10">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <details className="group border-b border-primary/10 [&_summary::-webkit-details-marker]:hidden">
                <summary
                  className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 text-base sm:text-lg"
                  style={{ color: COLORS.title }}
                >
                  {item.q}
                  <Plus
                    className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-6 text-sm leading-relaxed text-mist sm:text-base">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
