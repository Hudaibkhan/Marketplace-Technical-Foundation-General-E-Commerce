export default {
  name: "product",
  type: "document",
  fields: [
    { name: "id", type: "number", title: "Unique identifier" },
    { name: "name", type: "string", title: "Product Name" },
    { name: "price", type: "number", title: "Price" },
    { name: "stock", type: "number", title: "Stock Level" },
    {
      name: "category",
      type: "array",
      title: "Category",
      of: [
        {
          type: "string",
        },
      ],
    },
    { name: "tags", type: "string", title: "Key word for serch (e.g. tag)" },
    { name: "description", type: "string", title: "Product Description" },
  ],
};
