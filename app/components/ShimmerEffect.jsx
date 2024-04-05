function ShimmerEffect() {
  return (
    <div className="w-full animate-pulse">
      {[...Array(15)].map((_, i) => {
        return (
          <div
            key={i}
            className="w-full h-[15rem] my-4 bg-gray-500 rounded-xl"
          ></div>
        );
      })}
    </div>
  );
}

export default ShimmerEffect;
