import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fetchItems } from "../api/items";
import Spinners from "../assets/spinners";
import ProductItem from "./ProductItem";

export default function Card() {
  const { data, error, status, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["items"],
      queryFn: fetchItems,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      console.log("ref", ref);
      console.log("inView", inView);
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return status === "pending" ? (
    <Spinners />
  ) : status === "error" ? (
    <div className="text-red-600 font-bold">{error.message}</div>
  ) : (
    <div className="flex flex-col gap-5">
      {data.pages.map((page) => {
        return (
          <ul key={page.currentPage} className="flex flex-col gap-2">
            {page.data.map((item, index) => {
              return <ProductItem key={index + 1} {...item} />;
            })}
          </ul>
        );
      })}
      {/* fetching next page */}
      <div ref={ref}>{isFetchingNextPage && <Spinners />}</div>
    </div>
  );
}
