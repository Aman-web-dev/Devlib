import YoutubeArticlesDetailsPage from "@/app/components/sections/YoutubeArticlesDetailsPage";

function Page({ params }) {
  return (
    <div>
  <div class="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
  <div class="text-white">
    <h1 class="text-4xl font-bold">Coming Soon</h1>
    <p class="mt-4 text-lg">We're working on something awesome!</p>
  </div>
  <div class="mt-8">
    <form action="#" method="post" class="flex items-center">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        class="py-2 px-4 bg-gray-800 text-white rounded-l-md focus:outline-none"
        required
      />
      <button
        type="submit"
        class="bg-blue-500 py-2 px-4 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
      >
        Subscribe
      </button>
    </form>
    <p class="mt-2 text-gray-400 text-sm">Be the first to know when we launch!</p>
  </div>
</div>

    </div>
  );
}

export default Page;
