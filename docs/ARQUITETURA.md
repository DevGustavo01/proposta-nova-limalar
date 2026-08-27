# Arquitetura

A interface não conhece CMS nem API. Ela consome um *bundle* de conteúdo (`SiteBundle`) injetado na subida da aplicação.

```
public/data/*.json          →  JsonContentRepository  →  provide('site')
public/media/**             →  MediaResolver          →  componentes
eventos (WhatsApp/e-mail)   →  LeadGateway            →  ContactForm
```

## Pastas

| Pasta | Responsabilidade (SRP) |
|---|---|
| `src/domain` | Regras e contratos. Não importa Vue. |
| `src/infrastructure` | JSON, `fetch`, `mailto`, WhatsApp. |
| `src/presentation` | Layout, views, animações, Vuetify. |
| `src/app` | Composition Root: liga contratos às implementações. |
| `public/data` | Conteúdo editável. |
| `public/media` | Identidade e mídias. |

## SOLID na prática

**S — Single Responsibility**  
Cada classe faz uma coisa: `ConversionLinks` só monta URLs; `validateLead` só valida; views só renderizam.

**O — Open/Closed**  
Novo canal de lead = nova classe `LeadGateway` (ex.: `ApiLeadGateway`). O formulário não muda.  
Nova página de conteúdo = JSON + uma view fina. Tokens de cor vêm do JSON.

**L — Liskov**  
Qualquer `ContentRepository` ou `LeadGateway` pode substituir o atual desde que cumpra o contrato.

**I — Interface Segregation**  
Contratos mínimos: `load()` no conteúdo, `submit(lead)` no lead. A view não depende de `fetch`.

**D — Dependency Inversion**  
`ContactForm` recebe `gateways` injetados. `main.js` é o único ponto que escolhe `JsonContentRepository`, `MailtoLeadGateway` e `WhatsAppLeadGateway`.

## Eventos institucionais

| Evento | Onde | Comportamento |
|---|---|---|
| CTA WhatsApp | header, hero, FAB, formulário | `wa.me` com texto pré-preenchido |
| Ligar | rodapé e contato | `tel:` |
| E-mail | formulário e rodapé | `mailto:` |
| Navegação | menu e cards | Vue Router |
| Scroll do header | `SiteHeader` | Compacta após 24px |
| Reveal | seções | `IntersectionObserver` + CSS |
| Hover | cards | Elevação CSS |
| Transição de página | layout | `<transition name="page">` |
| Hero | home | Ken Burns no fundo |

## Segurança (OWASP — superfície de front)

- Textos do JSON são interpolados (`{{ }}`), nunca `v-html`.
- Links externos usam `rel="noopener noreferrer"`.
- Formulário valida no domínio antes de abrir canal.
- Sem segredos no repositório: não há API key.
- Conteúdo e mídia são estáticos em `public/`.

## Como plugar um backend depois

1. Crie `src/infrastructure/gateways/ApiLeadGateway.js` implementando `LeadGateway`.
2. Em `src/app/main.js`, troque a instância injetada em `leadGateways.email`.
3. Não altere `ContactForm.vue`.
