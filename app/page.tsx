import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { SelectedWork } from "@/components/selected-work";
import { resolveContentAdapter } from "@/lib/adapters/content-adapter";

export default async function Home() {
  const content = await resolveContentAdapter().getSiteContent();
  const [featuredProject] = content.projects;

  return (
    <main>
      <Hero hero={content.hero} />
      <Manifesto manifesto={content.manifesto} />
      <SelectedWork project={featuredProject} />
      <footer className="footer" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 id="contact-title">{content.contact.title}</h2>
        </div>
        <p>{content.contact.body}</p>
        <nav aria-label="Canales de contacto">
          {content.contact.channels.map((channel) => (
            <a href={channel.href} key={channel.label}>
              {channel.label}: {channel.value}
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}
