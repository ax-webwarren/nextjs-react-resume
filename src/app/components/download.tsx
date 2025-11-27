import styles from "./styles.module.css";

export default async function DownloadComponent() {
  /*
    const data = await fetch('http://localhost:3001/navigation')
    const navigation = await data.json()
    return (
      <ul className="navigation flex gap-5 text-xl font-bold uppercase text-white bg-gray-800 font-sans p-5">
        {navigation.map((nav: any) => (
          <li key={nav.id}><a href={nav.link}>{nav.name}</a></li>
        ))}
      </ul>
    )
    */
  return (
    <section
      id="download"
      className="bg-white w-auto text-center pb-20"
    >
      {/* <h3 className="text-center text-3xl text-black">Know Me More.</h3> */}
      <p className="text-center text-2sm text-black font-normal">
        Download my file to learn more about me.
      </p>
      <a
        href="WarrenDano.pdf"
        download="Warren Dano.pdf"
        className="m-auto mt-[30px] block w-fit bg-gray-700 pl-5 pr-5 pt-3 pb-3 uppercase border-gray-600 hover:bg-gray-500 text-white hover:border-black cursor-pointer rounded"
      >
        Download
      </a>
    </section>
  );
}
