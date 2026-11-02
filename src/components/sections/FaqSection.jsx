import { useState } from 'react';
import clsx from 'clsx';

const FAQ = [
  {
    q: 'Как создать аккаунт?',
    a: 'Доступны вход по email, телефону, Google и Telegram. Пароль можно не задавать сразу — добавите в личном кабинете. После регистрации автоматически включается сутка бесплатного доступа.',
  },
  {
    q: 'Сколько гаджетов можно использовать параллельно?',
    a: 'На любом тарифе — до десяти устройств одновременно: смартфон, планшет, ноутбук, телевизор и т.д.',
  },
  {
    q: 'Когда появится конфигурация после оплаты?',
    a: 'Сразу после подтверждения платежа — в профиле, без перезапуска приложения.',
  },
  {
    q: 'Есть ли лимиты по скорости или объёму трафика?',
    a: 'Нет. Трафик не ограничиваем, скорость не снижаем — серверы на каналах 10 Гбит.',
  },
  {
    q: 'Подойдёт ли для Smart TV или роутера?',
    a: 'Apple TV (tvOS) поддерживается напрямую. Для роутера — ручная настройка; в поддержке подскажут шаги.',
  },
  {
    q: 'Соединение стало нестабильным — что делать?',
    a: 'Смените сервер в приложении. Если не помогло — напишите нам, обычно отвечаем в течение 10 минут.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="section" style={{ background: '#0F1116' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <p className="kicker" style={{ color: '#4A8CFF' }}>
          FAQ
        </p>
        <h2 className="h2" style={{ color: '#fff', marginBottom: 36 }}>
          Ответы на частые вопросы
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={clsx('faq-item', isOpen && 'is-open')} key={item.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-sign">{isOpen ? '−' : '+'}</span>
                </button>
                <p className="faq-a">{item.a}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
