import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'


//the customcursor 
function Customcursor({ isHovering3D }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef(null)

  useEffect(() => {
    const handelMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener("mousemove", handelMouseMove)
    return () => {
      document.removeEventListener("mousemove", handelMouseMove)
    }
  })
  return (
    <motion.div ref={cursorRef} className="fixed top-0 z-50 pointer-events-none mix-blend-difference" animate={{
      x: position.x - (isHovering3D ? 12 : 15),
      y: position.y - (isHovering3D ? 12 : 15),
      scale: isHovering3D ? 1.5 : 1,
    }} transition={
      {
        type: "spring",
        stiffness: "500",
        damping: 28,
        mass: 0.5
      }
    }>
      <motion.div className={`rounded-full ${isHovering3D ? "bg-violet-500" : "bg-white"}`}
        animate={{
          width: isHovering3D ? "24px" : "40px",
          height: isHovering3D ? "24px" : "40px",

        }}
        transition={{ duration: 0.2 }}
      >

      </motion.div>
      {isHovering3D && (
        <motion.div
          className='absolute inset-0 flex items-center justify-center pointer-events-none'
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 2, opacity: 0.5 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-10 h-10 rounded-full border border-violet-500 bg-transparent"></div>
        </motion.div>
      )}

    </motion.div>
  )
}


const Character = () => {

  const [selectAvatar, setAvatar] = useState("VIKI")
  const [cursor3DModelArea, setCursor3DModelArea] = useState(false)

  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      starts: 3
    },
    EVA: {
      name: "EVA",
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      start: 4,
    }
  }
  const current = Avatar[selectAvatar]

  const handel3DAreaMouseEnter = () => {
    setCursor3DModelArea(true)
  }
  const handel3DAreaMouseLeave = () => {
    setCursor3DModelArea(false)
  }

  return (
    <div className='relative w-full h-screen overflow-hidden mb-[10%]'>
      <Customcursor isHovering3D={cursor3DModelArea} />
      <div className='relative z-10 pt-6 text-center'>
        <h1 className='text-5xl font-bold tracking-widest md:mb-5  mb-8 ' style={{ textShadow: "0 0 10px rgba(255,255,0.7)" }}>
          FIGHTERS
        </h1>
      </div>

      <div className='relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4 justify-center'>
        <div className='w-full md:w-2/4 flex flex-col md:ml-10'>
          <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]'>
            <h1 className='text-2xl font-semibold mb-2'>{current.name}</h1>
            <div className='space-y-3 mb-16'>
              <div className='flex items-center '>
                <span className='w-24 text-gray-400'>Power</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{ width: `${current.power}%` }}>
                  </div>

                </div>
                <span className='ml-2'>{current.power}</span>
              </div>
              <div className='flex items-center '>
                <span className='w-24 text-gray-400'>Stats</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{ width: `${current.stable}%` }}>
                  </div>
                </div>
                <span className='ml-2'>{current.stable}</span>
              </div>
              <div className='flex items-center '>
                <span className='w-24 text-gray-400'>Penetrate</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{ width: `${current.penetrate}%` }}>
                  </div>
                </div>
                <span className='ml-2'>{current.penetrate}</span>
              </div>
              <div className='flex items-center '>
                <span className='w-24 text-gray-400'>Portable</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{ width: `${current.portable}%` }}>
                  </div>
                </div>
                <span className='ml-2'>{current.portable}</span>
              </div>
            </div>
            <div className='flex gap-3 '>
              <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                Proficient
              </button>
              <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                Redemption
              </button>
            </div>
          </div>
          {/* avatar card container */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300' onClick={() => setAvatar("VIKI")}>
              <div className='text-lg mb-2'>
                VIKI
              </div>
              <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                <img src="public\images\VIKI.png" alt="" />
              </div>
              <div className='flex'>
                {[...Array(3)].map((_, i) => {
                  return <Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500' />
                })}
              </div>
              {
                selectAvatar === "VIKI" && (
                  <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'>

                  </div>
                )
              }
            </div>
            <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300' onClick={() => setAvatar("EVA")}>
              <div className='text-lg mb-2'>
                EVA
              </div>
              <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                <img src="public\images\EVA.png" alt="" />
              </div>
              <div className='flex'>
                {[...Array(4)].map((_, i) => {
                  return <Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500' />
                })}
              </div>
              {
                selectAvatar === "EVA" && (
                  <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'>

                  </div>
                )
              }
            </div>
          </div>

        </div>

        {/* right side - 3D content */}
        <div className='relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden' onMouseEnter={handel3DAreaMouseEnter} onMouseLeave={handel3DAreaMouseLeave}>
          <AnimatePresence mode='wait'>
            {selectAvatar === "VIKI" ? (<motion.div key="VIKI" className='absolute inset-0 ' initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
            >
              {
                /*
            <Spline scene="https://prod.spline.design/84BwJdCAV87aaX8x/scene.splinecode" />
                                */
              }
            </motion.div>) : (<motion.div key="EVA" className='absolute inset-0 ' initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              {/*
             <Spline scene="https://prod.spline.design/oczbafOWIkrYRlov/scene.splinecode" />
             */}

            </motion.div>)}
          </AnimatePresence>
        </div>
      </div>

    </div>
  )
}

export default Character
