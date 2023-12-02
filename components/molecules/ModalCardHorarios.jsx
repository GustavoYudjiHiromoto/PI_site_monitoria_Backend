import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { CardHorarios } from "./CardHorarios";
import { ButtonOpenModal } from "../atoms/ButtonOpenModal";

export const ModalCardHorarios = ({ title, description }) => (
  <Dialog>
    <DialogTrigger>
      <ButtonOpenModal title={title} />
    </DialogTrigger>
    <CardHorarios title={title} description={description} />
  </Dialog>
);
