class Phone {
  battery = 0;
  screen = 0;
  signal = 0;

  constructor(name = "") {
    this.name = name;
  }

  connectWifi() {
    console.log("this phone has battery :", this.battery);
    console.log("this phone has signal :", this.signal);
    if (this.signal > 50 && this.battery > 20) {
      console.log("succes to connect");
    } else {
      console.log("failed to connect");
    }
  }

  succsesConnect() {
    console.log("succes to connect");
  }
}

const iphone = new Phone("Iphone 15");
iphone.signal = 70;
iphone.battery = 80;
console.log(iphone.signal);
