import z from "zod";

export const CustomerSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  full_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  verified: z.boolean().default(false),
  role: z.enum(["customer", "admin"]).default("customer"),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

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

export const SizeSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  code: z.string(),
});

export const ColorSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  color_code: z.string(),
});

export const ProductSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number(),
  categories: z.array(CategorySchema),
  images: z.array(ImageSchema),
  sizes: z.array(SizeSchema).optional(),
  colors: z.array(ColorSchema).optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
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

export const OrderItemSchema = z.object({
  id: z.number().optional(),
  documentId: z.string().optional(),
  product: ProductSchema,
  quantity: z.number().default(0),
  sub_total: z.number().default(0),
  size: SizeSchema.optional(),
  color: ColorSchema.optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export const OrderSchema = z.object({
  id: z.number().optional(),
  documentId: z.string().optional(),
  customer: CustomerSchema,
  order_items: z.array(OrderItemSchema),
  order_status: z
    .enum(["pending", "shipped", "delivered", "cancelled"])
    .default("pending"),
  total: z.number(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

// export type
export type Image = z.infer<typeof ImageSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Pagination = z.infer<typeof PaginationSchema>;
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type Order = z.infer<typeof OrderSchema>;
export type Customer = z.infer<typeof CustomerSchema>;
