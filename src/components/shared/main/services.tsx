import { Container } from "../container";

import en from '@/locales/main-services/en.json';
import ru from '@/locales/main-services/ru.json';
import et from '@/locales/main-services/et.json';

interface MainServicesProps {
    params: { locale: string };
}

export default function MainServices({ params }: MainServicesProps) {
    const { locale } = params;
    const services = locale === 'ru' ? ru : locale === 'et' ? et : en;

    return (
        <Container className="flex justify-between mt-15 flex-wrap">
            <div className="self-start max-w-full lg:max-w-[570px] bg-white z-30 px-4 lg:px-0
                lg:sticky lg:top-0 lg:self-start
                sticky:lg:top-0
                ">
                <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-medium mb-6 sm:mb-8">
                    {locale === 'ru' ? 'Услуги' : locale === 'et' ? 'Teenused' : 'Services'}
                </h2>
            </div>

            <div className="">
                {services.map((service, i) => (
                    <div key={i} className="p-4 mb-3">
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-[#61656E] font-light">{service.text}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
}
