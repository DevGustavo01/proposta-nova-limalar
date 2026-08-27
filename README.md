# Site institucional — template Vue + Vuetify

Front isolado, pronto para receber **identidade visual** e **conteúdo de mídia** sem alterar componentes.

O conteúdo e as fotos atuais são **demonstrativos** (marca fictícia “Empresa Demo”). Não há referências à operação anterior da marca.

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

Build de produção:

```bash
npm run build
npm run preview
```

## O que você pode trocar sem programar

| Precisa mudar | Arquivo |
|---|---|
| Cores, logo, nome, WhatsApp, e-mails | `public/data/identity.json` |
| Menu | `public/data/navigation.json` |
| Títulos SEO | `public/data/seo.json` |
| Textos das páginas | `public/data/pages/*.json` |
| Fotos, logos, selos | `public/media/**` |

Guia passo a passo: [`docs/IDENTIDADE-E-CONTEUDO.md`](docs/IDENTIDADE-E-CONTEUDO.md)  
Arquitetura e SOLID: [`docs/ARQUITETURA.md`](docs/ARQUITETURA.md)

## Tecnologias (somente as pedidas + stack oficial Vue)

- **Vue 3** (Composition API)
- **Vuetify 3** (UI)
- **Vue Router** (rotas oficiais do Vue)
- **Vite** (build oficial)

Não há backend. Leads saem por WhatsApp ou `mailto`. Para plugar uma API depois, implemente o contrato `LeadGateway`.

## Páginas

- `/` Início
- `/sobre` Empresa e selos
- `/servicos` Catálogo
- `/servicos/:slug` Detalhe do serviço
- `/temas` Conteúdo educativo
- `/temas/:slug` Detalhe do tema
- `/clientes` Clientes e parceiros
- `/contato` Formulário, mapa e telefones
