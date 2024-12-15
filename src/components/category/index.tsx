import { Text, Pressable } from "react-native"
import type { PressableProps } from "react-native"

import { s } from "./styles"
import { colors } from "@/styles/theme"
import { categoriesIcons } from "@/utils/categories-icons"

type Props = PressableProps & {
  name: string
  iconId: string
  isSelected?: boolean
}

export function Category({ name, iconId, isSelected = false, ...rest }: Props) {
  const Icon = categoriesIcons[iconId]
  console.log(Icon, "icone")


  if (!Icon) {
    console.error(`Ícone não encontrado para o id: ${iconId}`);
    return <Text>Ícone não encontrado</Text>;  // Ou pode renderizar um ícone de fallback
  }

  return (
    <Pressable
      style={[s.container, isSelected && s.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>
  )
}