import type { ReactNode } from 'react'
import { CheckItem, Reveal, ScreenFrame } from '../components/ui'

/* Telas de exemplo reproduzidas da apresentação comercial (dados fictícios de demonstração). */

function ImeiScreen() {
  return (
    <ScreenFrame title="Consulta rápida de IMEI — exemplo de tela">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-4">
        <div>
          <p className="font-bold">iPhone 13 128GB - Estelar (Seminovo)</p>
          <p className="mt-1 text-xs text-muted">
            IMEI: <span className="font-mono font-semibold text-ink">358742109854123</span>
          </p>
        </div>
        <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">Disponível no Estoque</span>
      </div>
      <dl className="grid grid-cols-3 gap-3 pt-4 text-sm">
        <div>
          <dt className="text-xs text-muted">Preço de Custo</dt>
          <dd className="font-bold">R$ 2.800,00</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Preço de Venda</dt>
          <dd className="font-bold text-brand">R$ 3.590,00</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Loja Física</dt>
          <dd className="font-bold">Matriz - Centro</dd>
        </div>
      </dl>
    </ScreenFrame>
  )
}

const CHECKLIST = [
  ['Wi-Fi & Bluetooth', true],
  ['Câmeras', true],
  ['Touch ID / Face ID', false],
  ['Conector Carga', true],
  ['Alto-Falante', true],
  ['Botões Físicos', true],
  ['Tela / Touch', true],
  ['Estado Bateria', true],
] as const

function ChecklistScreen() {
  return (
    <ScreenFrame title="Checklist de vistoria da OS — exemplo de tela">
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {CHECKLIST.map(([item, ok]) => (
          <li key={item} className="rounded-xl border border-line bg-surface p-3 text-xs">
            <span className="block text-muted">{item}</span>
            <span className={`mt-1 block text-sm font-extrabold ${ok ? 'text-emerald-600' : 'text-red-600'}`}>
              {ok ? 'OK' : 'Com Defeito'}
            </span>
          </li>
        ))}
      </ul>
    </ScreenFrame>
  )
}

function PdvScreen() {
  return (
    <ScreenFrame title="Resumo de venda no PDV — exemplo de tela">
      <p className="font-bold">Pedido #1042 — Cliente: Carlos Eduardo</p>
      <div className="mt-3 overflow-hidden rounded-xl border border-line text-sm">
        <div className="grid grid-cols-[1fr_auto] gap-3 bg-surface px-3 py-2 text-xs font-semibold text-muted">
          <span>Item</span>
          <span>Valor</span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-3 border-t border-line px-3 py-2.5">
          <span>Samsung Galaxy S23 Ultra 256GB</span>
          <span className="font-semibold">R$ 4.200,00</span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-3 border-t border-line px-3 py-2.5">
          <span>Capa de Proteção Anti-Impacto</span>
          <span className="font-semibold">R$ 80,00</span>
        </div>
      </div>
      <p className="mt-3 rounded-xl bg-surface px-3 py-2.5 text-xs leading-relaxed">
        <strong>Pagamento realizado:</strong> R$ 1.280,00 no PIX + R$ 3.000,00 em 10x no cartão de crédito.
      </p>
    </ScreenFrame>
  )
}

function FinanceScreen() {
  return (
    <ScreenFrame title="Resultado do mês — exemplo de tela">
      <dl className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-line bg-surface p-4">
          <dt className="text-xs text-muted">Faturamento do Mês</dt>
          <dd className="mt-1 text-xl font-extrabold">R$ 84.500,00</dd>
          <dd className="text-xs font-medium text-emerald-600">Vendas + Assistência</dd>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <dt className="text-xs text-muted">Custo de Mercadorias (CMV)</dt>
          <dd className="mt-1 text-xl font-extrabold text-muted">R$ 56.200,00</dd>
          <dd className="text-xs text-muted">Aparelhos e Peças</dd>
        </div>
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4">
          <dt className="text-xs text-emerald-800">Lucro Líquido Apurado</dt>
          <dd className="mt-1 text-xl font-extrabold text-emerald-700">R$ 18.300,00</dd>
          <dd className="text-xs text-emerald-700">Resultado real do período</dd>
        </div>
      </dl>
    </ScreenFrame>
  )
}

function StoresScreen() {
  return (
    <ScreenFrame title="Alternar loja ativa — exemplo de tela">
      <ul className="grid gap-3 sm:grid-cols-3">
        <li className="rounded-xl border-2 border-brand bg-brand-soft p-4">
          <p className="font-bold text-brand">Loja 01 — Matriz Centro</p>
          <p className="mt-1 text-xs text-muted">Estoque: 86 Aparelhos</p>
          <p className="mt-1 text-xs font-semibold text-emerald-600">● Loja selecionada</p>
        </li>
        <li className="rounded-xl border border-line bg-surface p-4">
          <p className="font-bold">Loja 02 — Shopping</p>
          <p className="mt-1 text-xs text-muted">Estoque: 56 Aparelhos</p>
          <p className="mt-1 text-xs text-muted">Clique para alternar</p>
        </li>
        <li className="rounded-xl border border-line bg-surface p-4">
          <p className="font-bold">Visão Consolidada</p>
          <p className="mt-1 text-xs text-muted">Todas as 2 unidades</p>
          <p className="mt-1 text-xs font-semibold text-brand">Relatório Geral</p>
        </li>
      </ul>
    </ScreenFrame>
  )
}

type Block = {
  id: string
  chip: string
  title: string
  text: string
  screen: ReactNode
  points: { title: string; text: string }[]
}

const BLOCKS: Block[] = [
  {
    id: 'imei',
    chip: 'Controle de estoque',
    title: 'Rastreamento unitário por IMEI ou nº de série',
    text: 'Saiba exatamente qual celular foi vendido, para quem e qual a garantia associada.',
    screen: <ImeiScreen />,
    points: [
      { title: 'Zero trocas indevidas', text: 'Saiba exatamente qual aparelho saiu da loja.' },
      { title: 'Garantia rápida', text: 'Consulte se o cliente comprou com você em 3 segundos.' },
      { title: 'Trade-in organizado', text: 'Registre celulares recebidos como parte do pagamento.' },
      {
        title: 'No dia a dia',
        text: 'O cliente volta dizendo que o aparelho está na garantia? Digite os últimos dígitos do IMEI e veja a data da venda e o comprovante.',
      },
    ],
  },
  {
    id: 'checklist',
    chip: 'Gestão de ordens de serviço',
    title: 'Checklist 8P: vistoria completa na entrada',
    text: 'Evite discussões sobre defeitos pré-existentes registrando o estado do celular no balcão.',
    screen: <ChecklistScreen />,
    points: [
      { title: 'Teste junto com o cliente', text: 'O atendente testa os 8 itens principais no balcão.' },
      { title: 'Tudo registrado', text: 'Se o Face ID já não funcionava, a informação é impressa na OS.' },
      { title: 'Assinatura na entrada', text: 'O cliente assina sabendo exatamente o que foi entregue.' },
      {
        title: 'Orçamento transparente',
        text: 'Separe o custo da peça do valor da mão de obra. O sistema calcula a margem de cada serviço.',
      },
    ],
  },
  {
    id: 'pdv',
    chip: 'Ponto de venda (PDV)',
    title: 'Vendas rápidas e pagamentos flexíveis',
    text: 'Atenda seus clientes sem filas e receba em múltiplas formas de pagamento no mesmo pedido.',
    screen: <PdvScreen />,
    points: [
      { title: 'Múltiplos meios', text: 'Combine PIX, cartão, dinheiro e boleto sem travar o caixa.' },
      { title: 'Comissões', text: 'Vincule o vendedor ao pedido para relatório automático de comissão.' },
      { title: 'Comprovantes', text: 'Imprima recibos térmicos ou envie o comprovante digital via WhatsApp.' },
    ],
  },
  {
    id: 'financeiro',
    chip: 'Gestão financeira',
    title: 'Clareza sobre o lucro real do seu negócio',
    text: 'Acompanhe as entradas, saídas e a margem de lucro de forma transparente.',
    screen: <FinanceScreen />,
    points: [
      {
        title: 'Fechamento de caixa cego',
        text: 'O operador informa os valores contados sem ver o valor esperado pelo sistema, garantindo conferência real.',
      },
      {
        title: 'Categorização de despesas',
        text: 'Registre aluguel, luz, salários e fornecedores e tenha o DRE calculado automaticamente no fim do mês.',
      },
    ],
  },
  {
    id: 'multiloja',
    chip: 'Gestão de filiais',
    title: 'Controle todas as suas lojas em uma única conta',
    text: 'Ideal para quem possui 2 ou mais unidades e precisa de visão centralizada sem confusão.',
    screen: <StoresScreen />,
    points: [
      {
        title: 'Consulta inter-lojas',
        text: 'Sem o modelo na Matriz? O vendedor consulta na hora se a filial tem o aparelho para transferência.',
      },
      {
        title: 'Níveis de acesso por usuário',
        text: 'O vendedor acessa o PDV e o estoque; o gerente, os relatórios da loja; o dono enxerga o grupo todo.',
      },
    ],
  },
]

export default function Highlights() {
  return (
    <section aria-label="Destaques do sistema" className="bg-surface py-20 sm:py-28">
      <div className="container-x space-y-20 sm:space-y-28">
        {BLOCKS.map((b, i) => (
          <article
            key={b.id}
            id={b.id}
            aria-labelledby={`${b.id}-titulo`}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <span className="chip">{b.chip}</span>
              <h2 id={`${b.id}-titulo`} className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                {b.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{b.text}</p>
              <ul className="mt-7 space-y-4 text-[15px] leading-relaxed">
                {b.points.map((p) => (
                  <CheckItem key={p.title} tone="green">
                    <strong className="font-bold">{p.title}:</strong> <span className="text-muted">{p.text}</span>
                  </CheckItem>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>{b.screen}</Reveal>
          </article>
        ))}
      </div>
    </section>
  )
}
