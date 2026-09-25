import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users= [
    {
    img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
     intro: '',
     color: 'blue',
     tag: 'Satisfied'
    },
    {
     img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
     color: 'lightseagreen',
     intro: '', 
     tag: 'Underserved'
    },
    {
     img: 'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
     color: 'yellow',
     intro: '', 
     tag: 'Underbanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color: 'crimson',
      into: '',
      tag: 'Unwavered'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1669627111607-fd97efe8866c?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color: 'pink',
      into: '',
      tag: 'Determined'
    },
    {
      img: 'https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color: 'black',
      into: '',
      tag: 'Busy'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      {/* <Section2 /> */}
    </div>
  )
}

export default App