'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SchlepsAllTheWayDownPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap');
        
        .article-body {
          font-family: 'Crimson Text', Georgia, serif;
        }
        
        .sans-font {
          font-family: 'Inter', -apple-system, sans-serif;
        }
        
        .drop-cap::first-letter {
          float: left;
          font-size: 5rem;
          line-height: 4rem;
          padding-right: 0.5rem;
          margin-top: 0.5rem;
          font-weight: 600;
          font-family: 'Crimson Text', Georgia, serif;
        }
        
        @media (max-width: 640px) {
          .drop-cap::first-letter {
            font-size: 4rem;
            line-height: 3rem;
          }
        }
      `}</style>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-black transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="max-w-4xl mx-auto px-6 py-6 sans-font">
          <div className="flex justify-between items-center">
            <Link
              href="/notes"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              ← Back to notes
            </Link>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Essay</span>
          </div>
        </nav>

        <article className="max-w-prose mx-auto px-6 pb-24">
          {/* Hero Section */}
          <header className="mb-16 pt-8">
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold leading-[0.9] text-gray-900 mb-8 sans-font text-center tracking-tight">
              Schleps All the Way Down
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 sans-font mb-8">
              <time dateTime="2025-12-26">December 26, 2025</time>
              <span className="text-gray-400">•</span>
              <span>8 min read</span>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed sans-font font-light text-center">
              The best startup ideas often look like schleps someone finally decided to fix. Here's how to train yourself to see what everyone else is blind to.
            </p>
          </header>

          {/* Article Content */}
          <div className="article-body">
            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6 drop-cap">
                When people ask me how to find startup ideas, I usually tell them to look for problems. But that advice is almost useless, because it doesn't tell you which problems matter.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                Here's a better version: look for schleps.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                A schlep is anything annoying you have to do to get what you actually want. The word comes from Yiddish, and it has exactly the right connotation—something tedious, effortful, slightly undignified. Carrying heavy bags. Waiting in line. Filling out forms.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                The interesting thing about schleps is that we stop seeing them. They become part of the background. You don't think "I have to schlep to the grocery store." You just go to the grocery store. The schlep is invisible.
              </p>

              <p className="text-xl leading-relaxed text-gray-800">
                This is why schleps are such a good source of startup ideas. Everyone experiences them. No one notices them. If you can train yourself to see schleps, you'll see opportunities everywhere.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                I started thinking about this after talking to a founder who built a company around something so obvious I was embarrassed I hadn't thought of it. The idea was almost too simple to be a startup. But it was a real schlep, and it was huge.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                The pattern kept repeating. The best startup ideas often look like schleps someone finally decided to fix. Uber fixed the schlep of hailing a cab. Dropbox fixed the schlep of moving files between computers. Stripe fixed the schlep of accepting payments online.
              </p>

              <p className="text-xl leading-relaxed text-gray-800">
                None of these were technically hard in a way that would impress a PhD. The hardness was in seeing the schlep clearly and deciding it was worth fixing.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                Why don't more people do this? I think there are two reasons.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                The first is <strong>schlep blindness</strong>. We've adapted to our schleps so completely that we don't see them as problems anymore. They're just how things are. Fixing them doesn't occur to us because we've never framed them as broken.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                The second is <strong>status</strong>. Schleps are, by definition, low-status work. They're the opposite of glamorous. If you tell people at a party that you're working on a way to help plumbers schedule appointments, their eyes will glaze over. If you tell them you're working on AI, they'll lean in.
              </p>

              <p className="text-xl leading-relaxed text-gray-800">
                But the plumber scheduling company might be the better business. The schlep is real. The market is real. The problem is that founders are optimizing for impressiveness instead of usefulness.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                There's a framework I keep coming back to when I think about schleps. The question is: <em>what is the person really buying?</em>
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                Take a flight from New York to LA. What are you buying? You're not buying a seat on a plane. You're buying five hours instead of five days. You're buying the ability to be somewhere else without the schlep of getting there yourself.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                This sounds obvious, but it's not. Most people, when they think about airlines, think about the plane, the service, the logistics. They don't think about what the customer is actually paying for, which is the elimination of a massive schlep.
              </p>

              <p className="text-xl leading-relaxed text-gray-800">
                Once you see it this way, you start asking different questions. What other schleps are people paying to avoid? What schleps are they tolerating because no one's offered to fix them yet?
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                The tricky thing is that not all schleps are worth fixing. Some are too small. Some are too entrenched. Some require more capital than you can raise or more time than you have.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                The schleps worth fixing usually share a few traits:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold mb-2 sans-font">1. They're frequent.</h4>
                  <p className="text-gray-700">A schlep you face once a year is annoying but tolerable. A schlep you face every day is a market.</p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold mb-2 sans-font">2. They're painful.</h4>
                  <p className="text-gray-700">Not all friction is equal. Waiting ten minutes for coffee is different from waiting three months for a visa. The more painful the schlep, the more people will pay to avoid it.</p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold mb-2 sans-font">3. They're newly fixable.</h4>
                  <p className="text-gray-700">This is the one most people miss. The best schleps to target are the ones that just became solvable—because of new technology, new regulations, or new behaviors. If a schlep has existed forever and no one's fixed it, ask why. There might be a good reason.</p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                The "newly fixable" part is important. I see a lot of founders who identify a real schlep but don't ask why it still exists.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                Usually, something has to change before a schlep becomes a startup opportunity. Uber needed smartphones with GPS. Airbnb needed a critical mass of people comfortable transacting with strangers online. Stripe needed the infrastructure of modern cloud computing.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                If you find a schlep that seems obvious, the question to ask is: <em>what changed?</em> If nothing changed, you're probably missing something. Either the schlep isn't as bad as you think, or there's a structural reason it can't be fixed, or someone tried and failed in a way you haven't discovered yet.
              </p>

              <p className="text-xl leading-relaxed text-gray-800">
                But if something did change—and recently—you might be looking at a real opportunity. The schlep existed for years, but the solution only became possible last Tuesday. That's the sweet spot.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                I want to add one more thing, because I think it's important.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                Not every schlep-fixing company is a startup. Some are just businesses.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                There's nothing wrong with that. Businesses are great. But startups are a specific thing: companies designed to grow fast. And not every schlep supports fast growth.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                If you're fixing a schlep for plumbers in Des Moines, you might have a good business. But unless you can fix that schlep for every plumber everywhere, and do it through software that scales without proportional effort, it's probably not a startup.
              </p>

              <p className="text-xl leading-relaxed text-gray-800">
                The schleps that make good startups are usually the ones that generalize. The ones where the same solution works for millions of people with minimal customization. The ones where technology creates leverage.
              </p>
            </section>

            <div className="my-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-xl leading-relaxed text-gray-800 font-medium">
                This is why software schleps are so attractive. Fixing them once fixes them for everyone. The marginal cost of the next customer is close to zero.
              </p>
            </div>

            <hr className="my-12 border-gray-300" />

            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                So here's the revised advice: look for schleps that are <strong>frequent</strong>, <strong>painful</strong>, <strong>newly fixable</strong>, and <strong>generalizable</strong>.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                That's a lot of filters. Most schleps won't pass all four. But the ones that do are gold.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                The hard part isn't the framework. The hard part is seeing the schleps in the first place. They're hidden in plain sight, disguised as "just how things are."
              </p>

              <p className="text-xl leading-relaxed text-gray-800">
                Train yourself to notice them. Pay attention to the moments in your day when you feel friction. When you're annoyed. When you're waiting. When you're doing something that feels like it should be easier.
              </p>
            </section>

            <div className="my-12 p-6 bg-gray-900 text-white rounded-lg">
              <p className="text-xl leading-relaxed font-medium">
                Those moments are data. Most people ignore them. Founders collect them.
              </p>
            </div>

            <hr className="my-12 border-gray-300" />

            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                One exercise that might help: at the end of each day, write down three schleps you encountered. Not startup ideas—just schleps. Things that were annoying or inefficient or harder than they needed to be.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                Do this for a month. You'll end up with a list of ninety schleps. Most of them will be trivial or unfixable. But a few might be interesting. And you'll have trained yourself to see what you were previously blind to.
              </p>

              <p className="text-xl leading-relaxed text-gray-800">
                That's worth more than any framework. Frameworks are easy to copy. Seeing clearly is not.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                I'll end with a warning.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                The biggest schleps are often the ones we're most blind to. They're so embedded in our routines that we've forgotten they're there. We've built our lives around them. Questioning them feels almost absurd.
              </p>

              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                But those are exactly the ones worth questioning. The schleps that everyone tolerates because "that's just how it is"—those are the ones hiding the biggest opportunities.
              </p>

              <p className="text-xl leading-relaxed text-gray-800">
                The trick is to look at your own life like a visitor from another planet. Why do these humans do it this way? Is there a reason? Or is it just inertia?
              </p>
            </section>

            <div className="my-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-xl leading-relaxed text-gray-800 font-medium italic">
                Usually, it's inertia. And inertia is a schlep waiting to be fixed.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

