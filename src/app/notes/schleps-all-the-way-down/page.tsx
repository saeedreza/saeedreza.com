import { Metadata } from 'next';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const publishedDate = '2025-12-04';

export const metadata: Metadata = {
  title: 'Schleps All the Way Down',
  description: 'The best startup ideas are disguised as "that\'s just how it is."',
  openGraph: {
    title: 'Schleps All the Way Down - Saeedreza Abbaspour',
    description: 'The best startup ideas are disguised as "that\'s just how it is."',
    url: 'https://saeedreza.com/notes/schleps-all-the-way-down',
  },
};

export default function SchlepsAllTheWayDownPage() {
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
        <header className="mb-12">
          <h1 className="page-title mb-4">
            Schleps All the Way Down
          </h1>
          <p className="lead">
            The best startup ideas are disguised as &ldquo;that&apos;s just how it is.&rdquo;
          </p>
        </header>

        <div className="prose-article">
          <p>
            When people ask me how to find startup ideas, I usually tell them to look for problems. But that advice is almost useless, because it doesn&apos;t tell you which problems matter.
          </p>

          <p>
            Here&apos;s a better version: look for schleps.
          </p>

          <p>
            A schlep is anything annoying you have to do to get what you actually want. The word comes from Yiddish, and it has exactly the right connotation, something tedious, effortful, slightly undignified. Carrying heavy bags. Waiting in line. Filling out forms.
          </p>

          <p>
            The interesting thing about schleps is that we stop seeing them. They become part of the background. You don&apos;t think &ldquo;I have to schlep to the grocery store.&rdquo; You just go to the grocery store. The schlep is invisible.
          </p>

          <p>
            This is why schleps are such a good source of startup ideas. Everyone experiences them. No one notices them. If you can train yourself to see schleps, you&apos;ll see opportunities everywhere.
          </p>

          <hr />

          <p>
            I started thinking about this after talking to a founder who built a company around something so obvious I was embarrassed I hadn&apos;t thought of it. The idea was almost too simple to be a startup. But it was a real schlep, and it was huge.
          </p>

          <p>
            The pattern kept repeating. The best startup ideas often look like schleps someone finally decided to fix. Uber fixed the schlep of hailing a cab. Dropbox fixed the schlep of moving files between computers. Stripe fixed the schlep of accepting payments online.
          </p>

          <p>
            None of these were technically hard in a way that would impress a PhD. The hardness was in seeing the schlep clearly and deciding it was worth fixing.
          </p>

          <hr />

          <p>
            Why don&apos;t more people do this? I think there are two reasons.
          </p>

          <p>
            The first is <strong>schlep blindness</strong>. We&apos;ve adapted to our schleps so completely that we don&apos;t see them as problems anymore. They&apos;re just how things are. Fixing them doesn&apos;t occur to us because we&apos;ve never framed them as broken.
          </p>

          <p>
            The second is <strong>status</strong>. Schleps are, by definition, low-status work. They&apos;re the opposite of glamorous. If you tell people at a party that you&apos;re working on a way to help plumbers schedule appointments, their eyes will glaze over. If you tell them you&apos;re working on AI, they&apos;ll lean in.
          </p>

          <p>
            But the plumber scheduling company might be the better business. The schlep is real. The market is real. The problem is that founders are optimizing for impressiveness instead of usefulness.
          </p>

          <hr />

          <p>
            There&apos;s a framework I keep coming back to when I think about schleps. The question is: <em>what is the person really buying?</em>
          </p>

          <p>
            Take a flight from New York to LA. What are you buying? You&apos;re not buying a seat on a plane. You&apos;re buying five hours instead of five days. You&apos;re buying the ability to be somewhere else without the schlep of getting there yourself.
          </p>

          <p>
            This sounds obvious, but it&apos;s not. Most people, when they think about airlines, think about the plane, the service, the logistics. They don&apos;t think about what the customer is actually paying for, which is the elimination of a massive schlep.
          </p>

          <p>
            Once you see it this way, you start asking different questions. What other schleps are people paying to avoid? What schleps are they tolerating because no one&apos;s offered to fix them yet?
          </p>

          <hr />

          <p>
            The tricky thing is that not all schleps are worth fixing. Some are too small. Some are too entrenched. Some require more capital than you can raise or more time than you have.
          </p>

          <p>
            The schleps worth fixing usually share a few traits:
          </p>

          <p>
            <strong>1. They&apos;re frequent.</strong> A schlep you face once a year is annoying but tolerable. A schlep you face every day is a market.
          </p>

          <p>
            <strong>2. They&apos;re painful.</strong> Not all friction is equal. Waiting ten minutes for coffee is different from waiting three months for a visa. The more painful the schlep, the more people will pay to avoid it.
          </p>

          <p>
            <strong>3. They&apos;re newly fixable.</strong> This is the one most people miss. The best schleps to target are the ones that just became solvable,because of new technology, new regulations, or new behaviors. If a schlep has existed forever and no one&apos;s fixed it, ask why. There might be a good reason.
          </p>

          <hr />

          <p>
            The &ldquo;newly fixable&rdquo; part is important. I see a lot of founders who identify a real schlep but don&apos;t ask why it still exists.
          </p>

          <p>
            Usually, something has to change before a schlep becomes a startup opportunity. Uber needed smartphones with GPS. Airbnb needed a critical mass of people comfortable transacting with strangers online. Stripe needed the infrastructure of modern cloud computing.
          </p>

          <p>
            If you find a schlep that seems obvious, the question to ask is: <em>what changed?</em> If nothing changed, you&apos;re probably missing something. Either the schlep isn&apos;t as bad as you think, or there&apos;s a structural reason it can&apos;t be fixed, or someone tried and failed in a way you haven&apos;t discovered yet.
          </p>

          <p>
            But if something did change,and recently,you might be looking at a real opportunity. The schlep existed for years, but the solution only became possible last Tuesday. That&apos;s the sweet spot.
          </p>

          <hr />

          <p>
            I want to add one more thing, because I think it&apos;s important.
          </p>

          <p>
            Not every schlep-fixing company is a startup. Some are just businesses.
          </p>

          <p>
            There&apos;s nothing wrong with that. Businesses are great. But startups are a specific thing: companies designed to grow fast. And not every schlep supports fast growth.
          </p>

          <p>
            If you&apos;re fixing a schlep for plumbers in Des Moines, you might have a good business. But unless you can fix that schlep for every plumber everywhere, and do it through software that scales without proportional effort, it&apos;s probably not a startup.
          </p>

          <p>
            The schleps that make good startups are usually the ones that generalize. The ones where the same solution works for millions of people with minimal customization. The ones where technology creates leverage.
          </p>

          <p>
            This is why software schleps are so attractive. Fixing them once fixes them for everyone. The marginal cost of the next customer is close to zero.
          </p>

          <hr />

          <p>
            So here&apos;s the revised advice: look for schleps that are <strong>frequent</strong>, <strong>painful</strong>, <strong>newly fixable</strong>, and <strong>generalizable</strong>.
          </p>

          <p>
            That&apos;s a lot of filters. Most schleps won&apos;t pass all four. But the ones that do are gold.
          </p>

          <p>
            The hard part isn&apos;t the framework. The hard part is seeing the schleps in the first place. They&apos;re hidden in plain sight, disguised as &ldquo;just how things are.&rdquo;
          </p>

          <p>
            Train yourself to notice them. Pay attention to the moments in your day when you feel friction. When you&apos;re annoyed. When you&apos;re waiting. When you&apos;re doing something that feels like it should be easier.
          </p>

          <p>
            Those moments are data. Most people ignore them. Founders collect them.
          </p>

          <hr />

          <p>
            One exercise that might help: at the end of each day, write down three schleps you encountered. Not startup ideas,just schleps. Things that were annoying or inefficient or harder than they needed to be.
          </p>

          <p>
            Do this for a month. You&apos;ll end up with a list of ninety schleps. Most of them will be trivial or unfixable. But a few might be interesting. And you&apos;ll have trained yourself to see what you were previously blind to.
          </p>

          <p>
            That&apos;s worth more than any framework. Frameworks are easy to copy. Seeing clearly is not.
          </p>

          <hr />

          <p>
            I&apos;ll end with a warning.
          </p>

          <p>
            The biggest schleps are often the ones we&apos;re most blind to. They&apos;re so embedded in our routines that we&apos;ve forgotten they&apos;re there. We&apos;ve built our lives around them. Questioning them feels almost absurd.
          </p>

          <p>
            But those are exactly the ones worth questioning. The schleps that everyone tolerates because &ldquo;that&apos;s just how it is&rdquo;,those are the ones hiding the biggest opportunities.
          </p>

          <p>
            The trick is to look at your own life like a visitor from another planet. Why do these humans do it this way? Is there a reason? Or is it just inertia?
          </p>

          <p>
            Usually, it&apos;s inertia. And inertia is a schlep waiting to be fixed.
          </p>
        </div>
      </article>
    </div>
  );
}
