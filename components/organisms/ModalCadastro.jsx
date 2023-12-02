import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CardUsuarios } from "../molecules/CardUsuarios";
import { ModalContent } from "../molecules/ModalContent";
import { CardExercicios } from "../molecules/CardExercicios";

export const ModalCadastro = ({
  title,
  description,
  modalTitle,
  label1,
  label2,
  label3,
  buttonTitle,
  isMonitorModal,
  isDisciplinaModal,
  isMonitorScreen,
  disciplina,
  tituloExercicio,
  descricaoExercicio,
  isMonitorScreenExModal,
}) => (
  <>
    {isMonitorScreenExModal ? (
      <Dialog>
        <DialogTrigger>
          <CardUsuarios title={title} description={description} />
        </DialogTrigger>
        <CardExercicios
          title={title}
          disciplina={disciplina}
          tituloExercicio={tituloExercicio}
          descricaoExercicio={descricaoExercicio}
          isMonitorScreenExModal={isMonitorScreenExModal}
        />
      </Dialog>
    ) : (
      <Dialog>
        <DialogTrigger>
          <CardUsuarios title={title} description={description} />
        </DialogTrigger>
        <ModalContent
          modalTitle={modalTitle}
          label1={label1}
          label2={label2}
          buttonTitle={buttonTitle}
          label3={label3}
          isMonitorModal={isMonitorModal}
          isDisciplinaModal={isDisciplinaModal}
          isMonitorScreen={isMonitorScreen}
        />
      </Dialog>
    )}
  </>
);
