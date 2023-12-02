import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CardUsuarios = ({ title, description, children }) => (
  <Card className="bg-[#545E75] border-2 border-slate-900 hover:bg-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-80 h-40">
    <CardHeader>
      <CardTitle className="text-lg text-center">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center">{description}</CardContent>
  </Card>
);
