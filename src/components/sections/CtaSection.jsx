import { useTrackedLinks } from '@/hooks/useTrackedLinks';

export default function CtaSection() {
  const { authUrl, supportUrl } = useTrackedLinks();

  return (
    <section
      style={{
        background: '#0A6CFF',
        padding: 'clamp(64px,8vw,104px) clamp(20px,4vw,56px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,.16), transparent 70%)',
        }}
      />
      <div style={{ position: 'relative' }}>
        <h2
          style={{
            fontSize: 'clamp(30px,4vw,52px)',
            fontWeight: 800,
            letterSpacing: -1.6,
            color: '#fff',
            marginBottom: 14,
          }}
        >
          Сутки бесплатно —
          <br />
          начните сегодня.
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,.75)', marginBottom: 32 }}>
          Пара кликов для регистрации — профиль появится сам.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="cta-white" href={authUrl}>
            Получить пробный доступ
          </a>
          <a className="cta-ghost" href={supportUrl} target="_blank" rel="noopener noreferrer">
            Связаться с поддержкой
          </a>
        </div>
      </div>
    </section>
  );
}
