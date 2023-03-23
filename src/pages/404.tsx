import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <h1>Oops! Página não encontrada.</h1>
      <p>
        Desculpe, a página que você está procurando não existe. Por favor, tente
        novamente ou volte para a <Link href="/">página inicial</Link>.
      </p>
    </>
  );
}
