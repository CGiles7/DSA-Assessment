class ParkingLot {
  constructor(totalSpaces, rate) {
    this.totalSpaces = totalSpaces;
    this.rate = rate;
    this.vacantSpaces = totalSpaces;
    this.occupants = new Array(totalSpaces).fill(null).map((_, index) => ({ space: index + 1, licensePlateNumber: "vacant" }));
    this.queue = new Queue();
    this.totalRevenue = 0;
  }

  enter(licensePlateNumber) {
    if (this.vacantSpaces > 0) {
      const vacantIndex = this.occupants.findIndex((occupant) => occupant.licensePlateNumber === "vacant");
      if (vacantIndex !== -1) {
        const space = vacantIndex + 1;
        this.occupants[vacantIndex] = { space, licensePlateNumber };
        this.vacantSpaces--;
      }
    } else {
      this.queue.enqueue(licensePlateNumber);
    }
  }

  leave(licensePlateNumber) {
    const index = this.occupants.findIndex((occupant) => occupant.licensePlateNumber === licensePlateNumber);
    if (index !== -1) {
      this.occupants[index] = { space: index + 1, licensePlateNumber: "vacant" };
      this.vacantSpaces++;
      this.totalRevenue += this.rate;
      this.parkFromQueue();
    } else {
      this.queue.remove(licensePlateNumber); // Add this line to remove the car from the queue.
    }
  }

  parkFromQueue() {
    if (!this.queue.isEmpty() && this.vacantSpaces > 0) {
      const licensePlateNumber = this.queue.dequeue();
      const vacantIndex = this.occupants.findIndex((occupant) => occupant.licensePlateNumber === "vacant");
      const space = vacantIndex + 1;
      this.occupants[vacantIndex] = { space, licensePlateNumber };
      this.vacantSpaces--;
      this.parkFromQueue();
    }
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = ParkingLot;