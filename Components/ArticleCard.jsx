function ArticleCard({ data }) {
  return (
    <section className="bg-blue-400">
      <iframe src={data?.src} frameborder="0"></iframe>
      <span>{data?.userName}</span>
    </section>
  );
}

export default ArticleCard;
