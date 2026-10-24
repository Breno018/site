/* ==========================================================================
   CONFIGURAÇÃO DO SITE — edite somente esta parte para trocar contatos e links.

   systemUrl: endereço do sistema TellexApp (botão "Entrar no sistema").
              Enquanto estiver vazio, o botão leva para a seção de contato.
   whatsapp:  número com DDD, só números. Ex.: "18999999999".
              Enquanto estiver vazio, o site mostra "Canal será disponibilizado em breve".
   email:     e-mail comercial.
   website:   site oficial.
   instagram / youtube: endereços completos dos perfis. Vazios = ícones ocultos.
   ========================================================================== */
export const CONFIG = {
  systemUrl: '',
  whatsapp: '',
  whatsappMensagem: 'Olá! Vim pelo site do TellexApp e gostaria de agendar uma demonstração.',
  email: 'contato@tellexapp.com.br',
  website: 'https://www.tellexapp.com.br',
  instagram: '',
  youtube: '',
}

/** Link do WhatsApp pronto para uso, ou null se o número ainda não foi configurado. */
export function whatsappLink(): string | null {
  let phone = CONFIG.whatsapp.replace(/\D/g, '')
  if (phone.length === 10 || phone.length === 11) phone = '55' + phone
  if (phone.length < 12) return null
  return `https://wa.me/${phone}?text=${encodeURIComponent(CONFIG.whatsappMensagem)}`
}

/** Destino do botão "Entrar no sistema". */
export function systemLink(): string {
  return CONFIG.systemUrl || '#contato'
}

/** Caminho de uma imagem da pasta public/img, respeitando o endereço do GitHub Pages. */
export function img(name: string): string {
  return `${import.meta.env.BASE_URL}img/${name}`
}
