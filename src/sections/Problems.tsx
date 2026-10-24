import { Reveal, SectionIntro } from '../components/ui'

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
    title: 'Falta de visão sobre o lucro real',
    text: 'Saber quanto faturou, mas não quanto sobrou após descontar peças e compras de seminovos.',
  },
]

export default function Problems() {
  return (
    <section aria-label="Desafios do setor" className="container-x pb-20 md:pb-28">
      <SectionIntro
        label="Desafios do setor"
        lines={[
          [{ text: 'Sua loja enfrenta algum' }, { text: 'desses 5 problemas?', className: 'italic font-serif' }],
        ]}
      />

      <ol className="mx-auto mt-12 max-w-4xl border-t border-white/10 md:mt-16">
        {PROBLEMS.map((p, i) => (
          <Reveal
            as="li"
            key={p.title}
            delay={i * 0.05}
            className="grid gap-2 border-b border-white/10 py-6 sm:grid-cols-[4rem_1fr_1.3fr] sm:items-baseline sm:gap-6"
          >
            <span className="font-serif text-3xl italic text-primary/50">0{i + 1}</span>
            <h3 className="text-lg" style={{ color: '#E1E0CC' }}>
              {p.title}
            </h3>
            <p className="text-sm text-gray-400 sm:text-base">{p.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
