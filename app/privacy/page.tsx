import { permanentRedirect } from "next/navigation";

/**
 * The Privacy Policy lives at /legal/privacy, but the shipped iOS app and older
 * links point here, so this path has to keep working. The privacy *feature*
 * content that used to live on this page moved to /features.
 */
export default function PrivacyRedirect() {
  permanentRedirect("/legal/privacy");
}
