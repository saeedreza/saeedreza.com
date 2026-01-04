import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ArticleNav from '../../components/ArticleNav';

export const metadata: Metadata = {
  title: 'Agency',
  description: 'Jeff Bezos\'s regret minimization framework sounds wise until you think about it for five minutes.',
  openGraph: {
    title: 'Agency - Saeedreza Abbaspour',
    description: 'Jeff Bezos\'s regret minimization framework sounds wise until you think about it for five minutes.',
    url: 'https://saeedreza.com/notes/agency',
    images: [
      {
        url: '/img/agency-cover.png',
        width: 1456,
        height: 816,
        alt: 'Agency - A hand-drawn sketch of a ship\'s wheel emerging from water',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency - Saeedreza Abbaspour',
    description: 'Jeff Bezos\'s regret minimization framework sounds wise until you think about it for five minutes.',
    images: ['/img/agency-cover.png'],
  },
};

export default function AgencyPage() {
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
            src="/img/agency-cover.png"
            alt="A hand-drawn sketch of a ship's wheel emerging from water"
            width={1456}
            height={816}
            className="w-full h-auto"
            priority
          />
        </figure>

        <header className="mb-12">
          <h1 className="page-title mb-4">
            Agency
          </h1>
          <p className="lead">
            Jeff Bezos&apos;s regret minimization framework sounds wise until you think about it for five minutes.
          </p>
        </header>

        <div className="prose-article">
          <p>
            The idea, which Bezos has described in <a href="https://www.youtube.com/watch?v=bQWr8ovbxF4" target="_blank" rel="noopener noreferrer">interviews</a>, is simple: when he was deciding whether to leave his hedge fund job to start Amazon, he imagined himself at 80 years old and asked which choice he&apos;d regret more. Would he regret leaving a comfortable job to try this internet thing? Or would he regret never trying at all? The answer felt obvious, so he left. The framework has since become gospel in startup culture: when facing a big decision, project yourself to the end of your life and ask what you&apos;d wish you&apos;d done. Then do that.
          </p>

          <p>
            The problem is you&apos;re asking the wrong person.
          </p>

          <p>
            The 30-year-old trying to decide whether to leave their job and start a company is not the same person who will exist at 50, let alone 80. They have different values, different fears, different definitions of what constitutes a life well-lived. You&apos;re essentially asking a stranger to make your decisions for you. Worse, you&apos;re asking an imaginary stranger, a projection of a future self constructed entirely from your current assumptions about what matters.
          </p>

          <p>
            I&apos;ve watched my own priorities shift every decade in ways I couldn&apos;t have predicted. What seemed like the most important thing at 25 now looks like a strange obsession. What I dismissed as boring turned out to be the stuff life is actually made of. If my 25-year-old self had tried to minimize regret for my 45-year-old self, he would have optimized for completely the wrong things, because he didn&apos;t know what my 45-year-old self would care about. He couldn&apos;t. You can&apos;t know what a decade of living does to your values until you&apos;ve lived it.
          </p>

          <p>
            Now, you might object: there&apos;s still continuity. You remember being 25. You carry forward your memories, your relationships, your name. Philosophers have argued about this for centuries, whether the self persists through time or is rebuilt moment to moment. I don&apos;t need to settle that debate. What I&apos;m claiming is narrower and harder to dispute: your preferences change in ways you can&apos;t predict. And regret minimization requires you to predict them. That&apos;s the problem. Even if you are, in some metaphysical sense, the same person at 80, you won&apos;t want the same things. The framework asks you to optimize for a target that moves in ways you can&apos;t see.
          </p>

          <p>
            So regret minimization has a fatal flaw: it assumes a stability of preferences that doesn&apos;t exist. You&apos;re not one consistent set of values moving through time. You&apos;re a series of value systems, each inheriting the circumstances left by the previous one.
          </p>

          <hr />

          <p>
            What should you do instead?
          </p>

          <p>
            Steer, don&apos;t plan. The way to navigate a life is not to pick a destination in the distant future and walk toward it, but to make the best choice you can see right now, then correct course as new information arrives. This is how every other complex, unpredictable system gets navigated. Startups don&apos;t succeed by picking a business plan at the start and following it for ten years. They succeed by launching something, seeing what happens, and iterating fast.
          </p>

          <p>
            The same is true for lives. The people I know who&apos;ve ended up in good places didn&apos;t get there by executing a plan. They got there by being aggressive about trying things and aggressive about fixing mistakes. They treated their lives more like a dialogue than a monologue, they made a move, the world responded, they adjusted.
          </p>

          <p>
            Consider the person deciding whether to leave their job for a startup. Regret minimization says: imagine yourself at 80, figure out which choice you&apos;d regret less, commit. But that&apos;s a one-shot bet on a prediction you can&apos;t make. Steering says something different: take the option that gives you more information and more future options. If you can negotiate a leave of absence instead of quitting outright, do that. If you can test your idea nights and weekends first, do that. If you do leave and the startup fails, treat that as data, not disaster. The goal isn&apos;t to get the decision right the first time. It&apos;s to put yourself in a position to correct course fast when you inevitably get it wrong.
          </p>

          <p>
            The key is the speed of adjustment. If you&apos;re going to make mistakes anyway, and you are, the variable you can control is how quickly you detect and correct them. Call it fast course correction. It&apos;s less romantic than imagining your 80-year-old self gazing back across a life without regrets. But it&apos;s more honest about how lives actually work.
          </p>

          <p>
            There&apos;s a deeper problem with regret minimization, though, beyond its bad predictions. It&apos;s a defensive posture. You&apos;re trying not to lose. You&apos;re optimizing for the absence of a negative feeling. But the opposite of regret isn&apos;t satisfaction, it&apos;s engagement. The goal isn&apos;t to die with a clean scorecard. It&apos;s to be in contact with your life while you&apos;re living it.
          </p>

          <p>
            A life spent trying to avoid regret is still a life spent in reaction to an imagined future judgment rather than in contact with the present. You&apos;re not making choices; you&apos;re hedging against a feeling you might have decades from now. That&apos;s a strange way to spend the only time you actually have.
          </p>

          <hr />

          <p>
            Here&apos;s something hard to argue with: you feel like you have agency. Whatever your philosophical beliefs about free will, at the level of lived experience, you feel like you can choose. Decisions feel like decisions. When you pick up a glass of water, it feels like you&apos;re doing it.
          </p>

          <p>
            If you have this feeling of agency, and you do, what&apos;s the point of not using it? Not deciding is also a decision. Outsourcing your choices to what other people tell you, or to an imaginary future self, is also a decision. But it&apos;s a decision to give away the one thing you actually have.
          </p>

          <p>
            So use it. Make choices with the information you have now. When they turn out to be wrong, make new ones. Don&apos;t wait for certainty; it&apos;s not coming. Don&apos;t defer to your imagined 80-year-old self; you don&apos;t know who they are. You&apos;re here, now, with options in front of you that will never appear in exactly this form again.
          </p>

          <p>
            Wouldn&apos;t it be a waste to reach the end of your life and realize you never really tasted it? Not because you chose wrong, but because you spent the whole time calculating instead of choosing, optimizing for a future feeling instead of living the present one. The strawberries were always there. You just never reached for them.
          </p>
        </div>

        <ArticleNav currentSlug="agency" />
      </article>
    </div>
  );
}

