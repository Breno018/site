# TellexApp — Landing page

Site do **TellexApp**, o sistema de gestão para lojas de celular e assistências técnicas.
Feito com React + Vite + TypeScript + Tailwind CSS e publicado automaticamente no GitHub Pages.

Endereço: **https://breno018.github.io/site/**

---

## Onde editar cada coisa

| O que mudar | Arquivo |
|---|---|
| WhatsApp, e-mail, site, link do sistema, Instagram e YouTube | `src/config.ts` |
| Cores da marca | `tailwind.config.js` (bloco `colors`) |
| Topo da página (título, texto, botões) | `src/sections/Hero.tsx` |
| Faixa azul de benefícios | `src/sections/Benefits.tsx` |
| Os 5 problemas | `src/sections/Problems.tsx` |
| Módulos / funcionalidades | `src/sections/Features.tsx` |
| Passo a passo | `src/sections/HowItWorks.tsx` |
| IMEI, Checklist 8P, PDV, Financeiro e Multi-loja | `src/sections/Highlights.tsx` |
| Seção "Sobre" | `src/sections/About.tsx` |
| Resultados (-90% / 100%) | `src/sections/Results.tsx` |
| Planos e preços | `src/sections/Plans.tsx` |
| Perguntas frequentes | `src/sections/Faq.tsx` |
| Banner final e contato | `src/sections/FinalCta.tsx` e `src/sections/Contact.tsx` |
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
