import MainHero from "@/components/shared/main/hero";
import MainAbout from "@/components/shared/main/about";
import { MainWorks } from "@/components/shared/main/works";
import MainServices from "@/components/shared/main/services";

import React from "react";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }, { locale: "et" }];
}

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = React.use(params)

  return (
    <>
      <MainHero params={{ locale }} />
      <MainAbout params={{ locale }} />
      <MainWorks />
      <MainServices params={{ locale }} />
    </>
  );
}
