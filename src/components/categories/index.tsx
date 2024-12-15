import { View } from "react-native";
import { Category } from "../category";


export type CategoriesProps = {
  id: string,
  name: string
}

type Props = {
  data:CategoriesProps
}

export function Categories({data}:Props) {
  return (
  <View>
    <Category name="Teste"/>
    <Category name="Teste"/>
    <Category name="Teste"/>
    <Category name="Teste"/>
    <Category name="Teste"/>
  </View>
)
}