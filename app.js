// With God's Help

const getProducts = async () => {
  const res = await fetch("http://localhost:8000/api/products/");
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Your Server Is Not Working!");
  }
};

const main = async () => {
  const data = await getProducts();
  data.forEach((element) => {
    element.quantity = Math.round(Math.random() * 10);
  });
  console.log(data);
  const homeLoad = () => {
    window.location.reload();
  };
  const createElement = (type, anchorElement, node = "") => {
    const ELEMENT = document.createElement(type);
    anchorElement.appendChild(ELEMENT);
    ELEMENT.textContent = node;
    return ELEMENT;
  };
  const firstLoad = async () => {
    console.log(data);
    data.forEach((product, p_index) => {
      addCards(product, p_index);
      ARRAY_NAV_ITEMS[0].style.backgroundColor = SELECTED;
    });
  };
  const createIcon = (name, anchorElement) => {
    const ICON = createElement("i", anchorElement, name);
    ICON.classList.add("material-icons");
    ICON.classList.add("noselect");
    return ICON;
  };
  const loadProductInfo = (card, product, counter) => {
    card.addEventListener("click", () => {
      HOME.style.display = "none";
      PRODUCT_PAGE.id = "product_page_on";
      let productPageHeader = createElement("div", PRODUCT_PAGE);
      productPageHeader.id = "product_page_header";
      let topButtonsDiv = createElement("div", productPageHeader);
      topButtonsDiv.classList.add("top_buttons_div");
      let goBackButton = createIcon("keyboard_backspace", topButtonsDiv);
      goBackButton.id = "go_back_button_product_page";
      let goHomeButton = createIcon("home", topButtonsDiv);
      goHomeButton.id = "home_button_product_page";
      goHomeButton.addEventListener("click", homeLoad);
      let productPageMainTitle = createElement("div", productPageHeader);
      productPageMainTitle.textContent = "Product Page";
      productPageMainTitle.id = "product_page_main_title";
      let productTitle = product.title;
      let productInfo = createElement("div", PRODUCT_PAGE);
      productInfo.id = "product_info";
      let productImageDiv = createElement("div", productInfo);
      productImageDiv.id = "product_page_image_div";
      let productImage = createElement("img", productImageDiv);
      productImage.src = product.image;
      productImage.id = "product_page_image";
      let productTextInfo = createElement("div", productInfo);
      productTextInfo.classList.add("product_text_info");
      let title = createElement("div", productTextInfo, "Title");
      title.classList.add("product_titles");
      let productTitleText = createElement(
        "div",
        productTextInfo,
        productTitle
      );
      productTitleText.classList.add("product_text");
      let productDescription = product.description;
      let description = createElement("div", productTextInfo, "Description");
      description.classList.add("product_titles");
      let productDescriptionText = createElement(
        "div",
        productTextInfo,
        productDescription
      );
      productDescriptionText.classList.add("product_text");
      let category = createElement("div", productTextInfo, "Category");
      category.classList.add("product_titles");
      let productCategory = product.category;
      let productCategoryText = createElement(
        "div",
        productTextInfo,
        productCategory
      );
      productCategoryText.classList.add("product_text");
      let price = createElement("div", productTextInfo, "Price");
      price.classList.add("product_titles");
      let productPrice = product.price;
      let productPriceText = createElement(
        "div",
        productTextInfo,
        `$${productPrice}`
      );
      productPriceText.classList.add("product_text");
      let quantity = createElement("div", productTextInfo, "Quantity");
      quantity.classList.add("product_titles");
      let productQuantity = product.quantity;
      let productQuantityText = createElement(
        "div",
        productTextInfo,
        productQuantity
      );
      goBackButton.addEventListener("click", () => {
        HOME.style.display = "block";
        PRODUCT_PAGE.id = "product_page";
        while (PRODUCT_PAGE.firstChild) {
          PRODUCT_PAGE.removeChild(PRODUCT_PAGE.firstChild);
        }
      });
    });
  };
  const loadEditPage = (
    edit_button,
    product,
    index,
    productTitle,
    productQuantity
  ) => {
    edit_button.addEventListener("click", () => {
      HOME.style.display = "none";
      EDIT_PAGE.id = "edit_page_on";
      let productPageHeader = createElement("div", EDIT_PAGE);
      productPageHeader.id = "product_page_header";
      let topButtonsDiv = createElement("div", productPageHeader);
      topButtonsDiv.classList.add("top_buttons_div");
      let goBackButton = createIcon("keyboard_backspace", topButtonsDiv);
      goBackButton.id = "go_back_button_product_page";
      let pageViewButton = createIcon("pageview", topButtonsDiv);
      pageViewButton.id = "go_back_button_product_page";

      loadAddProductPage(pageViewButton);

      let goHomeButton = createIcon("home", topButtonsDiv);
      goHomeButton.id = "home_button_product_page";
      goHomeButton.addEventListener("click", homeLoad);
      let productPageMainTitle = createElement("div", productPageHeader);
      productPageMainTitle.textContent = "Edit Page";
      productPageMainTitle.id = "product_page_main_title";
      let container = createElement("div", EDIT_PAGE);
      container.id = "edit_page_container";
      let title = createElement("div", container, "Title");
      title.classList.add("product_titles");
      let title_data = product.title;
      let title_input = createElement("input", container);
      title_input.value = title_data;
      title_input.classList.add("edit_input");
      let category = createElement("div", container, "Category");
      category.classList.add("product_titles");
      let category_data = product.category;
      let category_input = createElement("input", container);
      category_input.value = category_data;
      category_input.classList.add("edit_input");
      let price = createElement("div", container, "Price");
      price.classList.add("product_titles");
      let price_data = product.price;
      let price_input = createElement("input", container);
      price_input.value = price_data;
      price_input.classList.add("edit_input");
      let image = createElement("div", container, "Image URL");
      image.classList.add("product_titles");
      let image_data = product.image;
      let image_input = createElement("input", container);
      image_input.value = image_data;
      image_input.classList.add("edit_input");
      let quantity = createElement("div", container, "Quantity");
      quantity.classList.add("product_titles");
      let quantity_data = product.quantity;
      let quantity_input = createElement("input", container);
      quantity_input.value = quantity_data;
      quantity_input.classList.add("edit_input");
      let description = createElement("div", container, "Description");
      description.classList.add("product_titles");
      let description_data = product.description;
      let description_input = createElement("textarea", container);
      description_input.value = description_data;
      description_input.classList.add("edit_input");
      let editButton = createElement("button", container, "SAVE EDIT");
      editButton.id = "edit_button";
      editButton.addEventListener("click", () => {
        let title_final_data = title_input.value;
        let category_final_data = category_input.value;
        let price_final_data = price_input.value;
        let image_final_data = image_input.value;
        let quantity_final_data = quantity_input.value;
        let description_final_data = description_input.value;
        data[index].title = title_final_data;
        data[index].category = category_final_data;
        data[index].price = price_final_data;
        data[index].image = image_final_data;
        data[index].quantity = quantity_final_data;
        data[index].description = description_final_data;
        productTitle.textContent = title_final_data;
        productQuantity.textContent = quantity_final_data;
        updateItem(data[index]);
        console.log(data[index]);
      });
      goBackButton.addEventListener("click", () => {
        HOME.style.display = "block";
        EDIT_PAGE.id = "product_page";
        while (EDIT_PAGE.firstChild) {
          EDIT_PAGE.removeChild(EDIT_PAGE.firstChild);
        }
      });
    });
  };
  const loadAddProductPage = (edit_button) => {
    edit_button.addEventListener("click", () => {
      HOME.style.display = "none";
      ADD_PRODUCT_PAGE.id = "edit_page_on";
      EDIT_PAGE.id = "edit_page";
      let productPageHeader = createElement("div", ADD_PRODUCT_PAGE);
      productPageHeader.id = "product_page_header";
      let topButtonsDiv = createElement("div", productPageHeader);
      topButtonsDiv.classList.add("top_buttons_div");
      let goBackButton = createIcon("keyboard_backspace", topButtonsDiv);
      goBackButton.id = "go_back_button_product_page";
      let goHomeButton = createIcon("home", topButtonsDiv);
      goHomeButton.id = "home_button_product_page";
      goHomeButton.addEventListener("click", homeLoad);
      let productPageMainTitle = createElement("div", productPageHeader);
      productPageMainTitle.textContent = "Add New Product";
      productPageMainTitle.id = "product_page_main_title";
      let container = createElement("div", ADD_PRODUCT_PAGE);
      container.id = "edit_page_container";
      let title = createElement("div", container, "Title");
      title.classList.add("product_titles");
      let title_input = createElement("input", container);
      title_input.placeholder = "Add Title...";
      title_input.classList.add("edit_input");
      let category = createElement("div", container, "Category");
      category.classList.add("product_titles");
      let category_input = createElement("input", container);
      category_input.placeholder = "Add Category...";
      category_input.classList.add("edit_input");
      let price = createElement("div", container, "Price");
      price.classList.add("product_titles");
      let price_input = createElement("input", container);
      price_input.placeholder = "Add Price...";
      price_input.classList.add("edit_input");
      let image = createElement("div", container, "Image URL");
      image.classList.add("product_titles");
      let image_input = createElement("input", container);
      image_input.placeholder = "Add Image URL...";
      image_input.classList.add("edit_input");
      let quantity = createElement("div", container, "Quantity");
      quantity.classList.add("product_titles");
      let quantity_input = createElement("input", container);
      quantity_input.placeholder = "Add Quantity...";
      quantity_input.classList.add("edit_input");
      let description = createElement("div", container, "Description");
      description.classList.add("product_titles");
      let description_input = createElement("textarea", container);
      description_input.placeholder = "Add Description...";
      description_input.classList.add("edit_input");
      let saveButton = createElement("button", container, "ADD");
      saveButton.id = "edit_button";
      const product = {};
      saveButton.addEventListener("click", () => {
        product.title = title_input.value;
        product.category = category_input.value;
        product.price = price_input.value;
        product.image = image_input.value;
        product.quantity = quantity_input.value;
        product.description = description_input.value;
        data.push(product);
        addCards(product);
      });
      goBackButton.addEventListener("click", () => {
        HOME.style.display = "block";
        ADD_PRODUCT_PAGE.id = "product_page";
        while (ADD_PRODUCT_PAGE.firstChild) {
          ADD_PRODUCT_PAGE.removeChild(ADD_PRODUCT_PAGE.firstChild);
        }
      });
    });
  };
  const addCards = (product, index) => {
    let cardListUpdated = [...cardList];
    const CARD = createElement("div", MAIN);
    CARD.classList.add("card");
    let imageDiv = createElement("div", CARD);
    imageDiv.classList.add("image_div");
    let image = product.image;
    let imgElement = createElement("img", imageDiv);
    imgElement.src = image;
    imgElement.classList.add("product_image");
    let productTitle = createElement("div", CARD, product.title);
    productTitle.classList.add("product_title");
    let separate = createElement("div", CARD, "__________________");
    separate.classList.add("separate");
    let amount = createElement("div", CARD);
    amount.classList.add("amount");
    let plus_circle = createElement("div", amount);
    plus_circle.classList.add("plus_minus_circle");
    plus_circle.classList.add("noselect");
    let plus = createElement("div", plus_circle, "+1");
    let amount_circle = createElement("div", amount);
    amount_circle.classList.add("amount_circle");
    let count = createElement("div", amount_circle, product.quantity);
    let minus_circle = createElement("div", amount);
    minus_circle.classList.add("plus_minus_circle");
    minus_circle.classList.add("noselect");
    let minus = createElement("div", minus_circle, "-1");
    plus.addEventListener("click", (event) => {
      event.stopPropagation();
      product.quantity++;
      count.textContent = product.quantity;
    });
    minus.addEventListener("click", (event) => {
      event.stopPropagation();
      if (product.quantity >= 1) {
        product.quantity--;
        count.textContent = product.quantity;
      }
    });
    let bottom_icons_div = createElement("div", CARD);
    bottom_icons_div.classList.add("bottom_icons_div");
    let delete_edit_div = createElement("div", bottom_icons_div);
    let delete_icon = createIcon("delete", delete_edit_div);
    let edit_icon = createIcon("edit", delete_edit_div);
    delete_icon.classList.add("low_card_buttons");
    edit_icon.classList.add("low_card_buttons");
    loadEditPage(edit_icon, product, index, productTitle, count);
    if (product.rating.rate > 4.5) {
      let favorite_icon = createIcon("star", bottom_icons_div);
      favorite_icon.classList.add("favorite_icon");
    }

    loadProductInfo(productTitle, product);
    delete_icon.addEventListener("click", () => {
      MAIN.removeChild(CARD);
      deleteItem(product);
      console.log(index, cardList[index]);
    });
  };

  const loadCards = async () => {
    ARRAY_NAV_ITEMS.forEach((element, index) => {
      element.addEventListener("click", () => {
        while (MAIN.firstChild) {
          MAIN.removeChild(MAIN.firstChild);
        }
        element.style.backgroundColor = SELECTED;
        let children = element.children[0];
        if (children.textContent === "Men") {
          data.forEach((product, p_index) => {
            if (product.category === "men's clothing") {
              addCards(product, p_index);
            }
          });
        }
        if (children.textContent === "Women") {
          data.forEach((product, p_index) => {
            if (product.category === "women's clothing") {
              addCards(product, p_index);
            }
          });
        }
        if (children.textContent === "Jewelry") {
          data.forEach((product, p_index) => {
            if (product.category === "jewelery") {
              addCards(product, p_index);
            }
          });
        }
        if (children.textContent === "Electronics") {
          data.forEach((product, p_index) => {
            if (product.category === "electronics") {
              addCards(product, p_index);
            }
          });
        }
        if (children.textContent === "All Products") {
          data.forEach((product, p_index) => {
            addCards(product, p_index);
          });
        }
        ARRAY_NAV_ITEMS.forEach((element1, index1) => {
          if (index1 !== index) {
            element1.style.backgroundColor = UNSELECTED;
          }
        });
      });
    });
  };
  const deleteItem = async (product) => {
    const reqOptions = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      params: { id: product.id },
    };
    const req = await fetch(
      `http://localhost:8000/api/products/${product.id}/delete`,
      reqOptions
    );
    const result = await req.json();
    console.log(result);
  };
  const updateItem = async (product) => {
    const reqOptions = {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
      params: { id: product.id },
    };
    const req = await fetch(
      `http://localhost:8000/api/products/${product.id}`,
      reqOptions
    );
    const result = await req.json();
    console.log(result);
  };
  const addProduct = async (product) => {
    const reqOptions = {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
      params: { id: product.id },
    };
    const req = await fetch(
      `http://localhost:8000/api/products/${product.id}`,
      reqOptions
    );
    const result = await req.json();
    console.log(result);
  };
  const HOME = document.getElementById("home");
  const HOME_ICON = document.getElementById("home_icon");
  HOME_ICON.addEventListener("click", homeLoad);
  const ADD_PRODUCT_ICON = document.getElementById("add_product_icon");
  const HEADER = document.getElementById("header");
  const FOOTER = document.getElementById("footer");
  const NAVIGATOR = document.getElementById("navigator");
  const MAIN = document.getElementById("main");
  const NAV_ITEMS = document.getElementsByClassName("nav_item");
  const ARRAY_NAV_ITEMS = [...NAV_ITEMS];
  const SELECTED = "#ffdecb";
  const UNSELECTED = "#ffbf9b";
  const currentProducts = [];
  const PRODUCT_PAGE = document.getElementById("product_page");
  const SEARCH_BAR = document.getElementById("search_bar");
  const EDIT_PAGE = document.getElementById("edit_page");
  const ADD_PRODUCT_PAGE = document.getElementById("add_product");
  let cardList = document.getElementsByClassName("card");
  loadAddProductPage(ADD_PRODUCT_ICON);

  firstLoad();
  loadCards();
  const MAIN_CHILDREN = [...MAIN.children];
  SEARCH_BAR.addEventListener("input", () => {
    if (SEARCH_BAR.value === "") {
      while (MAIN.firstChild) {
        MAIN.removeChild(MAIN.firstChild);
      }
      for (let i = 0; i < MAIN_CHILDREN.length; i++) {
        MAIN.appendChild(MAIN_CHILDREN[i]);
      }
    } else {
      while (MAIN.firstChild) {
        MAIN.removeChild(MAIN.firstChild);
      }
      for (let i = 0; i < MAIN_CHILDREN.length; i++) {
        let mainChildrenTextContent =
          MAIN_CHILDREN[i].textContent.toLowerCase();
        let searchBarValue = SEARCH_BAR.value.toLowerCase();
        if (mainChildrenTextContent.includes(searchBarValue)) {
          MAIN.appendChild(MAIN_CHILDREN[i]);
        }
      }
    }
  });
};

addEventListener("load", main);
