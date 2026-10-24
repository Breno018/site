# Prisma — Landing page

Landing page do estúdio criativo **Prisma**, feita com React + Vite + TypeScript + Tailwind CSS, framer-motion (animações) e lucide-react (ícones).

Seções: **Hero** (vídeo de fundo e título gigante), **About** (texto que se revela com a rolagem) e **Features** (4 cartões).

Endereço: **https://breno018.github.io/site/**

---

## Arquivos principais

| Arquivo | Para que serve |
|---|---|
| `src/sections/Hero.tsx` | Primeira tela: vídeo, menu, título "Prisma", texto e botão "Join the lab". |
| `src/sections/About.tsx` | Cartão "Visual arts" com o texto sobre Marcus Chen. |
| `src/sections/Features.tsx` | Os 4 cartões (vídeo, Storyboard, Critiques, Capsule) e seus itens. |
| `src/components/` | Animações reutilizáveis (palavras subindo, letras que acendem ao rolar). |
| `src/index.css` | Fonte global e as texturas de ruído. |
| `tailwind.config.js` | Cor creme principal (`primary`) e fonte serifada. |
| `index.html` | Carrega as fontes Almarai e Instrument Serif. |
| `.github/workflows/deploy.yml` | Publica o site automaticamente a cada mudança na `main`. |

---

## Publicação (uma única vez, pelo iPhone)

Este site precisa ser "montado" antes de ir ao ar, e o GitHub faz isso sozinho. Basta trocar uma opção:

1. Abra **https://github.com/Breno018/site/settings/pages**
2. Em **Build and deployment → Source**, escolha **GitHub Actions**.
3. Pronto. A cada mudança na `main`, o site é publicado em 1 a 3 minutos.

Para acompanhar, abra a aba **Actions** do repositório. Um círculo verde ✓ significa que o site foi publicado.

---

## Como pedir alterações

Abra uma sessão do Claude Code com o repositório `site` e descreva o que quer. Exemplos:

- "Troque o texto do Hero por: ..."
- "Mude o nome Marcus Chen para ..."
- "Troque o vídeo do Hero por este link: ..."

---

## Para desenvolvedores

```bash
npm install
npm run dev      # servidor local
npm run build    # gera a pasta dist/
```
