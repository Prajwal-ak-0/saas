import Navbar from '@/components/Navbar'

const AuthLayout = ({children} : { children : React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default AuthLayout