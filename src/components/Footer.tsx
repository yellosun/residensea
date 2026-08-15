const CONTACT_EMAIL = "artist.residensea@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-sea-deep/10 bg-sea-deep text-sand-light">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg">residensea</p>
          <p className="mt-1 text-sm text-sand-light/70">
            An annual artist residency by the sea.
          </p>
        </div>
        <div className="text-sm text-sand-light/80">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hover:text-terracotta"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-1 text-sand-light/50">
            Hosted by Violet Moon &amp; Madelline Vicencio
          </p>
        </div>
      </div>
    </footer>
  );
}
