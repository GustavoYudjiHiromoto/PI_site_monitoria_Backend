"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

import { Navbar } from "@/components/organisms/Navbar";
import { ModalCadastro } from "@/components/organisms/ModalCadastro";
import { CardUsuarios } from "@/components/molecules/CardUsuarios";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">
          Bem vindo aluno
        </p>
      </div>
      <div className="lg:max-w-3xl flex flex-wrap align max-w-5xl w-full justify-center gap-y-3 gap-x-5 pt-12">
        <Link href="/ranking">
          <Dialog>
            <DialogTrigger>
              <CardUsuarios
                onClick={() => {}}
                title={"Ranking de Alunos"}
                description={"Visualize o ranking de alunos"}
              />
            </DialogTrigger>
          </Dialog>
        </Link>
        <Link href="horario_monitor">
          <Dialog>
            <DialogTrigger>
              <CardUsuarios
                onClick={() => {}}
                title={"Horário dos Monitores"}
                description={"Visualize os horários dos monitores"}
              />
            </DialogTrigger>
          </Dialog>
        </Link>
        <Link href="aluno/exercicios">
          <Dialog>
            <DialogTrigger>
              <CardUsuarios
                onClick={() => {}}
                title={"Consultar Exercícios"}
                description={"Visualize os exercícios"}
              />
            </DialogTrigger>
          </Dialog>
        </Link>
      </div>
    </main>
  );
}
