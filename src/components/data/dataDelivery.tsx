export type deliveryType = Record<string,Record<string,Record<string,number | Date | boolean>>>;

export const  deliveryData : deliveryType = {
  UPS: {
    Instant: {
      id: 1,
      Price: 22,
      Arrival: new Date(),
      active: true
    },
    Standard: {
      id: 2,
      Price:12,
      Arrival:  new Date((new Date()).setDate((new Date()).getDate() +5)),
      active: false
    }
  },

  FedEX: {
    Instant: {
      id: 1,
      Price: 24,
      Arrival: new Date(),
      active: true
    },
    Standard: {
      id: 2,
      Price: 11,
      Arrival: new Date((new Date().setDate((new Date()).getDate() +6))),
      active: false
    }
  },

  DHL: {
    Instant: {
      id: 1,
      Price: 23,
      Arrival: new Date(),
      active: true
    },
    Standard: {
      id: 2,
      Price: 10,
      Arrival: new Date((new Date().setDate(new Date().getDate() +7))),
      active:false
    }
  }
}
