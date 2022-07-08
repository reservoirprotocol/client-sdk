import { styled } from '../../stitches.config'

export const Text = styled('span', {
  color: '$gray12',
  fontFamily: '$body',
  letterSpacing: 0,

  variants: {
    style: {
      h2: {
        fontWeight: 700,
        fontSize: 48,
      },
      h3: {
        fontWeight: 700,
        fontSize: 32,
      },
      h4: {
        fontWeight: 700,
        fontSize: 24,
      },
      h5: {
        fontWeight: 700,
        fontSize: 20,
      },
      h6: {
        fontWeight: 700,
        fontSize: 16,
      },
      subtitle1: {
        fontWeight: 500,
        fontSize: 16,
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: 12,
      },
      body1: {
        fontWeight: 400,
        fontSize: 16,
      },
      body2: {
        fontWeight: 400,
        fontSize: 12,
      },
      tiny: {
        fontWeight: 500,
        fontSize: 10,
        color: '$slate10',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
  },

  defaultVariants: {
    style: 'body1',
  },
})
