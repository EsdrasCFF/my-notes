import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps {
  handleCreatedNote: (content: string) => void
}

export function NewNoteCard({handleCreatedNote}: NewNoteCardProps) {

  const [shouldShowOnboarding, setShouldOnboarding] = useState(true)
  const [content, setContent] = useState('')

  function handleToWriteClick() {
    setShouldOnboarding(false)
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    
    setContent(event.target.value)
    
    if(event.target.value === '') {
      setShouldOnboarding(true)
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()

    handleCreatedNote(content)

    setContent('')
    setShouldOnboarding(true)

    toast.success('Nota Criada com sucesso!', )
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className='flex flex-col h-full w-full text-left bg-slate-700 rounded-md p-5 text-sm outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
          <span className='text-slate-200' >Adicionar nota</span>
          <p className='mt-3 text-slate-400' >Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50' />

        <Dialog.Content className='bg-slate-700 z-10 left-1/2 top-1/2 max-w-[640px] -translate-x-1/2 -translate-y-1/2  absolute w-full h-[60vh]  flex flex-col rounded-md overflow-hidden'>
          <Dialog.DialogClose className='absolute top-0 right-0 bg-slate-800 text-slate-400 p-1' >
            <X width={15} height={15} />
          </Dialog.DialogClose>
          <form onSubmit={handleSaveNote} className='flex flex-1 flex-col'>
            <div className='flex flex-1 flex-col gap-3 p-5'>
              <span className='text-slate-200' >Adicionar nota</span>
              
              {shouldShowOnboarding ? (
                <p className='mt-3 text-slate-400' >Comece <button className='text-lime-400 hover:underline' >gravando uma nota</button> em áudio ou se preferir <button onClick={handleToWriteClick} className='text-lime-400 hover:underline' > utilize apenas texto</button>.</p>
              ) : (
                <textarea 
                  autoFocus
                  className='text-sm h-full leading-6 text-slate-400 bg-transparent resize-none outline-none'
                  onChange={(event) => handleContentChange(event)}
                  value={content}
                />
              )}
            </div>
            <button type='submit' className='bg-lime-400 p-4 text-lime-950 text-sm outline-none font-semibol hover:bg-lime-500' >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>

    </Dialog.Root>
  )
}