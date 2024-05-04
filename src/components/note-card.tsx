import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react';

interface NoteCardProps {
  date: Date;
  content: string;
}

export function NoteCard({content, date}: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='flex flex-col  text-left text-sm bg-slate-800 rounded-md p-5 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
        <span className='text-slate-200' >{formatDistanceToNow(date, {locale: ptBR, addSuffix: true})}</span>
        <p className='mt-3 text-slate-400' >{content}</p>
      
        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50' />

        <Dialog.Content className='bg-slate-700 z-10 left-1/2 top-1/2 max-w-[640px] -translate-x-1/2 -translate-y-1/2  absolute w-full h-[60vh]  flex flex-col rounded-md overflow-hidden'>
          <Dialog.DialogClose className='absolute top-0 right-0 bg-slate-800 text-slate-400 p-1' >
            <X width={15} height={15} />
          </Dialog.DialogClose>
          
          <div className='flex flex-1 flex-col gap-3 p-5'>
            <span className='text-slate-200' >{formatDistanceToNow(date, {locale: ptBR, addSuffix: true})}</span>
            
            <p className='mt-3 text-slate-400' >{content}</p>
          </div>

          <button className='bg-slate-800 p-4 text-sm outline-none group font-semibold' >
            Deseja <span className='text-red-400 group-hover:underline' > apagar essa nota? </span>
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}