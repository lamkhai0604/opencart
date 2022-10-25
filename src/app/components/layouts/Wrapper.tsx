import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const Wrapper = ({children}: Props) => {
  return <>{children}</>
}

export default Wrapper