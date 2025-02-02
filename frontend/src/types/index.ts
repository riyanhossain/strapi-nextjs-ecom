import z from "zod";

export const ImageSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  url: z.string(),
  formats: z.object({
    thumbnail: z
      .object({
        url: z.string(),
      })
      .optional(),
    large: z
      .object({
        url: z.string(),
      })
      .optional(),
    medium: z
      .object({
        url: z.string(),
      })
      .optional(),
    small: z
      .object({
        url: z.string(),
      })
      .optional(),
  }),
});

export const CategorySchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  description: z.string().optional(),
});

export const ProductSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number(),
  stock_quantity: z.number(),
  category: CategorySchema,
  images: z.array(ImageSchema),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

// // api response schema
export const CategoriesSchema = z.object({
  data: z.array(CategorySchema),
});

// Define pagination schema
const PaginationSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  pageCount: z.number(),
  total: z.number(),
});

export const ProductsSchema = z.object({
  data: z.array(ProductSchema),
  meta: z.object({
    pagination: PaginationSchema,
  }),
});

// export type
export type Image = z.infer<typeof ImageSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Pagination = z.infer<typeof PaginationSchema>;
