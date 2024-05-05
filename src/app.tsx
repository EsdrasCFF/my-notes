import { useState } from 'react'
import logo from './assets/logo-my-notes.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
  id: string;
  date: Date;
  content: string
}

export function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notes = localStorage.getItem('@my-notes/notes-array')
    if(!notes) {
      return []
    }

    return JSON.parse(notes)
  })

  function handleCreatedNote(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem('@my-notes/notes-array', JSON.stringify(notesArray))
  }

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
        <NewNoteCard handleCreatedNote={handleCreatedNote} />
        {notes.map((note) => (
          <NoteCard content={note.content} date={note.date} key={note.id}  />
        ))}
      </div>
      
    </div>
  )
}
