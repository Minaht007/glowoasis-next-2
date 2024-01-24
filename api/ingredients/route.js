import { NextResponse } from "next/server";
import { getOneIngredient} from "./data";

export const GET = async () => {
    const products = await getOneIngredient();
    return NextResponse.json(products);
}