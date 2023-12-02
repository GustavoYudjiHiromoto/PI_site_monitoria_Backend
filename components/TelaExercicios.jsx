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
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}
async function getusers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function TelaExercicios({
  modifyAccess,
  viewOnly,
  isProfessor,
}) {
  const posts = await getdata();
  const users = await getusers();

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
                <SelectItem value="automatos">
                  Teoria da Computação, Autômatos e Linguagens Formais
                </SelectItem>
                <SelectItem value="multiplataforma">
                  Desenvolvimento Multiplataforma
                </SelectItem>
                <SelectItem value="engenhariaSoftware">
                  Engenharia de Software
                </SelectItem>
                <SelectItem value="algebraLinear">
                  Álgebra Linear e Geometria Analítica
                </SelectItem>
                <SelectItem value="NoSQL">
                  Banco de Dados NoSQL e Big Data
                </SelectItem>
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
            <Dialog key={post.id}>
              <DialogTrigger>
                <CardTelaExercicio title={post.title} />
              </DialogTrigger>
              <DialogContent className="flex flex-col w-full overflow-auto max-h-screen">
                <DialogHeader>{post.title}</DialogHeader>
                <DialogDescription className="">{post.body}</DialogDescription>
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
                          name={user.name}
                          body={post.body}
                          id={user.id}
                          modifyAccess={modifyAccess}
                          viewOnly={viewOnly}
                        />
                      ))
                    ) : (
                      <ModalTelaExercicios
                        key={post.id}
                        name={post.title}
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
