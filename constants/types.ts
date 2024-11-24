export interface SocialAuthArgs {
  provider: string;
  state: string;
  code: string;
}

export interface CreateUserResponse {
  success: boolean;
  product: Product;
}

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
}

export interface ProductState {
  items: object[];
  searchQuery: string;
  status: null;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  decription: string;
  category: Category;
  filter_type: string;
  status: string;
  apps: Application[];
}
export interface Application {
  id: number;
  name: string;
  manufacturer: string;
}

export interface CartProduct {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
}

export interface OrderItem {
  product: number;
  price: number;
  quantity: number;
}

export interface Order {
  user_name: string;
  address: string;
  phone: string;
  city: string;
  items: OrderItem[];
}
