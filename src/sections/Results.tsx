import { CardIn, CheckItem, SectionIntro } from '../components/ui'
import WordsPullUp from '../components/WordsPullUp'

export default function Results() {
  return (
    <section aria-label="Resultados" className="bg-black px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          label="Impacto na rotina"
          lines={[
            [{ text: 'Resultados reais observados' }],
            [{ text: 'pelos nossos clientes.', className: 'italic font-serif text-primary/60' }],
          ]}
        />

        <div className="mt-12 grid gap-3 sm:gap-2 md:mt-16 md:grid-cols-2 md:gap-1">
          <CardIn className="rounded-2xl bg-card p-8 sm:p-10">
            <WordsPullUp
              text="-90%"
              className="text-7xl font-medium leading-none tracking-[-0.05em] sm:text-8xl"
              style={{ color: '#E1E0CC' }}
            />
            <p className="mt-6 text-lg" style={{ color: '#E1E0CC' }}>
              Divergências no estoque
            </p>
            <p className="mt-1 text-sm text-gray-500">Devido ao controle obrigatório por IMEI.</p>
          </CardIn>
          <CardIn index={1} className="rounded-2xl bg-card p-8 sm:p-10">
            <WordsPullUp
              text="100%"
              className="text-7xl font-medium leading-none tracking-[-0.05em] sm:text-8xl"
              style={{ color: '#E1E0CC' }}
            />
            <p className="mt-6 text-lg" style={{ color: '#E1E0CC' }}>
              Blindagem em ordens de serviço
            </p>
            <p className="mt-1 text-sm text-gray-500">Com o checklist 8P impresso e assinado.</p>
          </CardIn>
          <CardIn index={2} className="rounded-2xl bg-panel p-8 sm:p-10 md:col-span-2">
            <h3 className="text-lg" style={{ color: '#E1E0CC' }}>
              O que muda na prática para o dono da loja
            </h3>
            <ul className="mt-6 grid gap-4 text-sm md:grid-cols-3">
              <CheckItem>
                <strong className="text-cream">Menos interrupções:</strong> a equipe consulta estoque e garantias sem
                precisar te ligar.
              </CheckItem>
              <CheckItem>
                <strong className="text-cream">Caixa confiável:</strong> fim das discussões de final de expediente sobre
                diferenças de valores.
              </CheckItem>
              <CheckItem>
                <strong className="text-cream">Decisão rápida:</strong> dados claros sobre quais marcas e modelos dão
                mais lucro.
              </CheckItem>
            </ul>
          </CardIn>
        </div>
      </div>
    </section>
  )
}
