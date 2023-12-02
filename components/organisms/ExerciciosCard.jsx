import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CardTelaExercicio } from "../molecules/CardTelaExercicio";

export const ExerciciosCard = ({ title }) => (
  <>
    <Dialog>
      <DialogTrigger>
        <CardTelaExercicio title={title} />
      </DialogTrigger>
    </Dialog>
  </>
);
