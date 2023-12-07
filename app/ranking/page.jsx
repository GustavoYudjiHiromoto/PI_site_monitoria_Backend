"use client";
import { Navbar } from "@/components/organisms/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function getdata() {
  const res = await fetch("http://127.0.0.1:8080/consultar_rank");
  const users = await res.json();
  return users;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function TelaRanking() {
  const users = await getdata();
  const posicao = [
    { posicao: 1 },{posicao:2},{posicao:3},{posicao:4},{posicao:5},{posicao:6},{posicao:7},{posicao:8},{posicao:9},{posicao:10},
  ]
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans scroll-smooth">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">
          Ranking dos Alunos
        </p>
      </div>
      <div className="rounded-lg border-2 border-slate-900 w-80 sm:w-[500px] md:w-[752px] lg:w-[1000px] xl:w-[1264px] mt-4">
        <Table className="bg-slate-50 rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="py-6 text-center">Posição</TableHead>
              <TableHead className="py-6 text-center">Nome</TableHead>
              <TableHead className="py-6 text-center">Pontuação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {posicao.map((pos, index) => (
              <TableRow className="text-center" key={index}>
                <TableCell className="font-medium py-5">{pos.posicao}</TableCell>
                <TableCell className="py-5">{users[index]?.nomealuno || '-'}</TableCell>
                <TableCell className="text-center py-5">{users[index]?.pontuacao || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
