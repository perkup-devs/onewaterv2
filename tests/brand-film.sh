#!/usr/bin/env bash
# Execute com o Vite ativo: bash tests/brand-film.sh
set -euo pipefail
npx --yes agent-browser open "${ONE_WATER_TEST_URL:-http://127.0.0.1:8080}"
npx --yes agent-browser eval 'const film=document.querySelector("video"); if (!film || !film.controls || !film.playsInline || film.autoplay || film.preload!=="none") throw new Error("Player deve ter controles, playsInline e carregamento por clique"); if (document.querySelector("main").children[1].getAttribute("aria-labelledby")!=="brand-film-title") throw new Error("Filme deve aparecer após a abertura"); "PASS: posição e controles"'
npx --yes agent-browser eval '(async()=>{const film=document.querySelector("video"); film.muted=true; await film.play(); if(film.paused || film.error || film.duration<48) throw new Error("Filme deve reproduzir integralmente"); film.pause(); return "PASS: reprodução"})()'
npx --yes agent-browser set viewport 390 844
npx --yes agent-browser eval 'if(document.documentElement.scrollWidth>innerWidth) throw new Error("Layout móvel não deve transbordar"); "PASS: layout móvel"'
npx --yes agent-browser close
