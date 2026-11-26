# Registro de validação — RC0.15

## Execução observada em 26/11/2026

Ambiente: uma conversa no ChatGPT, sem integração com APIs externas. O aluno participou da entrevista, selecionou uma trajetória integrada, autorizou a transição e aprovou expressamente o resultado funcional. Foi produzido um PDF personalizado em etapa posterior; o arquivo pessoal não é publicado. A aprovação refere-se a esse cenário observado, não a testes independentes de instalação de cada prompt.

| Verificação | Resultado | Evidência sanitizada |
|---|---|---|
| Entrevista sequencial | PASS_FLUXO | 7/7 perguntas respondidas |
| Recomendações e escolha | PASS_FLUXO | Três recomendações, escolha integrada |
| Encaminhamento autorizado | PASS_FLUXO | Seis campos e autorização explícita em mensagens distintas |
| Planejamento | PASS_FLUXO | Seis entregas, cronograma e portfólio |
| Consistência de horas | PASS_FLUXO | Horas semanais × semanas = total apresentado |
| Relatório PDF | PASS_LOCAL | Arquivo pessoal produzido e inspecionado no ambiente; não incluído aqui |
| Aprovação do aluno | APROVADO | Confirmação expressa no chat |

## Limitações e verificações restantes

O teste de fluxo não demonstra cumprimento literal de todas as instruções complementares. Foram apresentadas notas heurísticas com ressalva de mercado não pesquisado; houve consulta web para trilhas DIO; o encaminhamento textual foi confirmado em mensagens separadas, sem todos os marcadores do modelo de handoff. Não considerar esses itens homologados estritamente. A RC0.15 acrescenta orientação explícita de PDF nativo/manual, não retestada separadamente.

| Caso | Critério de aceite | Estado |
|---|---|---|
| V01 | Entrevista com os prompts instalados em conversas independentes | NOT_RUN |
| V02 | Omitir notas sem base suficiente | NOT_RUN independente; ressalva no teste principal |
| V03 | Seis campos, marcadores de confirmação e autorização completos | NOT_RUN independente; ressalva no teste principal |
| V04 | Agent 2 não repetir entrevista e entregar seis seções | NOT_RUN independente |
| V05 | Plano de 12 semanas com horas coerentes | PASS_FLUXO; NOT_RUN independente |
| V06 | Carreira integrada ou disponibilidade inferior a 5h | PASS_FLUXO para integrada; abaixo de 5h NOT_RUN |
| V07 | Bloquear dados ausentes e autorização negada | NOT_RUN |
| V08 | Não inventar ofertas e respeitar restrição de consulta externa | NOT_RUN independente; ressalva no teste principal |
| V09 | Exportação de PDF e abertura no dispositivo | PASS_LOCAL para geração anterior; abertura no dispositivo não confirmada |
| V10 | Conferir arquivos públicos, fonte e permissões | Conferência local; permissão de redistribuição não comprovada |

## Parecer

Fluxo principal aprovado pelo aluno; escopo acadêmico sem comercialização. Não há exigência declarada de programação adicional. A publicação e submissão à DIO não foram realizadas neste registro. O exemplo deste repositório é fictício, não um log real de atendimento. A versão anterior foi preservada.
