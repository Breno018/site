# TellexApp — Landing page

Site institucional da **TellexApp** (Presidente Prudente, SP).
É um site estático (HTML, CSS e JavaScript puros), sem instalação e sem servidor, pronto para o **GitHub Pages**.

---

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Todo o conteúdo e os textos do site (títulos, seções, botões). |
| `styles.css` | Visual: cores, fontes, espaçamentos, celular e computador. |
| `script.js` | Contatos (WhatsApp e e-mail), menu do celular, animações e ano do rodapé. |
| `assets/favicon.svg` | Ícone que aparece na aba do navegador. |
| `.nojekyll` | Arquivo vazio que faz o GitHub Pages publicar o site sem alterações. |
| `README.md` | Este guia. |

---

## Pendências (conteúdo a confirmar)

Estes pontos foram deixados em aberto de propósito, para não publicar informações inventadas:

- [ ] **Serviços**: os três cartões da seção "Soluções" estão marcados como *Em definição*.
- [ ] **WhatsApp**: número oficial ainda não informado.
- [ ] **E-mail comercial**: ainda não informado.
- [ ] **Texto "Sobre"**: texto institucional genérico; pode receber história e equipe quando confirmadas.
- [ ] **Redes sociais**: não incluídas até haver perfis reais.
- [ ] **Domínio próprio**: se houver, dá para configurar depois (e então adicionar a URL canônica).

Enquanto WhatsApp e e-mail estiverem vazios, o site mostra "Canal será disponibilizado em breve" e os botões ficam desativados — nada de link quebrado.

---

## Como colocar o WhatsApp e o e-mail (pelo iPhone)

1. No Safari, abra o repositório `site` no GitHub.
2. Toque no arquivo **`script.js`**.
3. Toque no ícone de **lápis** (Editar). Se não aparecer, toque em `...` e depois em **Edit file**.
4. Logo no começo, encontre:
   ```js
   whatsapp: "",
   email: "",
   ```
5. Coloque os dados entre as aspas. Exemplo:
   ```js
   whatsapp: "18999999999",
   email: "contato@seudominio.com.br",
   ```
   (WhatsApp: DDD + número, só números.)
6. Toque em **Commit changes...** e confirme em **Commit changes**.
7. Em 1 a 2 minutos o site publicado é atualizado.

---

## Como mudar textos e cores

- **Textos**: ficam no `index.html`. Os trechos para personalizar têm um comentário `<!-- EDITAR -->` logo acima.
- **Cores**: ficam no começo do `styles.css`, nas linhas que começam com `--color-`.

O jeito mais fácil, porém, é pedir ao **Claude Code** (veja abaixo).

---

## Como revisar e integrar as mudanças (pelo iPhone)

As alterações foram feitas na branch **`landing-page-v1`**.

1. No Safari, abra `github.com/breno018/site`.
2. Se aparecer a faixa amarela **"landing-page-v1 had recent pushes"**, toque em **Compare & pull request**.
   (Se não aparecer: toque em **Pull requests** → **New pull request** → em *compare* escolha `landing-page-v1`.)
3. Toque em **Create pull request**.
4. Na aba **Files changed** você vê tudo o que mudou.
5. Se estiver tudo certo, toque em **Merge pull request** → **Confirm merge**.

---

## Como ativar o GitHub Pages (uma única vez)

1. No repositório, toque em **Settings** (Configurações). No iPhone, pode estar no menu `...`.
2. No menu lateral, toque em **Pages**.
3. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
4. Em **Branch**, escolha **`main`** e a pasta **`/ (root)`**. Toque em **Save**.
5. Aguarde de 1 a 3 minutos e atualize a página. Aparecerá o endereço do site.

> Observação: em contas gratuitas, o GitHub Pages exige que o repositório seja **público**.

## Como acessar o site publicado

Endereço previsto: **https://breno018.github.io/site/**

Dica: no Safari, toque em **Compartilhar → Adicionar à Tela de Início** para ter um atalho.

---

## Como pedir alterações ao Claude Code

Abra uma sessão do Claude Code com o repositório `site` e descreva o que deseja, em português. Exemplos:

- "Coloque o WhatsApp 18 99999-9999 e o e-mail contato@exemplo.com.br no site."
- "Troque os três serviços da seção Soluções por: [serviço A], [serviço B], [serviço C], com estas descrições: ..."
- "Atualize o texto da seção Sobre com estas informações: ..."
- "Adicione o link do Instagram: https://instagram.com/..."
- "Deixe o azul do site um pouco mais claro."

Peça para o Claude trabalhar em uma branch separada e abrir um pull request, assim você revisa antes de publicar.

---

## Detalhes técnicos

- Sem frameworks, bibliotecas externas, cookies ou rastreamento.
- Fontes do próprio sistema (no iPhone, a fonte SF da Apple).
- Responsivo, com menu móvel, áreas seguras do iPhone e respeito à opção "Reduzir movimento".
- Sem formulário: o contato é feito pelo WhatsApp ou e-mail configurados.
