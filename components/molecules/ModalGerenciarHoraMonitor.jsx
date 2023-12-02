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

export const ModalGerenciarHoraMonitor = ({ title, description }) => {
  const nomeEmailForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
                <Button className="w-full" type="submit">
                  Cadastrar
                </Button>
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
