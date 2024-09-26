import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/notes";
import Link from "next/link";

export const metadata = {
  title: "Notes",
  description: "My thoughts and writings from what i learn.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="flex h-96 items-center justify-center">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl">🚧 Under Development 🚧</h1>
          <h3>Feature Coming Soon.</h3>
        </div>
      </BlurFade>
      {/* <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col justify-center text-center">
            <div className="space-y-2 mb-12">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Notes
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                I write and learn
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I study alot and write about what I learn. Here are some of my
                notes from school.
              </p>
            </div>
          </div>
        </BlurFade>
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/notes/${post.slug}`}
              >
                <div className=" w-full flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))} */}
    </section>
  );
}
