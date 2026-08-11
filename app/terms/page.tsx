import { permanentRedirect } from "next/navigation";

/**
 * The released iOS app's Help screen links to waow.app/terms, so this path has
 * to resolve. The document itself lives at /legal/terms.
 */
export default function TermsRedirect() {
  permanentRedirect("/legal/terms");
}
