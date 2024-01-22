import { Header } from '@/widgets/header'
import {WorksList, WorkTitle} from '@/widgets/works'
import Footer from '@/widgets/footer'
import { PrinciplesOfWork } from '@/widgets/homepage/HomepageContent/PrinciplesOfWork'

export const Work = () => {
  return (
    <>
      <Header/>
      <WorkTitle />
      <WorksList />
      <PrinciplesOfWork />
      <Footer/>
    </>
  )
}
