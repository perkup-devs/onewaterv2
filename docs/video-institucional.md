# Vídeo institucional

## Conteúdo e posição

O vídeo recebido pelo WhatsApp em 22/09/2026 tem 48,77 segundos e apresenta
uma sequência de oceano, produto e consumo. A seção fica após `Hero` e antes
de `ProductPremium`, com o título **Do oceano ao seu momento**.

Essa posição conecta a apresentação inicial da marca à experiência de consumo,
antes de aprofundar os atributos do produto. O vídeo acompanha a narrativa de
origem oceânica e ajuda a contextualizar a apresentação comercial seguinte.

## Implementação

- Componente: `BrandFilm`.
- Vídeo: `public/videos/one-water-brand-film.mp4`.
- Imagem de apresentação: `public/videos/one-water-brand-film.jpg`.
- Player nativo com `controls`, `playsInline` e `preload="none"`.
- Reprodução iniciada pelo visitante, sem `autoplay`.
- Proporção original preservada, sem recortar o conteúdo.

O carregamento do vídeo fica sob demanda para evitar transferir o arquivo
durante a abertura inicial da página. A imagem de apresentação identifica a
seção antes da reprodução.

## Validação realizada

- Build de produção e TypeScript aprovados.
- ESLint dos dois componentes alterados aprovado.
- Reprodução confirmada no navegador; duração de 48,77 segundos.
- Layout conferido em desktop e celular (390 px), sem transbordamento.
- Regressão repetível: com Vite ativo, `bash tests/brand-film.sh`.
- Após sincronizar a `main`, lint global aprovado, com sete avisos preexistentes.
- Textos da seção integrados ao seletor de português, inglês e espanhol.
- Publicação autorizada em 22/09/2026 pelo GitHub Pages, via push na `main`.
