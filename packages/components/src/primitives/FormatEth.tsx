import FormatCurrency from './FormatCurrency'
import React, { FC, ComponentProps } from 'react'

type FormatEthProps = {
  logoWidth?: number
}

type Props = ComponentProps<typeof FormatCurrency> & FormatEthProps

const FormatEth: FC<Props> = ({
  amount,
  maximumFractionDigits,
  logoWidth = 8,
  css,
}) => {
  return (
    <FormatCurrency
      css={css}
      amount={amount}
      maximumFractionDigits={maximumFractionDigits}
    >
      <svg
        width={logoWidth}
        height="25"
        viewBox="0 0 15 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.49721 0L0 12.4432L7.49721 9.03511V0Z" fill="#3E63DD" />
        <path
          d="M7.49721 9.03516L0 12.4433L7.49721 16.8768V9.03516Z"
          fill="#2F4EB2"
        />
        <path
          d="M14.9959 12.4432L7.49731 0V9.03511L14.9959 12.4432Z"
          fill="#2F4EB2"
        />
        <path
          d="M7.49731 16.8768L14.9959 12.4433L7.49731 9.03516V16.8768Z"
          fill="#273E89"
        />
        <path d="M0 13.866L7.49721 24.4336V18.2967L0 13.866Z" fill="#3E63DD" />
        <path
          d="M7.49731 18.2967V24.4336L15.0001 13.866L7.49731 18.2967Z"
          fill="#2F4EB2"
        />
      </svg>
    </FormatCurrency>
  )
}

export default FormatEth
