import { useState, useEffect } from "react";

export default function ProductosFiltrables({ productos, categorias }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  useEffect(() => {
    const id = sessionStorage.getItem("categoriaSeleccionada");
    setCategoriaSeleccionada(id);
  }, []);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((p) => p.category.id === categoriaSeleccionada)
    : productos;

  return (
    <div>
      {/* Sección de categorías */}
      <section className="flex flex-wrap justify-center gap-x-16 gap-y-4 items-start bg-gray-100 py-10">
        {categorias.map((category) => (
          <div
            key={category.id}
            onClick={() => {
              setCategoriaSeleccionada(category.id);
              sessionStorage.setItem("categoriaSeleccionada", category.id);
            }}
            className={`flex flex-col items-center cursor-pointer transform duration-300 hover:-translate-y-2
        ${categoriaSeleccionada === category.id ? "scale-125" : ""}`}
          >
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url('${category.img}')` }}
            ></div>
            <h3 className="mt-2 text-center text-md font-medium max-w-[7rem] break-words">
              {category.name}
            </h3>
          </div>
        ))}

        {/* Botón centrado debajo */}
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={() => {
              setCategoriaSeleccionada(null);
              sessionStorage.removeItem("categoriaSeleccionada");
            }}
            className="px-6 py-3 rounded-2xl see-button bg-secondary-50"
          >
            Mostrar todos
          </button>
        </div>
      </section>

      {/* Título de la categoría seleccionada */}
      {categoriaSeleccionada && (
        <h2 className="text-3xl font-bold text-center text-secondary-50 mt-10 mx-5">
          {categorias.find((cat) => cat.id === categoriaSeleccionada)?.name}
        </h2>
      )}

      {/* Sección de productos */}
      <section className="grid grid-cols-1 px-5 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-10 place-items-center md:px-20">
        {productosFiltrados.map((producto) => (
          // Card de producto
          <div
            key={producto.id}
            className="rounded-lg overflow-hidden shadow-md bg-white relative border border-gray-200 fade-in w-65 h-[440px] transform duration-300 hover:-translate-y-2 hover:cursor-pointer"
            onClick={() => (window.location.href = `/producto/${producto.id}`)} // redirigir al detalle
          >
            <img
              src={producto.img}
              alt={producto.name}
              className="w-65 h-[240px] object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-bold text-secondary-50">
                {producto.name}
              </h3>
              <p className="text-sm text-gray-500">{producto.description}</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-secondary-100"></div>
          </div>
        ))}
        {productosFiltrados.length === 0 && (
          <div className="col-span-full text-center text-gray-500 fade-in">
            No hay productos en esta categoría.
          </div>
        )}
      </section>
    </div>
  );
}
