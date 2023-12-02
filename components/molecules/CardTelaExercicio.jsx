import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const CardTelaExercicio = ({ title }) => (
  <Card className="bg-slate-50 border-2 border-slate-900 text-black transition ease-in-out hover:scale-105 w-80 sm:w-[500px] md:w-[752px] lg:w-[1000px] xl:w-[1264px] h-24 flex px-3">
    <CardContent className="flex flex-row items-center p-0 flex-grow justify-between">
      <CardTitle className="text-2xl line-clamp-1 text-start">
        {title}
      </CardTitle>
      <div className="flex-shrink-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </CardContent>
  </Card>
);
