export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark mt-5 py-5" role="contentinfo">
      <div className="container-xl">
        <p className="text-white text-center fs-4 mt-4 m-md-0">
          GuitarLA - Todos los derechos Reservados © {year}
        </p>
      </div>
    </footer>
  );
}