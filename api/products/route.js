import { NextResponse } from "next/server";
import { getOneProduct} from "./data";

export const GET = async () => {
    const products = await getOneProduct();
    return NextResponse.json(products);
}