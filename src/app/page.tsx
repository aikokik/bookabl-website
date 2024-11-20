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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <div>
            <h1 className="font-display text-balance text-4xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-6xl/[0.8] md:text-7xl/[0.8]">
              Effortless Booking
            </h1>
            <p className="mt-8 max-w-lg text-lg/7 font-medium text-gray-400/90 sm:text-xl/8">
              Integrate venue booking into your platform with a single API, show real-time availability and accept bookings online, power custom revenue models, and build a more profitable business.
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <img 
              src="/diagram.png" 
              alt="Booking Platform Preview"
              className="rounded-lg object-cover w-[700px] h-auto"
            />
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
            <Subheading>Modular solutions</Subheading>
            <Heading as="h2" className="max-w-3xl">
              A fully integrated suite of booking solutions
            </Heading>
            <p className="mt-8 max-w-lg text-lg/7 font-medium text-gray-400/90 sm:text-xl/8">
              One API for All Your Bookings – Simplify Integration. Connect once, and let your bookings flow seamlessly to the right venue platform.
            </p>
          </div>
          <div>
            <Screenshot
              width={1216}
              height={768}
              src="/platforms.png"
              className="w-full max-w-[800px] object-contain mx-auto"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Subheading>Connect</Subheading>
            <Heading as="h2" className="max-w-3xl">
              Set up real-time availability
            </Heading>
            <p className="mt-8 max-w-lg text-lg/7 font-medium text-gray-400/90 sm:text-xl/8">
              Integrate booking into your platform or marketplace for end-to-end booking experiences.
            </p>
          </div>
          <div>
            <img src="/screen.png" alt="phone" width={400} height={600} className="phone-img" />
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
          <BentoSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
