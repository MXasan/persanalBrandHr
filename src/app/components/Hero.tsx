import { ArrowRight, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="max-w-2xl lg:max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Hi, I'm Alex Chen.
          </h1>
          <p className="mt-6 text-xl leading-8 text-stone-600">
            Helping people find great tech careers & build meaningful work.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work-with-me"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 transition-all duration-200"
            >
              Work with me
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#posts"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-stone-900 ring-1 ring-inset ring-stone-200 hover:bg-stone-50 transition-all duration-200"
            >
              <BookOpen className="mr-2 h-4 w-4 text-sage-500" />
              Read my posts
            </a>
          </div>
          
          <div className="mt-10 border-t border-stone-200 pt-8">
            <p className="text-sm font-medium text-stone-500">Trusted by teams at</p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4 opacity-60 grayscale filter">
              {/* Simple text logos for demo */}
              <span className="text-lg font-bold text-stone-400">Spotify</span>
              <span className="text-lg font-bold text-stone-400">Shopify</span>
              <span className="text-lg font-bold text-stone-400">Linear</span>
              <span className="text-lg font-bold text-stone-400">Notion</span>
            </div>
          </div>
        </div>
        
        <div className="relative lg:col-start-2 lg:row-start-1">
          <div className="relative mx-auto w-full max-w-[400px] lg:max-w-none">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-xl ring-1 ring-stone-900/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664101606938-e664f5852fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwd2FybSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjAxOTU4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alex Chen Portrait"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-sage-100 lg:-bottom-8 lg:-left-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
