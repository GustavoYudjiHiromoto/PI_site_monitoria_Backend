"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

import { Navbar } from "@/components/organisms/Navbar";
import { CardUsuarios } from "@/components/molecules/CardUsuarios";
import { ModalCadastroAlunoEProfessor } from "@/components/molecules/ModalCadastroAlunoEProfessor";
import { ModalCadastroDisciplina } from "@/components/molecules/ModalCadastroDisciplina";
import { ModalCadastroMonitor } from "@/components/molecules/ModalCadastroMonitor";

export default function HomeAdmin() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">
          Bem vindo professor
        </p>
      </div>
      <div className="flex flex-wrap align max-w-5xl w-full justify-center gap-y-3 gap-x-5 pt-12">
        <ModalCadastroAlunoEProfessor
          title={"Cadastrar Alunos"}
          description={"Cadastrar um ou mais alunos"}
          isAluno={true}
        />

        <ModalCadastroAlunoEProfessor
          title={"Cadastrar Professores"}
          description={"Cadastrar um ou mais professores"}
        />

        <ModalCadastroMonitor
          title={"Gerenciar Monitores"}
          description={"Cadastre monitores e seus horários"}
        />

        <ModalCadastroDisciplina />

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
