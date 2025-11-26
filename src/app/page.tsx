import Image from "next/image";
import AboutComponent from '@/app/components/about';
// import {subscribe} from './lib/actions';

//export default async function Home(
export default function Home(
  {searchParams}: {searchParams: any}
) {
  /*
  const searchQuery = await searchParams;
  let stat = null;
  if (searchQuery.name) {
    //stat = await subscribe(searchQuery);    
  }
  */
  return (
    <div className="homepage" style={{}}>
      <AboutComponent />
      {/*stat ? <div className='text-center p-5 text-2xl bg-amber-500 font-bold text-white'>Subscribed</div> : ''*/}
    </div>
  )
}
