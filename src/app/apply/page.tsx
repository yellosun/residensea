import type { Metadata } from "next";
import Image from "next/image";
import { BASE_PATH } from "@/lib/base-path";

const CONTACT_EMAIL = "artist.residensea@gmail.com";
const MAILTO =
  `mailto:${CONTACT_EMAIL}` +
  `?subject=${encodeURIComponent("Residensea 2027, Galveston interest")}` +
  `&body=${encodeURIComponent(
    "Hi Violet and Madelline,\n\nI'd love to hear more about the May 2027 Galveston residency. A bit about me and my practice:\n\n"
  )}`;

export const metadata: Metadata = {
  title: "Apply | Residensea",
  description:
    "Applications for the May 8–16, 2027 Galveston, Texas artist residency are opening soon.",
};

export default function ApplyPage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-[280px_minmax(0,1fr)] sm:items-start">
        <Image
          src={`${BASE_PATH}/galveston.jpg`}
          alt="Violet and Madelline in Galveston, Texas"
          width={280}
          height={350}
          className="mx-auto w-40 rounded-2xl object-cover sm:w-full"
          priority
        />
        <div className="text-center">
          <p className="inline-block rounded-full bg-terracotta/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta">
            Applications opening soon
          </p>
          <h1 className="mt-6 font-serif text-4xl italic text-sea-deep sm:text-5xl">
            Galveston, Texas
          </h1>
          <p className="mt-2 text-lg font-medium text-sea">May 8–16, 2027</p>
          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-ink/80">
            Our next residency takes us to the Texas Gulf Coast. We&apos;re
            still finalizing partners and the application itself, but if
            you&apos;d like to be first in line when it opens, reach out and
            tell us a little about your practice.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-ink/80">
            We&apos;re looking for artists as much for their curiosity as for
            their existing practice: people ready to walk the shore, sit in
            group conversation, collect and study material, and work with
            openness toward the place that hosts them.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-ink/80">
            The residency is multidisciplinary. Visual, written, performance,
            and archival practices are all welcome, working toward individual
            and joint pieces. We prioritize compassion, curiosity, and care,
            in collaboration with the place as much as with each other.
          </p>
          <a
            href={MAILTO}
            className="mt-10 inline-block rounded-full bg-sea-deep px-8 py-4 text-sm font-semibold text-sand-light hover:bg-terracotta"
          >
            Email us your interest
          </a>
          <p className="mt-4 text-sm text-ink/50">
            Or write to us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
