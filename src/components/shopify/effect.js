async function fetchProducts() {
    await axios({
      method: "get",
      url: "https://dummyjson.com/products",
      responseType: "json",
    })
      .then((res) => {
        setProductsList(res.data.products);
        setLoading(false);
        setError(null);
        setSort("rating");
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    }