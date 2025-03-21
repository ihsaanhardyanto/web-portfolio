import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { PhotoCollage } from "@/components/photo-collage";

import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
// import Typewriter from "@/components/typewriter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              {/* <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={
                  <Typewriter
                    options={{
                      strings: [
                        "Hello,",
                        "Hola,",
                        "Bonjour,",
                        "Ciao,",
                        "Hallo,",
                        "你好,",
                        "こんにちは,",
                        "안녕하세요,",
                        "สวัสดี,",
                        "Привет,",
                        "Merhaba,",
                        "مرحبا,",
                        "Hej,",
                        "Selam,",
                        "Xin chào,",
                        "Olá,",
                        "Salam,",
                        "Namaste,",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                }
              /> */}
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="photo">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <PhotoCollage />
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map(
            (
              {
                company,
                logoUrl,
                title,
                href,
                badges,
                start,
                end,
                description,
              },
              id,
            ) => (
              <BlurFade key={company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
                  key={company}
                  logoUrl={logoUrl}
                  altText={company}
                  title={company}
                  subtitle={title}
                  href={href}
                  badges={badges}
                  period={`${start} - ${end ?? "Present"}`}
                  description={description}
                  // description={
                  //   <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                  //     {description}
                  //   </Markdown>
                  // }
                />
              </BlurFade>
            ),
          )}
        </div>
      </section>

      <section id="org">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Organizational Experience</h2>
          </BlurFade>
          {DATA.org.map((org, id) => (
            <BlurFade key={org.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={org.company}
                logoUrl={org.logoUrl}
                altText={org.company}
                title={org.company}
                subtitle={org.title}
                href={org.href}
                badges={org.badges}
                period={`${org.start} - ${org.end ?? "Present"}`}
                description={org.description}
                // description={
                //   <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                //     {org.description}
                //   </Markdown>
                // }
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="techs">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Tech Languages</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.techs.map((tech, id) => (
              <BlurFade key={tech} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={tech}>{tech}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="frameworks">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Frameworks</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.frameworks.map((framework, id) => (
              <BlurFade
                key={framework}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge key={framework}>{framework}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="spotify">
        <div className="flex items-center justify-center">
          <a href="https://spotify-github-profile.kittinanx.com/api/view?uid=fpbxg8w963dvuwaj8icyfr2cl&redirect=true">
            <img
              src="https://spotify-github-profile.kittinanx.com/api/view?uid=fpbxg8w963dvuwaj8icyfr2cl&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false"
              alt="Spotify Profile"
            />
          </a>
        </div>
      </section>

      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
