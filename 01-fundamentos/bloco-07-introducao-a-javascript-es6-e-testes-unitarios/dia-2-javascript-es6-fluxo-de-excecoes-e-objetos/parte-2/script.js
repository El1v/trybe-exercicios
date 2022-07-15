const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },

  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// console.table(order.order.delivery);

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const clientPerson = order.name;
  const clientPhoneNumber = order.phoneNumber;
  const clientStreet = order.address.street;
  const clientNumber = order.address.number;
  const clientApartment = order.address.apartment;

  console.log(`Ola ${deliveryPerson}, entrega para ${clientPerson}, Telefone ${clientPhoneNumber}, R. ${clientStreet}, N: ${clientNumber}, AP:${clientApartment}`);
}

customerInfo(order);


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const pizzas = Object.keys(order.order.pizza);
  const bebidas = order.order.drinks.coke.type;
  
  console.log(`Ola ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebidas} e R$${order.payment.total},00`);
}

orderModifier(order);
