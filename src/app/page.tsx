import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-white to-gray-100">
      <div className="text-center">
        {/* Logo do McDonald's */}
        <div className="mb-6">
          <Image
            src="https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQvcNP9rHlEJu1vCY5kLqzjf29HKaeN78Z6pRy" // Substitua este caminho pela URL da sua logo
            alt="McDonald's Logo"
            width={80} // Ajuste o tamanho conforme necessário
            height={80} // Ajuste o tamanho conforme necessário
            className="mx-auto"
          />
        </div>

        {/* Título com gradiente de amarelo e vermelho */}
        {/* Título com gradiente predominante vermelho */}
        <h1 className="mb-6 bg-clip-text text-3xl font-semibold">
          FSW Donalds
        </h1>

        {/* Link para o restaurante */}
        <Link href="/fsw-donalds">
          <button className="mt-4 transform rounded-lg bg-[#d42c1c] px-4 py-2 text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-red-700">
            Ir para a página do Restaurante
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
