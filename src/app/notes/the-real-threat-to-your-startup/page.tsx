import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Real Threat to Your Startup',
  description: 'The hardest part of building is not building.',
  openGraph: {
    title: 'The Real Threat to Your Startup - Saeedreza Abbaspour',
    description: 'The hardest part of building is not building.',
    url: 'https://saeedreza.com/notes/the-real-threat-to-your-startup',
  },
};

export default function TheRealThreatToYourStartupPage() {
  return (
    <div className="max-w-prose-wide mx-auto py-16 md:py-20 px-6 sm:px-8">
      <div className="mb-12">
        <Link
          href="/notes"
          className="back-link"
          aria-label="Go back to notes"
        >
          <span className="back-arrow">←</span>
          <span>Back to notes</span>
        </Link>
      </div>

      <article>
        <header className="mb-12">
          <h1 className="page-title mb-4">
            The Real Threat to Your Startup
          </h1>
          <p className="lead">
            The hardest part of building is not building.
          </p>
        </header>

        <div className="prose-article">
          <p>
            Most founders think their problem is building. It&apos;s not. The problem is deciding what not to build.
          </p>

          <p>
            The startups that struggle aren&apos;t the ones who can&apos;t code. They&apos;re the ones who can&apos;t stop coding. They keep adding features the way some people keep adding adjectives—compulsively, defensively, as if more might somehow equal better.
          </p>

          <p>
            The dangerous thing about feature creep is that it feels like progress. You&apos;re shipping code. Things are happening. But you&apos;re actually moving sideways while convincing yourself you&apos;re moving forward. Every feature you add before launch is a feature you&apos;re guessing users want. And you will guess wrong.
          </p>

          <hr />

          <p>
            Here&apos;s something most founders don&apos;t understand early enough: features aren&apos;t free even after you build them. They cost you once to build, again to test, and then forever to maintain. That button you added at 2 AM because it seemed clever? You&apos;re going to be debugging its interactions with other features for years. Technical debt is just another name for the accumulating weight of decisions you made before you understood the problem.
          </p>

          <p>
            The best founders have a trick. They don&apos;t say no to ideas—they say &ldquo;not yet.&rdquo; They keep a list of everything they want to build, and then they ruthlessly ignore it until after launch. The list isn&apos;t a plan. It&apos;s a release valve for the part of your brain that keeps generating ideas when it should be shipping.
          </p>

          <hr />

          <p>
            The real test for whether a feature belongs in v1 is simple: would the first ten users refuse to use your product without it? Not your target market—your actual first users. The ones you could call by name. If you&apos;re not sure who those people are, you have a bigger problem than scope creep.
          </p>

          <p>
            Try cutting your MVP in half, then cutting it in half again. It sounds extreme. But the companies that succeed usually launch with something so minimal it embarrasses them. The Airbnb that took over the world started as air mattresses in a living room. The point wasn&apos;t to build a complete solution. It was to learn whether the problem was real.
          </p>

          <hr />

          <p>
            There&apos;s a version of this that&apos;s even more extreme: instead of building the smallest thing that works, build nothing at all. Test whether people want your product with a landing page. Run some ads. See if anyone cares. You can learn more from $100 in ads than from three months of coding.
          </p>

          <p>
            The temptation to build more comes from fear. Fear that your product isn&apos;t impressive enough, that competitors will beat you, that users won&apos;t take you seriously. But early adopters don&apos;t expect polish. They expect something that solves their problem. If your product does that, they&apos;ll forgive almost anything else. And if it doesn&apos;t, no amount of additional features will save you.
          </p>

          <hr />

          <p>
            The best thing about launching early is that it ends the debate. You stop arguing about what users might want and start learning what they actually want. That conversation doesn&apos;t begin until you ship. Every day you spend adding features is another day you spend talking to yourself.
          </p>
        </div>
      </article>
    </div>
  );
}
