"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { DialogHeader, DialogContent } from "../ui/dialog";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";

const disTituloDescSchema = z.object({
  disciplina: z.string({ required_error: "Selecione uma disciplina." }),
  tituloExercicio: z
    .string()
    .min(3, "Título muito curto")
    .max(50, "Título muito longo"),
  descricaoExercicio: z
    .string()
    .min(3, "Descrição muito curta")
    .max(500, "Descrição muito longa"),
});

async function getdata() {
  const res = await fetch("http://127.0.0.1:8080/consultar_disciplina");
  const disciplina = await res.json();
  return disciplina;
}

export const CardExercicios =  ({ isMonitorScreenExModal }) => {
  const { toast } = useToast();
  const disTituloDescForm = useForm({
    resolver: zodResolver(disTituloDescSchema),
    defaultValues: {
      disciplina: "",
      tituloExercicio: "",
      descricaoExercicio: "",
    },
  });

  let [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const disciplinaData = await getdata();
        setDisciplinas(disciplinaData);
        disciplinas = disciplinaData
        console.log(disciplinas)
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);

  async function onSubmit(data) {
    const { disciplina, tituloExercicio, descricaoExercicio } = data;
    const url = `http://127.0.0.1:8080/cadastro_exercicio/${disciplina}/${tituloExercicio}/${descricaoExercicio}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(users)
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    toast({
      title: "Exercício cadastrado com sucesso!",
      description: (
        <div>
          <p>Disciplina: {data.disciplina}</p>
          <p>Título: {data.tituloExercicio}</p>
          <p>Descrição: {data.descricaoExercicio}</p>
        </div>
      ),
    });
    console.log("Dados do formulário:", data);
    
  }

  return (
    
    <DialogContent className="sm:max-w-[325px] md:max-w-[425px]">
      <DialogHeader className="flex flex-col content-evenly pt-2 pb-3">
        <Form {...disTituloDescForm}>
          <form
            onSubmit={disTituloDescForm.handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
            <FormField
              control={disTituloDescForm.control}
              name="disciplina"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disciplina</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="disciplina1" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {disciplinas.map((disciplina, index) => (
                        <SelectItem key={index} value={disciplina}>
                          {disciplina}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={disTituloDescForm.control}
              name="tituloExercicio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título do exercício</FormLabel>
                  <FormControl>
                    <Input placeholder="Título" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={disTituloDescForm.control}
              name="descricaoExercicio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição do exercício</FormLabel>
                  <FormControl>
                    <Textarea
                      className="max-h-72 "
                      placeholder="Escreva o exercício neste espaço"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button className="w-full" type="submit">
                Salvar exercício
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogHeader>
      {isMonitorScreenExModal && (
        <Link className="w-full" href="monitor/exercicios">
          <Button className="w-full" variant="secondary">
            Visualizar exercícios
          </Button>
        </Link>
      )}
    </DialogContent>
  );
};
