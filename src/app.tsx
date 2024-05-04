import logo from './assets/logo-my-notes.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'


export function App() {

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt='NLW Export' />

      <form className='w-full'>
        <input 
          type='text' 
          placeholder='Busque em suas notas...' 
          className='w-full font-semibold bg-transparent text-3xl -tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700'/>

      <div className='grid grid-cols-3 auto-rows-[250px] text-sm gap-6' >
        <NewNoteCard />
        <NoteCard date={new Date()} content='Uma nova historia Deus tem pra mim' />
        <NoteCard date={new Date('04/04/2024')} content='Uma nova historia Deus tem pra mim' />
        <NoteCard date={new Date('02/02/2024')} content='Um novo tempo DEus tem pra mim' />
        <NoteCard date={new Date('01/01/2024')} content='Tudo aquilo que perdido for, ouvirei de sua boca' />
      </div>
      
    </div>
  )
}
