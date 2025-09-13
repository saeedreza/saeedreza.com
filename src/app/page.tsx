export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-6">Hello World!</h2>
        
        <div className="mb-4">
          <p className="mb-4">
            Hi, I’m Saeedreza (pronounced Sa-eed Re-za). I’m a software product designer and developer transitioning into AI engineering. Right now, I’m building <a href="https://workform.ai" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">workform.ai</a>, a project focused on AI agents and rethinking how teams collaborate and communicate in AI era.
          </p>
          
          <p className="mb-4">
            I also run <a href="https://refact.io" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Refact</a>, a software development agency that builds scalable software products for tech and media companies.
          </p>

          <p className="mb-4">
            List of the active <a href="/projects" className="text-blue-600 hover:text-blue-800 underline">projects</a> I work on in my spare time.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="font-semibold mb-4">Let's Connect</h2>
          <p className="mb-4">
            To hire me for a project, click <a href="/link" className="text-blue-600 hover:text-blue-800 underline">here</a> to schedule a meeting.
          </p>
          <p className="mb-4">
            You can also find me on <a href="https://linkedin.com/in/saeedreza" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://x.com/saeedreza" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">X</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
