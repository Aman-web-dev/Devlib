import AddNewArticles from '../components/AddNewArticles';

export default function Page() {
  return <AddNewArticles />;
}
Page.getInitialProps = async () => {
  return { ssr: false };
};