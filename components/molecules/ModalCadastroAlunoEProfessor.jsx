"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
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
import { DialogClose } from "@radix-ui/react-dialog";
import { useToast } from "../ui/use-toast";

const nomeESenhaSchema = z.object({
  name: z.string().min(3, "Nome muito curto").max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
});

export const ModalCadastroAlunoEProfessor = ({
  title,
  description,
  isAluno,
}) => {
  const { toast } = useToast();
  const nomeEmailForm = useForm({
    resolver: zodResolver(nomeESenhaSchema),
    defaultValues: {
      name: "",
      email: ""
    },
  });

  function onSubmit(data) {
    const { name, email } = data;
    let url = ''
    if (isAluno) {
      let pontuacao = 0
       url = `http://127.0.0.1:8080/cadastro_aluno/${name}/${email}/${pontuacao}`;
    }else{
       url = `http://127.0.0.1:8080/cadastro_professor/${name}/${email}`;
    }
    
    

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("foi")
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    toast({
      title: isAluno
        ? "Aluno cadastrado com sucesso!"
        : "Professor cadastrado com sucesso!",
      description: (
        <div>
          <p>Nome: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      ),
    });
    
    console.log("Dados do formulário:", data);
  }
  return (
    <Dialog>
      <DialogTrigger>
        <CardUsuarios title={title} description={description} />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[325px] md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="pb-3">{title}</DialogTitle>
          <FormProvider {...nomeEmailForm}>
            <form
              onSubmit={nomeEmailForm.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={nomeEmailForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={nomeEmailForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
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
              <DialogClose asChild>
                <div>
                  <FormLabel htmlFor="CSV_cadastro">
                    Cadastre usando arquivo CSV
                  </FormLabel>
                  <Input
                    className="cursor-pointer"
                    id="CSV_cadastro"
                    type="file"
                  />
                </div>
              </DialogClose>
            </form>
          </FormProvider>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
