import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0'>
      <Head>
        <title>JEPPUNG</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>  
        <Experience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>  
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      {/* Contact Me */}

    </div>
  )
}
