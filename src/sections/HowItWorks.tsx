import { Reveal, SectionIntro } from '../components/ui'

const STEPS = [
  {
    title: 'Entrada e cadastro',
    text: 'Cadastre o aparelho informando marca, modelo, capacidade e o número de IMEI. Para acessórios, utilize o SKU.',
  },
  {
    title: 'Vistoria de entrada (OS)',
    text: 'Se o aparelho for para a assistência, faça o teste de 8 itens no balcão e imprima a ordem com a assinatura do cliente.',
  },
  {
    title: 'Venda no PDV',
    text: 'Selecione o produto ou serviço, aplique descontos autorizados e escolha como o cliente vai pagar.',
  },
  {
    title: 'Pagamento combinado',
    text: 'Divida o valor entre PIX, cartão de crédito e dinheiro sem complicações no sistema.',
  },
  {
    title: 'Fechamento de caixa',
    text: 'No fim do turno, o operador faz a contagem dos valores. O sistema aponta se houve qualquer divergência.',
  },
  {
    title: 'Relatórios de lucro',
    text: 'Veja os resultados diários, comissões dos vendedores e a margem de lucro de cada loja.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" aria-label="Como funciona" className="bg-black px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl rounded-2xl bg-card px-6 py-16 sm:px-10 md:rounded-[2rem] md:py-24">
        <SectionIntro
          label="Simplicidade de uso"
          lines={[
            [{ text: 'Como o TellexApp funciona' }],
            [{ text: 'na rotina da loja.', className: 'italic font-serif text-primary/60' }],
          ]}
        />

        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 0.08} className="border-t border-white/10 pt-6">
              <span className="font-serif text-4xl italic text-primary/50">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg" style={{ color: '#E1E0CC' }}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
