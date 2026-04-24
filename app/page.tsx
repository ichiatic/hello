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
    </main>
  );
}