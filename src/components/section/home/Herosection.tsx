import { useEffect, useRef } from 'react'
import Video from '../../../assets/home/gemini-generate-video.mp4'
import ButtonFill from '../../ui/ButtonFill'

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
              <ButtonFill text={'Get a Quote'} link={'/contact'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
