"use client";
import { Navbar } from "./organisms/Navbar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { CardExercicios } from "./molecules/CardExercicios";
import { CardTelaExercicio } from "./molecules/CardTelaExercicio";

import { ModalTelaExercicios } from "./molecules/ModalTelaExercicios";
async function getdata() {
  const res = await fetch("http://127.0.0.1:8080/consultar_exercicio");
  const posts = await res.json();
  return posts;
}
async function getusers() {
  const res = await fetch("http://127.0.0.1:8080/consultar_alunos");
  const users = await res.json();
  return users;
}

async function getdisci() {
  const res = await fetch("http://127.0.0.1:8080/consultar_disciplina");
  const disciplina = await res.json();
  return disciplina;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function TelaExercicios({
  modifyAccess,
  viewOnly,
  isProfessor,
}) {
  const posts = await getdata();
  const users = await getusers();
  const disciplina = await getdisci()
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans scroll-smooth">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">Exercícios</p>
      </div>
      <div>
        <div className="pb-4 flex flex-col justify-between md:flex-row gap-4">
          <Select>
            <SelectTrigger className="lg:w-1/3 md:w-1/2 sm:w-full">
              <SelectValue placeholder="Selecione uma disciplina" />
            </SelectTrigger>
            <SelectContent className="w-80 md:w-full">
              <SelectGroup>
                <SelectLabel>Disciplinas</SelectLabel>
                {disciplina.map((disciplina, index) => (
                        <SelectItem key={index} value={disciplina}>
                          {disciplina}
                        </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {modifyAccess && !isProfessor && (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Cadastrar novo exercício</Button>
              </DialogTrigger>
              <CardExercicios />
            </Dialog>
          )}
        </div>
        <div className="flex flex-col gap-8 mt-5">
          {posts.map((post) => (
            <Dialog key={post.tituloExercicio}>
              <DialogTrigger>
                <CardTelaExercicio title={post.tituloExercicio} />
              </DialogTrigger>
              <DialogContent className="flex flex-col w-full overflow-auto max-h-screen">
                <DialogHeader>{post.tituloExercicio}</DialogHeader>
                <DialogDescription className="">{post.descricaoExercicio}</DialogDescription>
                <Dialog>
                  <DialogTrigger>
                    <Button className="flex w-full">
                      {modifyAccess ? "Visualizar respostas" : "Responder"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="overflow-auto max-h-screen pt-12">
                    {modifyAccess ? (
                      users.map((user) => (
                        <ModalTelaExercicios
                          key={user.id}
                          nomealuno={user}
                          body={post.body}
                          id={user.id}
                          modifyAccess={modifyAccess}
                          viewOnly={viewOnly}
                        />
                      ))
                    ) : (
                      <ModalTelaExercicios
                        key={post.id}
                        nomealuno={user}
                        body={post.body}
                        id={post.id}
                        modifyAccess={modifyAccess}
                        viewOnly={viewOnly}
                      />
                    )}
                  </DialogContent>
                </Dialog>
                {!isProfessor && (
                  <div className="flex justify-evenly gap-2">
                    <Button className="w-1/2" variant="secondary">
                      Editar
                    </Button>
                    <Button className="w-1/2" variant="destructive">
                      Excluir
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </main>
  );
}
