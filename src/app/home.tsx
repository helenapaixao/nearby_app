import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { api } from "@/services/api";
import { Categories, CategoriesProps } from "@/components/categories";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategories(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi possivel carregar as categorias");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
    </View>
  );
}
