import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const locale = params.locale;

    return (
        <>
            <Header locale={locale} />
            {children}
            <Footer />
        </ >
    );
}
