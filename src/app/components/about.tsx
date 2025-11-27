import styles from './styles.module.css'
import Form from 'next/form'

export default async function AboutComponent() {
    return (
      <section id="about" className="bg-white font-regular p-10 w-auto">
            <h3 className='text-center text-3xl text-black pt-10 font-normal'>
                <span className='text-[20px]'>I'm</span> Warren Dano.
            </h3>
            <p className='text-center text-2sm text-black p-5 pb-0 font-normal'>
                With more than 10 years of bringing solutions to different industries,
            </p>
            <p className='text-center text-2sm text-black font-normal'>
                I deliver quality work and possibilities to any problems.
            </p>
      </section>
    )
}

