import { useLanguage } from '@/i18n';

/** Apresenta o filme da marca antes da coleção. Exemplo: <BrandFilm />. */
const BrandFilm = (): JSX.Element => {
  const { t } = useLanguage();
  return (
  <section aria-labelledby="brand-film-title" className="bg-card px-6 pb-20 pt-8 lg:pb-32">
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-px w-20 bg-accent" />
        <p className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">{t.brandFilm.label}</p>
        <h2 id="brand-film-title" className="text-3xl font-extralight leading-tight text-primary lg:text-5xl">{t.brandFilm.title}</h2>
        <p className="text-sm font-light text-muted-foreground">{t.brandFilm.description}</p>
      </div>
      <video controls playsInline preload="none" poster={`${import.meta.env.BASE_URL}videos/one-water-brand-film.jpg`} aria-label={t.brandFilm.ariaLabel} className="aspect-video w-full bg-black shadow-xl">
        <source src={`${import.meta.env.BASE_URL}videos/one-water-brand-film.mp4`} type="video/mp4" />
        {t.brandFilm.fallback} <a href={`${import.meta.env.BASE_URL}videos/one-water-brand-film.mp4`}>{t.brandFilm.link}</a>
      </video>
    </div>
  </section>
  );
};

export default BrandFilm;
