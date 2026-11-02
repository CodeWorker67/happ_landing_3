const STEPS = [
  {
    n: '1',
    title: 'Создайте профиль',
    text: 'Войдите через почту, номер, Telegram или Google — пароль можно задать позже. Сразу активируется сутка бесплатно.',
  },
  {
    n: '2',
    title: 'Установите Happ',
    text: 'Загрузите из App Store, Google Play или с сайта для Windows. Подписку из кабинета подтянете в один тап.',
  },
  {
    n: '3',
    title: 'Подключитесь',
    text: 'Выберите подходящий сервер в списке — и пользуйтесь сетью на полной скорости.',
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="section" style={{ background: '#fff' }}>
      <div className="section-inner">
        <p className="kicker">Подключение</p>
        <h2 className="h2" style={{ marginBottom: 48 }}>
          Три этапа. Меньше минуты.
        </h2>
        <div className="three">
          {STEPS.map((step) => (
            <div className="step-card" key={step.n}>
              <div className="step-num">{step.n}</div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
