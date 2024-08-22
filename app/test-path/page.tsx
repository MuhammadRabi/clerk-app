export default function Dashboard() {
  return (
    <section className='py-12'>
      <div className='container flex items-center justify-center'>
        <div className='my-12 inline-flex rounded-md border bg-blue-200 px-6 py-3'>
          <p className='text-2xl capitalize'>this is protected page!</p>
        </div>
      </div>
    </section>
  )
}
