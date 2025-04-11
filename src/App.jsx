import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import { FaUser, FaAlignLeft, FaShoppingCart } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'

const App = () => {
  const createInitialAnimation = () => {
    const t1 = gsap.timeline({
      defaults: {
        ease: 'back.out(1.7)',
        duration: 0.6,
      },
      paused: true,
    })

    t1.from(['#menu', '#user'], {
      opacity: 0,
      x: (index) => (index === 0 ? -100 : 100),
    })
      .to('#car', { top: '10%', opacity: 1, ease: 'elastic.out(1, 0.7)', duration: 1 }, '<0.2')
      .from(
        ['#title', '#text', '#btn-buy'],
        {
          opacity: 0,
          y: 30,
          stagger: 0.1,
        },
        '-=0.3',
      )

    return t1
  }
  const t1 = useRef(null) // 用来存储动画实例
  const t2 = useRef(null)
  useEffect(() => {
    if (!t1.current) {
      t1.current = createInitialAnimation()
      t1.current.play()
    }
    if (!t2.current) {
      t2.current = createExitAnimation()
    }
  }, [])

  const createExitAnimation = () => {
    const t2 = gsap.timeline({
      defaults: {
        ease: 'power2.inOut',
        duration: 0.5, // 缩短基础动画时间
      },
      paused: true,
    })
    t2.to(['#menu', '#user'], {
      opacity: 0,
      x: (index) => (index === 1 ? 100 : -100),
      stagger: 0.05, // 更快的消失序列
    })
      .to(
        ['#text', '#title'],
        {
          opacity: 0,
          y: 30,
          stagger: 0.05, // 更快的消失序列
        },
        0,
      )
      .to(
        '#car',
        {
          top: '-50%',
          opacity: 0,
          duration: 0.6,
        },
        '<0.2',
      )
      .to(
        '#shoppingIcon',
        {
          scale: 0,
          duration: 0.2,
        },
        '<0.1',
      )
      .to(
        '#btn-buy',
        {
          scale: 16,
          borderRadius: 0,
          duration: 0.8,
          ease: 'power4.in',
          cursor: 'auto',
        },
        '<',
      )
      .to(
        '#summary-title',
        {
          opacity: 1,
          left: '60%',
          duration: 0.8,
        },
        '-=0.4',
      )
      .to(
        ['#car-final'],
        {
          opacity: 1,
          left: '50%',
          duration: 0.8,
          stagger: 0.1,
        },
        '-=0.4',
      )
      .to(
        ['#summary', '#summary-2'],
        {
          opacity: 1,
          left: '52%',
          duration: 0.6,
          stagger: 0.15,
        },
        '-=0.3',
      )
      .to(
        '#btn-back',
        {
          opacity: 1,
          bottom: '5%',
          duration: 0.3,
        },
        '<0.2',
      )

    return t2
  }

  const handleClick = () => {
    t2.current.restart()
  }

  const handleBack = () => {
    const t3 = gsap.timeline({
      defaults: {
        ease: 'power2.inOut',
        duration: 0.5,
      },
      paused: true,
    })

    t3.to(['#summary-2', '#summary', '#summary-title', '#car-final'], {
      opacity: 0,
      left: '-100%',
      stagger: 0.05,
    })
      .to(
        '#btn-back',
        {
          opacity: 0,
          bottom: '0',
          duration: 0.3,
        },
        '<0.2',
      )
      .to(
        '#btn-buy',
        {
          scale: 1,
          borderRadius: '100%',
          duration: 0.6,
          ease: 'power4.out',
          cursor: 'pointer',
        },
        '<',
      )
      .to(
        '#shoppingIcon',
        {
          scale: 1,
          duration: 0.3,
        },
        '-=0.3',
      )
      .to(
        '#car',
        {
          top: '10%',
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.4)',
        },
        '-=0.2',
      )
      .to(
        '#title',
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.4,
        },
        '-=0.3',
      )
      .to(
        ['#menu', '#user', '#text'],
        {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.08,
          duration: 0.4,
        },
        '-=0.3',
      )

    t3.play()
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center ">
      <div className="w-80 h-170 bg-white relative rounded-2xl shadow-2xl p-5 overflow-hidden">
        <div>
          <FaAlignLeft id="menu" className="size-6 icon-position left-5" />
          <FaUser id="user" className="size-6 icon-position right-5" />
        </div>
        <img
          id="car"
          src="/images/car-1.png"
          alt="car1"
          className="h-[350px] img-position opacity-0"
        />
        <h1 id="title" className="text-4xl font-bold h1-position color-[#313942]">
          Model S
        </h1>
        <p id="text" className="p-position text-center w-60 text-sm color-[#535c68] font-semibold">
          Model S id built form the ground up as an electric vehicle, with hight strength
          architecture.
        </p>
        <button
          id="btn-buy"
          className="rounded-full size-[50px] bg-[#17202c] buyButton-position cursor-pointer"
          onClick={handleClick}
        >
          <FaShoppingCart id="shoppingIcon" className="size-6 text-white shoppingIcon-position" />
        </button>

        <img
          id="car-final"
          src="images/car-2.jpg"
          alt="car2"
          className="car-final-position h-25 opacity-0"
        />
        <h2
          id="summary-title"
          className="summary-title-position opacity-0 text-white font-semibold text-2xl"
        >
          Congratulations
        </h2>
        <h5 id="summary" className="summary-position opacity-0 text-white font-semibold text-sm">
          Your order for Model S will be delivered to your door step within 5-7 business days
        </h5>
        <h5 id="summary-2" className="summary2-position opacity-0 text-white font-semibold text-sm">
          More text that doesn't make sense but I dont know what else to type here because I have
          never purchased a Car.
          <br />
          <br />
          <br />
          Thank You
        </h5>

        <button
          id="btn-back"
          className="w-10 h-10 flex justify-center items-center rounded-full btn-back-position cursor-pointer bg-[#696767]"
          onClick={handleBack}
        >
          <IoArrowBack className="size-6 text-white" />
        </button>
      </div>
    </main>
  )
}

export default App
