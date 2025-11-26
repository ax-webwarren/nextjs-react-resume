import styles from "./styles.module.css";

export default async function EmailComponent() {
  return (
    <section
      id="email"
      className="bg-white font-regular font-sans p-10 w-auto"
    >
      <h3 className="text-center text-3xl text-black">Email Me.</h3>
      <p className="text-center text-2sm text-black p-5 pb-0 font-normal">
        Send me an email for any inquiries you have.
      </p>
      <p className="text-center text-2sm text-black font-normal">
        Together, let's create a solution.
      </p>      
      <a
        href="mailto:warrentulangdano@gmail.com"
        className="m-auto mt-[30px] block w-fit bg-gray-700 pl-5 pr-5 pt-3 pb-3 uppercase border-gray-600 hover:bg-gray-500 text-white hover:border-black cursor-pointer rounded"
      >
        Email
      </a>
    </section>
  );
}
