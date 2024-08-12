import { TextGenerateEffectDemo } from '@/components/TextGenerateEffect'

export default function Home() {
  return (
    <main className=''>
      <div className='my-12 rounded-lg border border-gray-50 py-6 dark:border-gray-700'>
        <h1 className='my-12 bg-gradient-to-r from-sky-400 to-emerald-700 bg-clip-text px-4 text-center text-4xl font-bold text-transparent md:text-6xl'>
          This is a template for Next.js Projects
        </h1>
        {/* <article className='mx-auto w-full rounded-md border border-sky-400/25  shadow-lg lg:w-3/4 '>
          <div className='bg-slate-100/75 leading-8 text-slate-800 dark:bg-slate-800 dark:text-slate-100 max-md:text-sm max-md:leading-7'>
            <TextGenerateEffectDemo />
          </div>
        </article> */}
      </div>
    </main>
  )
}
