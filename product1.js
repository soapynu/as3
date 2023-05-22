document.addEventListener('DOMContentLoaded', function() {
  const products = [
    {
      image: 'PIC/j1.jpg',
      title: 'Product 1',
      description: 'This is a very cool product',
      price: '999 ₸'
    },
    {
      image: 'PIC/j2.jpg',
      title: 'Product 2',
      description: 'This is a very cool product',
      price: '999 ₸'
    },
    {
      image: 'PIC/j3.jpg',
      title: 'Product 3',
      description: 'This is a very cool product',
      price: '999 ₸'
    },
    {
      image: 'PIC/j4.jpg',
      title: 'Product 4',
      description: 'This is a very cool product',
      price: '999 ₸'
    },
    {
      image: 'PIC/j5.jpg',
      title: 'Product 5',
      description: 'This is a very cool product',
      price: '999 ₸'
    },
    {
      image: 'PIC/j6.jpg',
      title: 'Product 6',
      description: 'This is a very cool product',
      price: '999 ₸'
    }
  ];

  const container = document.getElementById('product-container');
  const modalContainer = document.getElementById('modal-container');
  const form = document.getElementById('payment-form');

  const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('card').value;
  // Iterate over the products and generate HTML for each product
  products.forEach(product => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-lg-4', 'col-md-6', 'col-12');

    const blockDiv = document.createElement('div');
    blockDiv.classList.add('block');

    const productImgDiv = document.createElement('div');
    productImgDiv.classList.add('product_img');

    const imgElement = document.createElement('img');
    imgElement.src = product.image;
    imgElement.alt = 'Product_img';

    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const titleElement = document.createElement('h3');
    titleElement.textContent = product.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = product.description;

    const priceElement = document.createElement('p');
    priceElement.classList.add('price');
    priceElement.textContent = product.price;

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Purchase';
    buttonElement.addEventListener('click', function() {
      modalContainer.style.display = 'block';
    });

    productImgDiv.appendChild(imgElement);
    productDiv.appendChild(titleElement);
    productDiv.appendChild(descriptionElement);
    productDiv.appendChild(priceElement);
    productDiv.appendChild(buttonElement);
    blockDiv.appendChild(productImgDiv);
    blockDiv.appendChild(productDiv);
    colDiv.appendChild(blockDiv);
    container.appendChild(colDiv);
  });

  // Add event listener to the form's submit button
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Perform form submission logic here
    console.log('Submitted Information:');
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Debit Card Number:', cardNumber);
    // Hide the modal container after form submission
    modalContainer.style.display = 'none';
  });
});




