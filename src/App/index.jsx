import React from 'react'
import {Nav} from '@components/Nav'
import {Team} from '@pages/team'
import {CollectionNft} from '@pages/CollectionNft'
import {Alliance} from '@pages/Alliance'
import {Contact} from '@pages/Contact'
import {Home} from '@pages/Home'


const App = () => {
  return (<>
    <Nav />
    <main>
      <Home />
      <Team />
      <CollectionNft />
      <Alliance />
      <Contact />
    </main>
  </>
  )
}

export { App }