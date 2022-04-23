export default function getAPI(id) {
  return {
    getProductByProvince: `/products/${id}`,
  };
}
