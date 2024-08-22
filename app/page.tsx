import { Construction } from 'lucide-react'

export default function Home() {
  return (
    <main className='container'>
      <div className='my-12 rounded-lg border border-gray-50 py-6 dark:border-gray-700'>
        <h1 className='my-12 bg-gradient-to-r from-sky-400 to-emerald-700 bg-clip-text px-4 text-center text-4xl font-bold text-transparent md:text-6xl'>
          This page is under construction!{' '}
        </h1>
        <Construction
          className='mx-auto text-slate-600 dark:text-slate-300'
          size={256}
        />
      </div>
    </main>
  )
}
