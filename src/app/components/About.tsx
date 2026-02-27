import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const stats = [
    { label: 'Companies Hired For', value: '50+' },
    { label: 'Talent Placed', value: '500+' },
    { label: 'Talks Given', value: '20+' },
    { label: 'Years Experience', value: '12+' },
  ];

  return (
    <section id="about" className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-sage-600">About Me</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Senior Technology Talent Partner & Entrepreneur
              </p>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                I wear many hats, but my core mission is simple: helping people and companies grow.
              </p>
              <div className="mt-6 space-y-6 text-base leading-7 text-stone-600">
                <p>
                  As a <strong>Senior Technology Talent Partner</strong>, I've helped build engineering teams for some of the world's fastest-growing startups. I understand what makes a great career match.
                </p>
                <p>
                  As an <strong>Entrepreneur & Productivity Expert</strong>, I'm obsessed with systems that help us work smarter, not harder. I share these insights through my writing and coaching.
                </p>
                <p>
                  I'm also a speaker and growth coach, dedicated to empowering the next generation of tech leaders.
                </p>
              </div>
              
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-stone-900/10 pt-10 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-sm font-semibold leading-6 text-stone-600">{stat.label}</dt>
                    <dd className="mt-2 text-3xl font-bold tracking-tight text-stone-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-xl ring-1 ring-stone-900/10 lg:aspect-auto lg:h-full">
               <ImageWithFallback
                 src="https://images.unsplash.com/photo-1758691736872-61a1f75fe2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb2xsYWJvcmF0aXZlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMDE5NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                 alt="Working with team"
                 className="h-full w-full object-cover object-center"
               />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
