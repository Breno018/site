import { Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/ui'

const PROBLEMS = [
  {
    title: 'Perda de tempo procurando aparelhos',
    text: 'Não saber exatamente em qual prateleira ou loja está o modelo que o cliente pediu no balcão.',
  },
  {
    title: 'Aparelho sumido ou trocado',
    text: 'Vender um seminovo sem registrar o IMEI e depois não saber qual aparelho foi entregue.',
  },
  {
    title: 'Reclamação após manutenção',
    text: 'O cliente alegar que a câmera ou o Touch ID parou de funcionar durante o serviço na bancada.',
  },
  {
    title: 'Furos no fechamento do caixa',
    text: 'Misturar pagamentos em PIX, dinheiro e taxas de cartão sem conciliação no final do dia.',
  },
  {
    title: 'Falta de visão sobre o lucro real das lojas',
    text: 'Saber quanto faturou, mas não ter clareza de quanto sobrou após descontar o custo das peças e compras de seminovos.',
  },
]

export default function Problems() {
  return (
    <section aria-labelledby="problemas-titulo" className="container-x py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          chip="Desafios do setor"
          title={<span id="problemas-titulo">Sua loja enfrenta algum desses 5 problemas?</span>}
          text="Lidar com aparelhos de alto valor exige controles que cadernos e planilhas simples não oferecem."
        />
      </Reveal>

      <ol className="mt-12 grid gap-4 md:grid-cols-2">
        {PROBLEMS.map((p, i) => (
          <Reveal
            as="li"
            key={p.title}
            delay={i * 0.05}
            className={`rounded-2xl border border-line border-l-4 border-l-red-500 bg-surface p-6 ${i === 4 ? 'md:col-span-2' : ''}`}
          >
            <h3 className="font-bold text-red-600">
              {i + 1}. {p.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.text}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <div className="mt-4 flex items-start gap-4 rounded-2xl border border-brand/20 bg-brand-soft p-6">
          <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <p className="font-bold text-brand">O TellexApp foi criado para eliminar esses gargalos.</p>
            <p className="mt-1 text-[15px] text-muted">
              Trazemos a organização que sua equipe precisa para trabalhar com tranquilidade e focar no que importa:
              vender mais.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
