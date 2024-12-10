'use client'
import { useState } from 'react'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    const formData = new FormData(event.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      router.push('/success')
    } catch (error) {
      setSubmitError('Failed to submit form. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <form onSubmit={handleSubmit} className="p-7 sm:p-11">
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Logo className="h-20 w-20" />
              </Link>
            </div>
            <h1 className="mt-8 text-base/6 font-medium">Get started</h1>
            <p className="mt-1 mb-6 text-sm/5 text-gray-600">
              Fill out the form below to get started.
            </p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name*
                  </label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name*
                  </label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black"
                />
              </div>

              {/* <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black"
                />
              </div> */}

              {submitError && (
                <p className="mt-2 text-sm text-red-600">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full rounded-lg bg-black px-4 py-2 text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
