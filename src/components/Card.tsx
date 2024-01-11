import illustrationArticle from "../assets/illustration-article.svg";
import avatar from "../assets/image-avatar.webp";

const Card = () => {
  return (
    <main className="border border-black rounded-2xl bg-white max-w-xs sm:max-w-sm shadow-cardShadow">
      <section className="p-5">
        <header className="rounded-xl overflow-hidden sm:overflow-auto">
          <img
            className="w-full h-[200px] scale-[120%] sm:scale-100"
            src={illustrationArticle}
            alt=""
          />
        </header>
        <span className="inline-block mt-6 bg-yellow font-bold py-1 px-3 rounded-md text-sm">
          Learning
        </span>
        <p className="mt-3 text-sm">
          <time dateTime="2023-12-21">Published 21 Dec 2023</time>
        </p>
        <h1 className="mt-3 font-bold text-xl hover:text-yellow cursor-pointer">
          HTML & CSS foundations
        </h1>
        <p className="mt-3 text-sm sm:text-base text-grey ">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <footer className="mt-6 flex items-center gap-3">
          <img className="w-8 h-8" src={avatar} alt="greg hooper" />
          <p className="font-bold text-sm">Greg Hooper</p>
        </footer>
      </section>
    </main>
  );
};

export default Card;
