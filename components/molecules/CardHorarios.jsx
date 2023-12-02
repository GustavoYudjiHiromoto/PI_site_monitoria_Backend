import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "../ui/dialog";

export const CardHorarios = ({
  title,
  description,
  horarioInicio,
  horarioFim,
}) => (
  <DialogContent className="sm:max-w-[325px] md:max-w-[425px]">
    <DialogHeader className="flex flex-col content-evenly pt-2 pb-3">
      <DialogTitle className="text-md sm:justify-center pb-2">
        {title}
      </DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
    <div className="flex flex-col justify-evenly p-0">
      <div>
        <Label htmlFor="horario-inicio">Horario Início</Label>
        <Input id="horario-inicio" type="time" value={horarioInicio} />
      </div>
      <div>
        <Label htmlFor="horario-fim">Horário Fim</Label>
        <Input id="horario-fim" type="time" value={horarioFim} />
      </div>
    </div>

    <div className="flex justify-end pt-4">
      <Button className="w-full">Salvar Horário</Button>
    </div>
  </DialogContent>
);
