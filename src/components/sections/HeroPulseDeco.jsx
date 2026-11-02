import { useTrackedLinks } from '@/hooks/useTrackedLinks';

export default function HeroPulseDeco() {
  const { authUrl } = useTrackedLinks();

  return (
    <div className="hero-pulse-deco">
      <div className="hero-pulse-deco__frame">
        <span className="hero-ring" aria-hidden="true" />
        <span className="hero-ring hero-ring--delay" aria-hidden="true" />
        <a className="hero-pulse-deco__hub soft-pulse" href={authUrl} aria-label="Получить доступ">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v9" />
            <path d="M6.6 6.6a7.5 7.5 0 1 0 10.8 0" />
          </svg>
        </a>
      </div>
    </div>
  );
}
