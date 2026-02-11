export default function Footer() {
  return (
    <footer className="bg-[#E0A08F] border-t border-[#5A3E36]/40 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">

        <p className="font-heading text-xl text-[#5A3E36] tracking-tight">
          Dr. Maya Reynolds, PsyD
        </p>

        <p className="text-[#5A3E36]/90 text-sm tracking-wide">
          Santa Monica, California
        </p>

        <div className="pt-6 text-xs text-[#5A3E36]/70 tracking-widest">
          © {new Date().getFullYear()} All Rights Reserved
        </div>

      </div>
    </footer>
  );
}


