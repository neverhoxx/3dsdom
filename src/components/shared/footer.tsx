'use client';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';

import Link from 'next/link';

import { Container } from './container';

export default function Footer() {

    return (
        <footer className="text-black mt-10 py-6 px-4">
            <Container>
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    <Link href="" className="text-2xl font-bold select-none"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        3dsdom.ee
                    </Link>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
                        <div className="flex space-x-6 text-xl">
                            <Link
                                href="https://www.facebook.com/profile.php?id=61555010872317"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-blue-600 transition"
                            >
                                <FaFacebookF />
                            </Link>
                            <Link
                                href="https://www.instagram.com/3dsdom.ee/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:text-pink-500 transition"
                            >
                                <FaInstagram />
                            </Link>
                        </div>


                        <div className="flex flex-col md:flex-row md:space-x-6 whitespace-nowrap text-base">
                            <Link href="tel:+37212345678" className="flex items-center hover:underline space-x-2">
                                <FiPhone />
                                <span>+372 5914 3487</span>
                            </Link>
                            <Link href="mailto:info@3dsdom.ee" className="flex items-center hover:underline space-x-2">
                                <FiMail />
                                <span>info@3dsdom.ee</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
