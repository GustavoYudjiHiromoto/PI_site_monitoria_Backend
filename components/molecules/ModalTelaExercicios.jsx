"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";

const FormSchema = z.object({
  resposta: z.string().min(10, {
    message: "A resposta deve ter no mínimo 10 caracteres.",
  }),
});

// async function getusers() {
//   const res = await fetch("http://127.0.0.1:8080/consultar_alunos");
//   const users = await res.json();
//   return users;
// }

// let [users, setusers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userData = await getdata();
//         setusers(userData);
//         users = userData
//         console.log(users)
//       } catch (error) {
//         console.error("Erro ao obter dados:", error);
//       }
//     };

//     fetchData();
//   }, []);

const FormSchemaNota = z.object({
  nota: z
    .string()
    .refine((value) => !isNaN(parseInt(value)), {
      message: "A nota deve ser um número válido.",
    })
    .transform((value) => {
      const intValue = parseInt(value);
      return intValue;
    }),
});

export const ModalTelaExercicios = ({
  viewOnly,
  modifyAccess,
  nomealuno,
  body,
  id,
}) => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      resposta: "",
    },
  });

  const formNota = useForm({
    resolver: zodResolver(FormSchemaNota),
    defaultValues: {
      nota: 0,
    },
  });

  function onSubmit(data) {

  //   const { resposta, emailaluno } = data;
  //   const url = `http://127.0.0.1:8080/cadastro_resposta/${resposta}/${emailaluno}`;

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(users)
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });

  //   toast({
  //     description: "Resposta enviada com sucesso!",
  //   });
  //   console.log(data);
 }

  function onSubmitNota(data) {
    toast({
      title: "Nota atribuída com sucesso!",
      description: (
        <div>
          <p>Nota: {data.nota}</p>
        </div>
      ),
    });
    console.log(data);
  }

  return (
    <div>
      {modifyAccess ? (
        <Card key={id} className="flex w-full">
          <CardContent className="flex flex-row items-center p-2 flex-grow justify-between">
            <CardTitle className="text-start text-sm">{nomealuno}</CardTitle>
            <Dialog>
              <DialogTrigger>
                <Button>Resposta</Button>
              </DialogTrigger>
              <DialogContent className="overflow-auto max-h-screen">
                <DialogHeader>Resposta de {nomealuno}</DialogHeader>
                <DialogDescription className="flex flex-col gap-3">
                  AFND

                  {!viewOnly && (
                    <>
                      <FormProvider {...formNota}>
                        <form
                          className="w-full space-y-3"
                          onSubmit={formNota.handleSubmit(onSubmitNota)}
                        >
                          <FormField
                            control={formNota.control}
                            name="nota"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Atribuir Nota</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    min="0"
                                    max="10"
                                    placeholder="Insira aqui a nota"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage name="nota" />
                              </FormItem>
                            )}
                          />
                          <DialogClose asChild>
                            <Button className="w-full" type="submit">
                              Enviar
                            </Button>
                          </DialogClose>
                        </form>
                      </FormProvider>
                    </>
                  )}
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ) : (
        <Card key={id}>
          <CardContent className="flex flex-col items-center p-2 flex-grow justify-between gap-3">
            <CardTitle className="text-start text-sm">{nomealuno}</CardTitle>
            <CardDescription>{body}</CardDescription>
            <FormProvider {...form}>
              <form
                className="w-full space-y-3"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="resposta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resposta</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Insira aqui sua resposta"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage name="resposta" />
                    </FormItem>
                  )}
                />
                <DialogClose asChild>
                  <Button className="w-full" type="submit">
                    Enviar
                  </Button>
                </DialogClose>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
