import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { SelectedWork } from "@/components/selected-work";
import { BrandWorkScenes } from "@/components/brand-work-scenes";
import { VisualSliceMotion } from "@/components/visual-slice-motion";
import { resolveContentAdapter } from "@/lib/adapters/content-adapter";

export default async function Home() {
  const content = await resolveContentAdapter().getSiteContent();
  const [featuredProject] = content.projects;

  return (
    <main>
      <VisualSliceMotion />
      <Hero hero={content.hero} />
      <Manifesto manifesto={content.manifesto} />
      <SelectedWork project={featuredProject} />
      <BrandWorkScenes items={content.brandWork} />
      <footer className="footer" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 id="contact-title">{content.contact.title}</h2>
        </div>
        <p>{content.contact.body}</p>
        {content.contact.channels.length > 0 ? (
          <nav aria-label="Canales de contacto">
            {content.contact.channels.map((channel) => (
              <a href={channel.href} key={channel.label}>
                {channel.label}: {channel.value}
              </a>
            ))}
          </nav>
        ) : (
          <p className="footer__note">Canales directos pendientes de confirmación.</p>
        )}
      </footer>
    </main>
  );
}
