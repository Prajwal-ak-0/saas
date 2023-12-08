import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  )
}

export default AuthLayout