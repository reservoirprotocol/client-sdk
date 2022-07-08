import React, { FC, ReactNode } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { Flex } from './primitives/Flex'
import { Anchor } from './primitives/Anchor'
import Button from './primitives/Button'
import { styled } from '../stitches.config'
import { Dialog } from './primitives/Dialog'
import { Text } from './primitives/Text'

const Title = styled(DialogPrimitive.Title, {})

type Props = {
  title: string
  children: ReactNode
  trigger: ReactNode
}

export const ModalError: FC<Props> = ({ title, children, trigger }) => {
  return (
    <Dialog trigger={trigger}>
      <Flex
        css={{
          p: 16,
          mb: 16,
          backgroundColor: '$slate4',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Title>
          <Text style="h6">{title}</Text>
        </Title>
        <DialogPrimitive.Close asChild>
          <Button color="ghost">
            <FontAwesomeIcon icon={faClose} width={16} height={16} />
          </Button>
        </DialogPrimitive.Close>
      </Flex>
      There was an error with your transaction. Please try again.
      <Flex
        css={{
          mx: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '$slate2',
          py: 10.5,
        }}
      >
        <Anchor href="https://reservoirprotocol.github.io/" target="_blank">
          <Text style="body2" css={{ display: 'inline-flex', gap: 4 }}>
            Powered by <img src="/reservoir_watermark_dark.svg" />
          </Text>
        </Anchor>
      </Flex>
    </Dialog>
  )
}
