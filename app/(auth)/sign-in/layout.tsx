import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </>
  )
}

export default AuthLayout