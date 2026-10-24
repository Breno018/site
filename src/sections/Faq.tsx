import { ChevronDown } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/ui'

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
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="bg-surface py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading
            chip="Dúvidas"
            title={<span id="duvidas-titulo">Perguntas frequentes</span>}
            text="Não encontrou o que procurava? Fale com a gente e agende uma demonstração."
          />
        </Reveal>

        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <details className="group card px-6 py-1 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {item.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
