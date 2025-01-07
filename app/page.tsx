import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CircleDollarSign } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Top Banner */}
      <div className="bg-blue-600 py-2 text-center text-sm text-white">
        <span>Special January Sale for </span>
        <span className="font-semibold">Italy</span>
        <span>: Use code </span>
        <span className="font-mono font-semibold">LM2</span>
        <span> for an extra </span>
        <span className="font-semibold">15% OFF</span>
        <span> at checkout.</span>
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-4xl px-4 pt-16 text-center">
        {/* Author Section */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
            alt="Jake Seid" 
            className="h-12 w-12 rounded-full"
          />
          <div className="text-left">
            <div className="flex items-center gap-1">
              <span className="font-semibold">Jake Seid</span>
              <svg className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
            <p className="text-sm text-gray-400">Conversion designer</p>
          </div>
        </div>

        {/* Product Badge */}
        <div className="mb-8 flex justify-center">
          <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-1 text-white">
            <CircleDollarSign className="mr-1 h-4 w-4" />
            #1 Product of the Day
          </Badge>
        </div>

        {/* Hero Content */}
        <h1 className="mb-6 text-5xl font-bold leading-tight">
          How much money are you leaving<br />on the table right now?
        </h1>
        <p className="mb-8 text-lg text-gray-400">
          Own a 6-7 figure online store? Get the most comprehensive conversion-<br />
          focused E-commerce Checklist that will <span className="text-yellow-400">skyrocket your sales</span>.
        </p>

        {/* CTA Button */}
        <Button size="lg" className="bg-yellow-400 px-8 py-6 text-lg font-semibold text-black hover:bg-yellow-500">
          Get E-commerce Checklist Now!
        </Button>

        {/* Guarantee Text */}
        <p className="mt-4 text-sm text-gray-400">
          <span className="mr-2">🔒</span>
          14-Day Results-Driven Money-Back Guarantee
        </p>

        {/* Social Proof */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="font-handwriting text-2xl text-yellow-400">See it in action</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">17,643</span>
            <div className="flex text-yellow-400">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
          </div>
          <div className="flex -space-x-2">
            {[...Array(8)].map((_, i) => (
              <img
                key={i}
                className="h-8 w-8 rounded-full border-2 border-[#0D0D0D]"
                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                alt={`User ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Screenshot */}
        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
            alt="E-commerce Checklist Preview"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Checklist Value Proposition Section */}
      <div className="mx-auto max-w-[1000px] px-4 py-24">
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold">
            You can drill down your online store and find<br />
            out where exactly you're <span className="bg-[#0066FF] px-2 py-1">leaving (heaps of)</span><br />
            money on the table.
          </h2>

          <p className="mb-8 text-lg text-gray-400">
            With my E-commerce Conversion checklist you can look at over <span className="text-white font-semibold">300<br />
            critical checkpoints</span> and cover every single nook-and-cranny of your<br />
            store's conversion process.
          </p>

          <p className="text-lg">
            The checklist will show you all the <span className="font-semibold">quick-wins</span> you can implement<br />
            right now to significantly <span className="text-[#FFD700]">increase your average order value</span> and<br />
            <span className="text-[#FFD700]">maximize sales</span>.
          </p>

          {/* Quick Wins Grid */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="relative aspect-square rounded-lg bg-white/5 p-6">
              <div className="absolute inset-4 rounded-full border-4 border-[#FFD700] flex items-center justify-center">
                <span className="text-lg font-bold uppercase">Quick-wins</span>
              </div>
            </div>
            <div className="aspect-square rounded-lg bg-white/5"></div>
            <div className="aspect-square rounded-lg bg-white/5"></div>
            <div className="aspect-square rounded-lg bg-white/5"></div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 rounded-xl bg-[#FFF9E5] p-8 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-[#FFD700]">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-black/60 text-sm">@wilhemRae · May 5, 2024 via Facebook</span>
            </div>
            <p className="text-black text-lg">
              I've seen my fair share of checklists during the years, this one takes the cake. <span className="font-semibold">Looks super comprehensive and it's ACTIONABLE</span>. Superb job @jakeseimd
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Wilhelm Rae"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-black">Wilhelm Rae</span>
                  <svg className="h-4 w-4 text-[#1D9BF0]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <p className="text-sm text-black/60">Product manager/Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Biggest Mistakes Section */}
      <div className="mx-auto max-w-4xl px-4 py-24 text-center">
        {/* Emoji Header */}
        <div className="mb-8">
          <span className="inline-block text-6xl">😱</span>
        </div>

        {/* Section Title */}
        <h2 className="mb-8 text-4xl font-bold">
          The <span className="text-red-500">3 biggest mistakes</span> most online<br />
          stores make
        </h2>

        {/* Introduction Text */}
        <div className="mb-12 space-y-4 text-lg text-gray-400">
          <p>
            Working as a conversion designer for the past 15 years, I've learned<br />
            that most conversion-killing mistakes boil down to the basics.
          </p>
          
          <p>
            If your store lacks clarity, doesn't convey the necessary trust and<br />
            overwhelms your visitors with unnecessary details ... then it's not<br />
            going to reach its full potential in terms of sales and profits.
          </p>

          <p>Far from it, in fact.</p>

          <p>
            After reviewing dozens of online stores I've noticed that almost ALL<br />
            of them are making the same 3 conversion-killing mistakes.
          </p>
        </div>

        {/* Mistakes List */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl">
            Here's where most stores <span className="text-red-500">go wrong:</span>
          </h3>

          <div className="space-y-4 text-left">
            {[
              "They make their checkout process needlessly complicated and confusing",
              "Their product pages don't include all of the crucial, must-have sales elements",
              "They don't offer a great and effortless mobile shopping experience"
            ].map((mistake, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                </div>
                <p className="text-lg">{mistake}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <p className="mb-16 text-lg">
          These things matter — because they are actively preventing you<br />
          from truly scaling your business.
        </p>

        {/* Call to Action Card */}
        <div className="rounded-2xl bg-white p-12 text-black">
          <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">ASK YOURSELF</p>
          <h3 className="mb-6 text-3xl font-bold">
            How much faster would you be able to<br />
            grow if your <span className="text-blue-600">conversion rates doubled</span>?
          </h3>
          
          <p className="mb-8 text-lg text-gray-600">
            You could be just three easy steps away from reaching another 100... 200...<br />
            1000 sales per day.
          </p>
          
          <p className="mb-8 text-lg text-gray-600">
            All you need to do is click the button below and buy the most comprehensive<br />
            conversion-focused e-commerce checklist on the planet!
          </p>

          <Button size="lg" className="bg-yellow-400 px-8 py-6 text-lg font-semibold text-black hover:bg-yellow-500">
            Get the E-commerce Checklist now!
          </Button>

          {/* Social Proof */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-2xl font-bold">17,643</span>
            <div className="flex text-yellow-400">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <div className="flex -space-x-2">
              {[...Array(8)].map((_, i) => (
                <img
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src={`https://i.pravatar.cc/150?img=${i + 1}`}
                  alt={`User ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}