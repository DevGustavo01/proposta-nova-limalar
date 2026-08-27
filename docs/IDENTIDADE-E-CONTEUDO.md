# Identidade visual e conteúdo (JSON + mídia)

A marca real entra **só** pelos JSON e pelas pastas de mídia. O conteúdo atual é demonstrativo.

## 1. Identidade visual — `public/data/identity.json`

```json
{
  "brandName": "Nome da empresa",
  "tagline": "Frase de posicionamento",
  "logo": {
    "header": "/media/brand/logo.svg",
    "footer": "/media/brand/logo-inverse.svg",
    "favicon": "/media/brand/favicon.svg",
    "alt": "Logotipo"
  },
  "theme": {
    "colors": {
      "primary": "#0F766E",
      "secondary": "#0F172A",
      "accent": "#2DD4BF"
    },
    "fonts": {
      "heading": "system-ui, sans-serif",
      "body": "system-ui, sans-serif"
    }
  }
}
```

As cores viram tema Vuetify **e** variáveis CSS (`--brand-primary`, `--brand-heading`) na carga da página. Recarregue o browser após editar o JSON no modo `dev`.

### Paleta de demonstração

- Teal `#0F766E` — ações e ênfase
- Slate `#0F172A` — rodapé e painel de CTA
- Accent `#2DD4BF` — botões sobre fundo escuro

## 2. Mídias — `public/media`

| Pasta | Uso |
|---|---|
| `brand/` | Logo, favicon, hero, foto institucional |
| `certs/` | Selos (vazio até a marca enviar) |
| `clients/` | Logos de clientes |
| `services/` | Fotos dos serviços |
| `placeholders/` | Capa se faltar arquivo |

No JSON, aponte o caminho público, por exemplo `"/media/brand/logo.svg"`.  
Se o arquivo não existir, o componente `BrandMedia` cai no placeholder.

Formatos: PNG, JPG, SVG, WEBP. Prefira SVG ou PNG com fundo transparente no logo.

## 3. Conteúdo institucional — `public/data/pages`

| Arquivo | Página |
|---|---|
| `home.json` | Hero, história, destaques, CTA |
| `about.json` | Texto institucional e selos |
| `services.json` | Lista e detalhes de serviços |
| `pests.json` | Temas educativos (`slug` vira `/temas/:slug`) |
| `clients.json` | Clientes e parceiros |
| `contact.json` | Copy do form e endereços (mapas) |

`slug` precisa ser único e estável (`consultoria`). A URL fica `/servicos/consultoria`.

## 4. Menu e SEO

- `navigation.json` — ordem e rótulos do menu. O `to` deve existir no router.
- `seo.json` — `title` e `description` por rota.

## 5. Manifesto

`public/data/manifest.json` lista os JSON. Para integrar um CMS, publique os mesmos arquivos em outro host e altere a URL no construtor de `JsonContentRepository` (`src/app/main.js`).

## 6. Favicon

Substitua `public/media/brand/favicon.svg` e, se quiser outro nome, atualize `index.html` e `identity.json`.
