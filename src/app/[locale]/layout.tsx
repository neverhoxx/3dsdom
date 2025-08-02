import { ReactNode } from 'react';
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return (
        <>
            <Header locale={locale} />
            {children}
            <Footer />
        </>
    );
}


