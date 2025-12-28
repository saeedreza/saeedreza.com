import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Seniority Actually Is',
  description: 'Seniority is knowing what to ignore.',
  openGraph: {
    title: 'What Seniority Actually Is - Saeedreza Abbaspour',
    description: 'Seniority is knowing what to ignore.',
    url: 'https://saeedreza.com/notes/what-seniority-actually-is',
  },
};

export default function WhatSeniorityActuallyIsPage() {
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
            What Seniority Actually Is
          </h1>
          <p className="lead">
            Seniority is knowing what to ignore.
          </p>
        </header>

        <div className="prose-article">
          <p>
            The word &ldquo;senior&rdquo; is misleading. It implies that seniority is about time, that you become senior by lasting long enough. But that&apos;s not quite right. Plenty of people work for twenty years and never become senior in any meaningful sense. And occasionally you meet someone who&apos;s senior after three.
          </p>

          <p>
            So what is seniority, if not tenure?
          </p>

          <p>
            I think it&apos;s about what you&apos;ve learned to pay attention to.
          </p>

          <p>
            A junior engineer pays attention to the code. Is it clean? Does it work? Does it follow best practices? These are reasonable things to care about. They&apos;re what you&apos;re taught to care about.
          </p>

          <p>
            A senior engineer pays attention to something upstream: Is this the right problem? They&apos;ve learned, usually through painful experience, that correct solutions to incorrect problems are worthless. Worse than worthless, they&apos;re expensive. They consume time and resources and create the illusion of progress.
          </p>

          <p>
            This seems obvious when stated plainly. And yet the mistake is incredibly common. I&apos;ve seen it dozens of times at YC. A team will work for months on something, get it working beautifully, and only then discover that nobody wants it. The code was fine. The problem selection was wrong.
          </p>

          <p>
            Why does this happen? Because problem selection is hard to see. Code is tangible. You can review it, test it, measure it. But whether you&apos;re solving the right problem, that&apos;s fuzzy. It requires thinking about users, about the market, about what might change. Junior people avoid this fuzziness. They retreat to what&apos;s measurable.
          </p>

          <p>
            Senior people have learned to sit in the fuzziness.
          </p>

          <hr />

          <p>
            There&apos;s a related difference in how juniors and seniors handle uncertainty.
          </p>

          <p>
            When a junior doesn&apos;t know something, they feel pressure to hide it. Uncertainty feels like weakness. Like an admission that they don&apos;t belong. So they either pretend to know, or they scramble to find the answer as fast as possible, often before they&apos;ve even understood the question.
          </p>

          <p>
            Seniors are more comfortable saying &ldquo;I don&apos;t know.&rdquo; In fact, the most senior people I know say it constantly. They&apos;ve learned that pretending to know things you don&apos;t is far more dangerous than admitting ignorance. Pretending leads to bad decisions. Admitting ignorance leads to better questions.
          </p>

          <p>
            This is counterintuitive. You&apos;d think confidence would increase with seniority. In some ways it does. But the confidence isn&apos;t about having answers. It&apos;s about being okay without them.
          </p>

          <hr />

          <p>
            The third thing seniority changes is time horizon.
          </p>

          <p>
            Juniors optimize locally. They want to ship this feature, fix this bug, get through this week. There&apos;s nothing wrong with that, it&apos;s how you learn. You have to work on small things before you can see the big picture.
          </p>

          <p>
            But seniors have been around long enough to see how decisions compound. They&apos;ve lived through the moment, six months later, when some quick fix turns into a nightmare. When some shortcut becomes load-bearing. When some &ldquo;temporary&rdquo; solution is still there five years on.
          </p>

          <p>
            So they ask different questions. Not &ldquo;what&apos;s the fastest way to do this?&rdquo; but &ldquo;what will this look like in a year?&rdquo; Not &ldquo;does this work?&rdquo; but &ldquo;will this keep working?&rdquo;
          </p>

          <p>
            This makes seniors seem slower. And in the short term, they are. But they&apos;re playing a different game. They&apos;re not optimizing for this week. They&apos;re optimizing for the next five years.
          </p>

          <hr />

          <p>
            The cynical explanation for seniority is that it&apos;s just survival bias. The people who didn&apos;t learn these lessons got fired, or burned out, or switched careers. The ones who remain are the ones who figured it out.
          </p>

          <p>
            There&apos;s some truth to that. But I don&apos;t think it&apos;s the whole story. I think there&apos;s something that actually changes in how you see.
          </p>

          <p>
            When you&apos;re new, everything is figure and no ground. Every problem seems urgent. Every decision seems important. You can&apos;t tell what matters.
          </p>

          <p>
            With experience, the ground fills in. You start to see patterns. You recognize which problems are real and which will solve themselves. You learn that most urgent things aren&apos;t important, and most important things don&apos;t feel urgent.
          </p>

          <p>
            This is why seniority is hard to teach. You can&apos;t transfer pattern recognition through explanation. You have to live through enough situations that your brain starts to see the patterns automatically.
          </p>

          <hr />

          <p>
            The best definition of seniority I&apos;ve found is this: a senior person knows what to ignore.
          </p>

          <p>
            That sounds dismissive, but it&apos;s not. Knowing what to ignore is incredibly hard. It requires understanding what matters, which requires understanding the whole system, which requires years of experience making mistakes.
          </p>

          <p>
            Juniors try to do everything well. Seniors know that&apos;s impossible. They&apos;ve learned to be strategic about where they spend their attention. To deliberately do some things badly so they can do the important things well.
          </p>

          <p>
            This too feels wrong at first. Shouldn&apos;t you try to do everything well? That&apos;s certainly what you&apos;re taught. But trying to do everything well is a form of cowardice. It&apos;s avoiding the hard problem of deciding what actually matters.
          </p>

          <p>
            The most senior people I know are ruthless about this. They&apos;ll let whole categories of things be mediocre so they can focus on what counts. It looks like laziness if you don&apos;t understand it. But it&apos;s the opposite. It&apos;s the result of thinking very hard about priorities.
          </p>

          <hr />

          <p>
            So how do you become senior faster?
          </p>

          <p>
            Mostly by paying attention when things go wrong. The lessons of seniority are written in failures. When a project fails, don&apos;t just move on. Ask why. Was it the wrong problem? The wrong approach? Did you miss something you should have seen?
          </p>

          <p>
            This is uncomfortable. Most people want to forget failures as quickly as possible. But failures are data. They&apos;re the expensive kind of data, the kind you&apos;ve already paid for. Not analyzing them means paying for something and not using it.
          </p>

          <p>
            The other thing that helps is working with people who are more senior than you. Not just being in the same organization, but actually working closely with them. Watching how they make decisions. Noticing what they pay attention to. Their pattern recognition is contagious, if you&apos;re paying attention.
          </p>

          <p>
            But ultimately there&apos;s no shortcut. Seniority is what you&apos;re left with after you&apos;ve made enough mistakes. The only way to accelerate it is to make mistakes faster, which, in practice, means taking on harder problems sooner than feels comfortable.
          </p>

          <p>
            That&apos;s scary. But the alternative is getting old without getting senior. And that&apos;s worse.
          </p>
        </div>
      </article>
    </div>
  );
}
