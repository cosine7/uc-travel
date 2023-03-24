import { cloneElement, useState } from 'react'
import { createPortal } from 'react-dom'
import './index.scss'
import { MdOutlineClose } from 'react-icons/md'

export default function Popup({ children, content }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {cloneElement(children, { onClick: () => setOpen(true) })}
      {open && createPortal(
        <div className="popup" onClick={() => setOpen(false)}>
          <div className='wrapper' onClick={e => e.stopPropagation()}>
            <MdOutlineClose onClick={() => setOpen(false)}/>
            {content}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}