import { NextPage } from 'next'
import { ModalError } from '@reservoir0x/reservoir-kit'

const Trigger = <button>Trigger</button>

const Index: NextPage = () => {
  return (
    <ModalError trigger={Trigger} title="title">
    </ModalError>
  )
}

export default Index
