"use client";

import Link from "next/link";
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
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { CardUsuarios } from "./CardUsuarios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useToast } from "../ui/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";

const timeField = () => {
  return z
    .string()
    .nullable()
    .refine(
      (value) => !value || /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value),
      "Formato de hora inválido"
    );
};

const formSchema = z.object({
  name: z.string().min(3, "Nome muito curto").max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
  horaIniSegPresencial: timeField(),
  horaFimSegPresencial: timeField(),
  horaIniSegOnline: timeField(),
  horaFimSegOnline: timeField(),
  horaIniTerPresencial: timeField(),
  horaFimTerPresencial: timeField(),
  horaIniTerOnline: timeField(),
  horaFimTerOnline: timeField(),
  horaIniQuaPresencial: timeField(),
  horaFimQuaPresencial: timeField(),
  horaIniQuaOnline: timeField(),
  horaFimQuaOnline: timeField(),
  horaIniQuiPresencial: timeField(),
  horaFimQuiPresencial: timeField(),
  horaIniQuiOnline: timeField(),
  horaFimQuiOnline: timeField(),
  horaIniSexPresencial: timeField(),
  horaFimSexPresencial: timeField(),
  horaIniSexOnline: timeField(),
  horaFimSexOnline: timeField(),
});

export const ModalCadastroMonitor = ({ title, description }) => {
  const { toast } = useToast();
  const nomeEmailForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      horaIniSegPresencial: "",
      horaFimSegPresencial: "",
      horaIniSegOnline: "",
      horaFimSegOnline: "",
      horaIniTerPresencial: "",
      horaFimTerPresencial: "",
      horaIniTerOnline: "",
      horaFimTerOnline: "",
      horaIniQuaPresencial: "",
      horaFimQuaPresencial: "",
      horaIniQuaOnline: "",
      horaFimQuaOnline: "",
      horaIniQuiPresencial: "",
      horaFimQuiPresencial: "",
      horaIniQuiOnline: "",
      horaFimQuiOnline: "",
      horaIniSexPresencial: "",
      horaFimSexPresencial: "",
      horaIniSexOnline: "",
      horaFimSexOnline: "",
    },
  });

  function onSubmit(data) {
    let { name, email,
      horaIniSegPresencial, 
      horaFimSegPresencial, 
      horaIniSegOnline, 
      horaFimSegOnline,
      horaIniTerPresencial,
      horaFimTerPresencial,
      horaIniTerOnline,
      horaFimTerOnline,
      horaIniQuaPresencial,
      horaFimQuaPresencial,
      horaIniQuaOnline,
      horaFimQuaOnline,
      horaIniQuiPresencial,
      horaFimQuiPresencial,
      horaIniQuiOnline,
      horaFimQuiOnline,
      horaIniSexPresencial,
      horaFimSexPresencial,
      horaIniSexOnline,
      horaFimSexOnline,} = data;

      if (horaIniSegPresencial == "") {
        horaIniSegPresencial = "00:00";
      } 
       if (horaFimSegPresencial === "") {
        horaFimSegPresencial = "00:00";
      } 
       if (horaIniSegOnline === "") {
        horaIniSegOnline = "00:00";
      } 
       if (horaFimSegOnline === "") {
        horaFimSegOnline = "00:00";
      }
      
      if (horaIniTerPresencial === "") {
        horaIniTerPresencial = "00:00";
      }
       if (horaFimTerPresencial === "") {
        horaFimTerPresencial = "00:00";
      } 
       if (horaIniTerOnline === "") {
        horaIniTerOnline = "00:00";
      }
       if (horaFimTerOnline === "") {
        horaFimTerOnline = "00:00";
      }
      
      if (horaIniQuaPresencial === "") {
        horaIniQuaPresencial = "00:00";
      }
       if (horaFimQuaPresencial === "") {
        horaFimQuaPresencial = "00:00";
      } 
       if (horaIniQuaOnline === "") {
        horaIniQuaOnline = "00:00";
      }
       if (horaFimQuaOnline === "") {
        horaFimQuaOnline = "00:00";
      }
      
      if (horaIniQuiPresencial === "") {
        horaIniQuiPresencial = "00:00";
      }
       if (horaFimQuiPresencial === "") {
        horaFimQuiPresencial = "00:00";
      } 
       if (horaIniQuiOnline === "") {
        horaIniQuiOnline = "00:00";
      }
       if (horaFimQuiOnline === "") {
        horaFimQuiOnline = "00:00";
      }
      
      if (horaIniSexPresencial === "") {
        horaIniSexPresencial = "00:00";
      }
       if (horaFimSexPresencial === "") {
        horaFimSexPresencial = "00:00";
      } 
       if (horaIniSexOnline === "") {
        horaIniSexOnline = "00:00";
      }
       if (horaFimSexOnline === "") {
        horaFimSexOnline = "00:00";
      }

      const url = `http://127.0.0.1:8080/cadastro_monitor/${name}/${email}/${horaIniSegPresencial}/${horaFimSegPresencial}/${horaIniSegOnline}/${horaFimSegOnline}/${horaIniTerPresencial}/${horaFimTerPresencial}/${horaIniTerOnline}/${horaFimTerOnline}/${horaIniQuaPresencial}/${horaFimQuaPresencial}/${horaIniQuaOnline}/${horaFimQuaOnline}/${horaIniQuiPresencial}/${horaFimQuiPresencial}/${horaIniQuiOnline}/${horaFimQuiOnline}/${horaIniSexPresencial}/${horaFimSexPresencial}/${horaIniSexOnline}/${horaFimSexOnline}`;
    

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("foi")
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    toast({
      title: "Monitor cadastrado com sucesso!",
      description: (
        <div>
          <p>Nome: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      ),
    });
    console.log(data);
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
                    <FormMessage name="name" />
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
                    <FormMessage name="email" />
                  </FormItem>
                )}
              />
              <div className="flex justify-center mt-4 ">
                <Tabs
                  defaultValue="Segunda-feira"
                  className="flex flex-col w-full"
                >
                  <TabsList className="flex justify-evenly">
                    <TabsTrigger value="Segunda-feira">Seg</TabsTrigger>
                    <TabsTrigger value="Terça-feira">Ter</TabsTrigger>
                    <TabsTrigger value="Quarta-feira">Qua</TabsTrigger>
                    <TabsTrigger value="Quinta-feira">Qui</TabsTrigger>
                    <TabsTrigger value="Sexta-feira">Sex</TabsTrigger>
                  </TabsList>

                  {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

                  <TabsContent value="Segunda-feira">
                    <div className="flex flex-row justify-between gap-3">
                      <div className="flex flex-col justify-between w-full">
                        <Label className="text-center">Presencial</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniSegPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário segunda"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaSegunda" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimSegPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário segunda"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaSegunda" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Separator
                        orientation="vertical"
                        className="w-[2px] h-"
                      />
                      <div className="flex flex-col w-full justify-evenly">
                        <Label className="text-center">Online</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniSegOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário segunda"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaSegunda" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimSegOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário segunda"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaSegunda" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex  justify-between"></div>
                  </TabsContent>

                  {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

                  <TabsContent value="Terça-feira">
                    <div className="flex flex-row justify-between gap-3">
                      <div className="flex flex-col justify-between w-full">
                        <Label className="text-center">Presencial</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniTerPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário terça"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaTerca" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimTerPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário terça"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaTerca" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Separator
                        orientation="vertical"
                        className="w-[2px] h-"
                      />
                      <div className="flex flex-col w-full justify-evenly">
                        <Label className="text-center">Online</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniTerOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário terça"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaTerca" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimTerOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário terça"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaTerca" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex  justify-between"></div>
                  </TabsContent>

                  {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

                  <TabsContent value="Quarta-feira">
                    <div className="flex flex-row justify-between gap-3">
                      <div className="flex flex-col justify-between w-full">
                        <Label className="text-center">Presencial</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniQuaPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário quarta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaQuarta" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimQuaPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário quarta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaQuarta" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Separator
                        orientation="vertical"
                        className="w-[2px] h-"
                      />
                      <div className="flex flex-col w-full justify-evenly">
                        <Label className="text-center">Online</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniQuaOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário quarta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaQuarta" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimQuaOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário quarta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaQuarta" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex  justify-between"></div>
                  </TabsContent>

                  {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

                  <TabsContent value="Quinta-feira">
                    <div className="flex flex-row justify-between gap-3">
                      <div className="flex flex-col justify-between w-full">
                        <Label className="text-center">Presencial</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniQuiPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário quinta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaQuinta" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimQuiPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário quinta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaQuinta" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Separator
                        orientation="vertical"
                        className="w-[2px] h-"
                      />
                      <div className="flex flex-col w-full justify-evenly">
                        <Label className="text-center">Online</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniQuiOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário quinta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaQuinta" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimQuiOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário quinta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaQuinta" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex  justify-between"></div>
                  </TabsContent>

                  {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

                  <TabsContent value="Sexta-feira">
                    <div className="flex flex-row justify-between gap-3">
                      <div className="flex flex-col justify-between w-full">
                        <Label className="text-center">Presencial</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniSexPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário sexta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaSexta" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimSexPresencial"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário sexta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaSexta" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Separator
                        orientation="vertical"
                        className="w-[2px] h-"
                      />
                      <div className="flex flex-col w-full justify-evenly">
                        <Label className="text-center">Online</Label>
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaIniSexOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário início</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário sexta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaSexta" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={nomeEmailForm.control}
                          name="horaFimSexOnline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário fim</FormLabel>
                              <FormControl>
                                <Input
                                  type="time"
                                  placeholder="Horário sexta"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage name="horaSexta" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex  justify-between"></div>
                  </TabsContent>

                  {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
                </Tabs>
              </div>
              <div className="flex flex-col gap-3">
                <DialogClose asChild>
                  <Button className="w-full" type="submit">
                    Cadastrar
                  </Button>
                </DialogClose>
                <Link className="w-full" href="/horario_monitor">
                  <Button className="w-full" variant="secondary">
                    Visualizar Horários dos Monitores
                  </Button>
                </Link>
              </div>
            </form>
          </FormProvider>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
