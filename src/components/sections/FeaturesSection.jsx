function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0A6CFF" strokeWidth="2" strokeLinecap="round" width="23" height="23">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0A6CFF" strokeWidth="2" strokeLinecap="round" width="23" height="23">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0A6CFF" strokeWidth="2" strokeLinecap="round" width="23" height="23">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: LightningIcon,
    title: 'Без потолка по скорости',
    text: 'Магистрали 10 Гбит — 4K-видео, стримы и онлайн-игры идут без подтормаживаний.',
  },
  {
    icon: PhoneIcon,
    title: 'Все основные платформы',
    text: 'Единый доступ на телефоне, планшете и ПК. Клиент Happ скачивается бесплатно.',
  },
  {
    icon: ShieldIcon,
    title: 'Работает круглосуточно',
    text: 'Серверы под постоянным контролем. Если что-то пойдёт не так — поддержка на связи.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section" style={{ background: '#F4F5F9' }}>
      <div className="section-inner">
        <p className="kicker">Возможности</p>
        <h2 className="h2" style={{ marginBottom: 48, maxWidth: 520 }}>
          Всё нужное —
          <br />
          без лишних шагов.
        </h2>
        <div className="three">
          {FEATURES.map((item) => (
            <div className="feat-card" key={item.title}>
              <div className="icon-wrap">
                <item.icon />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
