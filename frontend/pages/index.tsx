import PageHeader from '../components/pageHeader/pageHeader'
import CrewList from '../components/crewList/crewList'
import DeliveryList from '../components/deliveryList/deliveryList'
import Image from 'next/image';

const Home = () => {
  return (
    <div className="bg-dark h-screen w-screen">
      <PageHeader />
      <div className='inline-flex justify-center w-screen'>
        <Image
          src="/images/planet_express_logo.png"
          height={196}
          width={216}
          alt="Planet Express Logo"
        />
      </div>
      <div className='grid grid-cols-2 m-12'>
        <CrewList />
        <DeliveryList />
      </div>
    </div>
  )
}

export default Home
