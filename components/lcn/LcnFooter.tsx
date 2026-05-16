export const LcnFooter = () => {
  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.04] py-4 sm:py-5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col items-center">
        <img src="/LCNLogo.png" alt="LCN" className="h-24 w-auto opacity-50" />
        <p className="text-[11px] text-white/20 pb-4">
          © {new Date().getFullYear()} Comunidade LCN. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
