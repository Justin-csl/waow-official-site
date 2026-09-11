import { LanguageProvider } from "../i18n/lang";

export default function LaoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <LanguageProvider lang="lo">{children}</LanguageProvider>;
}
