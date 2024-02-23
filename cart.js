function openCart() {
    modalBody.innerHTML += `
      <table class="table">
      <thead>
        <th>Img</th>
        <th>Name</th>
        <th>Price</th>
        <th>Total Price</th>
        <th>Quantity</th>
      </thead>
      <tbody id="tBody">
      <tr id="${item.id}">
        <td>
          <img
        src="${item.img}"
        style="width: 50px; height: 50px"
          />
        </td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td id="cardQ${item.id}">${item.stock}</td>
        <td>
          <button class="btn btn-success" onclick="incrementItemQuantity(${item.id})" type="button">+</button>
          <button class="btn btn-danger" onclick="decrementItemQuantity(${item.id})" type="button">-</button>
        </td>
      </tr>
      </tbody>
    </table>
      `;
}