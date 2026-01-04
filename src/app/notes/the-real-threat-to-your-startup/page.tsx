import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ArticleNav from '../../components/ArticleNav';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const publishedDate = '2025-11-12';

export const metadata: Metadata = {
  title: 'The Real Threat to Your Startup',
  description: 'The hardest part of building is not building.',
  openGraph: {
    title: 'The Real Threat to Your Startup - Saeedreza Abbaspour',
    description: 'The hardest part of building is not building.',
    url: 'https://saeedreza.com/notes/the-real-threat-to-your-startup',
    images: [
      {
        url: '/img/the-real-threat-to-your-startup-cover.png',
        width: 1456,
        height: 816,
        alt: 'The Real Threat to Your Startup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Real Threat to Your Startup - Saeedreza Abbaspour',
    description: 'The hardest part of building is not building.',
    images: ['/img/the-real-threat-to-your-startup-cover.png'],
  },
};

export default function TheRealThreatToYourStartupPage() {
  return (
    <div className="max-w-prose-wide mx-auto py-16 md:py-20 px-6 sm:px-8">
      <div className="mb-12">
        <Link
          href="/"
          className="back-link"
          aria-label="Go back home"
        >
          <span className="back-arrow">←</span>
          <span>Back</span>
        </Link>
      </div>

      <article>
        <figure className="mb-10 -mx-6 sm:-mx-8 md:mx-0">
          <Image
            src="/img/the-real-threat-to-your-startup-cover.png"
            alt=""
            width={1456}
            height={816}
            className="w-full h-auto"
            priority
          />
        </figure>

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
            The startups that struggle aren&apos;t the ones who can&apos;t code. They&apos;re the ones who can&apos;t stop coding. They keep adding features the way some people keep adding adjectives, compulsively, defensively, as if more might somehow equal better.
          </p>

          <p>
            The dangerous thing about feature creep is that it feels like progress. You&apos;re shipping code. Things are happening. But you&apos;re actually moving sideways while convincing yourself you&apos;re moving forward. Every feature you add before launch is a feature you&apos;re guessing users want. And most of those guesses will be wrong, not because founders are stupid, but because guessing what users want without users is like trying to hit a target blindfolded. You might get lucky. You probably won&apos;t.
          </p>

          <p>
            Here&apos;s something most founders don&apos;t understand early enough: features aren&apos;t free even after you build them. They cost you once to build, again to test, and then forever to maintain. That button you added at 2 AM because it seemed clever? You&apos;re going to be debugging its interactions with other features for years. Technical debt is just another name for the accumulating weight of decisions you made before you understood the problem.
          </p>

          <p>
            The best founders I&apos;ve watched have a trick. They don&apos;t say no to ideas, they say &ldquo;not yet.&rdquo; They keep a list of everything they want to build, and then they ruthlessly ignore it until after launch. The list isn&apos;t a plan. It&apos;s a release valve for the part of your brain that keeps generating ideas when it should be shipping.
          </p>

          <p>
            The real test for whether a feature belongs in v1 is simple: would the first ten users refuse to use your product without it? Not your target market, your actual first users. The ones you could call by name. If you&apos;re not sure who those people are, you have a bigger problem than scope creep.
          </p>

          <hr />

          <p>
            Try cutting your MVP in half, then cutting it in half again. It sounds extreme. But the companies that succeed often launch with something so minimal it embarrasses them. Dropbox launched with a video demo and a waitlist, no working product at all. The Collison brothers tested Stripe by offering to integrate it for startups on the spot, before the product was ready for self-service. They weren&apos;t building the complete solution. They were learning whether the problem was real.
          </p>

          <p>
            There&apos;s a version of this that&apos;s even more extreme: instead of building the smallest thing that works, build nothing at all. Test whether people want your product with a landing page. Run some ads. See if anyone cares. You can learn more from $100 in ads than from three months of coding.
          </p>

          <p>
            But here&apos;s where I&apos;m less certain. This advice assumes your market tolerates roughness, that early adopters will forgive missing features if the core works. That&apos;s true for most software. It&apos;s less true when trust is table stakes. If you&apos;re building something that handles money, or health data, or security, &ldquo;move fast and break things&rdquo; can break trust in ways you can&apos;t repair. Stripe could test with startups who&apos;d tolerate bugs. A startup selling to banks probably can&apos;t.
          </p>

          <p>
            There&apos;s also a failure mode on the other side. Some founders launch so early, with something so minimal, that they never learn whether the idea could work, only that the rough version didn&apos;t. If your MVP is a landing page and nobody signs up, you&apos;ve learned something. But you haven&apos;t learned whether a real product would have worked. The signal is noisy.
          </p>

          <p>
            So the advice isn&apos;t &ldquo;always launch smaller.&rdquo; It&apos;s &ldquo;launch as small as you can while still learning something real.&rdquo; The minimum viable product is the minimum that&apos;s still viable as a test.
          </p>

          <hr />

          <p>
            The temptation to build more comes from fear. Fear that your product isn&apos;t impressive enough, that competitors will beat you, that users won&apos;t take you seriously. But in most markets, early adopters don&apos;t expect polish. They expect something that solves their problem. If your product does that, they&apos;ll forgive almost anything else. And if it doesn&apos;t, no amount of additional features will save you.
          </p>

          <p>
            The best thing about launching early is that it ends the debate. You stop arguing about what users might want and start learning what they actually want. That conversation doesn&apos;t begin until you ship.
          </p>

          <p>
            But it&apos;s worth being honest: launching is also when you discover whether you built the right minimum. Sometimes you learn you cut too deep. The skill isn&apos;t just cutting, it&apos;s knowing where to stop.
          </p>
        </div>

        <ArticleNav currentSlug="the-real-threat-to-your-startup" />
      </article>
    </div>
  );
}
