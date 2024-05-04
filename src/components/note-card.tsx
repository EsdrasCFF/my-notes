export function NoteCard() {
  return (
    <button className='text-left bg-slate-800 rounded-md p-5 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
      <span className='text-slate-200' >há 4 dias</span>
      <p className='mt-3 text-slate-400' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore laudantium, officia quisquam dolor iusto unde placeat, suscipit similique repellat pariatur nemo asperiores recusandae sit, veritatis illum a eveniet eum soluta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore laudantium, officia quisquam dolor iusto unde placeat, suscipit similique repellat pariatur nemo asperiores recusandae sit, veritatis illum a eveniet eum soluta.</p>
    
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
  )
}