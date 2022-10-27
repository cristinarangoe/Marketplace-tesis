import React from "react";
import { useForm } from "react-hook-form";
import { Item } from "../../types";

type FormData = {
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
};

interface ItemProps {
  product: Item;
}

const FormEditProduct: React.FC<ItemProps> = ({ product }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center mx-auto bg-red-300 px-5 w-1/2"
      >
        <h2>
          Este es el formulario para añadir productos nuevos a tu catalogo:{" "}
        </h2>
        <div className="flex flex-col w-1/2">
          <label className="">Nombre del producto:</label>
          <input defaultValue={product.nombre} placeholder={product.nombre}
            {...register("name", {required: true })}
            className="mr-8 p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="">Precio del producto:</label>
          <input type="number" defaultValue={product.precio} placeholder={product.precio.toString()}
            {...register("price", { required: true })}
            className="mr-8 p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="">Descripción del producto:</label>
          <input defaultValue={product.descripcion} placeholder={product.descripcion}
            {...register("description", { required: true })}
            className="mr-8 p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="">URL de la imágen del producto</label>
          <input defaultValue={product.imagen} placeholder={product.imagen}
            {...register("image", { required: true })}
            className="mr-8 p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="">Cantidad de unidades en inventario</label>
          <input type="number" defaultValue={product.stock} placeholder={product.stock.toString()}
            {...register("stock", { required: true })}
            className="mr-8 p-1 rounded-md"
          />
        </div>

        <input
          type="submit"
          value="Añadir producto"
          className=" mt-5 mx-auto py-2 px-3 rounded-md bg-green-600"
        />
      </form>
    </div>
  );
};

export default FormEditProduct;
