export type TType = {
  a: string
  b: () => void
  c: null
  d?: unknown
  g: {
    g1: 'string'
    g2?: boolean
    g3: {
      g31?: 'string'
      g32?: true
      g33: {
        g331?: 'string'
      }
      g34: undefined
    }
  }
}
