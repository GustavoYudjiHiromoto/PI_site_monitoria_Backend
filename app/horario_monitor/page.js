"use client";
import React from 'react';

import { Navbar } from "@/components/organisms/Navbar";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

async function getdata() {
  const res = await fetch("http://127.0.0.1:8080/consultar_horario");
  const users = await res.json();
  return users;

  <TableBody>
  {users.map((user) => (
    <TableRow className="text-center " key={user.id}>
      <TableCell className="font-medium py-5">{user.id}</TableCell>
      <TableCell className="py-5">{user.nome}</TableCell>
      <TableCell className="text-center py-5">{user.id}</TableCell>
    </TableRow>
  ))}
</TableBody>
}

export default async function TelaMonitor() {
  const users = await getdata();
  const MonitorPresencial = [
    {
      Monitor: "Ana Luisa da Silva",
      Segunda: ['13h30 às 16h30'],
      Terca: null,
      Quarta: null,
      Quinta: ['13h30 às 15h30'],
      Sexta: null,
    },
    {
      Monitor: "Carlos Henrique Lucena Barros",
      Segunda: ['14h00 às 16h30'],
      Terca: null,
      Quarta: ['14h00 às 16h30'],
      Quinta: null,
      Sexta: null,
    },
    {
      Monitor: "Débora Witkowski",
      Segunda: ['15h00 às 16h00'],
      Terca: null,
      Quarta: null,
      Quinta: null,
      Sexta: ['13h10 às 17h10'],
    },
    {
      Monitor: "Gustavo Lourenço Losada",
      Segunda: ['13h00 às 16h00'],
      Terca: ['13h00 às 14h00'],
      Quarta: ['13h00 às 14h00'],
      Quinta: null,
      Sexta: null,
    },
    {
      Monitor: "Leonardo Cazotto Stuber",
      Segunda: ['13h30 às 16h30'],
      Terca: null,
      Quarta: null,
      Quinta: null,
      Sexta: ['13h00 às 15h00'],
    },
    {
      Monitor: "Mateus Capaldo",
      Segunda: ['14h00 às 16h00'],
      Terca: null,
      Quarta: null,
      Quinta: ['13h00 às 16h00'],
      Sexta: null,
    },
    {
      Monitor: "Luigi Guimarães Trevisan",
      Segunda: ['13h00 às 16h00'],
      Terca: ['13h00 às 16h00'],
      Quarta: ['13h00 às 16h00'],
      Quinta: ['13h00 às 16h00'],
      Sexta: null,
    },

  ];

  const MonitorOnline = [
    {
      Monitor: "Ana Luisa da Silva",
      Segunda: null,
      Terca: null,
      Quarta: ['13h00 às 15h30'],
      Quinta: null,
      Sexta: ['14h00 às 16h30'],
    },
    {
      Monitor: "Carlos Henrique Lucena Barros",
      Segunda: ['18h30 às 20h00'],
      Terca: ['14h30 às 16h30', '19h00 às 20h30'],
      Quarta: null,
      Quinta: null,
      Sexta: null,
    },
    {
      Monitor: "Débora Witkowski",
      Segunda: null,
      Terca: ['15h30 às 16h30'],
      Quarta: ['14h30 às 17h30'],
      Quinta: ['13h30 às 15h30'],
      Sexta: null,
    },
    {
      Monitor: "Gustavo Lourenço Losada",
      Segunda: null,
      Terca: ['14h30 às 15h30'],
      Quarta: ['14h30 às 16h30'],
      Quinta: null,
      Sexta: ['13h30 às 15h30'],
    },
    {
      Monitor: "Leonardo Cazotto Stuber",
      Segunda: null,
      Terca: null,
      Quarta: null,
      Quinta: ['15h30 às 20h30'],
      Sexta: null,
    },
    {
      Monitor: "Mateus Capaldo",
      Segunda: null,
      Terca: ['19h00 às 20h30'],
      Quarta: ['19h00 às 20h30'],
      Quinta: null,
      Sexta: ['13h30 às 15h30'],
    },
    {
      Monitor: "Luigi Guimarães Trevisan",
      Segunda: ['16h30 às 17h30'],
      Terca: ['16h30 às 17h30'],
      Quarta: ['16h30 às 17h30'],
      Quinta: ['16h30 às 17h30'],
      Sexta: ['16h30 às 17h30'],
    },
  ]

  const DropdownMonitor = () => [
      <DropdownMenu key="dropdown">
        <DropdownMenuTrigger key="trigger" asChild><Button variant="outline">Selecionar</Button></DropdownMenuTrigger>
        <DropdownMenuContent key="content">
          <DropdownMenuItem key="ana" onClick={() => window.location.href = 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGNhNWE2MTktN2RmMS00MTA2LTliYzItOTYyM2IxZGFhZDcy%40thread.v2/0?context=%7b%22Tid%22%3a%22c49e1939-4b53-4738-bb64-41fb2990e41c%22%2c%22Oid%22%3a%2235b6ebae-3bf1-42bc-bf2a-4bf1eecc4aa5%22%7d'}>Ana Luisa</DropdownMenuItem>
          <DropdownMenuItem key="carlos" onClick={() => window.location.href = 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWU1ZWNmZjItNjQ4NC00YTEyLWFlYjEtZGJkNzRkNWM0NmI3%40thread.v2/0?context=%7b%22Tid%22%3a%22c49e1939-4b53-4738-bb64-41fb2990e41c%22%2c%22Oid%22%3a%221215aab8-89b9-4984-bfa1-38600c62fd57%22%7d'}>Carlos</DropdownMenuItem>
          <DropdownMenuItem key="carlos" onClick={() => window.location.href = 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTNkOThkMGUtNzVhYy00NjhkLWI0ZDEtZTc2NTk0YmFhMTVl%40thread.v2/0?context=%7b%22Tid%22%3a%22c49e1939-4b53-4738-bb64-41fb2990e41c%22%2c%22Oid%22%3a%22889acaa5-6d04-47b8-ba06-ba8ef1197c8a%22%7d'}>Débora</DropdownMenuItem>
          <DropdownMenuItem key="carlos" onClick={() => window.location.href = 'https://teams.microsoft.com/l/meetup-join/19:meeting_NWJlMTA2Y2ItNGE1MC00YWVlLTg3ZmItYmQxMjk1ZjI0NzRi@thread.v2/0?context=%7B%22Tid%22:%22c49e1939-4b53-4738-bb64-41fb2990e41c%22,%22Oid%22:%224d773a7b-f572-434d-b9c3-1af7afb55cc4%22%7D'}>Gustavo</DropdownMenuItem>
          <DropdownMenuItem key="carlos" onClick={() => window.location.href = 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzU1MGY1Y2EtODkyZi00MzJkLWI4ODgtOTY2MTY2N2ViNzBi%40thread.v2/0?context=%7b%22Tid%22%3a%22c49e1939-4b53-4738-bb64-41fb2990e41c%22%2c%22Oid%22%3a%2220f4627d-ee46-436b-a724-fad8c223e30c%22%7d'}>Leonardo</DropdownMenuItem>
          <DropdownMenuItem key="carlos" onClick={() => window.location.href = 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDM5OWU1NjYtODU0OC00NjAzLWFkZjEtNDBiOTE4MWFmMmZh%40thread.v2/0?context=%7b%22Tid%22%3a%22c49e1939-4b53-4738-bb64-41fb2990e41c%22%2c%22Oid%22%3a%2225190100-ae73-45dd-8afe-a6a300deea87%22%7d'}>Mateus</DropdownMenuItem>
          <DropdownMenuItem key="carlos" onClick={() => window.location.href = 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjhlNGFmMTMtZDViYS00Mzg1LTk3ZGUtOTFjNTIyZmIyYzlm%40thread.v2/0?context=%7b%22Tid%22%3a%22c49e1939-4b53-4738-bb64-41fb2990e41c%22%2c%22Oid%22%3a%22bc3255b7-fc18-4455-bfcd-548182525f4e%22%7d'}>Luigi</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  ]

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans scroll-smooth">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">
          Horários dos Monitores
        </p>
      </div>
      <div className="flex justify-start w-full ">
        <Tabs defaultValue="presencial" className="w-full px-0 lg:px-24">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presencial">Presencial</TabsTrigger>
            <TabsTrigger value="online">Online</TabsTrigger>
          </TabsList>
          <TabsContent value="presencial" className='overflow-scroll'>
            <table className="bg-slate-50 rounded-md w-full overflow-x-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Monitor</TableHead>
                  <TableHead className="text-center">Segunda</TableHead>
                  <TableHead className="text-center">Terça</TableHead>
                  <TableHead className="text-center">Quarta</TableHead>
                  <TableHead className="text-center">Quinta</TableHead>
                  <TableHead className="text-center">Sexta</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.nome}>
                    <TableCell>{user.nome}</TableCell>
                    <TableCell>{user.horaIniSegPresencial !== "00:00" && (<>{user.horaIniSegPresencial} às {user.horaFimSegPresencial}</>)}</TableCell>
                    <TableCell>{user.horaIniTerPresencial !== "00:00" && (<>{user.horaIniTerPresencial} às {user.horaFimTerPresencial}</>)}</TableCell>
                    <TableCell>{user.horaIniQuaPresencial !== "00:00" && (<>{user.horaIniQuaPresencial} às {user.horaFimQuaPresencial}</>)}</TableCell>
                    <TableCell>{user.horaIniQuiPresencial !== "00:00" && (<>{user.horaIniQuiPresencial} às {user.horaFimQuiPresencial}</>)}</TableCell>
                    <TableCell>{user.horaIniSexPresencial !== "00:00" && (<>{user.horaIniSexPresencial} às {user.horaFimSexPresencial}</>)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </TabsContent>
          <TabsContent value="online" className='overflow-scroll'>
            <table className="bg-slate-50 rounded-md w-full overflow-x-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Monitor</TableHead>
                  <TableHead className="text-center">Segunda</TableHead>
                  <TableHead className="text-center">Terça</TableHead>
                  <TableHead className="text-center">Quarta</TableHead>
                  <TableHead className="text-center">Quinta</TableHead>
                  <TableHead className="text-center">Sexta</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.nome}>
                    <TableCell>{user.nome}</TableCell>
                    <TableCell>{user.horaIniSegOnline !== "00:00" && (<>{user.horaIniSegOnline} às {user.horaFimSegOnline}</>)}</TableCell>
                    <TableCell>{user.horaIniTerOnline !== "00:00" && (<>{user.horaIniTerOnline} às {user.horaFimTerOnline}</>)}</TableCell>
                    <TableCell>{user.horaIniQuaOnline !== "00:00" && (<>{user.horaIniQuaOnline} às {user.horaFimQuaOnline}</>)}</TableCell>
                    <TableCell>{user.horaIniQuiOnline !== "00:00" && (<>{user.horaIniQuiOnline} às {user.horaFimQuiOnline}</>)}</TableCell>
                    <TableCell>{user.horaIniSexOnline !== "00:00" && (<>{user.horaIniSexOnline} às {user.horaFimSexOnline}</>)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </TabsContent>
        </Tabs>
      </div>
      <div className="p-10">
        <p className="font-sans text-3xl text-center font-bold">
          Atendimento online
        </p>
      </div>
      <div className="flex items-center justify-center">
        <DropdownMonitor />
      </div>
    </main>
  );
}
