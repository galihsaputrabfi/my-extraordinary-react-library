import { PropsWithChildren } from 'react'

const WelcomeText = ({ children }: PropsWithChildren) => {
  return (
    <h3>{children}</h3>
  )
}

export default WelcomeText