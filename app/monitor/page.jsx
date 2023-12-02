"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

import { Navbar } from "@/components/organisms/Navbar";
import { ModalCadastro } from "@/components/organisms/ModalCadastro";
import { CardUsuarios } from "@/components/molecules/CardUsuarios";
import { ModalGerenciarHoraMonitor } from "@/components/molecules/ModalGerenciarHoraMonitor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">
          Bem vindo monitor
        </p>
      </div>
      <div className="flex flex-wrap align max-w-5xl w-full justify-center gap-y-3 gap-x-5 pt-12">
        <ModalCadastro
          title={"Cadastrar Exercícios"}
          description={"Cadastre exercícios para os alunos resolverem"}
          modalTitle={"Cadastrar Exercícios"}
          isMonitorScreenExModal={true}
        />

        {/* <ModalCadastro
          title={"Gerenciar Horários"}
          description={"Cadastre e atualize horários de monitoria"}
          modalTitle={"Gerenciar Horários"}
          label1={"Nome"}
          label2={"Email"}
          buttonTitle={"Cadastrar"}
          label3={"Cadastrar monitores via arquivo CSV"}
          isMonitorModal={true}
          className="overflow-y-scroll"
          isMonitorScreen={true}
        /> */}

        <ModalGerenciarHoraMonitor
          title={"Gerenciar Horários"}
          description={"Cadastre e atualize horários de monitoria"}
        />

        <Link href="/ranking">
          <Dialog>
            <DialogTrigger>
              <CardUsuarios
                title={"Ranking de Alunos"}
                description={"Vizualize o ranking de alunos"}
              />
            </DialogTrigger>
          </Dialog>
        </Link>
      </div>
    </main>
  );
}
