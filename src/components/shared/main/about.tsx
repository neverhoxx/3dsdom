import { Container } from "../container";

import en from '@/locales/main-about/en.json';
import ru from '@/locales/main-about/ru.json';
import et from '@/locales/main-about/et.json';

interface MainAboutProps {
    params: { locale: string };
}

export default function MainAbout({ params }: MainAboutProps) {
    const { locale } = params;
    const t = locale === 'ru' ? ru : locale === 'et' ? et : en;

    const aboutBlocks = [
        { title: t["main-about-state1-title"], text: t["main-about-state1-text"] },
        { title: t["main-about-state2-title"], text: t["main-about-state2-text"] },
        { title: t["main-about-state3-title"], text: t["main-about-state3-text"] },
    ];

    return (
        <Container className="mt-24 flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
            <div className="self-start max-w-full lg:max-w-[570px] bg-white z-30 px-4 lg:px-0
                lg:sticky lg:top-0 lg:self-start
                sticky:lg:top-0
                ">
                <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-medium mb-6 sm:mb-8">
                    {t["main-about-title"]}
                </h2>
            </div>


            <div className="w-full max-w-full lg:max-w-[680px] px-4 lg:px-0">
                <p className="text-[#61656E] font-light text-base sm:text-lg leading-relaxed mb-8 whitespace-pre-line">
                    {t["main-about-paragraph"]}
                </p>

                <div className="flex flex-wrap justify-between gap-6">
                    {aboutBlocks.map(({ title, text }, index) => (
                        <div key={index} className="flex-1 min-w-[250px] max-w-[320px]">
                            <p className="font-bold text-2xl sm:text-3xl mb-2">{title}</p>
                            <p className="text-[#61656E] font-light text-base sm:text-[18px] leading-relaxed">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
