import BalanceArea from "./balanceArea";
import WelcomeArea from "./WelcomeArea";

export default function DashboardCenterArea() {
  return (
    <section className="bg-primary h-[420px] rounded-2xl flex flex-row w-[50%] mx-big justify-between p-big">
      <WelcomeArea></WelcomeArea>
      <BalanceArea></BalanceArea>
    </section>
  );
}
