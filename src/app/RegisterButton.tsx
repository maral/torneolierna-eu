"use client";

export function RegisterButton() {
  const handleScrollToRegister = () => {
    const registerSection = document.getElementById("register-section");
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="bg-accent text-white px-12 py-2 uppercase rounded-xl hover:bg-[#de0000] transition-colors"
      onClick={handleScrollToRegister}
    >
      Iscriviti ora
    </button>
  );
}
