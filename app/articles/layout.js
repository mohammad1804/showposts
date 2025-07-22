import React from 'react'


export const metadata={
    title:"articles"
}

const layout = ({children}) => {
    return (
    <div>
        Articles Layout
      <div style={{backgroundColor:"#6a76cb"}}>
        {children}
      </div>
    </div>
    )
}

export default layout
