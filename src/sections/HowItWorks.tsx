import { Reveal, SectionHeading } from '../components/ui'

const STEPS = [
  {
    title: 'Entrada e Cadastro',
    text: 'Cadastre o aparelho informando marca, modelo, capacidade e o número de IMEI. Para acessórios, utilize o SKU.',
  },
  {
    title: 'Vistoria de Entrada (OS)',
    text: 'Se o aparelho for para a assistência, faça o teste de 8 itens no balcão e imprima a ordem com a assinatura do cliente.',
  },
  {
    title: 'Venda no PDV',
    text: 'Selecione o produto ou serviço, aplique descontos autorizados e escolha como o cliente vai pagar.',
  },
  {
    title: 'Pagamento Combinado',
    text: 'Divida o valor entre PIX, cartão de crédito e dinheiro sem complicações no sistema.',
  },
  {
    title: 'Fechamento de Caixa',
    text: 'No fim do turno, o operador faz a contagem dos valores. O sistema aponta se houve qualquer divergência.',
  },
  {
    title: 'Relatórios de Lucro',
    text: 'Veja os resultados diários, comissões dos vendedores e a margem de lucro de cada loja.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="fluxo-titulo" className="container-x py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          center
          chip="Simplicidade de uso"
          title={<span id="fluxo-titulo">Como o TellexApp funciona na rotina da loja</span>}
          text="Um fluxo simples que acompanha desde a entrada do aparelho até o dinheiro no caixa."
        />
      </Reveal>

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.title} delay={(i % 3) * 0.06} className="card relative p-6">
            <span className="text-sm font-extrabold tracking-wider text-brand">PASSO {i + 1}</span>
            <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
            <span
              className="pointer-events-none absolute right-5 top-4 text-5xl font-extrabold text-brand/[0.07]"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
