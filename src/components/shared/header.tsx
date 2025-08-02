'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import en from '@/locales/header/en.json';
import ru from '@/locales/header/ru.json';
import et from '@/locales/header/et.json';
// { href: `/${currentLocale}/contact`, label: t['header-contact-link'] },
type LocaleDict = {
    [key: string]: string;
};

const locales: Record<string, LocaleDict> = { en, ru, et };
const availableLocales = ['en', 'et', 'ru'];

interface HeaderProps {
    locale: string;
}

export default function Header({ locale }: HeaderProps) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const currentLocale = availableLocales.includes(locale) ? locale : 'en';
    const t: LocaleDict = locales[currentLocale] || {};

    const cleanPathname = pathname.startsWith(`/${currentLocale}/`)
        ? pathname.slice(currentLocale.length + 2)
        : '';

    const links = [
        { href: `/${currentLocale}/about-me`, label: t['header-about-link'] },
        { href: `/${currentLocale}/works`, label: t['header-works-link'] },

    ];

    return (
        <header className="bg-transparent w-full h-[81px] absolute left-0 top-0 z-50 select-none">
            <div className="mx-auto max-w-[1360px] w-full px-4 __container h-full flex items-center justify-between relative">

                <div className="hidden sm:flex gap-4">
                    {availableLocales.map((loc) => {
                        const switchHref = pathname.startsWith(`/${currentLocale}/`)
                            ? `/${loc}/${pathname.slice(currentLocale.length + 2)}`
                            : `/${loc}`;
                        return (
                            <Link
                                key={loc}
                                href={switchHref}
                                className={`uppercase font-semibold ${loc === currentLocale ? 'underline text-white' : 'text-white hover:opacity-70'
                                    }`}
                            >
                                {loc}
                            </Link>
                        );
                    })}
                </div>

                <Link
                    className="font-bold text-3xl text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    href={`/${currentLocale}`}
                >
                    3ds<span className="text-[#585151]">Dom</span>
                </Link>

                <nav className="hidden sm:block">
                    <ul className="flex gap-6 text-base text-white font-medium">
                        {links.map(({ href, label }) => {
                            const cleanHref = href.slice(currentLocale.length + 2);
                            const isActive = cleanPathname === cleanHref;
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`transition-colors hover:opacity-70 ${isActive ? 'underline text-white' : ''
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <button
                    className="sm:hidden text-white z-50 text-3xl font-extrabold"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                <div
                    className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform transition-transform duration-300 sm:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex flex-col items-center justify-center h-full gap-6 text-white text-xl">
                        <div className="flex gap-4">
                            {availableLocales.map((loc) => {
                                const switchHref = pathname.startsWith(`/${currentLocale}/`)
                                    ? `/${loc}/${pathname.slice(currentLocale.length + 2)}`
                                    : `/${loc}`;
                                return (
                                    <Link
                                        key={loc}
                                        href={switchHref}
                                        className={`uppercase font-semibold ${loc === currentLocale ? 'underline text-white' : 'hover:opacity-70'
                                            }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {loc}
                                    </Link>
                                );
                            })}
                        </div>

                        {links.map(({ href, label }) => {
                            const cleanHref = href.slice(currentLocale.length + 2);
                            const isActive = cleanPathname === cleanHref;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`block transition-colors ${isActive ? 'underline text-white' : ''
                                        }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
}
