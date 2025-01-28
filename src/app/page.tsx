import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Links to numerous online platforms, enable you to schedule, book, and get things done easily.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="flex flex-col items-center text-center pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <div className="max-w-3xl">
            <h1 className="font-display text-balance text-4xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-6xl/[0.8] md:text-5xl/[0.8]">
              Embedded Product Integrations
            </h1>
            <p className="mt-8 text-lg/7 font-medium text-gray-400/90 sm:text-xl/8 mx-auto">
              Bookabl helps teams ship product integrations in hours, not weeks. Read and write data using unified APIs or sync it straight to your database privately.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row justify-center">
              <Button href="/contact?plan=demo" className="px-8 py-4 text-lg">
                Get Started
              </Button>
              {/* <Button variant="secondary" href="/pricing" className="px-8 py-4 text-lg">
                See pricing
              </Button> */}
            </div>
          </div>
          <div className="mt-16 relative flex flex-col items-center justify-center w-full">
            <img 
              src="/integration-board.jpg" 
              alt="Booking Platform Preview"
              className="rounded-lg object-cover w-full max-w-[1000px] h-auto bg-transparent"
              style={{
                background: 'transparent',
                mixBlendMode: 'multiply'
              }}
            />
            
            {/* Integration Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                'AI agents',
                'Booking Platforms',
                'Booking Channels',
                'Premium Banking Services',
              ].map((item) => (
                <div
                  key={item}
                  className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-gray-800 font-medium border border-gray-200 hover:bg-white/20 transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function APIFeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Subheading>Effortless Sync Pipeline Orchestration
</Subheading>
            <Heading as="h2" className="max-w-3xl">
              A fully integrated suite of restaurant tech stack solutions
            </Heading>
            <p className="mt-8 max-w-lg text-lg/7 font-medium text-gray-400/90 sm:text-xl/8">
              One Integration for Your Entire Restaurant Tech Stack – Simplify Connectivity. Connect once and effortlessly manage multi-way connections across AI agents, booking software and booking channels.
            </p>
          </div>
          <div>
            <img 
              src="/board-integrations.jpg" 
              alt="Booking Platform Preview"
              className="rounded-lg object-cover w-full max-w-[1000px] h-auto bg-transparent"
              style={{
                background: 'transparent',
                mixBlendMode: 'multiply'
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

function BookingFeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <div className="flex flex-col items-center text-center pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <div>
            <Subheading>Connect</Subheading>
            <Heading as="h2" className="max-w-3xl">
              Connect Your App To The Universe
            </Heading>
            <p className="mt-8 text-lg/7 font-medium text-gray-400/90 sm:text-xl/8 mx-auto">
              Dozens of integrations supported across direct & aggregator connectors
            </p>
                        <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row justify-center">
              <Button href="/contact?plan=request" className="px-8 py-4 text-lg">
                Request
              </Button>
              {/* <Button variant="secondary" href="/pricing" className="px-8 py-4 text-lg">
                See pricing
              </Button> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Issuing</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Build a booking offering with software-as-a-service.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-4">
        <BentoCard
          eyebrow="Source"
          title="Connect with all platforms at once"
          description="Bookabl helps you connect with all platforms at once."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Get bookings globally"
          description="Get requests from anywhere in the world."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <APIFeatureSection />
          <BookingFeatureSection />
          {/* <BentoSection /> */}
        </div>
      </main>
      <Footer />
    </div>
  )
}
