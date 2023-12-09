import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className='h-full pt-24 flex items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout