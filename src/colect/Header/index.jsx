import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Desktop from '../../components/Desktop'
import Mobile from '../../components/Mobile'



const Header = () => {



  const isMobile = useMediaQuery({
    query:"(max-width:768px)"
  })

  const isDesktop = useMediaQuery({
    query:"(min-width:769px)"
  })

  return (
    <div>
      <React.Fragment >
        {
          isMobile && (
          <div className="isMobile_row">
            <Mobile />
          </div>
          )
        }
        {
        isDesktop && (
          <div className="isDesktop_row">
            <Desktop />
          </div>
          )
        }
      </React.Fragment>
    </div>
  )
}

export default Header



