import { User } from "@/entities/User";
import { get, post, put } from "./httpService";
import { TokensCardPrice } from "@/entities/TokensCardPrice";

const defaultPath = "/user";

export const getUserData = async (): Promise<User | null> => {
  try {
    const result: any = await get<{ key: string }>(`${defaultPath}/me`, {});

    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const putUser = async (body: {
  nickname?: string;
  gender?: string;
  preferred_gender?: string;
  accepted_terms?: boolean;
  telegram_username?: string;
}): Promise<User | null> => {
  try {
    const result: any = await put<{ key: string }>(`${defaultPath}/me`, body);

    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const createCustomerSubscriptionPortal = async (body: {
  price: string;
  path: string;
}) => {
  return await post(`${defaultPath}/create-customer-subscription-portal`, body);
};

export const createCustomerPortal = async () => {
  return await post(`${defaultPath}/create-customer-portal`, {});
};

export const createProductPortal = async (body: {
  product: TokensCardPrice;
  path: string;
}) => {
  return await post(`${defaultPath}/create-product-portal`, body);
};

export const updateSubscription = async () => {
  return await put(`${defaultPath}/update-subscription`, {});
};

export const addTokens = async (body: { tokens: number }) => {
  return await put(`${defaultPath}/add-tokens`, { body });
};
