import React from "react";

const Gitlanguage = () => {
  return (
    <div className="flex justify-center items-center my-4">
      <a
        href="https://github.com/Trikzmr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="rounded-lg shadow-md"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Trikzmr&langs_count=3&title_color=f97316&text_color=000000&icon_color=0891b2&bg_color=f4fef8&hide_border=true&locale=en&custom_title=Top%20Languages"
          alt="Top Languages"
        />
      </a>
    </div>
  );
};

export default Gitlanguage;
