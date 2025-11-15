import BlurFade from "@/components/magicui/blur-fade";
import { Separator } from "@/components/ui/separator";
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
    <section className="flex h-96 flex-col items-start justify-start">
      {/* //TODO: make to do list add button  */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col justify-center text-center">
          <div className="mb-12 space-y-2">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
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
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="mb-4 flex flex-col space-y-1"
              href={`/notes/${post.slug}`}
            >
              <div className="flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
            {id < posts.length - 1 && <Separator className="my-4" />}
          </BlurFade>
        ))}
    </section>
  );
}
