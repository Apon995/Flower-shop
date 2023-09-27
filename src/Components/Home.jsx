import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../Cards/Card.jsx";
import LatestPostCard from "../Cards/LatestPostCard.jsx";

function Home() {
  const data = useLoaderData();
  const [post, setPost] = useState([]);



  useEffect(() => {
    fetch("/LatestPost.json")
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>

      <div className="flex justify-between items-center md:flex-row flex-col md:gap-0 gap-6">
        <div className="md:w-[40%] w-full space-y-3">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium text-[#121212] ">
            Flowers, <span className="text-2xl">🌻</span> <br />
            what the world <br />
            needs{" "}
          </h1>
          <p className="lg:text-base md:text-sm text-[#838383] font-normal">
            Browse between hounders of flowers
          </p>
          <br />
          <Link
            to="/shop"
            className="px-4 py-2 bg-[#FF8F52] hover:opacity-90 text-white text-base font-medium cursor-pointr rounded-md"
          >
            Shop
          </Link>
        </div>
        <div className="md:w-[60%] w-full ">
          <div className="flex items-center gap-3 justify-end">
            <div>
              <img
                src="https://i.ibb.co/c16PnRs/marigold.jpg"
                alt="/"
                className="hover:cursor-pointer w-[200px] lg:h-[190px] h-[115px]  rounded-md"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/6ZCxF8K/Lily-flower.jpg"
                alt="/"
                className="hover:cursor-pointer w-[200px] lg:h-[190px] h-[115px]  rounded-md "
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/bNMZjPk/Daisy.png"
                alt="/"
                className="hover:cursor-pointer w-[200px] lg:h-[190px] h-[115px] rounded-md "
              />
            </div>
          </div>
          <div className="flex mt-2 items-center gap-3 justify-end ">
            <div>
              <img
                src="https://i.ibb.co/ZN5LVVk/daffodil.jpg"
                alt="/"
                className="hover:cursor-pointer w-[200px] lg:h-[190px] h-[115px] rounded-md"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/mcgs18k/sunflower.png"
                alt="/"
                className="hover:cursor-pointer w-[200px] lg:h-[190px] h-[115px] rounded-md"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/B4N4N78/white-rose.png"
                alt="/"
                className="hover:cursor-pointer w-[200px] lg:h-[190px] h-[115px] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* ---best-seller-section-- */}
      <div>
        <h1 className="text-2xl font-semibold text-center text-[#838383]">
          -------- <span className="text-[#000]">Best selers </span> --------
        </h1>
        <br />
        <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-1 gap-4">
          {data?.slice(0, 4).map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* ---latest-post-section-- */}
      <div>
        <h1 className="text-2xl font-semibold text-center text-[#838383]">
          -------- <span className="text-[#000]">Latest post</span> --------
        </h1>
        <br />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {post?.map((post, index) => (
            <LatestPostCard key={index} post={post} />
          ))}
        </div>
      </div>

    </>
  );
}

export default Home;
