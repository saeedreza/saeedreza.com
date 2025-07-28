export default function Home() {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hello World!</h2>
        <p className="mb-4">My name is Saeedreza and I am an internet entrepreneur and product engineer/designer, currently running <a href="https://refact.co" className="text-blue-600 hover:underline" target="_blank">Refact</a>, a software development agency that builds scalable software products for tech and media companies.</p> 
        <p>In my spare time, I am building fun <a href="/projects" className="text-blue-600 hover:underline">projects</a>.</p>
      </section>
      
      <section className="mb-12">
        <h3 className="font-semibold mb-4">Personal Life</h3>
        <ul className="custom-list space-y-2">
          <li>I am based in Los Angeles.</li>
          <li>I moved to the US from Iran in 2009 and hold BS and MS degrees in Chemical Engineering.</li>
          <li>I played poker for living for a couple of years after graduation.</li>
          <li>I&apos;m fascinated by the latest discoveries in science and technology and the nature of human consciousness.</li>
        </ul>  
      </section>
    
      <section className="mb-12">
        <h3 className="font-semibold mb-4">Work Stuff</h3>
        <ul className="custom-list space-y-2">
          <li>Co-founded a peer-to-peer grocery delivery startup called Deliveer. We raised a small angel round, launched our app for Pasadena residents, and operated for about a year.</li>
          <li>I&apos;m a self-taught web developer and product manager and have consulted companies like Bebe, MGA Entertainment, the Getty Museum, and Warner Bros.</li>
          <li>Bootstrapped a dev agency (initially called <em>Mark It Done</em>, later changed to <a href="https://refact.co" className="text-blue-600 hover:underline" target="_blank">Refact</a>), generating over $3m in revenue with a team of 30 employees at our peak.</li>
          <li>I co-own <a href="https://fioredesigns.com/" className="text-blue-600 hover:underline" target="_blank">Fiore Designs</a>, a flower design studio in Culver City .</li>
        </ul>
      </section>
        
      <section>
        <h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
        <p>For collaboration on a project or chat, click <a href="https://cal.saeedreza.com/" className="text-blue-600 hover:underline">here</a> to schedule a meeting.</p>
        <p>You can also find me on <a href="https://www.linkedin.com/in/saeedreza/" className="text-blue-600 hover:underline">LinkedIn</a> and <a href="https://x.com/IAmSaeedreza" className="text-blue-600 hover:underline">X</a>.</p>
      </section>
    </div>
  );
}
