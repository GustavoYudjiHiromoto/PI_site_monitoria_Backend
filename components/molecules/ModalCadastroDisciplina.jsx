"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { CardUsuarios } from "./CardUsuarios";
import { CardExercicios } from "./CardExercicios";
import { useToast } from "../ui/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";

const codENomeSchema = z.object({
  codDisciplina: z
    .string()
    .min(3, "Nome muito curto")
    .max(20, "Nome muito longo"),
  nomeDisciplina: z
    .string()
    .min(3, "Nome muito curto")
    .max(50, "Nome muito longo"),
});

export const ModalCadastroDisciplina = () => {
  const { toast } = useToast();
  const codENomeForm = useForm({
    resolver: zodResolver(codENomeSchema),
    defaultValues: {
      codDisciplina: "",
      nomeDisciplina: "",
    },
  });

  function onSubmit(data) {
    const { codDisciplina, nomeDisciplina } = data;
    const url = `http://127.0.0.1:8080/cadastro_disciplinas/${codDisciplina}/${nomeDisciplina}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("foi")
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    toast({
      title: "Disciplina cadastrada com sucesso!",
      description: (
        <div>
          <p>Código: {data.codDisciplina}</p>
          <p>Nome: {data.nomeDisciplina}</p>
        </div>
      ),
    });
    console.log("Dados do formulário:", data);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <CardUsuarios
          title="Gerenciar Disciplinas"
          description="Cadastre e crie exercícios para a disciplina"
        />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[325px] md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="pb-3">Gerenciar Disciplinas</DialogTitle>
          <Form {...codENomeForm}>
            <form
              onSubmit={codENomeForm.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={codENomeForm.control}
                name="codDisciplina"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Código da disciplina</FormLabel>
                    <FormControl>
                      <Input placeholder="Código" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={codENomeForm.control}
                name="nomeDisciplina"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da disciplina</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogClose asChild>
                <Button className="w-full" type="submit">
                  Cadastrar
                </Button>
              </DialogClose>
              <div>
                <Dialog>
                  <DialogTrigger className="w-full mb-4" asChild>
                    <Button className="w-full" variant="secondary">
                      Cadastre exercicios para uma disciplina
                    </Button>
                  </DialogTrigger>
                  <CardExercicios title="Cadastre exercicios para uma disciplina" />
                </Dialog>
                <Link className="w-full" href="admin/exercicios">
                  <Button className="w-full" variant="secondary">
                    Visualizar exercícios
                  </Button>
                </Link>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
