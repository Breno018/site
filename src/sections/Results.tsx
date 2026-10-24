import { CheckItem, Reveal, SectionHeading } from '../components/ui'

export default function Results() {
  return (
    <section aria-labelledby="resultados-titulo" className="bg-surface py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            center
            chip="Impacto na rotina"
            title={<span id="resultados-titulo">Resultados reais observados pelos nossos clientes</span>}
            text="A mudança prática percebida já nas primeiras semanas de uso do sistema."
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          <Reveal className="card p-8 text-center">
            <p className="text-5xl font-extrabold text-emerald-500">-90%</p>
            <p className="mt-3 font-bold">Divergências no estoque</p>
            <p className="mt-1 text-sm text-muted">Devido ao controle obrigatório por IMEI.</p>
          </Reveal>
          <Reveal delay={0.08} className="card p-8 text-center">
            <p className="text-5xl font-extrabold text-brand">100%</p>
            <p className="mt-3 font-bold">Blindagem em ordens de serviço</p>
            <p className="mt-1 text-sm text-muted">Com o checklist 8P impresso e assinado.</p>
          </Reveal>
          <Reveal delay={0.12} className="card p-8 sm:col-span-2">
            <h3 className="text-lg font-bold">O que muda na prática para o dono da loja:</h3>
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed">
              <CheckItem tone="green">
                <strong>Menos interrupções:</strong>{' '}
                <span className="text-muted">a equipe consegue consultar estoque e garantias sem precisar te ligar.</span>
              </CheckItem>
              <CheckItem tone="green">
                <strong>Caixa confiável:</strong>{' '}
                <span className="text-muted">fim das discussões de final de expediente sobre diferenças de valores.</span>
              </CheckItem>
              <CheckItem tone="green">
                <strong>Tomada de decisão rápida:</strong>{' '}
                <span className="text-muted">dados claros sobre quais marcas e modelos dão mais lucro.</span>
              </CheckItem>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
