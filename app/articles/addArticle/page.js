"use client";

import AddNewArticles from "@/app/articles/assets/AddNewArticle";
function Page({ params }) {
  return (
    <section className="min-h-screen px-24 flex justify-center items-center">
      <AddNewArticles />
    </section>
  );
}

export default Page;
