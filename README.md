# TellexApp — Landing page

Site do **TellexApp**, o sistema de gestão para lojas de celular e assistências técnicas.
Visual escuro e cinematográfico (preto, creme, textura de ruído, título gigante e textos que surgem com a rolagem), com o conteúdo e as imagens do TellexApp.
Feito com React + Vite + TypeScript + Tailwind CSS + framer-motion e publicado automaticamente no GitHub Pages.

Endereço: **https://breno018.github.io/site/**

---

## Onde editar cada coisa

| O que mudar | Arquivo |
|---|---|
| WhatsApp, e-mail, site, link do sistema, Instagram e YouTube | `src/config.ts` |
| Cores (creme, fundos dos cartões) | `tailwind.config.js` (bloco `colors`) |
| Topo: menu, título "TellexApp", texto e botão | `src/sections/Hero.tsx` |
| Faixa de benefícios | `src/sections/Benefits.tsx` |
| Texto "Mais controle, mais resultados" | `src/sections/About.tsx` |
| Os 5 problemas | `src/sections/Problems.tsx` |
| Cartões principais (IMEI, Assistência 8P, Caixa) | `src/sections/Features.tsx` |
| Os 8 módulos | `src/sections/Modules.tsx` |
| Passo a passo | `src/sections/HowItWorks.tsx` |
| IMEI, Checklist 8P, PDV, Financeiro e Multi-loja | `src/sections/Highlights.tsx` |
| "Sua loja na palma da mão" | `src/sections/Mobile.tsx` |
| Resultados (-90% / 100%) | `src/sections/Results.tsx` |
| Planos e preços | `src/sections/Plans.tsx` |
| Perguntas frequentes | `src/sections/Faq.tsx` |
| Chamada final e contato | `src/sections/FinalCta.tsx` |
| Imagens (logo, painel, foto) | `public/img/` |

### Colocar o WhatsApp (pelo iPhone)
1. Abra `src/config.ts` no GitHub e toque no lápis.
2. Em `whatsapp: ''`, coloque o número entre as aspas, só números com DDD. Ex.: `whatsapp: '18999999999',`
3. Toque em **Commit changes**. Em 1 a 3 minutos o site atualiza sozinho.

Enquanto o número estiver vazio, o site mostra "Canal será disponibilizado em breve" e o botão principal agenda a demonstração por e-mail.

---

## Publicação

O site é publicado pelo **GitHub Actions** a cada mudança na `main`.
Em **Settings → Pages → Source**, a opção precisa estar em **GitHub Actions**.
Para acompanhar, abra a aba **Actions**. O ✓ verde significa que o site foi publicado.

---

## Como pedir alterações ao Claude Code

Descreva o que quer em português. Exemplos:
- "Coloque o WhatsApp 18 99999-9999 no site."
- "Mude o preço do plano Loja Profissional para R$ 279."
- "Adicione o Instagram https://instagram.com/tellexapp."

---

## Para desenvolvedores

```bash
npm install
npm run dev      # servidor local
npm run build    # gera a pasta dist/
```
