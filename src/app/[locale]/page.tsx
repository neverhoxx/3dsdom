import MainHero from "@/components/shared/main/hero";
import MainAbout from "@/components/shared/main/about";
import { MainWorks } from "@/components/shared/main/works";
import MainServices from "@/components/shared/main/services";

interface PageProps {
  params: { locale: string };
}

export default function Home({ params }: PageProps) {
  return (
    <>
      <MainHero params={params} />
      <MainAbout params={params} />
      <MainWorks />
      <MainServices params={params} />
    </>
  );
}
