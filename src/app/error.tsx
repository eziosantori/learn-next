'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string }
  reset: () => void
}>) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  const retryRequest = () => {
    // Attempt to recover by trying to re-render the segment
    reset()
  }
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={retryRequest}
      >
        Try again
      </button>
    </div>
  )
}