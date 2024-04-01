import Main from "@/components/Main";
import Section from "@/components/Section";
import Test from "@/components/Test";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div>
        <Test />
        <Section />
        <Main />
      </div>
    </main>
  );
}
