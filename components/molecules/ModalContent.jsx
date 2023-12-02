"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ModalCardHorarios } from "@/components/molecules/ModalCardHorarios";
import { ModalCardExercicios } from "@/components/molecules/ModalCardExercicios";
import Link from "next/link";

const nomeESenhaSchema = z.object({
  name: z.string().min(3, "Nome muito curto").max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
});

export const ModalContent = ({
  modalTitle,
  label1,
  label2,
  label3,
  buttonTitle,
  isMonitorModal,
  isDisciplinaModal,
  isMonitorScreen,
}) => {
  const nomeEmailForm = useForm({
    resolver: zodResolver(nomeESenhaSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <DialogContent className="sm:max-w-[325px] md:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{modalTitle}</DialogTitle>
        <div className="flex flex-col py-4">
          {isMonitorScreen ? (
            <></>
          ) : (
            <div>
              <div className="flex flex-col py-4 gap-4">
                <Label htmlFor="name" className="text-start">
                  {label1}
                </Label>
                {isDisciplinaModal ? (
                  <Input id="codigo" placeholder="Código da disciplina" />
                ) : (
                  <Input id="name" placeholder="Nome completo" />
                )}
              </div>
              <div className="flex flex-col gap-4">
                <Label htmlFor="E-mail" className="text-start">
                  {label2}
                </Label>
                {isDisciplinaModal ? (
                  <Input id="name" placeholder="Nome da disciplina" />
                ) : (
                  <Input
                    type="email"
                    id="e-mail"
                    placeholder="00-00000-00@maua.br"
                  />
                )}
              </div>
            </div>
          )}
          {isMonitorModal && (
            <div className="flex justify-center mt-4 sm:max-w-full">
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
                <TabsContent value="Segunda-feira">
                  <div className="flex justify-between">
                    <ModalCardHorarios
                      title="Horário presencial"
                      description="Segunda-feira"
                    />
                    <ModalCardHorarios
                      title="Horário online"
                      description="Segunda-feira"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="Terça-feira">
                  <div className="flex justify-between">
                    <ModalCardHorarios
                      title="Horário presencial"
                      description="Terça-feira"
                    />
                    <ModalCardHorarios
                      title="Horário online"
                      description="Terça-feira"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="Quarta-feira">
                  <div className="flex justify-between">
                    <ModalCardHorarios
                      title="Horário presencial"
                      description="Quarta-feira"
                    />
                    <ModalCardHorarios
                      title="Horário online"
                      description="Quarta-feira"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="Quinta-feira">
                  <div className="flex justify-between">
                    <ModalCardHorarios
                      title="Horário presencial"
                      description="Quinta-feira"
                    />
                    <ModalCardHorarios
                      title="Horário online"
                      description="Quinta-feira"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="Sexta-feira">
                  <div className="flex justify-between">
                    <ModalCardHorarios
                      title="Horário presencial"
                      description="Sexta-feira"
                    />
                    <ModalCardHorarios
                      title="Horário online"
                      description="Sexta-feira"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          <div className="flex flex-col gap-6 mt-4">
            <Button>{buttonTitle}</Button>
            {!isMonitorModal && !isDisciplinaModal && (
              <div>
                <Label htmlFor="CSV_cadastro">{label3}</Label>
                <Input
                  className="cursor-pointer"
                  id="CSV_cadastro"
                  type="file"
                />
              </div>
            )}
            {isMonitorModal && (
              <Link className="w-full" href="/horario_monitor">
                <Button className="w-full" variant="secondary">
                  Visualizar Horários dos Monitores
                </Button>
              </Link>
            )}
            {isDisciplinaModal && (
              <ModalCardExercicios title="Cadastre exercicios para uma disciplina"></ModalCardExercicios>
            )}
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  );
};
