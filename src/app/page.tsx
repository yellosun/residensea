import Link from "next/link";

const PRINCIPLES = [
  {
    title: "Learn the history",
    body: "Before we make anything, we listen — to the people, stories, and histories of the coastal community that hosts us.",
  },
  {
    title: "Support local business",
    body: "Our food, tours, and housing route through local, independent businesses. The residency's spend stays in the community.",
  },
  {
    title: "Create from what we find",
    body: "Every piece we make starts with material gathered during our time there — driftwood, clay, shell, fiber, dye.",
  },
  {
    title: "Give it back",
    body: "The art we make from a place is gifted back to that community at the close of the residency.",
  },
];

const HOSTS = [
  {
    initials: "VM",
    name: "Violet Moon",
    pronouns: "they/them",
    bio: "Multidisciplinary artist working across textile, print, and found material. Co-founded residensea to bring studio practice out of the studio and onto the shoreline.",
  },
  {
    initials: "MV",
    name: "Madelline Vicencio",
    pronouns: "she/they",
    bio: "Artist and organizer focused on community-rooted creative practice. Believes the best work happens when you actually know the place you're making it in.",
  },
];

const WORK_SAMPLES = [
  { label: "Reclaimed clay studies", year: "2024" },
  { label: "Driftwood assemblage", year: "2024" },
  { label: "Natural dye textiles", year: "2023" },
  { label: "Shoreline print series", year: "2023" },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-sea-deep via-sea to-sea-light px-6 py-28 text-sand-light sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sand-light/70">
            An annual artist residency, always by the sea
          </p>
          <h1 className="mt-6 font-serif text-5xl italic tracking-tight sm:text-6xl">
            residensea
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-sand-light/90">
            Each year, we travel with a small group of artists to a new coastal
            community for a week to ten days — to learn its history, support
            the businesses that sustain it, and make art from the materials it
            gives us.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-sand-light hover:bg-terracotta-dark"
            >
              Upcoming: Galveston, May 2027
            </Link>
            <Link
              href="/#story"
              className="rounded-full border border-sand-light/40 px-6 py-3 text-sm font-semibold hover:bg-sand-light/10"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <section id="story" className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-serif text-3xl italic text-sea-deep">
              Wherever we go, we go by the sea.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/80">
              residensea started as a simple idea: that a residency should
              give as much to a place as it takes. Every year we choose one
              coastal community, stay for a week to ten days, and build the
              whole trip around it — its history, its people, its food, its
              shoreline.
            </p>
            <p className="mt-4 text-base leading-7 text-ink/80">
              We don&apos;t ship in materials. What we make comes from what we
              gather while we&apos;re there, and what we make stays with the
              community that hosted us.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
            {PRINCIPLES.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-sea-deep/10 bg-white/60 p-5"
              >
                <p className="font-serif text-sm text-terracotta">
                  0{i + 1}
                </p>
                <p className="mt-1 font-semibold text-sea-deep">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-ink/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hosts" className="bg-sand px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl italic text-sea-deep">
            Hosted by
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {HOSTS.map((host) => (
              <div
                key={host.name}
                className="flex gap-5 rounded-2xl bg-white/70 p-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sea to-terracotta font-serif text-lg text-sand-light">
                  {host.initials}
                </div>
                <div>
                  <p className="font-semibold text-sea-deep">{host.name}</p>
                  <p className="text-xs uppercase tracking-wide text-terracotta">
                    {host.pronouns}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    {host.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl italic text-sea-deep">
            Our work
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-ink/80">
            A sampling of past creative practice from Violet and Madelline —
            work made from gathered, local, and reclaimed material.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {WORK_SAMPLES.map((sample, i) => (
              <div key={sample.label} className="group">
                <div
                  className="aspect-square rounded-xl bg-gradient-to-br"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--color-sea-${
                      i % 2 === 0 ? "deep" : "light"
                    }), var(--color-terracotta))`,
                  }}
                />
                <p className="mt-2 text-sm font-medium text-sea-deep">
                  {sample.label}
                </p>
                <p className="text-xs text-ink/50">{sample.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sea-deep px-6 py-20 text-center text-sand-light">
        <h2 className="font-serif text-3xl italic">
          Galveston, Texas — May 2027
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sand-light/80">
          Our next residency is coming together. Applications open soon —
          reach out now if you&apos;d like to hear first.
        </p>
        <Link
          href="/apply"
          className="mt-8 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold hover:bg-terracotta-dark"
        >
          Learn more
        </Link>
      </section>
    </div>
  );
}
