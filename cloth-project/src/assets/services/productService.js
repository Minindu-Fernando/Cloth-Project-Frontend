export const fetchProducts = async () => {
    try {
        const response = await fetch("http://localhost:8080/products");
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};