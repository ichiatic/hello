export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6">
        {/* Placeholder background — will be replaced with a real gym photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-zinc-950 to-black" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            More than a gym.
          </h1>
          <p className="mt-8 text-lg text-zinc-300 sm:text-xl md:text-2xl">
            Sauna. Pool. Basketball. Pickleball. Turf.
            <br className="hidden sm:block" />
            60+ classes a week. Open 24/7.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#memberships" className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-500">
              See Memberships
            </a>
            <a href="#visit" className="inline-block rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10">
              Visit Us
            </a>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Everything under one roof.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            No commute to the pool. No separate membership for classes. It&apos;s all here.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {[
              { name: "Pool", detail: "Lap swim & leisure" },
              { name: "Basketball", detail: "Full court" },
              { name: "Pickleball", detail: "Dedicated courts" },
              { name: "Turf", detail: "Sled, sprints, functional" },
              { name: "Sauna", detail: "Dry heat recovery" },
              { name: "Steam Room", detail: "Wet heat recovery" },
              { name: "Hot Tub", detail: "Post-workout soak" },
              { name: "24/7 Access", detail: "Your schedule, not ours" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-white/10 bg-zinc-900/50 p-6 transition-colors hover:border-blue-500/50 hover:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section id="memberships" className="bg-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Simple pricing. No contracts.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            Every plan includes full access to the pool, courts, turf, sauna, and 60+ weekly classes.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {/* Student */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-8">
              <h3 className="text-xl font-semibold">Student</h3>
              <p className="mt-2 text-sm text-zinc-400">Ages 13-22, valid ID required</p>
              <div className="mt-6">
                <span className="text-5xl font-bold">$29.99</span>
                <span className="text-zinc-400">/mo</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                <li>• 24/7 gym access</li>
                <li>• All amenities included</li>
                <li>• Unlimited group classes</li>
                <li>• No contract, cancel anytime</li>
              </ul>
            </div>

            {/* Featured: Adult */}
            <div className="relative rounded-2xl border-2 border-blue-500 bg-zinc-950 p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold">Adult</h3>
              <p className="mt-2 text-sm text-zinc-400">Full single membership</p>
              <div className="mt-6">
                <span className="text-5xl font-bold">$45.99</span>
                <span className="text-zinc-400">/mo</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                <li>• 24/7 gym access</li>
                <li>• All amenities included</li>
                <li>• Unlimited group classes</li>
                <li>• Guest passes included</li>
                <li>• No contract, cancel anytime</li>
              </ul>
            </div>

            {/* Family */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-8">
              <h3 className="text-xl font-semibold">Family</h3>
              <p className="mt-2 text-sm text-zinc-400">2 adults + up to 4 kids</p>
              <div className="mt-6">
                <span className="text-5xl font-bold">$79.99</span>
                <span className="text-zinc-400">/mo</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                <li>• 24/7 gym access for all</li>
                <li>• Kids programs included</li>
                <li>• All amenities + classes</li>
                <li>• No contract, cancel anytime</li>
              </ul>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-zinc-500">
            No sign-up fees. No commitments. Cancel anytime with 30 days notice.
          </p>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Left: copy */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Come see it for yourself.
              </h2>
              <p className="mt-6 text-lg text-zinc-300">
                Walk the floor. Jump in the pool. Test a class. You won&apos;t know if it&apos;s right for you until you&apos;re in the building.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Address
                  </h3>
                  <p className="mt-2 text-zinc-300">
                  4190 White Sage Arc, Las Cruces, NM 88011<br />
                    Las Cruces, NM 88011
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Hours
                  </h3>
                  <p className="mt-2 text-zinc-300">
                    Open 24/7 for members<br />
                    Front desk: Mon-Fri 5am-12pm, Sat-Sun 6am-8pm
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Phone
                  </h3>
                  <p className="mt-2 text-zinc-300">(575) 524-2447</p>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  Book a Free Tour
                </a>
              </div>
            </div>

            {/* Right: map placeholder */}
            <div className="aspect-square rounded-2xl border border-white/10 bg-zinc-900 flex items-center justify-center">
              <p className="text-sm text-zinc-500">Map embed coming</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}