import { Helmet } from 'react-helmet-async';
import Header from '@components/navigation/Header';
import Footer from '@components/navigation/Footer';
import HeroSection from '@components/sections/HeroSection';
import Ticker from '@components/sections/Ticker';
import FeaturesSection from '@components/sections/FeaturesSection';
import StepsSection from '@components/sections/StepsSection';
import PricingSection from '@components/sections/PricingSection';
import FaqSection from '@components/sections/FaqSection';
import CtaSection from '@components/sections/CtaSection';

export default function HomePage() {
  return (
    <div style={{ width: '100%', fontFamily: 'Manrope,-apple-system,sans-serif', color: '#0F0F0F' }}>
      <Helmet>
        <title>Happ — подписка для приложения, 3 дня за 9 ₽</title>
        <meta
          name="description"
          content="Стабильное подключение без лишних настроек — в России и за рубежом. 3 дня за 9 рублей, профиль создаётся автоматически после регистрации."
        />
        <link rel="canonical" href="https://happ-time.global/" />
        <meta property="og:url" content="https://happ-time.global/" />
        <meta property="og:title" content="Happ — подписка для приложения, 3 дня за 9 ₽" />
        <meta
          property="og:description"
          content="Стабильное подключение без лишних настроек — в России и за рубежом. 3 дня за 9 рублей, профиль создаётся автоматически после регистрации."
        />
      </Helmet>
      <Header />
      <HeroSection />
      <Ticker />
      <PricingSection />
      <StepsSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
