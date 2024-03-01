import TranslationsProvider from "../components/translations-provider";
import WelcomeMessage from "../components/welcome-message";
import initTranslations from "../i18n";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale = "en" } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <main className="flex flex-col h-full min-h-screen flex-grow items-center justify-center gap-4">
        <h1 className="text-3xl font-semibold">{t("header")}</h1>
        <WelcomeMessage />
      </main>
    </TranslationsProvider>
  );
}
