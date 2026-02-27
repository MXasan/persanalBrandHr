import { FileText, Users, Mic, Lightbulb, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Submit a Job Application',
      description: 'Find your next role at a top tech company. I partner with high-growth startups looking for talent like you.',
      icon: FileText,
      cta: 'Apply now',
      link: '#',
    },
    {
      title: 'Hire Through Me',
      description: 'Looking for top-tier engineering talent? Let me help you build your dream team with vetted candidates.',
      icon: Users,
      cta: 'Start hiring',
      link: '#',
    },
    {
      title: 'Book Me as a Speaker',
      description: 'Inspire your audience with talks on productivity, career growth, and the future of work.',
      icon: Mic,
      cta: 'Book a talk',
      link: '#',
    },
    {
      title: 'Coaching Inquiry',
      description: 'One-on-one guidance to accelerate your career, overcome blockers, and achieve your goals.',
      icon: Lightbulb,
      cta: 'Get coached',
      link: '#',
    },
  ];

  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sage-600">Work with me</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            How I can help you succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Whether you're looking for a job, hiring talent, or seeking personal growth, I'm here to support your journey.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col rounded-2xl bg-stone-50 p-8 ring-1 ring-stone-900/10 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sage-500">
                  <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col">
                  <dt className="text-xl font-semibold leading-7 text-stone-900">
                    {service.title}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-stone-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <a href={service.link} className="text-sm font-semibold leading-6 text-sage-600 hover:text-sage-500 flex items-center gap-1 group">
                        {service.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </p>
                  </dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
