class NumberService {

  private minRange = 1;
  private maxRange = 100000;

  /**
   * Get random number from the range
   */
  getRandomNumber(): number {
    return Math.floor(Math.random() * (this.maxRange - this.minRange) + this.minRange);
  }

}

export default new NumberService();
