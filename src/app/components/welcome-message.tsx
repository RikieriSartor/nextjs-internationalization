"use client";

import { useTranslation } from "react-i18next";

export default function WelcomeMessage() {
  const { t } = useTranslation();

  return <p className="font-light text-gray-400">{t("greeting")}</p>;
}
