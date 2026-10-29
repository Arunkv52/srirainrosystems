import { useEffect, useRef } from 'react'
import Video from '../../../assets/home/0_Experiment_Tablet_1280x720.mp4'



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

        const scrolled = Math.min(
          Math.max(-sectionRect.top, 0),
          scrollDistance
        )

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
      className="relative h-[300vh]"
      aria-label="Scroll-controlled video section"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={Video}
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 flex items-center justify-start px-6 text-left ">
          <div className="text-white">
            <p className="mb-3 text-sm font-semibold uppercase text-(--bluedark)">
              Pure Water | Healthy Life
            </p>

            <h3 className="text-4xl font-medium md:text-5xl text-(--blue)">
              Pure Water Solutions <br /> for Every Need
            </h3>
            
            {/* Buttons */}
            <div className='py-4 flex justify-start items-center gap-5'>
              <button className='bg-(--blue) text-white py-3 px-7 rounded-lg cursor-pointer'>Explore Products</button>
              <button className='border border-(--blue) text-(--blue) py-3 px-7 rounded-lg cursor-pointer'>Get a Free Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection