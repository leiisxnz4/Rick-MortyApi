export default function Guitar() {

  console.log(Guitar.nombre)

  return (
    <>
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${ Guitar.imagen }.jpg`} alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{ Guitar.nombre }</h3>
        <p>{ Guitar.descripcion }</p>
        <p className="fw-bold text-primary fs-3">${ Guitar.precio }</p>
        <button
          type="button"
          className="btn btn-dark w-100"
        >Agregar al Carrito</button>
      </div>
    </div>
  );
  </>
  )
}