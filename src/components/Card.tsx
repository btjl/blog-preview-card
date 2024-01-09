import illustrationArticle from "../assets/illustration-article.svg";
import avatar from "../assets/image-avatar.webp";

const Card = () => {
  return (
    <article className="relative border border-black rounded-2xl bg-white max-w-xs sm:max-w-sm shadow-cardShadow">
      <section className="p-5">
        <header className="rounded-xl overflow-hidden sm:overflow-auto">
          <img
            className="w-full h-[200px] scale-[120%] sm:scale-100"
            src={illustrationArticle}
          />
        </header>
        <span className="inline-block mt-6 bg-yellow font-bold py-1 px-3 rounded-md text-sm">
          Learning
        </span>
        <p className="mt-3 text-sm">Published 21 Dec 2023</p>
        <p className="mt-3 font-bold text-xl hover:text-yellow hover:cursor-pointer">
          HTML & CSS foundations
        </p>
        <p className="mt-3 text-sm sm:text-base text-grey ">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <footer className="mt-6 flex items-center gap-3">
          <img className="w-8 h-8" src={avatar} alt="avatar" />
          <p className="font-bold text-sm">Greg Hooper</p>
        </footer>
      </section>
    </article>
  );
};

export default Card;
