import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Anup | DevOps Engineer</title>
        <meta name="description" content="I am a Devops Engineer With 7 years Experienced " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Anuplogo.ico" />
      </Head>
      <Home />
    </>
  );
}
