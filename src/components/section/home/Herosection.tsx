import { useEffect, useRef } from 'react'
import Video from '../../../assets/home/main-video.mp4'
import { Link } from 'react-router'

const Herosection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current

    if (!section || !video) return

    let animationFrame = 0

    const updateVideo = () => {
      cancelAnimationFrame(animationFrame)

      animationFrame = requestAnimationFrame(() => {
        if (!video.duration || !Number.isFinite(video.duration)) return

        const sectionRect = section.getBoundingClientRect()
        const scrollDistance = section.offsetHeight - window.innerHeight

        if (scrollDistance <= 0) return

        const scrolled = Math.min(Math.max(-sectionRect.top, 0), scrollDistance)

        const progress = scrolled / scrollDistance
        video.currentTime = progress * video.duration
      })
    }

    video.addEventListener('loadedmetadata', updateVideo)
    window.addEventListener('scroll', updateVideo, { passive: true })
    window.addEventListener('resize', updateVideo)

    updateVideo()

    return () => {
      cancelAnimationFrame(animationFrame)
      video.removeEventListener('loadedmetadata', updateVideo)
      window.removeEventListener('scroll', updateVideo)
      window.removeEventListener('resize', updateVideo)
    }
  }, [])
/* =========================================================
   2. SMALL ICON HELPER
   ========================================================= */
function Icon({ d, className = "h-6 w-6" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
  const ARROW = "M5 12h14M13 6l6 6-6 6";

  return (
    <section
      ref={sectionRef}
      className='relative h-[300vh]'
      aria-label='Scroll-controlled video section'
    >
      <div className='sticky top-0 h-screen w-full overflow-hidden'>
        <video
          ref={videoRef}
          className='h-full w-full object-cover'
          src={Video}
          muted
          playsInline
          preload='auto'
        />

        <div className='absolute inset-0 flex items-center justify-start px-6 text-left '>
          <div className='text-white'>
            <p className='mb-3 text-sm font-semibold uppercase text-(--primary)'>
              Pure Water | Healthy Life
            </p>

            <h3 className='text-4xl md:font-semibold font-bold md:text-5xl md:text-(--white) text-white'>
              Pure Water Solutions <br /> for Every Need
            </h3>

            {/* Buttons */}
            <div className='py-4 flex justify-start items-center gap-5'>
              <Link to={'/contact'}
                  
                  className="inline-flex items-center gap-2 rounded-full bg-(--light-green) px-6 py-3 text-sm font-semibold text-[#06242a] transition-colors hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Get a Quote
                  <Icon d={ARROW} className="h-4 w-4" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
