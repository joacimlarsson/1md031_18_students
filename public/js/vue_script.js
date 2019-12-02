'use strict';
var socket = io();

var vm = new Vue({
  el: '#mainy',
  data: {
    array: [],
    hasordered: false,
    persinfo: [],
    orders: {},
    ordernr: 0,
    burgers: food,
    lactose: "Laktos",
    gluten: "Gluten",
    nolactose: "Laktosfri",
    nogluten: "Glutenfri",
    bestallt: ""
  },
  /*created: function() {
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
  },*/

  methods: {
    /*ÄmarkDone: function() {
      array = valueArray();
      this.bestallt = "Personuppgifter: " + array.toString().split(',').join(', ');

    },*/
    getNext: function() {
      this.ordernr += 1;
      return this.ordernr;

    },
    addOrder: function(event) {
      var location = this.orders.T.details;
      this.array = orderArray();
      this.persinfo = valueArray();
      this.hasordered = true;

      socket.emit("addOrder", {
        orderId: this.getNext(),
        details: location,
        orderItems: this.array,
        persinformation: this.persinfo
      });
    },
    displayOrder: function(event) {
      var location = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };
      this.orders = {
        "T": { /* ändrar orders key till T för alla. value är details. */
        details: {
          x: event.clientX - 10 - location.x,
          y: event.clientY - 10 - location.y
        }}
      }

    }
  }

})
