import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'

export default function Success() {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <div className="p-7 sm:p-11 text-center">
            <div className="flex justify-center">
              <Link href="/" title="Home">
                <Logo className="h-20 w-20" />
              </Link>
            </div>
            <h1 className="mt-8 text-2xl font-medium">Book a Demo</h1>
            <div className="mt-6 flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              Your request has been submitted and we will get to you shortly.
            </p>
            <Link
              href="/"
              className="mt-8 inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-black/90"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 