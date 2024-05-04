interface NoteCardProps {
  date: Date;
  content: string;
}


export function NoteCard({date, content}:NoteCardProps ) {
  return (
    <button className='flex flex-col text-left bg-slate-800 rounded-md p-5 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
      <span className='text-slate-200' >{date.toISOString()}</span>
      <p className='mt-3 text-slate-400' >{content}</p>
    
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
  )
}