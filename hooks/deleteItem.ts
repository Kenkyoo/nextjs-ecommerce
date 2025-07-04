const deleteItem = async (productId: string) => {
  try {
    const res = await fetch(`/api/cart/${productId}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("No se pudo eliminar el producto");
  } catch (error) {
    console.error("Error:", error);
  }
};

export default deleteItem;
