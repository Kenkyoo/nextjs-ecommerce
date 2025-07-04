const deleteWishes = async (productId: string) => {
  try {
    const res = await fetch(`/api/wishes/${productId}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("No se pudo eliminar el producto");
  } catch (error) {
    console.error("Error:", error);
  }
};

export default deleteWishes;
