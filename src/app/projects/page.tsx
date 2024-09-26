import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default async function myprojects() {
  return (
    <section className="flex h-96 items-center justify-center">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl">🚧 Under Development 🚧</h1>
          <h3>Feature Coming Soon.</h3>
        </div>
      </BlurFade>
    </section>
  );
}
