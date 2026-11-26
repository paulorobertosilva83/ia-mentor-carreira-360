# RC0.17 — Validação PWA (26/11/2026)

Baseline: RC0.16.1, preservada sem alterações. Atualização exclusivamente local, sem publicação. A página continua sem links ou botões de acesso aos prompts originais. Créditos acadêmicos e núcleo de regras preservados.

## Evidências locais

- Sintaxe dos dois scripts inline e `sw.js`: PASS (Node.js).
- Manifesto, referências, escopo relativo e quatro ícones: verificação estática PASS.
- Chromium via carregamento direto do HTML (set_content): instruções de instalação, sete perguntas, escolha, consentimento, relatório 90 dias/60h, acionamento de impressão simulado, reinício, largura 390px sem overflow e zero erros JS: PASS_LOCAL.
- Service worker em ambiente simulado Node.js: pré-cache, limpeza limitada ao prefixo do projeto, preservação de outro cache, navegação online, fallback offline da raiz e index, ícone em cache, bypass de URL externa, caminho não previsto e POST: PASS_MOCK.
- Tentativa de acessar servidor HTTP local para teste real de registro: BLOCKED_ENV (ERR_BLOCKED_BY_ADMINISTRATOR).

## Homologação no GitHub Pages — NOT_RUN

1. Publicar os arquivos na raiz correta e abrir HTTPS online.
2. Confirmar carregamento do manifesto e registro/ativação do service worker, e indicação de cache preparado.
3. Instalar pelo Chrome/Edge no PC e Chrome no Android/tablet.
4. Fechar e abrir o app instalado sem internet; realizar as sete perguntas, escolher trajetória e gerar plano.
5. Testar impressão/salvar PDF e abrir o arquivo; verificar disponibilidade no modo instalado.
6. Reiniciar avaliação e verificar que as respostas não persistem.
7. Reconectar e conferir versão e atualização. Verificar que não há links para prompts originais no index.

Parecer: PASS_LOCAL parcial / PASS_MOCK do cache / instalação e offline real NOT_RUN / NO_DEPLOY. Nenhuma despesa ou chamada a API de IA.
