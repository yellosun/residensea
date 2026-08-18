import Image from "next/image";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { BASE_PATH } from "@/lib/base-path";
import {
  GiveBackIcon,
  HistoryIcon,
  ShellIcon,
  StorefrontIcon,
} from "@/components/PrincipleIcons";

const PRINCIPLES = [
  {
    title: "Learn the history",
    body: "Before we make anything, we listen: to the people, stories, and histories of the coastal community that hosts us.",
    Icon: HistoryIcon,
  },
  {
    title: "Support local business",
    body: "Our food, tours, and housing route through local, independent businesses. The residency's spend stays in the community.",
    Icon: StorefrontIcon,
  },
  {
    title: "Create from what we find",
    body: "Every piece we make starts with material gathered during our time there: driftwood, clay, shell, fiber, dye, using what is lost, found, and untold in the tides, algae, and sediment around us.",
    Icon: ShellIcon,
  },
  {
    title: "Give it back",
    body: "We close each residency with a public exhibition of the work, open to the community that hosted us. Not a finished body of work, but a reflection of the shared landscape.",
    Icon: GiveBackIcon,
  },
];

const JOINT_STATEMENT =
  "Madelline (she/they) and Violet (they/them) are visual and performance-based artists who collaborate on the craft of storytelling. They love remembering how the mundane is magical and listening to the loud unspokens. In their discoveries, they hope to share that art is an important job, a hard but liberating job, and a brave one.";

const HOSTS = [
  {
    photo: `${BASE_PATH}/hosts/violet.jpg`,
    name: "Violet Moon, MA NCC",
    pronouns: "they/them",
    bio: "A queer, genderless movement artist and choreographer whose work weaves together dance, social activism, arts advocacy, and trauma-informed healing. Violet holds a Master's in Clinical Mental Health Counseling and has trained at Hubbard Street, P.A.R.T.S. in Brussels, and Le Centre National de la Danse in Paris. Their choreography explores intimacy, collective memory, and reclamation, most recently staged in GROOM (2025).",
  },
  {
    photo: `${BASE_PATH}/hosts/madelline.jpg`,
    name: "Madelline Vicencio",
    pronouns: "she/they",
    bio: "A Houston born now West Virginia-based painter with a BFA in Painting from the University of Houston. Her work has shown at BOX 13 Artspace, DiverseWorks, Anya Tish Gallery, and MECA Houston, and she has held residencies at Kinhouse, TEXERE in Oaxaca, and Casa Lü in Mexico City. Madelline serves as Treasurer of BOX 13 ArtSpace and coordinates community rooted exhibitions and residencies across the city.",
  },
];

const WORK_SAMPLES = [
  {
    title: "The House",
    subtitle: "Immersive exhibition, joint",
    year: "2026",
    photo: `${BASE_PATH}/work/the-house.jpg`,
  },
  {
    title: "Touched",
    subtitle: "Fabrication & dance theatre, joint",
    year: "2026",
    photo: `${BASE_PATH}/work/touched.jpg`,
  },
  {
    title: "Do You Have Papers?",
    subtitle: "Sculpture, Madelline",
    year: "2026",
    photo: `${BASE_PATH}/work/papers.jpg`,
  },
  {
    title: "Artists for People",
    subtitle: "Benefit concert production, Violet",
    year: "2025",
    photo: `${BASE_PATH}/work/artists-for-people.jpg`,
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-sea-deep via-sea to-sea-light px-6 py-28 text-sand-light sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <LogoMark className="mx-auto h-24 w-24" />
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-sand-light/70">
            An annual artist residency, always by the sea
          </p>
          <h1 className="mt-6 font-serif text-5xl italic tracking-tight sm:text-6xl">
            residensea
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-sand-light/90">
            Each year, we travel with a small group of artists to a new coastal
            community for a week to ten days, to learn its history, support
            the businesses that sustain it, and make art from the materials it
            gives us.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-sand-light hover:bg-terracotta-dark"
            >
              Upcoming: Galveston, TX, May 8–16, 2027
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
            <Image
              src={`${BASE_PATH}/moments/laughing.jpg`}
              alt="Violet and Madelline laughing together at The House"
              width={1200}
              height={800}
              className="mt-6 w-full rounded-2xl object-cover"
            />
            <p className="mt-6 text-base leading-7 text-ink/80">
              residensea started as a simple idea: that a residency should
              give as much to a place as it takes. Every year we choose one
              coastal community, stay for a week to ten days, and build the
              whole trip around it: its history, its people, its food, its
              shoreline.
            </p>
            <p className="mt-4 text-base leading-7 text-ink/80">
              We don&apos;t ship in materials. What we make comes from what we
              gather while we&apos;re there, and what we make stays with the
              community that hosted us.
            </p>
            <p className="mt-4 text-base leading-7 text-ink/80">
              The sea acts as our mentor and collaborator, not a backdrop,
              one we learn from and admire. Working within an ecosystem
              carries a responsibility to approach it with care, so each
              cycle closes with an open studio exhibition, the residency
              giving back what it takes.
            </p>
            <p className="mt-4 text-base leading-7 text-ink/80">
              residensea is multidisciplinary by design. Visual, written,
              performance, and archival work all come together into
              individual and joint pieces. Collaboration runs in two
              directions, with the place as much as with the people in it,
              and we move through both with compassion, curiosity, and care.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
            {PRINCIPLES.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-sea-deep/10 bg-white/60 p-5"
              >
                <item.Icon />
                <p className="mt-3 font-serif text-sm text-terracotta">
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
          <div className="grid items-center gap-10 sm:grid-cols-[minmax(0,1fr)_280px]">
            <div>
              <h2 className="font-serif text-3xl italic text-sea-deep">
                Hosted by
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink/80">
                {JOINT_STATEMENT}
              </p>
            </div>
            <Image
              src={`${BASE_PATH}/moments/hug.jpg`}
              alt="Violet and Madelline hugging after a live performance during The House, an immersive exhibit"
              width={280}
              height={324}
              className="mx-auto w-full max-w-[280px] rounded-2xl object-cover"
            />
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {HOSTS.map((host) => (
              <div
                key={host.name}
                className="flex gap-5 rounded-2xl bg-white/70 p-6"
              >
                <Image
                  src={host.photo}
                  alt={host.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
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
            Selected past work from Violet and Madelline, spanning
            choreography, painting, exhibition, and collaborative
            performance: two joint pieces and one solo piece from each.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {WORK_SAMPLES.map((sample, i) =>
              sample.photo ? (
                <div key={sample.title} className="group">
                  <Image
                    src={sample.photo}
                    alt={sample.title}
                    width={400}
                    height={400}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                  <p className="mt-2 text-sm font-medium text-sea-deep">
                    {sample.title}
                  </p>
                  <p className="text-xs text-ink/50">
                    {sample.subtitle}, {sample.year}
                  </p>
                </div>
              ) : (
                <div key={sample.title} className="group">
                  <div
                    className="aspect-square rounded-xl bg-gradient-to-br"
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--color-sea-${
                        i % 2 === 0 ? "deep" : "light"
                      }), var(--color-terracotta))`,
                    }}
                  />
                  <p className="mt-2 text-sm font-medium text-sea-deep">
                    {sample.title}
                  </p>
                  <p className="text-xs text-ink/50">
                    {sample.subtitle}, {sample.year}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-sea-deep px-6 py-20 text-center text-sand-light">
        <h2 className="font-serif text-3xl italic">
          Galveston, Texas, May 8–16, 2027
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sand-light/80">
          Galveston&apos;s coastal charm, distinctive history, and vibrant
          creative community make it a meaningful place to bring artists
          together. Applications open soon, so reach out now if you&apos;d
          like to hear first.
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
