import { Container } from "../container";

import en from '@/locales/main-hero/en.json';
import ru from '@/locales/main-hero/ru.json';
import et from '@/locales/main-hero/et.json';

import heroImg from '@/images/main-hero-bg.jpg';

interface MainHeroProps {
    params: { locale: string };
}

export default function MainHero({ params }: MainHeroProps) {
    const { locale } = params;
    const t = locale === 'ru' ? ru : locale === 'et' ? et : en;

    return (
        <div
            className="bg-cover bg-center min-h-screen w-full pt-[81px] flex items-center"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.85)), url(${heroImg.src})`,
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            }}
        >
            <Container className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pb-5">
                <h1 className="text-white font-medium text-[32px] sm:text-[42px] lg:text-[50px] leading-tight mb-4 sm:mb-5">
                    {t["main-hero-title"]}
                </h1>

                <h2 className="text-white text-[16px] sm:text-[18px] max-w-[800px] leading-relaxed">
                    {t["main-hero-subtitle"]}
                </h2>
            </Container>
        </div>
    );
}
